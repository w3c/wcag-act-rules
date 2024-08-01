---
title: "HTML page has non-empty title"
permalink: /standards-guidelines/act/rules/2779a5/proposed/
ref: /standards-guidelines/act/rules/2779a5/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/2779a5/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> 2779a5</p>
  <p><strong>Date:</strong> Updated 1 August 2024</p>
  <p><strong>Authors:</strong> <a href="https://github.com/annethyme">Anne Thyme Nørregaard</a>, <a href="https://github.com/brynanders">Bryn Anderson</a>, <a href="https://github.com/jkodu">Jey Nandakumar</a>, <a href="https://github.com/skotkjerra">Stein Erik Skotkjerra</a>, <a href="https://github.com/wilcofiers">Wilco Fiers</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: 2779a5
  name: "HTML page has non-empty title"
  rule_type: atomic
  original_file: html-page-non-empty-title-2779a5.md
  description: |
    This rule checks that a non-embedded HTML page has a non-empty title.
  last_modified: 1 August 2024
  scs_tested:
    - handle: Page Titled
      num: 2.4.2
      level: A
---

## Applicability

This rule applies to the root element of the [web page][], if it is an `html` element.

## Expectation 1

Each target element has at least one [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) that is a [`title` element](https://html.spec.whatwg.org/multipage/semantics.html#htmltitleelement).

## Expectation 2

For each target element, the first [HTML][] `title` element that is a [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) of the [document element](https://dom.spec.whatwg.org/#document-element) has [children](https://dom.spec.whatwg.org/#concept-tree-child) that are [text nodes](https://dom.spec.whatwg.org/#text) that are not only [whitespace](#whitespace).

## Assumptions

This rule assumes that [Success Criterion 2.4.2 Page Titled](https://www.w3.org/TR/WCAG22/#page-titled) does not require that a document only has one `title` element, nor that it is a child of the `head` element of a document. While this is invalid in HTML, the [HTML specification](https://html.spec.whatwg.org/multipage/dom.html#the-title-element-2) describes what should happen in case of multiple titles, and titles outside the `head` element. Because of this, neither of these validation issues causes a conformance problem for WCAG. Regardless of whether this is required by 2.4.2 Page Titled, failing this rule means the success criterion is not satisfied.

This rule assumes that the title of the page is not provided by a higher-level protocol. For example, the subject field of an email authored in HTML can provide a title without requiring a `title` element. In such a case, this rule will fail while [Success Criterion 2.4.2 Page Titled](https://www.w3.org/TR/WCAG22/#page-titled) may still be satisfied.

## Accessibility Support

There are no accessibility support issues known.

## Background

This rule is only applicable to non-embedded HTML pages. HTML pages embedded into other documents, such as through `iframe` or `object` elements are not applicable because they are not [web pages](https://www.w3.org/TR/WCAG22/#dfn-web-page-s) according to the definition in WCAG.

### Related rules

- [HTML page title is descriptive](https://www.w3.org/WAI/standards-guidelines/act/rules/c4a8a4/)

### Bibliography

- [Understanding Success Criterion 2.4.2: Page Titled](https://www.w3.org/WAI/WCAG22/Understanding/page-titled)
- [G88: Providing descriptive titles for Web pages](https://www.w3.org/WAI/WCAG22/Techniques/general/G88)
- [H25: Providing a title using the title element](https://www.w3.org/WAI/WCAG22/Techniques/html/H25)
- [HTML Specification - The `title` element](https://html.spec.whatwg.org/#the-title-element)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>2.4.2 Page Titled (Level A)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#page-titled">Learn more about 2.4.2 Page Titled</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level A and higher.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
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

## Test Cases

<details class="act-inline-assets" markdown="block">
<summary><span>These HTML files are used in several examples:</span></summary>

File [`/test-assets/sc2-4-2-title-page-without-title.html`](https://w3.org/WAI/content-assets/wcag-act-rules/test-assets/sc2-4-2-title-page-without-title.html):

```html
<html>
	<body>
		Content
	</body>
</html>
```

File [`/test-assets/sc2-4-2-title-page-with-title.html`](https://w3.org/WAI/content-assets/wcag-act-rules/test-assets/sc2-4-2-title-page-with-title.html):

```html
<html>
	<head>
		<title>Title</title>
	</head>
	<body>
		Content
	</body>
</html>
```

</details>

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2779a5/7f9f315b5041f3726662bf269613c43678af99d4.html">Open in a new tab</a>

This page has a `title` element with content.

```html
<html>
	<title>This page has a title</title>
</html>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2779a5/64771c390e57375a822a7223362ea7bb859c0a96.html">Open in a new tab</a>

This page has a `title` element that serves as the title for the page and the `iframe` since the `iframe` does not have its own.

```html
<html>
	<title>This page gives a title to an iframe</title>
	<iframe src="/test-assets/sc2-4-2-title-page-without-title.html"></iframe>
</html>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2779a5/6b3d2e2147cfc618b744f2dabfaf2e66327055d7.html">Open in a new tab</a>

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

<a class="example-link" title="Passed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2779a5/efa1e0438bb515332ec6b4d943044c336ca77fab.html">Open in a new tab</a>

This page has one `title` element with content, which is within the `body` element.

```html
<html>
	<body>
		<title>Title of the page.</title>
	</body>
</html>
```

#### Passed Example 5

<a class="example-link" title="Passed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2779a5/0ad882dffaf6edd16058119e1c513b4746b0ac27.html">Open in a new tab</a>

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

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2779a5/820fb18c9bb20fb1a940a0806a87c6f6e468bb5b.html">Open in a new tab</a>

This page does not have a `title` element.

```html
<html>
	<h1>this page has no title</h1>
</html>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2779a5/314d991fa5328e41f8a806bfbac84d748b41f7ed.html">Open in a new tab</a>

This page has a `title` element that is empty.

```html
<html>
	<title></title>
</html>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2779a5/5fd6fda771cf8810eef5166464622d6979e0406e.html">Open in a new tab</a>

This page does not have a `title` element. The `title` element in the content of the `iframe` does not function as the title for the entire page.

```html
<html>
	<iframe src="/test-assets/sc2-4-2-title-page-with-title.html"></iframe>
</html>
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2779a5/a14968698b0e95b6624f187d4538e320e4fa8952.html">Open in a new tab</a>

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

<a class="example-link" title="Failed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2779a5/4eeff9c95f15e90ca5abc972079112d1ea5c3d51.html">Open in a new tab</a>

This page has a `title` element that only contains a separator character.

```html
<html>
	<title> </title>
</html>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2779a5/ecc29b73e37b6a125b3fd9767068dcaa368d467a.svg">Open in a new tab</a>

This `title` element is a child of an `svg` element.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <title>This is an SVG</title>
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

### Web page (HTML) {#web-page-html}

An _HTML [web page](https://www.w3.org/TR/WCAG22/#dfn-web-page-s)_ is the set of all [fully active](https://html.spec.whatwg.org/#fully-active) [documents](https://dom.spec.whatwg.org/#concept-document) which share the same [top-level browsing context](https://html.spec.whatwg.org/#top-level-browsing-context).

**Note:** Nesting of browsing context mostly happens with `iframe` and `object`. Thus a web page will most of the time be a "top-level" document and all its `iframe` and `object` (recursively).

**Note:** [Web pages](https://www.w3.org/TR/WCAG22/#dfn-web-page-s) as defined by WCAG are not restricted to the HTML technology but can also include, _e.g._, PDF or DOCX documents.

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

[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[html]: #namespaced-element
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
[web page]: #web-page-html 'Definition of HTML web page'
