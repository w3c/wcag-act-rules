---
title: "ARIA attribute is defined in WAI-ARIA"
permalink: /standards-guidelines/act/rules/5f99a7/proposed/
ref: /standards-guidelines/act/rules/5f99a7/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/5f99a7/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> 5f99a7</p>
  <p><strong>Date:</strong> Updated 22 April 2025</p>
  <p><strong>Authors:</strong> <a href="https://github.com/jkodu">Jey Nandakumar</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: 5f99a7
  name: "ARIA attribute is defined in WAI-ARIA"
  rule_type: atomic
  original_file: aria-attr-defined-5f99a7.md
  description: |
    This rule checks that each `aria-` attribute specified is defined in ARIA 1.2.
  last_modified: 22 April 2025
---

## Applicability

This rule applies to any attribute that starts with `aria-`.

## Expectation

Each target attribute is defined in [WAI-ARIA Specifications][].

## Background

The presence of unknown ARIA attributes is often the result of a typo or other developer error. These attributes are ignored by browsers and other assistive technologies. This often means that a state or property which should exist is missing.

### Assumptions

There are no assumptions.

### Accessibility Support

There are no accessibility support issues known.

### Bibliography

- [ARIA in HTML](https://www.w3.org/TR/html-aria/#index-aria-global)
- [WAI ARIA Supported States and Properties](https://www.w3.org/TR/wai-aria-1.2/#supportedState)
- [G108: Using markup features to expose the name and role](https://www.w3.org/WAI/WCAG22/Techniques/general/G108)
- [Understanding Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value)
- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value)
- [Semantics and ARIA](https://developers.google.com/web/fundamentals/accessibility/semantics-aria/)

## Accessibility Requirements Mapping

### Secondary Requirements

This rule is related to the following accessibility requirements, but was 
not designed to test this requirements directly. These 
[secondary requirements](https://w3c.github.io/wcag-act/act-rules-format.html#secondary-requirements)
can either be stricter than the rule requires, or may be satisfied in ways 
not tested by the rule:

- [1.3.1 Info and Relationships (Level A)](https://www.w3.org/TR/WCAG22/#info-and-relationships): This success criterion is **less strict** than this rule. This is because the rule does not ignore irrelevant ARIA properties. Some of the failed examples satisfy this success criterion.
- [4.1.2 Name, Role, Value (Level A)](https://www.w3.org/TR/WCAG22/#name-role-value): This success criterion is **less strict** than this rule. This is because the rule does not ignore irrelevant ARIA properties. Some of the failed examples satisfy this success criterion.

## Input Aspects

The following aspects are required in using this rule.

- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)

## Test Cases

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5f99a7/261dcd3214e87532fc2f9c8db7fdce05de9e07f0.html">Open in a new tab</a>

This `article` element has an `aria-atomic` attribute which is defined in [WAI-ARIA Specifications][].

```html
<article aria-atomic="true">This is a description of something cool...</article>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5f99a7/287a72860814f903d561dc3e7765f507ca041624.html">Open in a new tab</a>

This `div` element with a role of `dialog` has an `aria-modal` attribute which is defined in [WAI-ARIA Specifications][].

```html
<div role="dialog" aria-modal="true" aria-label="Modal title">Contains modal content...</div>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5f99a7/3314945d4bbec5b34f9a3c2d90da7cb9f8e7ce5a.html">Open in a new tab</a>

This `div` element with a role of `textbox` has multiple `aria-` attributes which are defined in [WAI-ARIA Specifications][].

```html
<div
	role="textbox"
	contenteditable="true"
	aria-multiline="true"
	aria-label="Enter your hobbies"
	aria-required="true"
></div>
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5f99a7/830f50dcf51acb0b97b948000d7c163e50858312.html">Open in a new tab</a>

This `input` element with a type of `number` has multiple `aria-` attributes specified which are all defined in [WAI-ARIA Specifications][].

```html
<label for="spinbutton">Enter a number between 0 and 100:</label>
<input id="spinbutton" aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" type="number" value="25" />
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5f99a7/e145aafac5f00cabc7cb3d65a32f7fdb5ec1484d.html">Open in a new tab</a>

This `div` element with a role of `checkbox` has an `aria-not-checked` attribute which is not defined in [WAI-ARIA Specifications][].

```html
<div role="checkbox" aria-not-checked="true">All conditions are met</div>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5f99a7/b6acf7c4aab0cfdc9f996abc7961790cbc97f39e.html">Open in a new tab</a>

This `div` element with a role of `searchbox` has an `aria-labelled` attribute (instead of `aria-labelledby`) which is not defined in [WAI-ARIA Specifications][].

```html
<span id="label">Birthday:</span>
<div contenteditable role="searchbox" aria-labelled="label" aria-placeholder="MM-DD-YYYY">
	01-01-2019
</div>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5f99a7/d528a33258103014c0a03cf1e418ee0620f7b4f6.html">Open in a new tab</a>

This `canvas` element does not have an `aria-` attribute specified.

```html
<canvas> </canvas>
```

## Glossary

### Outcome {#outcome}

A conclusion that comes from evaluating an ACT Rule on a [test subject][] or one of its constituent test target. An outcome can be one of the five following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target][] meets all expectations
- **Failed:** A [test target][] does not meet all expectations
- **cantTell:** Whether the rule is applicable, or not all expectations were met could not be fully determined by the tester.
- **Untested**: The tester has not attempted to evaluate the test subject.

**Note**: A rule has one `passed` or `failed` outcome for every [test target][]. When a tester evaluates a test target it can also be reported as `cantTell` if the rule cannot be tested in its entirety. For example, when applicability was automated, but the expectations have to be evaluated manually.

When there are no test targets the rule has one `inapplicable` outcome. If the tester is unable to determine whether there are test targets there will be one `cantTell` outcome. And when no evaluation has occurred the test target has one untested outcome. This means that each [test subject][] always has one or more outcomes.

Outcomes used in ACT Rules can be expressed using the [outcome property][] of the [[EARL10-Schema]][].

### WAI-ARIA specifications {#wai-aria-specifications}

The _WAI ARIA Specifications_ group both the WAI ARIA W3C Recommendation and ARIA modules, namely:

- [Accessible Rich Internet Applications (WAI-ARIA) 1.2](https://www.w3.org/TR/wai-aria-1.2/)
- [WAI-ARIA Graphics Module 1.0](https://www.w3.org/TR/graphics-aria-1.0/)
- [Digital Publishing WAI-ARIA Module 1.0](https://www.w3.org/TR/dpub-aria-1.0/)

**Note:** depending on the type of content being evaluated, part of the specifications might be irrelevant and should be ignored.

[earl10-schema]: https://www.w3.org/TR/act-rules-format-1.1/#biblio-earl10-schema
[outcome property]: https://www.w3.org/TR/EARL10-Schema/#outcome
[test subject]: https://www.w3.org/TR/act-rules-format-1.1/#test-subject
[test target]: https://www.w3.org/TR/act-rules-format/#test-target
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
