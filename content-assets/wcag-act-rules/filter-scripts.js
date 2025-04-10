/**
 * WCAG Success Criteria filtering script
 * Provides functionality to filter criteria based on conformance level and rule status
 * Default: Level AAA criteria and secondary rules are hidden, proposed rules are shown
 */
(function() {
  console.log('WCAG filter script loaded and executing');

  // Wait for DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing filter functionality');
    
    // Get all filter checkboxes for conformance levels
    const levelACheckbox = document.getElementById('level-a');
    const levelAACheckbox = document.getElementById('level-aa');
    const levelAAACheckbox = document.getElementById('level-aaa');

    // Get rule status filter checkboxes
    const showProposedCheckbox = document.getElementById('show-proposed');
    const showSecondaryCheckbox = document.getElementById('show-secondary');

    // Check if we have any filter checkboxes
    if ((!levelACheckbox && !levelAACheckbox && !levelAAACheckbox) && 
        (!showProposedCheckbox && !showSecondaryCheckbox)) {
      console.warn('No filter checkboxes found on the page.');
      return; // Exit early if no checkboxes are found
    }
    
    // Set default states
    if (levelAAACheckbox) {
      levelAAACheckbox.checked = false; // AAA criteria hidden by default
    }
    
    if (showSecondaryCheckbox) {
      showSecondaryCheckbox.checked = false; // Secondary rules hidden by default
    }
    
    // Log the found checkboxes
    console.log('Found filter checkboxes:', {
      'Level A': levelACheckbox ? 'Found' : 'Not found',
      'Level AA': levelAACheckbox ? 'Found' : 'Not found',
      'Level AAA': levelAAACheckbox ? 'Found' : 'Not found',
      'Proposed Rules': showProposedCheckbox ? 'Found' : 'Not found',
      'Secondary Rules': showSecondaryCheckbox ? 'Found' : 'Not found'
    });

    // Get all success criteria elements
    const allCriteria = document.querySelectorAll('.sc-item');
    console.log(`Found ${allCriteria.length} success criteria elements`);
    
    // Apply initial state
    updateVisibility();
    
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
    if (showSecondaryCheckbox) {
      showSecondaryCheckbox.addEventListener('change', updateVisibility);
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
      console.log('Updating visibility based on checkbox states');
      
      // Get current checkbox states for conformance levels
      const showLevelA = levelACheckbox ? levelACheckbox.checked : true;
      const showLevelAA = levelAACheckbox ? levelAACheckbox.checked : true;
      const showLevelAAA = levelAAACheckbox ? levelAAACheckbox.checked : false; // Default to false
      
      // Get current checkbox states for rule status
      const showProposed = showProposedCheckbox ? showProposedCheckbox.checked : true; // Default to true
      const showSecondary = showSecondaryCheckbox ? showSecondaryCheckbox.checked : false; // Default to false
      
      console.log('Filter states:', {
        'Level A': showLevelA ? 'Show' : 'Hide',
        'Level AA': showLevelAA ? 'Show' : 'Hide',
        'Level AAA': showLevelAAA ? 'Show' : 'Hide',
        'Proposed Rules': showProposed ? 'Show' : 'Hide',
        'Secondary Rules': showSecondary ? 'Show' : 'Hide'
      });
      
      // First, filter criteria by conformance level
      let visibleCount = 0;
      allCriteria.forEach(function(criterion) {
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
          filterRules(criterion, showProposed, showSecondary);
        }
      });
      
      console.log(`${visibleCount} of ${allCriteria.length} criteria are now visible`);
      
      // Update the visibility of empty guidelines
      updateGuidelinesVisibility();
    }
    
    /**
     * Filter rules within a criterion based on their status
     */
    function filterRules(criterion, showProposed, showSecondary) {
      // Get all rule items within this criterion
      const ruleItems = criterion.querySelectorAll('li');
      let visibleRuleCount = 0;
      
      ruleItems.forEach(function(rule) {
        const isProposed = rule.querySelector('.act-pill.proposed') !== null;
        const isSecondary = rule.querySelector('.act-pill.secondary') !== null;
        
        // Determine if the rule should be shown based on its status
        let shouldShow = true;
        
        if (isProposed && !showProposed) {
          shouldShow = false;
        }
        
        if (isSecondary && !showSecondary) {
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
      
      if (ruleList) {
        // If we have a rule list, show it if there are visible rules, hide otherwise
        toggleVisibility(ruleList, visibleRuleCount > 0);
        
        // Handle the "Related ACT Rules:" paragraph
        const relatedRulesPara = ruleList.previousElementSibling;
        if (relatedRulesPara && relatedRulesPara.tagName === 'P') {
          toggleVisibility(relatedRulesPara, visibleRuleCount > 0);
        }
        
        // Handle "No ACT Rules available" message if it exists
        if (noRulesMessage && noRulesMessage.parentElement) {
          toggleVisibility(noRulesMessage.parentElement, visibleRuleCount === 0);
        }
      } else if (noRulesMessage && noRulesMessage.parentElement) {
        // No rule list exists, make sure "No ACT Rules available" message is visible
        toggleVisibility(noRulesMessage.parentElement, true);
      }
    }
    
    /**
     * Updates the visibility of guidelines based on whether they have any visible criteria
     */
    function updateGuidelinesVisibility() {
      // Get all guidelines (h2 elements)
      const guidelines = document.querySelectorAll('h2');
      console.log(`Checking visibility for ${guidelines.length} guidelines`);
      
      let visibleGuidelineCount = 0;
      
      guidelines.forEach(function(guideline) {
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
      
      console.log(`${visibleGuidelineCount} of ${guidelines.length} guidelines are now visible`);
    }
  });
})(); 