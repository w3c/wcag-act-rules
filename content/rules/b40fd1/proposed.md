---
title: "Document has a landmark with non-repeated content"
permalink: /standards-guidelines/act/rules/b40fd1/proposed/
ref: /standards-guidelines/act/rules/b40fd1/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/b40fd1/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> b40fd1</p>
  <p><strong>Date:</strong> Updated 6 October 2025</p>
  <p><strong>Authors:</strong> <a href="https://github.com/Jym77">Jean-Yves Moyen</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
  
  <p><strong>Assets:</strong> Test cases use assets from the following sources: <em>Romance of the Three Kingdoms</em> by Luo Guanzhong, translation by Charles Henry Brewitt-Taylor (Tuttle Publishing, 1925, ISBN 9780804834674); <em>Three Kingdoms</em> by Luo Guanzhong, translation by Moss Roberts (Foreign Language Press, 1976, ISBN 7-119-00590-1); <em>The Three Kingdoms</em> by Luo Guanzhong, translation by Yu Sumei (Tuttle publishing, 2014, ISBN 9780804843935)</p>
proposed: true
rule_meta:
  id: b40fd1
  name: "Document has a landmark with non-repeated content"
  rule_type: atomic
  original_file: document-has-landmark-with-non-repeated-content-b40fd1.md
  description: |
    This rule checks that each page has an element with a landmark semantic role starting with non-repeated content
  last_modified: 6 October 2025
---

## Applicability

This rule applies to any [HTML web page][].

## Expectations

Within each test target, either there is no [non-repeated content after repeated content][] or there exists an element for which all the following are true:

- the element is an [inheriting semantic][] `landmark`; and
- the first [perceivable content][] (in [tree order][] in the [flat tree][]) which is an [inclusive descendant][] of the element is [non-repeated content after repeated content][]; and
- the element is [included in the accessibility tree][].

## Background

Most of the time, this rule passes by enclosing the primary content of the page in a `main` landmark.

[Technique ARIA11: Using ARIA landmarks to identify regions of a page][tech aria11] only checks that landmarks are correctly used, but does not check whether landmarks could have been used and were omitted. Therefore, failing this rule (not having enough landmarks) does not necessarily fail that technique, and it is not listed as an accessibility mapping.

### Assumptions

- This rule assumes that [landmarks][landmark] are intended to users of Assistive Technologies and are not necessarily rendered in a visible way. Therefore, it does not require the main landmark to be [visible][]. Similarly, technique [ARIA11: Using ARIA landmarks to identify regions of a page][tech aria11] does not require landmarks to be [visible][] or have [visible][] content.

### Accessibility Support

Marking content with landmarks is sufficient to pass [Success Criterion 2.4.1 Bypass blocks][sc241]. However, this will only benefit users who can actually navigate using landmark roles (such a functionality is usually provided by assistive technologies, but could also be provided by browsers or browsers plugins). Users without any possibility for landmarks navigation will be left without way of bypassing blocks of repeated content and will still experience accessibility issues. Therefore, it is recommended to provide other ways of bypassing blocks.

### Other Resources

- [Technique ARIA11: Using ARIA landmarks to identify regions of a page][tech aria11]
- [ARIA Landmarks Example](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/index.html)
- [CSS scoping (work in progress)](https://drafts.csswg.org/css-scoping/)
- [The `main` role](https://www.w3.org/TR/wai-aria-1.2/#main)

## Accessibility Requirements Mapping

This rule is not required for conformance.

## Input Aspects

The following aspects are required in using this rule.

- [Accessibility Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-accessibility)
- [CSS styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)
- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)

## Examples

<details class="act-inline-assets" markdown="block">
<summary><span>This HTML file is used in several examples:</span></summary>

File [`/test-assets/bypass-blocks-cf77f2/chapter2.html`](https://w3.org/WAI/content-assets/wcag-act-rules/test-assets/bypass-blocks-cf77f2/chapter2.html):

```html
<html>
	<head>
		<title>The Three Kingdoms, Chapter 2</title>
	</head>
	<body>
		<nav id="chapters-navigation">
			<h1>Content</h1>
			<ol>
				<li><a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Chapter 1</a></li>
				<li><a>Chapter 2</a></li>
			</ol>
		</nav>

		<aside id="bio-translator">
			<h1>About the translator</h1>
			<p>Yu Sumei is a professor of English at East China Normal University.</p>
		</aside>
		<aside id="about-book">
			<h1>About the book</h1>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<main>
			<h1>Zhang Fei Trashes the Inspector in Wrath</h1>
			<p>
				Now this Dong Zhuo, also known as Dong Zhong-ying, was from Lintao in northwest China.
			</p>
		</main>
	</body>
</html>
```

</details>

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b40fd1/9eb0cf411e23f4457a013123e3066e2bfa4652da.html">Open in a new tab</a>

In this [document][], the `main` element has a [semantic role][] of `main` and is [included in the accessibility tree][].

```html
<html>
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav id="chapters-navigation">
			<ol>
				<li><a>Chapter 1</a></li>
				<li><a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Chapter 2</a></li>
			</ol>
		</nav>

		<main>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</main>
	</body>
</html>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b40fd1/6857e600eac289c0c62a895c37587a2a929b057a.html">Open in a new tab</a>

In this [document][] the `div` element has a [semantic role][] of `main` and is [included in the accessibility tree][].

```html
<html>
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav id="chapters-navigation">
			<ol>
				<li><a>Chapter 1</a></li>
				<li><a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Chapter 2</a></li>
			</ol>
		</nav>

		<div role="main">
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</div>
	</body>
</html>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b40fd1/1f5a04fcf51ccae18f823604bb35cf6968bd763d.html">Open in a new tab</a>

This [document][] has several elements with a role of `main`, at least one of them is [included in the accessibility tree][].

```html
<html>
	<head>
		<title>Comparing translations of the Romance of the Three Kingdoms, Chapter one</title>
	</head>
	<body>
		<nav id="chapters-navigation">
			<ol>
				<li><a>Chapter 1</a></li>
				<li><a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Chapter 2</a></li>
			</ol>
		</nav>

		<main aria-label="Translation by Charles Henry Brewitt-Taylor (1925)" aria-hidden="true">
			<p>
				The world under heaven, after a long period of division, tends to unite; after a long period of union, tends to
				divide.
			</p>
		</main>

		<main aria-label="Translation by Moss Roberts (1976)">
			<p>The empire, long divided, must unite; long united, must divide. Thus it has ever been.</p>
		</main>

		<main aria-label="Translation by Yu Sumei (2014)" aria-hidden="true">
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</main>
	</body>
</html>
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b40fd1/4f112d2707661d579bb0e364ef6241ea6217d3e8.html">Open in a new tab</a>

This [document][] has no [non-repeated content after repeated content][].

```html
<html>
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<p>
			Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
			time.
		</p>
	</body>
</html>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b40fd1/fcdd27815e78ba3f3e7420cf1a6b503fd2e610c5.html">Open in a new tab</a>

This [document][] has no element with a landmark role.

```html
<html>
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<div id="chapters-navigation">
			<ol>
				<li><a>Chapter 1</a></li>
				<li><a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Chapter 2</a></li>
			</ol>
		</div>

		<p>
			Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
			time.
		</p>
	</body>
</html>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b40fd1/2ae36916d2c4679dcfc4707d92f1fc2279972c12.html">Open in a new tab</a>

This [document][] has no element with a landmark role after its repeated content. The element with a landmark role does not contain any [non-repeated content after repeated content][].

```html
<html>
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav id="chapters-navigation">
			<ol>
				<li><a>Chapter 1</a></li>
				<li><a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Chapter 2</a></li>
			</ol>
		</nav>

		<p>
			Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span of
			time.
		</p>
	</body>
</html>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b40fd1/8194fbeb6a60fa3b6484916de2eee4e9978d9521.html">Open in a new tab</a>

This document has a `main` [landmark][], but it is not [included in the accessibility tree][].

```html
<html>
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav id="chapters-navigation">
			<ol>
				<li><a>Chapter 1</a></li>
				<li><a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Chapter 2</a></li>
			</ol>
		</nav>

		<main aria-hidden="true">
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</main>
	</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b40fd1/ecc29b73e37b6a125b3fd9767068dcaa368d467a.svg">Open in a new tab</a>

This [document][] is not an [HTML web page][].

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <title>This is an SVG</title>
</svg>
```

## Glossary

### Block of content {#block-of-content}

A _block of content_ in an [HTML web page][] is a set of nodes from that page for which all the following are true:

- **content**: there is at least one node which is [perceivable content][] in the block; and
- **continuity**: if two nodes are in the block, then any node between them (in tree order) is also in the block; and
- **downward closure**: if a node is in the block, then all its descendants are also in the block; and
- **parent closure**: if all children of a node are in the block, then this node is also in the block.

### Block of repeated content {#block-of-repeated-content}

A [block of content][] B, inside an [HTML web page][] P, is a _block of repeated content_ if both the following are true:

- **distance 1**: there exist an [instrument][] in P which leads the user to another [HTML web page][] P' whose URL has a different [host][], [port][] (including [default port][] for [special URL][]), or [path][]; and
- **repeated**: there exist a [block of content][] in P' which is [equivalent][equivalent resource] to B.

### Equivalent resource {#equivalent-resource}

Non-identical resources can still be _equivalent resources_ by equally complying to the expectation formed by the user when navigating to them, thus serving an equivalent purpose. This would usually involve that the advertised key content is the same.

Web pages and documents (e.g. PDFs, office formats etc.) may be equivalent resources, even if the resources:

- are located on different URLs, including different domains
- present different navigation options, e.g. through bread crumbs or local sub menus
- contain different amounts of information and/or differently worded information
- use different layouts.

If all resources cover the user's expectations equally well, the resources are considered to be equivalent.

**Note:** The user's expectations for the resource can be formed by different things, e.g. the name of the link leading to the resource, with or without the context around the link. This depends on the accessibility requirement that is tested.

**Note:** If the same content is presented in different formats or languages, the format or language itself is often part of the purpose of the content, e.g. an article as both HTML and PDF, an image in different sizes, or an article in two different languages. If getting the same content in different formats or languages is the purpose of having separate links, the resources are not equivalent.

### Explicit Semantic Role {#explicit-role}

The _explicit semantic role_ of an element is determined by its [role attribute][] (if any).

The [role attribute][] takes a list of tokens. The explicit semantic role is the first valid role in this list. The valid roles are all non-abstract roles from [WAI-ARIA Specifications][]. If the element has no [role attribute][], or if it has one with no valid role, then this element has no explicit semantic role.

Other roles may be added as they become available. Not all roles will be supported in all assistive technologies. Testers are encouraged to adjust which roles are allowed according to the [accessibility support base line][]. For the purposes of executing examples in all rules, it should be assumed that all roles are supported by assistive technologies so that none of the roles fail due to lack of accessibility support.

### Focusable {#focusable}

An element is _focusable_ if one or both of the following are true:

- the element is part of [sequential focus navigation][]; or
- the element has a [tabindex value][] that is not null.

**Exception**: Elements that lose focus and do not regain focus during a period of up to 1 second after gaining focus, without the user interacting with the page the element is on, are not considered _focusable_.

Notes:

- The 1 second time span is an arbitrary limit which is not included in WCAG. Given that scripts can manage the focus state of elements, testing the focusability of an element consistently would be impractical without a time limit.
- The [tabindex value][] of an element is the value of the [tabindex attribute][] parsed using the [rules for parsing integers][]. For the [tabindex value][] to be different from null, it needs to be [parsed][rules for parsing integers] without errors.

### Implicit Semantic Role {#implicit-role}

The _implicit semantic role_ of an element is a pre-defined value given by the host language which depends on the element and its ancestors.

Implicit roles for HTML and SVG, are documented in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/#html-element-role-mappings) and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/#mapping_role_table).

### Included in the accessibility tree {#included-in-the-accessibility-tree}

Elements included in the accessibility tree of platform specific accessibility APIs are exposed to assistive technologies. This allows users of assistive technology to access the elements in a way that meets the requirements of the individual user.

The general rules for when elements are included in the accessibility tree are defined in the [core accessibility API mappings](https://www.w3.org/TR/core-aam/). For native markup languages, such as HTML and SVG, additional rules for when elements are included in the accessibility tree can be found in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/) and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/).

For more details, see [examples of included in the accessibility tree][].

[Programmatically hidden](#programmatically-hidden) elements are removed from the accessibility tree. However, some browsers will leave [focusable](#focusable) elements with an `aria-hidden` attribute set to `true` in the accessibility tree. Because they are hidden, these elements are considered **not** included in the accessibility tree. This may cause confusion for users of assistive technologies because they may still be able to interact with these focusable elements using sequential keyboard navigation, even though the element should not be included in the accessibility tree.

### Inheriting Semantic Role {#inheriting-semantic}

An element with an _inheriting semantic role_ of X is any element with a non-[abstract][] [semantic role][] that inherits from X, or is the same as X.

**Example**: An "inheriting semantic link" is any element that either has the [semantic role][] of [`link`][link] or a [semantic role][] that inherits from the [`link`][link] role, such as [doc-biblioref][].

### Instrument to achieve an objective {#instrument-to-achieve-an-objective}

An [HTML element][] that when [activated][] allows an end-user to achieve an objective.

**Note**: Any rule that uses this definition must provide an unambiguous description of the objective the instrument is used to achieve.

### Marked as decorative {#marked-as-decorative}

An element is _marked as decorative_ if one or more of the following conditions is true:

- it has an [explicit role][] of `none` or `presentation`; or
- it is an `img` element with an `alt` attribute whose value is the empty string (`alt=""`), and with no [explicit role][].

Elements are marked as decorative as a way to convey the intention of the author that they are [pure decoration][]. It is different from the element actually being [pure decoration][] as authors may make mistakes. It is different from the element being effectively ignored by assistive technologies as rules such as [presentational roles conflict resolution][] may overwrite this intention.

Elements can also be ignored by assistive technologies if they are [programmatically hidden][]. This is different from marking the element as decorative and does not convey the same intention. Notably, being [programmatically hidden][] may change as users interact with the page (showing and hiding elements) while being marked as decorative should stay the same through all states of the page.

### Non-repeated content after repeated content {#non-repeated-content}

A node is _non-repeated content after repeated content_ if all the following are true:

- the node is [perceivable content][]; and
- the node is not part of any [block of repeated content][]; and
- the node is after (in [tree order][] in the [flat tree][]) at least one [block of repeated content][].

### Outcome {#outcome}

A conclusion that comes from evaluating an ACT Rule on a [test subject][] or one of its constituent test target. An outcome can be one of the five following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target][] meets all expectations
- **Failed:** A [test target][] does not meet all expectations
- **cantTell:** Whether the rule is applicable, or not all expectations were met could not be fully determined by the tester.
- **Untested**: The tester has not attempted to evaluate the test subject.

**Note**: A rule has one `passed` or `failed` outcome for every [test target][]. When a tester evaluates a test target it can also be reported as `cantTell` if the rule cannot be tested in its entirety. For example, when applicability was automated, but the expectations have to be evaluated manually.

When there are no test targets the rule has one `inapplicable` outcome. If the tester is unable to determine whether there are test targets there will be one `cantTell` outcome. And when no evaluation has occurred the test target has one untested outcome. This means that each [test subject][] always has one or more outcomes.

Outcomes used in ACT Rules can be expressed using the [outcome property][] of the [EARL10-Schema][earl10-schema].

### Perceivable content {#perceivable-content}

A node is _perceivable content_ if all the following are true:

- the node is [palpable content][]; and
- the node is either [visible][] or [included in the accessibility tree][]; and
- if the node is an element, it does not have a [semantic role][] of `none` or `presentation`.

Perceivable content corresponds to nodes that contain information and are perceived by some categories of users.

### Programmatically Hidden {#programmatically-hidden}

An HTML element is _programmatically hidden_ if either it has a [computed][] CSS property `visibility` whose value is not `visible`; or at least one of the following is true for any of its [inclusive ancestors][] in the [flat tree][]:

- has a [computed][] CSS property `display` of `none`; or
- has an `aria-hidden` attribute set to `true`

**Note**: Contrary to the other conditions, the `visibility` CSS property may be reverted by descendants.

**Note**: The [HTML standard suggests](https://html.spec.whatwg.org/multipage/rendering.html#hidden-elements) setting the CSS `display` property to `none` for elements with the `hidden` attribute. While not required by HTML, all modern browsers follow this suggestion. Because of this the `hidden` attribute is not used in this definition. In browsers that use this suggestion, overriding the CSS `display` property can reveal elements with the `hidden` attribute.

### Semantic Role {#semantic-role}

The _semantic role_ of an element is determined by the first of these cases that applies:

1. **Conflict** If the element is [marked as decorative][], but the element is [included in the accessibility tree][]; or would be [included in the accessibility tree][] when it is not [programmatically hidden][], then its _semantic role_ is its **[implicit role][]**.
1. **Explicit** If the element has an [explicit role][], then its _semantic role_ is its [explicit role][].
1. **Implicit** The _semantic role_ of the element is its [implicit role][].

This definition can be used in expressions such as "semantic `button`" meaning any element with a semantic role of `button`.

### Visible {#visible}

Content perceivable through sight.

Content is considered _visible_ if making it fully transparent would result in a difference in the pixels rendered for any part of the document that is currently within the viewport or can be brought into the viewport via scrolling.

[Content is defined in WCAG](https://www.w3.org/TR/WCAG22/#dfn-content).

For more details, see [examples of visible](https://act-rules.github.io/pages/examples/visible/).

### WAI-ARIA specifications {#wai-aria-specifications}

The _WAI ARIA Specifications_ group both the WAI ARIA W3C Recommendation and ARIA modules, namely:

- [Accessible Rich Internet Applications (WAI-ARIA) 1.2](https://www.w3.org/TR/wai-aria-1.2/)
- [WAI-ARIA Graphics Module 1.0](https://www.w3.org/TR/graphics-aria-1.0/)
- [Digital Publishing WAI-ARIA Module 1.0](https://www.w3.org/TR/dpub-aria-1.0/)

**Note:** depending on the type of content being evaluated, part of the specifications might be irrelevant and should be ignored.

### Web page (HTML) {#web-page-html}

An _HTML [web page](https://www.w3.org/TR/WCAG22/#dfn-web-page-s)_ is the set of all [fully active](https://html.spec.whatwg.org/#fully-active) [documents](https://dom.spec.whatwg.org/#concept-document) which share the same [top-level browsing context](https://html.spec.whatwg.org/#top-level-browsing-context).

**Note:** Nesting of browsing context mostly happens with `iframe` and `object`. Thus a web page will most of the time be a "top-level" document and all its `iframe` and `object` (recursively).

**Note:** [Web pages](https://www.w3.org/TR/WCAG22/#dfn-web-page-s) as defined by WCAG are not restricted to the HTML technology but can also include, _e.g._, PDF or DOCX documents.

**Note:** Although web pages as defined here are sets of [documents](https://dom.spec.whatwg.org/#concept-document) (and do not contain other kind of nodes), one can abusively write that any node is "in a web page" if it is a [shadow-including descendant](https://dom.spec.whatwg.org/#concept-shadow-including-descendant) of a [document](https://dom.spec.whatwg.org/#concept-document) that is part of that web page.

[abstract]: https://www.w3.org/TR/wai-aria-1.2/#isAbstract 'ARIA Definition for Abstract Roles'
[accessibility support base line]: https://www.w3.org/TR/WCAG-EM/#step1c 'Definition of accessibility support base line'
[activated]: https://html.spec.whatwg.org/#activation
[block of content]: #block-of-content 'Definition of Block of Content'
[block of repeated content]: #block-of-repeated-content 'Definition of Block of Repeated Content'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[default port]: https://url.spec.whatwg.org/#default-port 'URL specification of Default Port'
[doc-biblioref]: https://www.w3.org/TR/dpub-aria-1.0/#doc-biblioref 'DPUB ARIA Definition of doc-biblioref'
[document]: https://dom.spec.whatwg.org/#concept-document 'DOM definition of Document'
[earl10-schema]: https://www.w3.org/TR/act-rules-format-1.1/#biblio-earl10-schema
[equivalent resource]: #equivalent-resource 'Definition of Equivalent Resource'
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[explicit role]: #explicit-role 'Definition of Explicit Role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS Definition of Flat Tree'
[focusable]: #focusable 'Definition of Focusable'
[host]: https://url.spec.whatwg.org/#concept-url-host 'URL specification of Host'
[html element]: https://html.spec.whatwg.org/multipage/dom.html#htmlelement
[html web page]: #web-page-html 'Definition of Web Page (HTML)'
[implicit role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[inclusive descendant]: https://dom.spec.whatwg.org/#concept-tree-inclusive-descendant 'DOM definition of Inclusive Descendant'
[inheriting semantic]: #inheriting-semantic 'Definition of Inheriting Semantic Role'
[instrument]: #instrument-to-achieve-an-objective 'Definition of Instrument to Achieve an Objective'
[landmark]: https://www.w3.org/TR/wai-aria-1.2/#landmark_roles 'List of Landmark Roles'
[link]: https://www.w3.org/TR/wai-aria/#link 'ARIA Definition of the link Role'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as Decorative'
[mechanism]: https://www.w3.org/TR/WCAG22/#dfn-mechanism 'WCAG Definition of Mechanism'
[non-repeated content after repeated content]: #non-repeated-content 'Definition of Non-Repeated Content after Repeated Content'
[outcome property]: https://www.w3.org/TR/EARL10-Schema/#outcome
[palpable content]: https://html.spec.whatwg.org/multipage/dom.html#palpable-content 'HTML specification of palpable content'
[path]: https://url.spec.whatwg.org/#concept-url-path 'URL specification of Path'
[perceivable content]: #perceivable-content 'Definition of Perceivable Content'
[port]: https://url.spec.whatwg.org/#concept-url-port 'URL specification of Port'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[programmatically hidden]: #programmatically-hidden 'Definition of Programmatically Hidden'
[pure decoration]: https://www.w3.org/TR/WCAG22/#dfn-pure-decoration 'WCAG definition of Pure Decoration'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[sc131]: https://www.w3.org/TR/WCAG22/#info-and-relationships 'Success Criterion 1.3.1: Info and Relationship'
[sc211]: https://www.w3.org/TR/WCAG22/#keyboard 'Success Criterion 2.1.1 Keyboard'
[sc241]: https://www.w3.org/TR/WCAG22/#bypass-blocks 'Success Criterion 2.4.1 Bypass Blocks'
[sc412]: https://www.w3.org/TR/WCAG22/#name-role-value 'Success Criterion 4.1.2 Name, Role, Value'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[special url]: https://url.spec.whatwg.org/#is-special 'URL specification of Special URL'
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[tech aria11]: https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA11 'Technique ARIA11: Using ARIA Landmarks to Identify Regions of a Page'
[test subject]: https://www.w3.org/TR/act-rules-format-1.1/#test-subject
[test target]: https://www.w3.org/TR/act-rules-format/#test-target
[tree order]: https://dom.spec.whatwg.org/#concept-tree-order 'DOM specification of Tree Order'
[visible]: #visible 'Definition of Visible'
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
