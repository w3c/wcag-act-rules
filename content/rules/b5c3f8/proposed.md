---
title: "HTML page has lang attribute"
permalink: /standards-guidelines/act/rules/b5c3f8/proposed/
ref: /standards-guidelines/act/rules/b5c3f8/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/b5c3f8/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> b5c3f8</p>
  <p><strong>Date:</strong> Updated 2 December 2024</p>
  <p><strong>Authors:</strong> <a href="https://github.com/jkodu">Jey Nandakumar</a>. Previous Authors: <a href="https://github.com/annika-FTB">Annika Nietzio</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: b5c3f8
  name: "HTML page has lang attribute"
  rule_type: atomic
  original_file: html-page-lang-b5c3f8.md
  description: |
    This rule checks that an HTML page has a non-empty `lang` attribute.
  last_modified: 2 December 2024
  scs_tested:
    - handle: Language of Page
      num: 3.1.1
      level: A
---

## Applicability

This rule applies to any [document element](https://dom.spec.whatwg.org/#document-element) if it is an `html` element for which all the following are true:

- is in a [top-level browsing context](https://html.spec.whatwg.org/#top-level-browsing-context); and
- has a [node document](https://dom.spec.whatwg.org/#concept-node-document) with a [content type](https://dom.spec.whatwg.org/#concept-document-content-type) of `text/html`.

**Note:** `html` elements within `iframe` and `object` elements are not applicable as `iframe` and `object` elements create [nested browsing contexts](https://html.spec.whatwg.org/#nested-browsing-context). However, as these elements are meant to provide a layer of isolation, the declared language of their [parent browsing context](https://html.spec.whatwg.org/#parent-browsing-context) will likely not be inherited, making it possible for empty `lang` attributes in [nested browsing contexts](https://html.spec.whatwg.org/#nested-browsing-context) to also cause accessibility issues.

## Expectation

Each test target has a `lang` [attribute value][] that is neither empty (`""`) nor only [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace).

## Background

### Assumptions

The language of the page can be set by other methods than the `lang` attribute, for example using HTTP headers or the `meta` element. These methods are not supported by all assistive technologies. This rule assumes that these other methods are insufficient to satisfying [Success Criterion 3.1.1: Language of Page](https://www.w3.org/TR/WCAG22/#language-of-page).

### Accessibility Support

There are no accessibility support issues known.

### Related rules

- [HTML page `lang` attribute has valid language tag](https://www.w3.org/WAI/standards-guidelines/act/rules/bf051a/)
- [HTML page language subtag matches default language](https://www.w3.org/WAI/standards-guidelines/act/rules/ucwvc8/)

### Bibliography

- [Understanding Success Criterion 3.1.1: Language of Page](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html)
- [H57: Using language attributes on the html element](https://www.w3.org/WAI/WCAG22/Techniques/html/H57)
- [RFC 5646: Tags for Identifying Languages](https://www.rfc-editor.org/rfc/rfc5646.html)
- [The `lang` and `xml:lang` attributes](https://html.spec.whatwg.org/multipage/dom.html#the-lang-and-xml:lang-attributes)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>3.1.1 Language of Page (Level A)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG22/#language-of-page">Learn more about 3.1.1 Language of Page</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level A and higher.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>H57: Using the language attribute on the HTML element</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG22/Techniques/html/H57">Learn more about technique H57</a></li>
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

- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)

## Test Cases

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b5c3f8/0fac26928e2bf6b7db6c7f46a1e0ab50aaa8a7c1.html">Open in a new tab</a>

This `html` element has a `lang` attribute with a non-empty (`""`) value.

```html
<html lang="en">
	<body>
		The quick brown fox jumps over the lazy dog.
	</body>
</html>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b5c3f8/473352935acf2463b14dbd8e38073e913eeb5c08.html">Open in a new tab</a>

This `html` element does not have a `lang` attribute.

```html
<html>
	<body>
		The quick brown fox jumps over the lazy dog.
	</body>
</html>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b5c3f8/98681b2a7949e49b2da1b353f70e688528fe7ddc.html">Open in a new tab</a>

This `html` element has a `lang` attribute with an empty (`""`) value.

```html
<html lang="">
	<body>
		The quick brown fox jumps over the lazy dog.
	</body>
</html>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b5c3f8/4ea0280617a1b71dcc327356484f8767919b0f40.html">Open in a new tab</a>

This `html` element has a `lang` attribute whose value is only [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace).

```html
<html lang=" ">
	<body>
		The quick brown fox jumps over the lazy dog.
	</body>
</html>
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b5c3f8/4f94c3e26f43701d91db403fe26cd8894bdc8ccf.html">Open in a new tab</a>

This `html` element has no `lang` attribute, only a `xml:lang` attribute.

```html
<html xml:lang="en">
	<body>
		The quick brown fox jumps over the lazy dog.
	</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b5c3f8/b584aa8aeb33814a0ecb63fd9ed4d97f2211f837.svg">Open in a new tab</a>

This rule does not apply to an `svg` element.

```svg
<svg xmlns="http://www.w3.org/2000/svg" lang="en">
    <text>
        The quick brown fox jumps over the lazy dog.
    </text>
</svg>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b5c3f8/58847c387d3b2cfa7e57c6ed613a8f31569cfd30.xml">Open in a new tab</a>

This rule does not apply to a `math` element.

```xml
<math lang="en">
    The quick brown fox jumps over the lazy dog.
</math>
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

### Outcome {#outcome}

A conclusion that comes from evaluating an ACT Rule on a [test subject][] or one of its constituent test target. An outcome can be one of the five following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target][] meets all expectations
- **Failed:** A [test target][] does not meet all expectations
- **cantTell:** Whether the rule is applicable, or not all expectations were met could not be fully determined by the tester.
- **Untested**: The tester has not attempted to evaluate the test subject.

**Note**: A rule has one `passed` or `failed` outcome for every [test target][]. When a tester evaluates a test target it can also be reported as `cantTell` if the rule cannot be tested in its entirety. For example, when applicability was automated, but the expectations have to be evaluated manually.

When there are no test targets the rule has one `inapplicable` outcome. If the tester is unable to determine whether there are test targets there will be one `cantTell` outcome. And when no evaluation has occurred the test target has one untested outcome. This means that each [test subject][] always has one or more outcomes.

Outcomes used in ACT Rules can be expressed using the [outcome property][] of the [[EARL10-Schema]][].

[attribute value]: #attribute-value
[boolean attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes 'HTML Specification of Boolean Attribute'
[comma separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#comma-separated-tokens 'HTML Specification of Comma Separated Tokens'
[earl10-schema]: https://www.w3.org/TR/act-rules-format-1.1/#biblio-earl10-schema
[enumerated attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute 'HTML Specification of Enumerated Attribute'
[html aam]: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings 'Specification of HTML attributes value mapping to ARIA states and properties'
[idl attribute]: https://heycam.github.io/webidl/#idl-attributes "Definition of Web IDL Attribute (Editor's Draft)"
[numbers]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#numbers 'HTML Specification of Number Parsing'
[outcome property]: https://www.w3.org/TR/EARL10-Schema/#outcome
[reflect]: https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes 'HTML specification of Reflecting Content Attributes in IDL Attributes'
[space separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens 'HTML Specification of Space Separated Tokens'
[test subject]: https://www.w3.org/TR/act-rules-format-1.1/#test-subject
[test target]: https://www.w3.org/TR/act-rules-format/#test-target
[wai-aria specification]: https://www.w3.org/TR/wai-aria-1.2/#propcharacteristic_value 'WAI-ARIA Specification of States and Properties Value'
