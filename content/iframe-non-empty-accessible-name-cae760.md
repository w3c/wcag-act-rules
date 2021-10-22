---
title: "iframe element has non-empty accessible name"
permalink: /standards-guidelines/act/rules/iframe-non-empty-accessible-name-cae760/
ref: /standards-guidelines/act/rules/iframe-non-empty-accessible-name-cae760/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/iframe-non-empty-accessible-name-cae760.md
footer: |
  <p><strong>Date:</strong> Updated 22 October 2021</p>
  <p><strong>Authors:</strong> <a href="https://github.com/jkodu">Jey Nandakumar</a>, <a href="https://github.com/wilcofiers">Wilco Fiers</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules community group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>.</p>
proposed: true
rule_meta:
  id: cae760
  name: "`iframe` element has non-empty accessible name"
  rule_type: atomic
  description: |
    This rule checks that each `iframe` element has a non-empty accessible name.
  accessibility_requirements:
    'wcag20:4.1.2':
      forConformance: true
      failed: not satisfied
      passed: further testing needed
      inapplicable: further testing needed
  input_aspects:
    - handle: DOM Tree
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom
    - handle: CSS Styling
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-css
  last_modified: 22 October 2021
  scs_tested:
    - handle: Name, Role, Value
      num: 4.1.2
      level: A
---

{::options toc_levels="2" /}
{::nomarkdown}
{% include toc.html type="start" title="Page Contents" %}
{:/}

- Table of Content placeholder
{:toc}

{::nomarkdown}
{% include toc.html type="end" %}
{:/}

## Applicability

This rule applies to `iframe` elements that are [included in the accessibility tree][] and that can be accessed by [sequential focus navigation][].

**Note:** `frame` element is deprecated, this rule does not consider `frame` or `frameset` elements.

## Expectation

Each target element has an [accessible name][] that is not empty (`""`).

## Assumptions

If an `iframe` is not perceived by the user as a single control, it does not qualify as a [user interface component][] under WCAG 2. In such a scenario, failing this rule would not fail [success criterion 4.1.2](https://www.w3.org/TR/WCAG21/#name-role-value). Unless the `iframe` is both removed from the accessibility tree and removed from [sequential focus navigation][], they usually are considered to be [user interface components][user interface component].

## Accessibility Support

- Some browsers include `iframe` elements in the [sequential focus navigation][]. This ensures that the contents of `iframe` elements can be scrolled and accessed by using the keyboard. When an `iframe` is removed from the accessibility tree, this rule is still applicable for those browsers, unless the `iframe` is explicitly removed from [sequential focus navigation][] (by having the `tabindex` attribute set to a negative value).

- Browser and assistive technology support for `iframe` elements is currently **inconsistent**. Some examples of inconsistencies include (but are not limited to):
  - Assistive technologies being set up to ignore the `title` attribute, which means that to some users the `title` attribute will not act as an [accessible name][],
  - There is a known combination of a popular browser and assistive technology that ignores `aria-label` and only announces `title` attribute as an [accessible name][]
  - Some assistive technologies ignore empty `iframe` elements, regardless of if they are focusable or if they have an accessible name.

## Background

- [H64: Using the title attribute of the frame and iframe elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H64)
- [Understanding Success Criterion 4.1.2](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html)
- [User interface component][]

## Test Cases

### Passed

#### Passed Example 1

This `iframe` element gets its [accessible name][] from the `title` attribute.

```html
<iframe title="Grocery List" src="/test-assets/SC4-1-2-frame-doc.html"> </iframe>
```

#### Passed Example 2

This `iframe` element gets its [accessible name][] from the `aria-label` attribute.

```html
<iframe aria-label="Grocery list" src="/test-assets/SC4-1-2-frame-doc.html"> </iframe>
```

#### Passed Example 3

This `iframe` element gets its [accessible name][] from the content of the `div` referenced with the `aria-labelledby` attribute.

```html
<div id="frame-title-helper">Grocery List</div>
<iframe aria-labelledby="frame-title-helper" src="/test-assets/SC4-1-2-frame-doc.html"> </iframe>
```

### Failed

#### Failed Example 1

This `iframe` element has an empty (`""`) [accessible name][]. The `name` attribute is not used in computing the [accessible name][] of `iframe` elements.

```html
<iframe name="Grocery List" src="/test-assets/SC4-1-2-frame-doc.html"> </iframe>
```

#### Failed Example 2

This `iframe` element has no attributes that would give it a non-empty (`""`) [accessible name][].

```html
<iframe src="/test-assets/SC4-1-2-frame-doc.html"> </iframe>
```

#### Failed Example 3

This `iframe` element has an empty (`""`) [accessible name][] because the `title` attribute has an empty string as its value.

```html
<iframe title="" src="/test-assets/SC4-1-2-frame-doc.html"> </iframe>
```

#### Failed Example 4

This `iframe` element has an empty (`""`) [accessible name][] because the `title` attribute value is trimmed of [whitespace][] by the [accessible name computation][accessible name and description computation].

**Note:**: Because `iframe` elements are part of [sequential focus navigation][], the [explicit semantic role](#explicit-role) of `none` will be ignored, due to the [Presentational Roles Conflict Resolution](https://www.w3.org/TR/wai-aria-1.1/#presentational-roles-conflict-resolution).

```html
<iframe title=" " src="/test-assets/SC4-1-2-frame-doc.html" role="none"> </iframe>
```

### Inapplicable

#### Inapplicable Example 1

This page has no `iframe` element.

```html
<button>take me somewhere</button>
```

#### Inapplicable Example 2

This `iframe` is not [included in the accessibility tree][] because of setting a style of `display: none;`.

```html
<iframe style="display:none;" src="/test-assets/SC4-1-2-frame-doc.html"></iframe>
```

#### Inapplicable Example 3

This `iframe` element has a negative `tabindex` and therefore is not included in the [sequential focus navigation][].

```html
<iframe tabindex="-1" src="/test-assets/SC4-1-2-frame-doc.html"> </iframe>
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

Elements that can become the target of keyboard input as described in the [HTML](https://www.w3.org/TR/html) specification of [focusable](https://html.spec.whatwg.org/#focusable-area) and [can be focused](https://html.spec.whatwg.org/#specially-focusable).

### Included in the accessibility tree {#included-in-the-accessibility-tree}

Elements included in the accessibility tree of platform specific accessibility APIs are exposed to assistive technologies. This allows users of assistive technology to access the elements in a way that meets the requirements of the individual user.

The general rules for when elements are included in the accessibility tree are defined in the [core accessibility API mappings](https://www.w3.org/TR/core-aam/). For native markup languages, such as HTML and SVG, additional rules for when elements are included in the accessibility tree can be found in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/) and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/).

For more details, see [examples of included in the accessibility tree][].

[Programmatically hidden](#programmatically-hidden) elements are removed from the accessibility tree. However, some browsers will leave [focusable](#focusable) elements with an `aria-hidden` attribute set to `true` in the accessibility tree. Because they are hidden, these elements are considered **not** included in the accessibility tree. This may cause confusion for users of assistive technologies because they may still be able to interact with these focusable elements using sequential keyboard navigation, even though the element should not be included in the accessibility tree.

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

### WAI-ARIA specifications {#wai-aria-specifications}

The _WAI ARIA Specifications_ group both the WAI ARIA W3C Recommendation and ARIA modules, namely:

- [Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria-1.1/)
- [WAI-ARIA Graphics Module 1.0](https://www.w3.org/TR/graphics-aria-1.0/)
- [Digital Publishing WAI-ARIA Module 1.0](https://www.w3.org/TR/dpub-aria-1.0/)

**Note:** depending on the type of content being evaluated, part of the specifications might be irrelevant and should be ignored.

### Whitespace {#whitespace}

_Whitespace_ are characters that have the Unicode "White_Space" property in the [Unicode properties list](https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt).

This includes:

- all characters in the [Unicode Separator categories](https://www.unicode.org/versions/Unicode11.0.0/ch04.pdf#G134153), and
- the following characters in the [Other, Control](https://www.unicode.org/versions/Unicode11.0.0/ch04.pdf#G134153) category:

  - Character tabulation (U+0009)
  - Line Feed (LF) (U+000A)
  - Line Tabulation (U+000B)
  - Form Feed (FF) (U+000C)
  - Carriage Return (CR) (U+000D)
  - Next Line (NEL) (U+0085)

{% include_relative implementations/cae760.md %}

## Changelog

This is the first version of this ACT rule.

[accessibility support base line]: https://www.w3.org/TR/WCAG-EM/#step1c 'Definition of accessibility support base line'
[accessible name and description computation]: https://www.w3.org/TR/accname
[accessible name]: #accessible-name 'Definition of accessible name'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[examples of accessible name]: https://act-rules.github.io/pages/examples/accessible-name/
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[user interface component]: https://www.w3.org/TR/WCAG21/#dfn-user-interface-components
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
[whitespace]: #whitespace 'Definition of whitespace'
