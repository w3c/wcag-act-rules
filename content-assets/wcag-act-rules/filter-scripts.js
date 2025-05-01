/**
 * WCAG Success Criteria filtering script
 * Provides functionality to filter criteria based on conformance level and rule status
 * Default: Level AAA criteria and secondary rules are hidden, proposed rules are shown
 */
(function() {
  // Wait for DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    // Get all filter checkboxes for conformance levels
    const levelACheckbox = document.getElementById('level-a');
    const levelAACheckbox = document.getElementById('level-aa');
    const levelAAACheckbox = document.getElementById('level-aaa');

    // Get rule status filter checkboxes
    const showProposedCheckbox = document.getElementById('show-proposed');
    const showAutomatedCheckbox = document.getElementById('show-automated');

    // Check if we have any filter checkboxes
    if ((!levelACheckbox && !levelAACheckbox && !levelAAACheckbox) && 
        (!showProposedCheckbox && !showAutomatedCheckbox)) { 
       return; // Exit early if no checkboxes are found
    }
    
    // Set default states
    if (levelAAACheckbox) {
      levelAAACheckbox.checked = false; // AAA criteria hidden by default
    }
    
    // Get all success criteria elements
    const allCriteria = document.querySelectorAll('.sc-item');
    
    // Get status bar elements
    const ruleCountSpan = document.getElementById('visible-rule-count');
    const criteriaWithRulesCountSpan = document.getElementById('criteria-with-rules-count');
    const totalSelectedCriteriaCountSpan = document.getElementById('total-selected-criteria-count');
    
    // Apply initial state
    updateVisibility();
    updateStatusBar(); // Initial count update
    
    // Add event listeners to checkboxes
    if (levelACheckbox) {
      levelACheckbox.addEventListener('change', updateVisibility);
    }
    if (levelAACheckbox) {
      levelAACheckbox.addEventListener('change', updateVisibility);
    }
    if (levelAAACheckbox) {
      levelAAACheckbox.addEventListener('change', updateVisibility);
    }
    if (showProposedCheckbox) {
      showProposedCheckbox.addEventListener('change', updateVisibility);
    }
    if (showAutomatedCheckbox) {
      showAutomatedCheckbox.addEventListener('change', updateVisibility);
    }
    
    /**
     * Helper function to toggle element visibility
     * @param {Element} element - The element to show or hide
     * @param {boolean} show - Whether to show (true) or hide (false) the element
     */
    function toggleVisibility(element, show) {
      if (show) {
        element.removeAttribute('hidden');
      } else {
        element.setAttribute('hidden', 'hidden');
      }
    }
    
    /**
     * Updates the visibility of criteria based on checkbox states
     */
    function updateVisibility() {
      // Get current checkbox states for conformance levels
      const showLevelA = levelACheckbox ? levelACheckbox.checked : true;
      const showLevelAA = levelAACheckbox ? levelAACheckbox.checked : true;
      const showLevelAAA = levelAAACheckbox ? levelAAACheckbox.checked : false;
      
      // Get current checkbox states for rule status
      const showProposed = showProposedCheckbox ? showProposedCheckbox.checked : true; 
      const showAutomated = showAutomatedCheckbox ? showAutomatedCheckbox.checked : true; 
      
      // Filter criteria (now just based on rules)
      let visibleCount = 0;
      allCriteria.forEach(function(criterion) {
        // Show all criteria initially, filtering happens at the rule level
        // Check the class of the criterion
        let shouldShow = false;
        
        if (criterion.classList.contains('level-a') && showLevelA) {
          shouldShow = true;
        } else if (criterion.classList.contains('level-aa') && showLevelAA) {
          shouldShow = true;
        } else if (criterion.classList.contains('level-aaa') && showLevelAAA) {
          shouldShow = true;
        }
        
        // Update visibility
        toggleVisibility(criterion, shouldShow);
        
        if (shouldShow) {
          visibleCount++;
          
          // Now filter rules within this criterion
          filterRules(criterion, showProposed, showAutomated);
        }
      });
      
      // Update the visibility of empty guidelines
      updateGuidelinesVisibility();

      // Update the status bar counts after visibility changes
      updateStatusBar();

      // ---- Filter WAI-ARIA Rules Section ----
      filterAriaRules(showProposed, showAutomated);
    }
    
    /**
     * Filter rules within a criterion based on their status
     */
    function filterRules(criterion, showProposed, showAutomated) {
      const ruleItems = criterion.querySelectorAll('li');
      let visibleRuleCount = 0;
      const totalRuleCount = ruleItems.length; 

      ruleItems.forEach(function(rule) {
        const isProposed = rule.querySelector('.act-pill.proposed') !== null;
        const isAutomated = rule.querySelector('.act-pill.automated') !== null;
        
        // Determine if the rule should be shown based on its status
        let shouldShow = true;
        
        if (isProposed && !showProposed) {
          shouldShow = false;
        }
        
        if (isAutomated && !showAutomated) {
          shouldShow = false;
        }
        
        // Update visibility of the rule
        toggleVisibility(rule, shouldShow);
        
        if (shouldShow) {
          visibleRuleCount++;
        }
      });

      // Handle "No ACT Rules available" message and rule list
      const noRulesMessage = criterion.querySelector('p > em');
      const ruleList = criterion.querySelector('ul');
      const filteredMessage = criterion.querySelector('.filtered-rules-message'); 
      const relatedRulesPara = ruleList ? ruleList.previousElementSibling?.previousElementSibling : null; // Safer selection

      if (ruleList && relatedRulesPara && filteredMessage) {
        if (totalRuleCount > 0 && visibleRuleCount === 0) {
          // Rules exist but are all filtered out
          toggleVisibility(ruleList, false);
          toggleVisibility(relatedRulesPara, false);
          toggleVisibility(filteredMessage, true);
        } else if (visibleRuleCount > 0) {
          // Some rules are visible
          toggleVisibility(ruleList, true);
          toggleVisibility(relatedRulesPara, true);
          toggleVisibility(filteredMessage, false);
        } else {
          // No rules exist for this criterion (totalRuleCount === 0)
          toggleVisibility(ruleList, false);
          toggleVisibility(relatedRulesPara, false);
          toggleVisibility(filteredMessage, false);
          if (noRulesMessage && noRulesMessage.parentElement) {
            toggleVisibility(noRulesMessage.parentElement, true);
          }
        }
      } else if (noRulesMessage && noRulesMessage.parentElement) {
        // Original case: No rule list exists, ensure 'No rules' message is visible
        toggleVisibility(noRulesMessage.parentElement, true);
      }
    }
    
    /**
     * Updates the visibility of guidelines based on whether they have any visible criteria
     */
    function updateGuidelinesVisibility() {
      // Get all guidelines (h2 elements)
      const guidelines = document.querySelectorAll('h2');
      
      let visibleGuidelineCount = 0;
      
      guidelines.forEach(function(guideline) {
        // Skip the special WAI-ARIA heading
        if (guideline.textContent.includes('WAI-ARIA Related Rules')) {
          toggleVisibility(guideline, true); // Ensure it's always visible
          return; // Move to the next guideline
        }

        // Get the next criteria until the next guideline
        let nextElement = guideline.nextElementSibling;
        let hasVisibleCriteria = false;
        
        // Look through all elements until the next guideline or end of content
        while (nextElement && !nextElement.matches('h2')) {
          // If it's a criterion and it's visible, mark this guideline as having visible criteria
          if (nextElement.classList.contains('sc-item') && !nextElement.hasAttribute('hidden')) {
            hasVisibleCriteria = true;
            break;
          }
          nextElement = nextElement.nextElementSibling;
        }
        
        // Hide the guideline if it has no visible criteria
        toggleVisibility(guideline, hasVisibleCriteria);
        
        if (hasVisibleCriteria) {
          visibleGuidelineCount++;
        }
      });
    }

    /**
     * Extracts the rule ID from a rule link's href.
     * Expected format: /standards-guidelines/act/rules/RULE_ID/proposed/
     * @param {string} href - The href attribute of the rule link.
     * @returns {string|null} The rule ID or null if not found.
     */
    function getRuleIdFromHref(href) {
      if (!href) return null;
      const parts = href.split('/');
      // Example: ['', 'standards-guidelines', 'act', 'rules', 'RULE_ID', 'proposed', '']
      if (parts.length > 4) {
        return parts[4];
      }
      return null;
    }

    /**
     * Updates the status bar with counts of visible criteria and unique rules.
     */
    function updateStatusBar() {
      if (!ruleCountSpan || !criteriaWithRulesCountSpan || !totalSelectedCriteriaCountSpan) {
        return;
      }

      let totalSelectedCriteriaCount = 0; // Reset Z calculation
      let criteriaWithVisibleRulesCount = 0;
      const visibleRuleIds = new Set();

      allCriteria.forEach(function(criterion, index) {
        const criterionId = criterion.querySelector('p strong')?.textContent || `Criterion ${index + 1}`;

        // Determine if criterion matches selected level filters
        let matchesLevelFilter = false;
        if (criterion.classList.contains('level-a') && levelACheckbox && levelACheckbox.checked) matchesLevelFilter = true;
        if (criterion.classList.contains('level-aa') && levelAACheckbox && levelAACheckbox.checked) matchesLevelFilter = true;
        if (criterion.classList.contains('level-aaa') && levelAAACheckbox && levelAAACheckbox.checked) matchesLevelFilter = true;

        if (matchesLevelFilter) {
          totalSelectedCriteriaCount++; // Count if it matches the selected levels

          const isCriterionVisible = !criterion.hasAttribute('hidden');

          // Only count rules and criteria-with-rules if the criterion is ACTUALLY visible
          if (isCriterionVisible) {
            let hasVisibleRules = false;
            let visibleRulesInCriterion = 0; // Debug count per criterion
            const visibleRules = criterion.querySelectorAll('li:not([hidden]) a'); 
            
            visibleRules.forEach(function(link) {
              hasVisibleRules = true; 
              visibleRulesInCriterion++; // Debug
              const ruleId = getRuleIdFromHref(link.getAttribute('href'));
              if (ruleId) {
                const added = !visibleRuleIds.has(ruleId);
                visibleRuleIds.add(ruleId);
              }
            });
            
            if (hasVisibleRules) {
              criteriaWithVisibleRulesCount++;
            }
          }
        }
      });

      // Update the text content
      ruleCountSpan.textContent = visibleRuleIds.size;
      criteriaWithRulesCountSpan.textContent = criteriaWithVisibleRulesCount;
      totalSelectedCriteriaCountSpan.textContent = totalSelectedCriteriaCount;
    }

    /**
     * Filters the dedicated WAI-ARIA rules list based on status filters.
     */
    function filterAriaRules(showProposed, showAutomated) {
      const ariaListContainer = document.querySelector('.aria-rules-list-container');
      const noAriaRulesMessage = document.querySelector('.no-aria-rules-message');
      const filteredAriaMessage = document.querySelector('.filtered-aria-rules-message');
      
      if (!ariaListContainer) {
        // If the list container isn't found, do nothing (it might not exist if found_aria_rule was false)
        return; 
      }

      const ariaRuleItems = ariaListContainer.querySelectorAll('li');
      let visibleAriaRuleCount = 0;
      const totalAriaRuleCount = ariaRuleItems.length;

      ariaRuleItems.forEach(function(rule) {
         const isProposed = rule.querySelector('.act-pill.proposed') !== null;
         const isAutomated = rule.querySelector('.act-pill.automated') !== null;
         
         let shouldShow = true;
         if (isProposed && !showProposed) {
            shouldShow = false;
         }
         if (isAutomated && !showAutomated) {
            shouldShow = false;
         }
         
         toggleVisibility(rule, shouldShow);
         
         if (shouldShow) {
            visibleAriaRuleCount++;
         }
      });

      // Handle visibility of the list and messages
      const initiallyHadRules = !noAriaRulesMessage || noAriaRulesMessage.hasAttribute('hidden');
      
      if (initiallyHadRules) {
        if (visibleAriaRuleCount > 0) {
          // Show list, hide messages
          toggleVisibility(ariaListContainer, true);
          if (noAriaRulesMessage) toggleVisibility(noAriaRulesMessage, false);
          if (filteredAriaMessage) toggleVisibility(filteredAriaMessage, false);
        } else {
          // Hide list, show filtered message
          toggleVisibility(ariaListContainer, false);
          if (noAriaRulesMessage) toggleVisibility(noAriaRulesMessage, false);
          if (filteredAriaMessage) toggleVisibility(filteredAriaMessage, true);
        }
      } else {
        // No rules initially, keep list hidden, ensure no-rules message is shown
        toggleVisibility(ariaListContainer, false);
        if (noAriaRulesMessage) toggleVisibility(noAriaRulesMessage, true);
        if (filteredAriaMessage) toggleVisibility(filteredAriaMessage, false);
      }
    }
  });
})(); 