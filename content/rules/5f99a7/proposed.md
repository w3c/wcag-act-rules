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
  <p><strong>Date:</strong> Updated 11 November 2022</p>
  <p><strong>Authors:</strong> <a href="https://github.com/jkodu">Jey Nandakumar</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: 5f99a7
  name: "ARIA attribute is defined in WAI-ARIA"
  rule_type: atomic
  description: |
    This rule checks that each `aria-` attribute specified is defined in ARIA 1.2.
  last_modified: 11 November 2022
---

## Applicability

This rule applies to any attribute that starts with `aria-`.

## Expectation

Each target attribute is defined in [WAI-ARIA Specifications][].

## Assumptions

_There are currently no assumptions_

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- [ARIA in HTML](https://www.w3.org/TR/html-aria/#index-aria-global)
- [WAI ARIA Supported States and Properties](https://www.w3.org/TR/wai-aria-1.2/#supportedState)
- [G108: Using markup features to expose the name and role](https://www.w3.org/WAI/WCAG21/Techniques/general/G108)
- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value)
- [Semantics and ARIA](https://developers.google.com/web/fundamentals/accessibility/semantics-aria/)

## Accessibility Requirements Mapping

This rule is not required for conformance.

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

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5f99a7/31ac49fcb186ee2a233355494fc5e774212ca3d7.html">Open in a new tab</a>

This `div` element with a role of `dialog` has an `aria-modal` attribute which is defined in [WAI-ARIA Specifications][].

```html
<div role="dialog" aria-modal="true">Contains modal content...</div>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5f99a7/3314945d4bbec5b34f9a3c2d90da7cb9f8e7ce5a.html">Open in a new tab</a>

This `div` element with a role of `textbox` has multiple `aria-*` attributes which are defined in [WAI-ARIA Specifications][].

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

<a class="example-link" title="Passed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5f99a7/4373f9e70eb353c76d7e9d4c2cc4dcfd6c17ad70.html">Open in a new tab</a>

This `input` element with a role of `spinbutton` has multiple `aria-*` attributes specified which are all defined in [WAI-ARIA Specifications][].

```html
<label for="spinbutton">Enter a number between 0 and 100:</label>
<input
	id="spinbutton"
	role="spinbutton"
	aria-valuemax="100"
	aria-valuemin="0"
	aria-valuenow="25"
	type="number"
	value="25"
/>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5f99a7/7296da1d7d8f1ede523cc6c4b7def0f8dbd1e887.html">Open in a new tab</a>

This `li` element with a role of `menuitemcheckbox` has an `aria-*` attribute which is not defined in [WAI-ARIA Specifications][].

```html
<ul>
	<li role="menuitemcheckbox" aria-not-checked="true">List Item</li>
</ul>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5f99a7/b6acf7c4aab0cfdc9f996abc7961790cbc97f39e.html">Open in a new tab</a>

This `div` element with a role of `searchbox` has an `aria-*` attribute (`aria-labelled`) which is not defined in [WAI-ARIA Specifications][].

```html
<span id="label">Birthday:</span>
<div contenteditable role="searchbox" aria-labelled="label" aria-placeholder="MM-DD-YYYY">
	01-01-2019
</div>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5f99a7/d528a33258103014c0a03cf1e418ee0620f7b4f6.html">Open in a new tab</a>

This `canvas` element does not have an `aria-*` attribute specified.

```html
<canvas> </canvas>
```

## Glossary

### Outcome {#outcome}

An _outcome_ is a conclusion that comes from evaluating an ACT Rule on a [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) or one of its constituent [test target](https://www.w3.org/TR/act-rules-format/#test-target). An outcome can be one of the three following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) meets all expectations
- **Failed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) does not meet all expectations

**Note:** A rule has one `passed` or `failed` outcome for every [test target](https://www.w3.org/TR/act-rules-format/#test-target). When there are no test targets the rule has one `inapplicable` outcome. This means that each [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) will have one or more outcomes.

**Note:** Implementations using the [EARL10-Schema](https://www.w3.org/TR/EARL10-Schema/) can express the outcome with the [outcome property](https://www.w3.org/TR/EARL10-Schema/#outcome). In addition to `passed`, `failed` and `inapplicable`, EARL 1.0 also defined an `incomplete` outcome. While this cannot be the outcome of an ACT Rule when applied in its entirety, it often happens that rules are only partially evaluated. For example, when applicability was automated, but the expectations have to be evaluated manually. Such "interim" results can be expressed with the `incomplete` outcome.

### WAI-ARIA specifications {#wai-aria-specifications}

The _WAI ARIA Specifications_ group both the WAI ARIA W3C Recommendation and ARIA modules, namely:

- [Accessible Rich Internet Applications (WAI-ARIA) 1.2](https://www.w3.org/TR/wai-aria-1.2/)
- [WAI-ARIA Graphics Module 1.0](https://www.w3.org/TR/graphics-aria-1.0/)
- [Digital Publishing WAI-ARIA Module 1.0](https://www.w3.org/TR/dpub-aria-1.0/)

**Note:** depending on the type of content being evaluated, part of the specifications might be irrelevant and should be ignored.

[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
