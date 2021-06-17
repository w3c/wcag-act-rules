---
title: "Attribute is not duplicated"
permalink: /standards-guidelines/act/rules/attr-not-duplicated-e6952f/
ref: /standards-guidelines/act/rules/attr-not-duplicated-e6952f/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/attr-not-duplicated-e6952f.md
# footer: > # Text in footer in HTML
#   <p> This is the text in the footer </p>
---

{% include_relative _proposed-banner.html %}

Rule Type:
:   atomic

Rule ID:
:   e6952f

Last Modified:
:   June 3, 2021

Accessibility Requirements Mapping:
:   [4.1.1 Parsing (Level A)](https://www.w3.org/TR/WCAG21/#parsing)
    - **Required for conformance** to WCAG 2.0 and later on level A and higher
    - [Outcome](#outcome) mapping:
        - Any `failed` outcomes: success criterion is not satisfied
        - All `passed` outcomes: success criterion needs further testing
        - An `inapplicable` outcome: success criterion needs further testing
:   [H94: Ensuring that elements do not contain duplicate attributes](https://www.w3.org/WAI/WCAG21/Techniques/html/H94)
    - Not required to conformance to any W3C accessibility recommendation.
    - [Outcome](#outcome) mapping:
        - Any `failed` outcomes: technique is not satisfied
        - All `passed` outcomes: technique is satisfied
        - An `inapplicable` outcome: technique is satisfied

Input Aspects:
:   Source code

## Description

This rule checks that HTML and SVG starting tags do not contain duplicated attributes.

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

- [H94: Ensuring that elements do not contain duplicate attributes](https://www.w3.org/WAI/WCAG21/Techniques/html/H94)

## Test Cases

### Passed

#### Passed Example 1

No attributes are duplicated.

```html
<img src="/test-assets/shared/w3c-logo.png" alt="W3C logo" />
```

#### Passed Example 2

No attributes, therefore no attributes are duplicated.

```html
<br />
```

#### Passed Example 3

Empty attributes, no attributes are duplicated.

```html
<input type="checkbox" disabled readonly />
```

#### Passed Example 4

SVG, no attributes are duplicated.

```html
<svg>
	<line x1="0" y1="0" x2="200" y2="200" style="stroke-width:2" />
</svg>
```

#### Passed Example 5

Script, no attributes are duplicated. HTML or SVG code within a script should be ignored.

```html
<script>
	var foo = '<img src="/test-assets/shared/w3c-logo.png" alt="" alt="W3C logo" />'
</script>
```

### Failed

#### Failed Example 1

At least one attribute is duplicated.

```html
<img src="/test-assets/shared/w3c-logo.png" alt="" alt="W3C logo" />
```

#### Failed Example 2

Empty attributes, at least one attribute is duplicated.

```html
<input type="checkbox" disabled="disabled" disabled readonly />
```

#### Failed Example 3

SVG, at least one attribute is duplicated.

```html
<svg>
	<line x1="0" y1="0" x1="200" y1="200" style="stroke-width:2" />
</svg>
```

### Inapplicable

#### Inapplicable Example 1

Code is XML, and not HTML or SVG.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rdf:RDF
  xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
  xmlns:earl="http://www.w3.org/ns/earl#">
  <earl:TestResult rdf:about="#result"></earl:TestResult>
</rdf:RDF>
```

#### Inapplicable Example 2

Code is JavaScript, and not HTML or SVG.

```js
var foo = '<img src="/test-assets/shared/w3c-logo.png" alt="" alt="W3C logo" />'
```

## Glossary

{% include_relative glossary/outcome.md %}

## Acknowledgements

This rule was written in the [ACT Rules community group](https://w3.org/community/act-r/), 
with the support of the EU-funded [WAI-Tools Project](https://www.w3.org/WAI/about/projects/wai-tools/).

### Authors

- [Emma Pratt Richens](https://github.com/EmmaJP)
- [Wilco Fiers](https://github.com/wilcofiers)

## Changelog

This is the first version of this ACT rule.

