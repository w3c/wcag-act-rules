---
layout: standalone_resource
title: "Mapping To Rule"
permalink: /standards-guidelines/act/report/mapping/
ref: /standards-guidelines/act/report/mapping/
lang: en
type_of_guidance: false
footer: ""
github:
  repository: w3c/wcag-act-rules
  path: content/report/mapping.md
---

## Implementation Scoping

An implementation procedure does not need to be a one-to-one mapping to an ACT rule. A single implementation procedure can test multiple ACT rules. In manual test procedures, it is common to test multiple things at once. For instance, a procedure looking at the language of a page will simultaneously test whether or not the `<html>` element has a `lang` attribute, if the value of the `lang` attribute is valid, and if the value matches the language of the page. These are 3 separate rules, covered in a single test procedure of an implementation.

<figure role="figure" aria-label="Single implementation, mapping to two ACT Rules">
  <figcaption>Single implementation, mapping to two ACT Rules</figcaption>
  <img src="{{ '/content-assets/wcag-act-rules/impl-large-scope.svg' | relative_url }}" alt="">
</figure>

An accessibility tool or methodology can also have multiple implementation procedures that when combined, map to a single ACT rule. It is common in automated test tools to split up certain rules to build up more appropriate remediation advice. For example there can be a single ACT rule to test that all elements with the `img` role have an accessible name. An automated tool may implement testing `img` elements separate from `role="img"`, so that remediation advice for elements that can have an `alt` attribute will differ from elements that can't.

<figure role="figure" aria-label="Single ACT rule, mapping to two implementation rules">
  <figcaption>Single ACT rule, mapping to two implementation rules</figcaption>
  <img src="{{ '/content-assets/wcag-act-rules/impl-small-scope.svg' | relative_url }}" alt="">
</figure>
