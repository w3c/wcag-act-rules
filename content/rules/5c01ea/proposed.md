---
title: "ARIA state or property is permitted"
permalink: /standards-guidelines/act/rules/5c01ea/proposed/
ref: /standards-guidelines/act/rules/5c01ea/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/5c01ea/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> 5c01ea</p>
  <p><strong>Date:</strong> Updated 28 January 2022</p>
  <p><strong>Authors:</strong> <a href="https://github.com/annethyme">Anne Thyme Nørregaard</a>, <a href="https://github.com/Jym77">Jean-Yves Moyen</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules community group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: 5c01ea
  name: "ARIA state or property is permitted"
  rule_type: atomic
  description: |
    This rule checks that WAI-ARIA states or properties are allowed for the element they are specified on.
  last_modified: 28 January 2022
---

## Applicability

This rule applies to any [WAI-ARIA state or property][] that is specified on an [HTML or SVG element][namespaced element] that is [included in the accessibility tree][].

## Expectation

For each test target, one of the following is true:

- **global**: the test target is a [global state or property][global]; or
- **semantic Role**: the test target is an [inherited][], [supported][], or [required][] [state][] or [property][] of the [semantic role][] of the element on which the test target is specified; or
- **language feature**: the test target is specified on an [HTML element][namespaced element] and is allowed on that element. Which ARIA states or properties may be used on which element is described in [ARIA in HTML](https://w3c.github.io/html-aria/).

## Assumptions

_There are currently no assumptions_

## Accessibility Support

Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have a [semantic role][] of `none` and their attributes fail this rule with some technologies but users of other technology would not experience any accessibility issue.

## Background

In HTML, there are language features that do not have corresponding implicit WAI-ARIA semantics. As per [ARIA in HTML Editor's Draft](https://www.w3.org/TR/html-aria/), those elements can have [global states or properties][global]. Some of those elements can also have [inherited][], [supported][], or [required][] [states][state] or [properties][property] that correspond to a [WAI-ARIA role](https://www.w3.org/TR/wai-aria-1.1/#usage_intro). For example, the `audio` element has no corresponding ARIA semantics but it can have [inherited][], [supported][], or [required][] [states][state] or [properties][property] of the [`application` role](https://www.w3.org/TR/wai-aria-1.1/#application).

Assessing the value of the attribute is out of scope for this rule.

### Related rules

- [ARIA state or property has valid value](https://act-rules.github.io/rules/6a7281)

### Bibliography

- [Understanding Success Criterion 4.1.1: Parsing](https://www.w3.org/WAI/WCAG21/Understanding/parsing.html)
- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html)
- [WAI-ARIA 1.1, Supported States and Properties](https://www.w3.org/TR/wai-aria-1.1/#states_and_properties)
- [WAI-ARIA 1.1, Global States and Properties](https://www.w3.org/TR/wai-aria-1.1/#global_states)
- [ARIA5: Using WAI-ARIA state and property attributes to expose the state of a user interface component](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA5)
- [Document conformance requirements for use of ARIA attributes in HTML](https://www.w3.org/TR/html-aria/#docconformance)

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
  <li><details>
    <summary><span>ARIA 1.1, 7.6 State and Property Attribute Processing</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/wai-aria-1.1/#state_property_processing">Learn more about ARIA 1.1, 7.6 State and Property Attribute Processing</a></li>
      <li><strong>Required for conformance</strong> to WAI-ARIA 1.1 author requirements.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: WAI-ARIA requirement is not satisfied</li>
        <li>All <code>passed</code> outcomes: WAI-ARIA requirement is satisfied</li>
        <li>An <code>inapplicable</code> outcome: WAI-ARIA requirement is satisfied</li>
      </ul></li>
    </ul>
  </details></li>
</ul>

## Input Aspects

The following aspects are required in using this rule.

- [Accessibility Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-accessibility)
- [CSS styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)
- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)

## Test Cases

### Passed

#### Passed Example 1

The `aria-pressed` [state][] is [supported][] for a [semantic][semantic role] `button`, which is the [implicit role][] for `button` elements.

```html
<button aria-pressed="false">My button</button>
```

#### Passed Example 2

The `aria-pressed` [state][] is [supported][] for the [semantic][semantic role] `button`, which is the [explicit role][] of this `div` element.

```html
<div role="button" aria-pressed="false">My button</div>
```

#### Passed Example 3

The `aria-busy` [state][] is a [global][] [state][] that is [supported][] by all elements, even without any [semantic role][].

```html
<div aria-busy="true">My busy div</div>
```

#### Passed Example 4

The `aria-label` [property][] is a [global][] [property][] and thus [inherited][] for all [semantic role][].

```html
<div role="button" aria-label="OK">✓</div>
```

#### Passed Example 5

The `aria-checked` [state][] is [required][] for the [semantic][semantic role] `checkbox`.

```html
<div role="checkbox" aria-checked="false">My checkbox</div>
```

#### Passed Example 6

The `aria-controls` [property][] is [required][] for the [semantic][semantic role] `combobox`.

```html
<div role="combobox" aria-controls="id1" aria-expanded="false">My combobox</div>
```

#### Passed Example 7

The `aria-controls` [property][] is [required][] for the [semantic][semantic role] `combobox`. [WAI-ARIA states and properties][wai-aria state or property] with empty value are still applicable to this rule.

```html
<div role="combobox" aria-expanded="false" aria-controls>My combobox</div>
```

#### Passed Example 8

The `aria-controls` [property][] is [required][] for the [semantic][semantic role] `combobox`. [WAI-ARIA states and properties][wai-aria state or property] with empty value (specified as an empty string) are still applicable to this rule.

```html
<div role="combobox" aria-expanded="false" aria-controls="">My combobox</div>
```

#### Passed Example 9

The `aria-label` [property][] is [global][] and thus [inherited][] for all [semantic role][], including the ones from the [WAI-ARIA Graphics Module](https://www.w3.org/TR/graphics-aria-1.0). This rule is also applicable to SVG elements.

```html
<svg xmlns="http://www.w3.org/2000/svg" role="graphics-object" width="100" height="100" aria-label="yellow circle">
	<circle cx="50" cy="50" r="40" fill="yellow"></circle>
</svg>
```

#### Passed Example 10

This `button` element has an [explicit role][] of `none`. However, it is [focusable][] (by default). Thus it has a [semantic role][] of `button` due to [Presentational Roles Conflict Resolution][]. The `aria-pressed` [state][] is [supported][] for the `button` role.

```html
<button role="none" aria-pressed="false">ACT rules are cool!</button>
```

#### Passed Example 11

This `input` element does not have an [explicit role][] of `textbox`, but the `aria-required` property may be used on an `input` element with a `type` [attribute value][] of `password`.

```html
<label>Password<input type="password" aria-required="true"/></label>
```

### Failed

#### Failed Example 1

The `aria-sort` [property][] is neither [inherited][], [supported][], nor [required][] for the [semantic][semantic role] `button`, which is the [implicit role][] for the `button` element.

```html
<button aria-sort="">Sort by year</button>
```

#### Failed Example 2

The `aria-orientation` property may not be used on `audio` element, nor it can be used on `application` (the [semantic role][] for which [inherited][], [supported][], or [required][] [states][state] or [properties][property] are also applicable to `audio` element).

```html
<audio src="/test-assets/moon-audio/moon-speech.mp3" controls aria-orientation="horizontal"></audio>
```

### Inapplicable

#### Inapplicable Example 1

This `div` element has no [WAI-ARIA state or property][].

```html
<div role="region">A region of content</div>
```

#### Inapplicable Example 2

This `div` element is not [included in the accessibility tree][], hence its [WAI-ARIA state or property][] is not checked.

```html
<div role="button" aria-sort="" style="display:none;"></div>
```

## Glossary

### Attribute value {#attribute-value}

The _attribute value_ of a content attribute set on an HTML element is the value that the attribute gets after being parsed and computed according to specifications. It may differ from the value that is actually written in the HTML code due to trimming whitespace or non-digits characters, default values, or case-insensitivity.

Some notable case of attribute value, among others:

- For [enumerated attributes][], the _attribute value_ is either the state of the attribute, or the keyword that maps to it; even for the default states. Thus `<input type="image" />` has an attribute value of either `Image Button` (the state) or `image` (the keyword mapping to it), both formulations having the same meaning; similarly, "an input element with a `type` _attribute value_ of `Text`" can be either `<input type="text" />`, `<input />` (missing value default), or `<input type="invalid" />` (invalid value default).
- For [boolean attributes][], the _attribute value_ is `true` when the attribute is present and `false` otherwise. Thus `<button disabled>`, `<button disabled="disabled">` and `<button disabled="">` all have a `disabled` _attribute value_ of `true`.
- For attributes whose value is used in a case-insensitive context, the _attribute value_ is the lowercase version of the value written in the HTML code.
- For attributes that accept [numbers][], the _attribute value_ is the result of parsing the value written in the HTML code according to the rules for parsing this kind of number.
- For attributes that accept sets of tokens, whether [space separated][] or [comma separated][], the _attribute value_ is the set of tokens obtained after parsing the set and, depending on the case, converting its items to lowercase (if the set is used in a case-insensitive context).
- For `aria-*` attributes, the _attribute value_ is computed as indicated in the [WAI-ARIA specification][] and the [HTML Accessibility API Mappings][html aam].

This list is not exhaustive, and only serves as an illustration for some of the most common cases.

The _attribute value_ of an [IDL attribute][] is the value returned on getting it. Note that when an [IDL attribute][] [reflects][reflect] a content attribute, they have the same attribute value.

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

{% include_relative _implementation-proposed.md %}

## Changelog

This is the first version of this ACT rule.

[accessibility support base line]: https://www.w3.org/TR/WCAG-EM/#step1c 'Definition of accessibility support base line'
[attribute value]: #attribute-value 'Definition of attribute value'
[boolean attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes 'HTML Specification of Boolean Attribute'
[comma separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#comma-separated-tokens 'HTML Specification of Comma Separated Tokens'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[enumerated attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute 'HTML Specification of Enumerated Attribute'
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[explicit role]: #explicit-role 'Definition of Explicit Role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focusable]: #focusable 'Definition of focusable'
[global]: https://www.w3.org/TR/wai-aria-1.1/#global_states 'Definition of Global ARIA States and Properties'
[html aam]: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings 'Specification of HTML attributes value mapping to ARIA states and properties'
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[idl attribute]: https://heycam.github.io/webidl/#idl-attributes "Definition of Web IDL Attribute (Editor's Draft)"
[implicit role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[inherited]: https://www.w3.org/TR/wai-aria/#inheritedattributes 'Definition of Inherited ARIA States and Properties'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as Decorative'
[namespaced element]: #namespaced-element
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
[numbers]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#numbers 'HTML Specification of Number Parsing'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[programmatically hidden]: #programmatically-hidden 'Definition of Programmatically Hidden'
[property]: https://www.w3.org/TR/wai-aria/#dfn-property 'Definition of ARIA Property'
[pure decoration]: https://www.w3.org/TR/WCAG21/#dfn-pure-decoration 'WCAG definition of Pure Decoration'
[reflect]: https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes 'HTML specification of Reflecting Content Attributes in IDL Attributes'
[required]: https://www.w3.org/TR/wai-aria/#requiredState 'Definition of Required ARIA States and Properties'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[space separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens 'HTML Specification of Space Separated Tokens'
[state]: https://www.w3.org/TR/wai-aria/#dfn-state 'Definition of ARIA State'
[supported]: https://www.w3.org/TR/wai-aria/#supportedState 'Definition of Supported ARIA States and Properties'
[wai-aria specification]: https://www.w3.org/TR/wai-aria-1.1/#propcharacteristic_value 'WAI-ARIA Specification of States and Properties Value'
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
[wai-aria state or property]: https://www.w3.org/TR/wai-aria-1.1/#state_prop_def 'Definition of ARIA States and Properties'
