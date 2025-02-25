# wcag-act-rules

[![Netlify Status](https://api.netlify.com/api/v1/badges/f053b1b3-85d4-4105-926b-9b30bebe83c0/deploy-status)](https://app.netlify.com/sites/wai-wcag-act-rules/deploys)

- Preview: https://wai-wcag-act-rules.netlify.app/
- WAI Website Manual: https://wai-website-theme.netlify.com/overview/
- WAI Website issue tracker: https://github.com/w3c/wai-wcag-supporting-documents-redesign/issues/

## Set a rule to approved

1. Go to the [Set a rule to approved](https://github.com/act-rules/act-rules.github.io/actions/workflows/approve-rule.yml) GitHub Action.
2. Open "Run workflow", fill in the Rule ID, and optionally a branch. WHen updating a rule that has been approved before, fill in a list of one or more changes from the previously approves rule version. 
3. Click "Run Workflow" and wait until it complets
4. Go to [wcag-act-rules Pull Requests](https://github.com/w3c/wcag-act-rules/pulls) and open a pull request from the branch that was created by the GitHub action.

The branch can be appended to, so you can run the same action more than once with the same branch to add multiple approvals to the same pull request.

## Deprecating an approved rule

1. Remove the index.md file
2. Remove the rule from `rule-versions.yml`
3. Remove test cases from testcases.json (if any)
4. Set the rule to "proposed" in wcag-mapping.json
