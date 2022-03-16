---
title: "Image has non-empty accessible name"
permalink: /standards-guidelines/act/rules/23a2a8/proposed/
ref: /standards-guidelines/act/rules/23a2a8/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/23a2a8/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> 23a2a8</p>
  <p><strong>Date:</strong> Updated 16 March 2022</p>
  <p><strong>Authors:</strong> <a href="https://github.com/wilcofiers">Wilco Fiers</a>. Previous Authors: <a href="https://github.com/annethyme">Anne Thyme Nørregaard</a>, <a href="https://github.com/skotkjerra">Stein Erik Skotkjerra</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: 23a2a8
  name: "Image has non-empty accessible name"
  rule_type: atomic
  description: |
    This rule checks that each image either has a non-empty accessible name or is marked up as decorative.
  last_modified: 16 March 2022
  scs_tested:
    - handle: Non-text Content
      num: 1.1.1
      level: A
---

## Applicability

This rule applies to [HTML][] `img` elements and [HTML elements][html] that are a [semantic][semantic role] `img`, except if the element is [programmatically hidden][].

## Expectation

Each target element has an [accessible name][] that is not empty (`""`), or has a [semantic role][] of `none` or `presentation`.

## Assumptions

_There are currently no assumptions._

## Accessibility Support

- There is a known combination of a popular browser and assistive technology that does not by default support `title` as an [accessible name][].
- There are several popular browsers that do not treat images with empty `alt` attribute as having a role of `presentation` but instead add the `img` element to the accessibility tree with a [semantic role][] of either `img` or `graphic`.
- Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some [semantic][semantic role] `img` elements can fail this rule with some technology but users of other technologies would not experience any accessibility issue.
- Images can have their role set to `presentation` through an empty `alt` attribute. [Presentational Roles Conflict Resolution][] does not specify what to do if such an image is [focusable][] (it only specifies what to do in case of explicit `role="none"` or `role="presentation"`). Some browsers expose these images and some don't. Thus, this rule may fail for technologies that expose these without creating an accessibility issue for users of other technologies.

## Background

### Bibliography

- [Understanding Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html)
- [G94: Providing short text alternative for non-text content that serves the same purpose and presents the same information as the non-text content](https://www.w3.org/WAI/WCAG21/Techniques/general/G94)
- [G95: Providing short text alternatives that provide a brief description of the non-text content](https://www.w3.org/WAI/WCAG21/Techniques/general/G95)
- [H37: Using alt attributes on img elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H37)
- [ARIA6: Using aria-label to provide labels for objects](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA6)
- [ARIA10: Using aria-labelledby to provide a text alternative for non-text content](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA10)
- [H67: Using null alt text and no title attribute on img elements for images that AT should ignore](https://www.w3.org/WAI/WCAG21/Techniques/html/H67)
- [F38: Failure of Success Criterion 1.1.1 due to not marking up decorative images in HTML in a way that allows assistive technology to ignore them](https://www.w3.org/WAI/WCAG21/Techniques/failures/F38)
- [F65: Failure of Success Criterion 1.1.1 due to omitting the alt attribute or text alternative on img elements, area elements, and input elements of type "image"](https://www.w3.org/WAI/WCAG21/Techniques/failures/F65)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>1.1.1 Non-text Content (Level A)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#non-text-content">Learn more about 1.1.1 Non-text Content</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level A and higher.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>G94: Providing short text alternative for non-text content that serves the same purpose and presents the same information as the non-text content</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G94">Learn more about technique G94</a></li>
      <li>Not required for conformance to any W3C accessibility recommendation.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: technique is not satisfied</li>
        <li>All <code>passed</code> outcomes: technique needs further testing</li>
        <li>An <code>inapplicable</code> outcome: technique needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>G95: Providing short text alternatives that provide a brief description of the non-text content</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G95">Learn more about technique G95</a></li>
      <li>Not required for conformance to any W3C accessibility recommendation.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: technique is not satisfied</li>
        <li>All <code>passed</code> outcomes: technique needs further testing</li>
        <li>An <code>inapplicable</code> outcome: technique needs further testing</li>
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

<a class="example-link" title="Passed Example 1" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/23a2a8/32bfac8a98cc212aa7bf9151bf40f665a7f51696.html">Open in a new tab</a>

This `img` element has an [accessible name][] because of the `alt` attribute.

```html
<img alt="W3C logo" src="/test-assets/shared/w3c-logo.png" />
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/23a2a8/38cc6a87fcc81fcc2248f0cd74ca48396b7aa432.html">Open in a new tab</a>

This [semantic][semantic role] `img` element has an [accessible name][] because of the `aria-label` attribute.

```html
<div
	role="img"
	aria-label="W3C logo"
	style="width:72px; height:48px; background-image: url(/test-assets/shared/w3c-logo.png)"
></div>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/23a2a8/feb06eece7b158ab66a25bfa2c47a196309f0d93.html">Open in a new tab</a>

This [semantic][semantic role] `img` element has an [accessible name][] because of an `aria-labelledby` attribute and an element with matching `id`.

```html
<div style="display: none" id="img-label">W3C logo</div>
<div
	role="img"
	aria-labelledby="img-label"
	style="width:72px; height:48px; background-image: url(/test-assets/shared/w3c-logo.png)"
></div>
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/23a2a8/40d83620b0bcbcf0e7380177384f48596823e7a9.html">Open in a new tab</a>

This `img` element has an [accessible name][] because of a `title` attribute.

**Note**: There are assistive technologies that do not support using the `title` attribute for an [accessible name][], or in which this feature can be disabled.

```html
<img title="W3C logo" src="/test-assets/shared/w3c-logo.png" />
```

#### Passed Example 5

<a class="example-link" title="Passed Example 5" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/23a2a8/2f35ed62ed14afb6d9e8b886e95e846f0cfa0d2a.html">Open in a new tab</a>

This `img` element has an [implicit role][] of `presentation` because of the empty `alt` attribute.

```html
<img alt="" src="/test-assets/shared/background.png" />
```

#### Passed Example 6

<a class="example-link" title="Passed Example 6" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/23a2a8/e8f40f5af06646ef15283302903f6c78f7d7a505.html">Open in a new tab</a>

This `img` element has an [explicit role][] of `presentation` because of the value of the `role` attribute.

```html
<img role="presentation" style="width:72px; height:48px; background-image: url(/test-assets/shared/background.png)" />
```

#### Passed Example 7

<a class="example-link" title="Passed Example 7" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/23a2a8/13b8678881fba03e7465f82b5550abc5093f7968.html">Open in a new tab</a>

This `img` element has an [explicit role][] of `none` because of the value of the `role` attribute.

```html
<img role="none" src="/test-assets/shared/background.png" />
```

#### Passed Example 8

<a class="example-link" title="Passed Example 8" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/23a2a8/ba9cdf6d0c336f0abf7cd2992c4a2a62c6c719fd.html">Open in a new tab</a>

This off screen `img` element has an [implicit role][] of `presentation` because of the empty `alt` attribute.

```html
<div style="margin-left:-9999px;">
	<img alt="" src="/test-assets/shared/background.png" />
</div>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/23a2a8/8006d1541dc71b93e6ec4d101a386e0043d1a521.html">Open in a new tab</a>

This `img` element has an empty [accessible name][] and an [implicit role][] of `img` because it is missing an `alt` attribute.

```html
<img src="/test-assets/shared/w3c-logo.png" />
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/23a2a8/496963cfd35d4873c010469c47c84d4358fba035.html">Open in a new tab</a>

This element with role of `img` has an empty [accessible name][].

```html
<div role="img" style="width:72px; height:48px; background-image: url(/test-assets/shared/w3c-logo.png)"></div>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/23a2a8/fef9a3ad8b2f2a6beeaf44ef7dafce08e743ea67.html">Open in a new tab</a>

This `img` element inside a `div` positioned off screen has an empty [accessible name][] and an [implicit role][] of `img`.

```html
<div style="margin-left:-9999px;"><img src="/test-assets/shared/w3c-logo.png" /></div>
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/23a2a8/b0348c1e6fced2df1ebd93caef4d383f6c7a0461.html">Open in a new tab</a>

This `img` element has an empty [accessible name][] because the space in the `alt` attribute is trimmed off by the [accessible name computation](https://www.w3.org/TR/accname-1.1/). Because of the space, the `alt` attribute is not empty (`""`) which gives the element the [implicit role][] of `img`.

```html
<img src="/test-assets/shared/w3c-logo.png" alt=" " />
```

#### Failed Example 5

<a class="example-link" title="Failed Example 5" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/23a2a8/d70470a37db713810be85275e5d0c698f85ab320.html">Open in a new tab</a>

This `img` element has an [explicit role][] of `none`. However, it is [focusable][] due to the `tabindex` attribute. Because of this it has a [semantic role][] of `img` due to [Presentational Roles Conflict Resolution][]. It does not have an accessible name.

```html
<img role="none" tabindex="0" src="/test-assets/shared/w3c-logo.png" />
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/23a2a8/cd3b3a4046451da9b9cc3e166c09d27583a2c30b.html">Open in a new tab</a>

This `svg` element has an [implicit role][] of `graphics-document`.

```html
<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
	<circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/23a2a8/25e5364c0a1320a08e2742fa59a0f8627591bc61.html">Open in a new tab</a>

This [semantic][semantic role] `img` element is hidden with `aria-hidden` set to "true".

```html
<div
	role="img"
	aria-hidden="true"
	style="width:72px; height:48px; background-image: url(/test-assets/shared/w3c-logo.png)"
></div>
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/23a2a8/e15b9aca4aaa53cb3a96ae48e78e1af064b9a01d.html">Open in a new tab</a>

This `img` element is hidden with `aria-hidden` set to "true".

```html
<img src="/test-assets/shared/w3c-logo.png" aria-hidden="true" />
```

#### Inapplicable Example 4

<a class="example-link" title="Inapplicable Example 4" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/23a2a8/7d696551efaafa0da33bb6e56b8b43707c7c7de9.html">Open in a new tab</a>

This `img` element is hidden because its parent has `display: none`.

```html
<div style="display: none">
	<img src="/test-assets/shared/w3c-logo.png" />
</div>
```

#### Inapplicable Example 5

<a class="example-link" title="Inapplicable Example 5" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/23a2a8/f7692caf5f8c788d58e1aeb8d4f1f240fafdfa91.html">Open in a new tab</a>

This `img` element is hidden with `visibility: hidden`.

```html
<div style="visibility: hidden">
	<img src="/test-assets/shared/w3c-logo.png" />
</div>
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

**Exception**: Elements that lose focus during a period of up to 1 second after gaining focus, without the user interacting with the page the element is on, are not considered _focusable_.

Notes:

- The 1 second time span is an arbitrary limit which is not included in WCAG. Given that scripts can manage the focus state of elements, testing the focusability of an element consistently would be impractical without a time limit.
- The [tabindex value][] of an element is the value of the [tabindex attribute][] parsed using the [rules for parsing integers][]. For the [tabindex value][] to be different from null, it needs to be [parsed][rules for parsing integers] without errors.

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

### Namespaced Element {#namespaced-element}

An [element][] with a specific [namespaceURI][] value from [HTML namespaces][]. For example an "SVG element" is any element with the "SVG namespace", which is `http://www.w3.org/2000/svg`.

Namespaced elements are not limited to elements described in a specification. They also include custom elements. Elements such as `a` and `title` have a different namespace depending on where they are used. For example a `title` in an HTML page usually has the HTML namespace. When used in an `svg` element, a `title` element has the SVG namespace instead.

### Outcome {#outcome}

An _outcome_ is a conclusion that comes from evaluating an ACT Rule on a [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) or one of its constituent [test target](https://www.w3.org/TR/act-rules-format/#test-target). An outcome can be one of the three following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) meets all expectations
- **Failed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) does not meet all expectations

**Note:** A rule has one `passed` or `failed` outcome for every [test target](https://www.w3.org/TR/act-rules-format/#test-target). When there are no test targets the rule has one `inapplicable` outcome. This means that each [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) will have one or more outcomes.

**Note:** Implementations using the [EARL10-Schema](https://www.w3.org/TR/EARL10-Schema/) can express the outcome with the [outcome property](https://www.w3.org/TR/EARL10-Schema/#outcome). In addition to `passed`, `failed` and `inapplicable`, EARL 1.0 also defined an `incomplete` outcome. While this cannot be the outcome of an ACT Rule when applied in its entirety, it often happens that rules are only partially evaluated. For example, when applicability was automated, but the expectations have to be evaluated manually. Such "interim" results can be expressed with the `incomplete` outcome.

### Programmatically Hidden {#programmatically-hidden}

An HTML element is _programmatically hidden_ if either it has a [computed][] CSS property `visibility` whose value is not `visible`; or at least one of the following is true for any of its [inclusive ancestors][] in the [flat tree][]:

- has a [computed][] CSS property `display` of `none`; or
- has an `aria-hidden` attribute set to `true`

**Note**: Contrarily to the other conditions, the `visibility` CSS property may be reverted by descendants.

**Note**: The [HTML standard suggests](https://html.spec.whatwg.org/multipage/rendering.html#hidden-elements) rendering elements with the `hidden` attribute with a CSS rule that applies the value `none` to the CSS property `display` of the element. Although the suggestion is not normative, known user agents render it according to the suggestion (unless the content specifies another CSS rule that sets the value of the `display` property). If a user agent does not follow the suggestion, this definition may produce incorrect results for this user agent.

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

{% include_relative _implementation-proposed.md %}

## Changelog

This is the first version of this ACT rule.

[accessibility support base line]: https://www.w3.org/TR/WCAG-EM/#step1c 'Definition of accessibility support base line'
[accessible name and description computation]: https://www.w3.org/TR/accname 'Accessible Name and Description Computation'
[accessible name]: #accessible-name 'Definition of accessible name'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[examples of accessible name]: https://act-rules.github.io/pages/examples/accessible-name/
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[explicit role]: #explicit-role 'Definition of explicit role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focusable]: #focusable 'Definition of focusable'
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[html]: #namespaced-element
[implicit role]: #implicit-role 'Definition of implicit role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as Decorative'
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[programmatically hidden]: #programmatically-hidden 'Definition of Programmatically Hidden'
[pure decoration]: https://www.w3.org/TR/WCAG21/#dfn-pure-decoration 'WCAG definition of Pure Decoration'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[semantic role]: #semantic-role 'Definition of semantic role'
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
