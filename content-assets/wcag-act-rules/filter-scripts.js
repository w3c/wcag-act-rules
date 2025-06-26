/**
 * WCAG Success Criteria filtering script
 * Provides functionality to filter criteria based on conformance level and rule status
 * Default: Level AAA criteria and secondary rules are hidden, proposed rules are shown
 */
(function() {
  const FILTERS = {
    requirements: {
      'a': { id: 'level-a', value: true },
      'aa': { id: 'level-aa', value: true },
      'aaa': { id: 'level-aaa', value: false },
      'aria': { id: 'show-aria', value: true }
    },
    status: {
      'proposed': { id: 'show-proposed', value: true },
      'approved': { id: 'show-approved', value: true },
      'deprecated': { id: 'show-deprecated', value: false }
    },
    implement: {
      'auto': { id: 'show-automated', value: true },
      'semi-auto': { id: 'show-semiauto', value: true },
      'manual': { id: 'show-manual', value: true },
      'lint': { id: 'show-linter', value: true },
      'none': { id: 'show-unimplemented', value: true }
    },
    display: {
      'no-rules': { id: 'show-empty-sc', value: true }
    }
  };


  // Wait for DOM to be fully loaded
  document.addEventListener('DOMContentLoaded', function() {
    const queryParams = new URLSearchParams(window.location.search);
    Object.entries(FILTERS).forEach(([key, filter]) => {
      let params = null
      if (queryParams.has(key)) {
        params = queryParams.get(key).split(',')
      }
      Object.entries(filter).forEach(([key, option]) => {
        const elm = document.getElementById(option.id);
        elm.checked = params ? params.includes(key) : option.value
        option.elm = elm;
      })
    })

    const allCriteria = document.querySelectorAll('.sc-item');
    updateVisibility();
    updateStatusBar();

    document.getElementById('filter-controls').addEventListener('change', function(e) {
      if (e.target.nodeName === 'INPUT') {
        updateVisibility();
        updateUrlWithFilters();
      }
    });

    
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
     * Returns an object with the current filter state for all filter groups.
     */
    function getCurrentFilterState() {
      return {
        showLevelA: FILTERS.requirements.a.elm.checked,
        showLevelAA: FILTERS.requirements.aa.elm.checked,
        showLevelAAA: FILTERS.requirements.aaa.elm.checked,
        showAria: FILTERS.requirements.aria.elm.checked,
        showProposed: FILTERS.status.proposed.elm.checked,
        showApproved: FILTERS.status.approved.elm.checked,
        showDeprecated: FILTERS.status.deprecated.elm.checked,
        showAutomated: FILTERS.implement.auto.elm.checked,
        showSemiauto: FILTERS.implement['semi-auto'].elm.checked,
        showManual: FILTERS.implement.manual.elm.checked,
        showLinter: FILTERS.implement.lint.elm.checked,
        showUnimplemented: FILTERS.implement.none.elm.checked,
        showEmptySc: FILTERS.display['no-rules'].elm.checked
      };
    }

    /**
     * Updates the visibility of criteria based on checkbox states
     * Batches DOM updates and status bar update to minimize reflows.
     * Uses requestAnimationFrame to ensure all DOM changes are applied together.
     */
    function updateVisibility() {
      window.requestAnimationFrame(() => {
        const filters = getCurrentFilterState();
        const showAria = filters.showAria;
        const showEmptySc = filters.showEmptySc;
        let visibleCount = 0;
        allCriteria.forEach(function(criterion) {
          const showBasedOnLevel = (
            (criterion.classList.contains('level-a') && filters.showLevelA) ||
            (criterion.classList.contains('level-aa') && filters.showLevelAA) ||
            (criterion.classList.contains('level-aaa') && filters.showLevelAAA)
          );
          let hasVisibleRules = false;
          if (showBasedOnLevel) {
              hasVisibleRules = filterRules(criterion, filters);
          }
          let shouldShowCriterion = showBasedOnLevel;
          if (!showEmptySc && !hasVisibleRules) {
              shouldShowCriterion = false;
          }
          toggleVisibility(criterion, shouldShowCriterion);
          if (shouldShowCriterion) {
            visibleCount++;
            hasVisibleRules = filterRules(criterion, filters);
          }
        });
        updateSectionVisibility();
        const ariaSectionHasVisibleRules = filterAriaRules(filters);
        const showEmptySections = filters.showEmptySc;
        const ariaHeading = document.querySelector('h2:has(+.aria-rules-list-container)');
        const ariaListContainer = document.querySelector('.aria-rules-list-container');
        let shouldShowAriaSection = showAria && (showEmptySections || ariaSectionHasVisibleRules);
        if (ariaHeading) {
          toggleVisibility(ariaHeading, shouldShowAriaSection);
        }
        if (ariaListContainer) {
            if (!shouldShowAriaSection) {
                toggleVisibility(ariaListContainer, false);
            }
        }
        // Batch status bar update after all DOM changes
        updateStatusBar();
      });
    }
    
    /**
     * Generic function to filter a list of rules (<ul> with <li>s) based on status and test type filters.
     * @param {Element} ul - The <ul> element containing rule <li>s
     * @param {Object} options - Filter options: { showProposed, showApproved, showDeprecated, showAutomated, showSemiauto, showManual, showLinter, showUnimplemented }
     * @returns {number} - The number of visible rules after filtering
     */
    function filterRuleList(ul, filters) {
      if (!ul) return 0;
      const ruleItems = ul.querySelectorAll('li');
      let visibleRuleCount = 0;
      ruleItems.forEach(function(rule) {
        const hasProposedPill = rule.querySelector('.act-pill.proposed') !== null;
        const isDeprecated = rule.querySelector('.act-pill.deprecated') !== null;
        // Status Logic:
        const isProposed = hasProposedPill && !isDeprecated;
        const isApproved = !hasProposedPill && !isDeprecated;
        let shouldShowByStatus = (isProposed && filters.showProposed) || (isApproved && filters.showApproved) || (isDeprecated && filters.showDeprecated);
        // Test Type Logic:
        const ruleTypes = rule.dataset.testTypes ? rule.dataset.testTypes.split(' ') : [];
        const shouldShowByTestType = (
          (ruleTypes.includes('automated') && filters.showAutomated) ||
          (ruleTypes.includes('semiauto') && filters.showSemiauto) ||
          (ruleTypes.includes('manual') && filters.showManual) ||
          (ruleTypes.includes('linter') && filters.showLinter) ||
          (ruleTypes.includes('unimplemented') && filters.showUnimplemented) ||
          (ruleTypes.length === 0 && filters.showUnimplemented)
        );
        let shouldShow = shouldShowByStatus && shouldShowByTestType;
        toggleVisibility(rule, shouldShow);
        if (shouldShow) visibleRuleCount++;
      });
      return visibleRuleCount;
    }

    /**
     * Filter rules within a criterion based on their status and test type
     * @returns {boolean} - True if any rules are visible after filtering, false otherwise.
     */
    function filterRules(criterion, filters) {
      const ruleList = criterion.querySelector('ul.act-rule-list');
      const visibleRuleCount = filterRuleList(ruleList, filters);
      // Handle "No ACT Rules available" message and rule list
      const noRulesMessage = criterion.querySelector('p > em');
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
     * Updates the visibility of guideline sections based on whether they have any visible criteria.
     * Assumes each <h2 class="guideline-section"> is followed by its .sc-item elements.
     * Hides the guideline if none of its .sc-item children are visible.
     */
    function updateSectionVisibility() {
      const guidelines = document.querySelectorAll('h2.guideline-section, h2[data-aria-section]');
      guidelines.forEach(function(guideline) {
        // Skip the special WAI-ARIA heading using data-aria-section
        if (guideline.hasAttribute('data-aria-section')) {
          toggleVisibility(guideline, true);
          return;
        }
        // Get the next criteria until the next guideline
        let nextElement = guideline.nextElementSibling;
        let hasVisibleCriteria = false;
        while (nextElement && !(nextElement.tagName === 'H2' && nextElement.classList.contains('guideline-section'))) {
          if (nextElement.classList && nextElement.classList.contains('sc-item') && !nextElement.hasAttribute('hidden')) {
            hasVisibleCriteria = true;
            break;
          }
          nextElement = nextElement.nextElementSibling;
        }
        toggleVisibility(guideline, hasVisibleCriteria);
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
      const ariaStatusPartSpan = document.getElementById('aria-status-part');

      if (!wcagRuleCountSpan || !criteriaWithRulesCountSpan || !totalSelectedCriteriaCountSpan || !ariaRuleCountSpan || !ariaStatusPartSpan) {
        return;
      }

      let totalSelectedCriteriaCount = 0; // Z: Matches Level Filters
      let criteriaWithVisibleRulesCount = 0; // Y: Matches Level Filters AND has visible rules
      const visibleWcagRuleIds = new Set(); // X: WCAG Rules within criteria counted for Y

      // --- Calculate WCAG Counts --- 
      allCriteria.forEach(function(criterion, index) {
        // Determine if criterion matches selected level filters
        let matchesLevelFilter = false;
        if (criterion.classList.contains('level-a') && FILTERS.requirements.a.elm.checked) {
          matchesLevelFilter = true;
        }
        if (criterion.classList.contains('level-aa') && FILTERS.requirements.aa.elm.checked) {
          matchesLevelFilter = true;
        }
        if (criterion.classList.contains('level-aaa') && FILTERS.requirements.aaa.elm.checked) {
          matchesLevelFilter = true;
        }

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

      // Show/hide the ARIA part of the status text
      const showAriaCheckbox = document.getElementById('show-aria'); // Get checkbox inside this function
      const showAria = showAriaCheckbox ? showAriaCheckbox.checked : true; // Determine state inside this function
      toggleVisibility(ariaStatusPartSpan, showAria);
    }

    /**
     * Filters the dedicated WAI-ARIA rules list based on status and test type filters.
     * @returns {boolean} - True if any ARIA rules are visible after filtering, false otherwise.
     */
    function filterAriaRules(filters) {
      const { showProposed, showApproved, showDeprecated, showAutomated, showSemiauto, showManual, showLinter, showUnimplemented } = filters;
      const ariaListContainer = document.querySelector('.aria-rules-list-container');
      const noAriaRulesMessage = document.querySelector('.no-aria-rules-message');
      const filteredAriaMessage = document.querySelector('.filtered-aria-rules-message');
      const showEmptyScCheckbox = document.getElementById('show-empty-sc');
      const showEmptySections = showEmptyScCheckbox ? showEmptyScCheckbox.checked : true;
      if (!ariaListContainer) {
        // If the list container isn't found, do nothing (it might not exist if found_aria_rule was false)
        return false; 
      }
      // For each ARIA requirement group, toggle its <ul> and .no-act-rules-message
      let ariaGroups = [];
      let child = ariaListContainer.firstElementChild;
      while (child) {
        if (child.tagName === 'UL' && child.classList.contains('act-rule-list')) {
          ariaGroups.push(child);
        }
        child = child.nextElementSibling;
      }

      ariaGroups.forEach(function(ul) {
        const visibleCount = filterRuleList(ul, {
          showProposed, showApproved, showDeprecated, showAutomated, showSemiauto, showManual, showLinter, showUnimplemented
        });
        // Find the .no-act-rules-message sibling after the <ul>
        const noRulesMsg = ul.nextElementSibling && ul.nextElementSibling.classList.contains('no-act-rules-message') ? ul.nextElementSibling : null;
        let titlePara = ul.previousElementSibling;
        if (visibleCount === 0 && !showEmptySections) {
          if (ul) toggleVisibility(ul, false);
          if (noRulesMsg) toggleVisibility(noRulesMsg, false);
          if (titlePara && (titlePara.tagName === 'P' || titlePara.tagName === 'STRONG')) toggleVisibility(titlePara, false);
        } else {
          if (ul) toggleVisibility(ul, visibleCount > 0);
          if (noRulesMsg) toggleVisibility(noRulesMsg, visibleCount === 0);
          if (titlePara && (titlePara.tagName === 'P' || titlePara.tagName === 'STRONG')) toggleVisibility(titlePara, true);
        }
        if (visibleCount > 0) anyVisibleAriaRule = true;
      });

      // Handle overall ARIA section messages as before
      const ariaRuleItems = ariaListContainer.querySelectorAll('li');
      let visibleAriaRuleCount = 0;
      ariaRuleItems.forEach(function(rule) {
         if (!rule.hasAttribute('hidden')) visibleAriaRuleCount++;
      });
      const initiallyHadRules = !noAriaRulesMessage || noAriaRulesMessage.hasAttribute('hidden');
      if (initiallyHadRules) {
        if (visibleAriaRuleCount > 0) {
          toggleVisibility(ariaListContainer, true);
          if (noAriaRulesMessage) toggleVisibility(noAriaRulesMessage, false);
          if (filteredAriaMessage) toggleVisibility(filteredAriaMessage, false);
        } else {
          toggleVisibility(ariaListContainer, false);
          if (noAriaRulesMessage) toggleVisibility(noAriaRulesMessage, false);
          if (filteredAriaMessage) toggleVisibility(filteredAriaMessage, true);
        }
      } else {
        toggleVisibility(ariaListContainer, false);
        if (noAriaRulesMessage) toggleVisibility(noAriaRulesMessage, true);
        if (filteredAriaMessage) toggleVisibility(filteredAriaMessage, false);
      }
      return visibleAriaRuleCount > 0;
    }

    /**
     * Updates the URL query string to reflect the current filter state
     */
    function updateUrlWithFilters() {
      const params = [];
      Object.entries(FILTERS).forEach(([key, filter]) => {
        const values = [];
        Object.entries(filter).forEach(([key, option]) => {
          if (option.elm.checked) {
            values.push(key);
          }
        })
        params.push(key + '=' + values.join(','));
      })
      const query = '?' + params.join('&');
      const newUrl = window.location.pathname + query + window.location.hash;
      window.history.replaceState({}, '', newUrl);
    }
  });
})();