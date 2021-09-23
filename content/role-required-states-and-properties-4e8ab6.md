---
title: "Element with role attribute has required states and properties"
permalink: /standards-guidelines/act/rules/role-required-states-and-properties-4e8ab6/
ref: /standards-guidelines/act/rules/role-required-states-and-properties-4e8ab6/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/role-required-states-and-properties-4e8ab6.md
footer: |
  <p><strong>Date:</strong> Updated August 24th, 2021</p>
  <p><strong>Authors:</strong> <a href="https://github.com/annethyme">Anne Thyme Nørregaard</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules community group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>.</p>
proposed: true
rule_meta:
  id: 4e8ab6
  name: "Element with `role` attribute has required states and properties"
  rule_type: atomic
  description: |
    This rule checks that elements that have an explicit role also specify all required states and properties.
  accessibility_requirements:
    'wcag20:4.1.2':
      forConformance: true
      failed: not satisfied
      passed: further testing needed
      inapplicable: further testing needed
    'wcag-technique:ARIA5':
      forConformance: false
      failed: not satisfied
      passed: further testing needed
      inapplicable: further testing needed
  input_aspects:
    - handle: DOM Tree
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom
  last_modified: August 24th, 2021
  scs_tested:
    - handle: Name, Role, Value
      num: 4.1.2
      level: A
---

## Applicability

This rule applies to any [HTML or SVG element][] that is [included in the accessibility tree][] and has an [explicit semantic role][], except if the element has an [implicit semantic role][] that is identical to the [explicit semantic role][].

## Expectation

For each test target, the [WAI-ARIA required states and properties][] for the role are set and not empty (`""`), unless the state or property has a default value listed under [WAI-ARIA implicit value for role][].

**Note**: In [WAI-ARIA 1.2][], required states and properties will no longer have a default value.

## Assumptions

- The applicability of this rule is limited to [explicit semantic roles][explicit semantic role] based on an assumption that all native HTML and SVG elements have native attributes that are mapped to all of the [WAI-ARIA required states and properties](https://www.w3.org/TR/wai-aria/#requiredState) for the [implicit semantic role][] of the element.

- The ARIA `role` is being used to comply to WCAG.

## Accessibility Support

This rule relies on browsers and assistive technologies to support leaving out [WAI-ARIA required states and properties][] when a [WAI-ARIA implicit value for role][] is specified in [WAI-ARIA Specifications](#wai-aria-specifications).

**Note:** The required states and properties with implicit values can be found in the Core Accessibility API Mappings 1.1 [Overview of default values for missing required attributes](https://www.w3.org/TR/core-aam-1.1/#authorErrorDefaultValuesTable).

## Background

- [ARIA5: Using WAI-ARIA state and property attributes to expose the state of a user interface component](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA5)
- [WAI-ARIA required states and properties](https://www.w3.org/TR/wai-aria-1.1/#requiredState)
- [RFC 3986](https://www.ietf.org/rfc/rfc3986.txt)

## Test Cases

### Passed

#### Passed Example 1

This `checkbox` has the required property `aria-checked`.

```html
<div role="checkbox" aria-checked="false"></div>
```

#### Passed Example 2

This `scrollbar` has the required properties `aria-controls` and `aria-valuenow`. `aria-valuemin` has a default value of 0 and `aria-valuemax` of 100.

```html
<div role="scrollbar" aria-controls="content" aria-valuenow="0"></div>
<main id="content"></main>
```

#### Passed Example 3

This `combobox` has required properties `aria-controls` and `aria-expanded`. `aria-controls` references an element that does not exist, but may be added to the page when expanded.

```html
<div role="combobox" aria-controls="someElementId" aria-expanded="false"></div>
```

### Failed

#### Failed Example 1

This `combobox` is missing the required `aria-controls` property.

**Note**: In [WAI-ARIA 1.2][], `combobox` will also require `aria-expanded`.

```html
<div role="combobox" aria-expanded="true"></div>
```

#### Failed Example 2

This `combobox` has an empty value for the required `aria-controls` property.

```html
<div role="combobox" aria-controls="" aria-expanded="true"></div>
```

### Inapplicable

#### Inapplicable Example 1

This `div` does not have a [semantic role](#semantic-role).

```html
<div>Some Content</div>
```

#### Inapplicable Example 2

This `checkbox` has an [implicit semantic role](#implicit-role) that is identical to the [explicit semantic role](#explicit-role).

```html
<input type="checkbox" role="checkbox" />
```

#### Inapplicable Example 3

This `combobox` is not [included in the accessibility tree][] due to its styling, hiding it from everybody.

```html
<div role="combobox" style="display:none;"></div>
```

## Glossary

### Explicit Semantic Role {#explicit-role}

The _explicit semantic role_ of an element is determined by its [role attribute][] (if any).

The [role attribute][] takes a list of tokens. The explicit semantic role is the first valid role in this list. The valid roles are all non-abstract roles from [WAI-ARIA Specifications][]. If the element has no [role attribute][], or if it has one with no valid role, then this element has no explicit semantic role.

Other roles may be added as they become available. Not all roles will be supported in all assistive technologies. Testers are encouraged to adjust which roles are allowed according to the [accessibility support base line][]. For the purposes of executing test cases in all rules, it should be assumed that all roles are supported by assistive technologies so that none of the roles fail due to lack of accessibility support.

### Focusable {#focusable}

Elements that can become the target of keyboard input as described in the [HTML](https://www.w3.org/TR/html) specification of [focusable](https://html.spec.whatwg.org/#focusable-area) and [can be focused](https://html.spec.whatwg.org/#specially-focusable).

### Hidden State {#hidden-state}

An HTML element's _hidden state_ is "true" if at least one of the following is true for itself or any of its [ancestors][] in the [flat tree][]:

- has a `hidden` attribute; or
- has a [computed][] CSS property `display` of `none`; or
- has a [computed][] CSS property `visibility` of `hidden`; or
- has an `aria-hidden` attribute set to `true`

In any other case, the element's _hidden state_ is "false".

### Implicit Semantic Role {#implicit-role}

The _implicit semantic role_ of an element is a pre-defined value given by the host language which depends on the element and its ancestors.

Implicit roles for HTML and SVG, are documented in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/#html-element-role-mappings) and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/#mapping_role_table).

### Included in the accessibility tree {#included-in-the-accessibility-tree}

Elements included in the accessibility tree of platform specific accessibility APIs. Elements in the accessibility tree are exposed to assistive technologies, allowing users to interact with the elements in a way that meet the requirements of the individual user.

The general rules for when elements are included in the accessibility tree are defined in the [core accessibility API mappings](https://www.w3.org/TR/core-aam/). For native markup languages, such as HTML and SVG, additional rules for when elements are included in the accessibility tree can be found in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/) and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/).

For more details, see [examples of included in the accessibility tree][].

**Note:** Users of assistive technologies might still be able to interact with elements that are not included in the accessibility tree. An example of this is a [focusable](#focusable) element with an `aria-hidden` attribute with a value of `true`. Such an element could still be interacted using sequential keyboard navigation regardless of the assistive technologies used, even though the element would not be included in the accessibility tree.
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/

### Marked as decorative {#marked-as-decorative}

An element is _marked as decorative_ if one or more of the following conditions is true:

- it has an [explicit role][] of `none` or `presentation`; or
- it is an `img` element with an `alt` attribute whose value is the empty string (`alt=""`), and with no [explicit role][].

Elements are marked as decorative as a way to convey the intention of the author that they are [pure decoration][]. It is different from the element actually being [pure decoration][] as authors may make mistakes. It is different from the element being effectively ignored by assistive technologies as rules such as [presentational roles conflict resolution][] may overwrite this intention.

Elements can also be ignored by assistive technologies if their [hidden state][] is true. This is different from marking the element as decorative and does not convey the same intention. Notably, the [hidden state][] of an element may change as users interact with the page (showing and hiding elements) while being marked as decorative should stay the same through all states of the page.

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

### Semantic Role {#semantic-role}

The _semantic role_ of an element is determined by the first of these cases that applies:

1. **Conflict** If the element is [marked as decorative][], but the element is [included in the accessibility tree][]; or would be [included in the accessibility tree][] when its [hidden state][] is false, then its _semantic role_ is its **[implicit role][]**.
1. **Explicit** If the element has an [explicit role][], then its _semantic role_ is its [explicit role][].
1. **Implicit** The _semantic role_ of the element is its [implicit role][].

### WAI-ARIA specifications {#wai-aria-specifications}

The _WAI ARIA Specifications_ group both the WAI ARIA W3C Recommendation and ARIA modules, namely:

- [Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria-1.1/)
- [WAI-ARIA Graphics Module 1.0](https://www.w3.org/TR/graphics-aria-1.0/)
- [Digital Publishing WAI-ARIA Module 1.0](https://www.w3.org/TR/dpub-aria-1.0/)

**Note:** depending on the type of content being evaluated, part of the specifications might be irrelevant and should be ignored.

{% include_relative implementations/4e8ab6.md %}

## Changelog

This is the first version of this ACT rule.

[accessibility support base line]: https://www.w3.org/TR/WCAG-EM/#step1c 'Definition of accessibility support base line'
[ancestors]: https://dom.spec.whatwg.org/#concept-tree-ancestor 'Definition Ancestor'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[explicit role]: #explicit-role 'Definition of Explicit Role'
[explicit semantic role]: #explicit-role 'Definition of explicit semantic role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focusable]: #focusable 'Definition of Focusable'
[hidden state]: #hidden-state 'Definition of Hidden State'
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[html or svg element]: #namespaced-element
[implicit role]: #implicit-role 'Definition of Implicit Role'
[implicit semantic role]: #implicit-role 'Definition of implicit semantic role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in The Accessibility Tree'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as Decorative'
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[pure decoration]: https://www.w3.org/TR/WCAG21/#dfn-pure-decoration 'WCAG definition of Pure Decoration'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[wai-aria 1.2]: https://www.w3.org/TR/wai-aria-1.2/
[wai-aria implicit value for role]: https://www.w3.org/TR/wai-aria-1.1/#implictValueForRole
[wai-aria required states and properties]: https://www.w3.org/TR/wai-aria-1.1/#requiredState
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
