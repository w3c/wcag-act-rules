---
title: "aria-* attribute is defined in WAI-ARIA"
permalink: /standards-guidelines/act/rules/aria-attr-defined-5f99a7/
ref: /standards-guidelines/act/rules/aria-attr-defined-5f99a7/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/aria-attr-defined-5f99a7.md
footer: |
  <p><strong>Date:</strong> Updated October 1st, 2021</p>
  <p><strong>Authors:</strong> <a href="https://github.com/jkodu">Jey Nandakumar</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules community group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>.</p>
proposed: true
rule_meta:
  id: 5f99a7
  name: "`aria-*` attribute is defined in WAI-ARIA"
  rule_type: atomic
  description: |
    This rule checks that each `aria-` attribute specified is defined in ARIA 1.1.
  accessibility_requirements:
    null
  input_aspects:
    - handle: DOM Tree
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom
  last_modified: October 1st, 2021
---

{::options toc_levels="2" /}
{::nomarkdown}
{% include toc.html type="start" title="Page Contents" %}
{:/}

- This will be replaced by an automatically generated TOC when using Markdown formatting.
{:toc}

{::nomarkdown}
{% include toc.html type="end" %}
{:/}

## Applicability

This rule applies to any attribute that starts with `aria-`.

## Expectation

Each target attribute is defined in [WAI-ARIA Specifications][].

## Assumptions

_There are currently no assumptions_

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- [ARIA in HTML (working draft)](https://www.w3.org/TR/html-aria/#index-aria-global)
- [WAI ARIA Supported States and Properties](http://www.w3.org/TR/wai-aria/#states_and_properties)
- [G108: Using markup features to expose the name and role](https://www.w3.org/WAI/WCAG21/Techniques/general/G108)
- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value)
- [Semantics and ARIA](https://developers.google.com/web/fundamentals/accessibility/semantics-aria/)

## Test Cases

### Passed

#### Passed Example 1

This `article` element has an `aria-atomic` attribute which is defined in [WAI-ARIA Specifications][].

```html
<article aria-atomic="true">This is a description of something cool...</article>
```

#### Passed Example 2

This `div` element with a role of `dialog` has an `aria-modal` attribute which is defined in [WAI-ARIA Specifications][].

```html
<div role="dialog" aria-modal="true">Contains modal content...</div>
```

#### Passed Example 3

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

This `li` element with a role of `menuitemcheckbox` has an `aria-*` attribute which is not defined in [WAI-ARIA Specifications][].

```html
<ul>
	<li role="menuitemcheckbox" aria-not-checked="true">List Item</li>
</ul>
```

#### Failed Example 2

This `div` element with a role of `searchbox` has an `aria-*` attribute (`aria-labelled`) which is not defined in [WAI-ARIA Specifications][].

```html
<span id="label">Birthday:</span>
<div contenteditable role="searchbox" aria-labelled="label" aria-placeholder="MM-DD-YYYY">
	01-01-2019
</div>
```

### Inapplicable

#### Inapplicable Example 1

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

- [Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria-1.1/)
- [WAI-ARIA Graphics Module 1.0](https://www.w3.org/TR/graphics-aria-1.0/)
- [Digital Publishing WAI-ARIA Module 1.0](https://www.w3.org/TR/dpub-aria-1.0/)

**Note:** depending on the type of content being evaluated, part of the specifications might be irrelevant and should be ignored.

{% include_relative implementations/5f99a7.md %}

## Changelog

This is the first version of this ACT rule.

[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
