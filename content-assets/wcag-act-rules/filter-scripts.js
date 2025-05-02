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
    const showAriaCheckbox = document.getElementById('show-aria');

    // Get rule status filter checkboxes
    const showProposedCheckbox = document.getElementById('show-proposed');
    const showApprovedCheckbox = document.getElementById('show-approved');
    const showDeprecatedCheckbox = document.getElementById('show-deprecated');
    const showAutomatedCheckbox = document.getElementById('show-automated');
    const showSemiautoCheckbox = document.getElementById('show-semiauto');
    const showManualCheckbox = document.getElementById('show-manual');
    const showLinterCheckbox = document.getElementById('show-linter');
    const showUnimplementedCheckbox = document.getElementById('show-unimplemented');
    const showEmptyScCheckbox = document.getElementById('show-empty-sc');

    // Check if we have any filter checkboxes
    if ((!levelACheckbox && !levelAACheckbox && !levelAAACheckbox && !showAriaCheckbox) && 
        (!showProposedCheckbox && !showApprovedCheckbox && !showDeprecatedCheckbox && !showAutomatedCheckbox && !showSemiautoCheckbox && !showManualCheckbox && !showLinterCheckbox && !showUnimplementedCheckbox) &&
        !showEmptyScCheckbox) {
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
    if (showApprovedCheckbox) {
      showApprovedCheckbox.addEventListener('change', updateVisibility);
    }
    if (showDeprecatedCheckbox) {
      showDeprecatedCheckbox.addEventListener('change', updateVisibility);
    }
    if (showAutomatedCheckbox) {
      showAutomatedCheckbox.addEventListener('change', updateVisibility);
    }
    if (showSemiautoCheckbox) {
      showSemiautoCheckbox.addEventListener('change', updateVisibility);
    }
    if (showManualCheckbox) {
      showManualCheckbox.addEventListener('change', updateVisibility);
    }
    if (showLinterCheckbox) {
      showLinterCheckbox.addEventListener('change', updateVisibility);
    }
    if (showUnimplementedCheckbox) {
      showUnimplementedCheckbox.addEventListener('change', updateVisibility);
    }
    if (showEmptyScCheckbox) {
      showEmptyScCheckbox.addEventListener('change', updateVisibility);
    }
    if (showAriaCheckbox) {
      showAriaCheckbox.addEventListener('change', updateVisibility);
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
      const showAria = showAriaCheckbox ? showAriaCheckbox.checked : true;
      
      // Get current checkbox states for rule status
      const showProposed = showProposedCheckbox ? showProposedCheckbox.checked : true; 
      const showApproved = showApprovedCheckbox ? showApprovedCheckbox.checked : true;
      const showDeprecated = showDeprecatedCheckbox ? showDeprecatedCheckbox.checked : false;
      const showAutomated = showAutomatedCheckbox ? showAutomatedCheckbox.checked : true; 
      const showSemiauto = showSemiautoCheckbox ? showSemiautoCheckbox.checked : true;
      const showManual = showManualCheckbox ? showManualCheckbox.checked : true;
      const showLinter = showLinterCheckbox ? showLinterCheckbox.checked : true;
      const showUnimplemented = showUnimplementedCheckbox ? showUnimplementedCheckbox.checked : true;
      const showEmptySc = showEmptyScCheckbox ? showEmptyScCheckbox.checked : true;
      
      // Filter criteria
      let visibleCount = 0;
      allCriteria.forEach(function(criterion) {
        // 1. Check level filters
        let showBasedOnLevel = false;
        if (criterion.classList.contains('level-a') && showLevelA) {
          showBasedOnLevel = true;
        } else if (criterion.classList.contains('level-aa') && showLevelAA) {
          showBasedOnLevel = true;
        } else if (criterion.classList.contains('level-aaa') && showLevelAAA) {
          showBasedOnLevel = true;
        }

        // 2. Filter rules within this criterion (if it passed level check)
        let hasVisibleRules = false;
        if (showBasedOnLevel) {
            hasVisibleRules = filterRules(
              criterion, 
              showProposed, showApproved, showDeprecated, 
              showAutomated, showSemiauto, showManual, showLinter, showUnimplemented
            );
        }

        // 3. Determine final visibility based on level, rules, and the showEmptySc filter
        let shouldShowCriterion = showBasedOnLevel;
        if (!showEmptySc && !hasVisibleRules) {
            // If the filter is off AND it has no visible rules, hide it
            shouldShowCriterion = false;
        }
        
        // Update visibility for the criterion itself
        toggleVisibility(criterion, shouldShowCriterion);
        
        if (shouldShowCriterion) {
          visibleCount++;
          
          // Now filter rules within this criterion
          hasVisibleRules = filterRules(
            criterion, 
            showProposed, showApproved, showDeprecated, 
            showAutomated, showSemiauto, showManual, showLinter, showUnimplemented
          );
        }
      });
      
      // Update the visibility of empty guidelines
      updateGuidelinesVisibility();

      // Update the status bar counts after visibility changes
      updateStatusBar();

      // ---- Filter WAI-ARIA Rules Section ----
      const ariaSectionHasVisibleRules = filterAriaRules(
        showProposed, showApproved, showDeprecated, 
        showAutomated, showSemiauto, showManual, showLinter, showUnimplemented
      );

      // ---- Hide Empty Sections Based on Display Option ----
      const showEmptySections = showEmptyScCheckbox ? showEmptyScCheckbox.checked : true;

      // Hide WCAG criteria if needed (already handled in the loop above)

      // Hide ARIA section if needed
      const ariaHeading = document.querySelector('h2:has(+.aria-rules-list-container)');
      const ariaListContainer = document.querySelector('.aria-rules-list-container');
      
      let shouldShowAriaSection = showAria && (showEmptySections || ariaSectionHasVisibleRules);

      if (ariaHeading) {
        toggleVisibility(ariaHeading, shouldShowAriaSection);
      }
      if (ariaListContainer) {
          // Visibility of the list itself is handled by filterAriaRules based on visible rule count,
          // but we ensure it's hidden if the whole section should be hidden.
          if (!shouldShowAriaSection) {
              toggleVisibility(ariaListContainer, false);
          }
      }
    }
    
    /**
     * Filter rules within a criterion based on their status and test type
     * @returns {boolean} - True if any rules are visible after filtering, false otherwise.
     */
    function filterRules(criterion, 
                         showProposed, showApproved, showDeprecated, 
                         showAutomated, showSemiauto, showManual, showLinter, showUnimplemented) {
      
      const ruleItems = criterion.querySelectorAll('li');
      let visibleRuleCount = 0;

      ruleItems.forEach(function(rule) {
        const hasProposedPill = rule.querySelector('.act-pill.proposed') !== null;
        const isDeprecated = rule.querySelector('.act-pill.deprecated') !== null; 
        
        // Status Logic:
        const isProposed = hasProposedPill && !isDeprecated;
        const isApproved = !hasProposedPill && !isDeprecated;

        let shouldShowByStatus = (isProposed && showProposed) || (isApproved && showApproved) || (isDeprecated && showDeprecated);

        // Test Type Logic:
        const ruleTypes = rule.dataset.testTypes ? rule.dataset.testTypes.split(' ') : [];
        let shouldShowByTestType = false;
        if (ruleTypes.includes('automated') && showAutomated) shouldShowByTestType = true;
        if (ruleTypes.includes('semiauto') && showSemiauto) shouldShowByTestType = true;
        if (ruleTypes.includes('manual') && showManual) shouldShowByTestType = true;
        if (ruleTypes.includes('linter') && showLinter) shouldShowByTestType = true;
        if (ruleTypes.includes('unimplemented') && showUnimplemented) shouldShowByTestType = true;
        if (ruleTypes.length === 0 && showUnimplemented) shouldShowByTestType = true; // Handle cases where attribute might be empty if unimplemented
        
        let shouldShow = shouldShowByStatus && shouldShowByTestType;

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
        if (visibleRuleCount > 0) {
          // Some rules are visible
          toggleVisibility(ruleList, true);
          toggleVisibility(relatedRulesPara, true);
          toggleVisibility(filteredMessage, false);
        } else {
          // No rules exist for this criterion (visibleRuleCount === 0)
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

      return visibleRuleCount > 0; // Return whether rules are visible
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
      const wcagRuleCountSpan = document.getElementById('wcag-rule-count');
      const criteriaWithRulesCountSpan = document.getElementById('criteria-with-rules-count');
      const totalSelectedCriteriaCountSpan = document.getElementById('total-selected-criteria-count');
      const ariaRuleCountSpan = document.getElementById('aria-rule-count');

      if (!wcagRuleCountSpan || !criteriaWithRulesCountSpan || !totalSelectedCriteriaCountSpan || !ariaRuleCountSpan) {
        return;
      }

      let totalSelectedCriteriaCount = 0; // Z: Matches Level Filters
      let criteriaWithVisibleRulesCount = 0; // Y: Matches Level Filters AND has visible rules
      const visibleWcagRuleIds = new Set(); // X: WCAG Rules within criteria counted for Y

      // --- Calculate WCAG Counts --- 
      allCriteria.forEach(function(criterion, index) {
        const criterionId = criterion.querySelector('p strong')?.textContent || `Criterion ${index + 1}`;

        // Determine if criterion matches selected level filters
        let matchesLevelFilter = false;
        if (criterion.classList.contains('level-a') && levelACheckbox && levelACheckbox.checked) matchesLevelFilter = true;
        if (criterion.classList.contains('level-aa') && levelAACheckbox && levelAACheckbox.checked) matchesLevelFilter = true;
        if (criterion.classList.contains('level-aaa') && levelAAACheckbox && levelAAACheckbox.checked) matchesLevelFilter = true;

        if (matchesLevelFilter) {
            totalSelectedCriteriaCount++; // Count all matching level criteria for Z

            // Check if criterion has any visible rules *after* rule filtering
            // We look directly at the DOM state here as filterRules has already run
            let hasVisibleRules = false;
            const visibleRules = criterion.querySelectorAll('li:not([hidden]) a');
            if (visibleRules.length > 0) {
                hasVisibleRules = true;
            }

            if (hasVisibleRules) {
                criteriaWithVisibleRulesCount++; // Count for Y only if rules are visible
                // Add rules to the Set ONLY if they are in a criterion counted for Y
                visibleRules.forEach(function(link) {
                    const ruleId = getRuleIdFromHref(link.getAttribute('href'));
                    if (ruleId) {
                        visibleWcagRuleIds.add(ruleId);
                    }
                });
            }
        }
      });

      // --- Calculate ARIA Count --- 
      const visibleAriaRuleIds = new Set();
      const ariaListContainer = document.querySelector('.aria-rules-list-container');
      if (ariaListContainer) {
          const visibleAriaLinks = ariaListContainer.querySelectorAll('li:not([hidden]) a');
          visibleAriaLinks.forEach(function(link) {
              const ruleId = getRuleIdFromHref(link.getAttribute('href'));
              if (ruleId) {
                  visibleAriaRuleIds.add(ruleId);
              }
          });
      }

      // Update the text content
      wcagRuleCountSpan.textContent = visibleWcagRuleIds.size;
      criteriaWithRulesCountSpan.textContent = criteriaWithVisibleRulesCount;
      totalSelectedCriteriaCountSpan.textContent = totalSelectedCriteriaCount;
      ariaRuleCountSpan.textContent = visibleAriaRuleIds.size;
    }

    /**
     * Filters the dedicated WAI-ARIA rules list based on status and test type filters.
     * @returns {boolean} - True if any ARIA rules are visible after filtering, false otherwise.
     */
    function filterAriaRules(showProposed, showApproved, showDeprecated, 
                             showAutomated, showSemiauto, showManual, showLinter, showUnimplemented) {
      
      const ariaListContainer = document.querySelector('.aria-rules-list-container');
      const noAriaRulesMessage = document.querySelector('.no-aria-rules-message');
      const filteredAriaMessage = document.querySelector('.filtered-aria-rules-message');
      
      if (!ariaListContainer) {
        // If the list container isn't found, do nothing (it might not exist if found_aria_rule was false)
        return false; 
      }

      const ariaRuleItems = ariaListContainer.querySelectorAll('li');
      let visibleAriaRuleCount = 0;
      const totalAriaRuleCount = ariaRuleItems.length;

      ariaRuleItems.forEach(function(rule) {
         const hasProposedPill = rule.querySelector('.act-pill.proposed') !== null;
         const isDeprecated = rule.querySelector('.act-pill.deprecated') !== null; 
         
         // Status Logic:
         const isProposed = hasProposedPill && !isDeprecated; 
         const isApproved = !hasProposedPill && !isDeprecated; 

         let shouldShowByStatus = (isProposed && showProposed) || (isApproved && showApproved) || (isDeprecated && showDeprecated);

         // Test Type Logic:
         const ruleTypes = rule.dataset.testTypes ? rule.dataset.testTypes.split(' ') : [];
         let shouldShowByTestType = false;
         if (ruleTypes.includes('automated') && showAutomated) shouldShowByTestType = true;
         if (ruleTypes.includes('semiauto') && showSemiauto) shouldShowByTestType = true;
         if (ruleTypes.includes('manual') && showManual) shouldShowByTestType = true;
         if (ruleTypes.includes('linter') && showLinter) shouldShowByTestType = true;
         if (ruleTypes.includes('unimplemented') && showUnimplemented) shouldShowByTestType = true;
         if (ruleTypes.length === 0 && showUnimplemented) shouldShowByTestType = true; // Handle cases where attribute might be empty if unimplemented

         let shouldShow = shouldShowByStatus && shouldShowByTestType;
         
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

      return visibleAriaRuleCount > 0; // Return boolean
    }
  });
})(); 