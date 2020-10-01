---
title: "HTML page has non-empty title"
permalink: /standards-guidelines/act/rules/html-page-non-empty-title-2779a5/
ref: /standards-guidelines/act/rules/html-page-non-empty-title-2779a5/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/html-page-non-empty-title-2779a5.md
# footer: > # Text in footer in HTML
#   <p> This is the text in the footer </p>
---

Rule Type:
:   atomic

Rule ID:
:   2779a5

Last Modified:
:   Oct 1, 2020

Accessibility Requirements Mapping:
:   [2.4.2 Page Titled (Level A)](https://www.w3.org/TR/WCAG21/#page-titled)
    - **Required for conformance** to WCAG 2.0 and later on level A and higher
    - [Outcome](#outcome) mapping:
        - Any `failed` outcomes: success criterion is not satisfied
        - All `passed` outcomes: success criterion needs further testing
        - An `inapplicable` outcome: success criterion needs further testing
:   [G88: Providing descriptive titles for Web pages](https://www.w3.org/WAI/WCAG21/Techniques/general/G88)
    - Not required to conformance to any W3C accessibility recommendation.
    - [Outcome](#outcome) mapping:
        - Any `failed` outcomes: technique is not satisfied
        - All `passed` outcomes: technique needs further testing
        - An `inapplicable` outcome: technique needs further testing
:   [H25: Providing a title using the title element](https://www.w3.org/WAI/WCAG21/Techniques/html/H25)
    - Not required to conformance to any W3C accessibility recommendation.
    - [Outcome](#outcome) mapping:
        - Any `failed` outcomes: technique is not satisfied
        - All `passed` outcomes: technique needs further testing
        - An `inapplicable` outcome: technique needs further testing

Input Aspects:
:   [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)

## Description

This rule checks that a non-embedded HTML page has a non-empty title.

## Applicability

The root element of the [web page](https://www.w3.org/TR/WCAG21/#dfn-web-page-s), if it is an `html` element.

## Expectation 1

Each target element has at least one [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) that is a [`title` element](https://html.spec.whatwg.org/multipage/semantics.html#htmltitleelement).

## Expectation 2

For each target element, the first HTML `title` element that is a [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) of the [document element](https://dom.spec.whatwg.org/#document-element) has [children](https://dom.spec.whatwg.org/#concept-tree-child) that are [text nodes](https://dom.spec.whatwg.org/#text) that are not only [whitespace](#whitespace).

## Assumptions

This rule assumes that [Success Criterion 2.4.2 Page Titled](https://www.w3.org/TR/WCAG21/#page-titled) does not require that a document only has one `title` element, nor that it is a child of the `head` element of a document. While this is invalid in HTML, the HTML 5.2 specification describes what should happen in case of multiple titles, and titles outside the `head` element. Because of this, neither of these validation issues causes a conformance problem for WCAG. Regardless of whether this is required by 2.4.2 Page Titled, failing this rule means the success criterion is not satisfied.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

This rule is only applicable to non-embedded HTML pages. HTML pages embedded into other documents, such as through `iframe` or `object` elements are not applicable because they are not [web pages](https://www.w3.org/TR/WCAG21/#dfn-web-page-s) according to the definition in WCAG.

- [Understanding Success Criterion 2.4.2: Page Titled](https://www.w3.org/WAI/WCAG21/Understanding/page-titled)
- [G88: Providing descriptive titles for Web pages](https://www.w3.org/WAI/WCAG21/Techniques/general/G88)
- [H25: Providing a title using the title element](https://www.w3.org/WAI/WCAG21/Techniques/html/H25)
- [HTML Specification - The `title` element](https://html.spec.whatwg.org/#the-title-element)

## Test Cases

### Passed

#### Passed Example 1

This page has a `title` element with content.

```html
<html>
	<title>This page has a title</title>
</html>
```

#### Passed Example 2

This page has a `title` element that serves as the title for the page and the `iframe` since it does not have its own.

```html
<html>
	<title>This page gives a title to an iframe</title>
	<iframe src="/test-assets/sc2-4-2-title-page-without-title.html"></iframe>
</html>
```

#### Passed Example 3

This page has two `title` elements with content.

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

This page has one `title` element with content, which is within the `body` element.

```html
<html>
	<body>
		<title>Title of the page.</title>
	</body>
</html>
```

#### Passed Example 5

This page has two `title` elements and only the first has content.

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

### Failed

#### Failed Example 1

This page does not have a `title` element.

```html
<html>
	<h1>this page has no title</h1>
</html>
```

#### Failed Example 2

This page has a `title` element that is empty.

```html
<html>
	<title></title>
</html>
```

#### Failed Example 3

This page does not have a `title` element. The `title` element in the content of the `iframe` does not function as the title for the entire page.

```html
<html>
	<iframe src="/test-assets/sc2-4-2-title-page-with-title.html"></iframe>
</html>
```

#### Failed Example 4

This page has two `title` elements and the first is empty.

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

This page has a `title` element that only contains a separator character.

```html
<html>
	<title> </title>
</html>
```

### Inapplicable

#### Inapplicable Example 1

This `title` element is a child of an `svg` element.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <title>This is an SVG</title>
</svg>
```

## Glossary

{% include_relative glossary/outcome.md %}
{% include_relative glossary/whitespace.md %}

## Acknowledgements

This rule was written in the [ACT Rules community group](https://w3.org/community/act-r/), 
with the support of the EU-funded [WAI-Tools Project](https://www.w3.org/WAI/about/projects/wai-tools/).

### Authors

- [Anne Thyme Nørregaard](https://github.com/annethyme)
- [Bryn Anderson](https://github.com/brynanders)
- [Jey Nandakumar](https://github.com/jkodu)
- [Stein Erik Skotkjerra](https://github.com/skotkjerra)
- [Wilco Fiers](https://github.com/wilcofiers)

## Changelog

- **October 1st, 2020**
	- Added mapping to Technique G88 and H25
	- Moved a note to the background
	- Added first assumption
	- Removed Passed example 6, as it does not satisfy success criterion 2.4.2
	- Editorial improvements to example descriptions