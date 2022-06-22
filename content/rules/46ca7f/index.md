---
title: "Element marked as decorative is not exposed"
permalink: /standards-guidelines/act/rules/46ca7f/
ref: /standards-guidelines/act/rules/46ca7f/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/46ca7f/index.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> 46ca7f</p>
  <p><strong>Date:</strong> Updated 28 January 2022</p>
  <p><strong>Authors:</strong> <a href="https://github.com/Jym77">Jean-Yves Moyen</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules community group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It was approved and published by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: false
rule_meta:
  id: 46ca7f
  name: "Element marked as decorative is not exposed"
  rule_type: atomic
  description: |
    This rule checks that elements marked as decorative either are not included in the accessibility tree, or have a presentational role.
  last_modified: 28 January 2022
---

## Applicability

This rule applies to any element which is [marked as decorative][].

## Expectation

Each target element either is not [included in the accessibility tree][] or has a [semantic role][] of `none` or `presentation`.

## Assumptions

_There are currently no assumptions_

## Accessibility Support

Implementation of the [Presentational Roles Conflict Resolution][] differs slightly from one user agent to the other. Hence, some elements might be exposed by one user agent and not by another, and consequently might create accessibility issues only for some users. Nevertheless, triggering the conflict is a bad practice.

## Background

Elements are normally [marked as decorative][] to convey the intention of the author that they are [pure decoration][decorative] and thus shouldn't be exposed to assistive technologies. On the other hand, elements that are [focusable][] are important to know for anybody and should be exposed to assistive technologies; and elements that are defining any [global ARIA attribute][] indicate an intention to communicate something to the assistive technologies (through the `aria-*` attribute). When an element is both [marked as decorative][] and either [focusable][] or defining a [global ARIA attribute][], a conflict arises between these two intentions. The [conflict is resolved][presentational roles conflict resolution] by exposing the element.

Whenever such a conflict occurs, this indicates at the very least mismatching intentions. Such a conflict should be avoided.

When these conflicts arise on [decorative][] [non-text content][], this is also a failure of [Success Criterion 1.1.1: Non-text Content][sc111] because [decorative][] [non-text content][] must be implemented in a way that allows assistive technologies to ignore it. When these conflicts arise on text content, or on content which is not [decorative][], this is not a failure of WCAG. Therefore this rule is not mapping to any specific WCAG Success Criterion, and is not an accessibility requirement for WCAG.

## Accessibility Requirements Mapping

This rule is not required for conformance.

## Input Aspects

The following aspects are required in using this rule.

- [Accessibility tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-accessibility)
- [CSS styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)
- [DOM tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)

## Test Cases

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/46ca7f/e5b8fa7ab66409e7b52b335a8b6aebe11fd78635.html">Open in a new tab</a>

This `img` element is [marked as decorative][] through its empty `alt` attribute and has [semantic role][] of `none`.

```html
<img src="/test-assets/shared/w3c-logo.png" alt="" />
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/46ca7f/b40e6ce081099b8bf0f76a43f4c27f12df342ddd.html">Open in a new tab</a>

This `img` element is [marked as decorative][] through its empty `alt` attribute and is not [included in the accessibility tree][] because of the `aria-hidden` attribute.

```html
<img src="/test-assets/shared/w3c-logo.png" alt="" aria-hidden="true" />
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/46ca7f/6f8e6014c133635fecac02e1087a666c5014ae5f.html">Open in a new tab</a>

This `img` element is [marked as decorative][] through its empty `alt` attribute and is not [included in the accessibility tree][] because it is `hidden` to everyone.

```html
<img src="/test-assets/shared/w3c-logo.png" alt="" hidden />
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/46ca7f/eb5983ff8bb0f85c891d48f96106337446797d8f.html">Open in a new tab</a>

This `nav` element is [marked as decorative][] through its `role` attribute and has a [semantic role][] of `presentation`.

```html
<nav role="presentation">
	<a href="https://act-rules.github.io/" aria-label="ACT rules">ACT rules</a>
</nav>
```

#### Passed Example 5

<a class="example-link" title="Passed Example 5" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/46ca7f/9c51e8f0568ab3401375114dd0eded2eddfe231a.html">Open in a new tab</a>

This `img` element is [marked as decorative][] through its `role` attribute and has a [semantic role][] of `presentation` because own attributes are not required to be exposed and thus do not trigger the [presentational roles conflict resolution][].

```html
<img src="/test-assets/shared/w3c-logo.png" role="presentation" alt="W3C logo" />
```

#### Passed Example 6

<a class="example-link" title="Passed Example 6" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/46ca7f/6687821a71b53e0e1764e895900a6bad46412b5c.html">Open in a new tab</a>

This `svg` element is [marked as decorative][] through its `role` attribute and has a [semantic role][] of `none`.

```html
<svg role="none">
	<circle cx="50" cy="50" r="40" fill="yellow"></circle>
</svg>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/46ca7f/e136a03c52c01c1b190c7372d83463f3c6502de9.html">Open in a new tab</a>

This `nav` element is [marked as decorative][] through its `role` attribute but has a non-empty `aria-label` attribute causing it to be [included in the accessibility tree][] with its [implicit role][] of `navigation`.

```html
<nav role="presentation" aria-label="global">
	<a href="https://act-rules.github.io/" aria-label="ACT rules">ACT rules</a>
</nav>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/46ca7f/96c1f58088f1e32c965f38ddc50d4b88f6a0f022.html">Open in a new tab</a>

This `img` element is [marked as decorative][] through its empty `alt` attribute but has a non-empty `aria-labelledby` attribute causing it to be [included in the accessibility tree][] with its [implicit role][] of `img`.

```html
<img src="/test-assets/shared/w3c-logo.png" alt="" aria-labelledby="label" /> <span hidden id="label">W3C logo</span>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/46ca7f/b4329d21bd80d961408bf066a70998417234f200.html">Open in a new tab</a>

This `svg` element is [marked as decorative][] through its `role` attribute but has a non-empty `aria-label` attribute causing it to be [included in the accessibility tree][] with its [implicit role][] of `graphics-document`.

```html
<svg role="none" aria-label="Yellow circle">
	<circle cx="50" cy="50" r="40" fill="yellow"></circle>
</svg>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/46ca7f/a48478825dc5baf21cc79bfcfbe12ed462590f1e.html">Open in a new tab</a>

This `img` element is not [marked as decorative][].

```html
<img src="/test-assets/shared/w3c-logo.png" aria-label="W3C logo" />
```

## Glossary

### Explicit Semantic Role {#explicit-role}

The _explicit semantic role_ of an element is determined by its [role attribute][] (if any).

The [role attribute][] takes a list of tokens. The explicit semantic role is the first valid role in this list. The valid roles are all non-abstract roles from [WAI-ARIA Specifications][]. If the element has no [role attribute][], or if it has one with no valid role, then this element has no explicit semantic role.

Other roles may be added as they become available. Not all roles will be supported in all assistive technologies. Testers are encouraged to adjust which roles are allowed according to the [accessibility support base line][]. For the purposes of executing test cases in all rules, it should be assumed that all roles are supported by assistive technologies so that none of the roles fail due to lack of accessibility support.

### Focusable {#focusable}

Elements that can become the target of keyboard input as described in the [HTML](https://www.w3.org/TR/html) specification of [focusable](https://html.spec.whatwg.org/#focusable-area) and [can be focused](https://html.spec.whatwg.org/#specially-focusable).

### Implicit Semantic Role {#implicit-role}

The _implicit semantic role_ of an element is a pre-defined value given by the host language which depends on the element and its ancestors.

Implicit roles for HTML and SVG, are documented in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/#html-element-role-mappings) and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/#mapping_role_table).

### Included in the accessibility tree {#included-in-the-accessibility-tree}

Elements included in the accessibility tree of platform specific accessibility APIs are exposed to assistive technologies. This allows users of assistive technology to access the elements in a way that meets the requirements of the individual user.

The general rules for when elements are included in the accessibility tree are defined in the [core accessibility API mappings](https://www.w3.org/TR/core-aam/). For native markup languages, such as HTML and SVG, additional rules for when elements are included in the accessibility tree can be found in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/) and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/).

For more details, see [examples of included in the accessibility tree][].

[Programmatically hidden](#programmatically-hidden) elements are removed from the accessibility tree. However, some browsers will leave [focusable](#focusable) elements with an `aria-hidden` attribute set to `true` in the accessibility tree. Because they are hidden, these elements are considered **not** included in the accessibility tree. This may cause confusion for users of assistive technologies because they may still be able to interact with these focusable elements using sequential keyboard navigation, even though the element should not be included in the accessibility tree.

### Marked as decorative {#marked-as-decorative}

An element is _marked as decorative_ if one or more of the following conditions is true:

- it has an [explicit role][] of `none` or `presentation`; or
- it is an `img` element with an `alt` attribute whose value is the empty string (`alt=""`), and with no [explicit role][].

Elements are marked as decorative as a way to convey the intention of the author that they are [pure decoration][]. It is different from the element actually being [pure decoration][] as authors may make mistakes. It is different from the element being effectively ignored by assistive technologies as rules such as [presentational roles conflict resolution][] may overwrite this intention.

Elements can also be ignored by assistive technologies if they are [programmatically hidden][]. This is different from marking the element as decorative and does not convey the same intention. Notably, being [programmatically hidden][] may change as users interact with the page (showing and hiding elements) while being marked as decorative should stay the same through all states of the page.

### Outcome {#outcome}

An _outcome_ is a conclusion that comes from evaluating an ACT Rule on a [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) or one of its constituent [test target](https://www.w3.org/TR/act-rules-format/#test-target). An outcome can be one of the three following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) meets all expectations
- **Failed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) does not meet all expectations

**Note:** A rule has one `passed` or `failed` outcome for every [test target](https://www.w3.org/TR/act-rules-format/#test-target). When there are no test targets the rule has one `inapplicable` outcome. This means that each [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) will have one or more outcomes.

**Note:** Implementations using the [EARL10-Schema](https://www.w3.org/TR/EARL10-Schema/) can express the outcome with the [outcome property](https://www.w3.org/TR/EARL10-Schema/#outcome). In addition to `passed`, `failed` and `inapplicable`, EARL 1.0 also defined an `incomplete` outcome. While this cannot be the outcome of an ACT Rule when applied in its entirety, it often happens that rules are only partially evaluated. For example, when applicability was automated, but the expectations have to be evaluated manually. Such "interim" results can be expressed with the `incomplete` outcome.

### Programmatically Hidden {#programmatically-hidden}

An HTML element is _programmatically hidden_ if either it has a [computed][] CSS property `visibility` whose value is not `visible`; or at least one of the following is true for any of its [inclusive ancestors][] in the [flat tree][]:

- has a `hidden` attribute; or
- has a [computed][] CSS property `display` of `none`; or
- has an `aria-hidden` attribute set to `true`

**Note**: Contrarily to the other conditions, the `visibility` CSS property may be reverted by descendants.

### Semantic Role {#semantic-role}

The _semantic role_ of an element is determined by the first of these cases that applies:

1. **Conflict** If the element is [marked as decorative][], but the element is [included in the accessibility tree][]; or would be [included in the accessibility tree][] when it is not [programmatically hidden][], then its _semantic role_ is its **[implicit role][]**.
1. **Explicit** If the element has an [explicit role][], then its _semantic role_ is its [explicit role][].
1. **Implicit** The _semantic role_ of the element is its [implicit role][].

This definition can be used in expressions such as "semantic `button`" meaning any element with a semantic role of `button`.

### WAI-ARIA specifications {#wai-aria-specifications}

The _WAI ARIA Specifications_ group both the WAI ARIA W3C Recommendation and ARIA modules, namely:

- [Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria-1.1/)
- [WAI-ARIA Graphics Module 1.0](https://www.w3.org/TR/graphics-aria-1.0/)
- [Digital Publishing WAI-ARIA Module 1.0](https://www.w3.org/TR/dpub-aria-1.0/)

**Note:** depending on the type of content being evaluated, part of the specifications might be irrelevant and should be ignored.

{% include_relative _versions.md %}

[accessibility support base line]: https://www.w3.org/TR/WCAG-EM/#step1c 'Definition of accessibility support base line'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[decorative]: https://www.w3.org/TR/WCAG21/#dfn-pure-decoration 'WCAG definition of Pure decoration'
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[explicit role]: #explicit-role 'Definition of Explicit Role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focusable]: #focusable 'Definition of Focusable'
[global aria attribute]: https://www.w3.org/TR/wai-aria-1.1/#global_states 'List of Global ARIA States and Properties'
[implicit role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as decorative'
[non-text content]: https://www.w3.org/TR/WCAG21/#dfn-non-text-content 'WCAG definition of Non-text content'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[programmatically hidden]: #programmatically-hidden 'Definition of Programmatically Hidden'
[pure decoration]: https://www.w3.org/TR/WCAG21/#dfn-pure-decoration 'WCAG definition of Pure Decoration'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[sc111]: https://www.w3.org/TR/WCAG21/#non-text-content 'Success Criterion 1.1.1: Non-text Content'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
