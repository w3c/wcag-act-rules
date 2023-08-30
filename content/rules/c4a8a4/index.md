---
title: "HTML page title is descriptive"
permalink: /standards-guidelines/act/rules/c4a8a4/
ref: /standards-guidelines/act/rules/c4a8a4/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/c4a8a4/index.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> c4a8a4</p>
  <p><strong>Date:</strong> Updated 30 August 2023</p>
  <p><strong>Authors:</strong> <a href="https://github.com/annethyme">Anne Thyme Nørregaard</a>, <a href="https://github.com/corbb">Corbb O'Connor</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It was approved and published by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: false
rule_meta:
  id: c4a8a4
  name: "HTML page title is descriptive"
  rule_type: atomic
  original_file: html-page-title-descriptive-c4a8a4.md
  description: |
    This rule checks that the first title in an HTML web page describes the topic or purpose of that page.
  last_modified: 30 August 2023
  scs_tested:
    - handle: Page Titled
      num: 2.4.2
      level: A
---

## Applicability

This rule applies to the [document title][] of each [html web page][], except if one of the following is true:

- The [html web page][] has no [document title][]; or
- The [document title][] contains only [whitespace](#whitespace) [text nodes](https://dom.spec.whatwg.org/#text).

## Expectation

The target element describes the topic or purpose of the overall content of the [document](https://dom.spec.whatwg.org/#concept-document).

## Assumptions

There are currently no assumptions.

## Accessibility Support

- This rule assumes that browsers only recognize the first `title` element if multiple `title` elements are present in the [document](https://dom.spec.whatwg.org/#concept-document). Testing shows that this in general is the case. Therefore the scope of this rule is limited to only checking the first `title` element in a document.

## Background

The `title` elements of embedded documents, such as those in `iframe`, `object`, or `svg` elements, are not applicable because those are not web pages according to the definition in WCAG.

The [HTML specification - The `title` element](https://html.spec.whatwg.org/#the-title-element) requires documents to only have one `title` element; and `title` elements to be children of the `head` element of a document. However, current HTML specification also describes what should happen in case of multiple titles, and titles outside the `head` element. Because of this, neither of these validation issues causes a conformance problem for WCAG.

### Related rules

- [HTML page has non-empty title](https://www.w3.org/WAI/standards-guidelines/act/rules/2779a5/)

### Bibliography

- [Understanding Success Criterion 2.4.2: Page titled](https://www.w3.org/WAI/WCAG21/Understanding/page-titled.html)
- [Technique G88: Providing descriptive titles for Web pages](https://www.w3.org/WAI/WCAG21/Techniques/general/G88)
- [Technique H25: Providing a title using the title element](https://www.w3.org/WAI/WCAG21/Techniques/html/H25)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>2.4.2 Page Titled (Level A)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#page-titled">Learn more about 2.4.2 Page Titled</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level A and higher.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion is satisfied</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>G88: Providing descriptive titles for Web pages</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G88">Learn more about technique G88</a></li>
      <li>Not required for conformance to any W3C accessibility recommendation.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: technique is not satisfied</li>
        <li>All <code>passed</code> outcomes: technique needs further testing</li>
        <li>An <code>inapplicable</code> outcome: technique needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>H25: Providing a title using the title element</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H25">Learn more about technique H25</a></li>
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
- [Language](https://www.w3.org/TR/act-rules-aspects/#input-aspects-text)

## Test Cases

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/c4a8a4/c19c231ab5175fb62b6a74b998aec0dd965c25c5.html">Open in a new tab</a>

This `title` element describes the content of the document.

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

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/c4a8a4/107a5e462b4ad6dd297742a2a177e24d32d27c26.html">Open in a new tab</a>

This `title` element, the first of two, describes the content of the document.

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

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/c4a8a4/2f9709573bf080a0feccfb2fd4b4a657383ef235.html">Open in a new tab</a>

This `title` element, which is within the `body`, describes the content of the document. Even though it is not placed within the `head` element, as expected [according to the HTML specification](https://html.spec.whatwg.org/#the-title-element), the rule still passes because the browser fixes it and it doesn't cause any known accessibility issues.

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

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/c4a8a4/2c1397032aad720fe43dee2be0d326be56957320.html">Open in a new tab</a>

This `title` element does not describe the content of the document.

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

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/c4a8a4/1844d7bce889d85a80b620468baa804eab3ff2c8.html">Open in a new tab</a>

This `title` element, the first of two, does not describe the content of the document. Most browsers, and this rule, only look at the first `title` element.

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

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/c4a8a4/4c72b3b9b06bf1edc3c959070731b65871ee0c8f.html">Open in a new tab</a>

This page has a generic [document title][]. The title contains the website name, but does not describe the page.

```html
<html lang="en">
	<head>
		<title>University of Arkham</title>
	</head>
	<body>
		<h1>Search results for "accessibility" at the University of Arkham</h1>
		<p>None</p>
	</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/c4a8a4/85469fd266d3e8706f551dcd65261709311123d0.svg">Open in a new tab</a>

This `title` element is a child of an `svg` element.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <title>This is a circle</title>
  <circle cx="150" cy="75" r="50" fill="green"></circle>
</svg>
```

## Glossary

### Outcome {#outcome}

An _outcome_ is a conclusion that comes from evaluating an ACT Rule on a [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) or one of its constituent [test target](https://www.w3.org/TR/act-rules-format/#test-target). An outcome can be one of the three following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) meets all expectations
- **Failed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) does not meet all expectations

**Note:** A rule has one `passed` or `failed` outcome for every [test target](https://www.w3.org/TR/act-rules-format/#test-target). When there are no test targets the rule has one `inapplicable` outcome. This means that each [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) will have one or more outcomes.

**Note:** Implementations using the [EARL10-Schema](https://www.w3.org/TR/EARL10-Schema/) can express the outcome with the [outcome property](https://www.w3.org/TR/EARL10-Schema/#outcome). In addition to `passed`, `failed` and `inapplicable`, EARL 1.0 also defined an `incomplete` outcome. While this cannot be the outcome of an ACT Rule when applied in its entirety, it often happens that rules are only partially evaluated. For example, when applicability was automated, but the expectations have to be evaluated manually. Such "interim" results can be expressed with the `incomplete` outcome.

### Web page (HTML) {#web-page-html}

An _HTML [web page](https://www.w3.org/TR/WCAG21/#dfn-web-page-s)_ is the set of all [fully active](https://html.spec.whatwg.org/#fully-active) [documents](https://dom.spec.whatwg.org/#concept-document) which share the same [top-level browsing context](https://html.spec.whatwg.org/#top-level-browsing-context).

**Note:** Nesting of browsing context mostly happens with `iframe` and `object`. Thus a web page will most of the time be a "top-level" document and all its `iframe` and `object` (recursively).

**Note:** [Web pages](https://www.w3.org/TR/WCAG21/#dfn-web-page-s) as defined by WCAG are not restricted to the HTML technology but can also include, _e.g._, PDF or DOCX documents.

**Note:** Although web pages as defined here are sets of [documents](https://dom.spec.whatwg.org/#concept-document) (and do not contain other kind of nodes), one can abusively write that any node is "in a web page" if it is a [shadow-including descendant](https://dom.spec.whatwg.org/#concept-shadow-including-descendant) of a [document](https://dom.spec.whatwg.org/#concept-document) that is part of that web page.

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

[document title]: https://html.spec.whatwg.org/multipage/dom.html#the-title-element-2 'HTML definition of Document Title'
[html web page]: #web-page-html 'Definition of Web Page (HTML)'
