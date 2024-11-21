---
title: "Element with role attribute has required states and properties"
permalink: /standards-guidelines/act/rules/4e8ab6/proposed/
ref: /standards-guidelines/act/rules/4e8ab6/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/4e8ab6/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> 4e8ab6</p>
  <p><strong>Date:</strong> Updated 21 November 2024</p>
  <p><strong>Authors:</strong> <a href="https://github.com/annethyme">Anne Thyme Nørregaard</a>, Tom Brunet. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: 4e8ab6
  name: "Element with role attribute has required states and properties"
  rule_type: atomic
  original_file: role-required-states-and-properties-4e8ab6.md
  description: |
    This rule checks that elements that have an explicit role also specify all required states and properties.
  last_modified: 21 November 2024
---

## Applicability

This rule applies to any [HTML or SVG element][] that is [included in the accessibility tree][] and has an [explicit semantic role][], except if the element has an [implicit semantic role][] that is identical to the [explicit semantic role][].

## Expectation

For each test target, the [WAI-ARIA required states and properties][] for the role are set and not empty (`""`), unless the state or property has a default value listed under [WAI-ARIA implicit value for role][].

## Assumptions

- The ARIA `role` is being used to conform to WCAG.

## Accessibility Support

This rule relies on browsers and assistive technologies to support leaving out [WAI-ARIA required states and properties][] when a [WAI-ARIA implicit value for role][] is specified in [WAI-ARIA Specifications][].

**Note:** The required states and properties with implicit values can be found in the Core Accessibility API Mappings 1.1 [Overview of default values for missing required attributes](https://www.w3.org/TR/core-aam-1.1/#authorErrorDefaultValuesTable).

## Background

Omitting [WAI-ARIA required states and properties][] is often the result of a developer error. When required properties are missing and a default value is not specified by [WAI-ARIA Specifications][], the behavior is not defined. For [WAI-ARIA 1.2][], the only [explicit semantic roles][explicit semantic role] with a required property with a default value are the `option` and `tabs roles` for the `aria-selected` property.

This rule is testing author built components that specify [explicit semantic roles][explicit semantic role] and not components that keep their [implicit semantic role][]. For components that keep their [implicit semantic role][], all native HTML and SVG elements have native attributes that are mapped to all of the [WAI-ARIA required states and properties](https://www.w3.org/TR/wai-aria/#requiredState). Most of these mappings are defined in the [HTML Accessibility API Mappings, Attribute State and Property Mappings][html aam].

### Bibliography

- [ARIA5: Using WAI-ARIA state and property attributes to expose the state of a user interface component](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA5)
- [WAI-ARIA required states and properties](https://www.w3.org/TR/wai-aria-1.2/#requiredState)
- [RFC 3986](https://www.ietf.org/rfc/rfc3986.txt)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>ARIA5: Using WAI-ARIA state and property attributes to expose the state of a user interface component</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA5">Learn more about technique ARIA5</a></li>
      <li>Not required for conformance to any W3C accessibility recommendation.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: technique is not satisfied</li>
        <li>All <code>passed</code> outcomes: technique needs further testing</li>
        <li>An <code>inapplicable</code> outcome: technique needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li>This rule is <strong>not required</strong> for conformance to WCAG 2.1 at any level.</li>
</ul>

### Secondary Requirements

This rule is related to the following accessibility requirements, but was 
not designed to test this requirements directly. These 
[secondary requirements](https://w3c.github.io/wcag-act/act-rules-format.html#secondary-requirements)
can either be stricter than the rule requires, or may be satisfied in ways 
not tested by the rule:

- [1.3.1 Info and Relationships (Level A)](https://www.w3.org/TR/WCAG21/#info-and-relationships): This success criterion is **less strict** than this rule. This is because browsers and assistive technologies will often fall back on a non-standard default value, which may be sufficient. Some of the failed examples may satisfy this success criterion.
- [4.1.2 Name, Role, Value (Level A)](https://www.w3.org/TR/WCAG21/#name-role-value): This success criterion is **less strict** than this rule. This is because browsers and assistive technologies will often fall back on a non-standard default value, which may be sufficient. Some of the failed examples may satisfy this success criterion.

## Input Aspects

The following aspects are required in using this rule.

- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)

## Test Cases

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4e8ab6/eadf2a087a82575bcdf9f9158e698a576e9627c8.html">Open in a new tab</a>

This `heading` has the required `aria-level` property.

```html
<div role="heading" aria-level="1">
	My First Heading
</div>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4e8ab6/5b39aa37000933c7b9a766970b829ce5fada62d6.html">Open in a new tab</a>

This `checkbox` has the required `aria-checked` property.

```html
<div role="checkbox" aria-checked="false" aria-labelledby="label"></div>
<div id="label">Check me</div>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4e8ab6/11c5321c05c7b83b8707eee76574a94bd44033fe.html">Open in a new tab</a>

This `scrollbar` has the required properties `aria-controls` and `aria-valuenow`. `aria-valuemin` has a default value of 0 and `aria-valuemax` of 100.

```html
<div role="scrollbar" aria-controls="content" aria-valuenow="0"></div>
<main id="content"></main>
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4e8ab6/3da0918b07e5736d55b4b405a22860d889931c15.html">Open in a new tab</a>

These `option` nodes do not need the required `aria-selected` property because it has a default value of `false`.

```html
<div id="label">Tags</div>
<ul role="listbox" aria-labelledby="label">
	<li role="option">Zebra</li>
	<li role="option">Zoom</li>
</ul>
```

#### Passed Example 5

<a class="example-link" title="Passed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4e8ab6/58a35afd2998bb6f9c670cb74fa7b550e80897b4.html">Open in a new tab</a>

This `separator` is not a `widget` because it is not [focusable][]. The `separator` role only requires the `aria-valuenow` property when the element is focusable.

```html
<p>My first HTML</p>
<div role="separator"></div>
<p>My last HTML</p>
```

#### Passed Example 6

<a class="example-link" title="Passed Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4e8ab6/352ec575eab8846938e2dced0802d0c2f5611344.html">Open in a new tab</a>

This `combobox` has the required properties `aria-controls` and `aria-expanded`.

```html
<label for="tag_combo">Tag</label>
<input type="text" id="tag_combo" role="combobox" aria-expanded="true" aria-controls="popup_listbox" />
<ul role="listbox" id="popup_listbox">
	<li role="option">Zebra</li>
	<li role="option" id="selected_option">Zoom</li>
</ul>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4e8ab6/80462b7b8c490305d1de7e3136c0bcfaef31789f.html">Open in a new tab</a>

This `heading` does not have the required `aria-level` property. Prior to [WAI-ARIA 1.2][] the `heading` role had an implicit default `aria-level` value of `2`. As of WAI-ARIA 1.2 this property must be explicitly set.

```html
<div role="heading">
	My First Heading
</div>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4e8ab6/907f05aed287f7407d5f95e7d39bfc1435ec0812.html">Open in a new tab</a>

This `switch` does not have the required `aria-checked` property. Prior to [WAI-ARIA 1.2][] the `switch` role had an implicit default `aria-checked` value of `false`. As of WAI-ARIA 1.2 this property must be explicitly set.

```html
<div role="switch">
	Toggle me
</div>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4e8ab6/9bb1bdb3e95aa9b895fc4f32b0c2cfc917a07a72.html">Open in a new tab</a>

This `checkbox` does not have the required property `aria-checked`. Prior to [WAI-ARIA 1.2][] the `checkbox` had an implicit default `aria-checked` value of `false`. As of WAI-ARIA 1.2 this property must be explicitly set.

```html
<div role="checkbox" aria-labelledby="label"></div>
<div id="label">Check me</div>
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4e8ab6/43af91df529613e51429e18d43ce3df99b189c0f.html">Open in a new tab</a>

This `separator` does not have the required `aria-valuenow` property. This is required because the `separator` is [focusable][], which makes it a `widget`.

```html
<p>My first HTML</p>
<div role="separator" tabindex="0"></div>
<p>My last HTML</p>
```

#### Failed Example 5

<a class="example-link" title="Failed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4e8ab6/7a1942d2d52f50c5df458877a0ee18dc5a22b0c3.html">Open in a new tab</a>

This `combobox` does not have the required `aria-expanded` property. Prior to [WAI-ARIA 1.2][] the `combobox` had an implicit default `aria-expanded` value of `false`. As of WAI-ARIA 1.2 this property must be explicitly set.

```html
<label for="tag_combo">Tag</label>
<input type="text" id="tag_combo" role="combobox" aria-controls="popup_listbox" />
<ul role="listbox" id="popup_listbox">
	<li role="option">Zebra</li>
	<li role="option" id="selected_option">Zoom</li>
</ul>
```

#### Failed Example 6

<a class="example-link" title="Failed Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4e8ab6/30c746dee25dde33aef4bb61d5b054e2821e4564.html">Open in a new tab</a>

This `combobox` uses `aria-owns` instead of using the required `aria-controls` property.

```html
<label for="tag_combo">Tag</label>
<input type="text" id="tag_combo" role="combobox" aria-expanded="true" aria-owns="popup_listbox" />
<ul role="listbox" id="popup_listbox">
	<li role="option">Zebra</li>
	<li role="option" id="selected_option">Zoom</li>
</ul>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4e8ab6/9d80b71ad39b258fb75db804867f189d76ecdab8.html">Open in a new tab</a>

This `div` does not have a [semantic role](#semantic-role).

```html
<div>Some Content</div>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4e8ab6/a384e79d59f806b9403f207a29223541048716ac.html">Open in a new tab</a>

This `checkbox` has an [implicit semantic role](#implicit-role) that is identical to the [explicit semantic role](#explicit-role). This allows native HTML `checked` attribute to apply.

```html
<input type="checkbox" role="checkbox" />
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4e8ab6/f473186fa351637a3c034b2df567239a39a8139c.html">Open in a new tab</a>

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

An element is _focusable_ if one or both of the following are true:

- the element is part of [sequential focus navigation][]; or
- the element has a [tabindex value][] that is not null.

**Exception**: Elements that lose focus and do not regain focus during a period of up to 1 second after gaining focus, without the user interacting with the page the element is on, are not considered _focusable_.

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

**Note**: Contrary to the other conditions, the `visibility` CSS property may be reverted by descendants.

**Note**: The [HTML standard suggests](https://html.spec.whatwg.org/multipage/rendering.html#hidden-elements) setting the CSS `display` property to `none` for elements with the `hidden` attribute. While not required by HTML, all modern browsers follow this suggestion. Because of this the `hidden` attribute is not used in this definition. In browsers that use this suggestion, overriding the CSS `display` property can reveal elements with the `hidden` attribute.

### Semantic Role {#semantic-role}

The _semantic role_ of an element is determined by the first of these cases that applies:

1. **Conflict** If the element is [marked as decorative][], but the element is [included in the accessibility tree][]; or would be [included in the accessibility tree][] when it is not [programmatically hidden][], then its _semantic role_ is its **[implicit role][]**.
1. **Explicit** If the element has an [explicit role][], then its _semantic role_ is its [explicit role][].
1. **Implicit** The _semantic role_ of the element is its [implicit role][].

This definition can be used in expressions such as "semantic `button`" meaning any element with a semantic role of `button`.

### WAI-ARIA specifications {#wai-aria-specifications}

The _WAI ARIA Specifications_ group both the WAI ARIA W3C Recommendation and ARIA modules, namely:

- [Accessible Rich Internet Applications (WAI-ARIA) 1.2](https://www.w3.org/TR/wai-aria-1.2/)
- [WAI-ARIA Graphics Module 1.0](https://www.w3.org/TR/graphics-aria-1.0/)
- [Digital Publishing WAI-ARIA Module 1.0](https://www.w3.org/TR/dpub-aria-1.0/)

**Note:** depending on the type of content being evaluated, part of the specifications might be irrelevant and should be ignored.

[accessibility support base line]: https://www.w3.org/TR/WCAG-EM/#step1c 'Definition of accessibility support base line'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[explicit role]: #explicit-role 'Definition of Explicit Role'
[explicit semantic role]: #explicit-role 'Definition of explicit semantic role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focusable]: #focusable
[html aam]: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings 'Specification of HTML attributes value mapping to ARIA states and properties'
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[html or svg element]: #namespaced-element
[implicit role]: #implicit-role 'Definition of Implicit Role'
[implicit semantic role]: #implicit-role 'Definition of implicit semantic role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in The Accessibility Tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as Decorative'
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[programmatically hidden]: #programmatically-hidden 'Definition of Programmatically Hidden'
[pure decoration]: https://www.w3.org/TR/WCAG22/#dfn-pure-decoration 'WCAG definition of Pure Decoration'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[wai-aria 1.2]: https://www.w3.org/TR/wai-aria-1.2/
[wai-aria implicit value for role]: https://www.w3.org/TR/wai-aria-1.2/#implictValueForRole
[wai-aria required states and properties]: https://www.w3.org/TR/wai-aria-1.2/#requiredState
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA Specifications'
