---
title: "HTML page has non-empty title"
permalink: /standards-guidelines/act/rules/2779a5/
ref: /standards-guidelines/act/rules/2779a5/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/2779a5/index.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> 2779a5</p>
  <p><strong>Date:</strong> Updated 28 January 2022</p>
  <p><strong>Authors:</strong> <a href="https://github.com/annethyme">Anne Thyme Nørregaard</a>, <a href="https://github.com/brynanders">Bryn Anderson</a>, <a href="https://github.com/jkodu">Jey Nandakumar</a>, <a href="https://github.com/skotkjerra">Stein Erik Skotkjerra</a>, <a href="https://github.com/wilcofiers">Wilco Fiers</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules community group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It was approved and published by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: false
rule_meta:
  id: 2779a5
  name: "HTML page has non-empty title"
  rule_type: atomic
  description: |
    This rule checks that a non-embedded HTML page has a non-empty title.
  last_modified: 28 January 2022
  scs_tested:
    - handle: Page Titled
      num: 2.4.2
      level: A
---

## Applicability

This rule applies to the root element of the [web page](https://www.w3.org/TR/WCAG21/#dfn-web-page-s), if it is an `html` element.

## Expectation 1

Each target element has at least one [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) that is a [`title` element](https://html.spec.whatwg.org/multipage/semantics.html#htmltitleelement).

## Expectation 2

For each target element, the first [HTML][] `title` element that is a [descendant](https://dom.spec.whatwg.org/#concept-tree-descendant) of the [document element](https://dom.spec.whatwg.org/#document-element) has [children](https://dom.spec.whatwg.org/#concept-tree-child) that are [text nodes](https://dom.spec.whatwg.org/#text) that are not only [whitespace](#whitespace).

## Assumptions

This rule assumes that [Success Criterion 2.4.2 Page Titled](https://www.w3.org/TR/WCAG21/#page-titled) does not require that a document only has one `title` element, nor that it is a child of the `head` element of a document. While this is invalid in HTML, the HTML 5.2 specification describes what should happen in case of multiple titles, and titles outside the `head` element. Because of this, neither of these validation issues causes a conformance problem for WCAG. Regardless of whether this is required by 2.4.2 Page Titled, failing this rule means the success criterion is not satisfied.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

This rule is only applicable to non-embedded HTML pages. HTML pages embedded into other documents, such as through `iframe` or `object` elements are not applicable because they are not [web pages](https://www.w3.org/TR/WCAG21/#dfn-web-page-s) according to the definition in WCAG.

### Related rules

- [HTML page title is descriptive](https://act-rules.github.io/rules/c4a8a4)

### Bibliography

- [Understanding Success Criterion 2.4.2: Page Titled](https://www.w3.org/WAI/WCAG21/Understanding/page-titled)
- [G88: Providing descriptive titles for Web pages](https://www.w3.org/WAI/WCAG21/Techniques/general/G88)
- [H25: Providing a title using the title element](https://www.w3.org/WAI/WCAG21/Techniques/html/H25)
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

### Passed

#### Passed Example 1

This page has a `title` element with content.

```html
<html>
	<title>This page has a title</title>
</html>
```

#### Passed Example 2

This page has a `title` element that serves as the title for the page and the `iframe` since the `iframe` does not have its own.

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

{% include_relative _implementation-approved.md %}

## Changelog

This is the first version of this ACT rule.

[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[html]: #namespaced-element
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
