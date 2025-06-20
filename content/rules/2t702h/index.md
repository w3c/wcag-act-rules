---
title: "Summary element has non-empty accessible name"
permalink: /standards-guidelines/act/rules/2t702h/
ref: /standards-guidelines/act/rules/2t702h/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/2t702h/index.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> 2t702h</p>
  <p><strong>Date:</strong> Updated 12 May 2025</p>
  <p><strong>Authors:</strong> <a href="https://github.com/wilcofiers">Wilco Fiers</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It was approved and published by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: false
rule_meta:
  id: 2t702h
  name: "Summary element has non-empty accessible name"
  rule_type: atomic
  original_file: summary-non-empty-accessible-name-2t702h.md
  description: |
    This rule checks that each `summary` element has a non-empty accessible name.
  last_modified: 12 May 2025
  scs_tested:
    - handle: Name, Role, Value
      num: 4.1.2
      level: A
---

## Applicability

This rule applies to HTML `summary` elements for which all the following are true:

- the element is [included in the accessibility tree][]; and
- the element works as the [summary button for its parent `details` element][details summary]; and
- the element has no [explicit role][], or the [explicit role][] is ignored due to a [presentational role conflict][presentational roles conflict].

## Expectation

Each target element has an [accessible name][] that is not empty (`""`), nor just the name of the `::marker` pseudo element.

## Background

This rule is only applicable to `summary` elements that the browser will use as controls for a `details` element. Even though the [HTML specification - The summary element](https://html.spec.whatwg.org/#the-summary-element) requires the `summary` element to be the first child of `details`, this is not required for WCAG. And while this rule is not applicable to `summary` elements with an [explicit role][], most of the time these likely do still require an [accessible name][]. This is covered by other rules, such as the [Button has non-empty accessible name][97a4e1].

If the `summary` element is not included in the accessibility tree, but is still included in sequential focus navigation, this can result in accessibility issues not tested by this rule. This is covered under [Element with aria-hidden has no content in sequential focus navigation][6cfa84].

Note that some user agents expose the `summary` element with a `button` role. This deviates from the implicit ARIA semantics described in [ARIA in HTML](https://www.w3.org/TR/html-aria/#el-summary). Because some browsers do not give `summary` elements a button role, these elements need to be tested separately from the [Button has non-empty accessible name](https://www.w3.org/WAI/standards-guidelines/act/rules/97a4e1/) ACT rule.

### Assumptions

The rule assumes that all `summary` elements are [user interface components as defined by WCAG 2](https://www.w3.org/TR/WCAG22/#dfn-user-interface-components).

### Accessibility Support

There is a difference in how user agents expose the triangle indicating the control's expand state. As a result, some user agents include the triangle in the accessible name of the summary element.

### Bibliography

- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value)
- [ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA14)
- [ARIA16: Using aria-labelledby to provide a name for user interface controls](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA16)
- [Summary element entry for ARIA in HTML](https://www.w3.org/TR/html-aria/#el-summary)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>4.1.2 Name, Role, Value (Level A)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG22/#name-role-value">Learn more about 4.1.2 Name, Role, Value</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level A and higher.</li>
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

- [Accessibility Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-accessibility)
- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)
- [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)

## Test Cases

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2t702h/174322a2ade5e022c611bdb8389419ce299e3267.html">Open in a new tab</a>

This `summary` element has an [accessible name][] because of its text content.

```html
<details>
	<summary>Opening times</summary>
	<p>This is a website. We are available 24/7.</p>
</details>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2t702h/83d39ed6bf5538f6d251150530112b9f66fca6fa.html">Open in a new tab</a>

This `summary` element has an [accessible name][] because of its `aria-label` attribute.

```html
<details>
	<summary aria-label="Opening times"></summary>
	<p>This is a website. We are available 24/7.</p>
</details>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2t702h/61d7129d076b8cc168168d92734e1ae6ec72cf59.html">Open in a new tab</a>

This `summary` element has an [accessible name][] because of its `aria-labelledby` attribute.

```html
<span id="opening-times">Opening times</span>
<details>
	<summary aria-labelledby="opening-times"></summary>
	<p>This is a website. We are available 24/7.</p>
</details>
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2t702h/b1c41028fa588755e96a256917da173183aafeca.html">Open in a new tab</a>

This `summary` element has an [accessible name][] because of its text content. It does not need to be the first child element of `details`.

```html
<details>
	<p>This is a website. We are available 24/7.</p>
	<summary>Opening times</summary>
</details>
```

#### Passed Example 5

<a class="example-link" title="Passed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2t702h/d165641d4faa4b52b97ef661f94b9f7d039c63f7.html">Open in a new tab</a>

This first `summary` element has an [accessible name][] because of its text content. The second `summary` element is inapplicable because only the first `summary` element will be used as a control for the `details` element.

```html
<details>
	<summary>Opening times</summary>
	<summary></summary>
	<p>This is a website. We are available 24/7.</p>
</details>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2t702h/f0f5f9e727e46e257e5d6420a8ab11b760c75617.html">Open in a new tab</a>

This `summary` element has no [accessible name][], or an accessible name with just the `::marker` pseudo element, because it has no content or attribute that can provide it.

```html
<details>
	<summary></summary>
	<p>This is a website. We are available 24/7.</p>
</details>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2t702h/a7fd233a404e737baaee10e34c35e40bbe7f14bb.html">Open in a new tab</a>

This `summary` element has an [explicit role][] of `none`. However, it is [focusable][] (by default) which causes [Presentational Roles Conflict Resolution][presentational roles conflict]. It fails because it has an empty [accessible name][].

```html
<details>
	<summary role="none"></summary>
	<p>This is a website. We are available 24/7.</p>
</details>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2t702h/f76f484c92eec764dbd1ee3e5ee3421f230a56d7.html">Open in a new tab</a>

This first `summary` element has no [accessible name][] because it is empty. The second `summary` element is inapplicable because only the first `summary` element will be used as a control for the `details` element.

```html
<details>
	<summary></summary>
	<summary>Opening times</summary>
	<p>This is a website. We are available 24/7.</p>
</details>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2t702h/d0f1dd469c5e48feec2db9ef84a98e143212f574.html">Open in a new tab</a>

This `summary` element is not a child of a `details` element and so will not be interactive.

```html
<summary></summary>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2t702h/eb98ae3dbf17cb6ca91f27b0ae8d9d05f81cbb4d.html">Open in a new tab</a>

This `summary` element is not a direct child of a `details` element and so will not be interactive.

```html
<details>
	<div>
		<summary></summary>
	</div>
	<p>This is a website. We are available 24/7.</p>
</details>
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2t702h/8d8611c7fdca07f6aa3bf3df3850921b9a35356b.html">Open in a new tab</a>

This `summary` element has an explicit semantic role of `button`. These are tested under [Button has non-empty accessible name][97a4e1] instead. Note that while this example does not fail WCAG, under [ARIA in HTML](https://www.w3.org/TR/html-aria/#dfn-no-role) it is not allowed to override the role of a [summary for its parent details][details summary].

```html
<details>
	<summary role="button">Opening hours</summary>
	<p>This is a website. We are available 24/7.</p>
</details>
```

#### Inapplicable Example 4

<a class="example-link" title="Inapplicable Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2t702h/2fb5a6c2e2e4f6c70ac9e26f2d0617892972cd56.html">Open in a new tab</a>

This `summary` element is hidden to everyone.

```html
<details style="display:none">
	<summary></summary>
	<p>This is a website. We are available 24/7.</p>
</details>
```

## Glossary

### Accessible Name {#accessible-name}

The _accessible name_ is the programmatically determined name of a user interface element that is [included in the accessibility tree](#included-in-the-accessibility-tree).

The accessible name is calculated using the [accessible name and description computation][].

For native markup languages, such as HTML and SVG, additional information on how to calculate the accessible name can be found in [HTML Accessibility API Mappings 1.0, Accessible Name and Description Computation (working draft)](https://www.w3.org/TR/html-aam/#accessible-name-and-description-computation) and [SVG Accessibility API Mappings, Name and Description (working draft)](https://www.w3.org/TR/svg-aam/#mapping_additional).

For more details, see [examples of accessible name][].

**Note:** As per the [accessible name and description computation][], each element always has an accessible name. When no accessible name is provided, the element will nonetheless be assigned an empty (`""`) one.

**Note:** As per the [accessible name and description computation][], accessible names are [flat string](https://www.w3.org/TR/accname-1.1/#terminology) trimmed of leading and trailing whitespace. Notably, it is not possible for a non-empty accessible name to be composed only of whitespace since these must be trimmed.

### Explicit Semantic Role {#explicit-role}

The _explicit semantic role_ of an element is determined by its [role attribute][] (if any).

The [role attribute][] takes a list of tokens. The explicit semantic role is the first valid role in this list. The valid roles are all non-abstract roles from [WAI-ARIA Specifications][]. If the element has no [role attribute][], or if it has one with no valid role, then this element has no explicit semantic role.

Other roles may be added as they become available. Not all roles will be supported in all assistive technologies. Testers are encouraged to adjust which roles are allowed according to the [accessibility support base line][]. For the purposes of executing test cases in all rules, it should be assumed that all roles are supported by assistive technologies so that none of the roles fail due to lack of accessibility support.

### Focusable {#focusable}

An element is _focusable_ if one or both of the following are true:

- the element is part of [sequential focus navigation][]; or
- the element has a [tabindex value][] that is not null.

**Exception**: Elements that lose focus and do not regain focus during a period of up to 1 second after gaining focus, without the user interacting with the page the element is on, are not considered _focusable_.

Notes:

- The 1 second time span is an arbitrary limit which is not included in WCAG. Given that scripts can manage the focus state of elements, testing the focusability of an element consistently would be impractical without a time limit.
- The [tabindex value][] of an element is the value of the [tabindex attribute][] parsed using the [rules for parsing integers][]. For the [tabindex value][] to be different from null, it needs to be [parsed][rules for parsing integers] without errors.

### Included in the accessibility tree {#included-in-the-accessibility-tree}

Elements included in the accessibility tree of platform specific accessibility APIs are exposed to assistive technologies. This allows users of assistive technology to access the elements in a way that meets the requirements of the individual user.

The general rules for when elements are included in the accessibility tree are defined in the [core accessibility API mappings](https://www.w3.org/TR/core-aam/). For native markup languages, such as HTML and SVG, additional rules for when elements are included in the accessibility tree can be found in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/) and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/).

For more details, see [examples of included in the accessibility tree][].

[Programmatically hidden](#programmatically-hidden) elements are removed from the accessibility tree. However, some browsers will leave [focusable](#focusable) elements with an `aria-hidden` attribute set to `true` in the accessibility tree. Because they are hidden, these elements are considered **not** included in the accessibility tree. This may cause confusion for users of assistive technologies because they may still be able to interact with these focusable elements using sequential keyboard navigation, even though the element should not be included in the accessibility tree.

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

### Programmatically Hidden {#programmatically-hidden}

An HTML element is _programmatically hidden_ if either it has a [computed][] CSS property `visibility` whose value is not `visible`; or at least one of the following is true for any of its [inclusive ancestors][] in the [flat tree][]:

- has a [computed][] CSS property `display` of `none`; or
- has an `aria-hidden` attribute set to `true`

**Note**: Contrary to the other conditions, the `visibility` CSS property may be reverted by descendants.

**Note**: The [HTML standard suggests](https://html.spec.whatwg.org/multipage/rendering.html#hidden-elements) setting the CSS `display` property to `none` for elements with the `hidden` attribute. While not required by HTML, all modern browsers follow this suggestion. Because of this the `hidden` attribute is not used in this definition. In browsers that use this suggestion, overriding the CSS `display` property can reveal elements with the `hidden` attribute.

### WAI-ARIA specifications {#wai-aria-specifications}

The _WAI ARIA Specifications_ group both the WAI ARIA W3C Recommendation and ARIA modules, namely:

- [Accessible Rich Internet Applications (WAI-ARIA) 1.2](https://www.w3.org/TR/wai-aria-1.2/)
- [WAI-ARIA Graphics Module 1.0](https://www.w3.org/TR/graphics-aria-1.0/)
- [Digital Publishing WAI-ARIA Module 1.0](https://www.w3.org/TR/dpub-aria-1.0/)

**Note:** depending on the type of content being evaluated, part of the specifications might be irrelevant and should be ignored.

[6cfa84]: https://www.w3.org/WAI/standards-guidelines/act/rules/6cfa84/
[97a4e1]: https://www.w3.org/WAI/standards-guidelines/act/rules/97a4e1/
[accessibility support base line]: https://www.w3.org/TR/WCAG-EM/#step1c 'Definition of accessibility support base line'
[accessible name and description computation]: https://www.w3.org/TR/accname 'Accessible Name and Description Computation'
[accessible name]: #accessible-name 'Definition of accessible name'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[details summary]: https://html.spec.whatwg.org/multipage/interactive-elements.html#summary-for-its-parent-details ' HTML 5 definition of summary for its parent details'
[earl10-schema]: https://www.w3.org/TR/act-rules-format-1.1/#biblio-earl10-schema
[examples of accessible name]: https://act-rules.github.io/pages/examples/accessible-name/
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[explicit role]: #explicit-role 'Definition of explicit role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focusable]: #focusable 'Definition of focusable'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[outcome property]: https://www.w3.org/TR/EARL10-Schema/#outcome
[presentational roles conflict]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[test subject]: https://www.w3.org/TR/act-rules-format-1.1/#test-subject
[test target]: https://www.w3.org/TR/act-rules-format/#test-target
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
