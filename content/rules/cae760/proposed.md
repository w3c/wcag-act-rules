---
title: "Iframe element has non-empty accessible name"
permalink: /standards-guidelines/act/rules/cae760/proposed/
ref: /standards-guidelines/act/rules/cae760/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/cae760/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> cae760</p>
  <p><strong>Date:</strong> Updated 19 January 2026</p>
  <p><strong>Authors:</strong> <a href="https://github.com/jkodu">Jey Nandakumar</a>, Tom Brunet, <a href="https://github.com/wilcofiers">Wilco Fiers</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule conforms to <a href="https://www.w3.org/TR/act-rules-format-1.1/">ACT Rules Format 1.1</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: cae760
  name: "Iframe element has non-empty accessible name"
  rule_type: atomic
  original_file: iframe-non-empty-accessible-name-cae760.md
  description: |
    This rule checks that each `iframe` element has a non-empty accessible name.
  last_modified: 19 January 2026
  scs_tested:
    - handle: Name, Role, Value
      num: 4.1.2
      level: A
---

## Applicability

This rule applies to `iframe` elements that are [included in the accessibility tree][] except if at least one of the following is true:

- the `iframe` has a negative `tabindex` [attribute value][]; or
- the `iframe` is [marked as decorative][].

## Expectation

Each target element has an [accessible name][] that is not empty (`""`).

## Background

The `frame` element is deprecated, this rule does not consider `frame` or `frameset` elements.

Due to inconsistencies in handling focus on `iframe`, this rule ignores `iframe` elements for which there is an attempt to hide them from assistive technologies. Whether `iframe` elements that are inapplicable to this rule still require an accessible name varies between browsers.

### Assumptions

If an `iframe` is not perceived by the user as a single control, it does not qualify as a [user interface component][] under WCAG 2. In such a scenario, failing this rule would not fail [success criterion 4.1.2](https://www.w3.org/TR/WCAG22/#name-role-value). Unless the `iframe` is both removed from the accessibility tree and removed from [sequential focus navigation][], they usually are considered to be [user interface components][user interface component].

### Accessibility Support

- Browser and assistive technology support for `iframe` elements is currently **inconsistent**. Some examples of inconsistencies include (but are not limited to):
  - There is a known combination of a popular browser and assistive technology that ignores `aria-label` and only announces `title` attribute as an [accessible name][]
  - Some assistive technologies ignore empty `iframe` elements, regardless of if they are focusable or if they have an accessible name.
  - Some browsers instantly redirect focus from `iframe` elements to the first focusable element inside that iframe. This redirect makes it appear as though the `iframe` never receives focus. This occurs even if the `iframe` has a non-negative `tabindex` [attribute value][].
  - Not all browsers redirect focus on `iframe` elements. This ensures that the contents of `iframe` elements can be scrolled and accessed by using the keyboard. This must not be circumvented by using a negative tabindex, as this will make the `iframe` completely inaccessible for keyboard navigation.

### Other Resources

- [H64: Using the title attribute of the frame and iframe elements](https://www.w3.org/WAI/WCAG22/Techniques/html/H64)
- [Understanding Success Criterion 4.1.2](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [User interface component][]

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

<details class="act-inline-assets" markdown="block">
<summary><span>This HTML file is used in several examples:</span></summary>

File [`/test-assets/SC4-1-2-frame-doc.html`](https://w3.org/WAI/content-assets/wcag-act-rules/test-assets/SC4-1-2-frame-doc.html):

```html
<h1>~Grocery List</h1>
<ul>
	<li>Pasta</li>
	<li>Rice</li>
	<li>Bread</li>
	<li>Unsweetened Granola</li>
	<li>Basil</li>
	<li>Honey</li>
</ul>
```

</details>

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/cae760/fbf477c0e122dc4c283cf7b9a5cb7c2802f6e4c9.html">Open in a new tab</a>

This `iframe` element gets its [accessible name][] from the `title` attribute.

```html
<iframe title="Grocery List" src="/test-assets/SC4-1-2-frame-doc.html"> </iframe>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/cae760/4075167ff3009336f6b8e87774a297de217a09b5.html">Open in a new tab</a>

This `iframe` element gets its [accessible name][] from the `aria-label` attribute.

```html
<iframe aria-label="Grocery list" src="/test-assets/SC4-1-2-frame-doc.html"> </iframe>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/cae760/99f10671a6d11813673cd05b0a0c82169c3ec821.html">Open in a new tab</a>

This `iframe` element gets its [accessible name][] from the content of the `div` referenced with the `aria-labelledby` attribute.

```html
<div id="frame-title-helper">Grocery List</div>
<iframe aria-labelledby="frame-title-helper" src="/test-assets/SC4-1-2-frame-doc.html"> </iframe>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/cae760/bbbf921f8ee99ea733ef46b1e28c833ae5212abf.html">Open in a new tab</a>

This `iframe` element has an empty (`""`) [accessible name][]. The `name` attribute is not used in computing the [accessible name][] of `iframe` elements.

```html
<iframe name="Grocery List" src="/test-assets/SC4-1-2-frame-doc.html"> </iframe>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/cae760/c7e0fce611f126d32f7e10200fdffd4cb5b5ceec.html">Open in a new tab</a>

This `iframe` element has no attributes that would give it a non-empty (`""`) [accessible name][].

```html
<iframe src="/test-assets/SC4-1-2-frame-doc.html"> </iframe>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/cae760/5090c2468b8947fdab34a7537029658f022e983b.html">Open in a new tab</a>

This `iframe` element has an empty (`""`) [accessible name][] because the `title` attribute has an empty string as its value.

```html
<iframe title="" src="/test-assets/SC4-1-2-frame-doc.html"> </iframe>
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/cae760/0a18c94e7b8bd8d0a54c14acbc56958918fcad2b.html">Open in a new tab</a>

This `iframe` element has an empty (`""`) [accessible name][] because the `title` attribute value is trimmed of [whitespace][] by the [accessible name computation][accessible name and description computation].

```html
<iframe title=" " src="/test-assets/SC4-1-2-frame-doc.html"> </iframe>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/cae760/ee525eaa03d462065eabd24ad6fbe0ab78fdb04e.html">Open in a new tab</a>

This page has no `iframe` element.

```html
<button>take me somewhere</button>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/cae760/555b35aa0e1cba408f86a4cc85cb5f0101627093.html">Open in a new tab</a>

This `iframe` is not [included in the accessibility tree][] because of setting a style of `display: none;`.

```html
<iframe style="display:none;" src="/test-assets/SC4-1-2-frame-doc.html"></iframe>
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/cae760/77075e0f50c9b77457d90450bc31c0fae372dbaf.html">Open in a new tab</a>

This `iframe` element has a negative `tabindex` [attribute value][].

```html
<iframe tabindex="-1" src="/test-assets/SC4-1-2-frame-doc.html" style="height: 250px"> </iframe>
```

#### Inapplicable Example 4

<a class="example-link" title="Inapplicable Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/cae760/058668cee446d08989bf24d5ce3413dc2cda9975.html">Open in a new tab</a>

This `iframe` element has an [explicit semantic role][] of `none`.

```html
<iframe src="/test-assets/SC4-1-2-frame-doc.html" role="none"> </iframe>
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

### WAI-ARIA specifications {#wai-aria-specifications}

The _WAI ARIA Specifications_ group both the WAI ARIA W3C Recommendation and ARIA modules, namely:

- [Accessible Rich Internet Applications (WAI-ARIA) 1.2](https://www.w3.org/TR/wai-aria-1.2/)
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

[accessibility support base line]: https://www.w3.org/TR/WCAG-EM/#step1c 'Definition of accessibility support base line'
[accessible name and description computation]: https://www.w3.org/TR/accname
[accessible name]: #accessible-name 'Definition of accessible name'
[attribute value]: #attribute-value 'Definition of Attribute value'
[boolean attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes 'HTML Specification of Boolean Attribute'
[comma separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#comma-separated-tokens 'HTML Specification of Comma Separated Tokens'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[earl10-schema]: https://www.w3.org/TR/act-rules-format-1.1/#biblio-earl10-schema
[enumerated attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute 'HTML Specification of Enumerated Attribute'
[examples of accessible name]: https://www.w3.org/WAI/standards-guidelines/act/rules/terms/accessible-name/examples/
[examples of included in the accessibility tree]: https://www.w3.org/WAI/standards-guidelines/act/rules/terms/included-in-the-accessibility-ree/examples/
[explicit role]: #explicit-role 'Definition of Explicit Role'
[explicit semantic role]: #explicit-role 'Definition of explicit semantic role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[html aam]: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings 'Specification of HTML attributes value mapping to ARIA states and properties'
[idl attribute]: https://heycam.github.io/webidl/#idl-attributes "Definition of Web IDL Attribute (Editor's Draft)"
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as Decorative'
[numbers]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#numbers 'HTML Specification of Number Parsing'
[outcome property]: https://www.w3.org/TR/EARL10-Schema/#outcome
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[programmatically hidden]: #programmatically-hidden 'Definition of Programmatically Hidden'
[pure decoration]: https://www.w3.org/TR/WCAG22/#dfn-pure-decoration 'WCAG definition of Pure Decoration'
[reflect]: https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes 'HTML specification of Reflecting Content Attributes in IDL Attributes'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[space separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens 'HTML Specification of Space Separated Tokens'
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[test subject]: https://www.w3.org/TR/act-rules-format-1.1/#test-subject
[test target]: https://www.w3.org/TR/act-rules-format/#test-target
[user interface component]: https://www.w3.org/TR/WCAG22/#dfn-user-interface-components
[wai-aria specification]: https://www.w3.org/TR/wai-aria-1.2/#propcharacteristic_value 'WAI-ARIA Specification of States and Properties Value'
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
[whitespace]: #whitespace 'Definition of whitespace'
