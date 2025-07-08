---
title: "ARIA state or property has valid value"
permalink: /standards-guidelines/act/rules/6a7281/proposed/
ref: /standards-guidelines/act/rules/6a7281/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/6a7281/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> 6a7281</p>
  <p><strong>Date:</strong> Updated 8 July 2025</p>
  <p><strong>Authors:</strong> <a href="https://github.com/annethyme">Anne Thyme Nørregaard</a>, <a href="https://github.com/wilcofiers">Wilco Fiers</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: 6a7281
  name: "ARIA state or property has valid value"
  rule_type: atomic
  original_file: aria-state-or-property-valid-value-6a7281.md
  description: |
    This rule checks that each ARIA state or property has a valid value type.
  last_modified: 8 July 2025
---

## Applicability

This rule applies to any [WAI-ARIA state or property][] that has a non-empty ("") [attribute value][], and that is specified on an [HTML or SVG element][].

## Expectation

Each test target has an [attribute value][] that is valid according to its [WAI-ARIA value type][value type].

**Exception**: For value types `ID Reference` and `ID Reference List` no ID referenced elements are required.

## Background

Using invalid ARIA attribute values is often the result of a typo or other developer error. These attributes are then either ignored, or a default value is assumed by browsers and assistive technologies. This often means that a state or property which should exist is missing or has an unexpected value. If the default value for invalid attribute values happens to match the author's intention for the value, there will not be an accessibility issue.

This rule does not require the target of an `ID Reference` to exist. This is because referencing an element that does not exist, and not having the reference at all has the same end result. A common use case for using `ID Reference` for a non-existing ID is to use a static `aria-errormessage` on an `input` element, and to only insert the element with the error message if there is an actual error. There are some cases in which ID references are required. These are tested in a separate rule.

### Assumptions

There are no assumptions.

### Accessibility Support

Some user agents treat the value of `aria-*` attribute as case-sensitive (even when these are not ID) while some treat them as case-insensitive.

### Related rules

- [ARIA state or property is permitted](https://www.w3.org/WAI/standards-guidelines/act/rules/5c01ea/)
- [ARIA required ID references exist](https://www.w3.org/WAI/standards-guidelines/act/rules/in6db8/)

### Bibliography

- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [ARIA5: Using WAI-ARIA state and property attributes to expose the state of a user interface component](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA5)
- [WAI-ARIA 1.2, Definitions of States and Properties](https://www.w3.org/TR/wai-aria-1.2/#state_prop_def)
- [WAI-ARIA 1.2, Characteristics of States and Properties, Value](https://www.w3.org/TR/wai-aria-1.2/#propcharacteristic_value)
- [Uniform Resource Identifier (URI): Generic Syntax (RFC 3986)](https://www.ietf.org/rfc/rfc3986.txt)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>ARIA 1.2, 6.2.4 Value (Characteristics of States and Properties)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/wai-aria-1.2/#propcharacteristic_value">Learn more about ARIA 1.2, 6.2.4 Value (Characteristics of States and Properties)</a></li>
      <li><strong>Required for conformance</strong> to WAI-ARIA 1.2 author requirements.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: WAI-ARIA requirement is not satisfied</li>
        <li>All <code>passed</code> outcomes: WAI-ARIA requirement is satisfied</li>
        <li>An <code>inapplicable</code> outcome: WAI-ARIA requirement is satisfied</li>
      </ul></li>
    </ul>
  </details></li>
</ul>

### Secondary Requirements

This rule is related to the following accessibility requirements, but was 
not designed to test this requirements directly. These 
[secondary requirements](https://w3c.github.io/wcag-act/act-rules-format.html#secondary-requirements)
can either be stricter than the rule requires, or may be satisfied in ways 
not tested by the rule:

- [1.3.1 Info and Relationships (Level A)](https://www.w3.org/TR/WCAG22/#info-and-relationships): This success criterion is **less strict** than this rule. This is because the rule does not ignore irrelevant ARIA properties. Some of the failed examples satisfy this success criterion.
- [4.1.2 Name, Role, Value (Level A)](https://www.w3.org/TR/WCAG22/#name-role-value): This success criterion is **less strict** than this rule. This is because the rule does not ignore irrelevant ARIA properties. Some of the failed examples satisfy this success criterion.

## Input Aspects

The following aspects are required in using this rule.

- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)
- [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)

## Test Cases

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/6a7281/e970b77c1137e5fd4627f70663da4d1fcda36b23.html">Open in a new tab</a>

The `aria-label` [attribute value][] of `Family name` is allowed for the `string` [value type][].

```html
<div role="textbox" aria-label="Family name"></div>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/6a7281/db10f30be20aebf661f0b81b2c0cfc698b1453eb.html">Open in a new tab</a>

The `aria-required` [attribute value][] of `true` is allowed for the `true/false` [value type][].

```html
<div role="textbox" aria-required="true" aria-label="Family name"></div>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/6a7281/766a5eb6a54c5b83a882a0d78731d808480a1b3e.html">Open in a new tab</a>

The `aria-expanded` [attribute value][] of `undefined` is allowed for the `true/false/undefined` [value type][].

```html
<div role="button" aria-expanded="undefined">A button</div>
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/6a7281/38b0160bfc6c056fa0d02affbc02e49dce284467.html">Open in a new tab</a>

The `aria-pressed` [attribute value][] of `mixed` is allowed for the `tristate` [value type][].

```html
<div role="button" aria-pressed="mixed">Partially pressed button</div>
```

#### Passed Example 5

<a class="example-link" title="Passed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/6a7281/e4b47e094d44a9f3b5b3fd5c157f3ef6679bede0.html">Open in a new tab</a>

The `aria-errormessage` [attribute value][] is an `ID Reference` [value type][]. The presence of an element with a matching ID is not required by this rule.

```html
<div role="textbox" aria-errormessage="my-error" aria-label="A textbox"></div>
```

#### Passed Example 6

<a class="example-link" title="Passed Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/6a7281/c27e7f509d546fa6aff12ca7aeace662d3fb1c7b.html">Open in a new tab</a>

The `aria-owns` [attribute value][] is a valid `ID Reference List` [value type][]. Both tokens reference elements that exist in the same [DOM tree][].

```html
<h1>Shopping list</h1>
<div role="list" aria-owns="item1 item2"></div>
<div id="item1">Apples</div>
<div id="item2">Bananas</div>
```

#### Passed Example 7

<a class="example-link" title="Passed Example 7" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/6a7281/f78fb0548e68839232441636b6d8489ad17c50b5.html">Open in a new tab</a>

The `aria-rowindex` [attribute value][] of 2 is a valid `integer` [value type][].

```html
<div role="gridcell" aria-rowindex="2">Fred</div>
```

#### Passed Example 8

<a class="example-link" title="Passed Example 8" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/6a7281/83f5e9df90e96c1af508ad8b4e2cda78c0dae7c4.html">Open in a new tab</a>

The `aria-valuemin`, `aria-valuemax` and `aria-valuenow` [attribute values][attribute value] are valid for a `number` [value type][].

```html
<div role="spinbutton" aria-valuemin="1.0" aria-valuemax="2.0" aria-valuenow="1.5" aria-label="Select a value"></div>
```

#### Passed Example 9

<a class="example-link" title="Passed Example 9" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/6a7281/0496ff9d59d514f97c8739004b2b941dd7ca97bf.html">Open in a new tab</a>

The `aria-current` [attribute value][] of `page` is a valid `token` [value type][].

```html
<a href="/" aria-current="page">Home</a>
```

#### Passed Example 10

<a class="example-link" title="Passed Example 10" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/6a7281/ed053b32aa2b4453ddc225e45f7f1931f62c7f49.html">Open in a new tab</a>

The `aria-relevant` [attribute value][] has a `text` and `removals` tokens. Both are valid tokens for a `aria-relevant` `token list` [value type][].

```html
<div role="alert" aria-relevant="text removals"></div>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/6a7281/ce27fcdd85fbf37a953727cdc454f3e504041a31.html">Open in a new tab</a>

The `aria-required` [attribute value][] of `undefined` is not valid for a `true/false` [value type][].

```html
<div role="textbox" aria-required="undefined" aria-label="A required textbox"></div>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/6a7281/1f586827cecc5b1b4d9f60dcaba1e77f4a90c54a.html">Open in a new tab</a>

The `aria-expanded` [attribute value][] of `collapsed` is not valid for a `true/false/undefined` [value type][].

```html
<div role="button" aria-expanded="collapsed">A button</div>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/6a7281/0959137934bd17ea8c95b86120b1c7331e4facc2.html">Open in a new tab</a>

The `aria-pressed` [attribute value][] of `horizontal` is not valid for a `tristate` [value type][].

```html
<div role="button" aria-pressed="horizontal">An other button</div>
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/6a7281/e1bd70b33e2d53e3b9bc105a5cad59a76b4c54d5.html">Open in a new tab</a>

The `aria-rowindex` [attribute value][] of `2.5` is not valid for an `integer` [value type][] because it is a decimal number.

```html
<div role="gridcell" aria-rowindex="2.5">Fred</div>
```

#### Failed Example 5

<a class="example-link" title="Failed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/6a7281/4078701ed7982e75316b51adb59b6d05c1583aa5.html">Open in a new tab</a>

The `aria-valuemin`, `aria-valuemax` and `aria-valuenow` [attribute values][attribute value] are `strings`. These should all be of the `number` [value type][] instead.

```html
<div role="spinbutton" aria-valuemin="one" aria-valuemax="three" aria-valuenow="two" aria-label="Choose a value"></div>
```

#### Failed Example 6

<a class="example-link" title="Failed Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/6a7281/88ff0942922e48b686413cf12cd0fd3510a8b29f.html">Open in a new tab</a>

The `aria-live` [attribute value][] of `page` is not a valid `token`, because `page` is not a token for `aria-live`.

```html
<div role="main" aria-live="page"></div>
```

#### Failed Example 7

<a class="example-link" title="Failed Example 7" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/6a7281/b78f507edd1866cc5b1a7fae8b530da964b470fb.html">Open in a new tab</a>

The `aria-relevant` [attribute value][] has the two tokens `text` and `always`. The `always` token is not valid for the `aria-relevant` `token list`. In order to be a valid value, all tokens must be valid.

```html
<div role="alert" aria-relevant="text always"></div>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/6a7281/9d80b71ad39b258fb75db804867f189d76ecdab8.html">Open in a new tab</a>

Element does not have any ARIA states or properties

```html
<div>Some Content</div>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/6a7281/90428c9c8cc74d6a3047775637078366994a8e88.html">Open in a new tab</a>

Element has ARIA role, but no ARIA states or properties

```html
<div role="button">Some Content</div>
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/6a7281/0b90f166412e03fa01b460aa1c8e68f722a47434.html">Open in a new tab</a>

The `aria-live` attribute does not have a value.

```html
<div role="alert" aria-live>Remember to be awesome!</div>
```

#### Inapplicable Example 4

<a class="example-link" title="Inapplicable Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/6a7281/d5d5467bced8e0eb2174ee42184258634c03421b.xml">Open in a new tab</a>

The `aria-hidden` attribute is not on an [HTML or SVG element][].

```xml
<math aria-hidden="false"></math>
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

[attribute value]: #attribute-value
[boolean attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes 'HTML Specification of Boolean Attribute'
[comma separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#comma-separated-tokens 'HTML Specification of Comma Separated Tokens'
[earl10-schema]: https://www.w3.org/TR/act-rules-format-1.1/#biblio-earl10-schema
[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[enumerated attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute 'HTML Specification of Enumerated Attribute'
[html aam]: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings 'Specification of HTML attributes value mapping to ARIA states and properties'
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[html or svg element]: #namespaced-element
[idl attribute]: https://heycam.github.io/webidl/#idl-attributes "Definition of Web IDL Attribute (Editor's Draft)"
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
[numbers]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#numbers 'HTML Specification of Number Parsing'
[outcome property]: https://www.w3.org/TR/EARL10-Schema/#outcome
[reflect]: https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes 'HTML specification of Reflecting Content Attributes in IDL Attributes'
[space separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens 'HTML Specification of Space Separated Tokens'
[test subject]: https://www.w3.org/TR/act-rules-format-1.1/#test-subject
[test target]: https://www.w3.org/TR/act-rules-format/#test-target
[value type]: https://www.w3.org/TR/wai-aria-1.2/#propcharacteristic_value
[wai-aria specification]: https://www.w3.org/TR/wai-aria-1.2/#propcharacteristic_value 'WAI-ARIA Specification of States and Properties Value'
[wai-aria state or property]: https://www.w3.org/TR/wai-aria-1.2/#state_prop_def
