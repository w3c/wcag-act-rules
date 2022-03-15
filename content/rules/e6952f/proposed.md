---
title: "Attribute is not duplicated"
permalink: /standards-guidelines/act/rules/e6952f/proposed/
ref: /standards-guidelines/act/rules/e6952f/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/e6952f/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> e6952f</p>
  <p><strong>Date:</strong> Updated 15 March 2022</p>
  <p><strong>Authors:</strong> <a href="https://github.com/EmmaJP">Emma Pratt Richens</a>, <a href="https://github.com/wilcofiers">Wilco Fiers</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: e6952f
  name: "Attribute is not duplicated"
  rule_type: atomic
  description: |
    This rule checks that HTML and SVG starting tags do not contain duplicated attributes.
  last_modified: 15 March 2022
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
  <li><details>
    <summary><span>4.1.1 Parsing (Level A)</span></summary>
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
  <li><details>
    <summary><span>H94: Ensuring that elements do not contain duplicate attributes</span></summary>
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

- Source code (no link available)

## Test Cases

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" href="/content-assets/wcag-act-rules/testcases/e6952f/ebd0080bacb8debc7ad069072240657df38c3e2c.html">Open in a new tab</a>

This `img` element contains no duplicated attributes.

```html
<img src="/test-assets/shared/w3c-logo.png" alt="W3C logo" />
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" href="/content-assets/wcag-act-rules/testcases/e6952f/3f5db5b7f88b5c55969fabecd926bb8f85624ce2.html">Open in a new tab</a>

This `br` element contains no attributes, so there is no duplicated attribute.

```html
<br />
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" href="/content-assets/wcag-act-rules/testcases/e6952f/978d5521aa80f7f43f24d509fca705e64b4e9bd2.html">Open in a new tab</a>

This `input` element contains three different attributes, two of them being empty.

```html
<input type="checkbox" disabled readonly />
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" href="/content-assets/wcag-act-rules/testcases/e6952f/38ff8b79c35b965c29c704745794f7ab72dab3e6.html">Open in a new tab</a>

This `SVG` element contains no attributes.

```html
<svg>
	<line x1="0" y1="0" x2="200" y2="200" style="stroke-width:2" />
</svg>
```

#### Passed Example 5

<a class="example-link" title="Passed Example 5" href="/content-assets/wcag-act-rules/testcases/e6952f/eb695b7a176b9d8dc9d8100bbea326dda3b8ee06.html">Open in a new tab</a>

This `script` element contains duplicated attributes, but they are ignored because they are placed within the `script` tag.

```html
<script>
	var foo = '<img src="/test-assets/shared/w3c-logo.png" alt="" alt="W3C logo" />'
</script>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" href="/content-assets/wcag-act-rules/testcases/e6952f/4af6d805f5945f5e7888da84b8b576ce825f5e3b.html">Open in a new tab</a>

This `img` element contains a duplicated `alt` attribute.

```html
<img src="/test-assets/shared/w3c-logo.png" alt="" alt="W3C logo" />
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" href="/content-assets/wcag-act-rules/testcases/e6952f/9cd3b83c1fdab7da7a471837d79b087948ead61e.html">Open in a new tab</a>

This `input` element contains a duplicate `disabled` attribute.

```html
<input type="checkbox" disabled="disabled" disabled readonly />
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" href="/content-assets/wcag-act-rules/testcases/e6952f/41db73e68271070cff56b2d1da42bb45e5cb4722.html">Open in a new tab</a>

This `line` element contains duplicate `x1` and duplicate `y1` attributes.

```html
<svg>
	<line x1="0" y1="0" x1="200" y1="200" style="stroke-width:2" />
</svg>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" href="/content-assets/wcag-act-rules/testcases/e6952f/d6c265ec8adf5af533f4cfe4b3c09416293c7b7a.xml">Open in a new tab</a>

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

<a class="example-link" title="Inapplicable Example 2" href="/content-assets/wcag-act-rules/testcases/e6952f/af5a9930957786829ada7dfc1be62df3e41b28e5.js">Open in a new tab</a>

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

{% include_relative _implementation-proposed.md %}

## Changelog

This is the first version of this ACT rule.


