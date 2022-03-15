---
title: "Element with aria-hidden has no focusable content"
permalink: /standards-guidelines/act/rules/6cfa84/proposed/
ref: /standards-guidelines/act/rules/6cfa84/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/6cfa84/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> 6cfa84</p>
  <p><strong>Date:</strong> Updated 15 March 2022</p>
  <p><strong>Authors:</strong> <a href="https://github.com/wilcofiers">Wilco Fiers</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: 6cfa84
  name: "Element with `aria-hidden` has no focusable content"
  rule_type: atomic
  description: |
    This rule checks that elements with an `aria-hidden` attribute do not contain focusable elements.
  last_modified: 15 March 2022
  scs_tested:
    - handle: Name, Role, Value
      num: 4.1.2
      level: A
---

## Applicability

This rule applies to any element with an `aria-hidden` [attribute value][] of `true`.

## Expectation

None of the target elements are [focusable][], nor do they have [descendants](https://dom.spec.whatwg.org/#concept-tree-descendant) in the [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree) that are [focusable][].

## Assumptions

Interacting with the page does not result in changing the `aria-hidden` [attribute value][] of target elements. An example of such a situation would be when closing a modal dialog makes previously hidden and not [focusable][] elements become [focusable][].

## Accessibility Support

Some user agents treat the value of `aria-hidden` attribute as case-sensitive.

## Background

Using `aria-hidden="false"` on a descendant of an element with `aria-hidden="true"` [**does not** expose that element](https://www.w3.org/TR/wai-aria-1.1/#aria-hidden). `aria-hidden="true"` hides itself and all its content from assistive technologies.

By adding `aria-hidden="true"` to an element, content authors ensure that assistive technologies will ignore the element. This can be used to hide parts of a web page that are [pure decoration](https://www.w3.org/TR/WCAG21/#dfn-pure-decoration), such as icon fonts - that are not meant to be read by assistive technologies.

A [focusable][] element with `aria-hidden="true"` is ignored as part of the reading order, but still part of the focus order, making its state of [visible](#visible) or hidden unclear.

The 1 second time span introduced in the exception of the definition of [focusable][] is an arbitrary limit which is not included in WCAG. Given that scripts can manage the focus state of elements, testing the focused state of an element consistently would be impractical without a time limit.

### Related rules

- [Element with presentational children has no focusable content](https://act-rules.github.io/rules/307n5z)

### Bibliography

- [CSS Scoping Module Level 1 (editor's draft)](https://drafts.csswg.org/css-scoping/)
- [Understanding Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships)
- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value)
- [`aria-hidden` (state)](https://www.w3.org/TR/wai-aria-1.1/#aria-hidden)
- [Fourth rule of ARIA use](https://www.w3.org/TR/using-aria/#fourth)
- [Element with presentational children has no focusable content](presentational-children-no-focusable-content-307n5z.md)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>4.1.2 Name, Role, Value (Level A)</span></summary>
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
  <li><details>
    <summary><span>Fourth rule of ARIA use</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/using-aria/#fourth">Learn more about Fourth rule of ARIA use</a></li>
      <li>Not required for conformance to any W3C accessibility recommendation.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: WAI-ARIA rule is not satisfied</li>
        <li>All <code>passed</code> outcomes: WAI-ARIA rule needs further testing</li>
        <li>An <code>inapplicable</code> outcome: WAI-ARIA rule needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
</ul>

## Input Aspects

The following aspects are required in using this rule.

- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)
- [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)

## Test Cases

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" href="/content-assets/wcag-act-rules/testcases/6cfa84/5bd22090d0f74dcea752749ef4ad8411e3772535.html">Open in a new tab</a>

This `p` element is not [focusable][].

```html
<p aria-hidden="true">Some text</p>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" href="/content-assets/wcag-act-rules/testcases/6cfa84/9f9f5e323450f4c0bd5445597a39d160ce07ff48.html">Open in a new tab</a>

This `a` element is not [focusable][] because it is hidden through CSS.

```html
<div aria-hidden="true">
	<a href="/" style="display:none">Link</a>
</div>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" href="/content-assets/wcag-act-rules/testcases/6cfa84/3c48f0e596f96b4bb701943356b6c179f41d383c.html">Open in a new tab</a>

This `input` element is not [focusable][] because of the `disabled` attribute.

```html
<input disabled aria-hidden="true" />
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" href="/content-assets/wcag-act-rules/testcases/6cfa84/8f7b47436534d716bf8f088786e5ee6b1154c23c.html">Open in a new tab</a>

This `a` element is not [focusable][] because it moves focus to the `input` element whenever it receives focus.

```html
<div aria-hidden="true">
	<a href="/" style="position:absolute; top:-999em" onfocus="document.querySelector('input').focus()">First link</a>
</div>
<input />
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" href="/content-assets/wcag-act-rules/testcases/6cfa84/4e7955d592cbf361a55113fcd4524e979b16bb08.html">Open in a new tab</a>

This `a` element positioned off screen is [focusable][] using the keyboard.

```html
<div aria-hidden="true">
	<a href="/" style="position:absolute; top:-999em">Link</a>
</div>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" href="/content-assets/wcag-act-rules/testcases/6cfa84/2adaacc2f7b8d7a0d2d1496ad6f56aafd171f7fe.html">Open in a new tab</a>

This `input` element is [focusable][] because it was incorrectly disabled.

```html
<div aria-hidden="true">
	<input aria-disabled="true" />
</div>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" href="/content-assets/wcag-act-rules/testcases/6cfa84/7d1d269e9ff9a8f396b2d638103379b6cf937225.html">Open in a new tab</a>

This `button` element is [focusable][] and a descendant of an element with an `aria-hidden` [attribute value][] of `true` because `aria-hidden` can't be reset once set to true on an ancestor.

```html
<div aria-hidden="true">
	<div aria-hidden="false">
		<button>Some button</button>
	</div>
</div>
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" href="/content-assets/wcag-act-rules/testcases/6cfa84/d0b1b435bb2757bab5f644e53a273a9f50c8bc2c.html">Open in a new tab</a>

This `p` element is [focusable][] because of the `tabindex` attribute.

```html
<p tabindex="0" aria-hidden="true">Some text</p>
```

#### Failed Example 5

<a class="example-link" title="Failed Example 5" href="/content-assets/wcag-act-rules/testcases/6cfa84/85a2d2ea8aeb1eddb5a6576edb958c2d1597ddfc.html">Open in a new tab</a>

This `button` element is [focusable][] because of the `tabindex` attribute.

```html
<div aria-hidden="true">
	<button tabindex="-1">Some button</button>
</div>
```

#### Failed Example 6

<a class="example-link" title="Failed Example 6" href="/content-assets/wcag-act-rules/testcases/6cfa84/9cc94f9f9549ef0c9fc0433e22e4fe59843d1b2a.html">Open in a new tab</a>

This `summary` element is [focusable][].

```html
<details aria-hidden="true">
	<summary>Some button</summary>
	<p>Some details</p>
</details>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" href="/content-assets/wcag-act-rules/testcases/6cfa84/afb819d4c7cfdf8fc468bb2297da3247fb5ac056.html">Open in a new tab</a>

This `aria-hidden` attribute is ignored with null value.

```html
<button tabindex="-1" aria-hidden>Some button</button>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" href="/content-assets/wcag-act-rules/testcases/6cfa84/22d7a78f0d6680f70dae9cc412f496450a2acf4e.html">Open in a new tab</a>

This `aria-hidden` attribute is ignored with value `false`.

```html
<p aria-hidden="false">Some text</p>
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" href="/content-assets/wcag-act-rules/testcases/6cfa84/4d71a1ad253efab083f05dc558656d94eb430ca7.html">Open in a new tab</a>

This `aria-hidden` attribute has an incorrect value.

```html
<div aria-hidden="yes">
	<p>Some text</p>
</div>
```

## Glossary

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

### Focusable {#focusable}

An element is _focusable_ if one or both of the following are true:

- the element is part of [sequential focus navigation][]; or
- the element has a [tabindex value][] that is not null.

**Exception**: Elements that lose focus during a period of up to 1 second after gaining focus, without the user interacting with the page the element is on, are not considered _focusable_.

Notes:

- The 1 second time span is an arbitrary limit which is not included in WCAG. Given that scripts can manage the focus state of elements, testing the focusability of an element consistently would be impractical without a time limit.
- The [tabindex value][] of an element is the value of the [tabindex attribute][] parsed using the [rules for parsing integers][]. For the [tabindex value][] to be different from null, it needs to be [parsed][rules for parsing integers] without errors.

### Outcome {#outcome}

An _outcome_ is a conclusion that comes from evaluating an ACT Rule on a [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) or one of its constituent [test target](https://www.w3.org/TR/act-rules-format/#test-target). An outcome can be one of the three following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) meets all expectations
- **Failed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) does not meet all expectations

**Note:** A rule has one `passed` or `failed` outcome for every [test target](https://www.w3.org/TR/act-rules-format/#test-target). When there are no test targets the rule has one `inapplicable` outcome. This means that each [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) will have one or more outcomes.

**Note:** Implementations using the [EARL10-Schema](https://www.w3.org/TR/EARL10-Schema/) can express the outcome with the [outcome property](https://www.w3.org/TR/EARL10-Schema/#outcome). In addition to `passed`, `failed` and `inapplicable`, EARL 1.0 also defined an `incomplete` outcome. While this cannot be the outcome of an ACT Rule when applied in its entirety, it often happens that rules are only partially evaluated. For example, when applicability was automated, but the expectations have to be evaluated manually. Such "interim" results can be expressed with the `incomplete` outcome.

### Visible {#visible}

Content perceivable through sight.

Content is considered _visible_ if making it fully transparent would result in a difference in the pixels rendered for any part of the document that is currently within the viewport or can be brought into the viewport via scrolling.

[Content is defined in WCAG](https://www.w3.org/TR/WCAG21/#dfn-content).

For more details, see [examples of visible](https://act-rules.github.io/pages/examples/visible/).

{% include_relative _implementation-proposed.md %}

## Changelog

This is the first version of this ACT rule.

[attribute value]: #attribute-value 'Definition of Attribute Value'
[boolean attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes 'HTML Specification of Boolean Attribute'
[comma separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#comma-separated-tokens 'HTML Specification of Comma Separated Tokens'
[enumerated attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute 'HTML Specification of Enumerated Attribute'
[focusable]: #focusable 'Definition of focusable'
[html aam]: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings 'Specification of HTML attributes value mapping to ARIA states and properties'
[idl attribute]: https://heycam.github.io/webidl/#idl-attributes "Definition of Web IDL Attribute (Editor's Draft)"
[numbers]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#numbers 'HTML Specification of Number Parsing'
[reflect]: https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes 'HTML specification of Reflecting Content Attributes in IDL Attributes'
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[space separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens 'HTML Specification of Space Separated Tokens'
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[wai-aria specification]: https://www.w3.org/TR/wai-aria-1.1/#propcharacteristic_value 'WAI-ARIA Specification of States and Properties Value'
