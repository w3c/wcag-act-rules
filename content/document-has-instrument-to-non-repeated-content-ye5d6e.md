---
title: "Document has an instrument to move focus to non-repeated content"
permalink: /standards-guidelines/act/rules/document-has-instrument-to-non-repeated-content-ye5d6e/
ref: /standards-guidelines/act/rules/document-has-instrument-to-non-repeated-content-ye5d6e/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/document-has-instrument-to-non-repeated-content-ye5d6e.md
# footer: > # Text in footer in HTML
#   <p> This is the text in the footer </p>
---

{% include_relative _proposed-banner.html %}

Rule Type:
:   atomic

Rule ID:
:   ye5d6e

Last Modified:
:   June 14, 2021

Accessibility Requirements Mapping:
:   [G1: Adding a link at the top of each page that goes directly to the main content area](https://www.w3.org/WAI/WCAG21/Techniques/general/G1)
    - Not required to conformance to any W3C accessibility recommendation.
    - [Outcome](#outcome) mapping:
        - Any `failed` outcomes: technique is not satisfied
        - All `passed` outcomes: technique needs further testing
        - An `inapplicable` outcome: technique needs further testing
:   [G123: Adding a link at the beginning of a block of repeated content to go to the end of the block](https://www.w3.org/WAI/WCAG21/Techniques/general/G123)
    - Not required to conformance to any W3C accessibility recommendation.
    - [Outcome](#outcome) mapping:
        - Any `failed` outcomes: technique is not satisfied
        - All `passed` outcomes: technique needs further testing
        - An `inapplicable` outcome: technique needs further testing
:   [G124: Adding links at the top of the page to each area of the content](https://www.w3.org/WAI/WCAG21/Techniques/general/G124)
    - Not required to conformance to any W3C accessibility recommendation.
    - [Outcome](#outcome) mapping:
        - Any `failed` outcomes: technique is not satisfied
        - All `passed` outcomes: technique needs further testing
        - An `inapplicable` outcome: technique needs further testing

Input Aspects:
:   [Accessibility Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-accessibility)
:   [CSS styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)
:   [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)
:   [Language](https://www.w3.org/TR/act-rules-aspects/#input-aspects-text)

## Description

This rule checks that there is an instrument to move focus to non-repeated content in the page

## Applicability

This rule applies to any [HTML web page][].

## Expectation

For each test target, there exists at least one [instrument][] inside it to move focus [just before][] a node of [non-repeated content after repeated content][].

## Assumptions

- This rule assumes that there is at least one [block of repeated content][] before the non-repeated content, and therefore [Technique G123: Adding a link at the beginning of a block of repeated content to go to the end of the block][tech g123] will require a link to the non-repeated content in order to skip this [block of repeated content][]. If there is no [block of repeated content][] before the non-repeated content, then it is possible to fail this rule but still pass [Technique G123: Adding a link at the beginning of a block of repeated content to go to the end of the block][tech g123].
- This rule assumes that the language of each test target can be correctly determined (either programmatically or by analyzing the content), and sufficiently understood.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

The intention of this rule is that focus is moved to the main area of content of a document. However, defining the main area of content in a non-ambiguous way is not really doable. Therefore, the rule takes a more lenient position and only requires to move focus to some non-repeated content. Additional conditions on this destination were considered and rejected when writing the rule since it might be acceptable, for example, to skip the first heading of the main area of content if it has the exact same content as the `title` element of the document. Therefore, it is possible to pass this rule but still fail the related techniques and violate [Success Criterion 2.4.1 Bypass blocks][sc241].

While it is clear that a "skip link" is a valid way to satisfy [Success Criterion 2.4.1 Bypass blocks][sc241], it is less clear how "deep" in the page such a skip link could be. Notably, [Technique G124: Adding links at the top of the page to each area of the content][tech g124] is listing valid cases where it could be fairly "deep" if the page has many areas of the content. Rather than trying to fix an arbitrary value (e.g. "the skip link must be among the first 5 focusable elements"), or trying to figure out some condition on what precedes it, this rule only checks its existence. It is clear that if no "skip link" is provided, then another way to bypass blocks of repeated content must be found. However, it is possible to pass this rule without satisfying [Success Criterion 2.4.1 Bypass blocks][sc241] if the skip link is too far away from the start of the page.

- [Technique G1: Adding a link at the top of each page that goes directly to the main content area][tech g1]
- [Technique G123: Adding a link at the beginning of a block of repeated content to go to the end of the block][tech g123]
- [Technique G124: Adding links at the top of the page to each area of the content][tech g124]

To avoid using landmarks for the non-repeated content, which would satisfy [Success Criterion 2.4.1 Bypass Block][sc241], which this rule is designed for, this rule uses `<div id="main">` in its test cases to indicate where non-repeating content exists. It is recommended to use the `main` landmark instead. The `aside` and `nav` elements are each a [block of repeated content][] due to the link inside the `nav` element to a page with similar [blocks of content][block of content].

Due to the differences between the 3 techniques considered here, it is almost impossible to pass all of them at the same time. The first few Passed Examples illustrate these differences and pass different techniques. The rest of the Passed Examples illustrate variations inside the rule and are based on cases that pass [Technique G1: Adding a link at the top of each page that goes directly to the main content area][tech g1] given that it is simpler than the other two.

The examples sometimes group the skip links inside a `nav` landmark (notably when there are several). According to [WAI-ARIA authoring practices][navigation landmark], if another `nav` landmark was present on the page (e.g. for site navigation), then each should have a different accessible name.

## Test Cases

### Passed

#### Passed Example 1

In this [document][], the first `a` element is an [instrument][] to [navigate][], and thus move the focus, to the non-repeated content. This example passes [Technique G1: Adding a link at the top of each page that goes directly to the main content area][tech g1].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main">Skip to main content</a>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter2.html">Read Chapter 2</a>

		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<div id="main">
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</div>
	</body>
</html>
```

#### Passed Example 2

In this [document][], the third `a` element is an [instrument][] to move the focus to the non-repeated content. This example passes [Technique G124: Adding links at the top of the page to each area of the content][tech g124].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav id="local-navigation">
			<a href="#bio-translator">Skip to translator's biography</a>
			<a href="#about-book">Skip to information about the book</a>
			<a href="#main">Skip to main content</a>
		</nav>

		<aside id="bio-translator">
			<p>Yu Sumei is a professor of English at East China Normal University.</p>
		</aside>
		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<div id="main">
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</div>
	</body>
</html>
```

#### Passed Example 3

In this [document][], the second `a` element (inside the second `aside` element) is an [instrument][] to move the focus to the non-repeated content. This example passes [Technique G123: Adding a link at the beginning of a block of repeated content to go to the end of the block][tech g123].

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<aside id="bio-translator">
			<a href="#about-book">Skip to information about the book</a>
			<p>Yu Sumei is a professor of English at East China Normal University.</p>
		</aside>
		<aside id="about-book">
			<a href="#main">Skip to main content</a>
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<div id="main">
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</div>
	</body>
</html>
```

#### Passed Example 4

In this [document][], the first `a` element is an [instrument][] to move the focus to the non-repeated content. In this case, the element is normally hidden but is [visible][] when [focused][].

```html
<html lang="en">
	<head>
		<link rel="stylesheet" href="/test-assets/bypass-blocks-cf77f2/styles.css" />
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<nav class="visible-on-focus">
			<a href="#main">Skip to main content</a>
		</nav>

		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<div id="main">
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</div>
	</body>
</html>
```

#### Passed Example 5

In this [document][], the first `div` element is an [instrument][] to move the focus to the non-repeated content.

```html
<html lang="en">
	<head>
		<script src="/test-assets/bypass-blocks-cf77f2/click-on-enter.js"></script>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body onload="ClickOnEnter('skip-link')">
		<div role="link" onclick="location.assign('#main');" tabindex="0" id="skip-link">Skip to main content</div>

		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<div id="main">
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</div>
	</body>
</html>
```

#### Passed Example 6

In this [document][], the first `a` element is an [instrument][] to move the focus to the non-repeated content.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#main" aria-label="Skip to main content">📖</a>

		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<div id="main">
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</div>
	</body>
</html>
```

#### Passed Example 7

In this [document][], the first `a` element is an [instrument][] to move the focus to the non-repeated content. Even though its target is inside a [block of repeated content][], it is still [just before][] some [non-repeated content after repeated content][] because there is no [perceivable content][] between the link target and the non-repeated content. Thus, following the link does skip all the repeated content.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#just-before-main">Skip to main content</a>

		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
			<span id="just-before-main"></span>
		</aside>

		<div id="main">
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</div>
	</body>
</html>
```

#### Passed Example 8

In this [document][], the first `a` element is an [instrument][] to move the focus to the non-repeated content. Even though its target is not the first element after it, it is still [just before][] the first [non-repeated content after repeated content][]. Thus, following the link does not skip any non-repeated content.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#just-before-main">Skip to main content</a>

		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<div id="main">
			<hr />
			<span id="just-before-main"></span>
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
			<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>
		</div>
	</body>
</html>
```

### Failed

#### Failed Example 1

This [document][] has no [instrument][] to skip to the non-repeated content.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>

		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<div id="main">
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</div>
	</body>
</html>
```

#### Failed Example 2

In this [document][], the link to skip to the non-repeated content does not reference a valid `id` attribute and thus when [activated][activation] will not move focus to the non-repeated content.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#invalid-id">Skip to main content</a>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>

		<aside id="about-book">
			<p>The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<div id="main">
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</div>
	</body>
</html>
```

#### Failed Example 3

In this [document][], the skip link does not move focus [just before][] some [non-repeated content after repeated content][]. The focus is moved on [perceivable content][] which is inside the [block of repeated content][]. Thus, following the link does not skip all the repeated content.

```html
<html lang="en">
	<head>
		<title>The Three Kingdoms, Chapter 1</title>
	</head>
	<body>
		<a href="#before-main">Skip to main content</a>
		<a href="/test-assets/bypass-blocks-cf77f2/chapter1.html">Read Chapter 2</a>

		<aside id="about-book">
			<p id="before-main">The Romance of the Three Kingdoms is a 14th century historical novel.</p>
		</aside>

		<div id="main">
			<p>
				Unity succeeds division and division follows unity. One is bound to be replaced by the other after a long span
				of time.
			</p>
		</div>
	</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

This [document][] is not an [HTML web page][].

```svg
<svg xmlns="http://www.w3.org/2000/svg">
  <title>This is an SVG</title>
</svg>
```

## Glossary

{% include_relative glossary/block-of-content.md %}
{% include_relative glossary/block-of-repeated-content.md %}
{% include_relative glossary/equivalent-resource.md %}
{% include_relative glossary/explicit-role.md %}
{% include_relative glossary/focusable.md %}
{% include_relative glossary/hidden-state.md %}
{% include_relative glossary/implicit-role.md %}
{% include_relative glossary/included-in-the-accessibility-tree.md %}
{% include_relative glossary/instrument-to-achieve-an-objective.md %}
{% include_relative glossary/just-before.md %}
{% include_relative glossary/marked-as-decorative.md %}
{% include_relative glossary/non-repeated-content.md %}
{% include_relative glossary/outcome.md %}
{% include_relative glossary/perceivable-content.md %}
{% include_relative glossary/semantic-role.md %}
{% include_relative glossary/visible.md %}
{% include_relative glossary/wai-aria-specifications.md %}
{% include_relative glossary/web-page-html.md %}

## Acknowledgements

This rule was written in the [ACT Rules community group](https://w3.org/community/act-r/), 
with the support of the EU-funded [WAI-Tools Project](https://www.w3.org/WAI/about/projects/wai-tools/).

### Authors

- [Jean-Yves Moyen](https://github.com/Jym77)

### Assets

- _The Three Kingdoms_ by Luo Guanzhong, translation by Yu Sumei (Tuttle publishing, 2014, ISBN 9780804843935)

## Changelog

This is the first version of this ACT rule.

[activation]: https://html.spec.whatwg.org/#activation 'HTML Definition of Activation'
[block of content]: #block-of-repeated-content 'Definition of Block of Content'
[block of repeated content]: #block-of-repeated-content 'Definition of Block of Repeated Content'
[document]: https://dom.spec.whatwg.org/#concept-document 'DOM definition of Document'
[focused]: https://html.spec.whatwg.org/#focused 'HTML definition of Focused'
[html web page]: #web-page-html 'Definition of Web Page (HTML)'
[instrument]: #instrument-to-achieve-an-objective 'Definition of Instrument to Achieve an Objective'
[just before]: #just-before 'Definition of Just Before'
[navigate]: https://html.spec.whatwg.org/multipage/browsing-the-web.html#navigate 'HTML specification of navigate'
[navigation landmark]: https://www.w3.org/TR/wai-aria-practices-1.1/#aria_lh_navigation 'WAI-ARIA authoring practices, Navigation Landmark'
[non-repeated content after repeated content]: #non-repeated-content 'Definition of Non-Repeated Content after Repeated Content'
[perceivable content]: #perceivable-content 'Definition of Perceivable Content'
[sc241]: https://www.w3.org/TR/WCAG21/#bypass-blocks 'Success Criterion 2.4.1 Bypass Blocks'
[tech g1]: https://www.w3.org/WAI/WCAG21/Techniques/general/G1 'Technique G1: Adding a Link at the Top of each Page that Goes Directly to the Main Content Area'
[tech g123]: https://www.w3.org/WAI/WCAG21/Techniques/general/G123 'Technique G123: Adding a Link at the Beginning of a Block of Repeated Content to Go to the End of the Block'
[tech g124]: https://www.w3.org/WAI/WCAG21/Techniques/general/G124 'Technique G124: Adding Links at the Top of the Page to each Area of the Content'
[visible]: #visible 'Definition of Visible'
