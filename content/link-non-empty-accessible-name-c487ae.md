---
title: "Link has non-empty accessible name"
permalink: /standards-guidelines/act/rules/link-non-empty-accessible-name-c487ae/
ref: /standards-guidelines/act/rules/link-non-empty-accessible-name-c487ae/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/link-non-empty-accessible-name-c487ae.md
footer: |
  <p><strong>Date:</strong> Updated 19 January 2022</p>
  <p><strong>Rule Identifier:</strong> c487ae</p>
  <p><strong>Authors:</strong> <a href="https://github.com/annethyme">Anne Thyme Nørregaard</a>, <a href="https://github.com/wilcofiers">Wilco Fiers</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules community group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>.</p>
  <p><strong>Assets:</strong> test cases use assets from the following sources: Image used in passed example 10 and failed example 9 is courtesy of NASA/JPL-Caltech..</p>
proposed: false
rule_meta:
  id: c487ae
  name: "Link has non-empty accessible name"
  rule_type: atomic
  description: |
    This rule checks that each link has a non-empty accessible name.
  last_modified: 19 January 2022
  scs_tested:
    - handle: Name, Role, Value
      num: 4.1.2
      level: A
    - handle: Link Purpose (In Context)
      num: 2.4.4
      level: A
    - handle: Link Purpose (Link Only)
      num: 2.4.9
      level: AAA
---

## Applicability

This rule applies to any [HTML element][] that is a [semantic][semantic role] `link` [included in the accessibility tree][].

## Expectation

Each target element has an [accessible name][] that is not empty (`""`).

## Assumptions

The rule assumes that all links are [user interface components](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components) as defined by WCAG 2. When the link role is used on elements that do not behave as links, failing this rule might not mean that the success criteria are failed.

## Accessibility Support

- There are assistive technologies that do not support using the `title` attribute for an [accessible name][], or in which this feature can be disabled.
- For `area` elements that have an `href` attribute, but are not nested inside a `map` element, there are differences between browsers and assistive technology on if the `area` is [included in the accessibility tree][].
- Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some [semantic][semantic role] `link` elements can fail this rule with some technology but users of other technologies would not experience any accessibility issue.

## Background

### Related rules

- [Link in context is descriptive](https://act-rules.github.io/rules/5effbb)

### Bibliography

- [Understanding Success Criterion 2.4.4: Link Purpose (In Context)](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context)
- [ARIA7: Using aria-labelledby for link purpose](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA7)
- [ARIA8: Using aria-label for link purpose](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA8)
- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value)
- [F89: Failure of Success Criteria 2.4.4, 2.4.9 and 4.1.2 due to not providing an accessible name for an image which is the only content in a link](https://www.w3.org/WAI/WCAG21/Techniques/failures/F89)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details><summary>4.1.2 Name, Role, Value (Level A)</summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#name-role-value">Learn more about 4.1.2 Name, Role, Value</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level A and higher.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details><summary>2.4.4 Link Purpose (In Context) (Level A)</summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#link-purpose-in-context">Learn more about 2.4.4 Link Purpose (In Context)</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level A and higher.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details><summary>2.4.9 Link Purpose (Link Only) (Level AAA)</summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#link-purpose-link-only">Learn more about 2.4.9 Link Purpose (Link Only)</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level AAA.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details><summary>G91: Providing link text that describes the purpose of a link</summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G91">Learn more about technique G91</a></li>
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

This `a` element has an [accessible name][] from its content.

```html
<a href="https://www.w3.org/WAI"> Web Accessibility Initiative (WAI) </a>
```

#### Passed Example 2

This `div` element has an [explicit semantic role](#explicit-role) of `link` and an [accessible name][] from its content.

```html
<div role="link" onclick="openLink(event)" onkeyup="openLink(event)" tabindex="0">
	Web Accessibility Initiative (WAI)
</div>
<script>
	function openLink(event) {
		if (event.type === 'click' || ['Enter', ' '].includes(event.key)) {
			window.location.href = 'https://www.w3.org/WAI/'
		}
	}
</script>
```

#### Passed Example 3

This `button` element has an [explicit semantic role](#explicit-role) of `link` and an [accessible name][] from its content.

```html
<button role="link" onclick="window.location.href='https://www.w3.org/WAI/'">Click me for WAI!</button>
```

#### Passed Example 4

This `a` element has an [accessible name][] via `aria-label`

```html
<a href="https://www.w3.org/WAI"
	><img src="/test-assets/shared/w3c-logo.png" aria-label="Web Accessibility Initiative"
/></a>
```

#### Passed Example 5

This `a` element has an [accessible name][] via `title`.

```html
<a href="https://www.w3.org/WAI" title="Web Accessibility Initiative"
	><img src="/test-assets/shared/w3c-logo.png" alt=""
/></a>
```

#### Passed Example 6

This `a` element has an [accessible name][] from its content via the `title` on the `img` element.

```html
<a href="https://www.w3.org/WAI"><img src="/test-assets/shared/w3c-logo.png" title="Web Accessibility Initiative"/></a>
```

#### Passed Example 7

This `a` element has an [accessible name][] from its content.

```html
<a href="https://www.w3.org/WAI"
	><img src="/test-assets/shared/w3c-logo.png" alt="" />Web Accessibility Initiative (WAI)</a
>
```

#### Passed Example 8

This `a` element has an [accessible name][] from its content via `aria-labelledby` on the `img` element.

```html
<a href="https://www.w3.org/WAI"><img src="/test-assets/shared/w3c-logo.png" aria-labelledby="id1"/></a>
<div id="id1">Web Accessibility Initiative (WAI)</div>
```

#### Passed Example 9

This `a` element placed off screen has an [accessible name][] from its content.

```html
<html>
	<style>
		.offScreenLink {
			position: absolute;
			left: -9999px;
			top: -9999px;
		}
	</style>
	<body>
		<a class="offScreenLink" href="https://www.w3.org/WAI">Web Accessibility Initiative (WAI)</a>
	</body>
</html>
```

#### Passed Example 10

This `area` element has a [semantic role][] of `link` and an [accessible name][] via `alt`.

```html
<img src="/test-assets/c487ae/planets.jpg" width="145" height="126" alt="Planets" usemap="#planetmap" />

<map name="planetmap">
	<area shape="rect" coords="0,0,30,100" href="sun.htm" alt="Sun" />
</map>
```

### Failed

#### Failed Example 1

This `a` element has an empty [accessible name][].

```html
<a href="http://www.w3.org/WAI"></a>
```

#### Failed Example 2

This `a` element with an image has an empty [accessible name][]. The image is decorative and is marked as such with an empty `alt` [attribute value][].

```html
<a href="https://www.w3.org/WAI"><img src="/test-assets/shared/w3c-logo.png" alt=""/></a>
```

#### Failed Example 3

This `a` element with an image has an empty [accessible name][]. The image is decorative because it has a `role` [attribute value][] of `presentation`.

```html
<a href="http://www.w3.org/WAI"><img src="/test-assets/shared/w3c-logo.png" role="presentation"/></a>
```

#### Failed Example 4

This `a` element with an image has an empty [accessible name][]. The image is decorative because it has a `role` [attribute value][] of `none`.

```html
<a href="http://www.w3.org/WAI"><img src="/test-assets/shared/w3c-logo.png" role="none"/></a>
```

#### Failed Example 5

This `a` element with an `img` with an empty `title` has an empty [accessible name][].

```html
<a href="https://www.w3.org/WAI"><img src="/test-assets/shared/w3c-logo.png" title=""/></a>
```

#### Failed Example 6

This `a` element with an `img` with an `aria-labelledby` has an empty [accessible name][].

```html
<a href="https://www.w3.org/WAI"><img src="/test-assets/shared/w3c-logo.png" aria-labelledby="id1"/></a>
<div id="id1"></div>
```

#### Failed Example 7

This `a` element with an `img` with an `aria-labelledby` referencing a non-existing id has an empty [accessible name][].

```html
<a href="https://www.w3.org/WAI"><img src="/test-assets/shared/w3c-logo.png" aria-labelledby="id1"/></a>
```

#### Failed Example 8

This `a` element placed off screen has an empty [accessible name][].

```html
<a href="https://www.w3.org/WAI" style="left: -9999px; position: absolute;">
	<img src="/test-assets/shared/w3c-logo.png" />
</a>
```

#### Failed Example 9

This `area` element has a [semantic role][] of `link` and an empty [accessible name][].

```html
<img src="/test-assets/c487ae/planets.jpg" width="145" height="126" alt="Planets" usemap="#planetmap" />

<map name="planetmap">
	<area shape="rect" coords="0,0,82,126" href="sun.htm" />
</map>
```

#### Failed Example 10

This `a` element has an [explicit role][] of `none`. However, it is [focusable][] (by default). Thus it has a [semantic role][] of `link` due to [Presentational Roles Conflict Resolution][]. It has an empty [accessible name][].

```html
<a href="https://www.w3.org/WAI" role="none"> </a>
```

### Inapplicable

#### Inapplicable Example 1

This `a` element does not have a [semantic role][] of `link` because it has been changed to `button`.

```html
<a href="https://www.w3.org/WAI" role="button">
	Web Accessibility Initiative (WAI)
</a>
```

#### Inapplicable Example 2

This `a` element is not [included in the accessibility tree][] due to `display: none`.

```html
<a href="https://www.w3.org/WAI" style="display: none;"><img src="/test-assets/shared/w3c-logo.png"/></a>
```

#### Inapplicable Example 3

This `a` element is not [included in the accessibility tree][] due to `visibility: hidden`.

```html
<a href="https://www.w3.org/WAI" style="visibility: hidden;">Some text</a>
```

#### Inapplicable Example 4

This `a` element is not [included in the accessibility tree][] due to `aria-hidden="true"`.

```html
<a aria-hidden="true" href="https://www.w3.org/WAI">
	Web Accessibility Initiative (WAI)
</a>
```

#### Inapplicable Example 5

This `area` element does not have the role of link because it does not have an `href` attribute.

```html
<area shape="rect" coords="0,0,82,126" />
```

#### Inapplicable Example 6

This `a` element does not have the role of link because it does not have an `href` attribute.

```html
<a />
```

## Glossary

### Accessible Name {#accessible-name}

The _accessible name_ is the programmatically determined name of a user interface element that is [included in the accessibility tree](#included-in-the-accessibility-tree).

The accessible name is calculated using the [accessible name and description computation][].

For native markup languages, such as HTML and SVG, additional information on how to calculate the accessible name can be found in [HTML Accessibility API Mappings 1.0, Accessible Name and Description Computation (working draft)](https://www.w3.org/TR/html-aam/#accessible-name-and-description-computation) and [SVG Accessibility API Mappings, Name and Description (working draft)](https://www.w3.org/TR/svg-aam/#mapping_additional).

For more details, see [examples of accessible name][].

**Note:** As per the [accessible name and description computation][], each element always has an accessible name. When no accessible name is provided, the element will nonetheless be assigned an empty (`""`) one.

**Note:** As per the [accessible name and description computation][], accessible names are [flat string](https://www.w3.org/TR/accname-1.1/#terminology) trimmed of leading and trailing whitespace. Notably, it is not possible for a non-empty accessible name to be composed only of whitespace since these must be trimmed.

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

{% include_relative implementations/c487ae.md %}

## Changelog

This is the first version of this ACT rule.

[accessibility support base line]: https://www.w3.org/TR/WCAG-EM/#step1c 'Definition of accessibility support base line'
[accessible name and description computation]: https://www.w3.org/TR/accname 'Accessible Name and Description Computation'
[accessible name]: #accessible-name 'Definition of accessible name'
[attribute value]: #attribute-value 'Definition of Attribute value'
[boolean attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes 'HTML Specification of Boolean Attribute'
[comma separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#comma-separated-tokens 'HTML Specification of Comma Separated Tokens'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[enumerated attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute 'HTML Specification of Enumerated Attribute'
[examples of accessible name]: https://act-rules.github.io/pages/examples/accessible-name/
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[explicit role]: #explicit-role 'Definition of Explicit Role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focusable]: #focusable 'Definition of focusable'
[html aam]: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings 'Specification of HTML attributes value mapping to ARIA states and properties'
[html element]: #namespaced-element
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[idl attribute]: https://heycam.github.io/webidl/#idl-attributes "Definition of Web IDL Attribute (Editor's Draft)"
[implicit role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as Decorative'
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
[numbers]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#numbers 'HTML Specification of Number Parsing'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[programmatically hidden]: #programmatically-hidden 'Definition of Programmatically Hidden'
[pure decoration]: https://www.w3.org/TR/WCAG21/#dfn-pure-decoration 'WCAG definition of Pure Decoration'
[reflect]: https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes 'HTML specification of Reflecting Content Attributes in IDL Attributes'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[space separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens 'HTML Specification of Space Separated Tokens'
[wai-aria specification]: https://www.w3.org/TR/wai-aria-1.1/#propcharacteristic_value 'WAI-ARIA Specification of States and Properties Value'
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
