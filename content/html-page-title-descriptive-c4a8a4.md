---
title: "HTML page title is descriptive"
permalink: /standards-guidelines/act/rules/html-page-title-descriptive-c4a8a4/
ref: /standards-guidelines/act/rules/html-page-title-descriptive-c4a8a4/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/html-page-title-descriptive-c4a8a4.md
footer: |
  <p><strong>Date:</strong> Updated 22 October 2021</p>
  <p><strong>Authors:</strong> <a href="https://github.com/annethyme">Anne Thyme Nørregaard</a>, <a href="https://github.com/corbb">Corbb O'Connor</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules community group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>.</p>
proposed: true
rule_meta:
  id: c4a8a4
  name: "HTML page title is descriptive"
  rule_type: atomic
  description: |
    This rule checks that the first title in an HTML page describes the topic or purpose of that page.
  accessibility_requirements:
    'wcag20:2.4.2':
      forConformance: true
      failed: not satisfied
      passed: satisfied
      inapplicable: further testing needed
    'wcag-technique:G88':
      forConformance: false
      failed: not satisfied
      passed: further testing needed
      inapplicable: further testing needed
    'wcag-technique:H25':
      forConformance: false
      failed: not satisfied
      passed: further testing needed
      inapplicable: further testing needed
  input_aspects:
    - handle: DOM Tree
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom
    - handle: Language
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-text
  last_modified: 22 October 2021
  scs_tested:
    - handle: Page Titled
      num: 2.4.2
      level: A
---

{::options toc_levels="2" /}
{::nomarkdown}
{% include toc.html type="start" title="Page Contents" %}
{:/}

- Table of Content placeholder
{:toc}

{::nomarkdown}
{% include toc.html type="end" %}
{:/}

## Applicability

This rule applies to the first [HTML][] `title` element that

- is a [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) of the `html` element of a [web page](https://www.w3.org/TR/WCAG21/#dfn-web-page-s), and
- contains [children](https://dom.spec.whatwg.org/#concept-tree-child) that are [text nodes](https://dom.spec.whatwg.org/#text) that are not only [whitespace](#whitespace).

## Expectation

The target element describes the topic or purpose of the overall content of the [document](https://dom.spec.whatwg.org/#concept-document).

## Assumptions

This rule assumes that the language of each test target can be correctly determined (either programmatically or by analyzing the content), and sufficiently understood.

## Accessibility Support

- This rule assumes that browsers only recognize the first `title` element if multiple `title` elements are present in the [document](https://dom.spec.whatwg.org/#concept-document). Testing shows that this in general is the case. Therefore the scope of this rule is limited to only checking the first `title` element in a document.

## Background

The `title` elements of embedded documents, such as those in `iframe`, `object`, or `svg` elements, are not applicable because those are not web pages according to the definition in WCAG.

The [HTML specification - The `title` element](https://html.spec.whatwg.org/#the-title-element) requires that a document only has one `title` element, and that it is a child of the `head` element of a document. However, current HTML specification also describes what should happen in case of multiple titles, and titles outside the `head` element. Because of this, neither of these validation issues causes a conformance problem for WCAG.

- [HTML page has non-empty title](https://act-rules.github.io/rules/2779a5)
- [Understanding Success Criterion 2.4.2: Page titled](https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html)
- This rule is testing [Technique G88: Providing descriptive titles for Web pages](https://www.w3.org/WAI/WCAG21/Techniques/general/G88)
- A prerequisite for this rule is that [Technique H25: Providing a title using the title element](https://www.w3.org/WAI/WCAG21/Techniques/html/H25) is used for living up to 2.4.2 Page Titled

## Test Cases

### Passed

#### Passed Example 1

This `<title>` element describes the content of the document.

```html
<html lang="en">
	<head>
		<title>Clementine harvesting season</title>
	</head>
	<body>
		<p>
			Clementines will be ready to harvest from late October through February.
		</p>
	</body>
</html>
```

#### Passed Example 2

This `<title>` element, the first of two, describes the content of the document.

```html
<html lang="en">
	<head>
		<title>Clementine harvesting season</title>
		<title>Second title is ignored</title>
	</head>
	<body>
		<p>
			Clementines will be ready to harvest from late October through February.
		</p>
	</body>
</html>
```

#### Passed Example 3

This `<title>` element, which is within the `body`, describes the content of the document. Even though it is not placed within the `<head>` element, as expected [according to the HTML specification](https://html.spec.whatwg.org/#the-title-element), the rule still passes because the browser fixes it and it doesn't cause any known accessibility issues.

```html
<html lang="en">
	<head> </head>
	<body>
		<title>Clementine harvesting season</title>
		<p>
			Clementines will be ready to harvest from late October through February.
		</p>
	</body>
</html>
```

### Failed

#### Failed Example 1

This `<title>` element does not describe the content of the document.

```html
<html lang="en">
	<head>
		<title>Apple harvesting season</title>
	</head>
	<body>
		<p>
			Clementines will be ready to harvest from late October through February.
		</p>
	</body>
</html>
```

#### Failed Example 2

This `<title>` element, the first of two, does not describe the content of the document. Most browsers, and this rule, only look at the first `<title>` element.

```html
<html lang="en">
	<head>
		<title>First title is incorrect</title>
		<title>Clementine harvesting season</title>
	</head>
	<body>
		<p>
			Clementines will be ready to harvest from late October through February.
		</p>
	</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

This `title` element is a child of an `svg` element.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <title>This is a circle</title>
  <circle cx="150" cy="75" r="50" fill="green"></circle>
</svg>
```

## Glossary

### Namespaced Element {#namespaced-element}

An [element][] with a specific [namespaceURI][] value from [HTML namespaces][]. For example an "SVG element" is any element with the "SVG namespace", which is `http://www.w3.org/2000/svg`.

Namespaced elements are not limited to elements described in a specification. They also include custom elements. Elements such as `a` and `title` have a different namespace depending on where they are used. For example a `title` in an HTML page usually has the HTML namespace. When used in an `svg` element, a `title` element has the SVG namespace instead.

### Outcome {#outcome}

An _outcome_ is a conclusion that comes from evaluating an ACT Rule on a [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) or one of its constituent [test target](https://www.w3.org/TR/act-rules-format/#test-target). An outcome can be one of the three following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) meets all expectations
- **Failed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) does not meet all expectations

**Note:** A rule has one `passed` or `failed` outcome for every [test target](https://www.w3.org/TR/act-rules-format/#test-target). When there are no test targets the rule has one `inapplicable` outcome. This means that each [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) will have one or more outcomes.

**Note:** Implementations using the [EARL10-Schema](https://www.w3.org/TR/EARL10-Schema/) can express the outcome with the [outcome property](https://www.w3.org/TR/EARL10-Schema/#outcome). In addition to `passed`, `failed` and `inapplicable`, EARL 1.0 also defined an `incomplete` outcome. While this cannot be the outcome of an ACT Rule when applied in its entirety, it often happens that rules are only partially evaluated. For example, when applicability was automated, but the expectations have to be evaluated manually. Such "interim" results can be expressed with the `incomplete` outcome.

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

{% include_relative implementations/c4a8a4.md %}

## Changelog

This is the first version of this ACT rule.

[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[html]: #namespaced-element
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
