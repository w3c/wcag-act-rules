---
title: "Element in sequential focus order has visible focus"
permalink: /standards-guidelines/act/rules/oj04fd/proposed/
ref: /standards-guidelines/act/rules/oj04fd/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/oj04fd/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> oj04fd</p>
  <p><strong>Date:</strong> Updated 20 July 2023</p>
  <p><strong>Authors:</strong> <a href="https://github.com/Jym77">Jean-Yves Moyen</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: oj04fd
  name: "Element in sequential focus order has visible focus"
  rule_type: atomic
  description: |
    This rule checks that each element in sequential focus order has some visible focus indication.
  last_modified: 20 July 2023
  scs_tested:
    - handle: Focus Visible
      num: 2.4.7
      level: AA
---

## Applicability

The rule applies to any element which is part of [sequential focus navigation][] in an [HTML document](https://html.spec.whatwg.org/#document).

## Expectation

For each target element, there is at least one device pixel inside the [scrolling area][] of the [viewport][] whose [HSL color value](https://www.w3.org/TR/css-color-3/#hsl-color) is different when the element is [focused][] from when it is not.

## Assumptions

There are no assumptions.

## Accessibility Support

There are no accessibility support issues known.

## Background

Default styling in user agents provides a focus indication for focusable elements (even those that are not focusable by default), as shown in Passed Examples 1 and 2. Many examples in this rule need to **remove** that indicator in order to illustrate various situations. This is bad practice and should normally be avoided.

WCAG 2.0 and 2.1 do not have any requirement of how big or small focus indicator should be, or how far or near from the [focusable][] element it should be. Thus it is possible to pass this rule and [Success Criterion 2.4.7 Focus Visible][sc247] with barely perceptible changes at the other end of the page. That would however still be an accessibility issue. WCAG 2.2 includes [Success Criterion 2.4.11 Focus Appearance][sc2411] and [Success Criterion 2.4.12 Focus Not Obscured (Minimum)][sc2412] specifying how big the focus indicator should be. All Passed Examples in this rule satisfy those success criteria.

WCAG does not require that the focus indicator for each [focusable][] element is unique in appearance. Therefore, this rule can pass even if several focus indicators are identical. Such a situation may nonetheless cause confusion and all examples in this rule avoid it.

### Bibliography

- [Success Criterion 2.4.7 Focus Visible][sc247]
- [Success Criterion 2.4.11 Focus Appearance][sc2411]
- [Success Criterion 2.4.12 Focus Not Obscured (Minimum)][sc2412]
- [Understanding Success Criterion 2.4.7: Focus Visible][usc247]
- [Understanding Success Criterion 2.4.11: Focus Appearance][usc2411]
- [Understanding Success Criterion 2.4.12: Focus Not Obscured (Minimum)][usc2412]

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>2.4.7 Focus Visible (Level AA)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#focus-visible">Learn more about 2.4.7 Focus Visible</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level AA and higher.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
</ul>

## Input Aspects

The following aspects are required in using this rule.

- [CSS styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)
- [DOM tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)

## Test Cases

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/oj04fd/52be6331dc0978990a8b806a9a4a84bf738a43e1.html">Open in a new tab</a>

The [focusable][] element is part of [sequential focus navigation][]. It has an outline when it is [focused][] (due to default User Agent's styling). The outline has a different `hsl` value compared to the `hsl` value of the background over which the outline appears (the exact values depend on the type of browser being used).

```html
<a href="https://act-rules.github.io/">ACT rules</a>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/oj04fd/95cf4fdf26825900e91a30eaf6c2235516db79f9.html">Open in a new tab</a>

The [focusable][] element is part of [sequential focus navigation][]. It has an outline when it is [focused][] (due to default User Agent's styling). The outline has a different `hsl` value compared to the `hsl` value of the background over which the outline appears (the exact values depend on the type of browser being used).

```html
<span tabindex="0">Act rules</span>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/oj04fd/b44aa294df6f0de62f11f6ae732087d92c90b448.html">Open in a new tab</a>

The [focusable][] element is part of [sequential focus navigation][]. Its parent `span` puts a border around it when it is [focused][] (the border of the `span` element). The border's `hsl` value (`hsl(240, 100%, 25%)`) is different to the `hsl` value of the background (`hsl(0, 0%, 100%)`) over which the border appears.

```html
<link rel="stylesheet" href="/test-assets/focus-visible-oj04fd/styles.css" />
<script src="/test-assets/focus-visible-oj04fd/script.js"></script>

<span id="indicator" class="border">
	<a
		id="act"
		class="no-focus-default"
		onfocus="toggleActivation('indicator')"
		onblur="toggleActivation('indicator')"
		href="https://act-rules.github.io/"
		>ACT rules</a
	>
</span>
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/oj04fd/dd9628d86628e285fe99ce98efdacbe441c20ca5.html">Open in a new tab</a>

Each of these three [focusable][] elements has a blue square in front of it when it is [focused][]. The square's `hsl` value (`hsl(240, 100%, 25%)`) is different to the `hsl` value of the background (`hsl(0, 0%, 100%)`) over which the square appears.

```html
<link rel="stylesheet" href="/test-assets/focus-visible-oj04fd/styles.css" />
<script src="/test-assets/focus-visible-oj04fd/script.js"></script>

<span id="indicator-act" class="indicator solid"></span>
<a
	id="act"
	class="no-focus-default"
	onfocus="toggleActivation('indicator-act'); toggleActivation('indicator-wcag')"
	onblur="toggleActivation('indicator-act'); toggleActivation('indicator-wcag')"
	href="https://act-rules.github.io/"
	>ACT rules</a
>
<span id="indicator-wcag" class="indicator solid"></span>
<a
	id="wcag"
	class="no-focus-default"
	onfocus="toggleActivation('indicator-wcag'); toggleActivation('indicator-w3c')"
	onblur="toggleActivation('indicator-wcag'); toggleActivation('indicator-w3c')"
	href="https://www.w3.org/TR/WCAG21/"
	>WCAG</a
>
<span id="indicator-w3c" class="indicator solid"></span>
<a
	id="w3c"
	class="no-focus-default"
	onfocus="toggleActivation('indicator-w3c'); toggleActivation('indicator-final')"
	onblur="toggleActivation('indicator-w3c'); toggleActivation('indicator-final')"
	href="https://www.w3.org/"
	>WCAG</a
>
<span id="indicator-final" class="indicator solid"></span>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/oj04fd/f1c9efb4c8d1b5f7870c693bce2e6ca046dd768d.html">Open in a new tab</a>

The [focusable][] element does not have any pixel changing color when it is [focused][] because the default styling has been overwritten by a style that removes the outline.

```html
<link rel="stylesheet" href="/test-assets/focus-visible-oj04fd/styles.css" />
<a class="no-focus-default" href="https://act-rules.github.io/">ACT rules</a>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/oj04fd/90789ad82a761b7697418e8cb403db103f0925a2.html">Open in a new tab</a>

This document contains no [focusable][] element.

```html
<span>ACT rules</span>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/oj04fd/b12f1f45eef29c30197ca3bda79d793cd90eeadd.html">Open in a new tab</a>

None of the [focusable][] elements in this document are part of [sequential focus navigation][].

```html
<a tabindex="-1" href="https://act-rules.github.io/">ACT rules</a>
<a tabindex="-1" href="https://www.w3.org/TR/WCAG21/">WCAG</a>
```

## Glossary

### Focusable {#focusable}

An element is _focusable_ if one or both of the following are true:

- the element is part of [sequential focus navigation][]; or
- the element has a [tabindex value][] that is not null.

**Exception**: Elements that lose focus during a period of up to 1 second after gaining focus, without the user interacting with the page the element is on, are not considered _focusable_.

Notes:

- The 1 second time span is an arbitrary limit which is not included in WCAG. Given that scripts can manage the focus state of elements, testing the focusability of an element consistently would be impractical without a time limit.
- The [tabindex value][] of an element is the value of the [tabindex attribute][] parsed using the [rules for parsing integers][]. For the [tabindex value][] to be different from null, it needs to be [parsed][rules for parsing integers] without errors.

### Focused {#focused}

An element is said to be _focused_ when the element matches the [`:focus` pseudo-class](https://drafts.csswg.org/selectors-4/#focus-pseudo) uninterruptedly for a period of 1 second after a user stopped interacting with the page.

The 1 second time span is an arbitrary limit which is not included in WCAG. Given the possibility of the focus state of elements being managed through scripts, testing the focused state of an element consistently would be impractical without a time limit.

### Outcome {#outcome}

An _outcome_ is a conclusion that comes from evaluating an ACT Rule on a [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) or one of its constituent [test target](https://www.w3.org/TR/act-rules-format/#test-target). An outcome can be one of the three following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) meets all expectations
- **Failed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) does not meet all expectations

**Note:** A rule has one `passed` or `failed` outcome for every [test target](https://www.w3.org/TR/act-rules-format/#test-target). When there are no test targets the rule has one `inapplicable` outcome. This means that each [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) will have one or more outcomes.

**Note:** Implementations using the [EARL10-Schema](https://www.w3.org/TR/EARL10-Schema/) can express the outcome with the [outcome property](https://www.w3.org/TR/EARL10-Schema/#outcome). In addition to `passed`, `failed` and `inapplicable`, EARL 1.0 also defined an `incomplete` outcome. While this cannot be the outcome of an ACT Rule when applied in its entirety, it often happens that rules are only partially evaluated. For example, when applicability was automated, but the expectations have to be evaluated manually. Such "interim" results can be expressed with the `incomplete` outcome.

[focusable]: #focusable 'Definition of Focusable'
[focused]: #focused 'Definition of Focused'
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[sc2411]: https://www.w3.org/TR/WCAG22/#focus-appearance 'Success Criterion 2.4.11 Focus Appearance'
[sc2412]: https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum 'Success Criterion 2.4.12 Focus Not Obscured (Minimum)'
[sc247]: https://www.w3.org/TR/WCAG21/#focus-visible 'Success Criterion 2.4.7 Focus Visible'
[scrolling area]: https://drafts.csswg.org/cssom-view/#scrolling-area 'CSS specification of Scrolling Area'
[sequential focus navigation]: https://html.spec.whatwg.org/#sequential-focus-navigation 'HTML specification of Sequential focus navigation'
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[usc2411]: https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html 'Understanding Success Criterion 2.4.11: Focus Appearance'
[usc2412]: https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html 'Understanding Success Criterion 2.4.12: Focus Not Obscured (Minimum)'
[usc247]: https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html 'Understanding Success Criterion 2.4.7: Focus Visible'
[viewport]: https://drafts.csswg.org/css2/#viewport 'CSS definition of Viewport'
