# wcag-act-rules

[![Netlify Status](https://api.netlify.com/api/v1/badges/c34b5698-c6cc-4d2b-964c-eb098bcaa933/deploy-status)](https://app.netlify.com/sites/wcag-act-rules/deploys)

Preview: https://wai-wcag-act-rules.netlify.app/
WAI Website Manual: https://wai-website-theme.netlify.com/overview/
WAI Website issue tracker: https://github.com/w3c/wai-wcag-supporting-documents-redesign/issues/

## Adding New Approved Rules

1. Using [act-tools](https://github.com/act-rules/act-tools), run rule-transform with the ruleId, without the --proposed flag
2. Update `_data/wcag-act-rules/rule-versions.yml`
  - Add the proposed.md and index.md files for the rule
3. Update `content-assets/wcag-act-rules/testcases.json`
  - On each test case for the rule, add `"approved": true`

## Updating An Approved Rule

1. Rename `index.md` to `{yyyy-mm-dd}.md` with the date from `last_modified`
  - Update its `permalink`, `ref`, and `github.path` fields
2. Using [act-tools](https://github.com/act-rules/act-tools), run rule-transform with the ruleId, without the --proposed flag
3. Update `_data/wcag-act-rules/rule-versions.yml`
  - Rename the `index.md` item to `{yyyy-mm-dd}.md` for the rule
  - Add a new `index.md` for the rule, including a new `changes` property
4. Update `content-assets/wcag-act-rules/testcases.json`
  - Delete existing approved test cases
  - Add test cases of updated rule as "approved"
