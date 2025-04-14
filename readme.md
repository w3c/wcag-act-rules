# wcag-act-rules

- [![Netlify Status](https://api.netlify.com/api/v1/badges/f053b1b3-85d4-4105-926b-9b30bebe83c0/deploy-status)](https://app.netlify.com/sites/wai-wcag-act-rules/deploys)
- Preview: https://wai-wcag-act-rules.netlify.app/
- WAI Website Manual: https://wai-website-manual.netlify.app/
- WAI Website issue tracker: https://github.com/w3c/wai-wcag-supporting-documents-redesign/issues/

## ACT Rules content

Rules content and assets get pushed automatically via [ACT-Tools](https://www.github.com/act-rules/act-tools/). For issues or PRs about rule content, open them in the [ACT-Rules.github.io repository](https://www.github.com/act-rules/act-rules.github.io).

## Set a rule to approved

1. On the ACT-rules CG repo, go to the [Set a rule to approved](https://github.com/act-rules/act-rules.github.io/actions/workflows/approve-rule.yml) GitHub Action.
2. Open "Run workflow", fill in the Rule ID, and optionally a branch. When updating a rule that has been approved before, fill in a list of one or more changes from the previously approved rule version. 
3. Click "Run Workflow" and wait until it completes
4. Go to [w3c/wcag-act-rules Pull Requests](https://github.com/w3c/wcag-act-rules/pulls) and open a pull request from the branch that was created by the GitHub action.

You can append multiple approved rules to the same PR by running the same action more than once with the chosen branch.

## Deprecating an approved rule

1. Remove the index.md file
2. Remove the rule from `rule-versions.yml`
3. Remove test cases from testcases.json (if any)
4. Set the rule to "proposed" in wcag-mapping.json

## Adding a new implementation

- Refer to [ACT-Tools](https://github.com/act-rules/act-tools/) README file for instructions on how to map a new implementation and update existing implementations. 
- Create a pull request with the generated implementation report and the updated implementation yaml in the appropriate directory under the [w3c/wcag-act-rules repo](https://github.com/w3c/wcag-act-rules/)
- Under the content/implementations/ directory, create a new page for the new implementation data. To avoid errors, copy an existing one and replace the old values with the ones for the new implementation you want to include.
