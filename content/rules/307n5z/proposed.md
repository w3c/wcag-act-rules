---
title: "Element with presentational children has no focusable content"
permalink: /standards-guidelines/act/rules/307n5z/proposed/
ref: /standards-guidelines/act/rules/307n5z/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/307n5z/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> 307n5z</p>
  <p><strong>Date:</strong> Updated 19 January 2026</p>
  <p><strong>Authors:</strong> <a href="https://github.com/wilcofiers">Wilco Fiers</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule conforms to <a href="https://www.w3.org/TR/act-rules-format-1.1/">ACT Rules Format 1.1</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: 307n5z
  name: "Element with presentational children has no focusable content"
  rule_type: atomic
  original_file: presentational-children-no-focusable-content-307n5z.md
  description: |
    This rule checks that elements with a role that makes its children presentational do not contain focusable elements.
  last_modified: 19 January 2026
  scs_tested:
    - handle: Name, Role, Value
      num: 4.1.2
      level: A
---

## Applicability

This rule applies to any [HTML or SVG element][] with a [semantic role][] that defines its [children][child] to be [presentational children][].

## Expectation

None of the target elements have [descendants][] in the [flat tree][] that are part of [sequential focus navigation][].

## Background

This rule applies to elements with a [semantic role][] that defines its [children][child] to be [presentational children][], which are all of the following: `button`, `checkbox`, `img`, `meter`, `menuitemcheckbox`, `menuitemradio`, `option`, `progressbar`, `radio`, `scrollbar`, `separator`, `slider`, `switch`, and `tab`.

Elements with a [semantic role][] that has [presentational children][] will not have any descendants in the accessibility tree. If any of those descendants are included in [sequential focus navigation][], this causes the focus to land on an element that has no corresponding node in the [accessibility tree][]. The result is that there is no programmatic name or role available for assistive technologies. There are other problems that can come from [presentational children][] too. These must be tested separately.

### Assumptions

This rule assumes that elements that are part of [sequential focus navigation][] do not immediately blur, or move focus to another element. Such elements will fail this rule, but may still satisfy success criterion 4.1.2.

### Accessibility Support

Several major browsers ignore the WAI-ARIA requirements on [presentational children][] for most or sometimes all roles, or in presence of focusable content. Since some browsers implement presentational children while others do not, pages failing this rule may only be problematic with some browsers.

This rule is often misunderstood as applying to elements with an _explicit_ role of `presentation`.  In fact, this rule only applies to elements which have been given an _implicit_ role of `presentation` through the [presentational children][] mechanism.  Similarly, this rule does not apply to elements with `aria-hidden="true"`.

### Related rules

- [Element with aria-hidden has no content in sequential focus navigation](https://www.w3.org/WAI/standards-guidelines/act/rules/6cfa84/)

### Other Resources

- [Understanding Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships)
- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value)
- [WAI-ARIA 1.2 Presentational Children][presentational children]

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

- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)
- [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)

## Examples

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/307n5z/ccaf2315b5268a447dff07aad635b3ad27aabaf8.html">Open in a new tab</a>

None of these `button` elements has [descendants][] that are included in [sequential focus navigation][].

```html
<button>Save</button> <button aria-label="save options" aria-expanded="false">▼</button>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/307n5z/9bdea8c670e441afe5299bed4ea02b304becaaf8.html">Open in a new tab</a>

This element with the `checkbox` role has no [descendants][] that are included in [sequential focus navigation][]. Instead the link to the terms of service is adjacent, and `aria-labelledby` is used to provide its [accessible name][].

```html
<p id="terms">
	<span role="checkbox" aria-checked="false" tabindex="0" aria-labelledby="terms">
		I agree to the
	</span>
	<a href="/terms">terms of service</a>
</p>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/307n5z/8c835039e68f3fefc58e8b0985b2060fa02b3480.html">Open in a new tab</a>

This element with the `menuitemcheckbox` role has an `input` element as a descendant. Because the `input` is disabled it is not included in [sequential focus navigation][].

**Note**: The `input` checkbox has a `role` [attribute value][] of `none` to ensure it is ignored by browsers that do not support [presentational children][].

```html
<ul role="menu">
	<li role="menuitemcheckbox" aria-checked="true">
		<input type="checkbox" role="none" disabled checked />
		Sort by Last Modified
	</li>
</ul>
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/307n5z/ede992d9573d350db7cd0cb8685de5b96460fbc1.html">Open in a new tab</a>

This `<button>` element has an `a` element as a [child][].  The `a` element has no `href` attribute, so it isn't included in [sequential focus navigation][].  So this `button` element passes the rule.

```html
<button><a>button/link</a></button>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/307n5z/3798f2c4c821019fe59bbcc671d46b4e9d2c9d50.html">Open in a new tab</a>

This `button` element has a [child][] `span` element. Because the `span` element has a `tabindex` attribute with value of `0`, it is included in [sequential focus navigation][].

```html
<button>
	Save
	<span role="button" aria-label="save options" aria-expanded="false" tabindex="0">▼</span>
</button>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/307n5z/b9f6f775efc8d7cdc38782087ccc6abaa88babb6.html">Open in a new tab</a>

This element with the `checkbox` role has an `a` element as a [child][]. Because the `a` element has an `href` attribute, it is included in [sequential focus navigation][].

```html
<p role="checkbox" aria-checked="false" tabindex="0">I agree to the <a href="/terms">terms of service</a></p>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/307n5z/61a402c2eb82ccb8614aa62918cff81b8306ddf2.html">Open in a new tab</a>

This element with the `menuitemcheckbox` role has a checkbox as a child. Because the checkbox is not disabled, it is included in [sequential focus navigation][].

```html
<ul role="menu">
	<li role="menuitemcheckbox" aria-checked="true">
		<input type="checkbox" checked />
		Sort by Last Modified
	</li>
</ul>
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/307n5z/7bfb3a2d5783ade108f4f9fee10597a2343f8665.html">Open in a new tab</a>

This element with the `tab` role contains an `a` element.  The `tab` role has [presentational children][].  The `a` element is included in [sequential focus navigation][].  So the element with the `tab` role fails the rule.  (This tablist implementation is non-functional for users.  It's not meant to function - it's only meant to show roles.)

```html
<ul role="tablist">
	<li role="tab">
		<a href="#">Tab 1</a>
	</li>
</ul>
```

#### Failed Example 5

<a class="example-link" title="Failed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/307n5z/ad7e2441b992318debdeec5a07f92b0241f80a14.html">Open in a new tab</a>

This element with the `img` role contains an `a` element.  The `img` role has [presentational children][].  The `a` element is included in [sequential focus navigation][].  So the element with the `img` role fails the rule.

```html
<span role="img" aria-label="some ASCII art">****** This ASCII art ******* <a href="#">contains a link.</a></span>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/307n5z/837f998533e07e309d5f9a587b7a5ff013a73c7a.html">Open in a new tab</a>

None of the roles that build this semantic table structure (`table` for `table`, `row` for `tr`, `columnheader` for `th`, and `cell` for `td`) have [presentational children][].  So this rule does not apply to them.

```html
<table>
	<thead>
		<tr>
			<th><a href="#">link in table header cell - no problem</a></th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><a href="#">link in table data cell - no problem</a></td>
		</tr>
	</tbody>
</table>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/307n5z/e687f56e16c718c737b2ebc096ab768bd9d87d50.html">Open in a new tab</a>

This `a` element has a `link` role, which does not have [presentational children][].  So this `a` element does not fail this rule, because it's inapplicable.  To have a "focusable element within a focusable element" like this is a bad practice, but this rule doesn't directly check for it.

```html
<a href="https://w3.org"><span tabindex="0">W3C Website</span></a>
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

The <dfn id="attribute-value:attribute">attribute value</dfn> of a content attribute set on an HTML element is the value that the attribute gets after being parsed and computed according to specifications. It may differ from the value that is actually written in the HTML code due to trimming whitespace or non-digits characters, default values, or case-insensitivity.

Some notable case of attribute value, among others:

- For [enumerated attributes][], the <dfn id="attribute-value:enumerated">attribute value</dfn> is either the state of the attribute, or the keyword that maps to it; even for the default states. Thus `<input type="image" />` has an attribute value of either `Image Button` (the state) or `image` (the keyword mapping to it), both formulations having the same meaning; similarly, "an input element with a `type` _attribute value_ of `Text`" can be either `<input type="text" />`, `<input />` (missing value default), or `<input type="invalid" />` (invalid value default).
- For [boolean attributes][], the <dfn id="attribute-value:boolean">attribute value</dfn> is `true` when the attribute is present and `false` otherwise. Thus `<button disabled>`, `<button disabled="disabled">` and `<button disabled="">` all have a `disabled` _attribute value_ of `true`.
- For attributes whose value is used in a case-insensitive context, the <dfn id="attribute-value:case-insensitive">attribute value</dfn> is the lowercase version of the value written in the HTML code.
- For attributes that accept [numbers][], the <dfn id="attribute-value:number">attribute value</dfn> is the result of parsing the value written in the HTML code according to the rules for parsing this kind of number.
- For attributes that accept sets of tokens, whether [space separated][] or [comma separated][], the <dfn id="attribute-value:tokens-list">attribute value</dfn> is the set of tokens obtained after parsing the set and, depending on the case, converting its items to lowercase (if the set is used in a case-insensitive context).
- For `aria-*` attributes, the <dfn id="attribute-value:aria">attribute value</dfn> is computed as indicated in the [WAI-ARIA specification][] and the [HTML Accessibility API Mappings][html aam].

This list is not exhaustive, and only serves as an illustration for some of the most common cases.

The <dfn id="attribute-value:idl">attribute value</dfn> of an [IDL attribute][] is the value returned on getting it. Note that when an [IDL attribute][] [reflects][reflect] a content attribute, they have the same attribute value.

### Explicit Semantic Role {#explicit-role}

The _explicit semantic role_ of an element is determined by its [role attribute][] (if any).

The [role attribute][] takes a list of tokens. The explicit semantic role is the first valid role in this list. The valid roles are all non-abstract roles from [WAI-ARIA Specifications][]. If the element has no [role attribute][], or if it has one with no valid role, then this element has no explicit semantic role.

Other roles may be added as they become available. Not all roles will be supported in all assistive technologies. Testers are encouraged to adjust which roles are allowed according to the [accessibility support base line][]. For the purposes of executing examples in all rules, it should be assumed that all roles are supported by assistive technologies so that none of the roles fail due to lack of accessibility support.

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

A conclusion that comes from evaluating an ACT Rule on a [test subject][] or one of its constituent test target. An outcome can be one of the five following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target][] meets all expectations
- **Failed:** A [test target][] does not meet all expectations
- **cantTell:** Whether the rule is applicable, or not all expectations were met could not be fully determined by the tester.
- **Untested**: The tester has not attempted to evaluate the test subject.

**Note**: A rule has one `passed` or `failed` outcome for every [test target][]. When a tester evaluates a test target it can also be reported as `cantTell` if the rule cannot be tested in its entirety. For example, when applicability was automated, but the expectations have to be evaluated manually.

When there are no test targets the rule has one `inapplicable` outcome. If the tester is unable to determine whether there are test targets there will be one `cantTell` outcome. And when no evaluation has occurred the test target has one untested outcome. This means that each [test subject][] always has one or more outcomes.

Outcomes used in ACT Rules can be expressed using the [outcome property][] of the [EARL10-Schema][earl10-schema].

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
[accessibility tree]: https://www.w3.org/TR/accname-1.1/#dfn-accessibility-tree 'Definition of Accessibility tree'
[accessible name and description computation]: https://www.w3.org/TR/accname 'Accessible Name and Description Computation'
[accessible name]: #accessible-name 'Definition of Accessible name'
[attribute value]: #attribute-value 'Definition of Attribute value'
[boolean attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes 'HTML Specification of Boolean Attribute'
[child]: https://dom.spec.whatwg.org/#concept-tree-child 'Definition child, as on 2020-10-21'
[comma separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#comma-separated-tokens 'HTML Specification of Comma Separated Tokens'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[descendants]: https://dom.spec.whatwg.org/#concept-tree-descendant 'Definition Descendant, as on 2020-10-21'
[earl10-schema]: https://www.w3.org/TR/act-rules-format-1.1/#biblio-earl10-schema
[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[enumerated attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute 'HTML Specification of Enumerated Attribute'
[examples of accessible name]: https://www.w3.org/WAI/standards-guidelines/act/rules/terms/accessible-name/examples/
[examples of included in the accessibility tree]: https://www.w3.org/WAI/standards-guidelines/act/rules/terms/included-in-the-accessibility-ree/examples/
[explicit role]: #explicit-role 'Definition of Explicit Role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS Scoping definition of Flat tree, working draft'
[focusable]: #focusable 'Definition of Focusable'
[html aam]: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings 'Specification of HTML attributes value mapping to ARIA states and properties'
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[html or svg element]: #namespaced-element
[idl attribute]: https://heycam.github.io/webidl/#idl-attributes "Definition of Web IDL Attribute (Editor's Draft)"
[implicit role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as Decorative'
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
[numbers]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#numbers 'HTML Specification of Number Parsing'
[outcome property]: https://www.w3.org/TR/EARL10-Schema/#outcome
[presentational children]: https://www.w3.org/TR/wai-aria-1.2/#childrenArePresentational 'WAI-ARIA 1.2 Presentational Children'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[programmatically hidden]: #programmatically-hidden 'Definition of Programmatically Hidden'
[pure decoration]: https://www.w3.org/TR/WCAG22/#dfn-pure-decoration 'WCAG definition of Pure Decoration'
[reflect]: https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes 'HTML specification of Reflecting Content Attributes in IDL Attributes'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[semantic role]: #semantic-role 'Definition of Semantic role'
[sequential focus navigation]: https://html.spec.whatwg.org/#sequential-focus-navigation 'HTML sequential focus navigation, 2020/10/21'
[space separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens 'HTML Specification of Space Separated Tokens'
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[test subject]: https://www.w3.org/TR/act-rules-format-1.1/#test-subject
[test target]: https://www.w3.org/TR/act-rules-format/#test-target
[wai-aria specification]: https://www.w3.org/TR/wai-aria-1.2/#propcharacteristic_value 'WAI-ARIA Specification of States and Properties Value'
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
