---
title: "Attribute is not duplicated"
permalink: /standards-guidelines/act/rules/attr-not-duplicated-e6952f/
ref: /standards-guidelines/act/rules/attr-not-duplicated-e6952f/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/attr-not-duplicated-e6952f.md
footer: |
  <p><strong>Date:</strong> Updated 19 January 2022</p>
  <p><strong>Rule Identifier:</strong> e6952f</p>
  <p><strong>Authors:</strong> <a href="https://github.com/EmmaJP">Emma Pratt Richens</a>, <a href="https://github.com/wilcofiers">Wilco Fiers</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules community group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>.</p>
proposed: true
rule_meta:
  id: e6952f
  name: "Attribute is not duplicated"
  rule_type: atomic
  description: |
    This rule checks that HTML and SVG starting tags do not contain duplicated attributes.
  last_modified: 19 January 2022
  scs_tested:
    - handle: Parsing
      num: 4.1.1
      level: A
---

## Applicability

This rule applies to any [starting tag](https://www.w3.org/TR/html5/syntax.html#start-tags) in an HTML or SVG document.

**Note:** This rule cannot be tested on the DOM Tree because the browser removes duplicates of any attribute that is already present on an element.

## Expectation

For each test target, there are no duplicated [attributes](https://www.w3.org/TR/html5/syntax.html#elements-attributes).

## Assumptions

_There are currently no assumptions._

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

### Bibliography

- [H94: Ensuring that elements do not contain duplicate attributes](https://www.w3.org/WAI/WCAG21/Techniques/html/H94)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details><summary>4.1.1 Parsing (Level A)</summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#parsing">Learn more about 4.1.1 Parsing</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level A and higher.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details><summary>H94: Ensuring that elements do not contain duplicate attributes</summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H94">Learn more about technique H94</a></li>
      <li>Not required for conformance to any W3C accessibility recommendation.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: technique is not satisfied</li>
        <li>All <code>passed</code> outcomes: technique is satisfied</li>
        <li>An <code>inapplicable</code> outcome: technique is satisfied</li>
      </ul></li>
    </ul>
  </details></li>
</ul>

## Input Aspects

The following aspects are required in using this rule.

- Source code

## Test Cases

### Passed

#### Passed Example 1

This `img` element contains no duplicated attributes.

```html
<img src="/test-assets/shared/w3c-logo.png" alt="W3C logo" />
```

#### Passed Example 2

This `br` element contains no attributes, so there is no duplicated attribute.

```html
<br />
```

#### Passed Example 3

This `input` element contains three different attributes, two of them being empty.

```html
<input type="checkbox" disabled readonly />
```

#### Passed Example 4

This `SVG` element contains no attributes.

```html
<svg>
	<line x1="0" y1="0" x2="200" y2="200" style="stroke-width:2" />
</svg>
```

#### Passed Example 5

This `script` element contains duplicated attributes, but they are ignored because they are placed within the `script` tag.

```html
<script>
	var foo = '<img src="/test-assets/shared/w3c-logo.png" alt="" alt="W3C logo" />'
</script>
```

### Failed

#### Failed Example 1

This `img` element contains a duplicated `alt` attribute.

```html
<img src="/test-assets/shared/w3c-logo.png" alt="" alt="W3C logo" />
```

#### Failed Example 2

This `input` element contains a duplicate `disabled` attribute.

```html
<input type="checkbox" disabled="disabled" disabled readonly />
```

#### Failed Example 3

This `line` element contains duplicate `x1` and duplicate `y1` attributes.

```html
<svg>
	<line x1="0" y1="0" x1="200" y1="200" style="stroke-width:2" />
</svg>
```

### Inapplicable

#### Inapplicable Example 1

This code is XML, not HTML or SVG.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rdf:RDF
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:earl="http://www.w3.org/ns/earl#">
  <earl:TestResult rdf:about="#result"></earl:TestResult>
</rdf:RDF>
```

#### Inapplicable Example 2

This code is JavaScript, not HTML or SVG.

```js
var foo = '<img src="/test-assets/shared/w3c-logo.png" alt="W3C logo" />'
```

## Glossary

### Outcome {#outcome}

An _outcome_ is a conclusion that comes from evaluating an ACT Rule on a [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) or one of its constituent [test target](https://www.w3.org/TR/act-rules-format/#test-target). An outcome can be one of the three following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) meets all expectations
- **Failed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) does not meet all expectations

**Note:** A rule has one `passed` or `failed` outcome for every [test target](https://www.w3.org/TR/act-rules-format/#test-target). When there are no test targets the rule has one `inapplicable` outcome. This means that each [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) will have one or more outcomes.

**Note:** Implementations using the [EARL10-Schema](https://www.w3.org/TR/EARL10-Schema/) can express the outcome with the [outcome property](https://www.w3.org/TR/EARL10-Schema/#outcome). In addition to `passed`, `failed` and `inapplicable`, EARL 1.0 also defined an `incomplete` outcome. While this cannot be the outcome of an ACT Rule when applied in its entirety, it often happens that rules are only partially evaluated. For example, when applicability was automated, but the expectations have to be evaluated manually. Such "interim" results can be expressed with the `incomplete` outcome.

{% include_relative implementations/e6952f.md %}

## Changelog

This is the first version of this ACT rule.


