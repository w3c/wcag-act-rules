---
title: "HTML page has title"
permalink: /standards-guidelines/act/rules/html-page-has-title-2779a5/
ref: /standards-guidelines/act/rules/html-page-has-title-2779a5/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/html-page-has-title-2779a5.md
# footer: > # Text in footer in HTML
#   <p> This is the text in the footer </p>
---

Rule Type:
:   atomic

Rule ID:
:   2779a5

Last modified:
:   Sep 25, 2019

Accessibility Requirements Mapping
:   [2.4.2 Page Titled (Level A)](https://www.w3.org/TR/WCAG21/#page-titled)
    - **Required for conformance** to WCAG 2.0 and above on level A and above
    - [Outcome](#outcome) mapping:
      - Any `failed` outcomes: success criterion is not satisfied
      - All `passed` outcomes: success criterion needs further testing
      - An `inapplicable` outcome: success criterion needs further testing

Input Aspects
: [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)

## Description

This rule checks that an HTML page has a title.

## Applicability

The root element of the [web page](https://www.w3.org/TR/WCAG21/#dfn-web-page-s), if it is an `html` element.

**Note**: Documents embedded into other documents, such as through `iframe` or `object` elements are not applicable because they are not web pages according to the definition in WCAG.

## Expectation 1

Each target element has at least one [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) that is an HTML `title` element.

**Note**: The `title` element exists in other namespaces such as SVG. These are not HTML title elements and should be ignored for this rule.

**Note**: The [HTML 5.2 specification](https://www.w3.org/TR/html52/document-metadata.html#the-title-element) requires that a document only has one title element, and that it is a child of the head element of a document. However, HTML 5.2 also describes what should happen in case of multiple titles, and titles outside the head element. Because of this, neither of these validation issues causes a conformance problem for WCAG.

## Expectation 2

For each target element, the first HTML `title` element that is a [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) of the [document element](https://dom.spec.whatwg.org/#document-element) has [children](https://dom.spec.whatwg.org/#concept-tree-child) that are [text nodes](https://dom.spec.whatwg.org/#text) that are not only [whitespace](#whitespace).

## Assumptions

*There are currently no assumptions*

## Accessibility Support

*There are no major accessibility support issues known for this rule.*

## Background

- [Understanding Success Criterion 2.4.2: Page Titled](https://www.w3.org/WAI/WCAG21/Understanding/page-titled)
- [G88: Providing descriptive titles for Web pages](https://www.w3.org/WAI/WCAG21/Techniques/general/G88)
- [H25: Providing a title using the title element](https://www.w3.org/WAI/WCAG21/Techniques/html/H25)

## Test Cases

### Passed

#### Passed Example 1

This page has a `title` with content.

```html
<html>
<title>This page has a title</title>
</html>
```

#### Passed Example 2

This page `title` element is for the entire page, including content in the `iframe` without its own `title`.

```html
<html>
<title>This page gives a title to an iframe</title>
<iframe src="/test-assets/sc2-4-2-title-page-without-title.html"></iframe>
</html>
```

#### Passed Example 3

This page has two `title` elements.

```html
<html>
<head>
  <title>Title of the page.</title>
</head>
<body>
  <title>Title of the page.</title>
</body>
</html>
```

#### Passed Example 4

The `title` is in the `body`.

```html
<html>
<body>
  <title>Title of the page.</title>
</body>
</html>
```

#### Passed Example 5

The first `title` element has content.

```html
<html>
<head>
  <title>Title of the page.</title>
</head>
<body>
  <title></title>
</body>
</html>
```

#### Passed Example 6

The `title` only contains characters that are not letters or numbers.

```html
<html>
<title>#$@&%*!</title>
</html>
```

### Failed

#### Failed Example 1

The page has no `title`.

```html
<html>
<h1>this page has no title</h1>
</html>
```

#### Failed Example 2

The `title` element is empty.

```html
<html>
<title></title>
</html>
```

#### Failed Example 3

The page has no `title`.

```html
<html>
<iframe src="/test-assets/sc2-4-2-title-page-with-title.html"></iframe>
</html>
```

#### Failed Example 4

The first `title` element is empty.

```html
<html>
<head>
  <title></title>
</head>
<body>
  <title>Title of the page.</title>
</body>
</html>
```

#### Failed Example 5

The `title` only contains a separator character.

```html
<html>
<title> </title>
</html>
```

### Inapplicable

#### Inapplicable Example 1

This rule is not applicable to `svg` elements.

```xml
<svg xmlns="http://www.w3.org/2000/svg">
  <title>This is an SVG</title>
</svg>
```

## Glossary

### Outcome

A conclusion that comes from evaluating an ACT Rule on a [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) or one of its constituent [test target](https://www.w3.org/TR/act-rules-format/#test-target). An outcome can be one of the three following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) meets all expectations
- **Failed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) does not meet all expectations

**Note:** A rule has one `passed` or `failed` outcome for every [test target](https://www.w3.org/TR/act-rules-format/#test-target). When there are no test targets the rule has one inapplicable outcome. This means that each [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) will have one or more outcomes.

**Note:** Implementers using the [EARL10-Schema](https://www.w3.org/TR/EARL10-Schema/) can express the outcome with the [outcome property](https://www.w3.org/TR/EARL10-Schema/#outcome). In addition to `passed`, `failed` and `inapplicable`, EARL 1.0 also defined an `incomplete` outcome. While this cannot be the outcome of an ACT Rule when applied in its entirety, it often happens that rules are only partially evaluated. For example, when applicability was automated, but the expectations have to be evaluated manually. Such "interim" results can be expressed with the incomplete outcome.

### Whitespace

Characters that have the Unicode "White_Space" property in the [Unicode properties list](https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt).

This includes:

- all characters in the [Unicode Separator categories](https://www.unicode.org/versions/Unicode11.0.0/ch04.pdf#G134153), and
- the following characters in the [Other, Control](https://www.unicode.org/versions/Unicode11.0.0/ch04.pdf#G134153) category:
  - Character tabulation (`U+0009`)
  - Line Feed (LF) (`U+000A`)
  - Line Tabulation (`U+000B`)
  - Form Feed (FF) (`U+000C`)
  - Carriage Return (CR) (`U+000D`)
  - Next Line (NEL) (`U+0085`)

## Acknowledgements

### Authors

This rule was written in the [ACT Rules community group](https://w3.org/community/act-r/), by:

- [Anne Thyme Nørregaard](https://github.com/annethyme)
- [Bryn Anderson](https://github.com/brynanders)
- [Jey Nandakumar](https://github.com/jkodu)
- [Stein Erik Skotkjerra](https://github.com/skotkjerra)
- [Wilco Fiers](https://github.com/wilcofiers)

Developed with the support of the EU-funded [WAI-Tools Project](https://www.w3.org/WAI/about/projects/wai-tools/).
