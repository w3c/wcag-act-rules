---
title: "Content has alternative for visual reference"
permalink: /standards-guidelines/act/rules/9bd38c/proposed/
ref: /standards-guidelines/act/rules/9bd38c/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/9bd38c/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> 9bd38c</p>
  <p><strong>Date:</strong> Updated 7 October 2025</p>
  <p><strong>Authors:</strong> <a href="https://www.linkedin.com/in/brianbors/">Brian Bors</a>, <a href="https://github.com/danistr">Daniël Strik</a>, <a href="https://github.com/Jym77">Jean-Yves Moyen</a>, <a href="https://github.com/wilcofiers">Wilco Fiers</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: 9bd38c
  name: "Content has alternative for visual reference"
  rule_type: atomic
  original_file: non-visual-reference-alternative-9bd38c.md
  description: |
    This rule checks that when content is identified through a visual reference, there are also non-visual references identifying the same content.
  last_modified: 7 October 2025
  scs_tested:
    - handle: Sensory Characteristics
      num: 1.3.3
      level: A
---

## Applicability

This rule applies to any [text node][] that is either [visible][] or [included in the accessibility tree][].

## Expectation

For each test target, either it contains none of the [visual reference words][], or it does not identify any [web content][] through the use of any [visual reference words][], or it does identify some [web content][] and at least one of the following is true:

- **non-visual reference**: the test target is on the same [web page][] as a [textual][text] instruction that also identifies that [web content][] without any [visual reference word][]; or
- **non-sensory meaning**: at least one of the [visual reference words][] that identifies the [web content][] is used with a non-sensory meaning; or
- **visible words**: each [visual reference word][] in the test target is included in the [visible text content][] of the identified content; or
- **accessible words**: each [visual reference word][] in the test target is included in the [accessible name][] of the identified content; or
- **no instruction**: the test target does not give instructions about it through the use of any of the [visual reference words][].

## Background

[Visual reference words][] that can be interpreted with the non-sensory meaning include, in English, expressions like "right after this" where "right" is a [visual reference word][] used with the meaning "immediately"; or words like "below" that is often used with the meaning "further in reading order".

The rule doesn't require the non-visual characteristic description to be included in the accessibility tree. If the alternatives are not included in the accessibility tree, only [Success Criteria 1.3.1 Info and Relationships][sc131] would fail instead of [Success Criterion 1.3.3 Sensory Characteristics][sc133]. Hence, the rule passes in these cases as it is not a failure of the accessibility requirements of this rule.

The identified web content does not have to be positioned on the same web page and doesn't need to be linked to from the tested web page.

### Assumptions

This rule assumes that [visual reference words][] are forms of information conveyed through visual presentation. Therefore, failing this rule fails [Success Criterion 1.3.3 Sensory Characteristics][sc133]. Visual presentation is not limited to CSS and includes images such as the image of a circle with text.

### Accessibility Support

There are no accessibility support issues known.

### Bibliography

- [WCAG 2.2 - Understanding Success Criterion 1.3.3: Sensory Characteristics](https://www.w3.org/WAI/WCAG22/Understanding/sensory-characteristics.html)
- [G96: Providing textual identification of items that otherwise rely only on sensory information to be understood](https://www.w3.org/WAI/WCAG22/Techniques/general/G96)
- [F14: Failure of Success Criterion 1.3.3 due to identifying content only by its shape or location](https://www.w3.org/WAI/WCAG22/Techniques/failures/F14)
- [F26: Failure of Success Criterion 1.3.3 due to using a graphical symbol alone to convey information](https://www.w3.org/WAI/WCAG22/Techniques/failures/F26)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>1.3.3 Sensory Characteristics (Level A)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG22/#sensory-characteristics">Learn more about 1.3.3 Sensory Characteristics</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level A and higher.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>G96: Providing textual identification of items that otherwise rely only on sensory information to be understood</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG22/Techniques/general/G96">Learn more about technique G96</a></li>
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

- [Accessibility Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-accessibility)
- [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)
- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)
- [Language](https://www.w3.org/TR/act-rules-aspects/#input-aspects-text)

## Examples

<details class="act-inline-assets" markdown="block">
<summary><span>These HTML and CSS files are used in several examples:</span></summary>

File [`/test-assets/non-visual-reference-alternative-9bd38c/triangle-menu-with-heading.html`](https://w3.org/WAI/content-assets/wcag-act-rules/test-assets/non-visual-reference-alternative-9bd38c/triangle-menu-with-heading.html):

```html
<html>
	<body>
		<div>
			<h1>Triangle Menu</h1>
			<ul>
				<li>
					<a href="https://www.w3.org/Consortium/contact">Contact</a>
				</li>
				<li>
					<a href="https://www.w3.org/Help/">Help and FAQ</a>
				</li>
				<li>
					<a href="https://www.w3.org/Consortium/sponsor/">Donate</a>
				</li>
				<li>
					<a href="https://www.w3.org/Consortium/siteindex">Sitemap</a>
				</li>
			</ul>
		</div>
	</body>
</html>
```

File [`/test-assets/non-visual-reference-alternative-9bd38c/star-with-heading.html`](https://w3.org/WAI/content-assets/wcag-act-rules/test-assets/non-visual-reference-alternative-9bd38c/star-with-heading.html):

```html
<html>
	<body>
		<p>★</p>
		<h1>Examples</h1>
		<ul>
			<li>Example 1</li>
			<li>Example 2</li>
			<li>Example 3</li>
			<li>Example 4</li>
		</ul>
	</body>
</html>
```

File [`/test-assets/non-visual-reference-alternative-9bd38c/triangle-menu-without-heading.html`](https://w3.org/WAI/content-assets/wcag-act-rules/test-assets/non-visual-reference-alternative-9bd38c/triangle-menu-without-heading.html):

```html
<html>
	<body>
		<div>
			<h1>▲</h1>
			<ul>
				<li>
					<a href="https://www.w3.org/Consortium/contact">Contact</a>
				</li>
				<li>
					<a href="https://www.w3.org/Help/">Help and FAQ</a>
				</li>
				<li>
					<a href="https://www.w3.org/Consortium/sponsor/">Donate</a>
				</li>
				<li>
					<a href="https://www.w3.org/Consortium/siteindex">Sitemap</a>
				</li>
			</ul>
		</div>
	</body>
</html>
```

File [`/test-assets/non-visual-reference-alternative-9bd38c/star-without-heading.html`](https://w3.org/WAI/content-assets/wcag-act-rules/test-assets/non-visual-reference-alternative-9bd38c/star-without-heading.html):

```html
<html>
	<body>
		<p>★</p>
		<ul>
			<li>Example 1</li>
			<li>Example 2</li>
			<li>Example 3</li>
			<li>Example 4</li>
		</ul>
	</body>
</html>
```

File [`/test-assets/non-visual-reference-alternative-9bd38c/columns.css`](https://w3.org/WAI/content-assets/wcag-act-rules/test-assets/non-visual-reference-alternative-9bd38c/columns.css):

```css
.col-container {
	display: table;
	width: 100%;
}
.col {
	display: table-cell;
	padding: 16px;
}
```

</details>

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9bd38c/6edd8b8ec9bb14d8f35763e549f01cc21b3ef161.html">Open in a new tab</a>

This paragraph includes the [visual reference word][] "right". The content in the second column is identified with the word "right" but also identified by referencing the word "howdy", thus matching the **non-visual reference** condition.

```html
<html lang="en">
	<head>
		<title>Passed example 1 9bd38c</title>
		<link rel="stylesheet" type="text/css" href="/test-assets/non-visual-reference-alternative-9bd38c/columns.css" />
	</head>
	<body>
		<div class="col-container">
			<div class="col">
				<p>Click the button labelled "howdy", on the right, for a surprise</p>
			</div>
			<div class="col">
				<button onclick="alert('Surprise!')">Howdy</button>
			</div>
		</div>
	</body>
</html>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9bd38c/e871d671f9e22112d76505e07c6297f1605a844d.html">Open in a new tab</a>

This paragraph includes the [visual reference word][] "below" which can here be accurately interpreted as "further in the reading order". Hence, the paragraph matches the **non-sensory meaning** condition.

```html
<html lang="en">
	<p>Interact with the button below this paragraph, for a surprise</p>
	<button onclick="alert('Surprise!')">Howdy</button>
</html>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9bd38c/5c97d7f0e034132669260719d7ea5ae899990ad4.html">Open in a new tab</a>

This paragraph includes the [visual reference word][] "right". The visual reference made by the word "right" is complemented by the non-visual reference made by the word "menu" to the content identified by the "Menu" heading, thus matching the **non-visual reference** condition.

```html
<html lang="en">
	<head>
		<title>Passed example 3 9bd38c</title>
		<link rel="stylesheet" type="text/css" href="/test-assets/non-visual-reference-alternative-9bd38c/columns.css" />
	</head>
	<body>
		<div class="col-container">
			<div class="col">
				<p>Find the menu on the right, to navigate</p>
			</div>
			<div class="col">
				<h1>Menu</h1>
				<ul>
					<li>
						<a href="https://www.w3.org/Consortium/contact">Contact</a>
					</li>
					<li>
						<a href="https://www.w3.org/Help/">Help and FAQ</a>
					</li>
				</ul>
			</div>
		</div>
	</body>
</html>
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9bd38c/432e113b02825ed7fcfaac362f32aa6daa44a915.html">Open in a new tab</a>

This text includes the [visual reference word][] "tilted" and identifies web content (namely itself). But the text also includes the word "this" which makes it apparent that the description is about the same content, thus matching the **non-visual reference** condition.

```html
<html lang="en">
	<head>
		<title>Passed example 4 9bd38c</title>
		<style>
			div.tilt {
				height: 750px;
				width: 150px;
				-ms-transform: rotate(20deg); /* IE 9 */
				-webkit-transform: rotate(20deg); /* Safari 3-8 */
				transform: rotate(20deg);
			}
		</style>
	</head>
	<body>
		<div class="tilt">Search this pieCe of tiLted text fOr clueS on whEre to find The monster.</div>
	</body>
</html>
```

#### Passed Example 5

<a class="example-link" title="Passed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9bd38c/82e2fbab97b00d55b198c4a2b8914341a2ea1131.html">Open in a new tab</a>

This paragraph includes the [visual reference word][] "round". The button is identified by this word which is also included in the [visible text content][] of the element, thus matching the **visible words** condition.

```html
<html lang="en">
	<head>
		<title>Passed example 5 9bd38c</title>
		<link rel="stylesheet" type="text/css" href="/test-assets/non-visual-reference-alternative-9bd38c/columns.css" />
	</head>
	<body>
		<div class="col-container">
			<div class="col">
				<p>Click the round button, for a surprise</p>
			</div>
			<div class="col">
				<button style="border-radius: 50%; height: 100px; width: 100px;" onclick="alert('Surprise!')">
					Round button
				</button>
			</div>
		</div>
	</body>
</html>
```

#### Passed Example 6

<a class="example-link" title="Passed Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9bd38c/09eef7b7b29e82e2902cb09afe8102af365276d4.html">Open in a new tab</a>

This paragraph includes the [visual reference word][] "triangle" which is included in the heading of the menu, thus matching the **visible words** condition. The fact that the described content is on another page of the same website does not restrict this rule.

```html
<html lang="en">
	<p>
		On the
		<a href="/test-assets/non-visual-reference-alternative-9bd38c/triangle-menu-with-heading.html">information page</a>
		you can find more examples within the triangle menu.
	</p>
</html>
```

#### Passed Example 7

<a class="example-link" title="Passed Example 7" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9bd38c/d9e9bc689ec574b6788279af9e433a0abd4a2c62.html">Open in a new tab</a>

This paragraph includes the [visual reference words][] "wide" and "narrow". The images are indicated by these words which are also included in the [accessible names][accessible name] of the images, thus matching the **accessible words** condition.

```html
<html lang="en">
	<p>The wide image is awesome. The narrow image isn't.</p>
	<img
		scr="/test-assets/non-visual-reference-alternative-9bd38c/awesome_wide.jfif"
		alt="Wide photo of an awesome landscape."
	/>
	<img
		scr="/test-assets/non-visual-reference-alternative-9bd38c/non_awesome_narrow.jpg"
		alt="Narrow photo of a dull landscape."
	/>
</html>
```

#### Passed Example 8

<a class="example-link" title="Passed Example 8" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9bd38c/1f4772b7324aedad632f34d1158f349f00812db0.html">Open in a new tab</a>

This paragraph includes the [visual reference words][] "square" and "right" but in this case they are not identifying any [web content][].

```html
<html lang="en">
	<p>A square is a regular quadrilateral with four equal sides and four right angles.</p>
</html>
```

#### Passed Example 9

<a class="example-link" title="Passed Example 9" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9bd38c/4b4ad8012cb0399cf60658adbdfebfc09b5dbbf3.html">Open in a new tab</a>

This paragraph includes the [visual reference word][] "circle" but in this case it is not an instruction about any [web content][], thus matching the **no instruction** condition.

```html
<html lang="en">
	<p>
		This circle is nice.
		<span
			role="presentation"
			style="height: 25px;
		     width: 25px;
		     background-color: #bbb;
		     border-radius: 50%;
		     display: inline-block;"
		>
		</span>
	</p>
</html>
```

#### Passed Example 10

<a class="example-link" title="Passed Example 10" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9bd38c/f435059abb93ebf8727962b7601eae3cacad532b.html">Open in a new tab</a>

This paragraph includes the [visual reference word][] "star" but there is also a heading "examples" that can be referenced, thus matching the **non-visual references** condition. The fact that the identified content is in an `iframe` does not restrict this rule.

```html
<html lang="en">
	<p>More examples can be found when you look underneath the star or you can search for the "Examples" heading</p>
	<iframe title="star" src="/test-assets/non-visual-reference-alternative-9bd38c/star-with-heading.html"></iframe>
</html>
```

#### Passed Example 11

<a class="example-link" title="Passed Example 11" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9bd38c/dcc4ce96f7930eae43e20af69cb33038b64a2f4d.html">Open in a new tab</a>

This paragraph includes the [visual reference word][] "right". The content in the second column is identified with the word "right" but also identified by referencing the word "howdy", thus matching the **non-visual reference** condition. Note that, despite the fact that the text is not visible, this example is applicable because it is included in the accessibility tree.

```html
<html lang="en">
	<head>
		<title>Passed example 11 9bd38c</title>
		<link rel="stylesheet" type="text/css" href="/test-assets/non-visual-reference-alternative-9bd38c/columns.css" />
	</head>
	<body>
		<div class="col-container">
			<div class="col">
				<p style="position:absolute; top:-9999em">Click the button labelled "howdy", on the right, for a surprise</p>
			</div>
			<div class="col">
				<button onclick="alert('Surprise!')">Howdy</button>
			</div>
		</div>
	</body>
</html>
```

#### Passed Example 12

<a class="example-link" title="Passed Example 12" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9bd38c/4be9e2292ade4f8d8c3eae6f6765ac365a9eba74.html">Open in a new tab</a>

This paragraph includes the [visual reference word][] "green". The content in the second column is identified with the word "green" but also identified by referencing the word "howdy", thus matching the **non-visual reference** condition. Note that, despite the fact that the text is not included in the accessibility tree, this example is applicable because it is visible.

```html
<html lang="en">
	<head>
		<title>Passed example 12 9bd38c</title>
		<link rel="stylesheet" type="text/css" href="/test-assets/non-visual-reference-alternative-9bd38c/columns.css" />
	</head>
	<body>
		<div class="col-container">
			<div class="col">
				<p aria-hidden="true">Click the green button labelled "howdy" for a surprise</p>
			</div>
			<div class="col">
				<button style="background-color: green" onclick="alert('Surprise!')">Howdy</button>
			</div>
		</div>
	</body>
</html>
```

#### Passed Example 13

<a class="example-link" title="Passed Example 13" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9bd38c/ba67863826af41061dd4e55c5ad1fe4a5d741092.html">Open in a new tab</a>

This paragraph includes the [visual reference word][] "right". The user is told to find the navigation on the right and the navigation is also correctly identified by a `nav` element whose [accessible name][] contains the word "navigation", thus matching the **non-visual reference** condition.

```html
<html lang="en">
	<head>
		<title>Passed example 13 9bd38c</title>
		<link rel="stylesheet" type="text/css" href="/test-assets/non-visual-reference-alternative-9bd38c/columns.css" />
	</head>
	<body>
		<div class="col-container">
			<div class="col">
				<p>Find the navigation on the right, for the non-essential links</p>
			</div>
			<nav>
				<div class="col">
					<ul>
						<li>
							<a href="https://www.w3.org/Consortium/contact">Contact</a>
						</li>
						<li>
							<a href="https://www.w3.org/Help/">Help and FAQ</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	</body>
</html>
```

#### Passed Example 14

<a class="example-link" title="Passed Example 14" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9bd38c/b1ea0d4d1bb1b2edc85aa84e424b57d5545c705d.html">Open in a new tab</a>

No [text node][] on this page includes any of the [visual reference words][].

```html
<html lang="en">
	<p>Click the button, for a surprise</p>
	<button onclick="alert('Surprise!')">Howdy</button>
</html>
```

#### Passed Example 15

<a class="example-link" title="Passed Example 15" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9bd38c/d76ef447c5266fed36f05cbe00cf2a11b649f652.html">Open in a new tab</a>

No [text node][] on this page includes any of the [visual reference words][]. The word "square" in French (the language of the page) never has the meaning of the geometrical figure. Hence, it is not the translation of any of the [visual reference words][]. The sentence means "After school, he's taking his kids to the public garden."

```html
<html lang="fr">
	<p>
		Après l'école, il emmène ses enfants jouer au square.
	</p>
</html>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9bd38c/e25c4256ff639ea16f196a9b9fedcdabba540125.html">Open in a new tab</a>

This paragraph includes the [visual reference word][] "right". The user is told to find the menu on the right but the menu is not identified in any other way.

```html
<html lang="en">
	<head>
		<title>Failed example 1 9bd38c</title>
		<link rel="stylesheet" type="text/css" href="/test-assets/non-visual-reference-alternative-9bd38c/columns.css" />
	</head>
	<body>
		<div class="col-container">
			<div class="col">
				<p>Find the menu on the right, to navigate</p>
			</div>
			<div class="col">
				<ul>
					<li>
						<a href="https://www.w3.org/Consortium/contact">Contact</a>
					</li>
					<li>
						<a href="https://www.w3.org/Help/">Help and FAQ</a>
					</li>
				</ul>
			</div>
		</div>
	</body>
</html>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9bd38c/83cffb1ea6a8411d7c4a021e64f4dead893f4875.html">Open in a new tab</a>

This paragraph includes the [visual reference word][] "right". The user is told to find the navigation on the right and the navigation is correctly identified by a `nav` element, but there are 2 `nav` elements on the page so the user doesn't know which one to use (the non-visual reference is ambiguous and does not identify a specific [web content][]).

```html
<html lang="en">
	<head>
		<title>Failed example 2 9bd38c</title>
		<link rel="stylesheet" type="text/css" href="/test-assets/non-visual-reference-alternative-9bd38c/columns.css" />
	</head>
	<body>
		<nav>
			<ul>
				<li>
					<a href="https://www.w3.org/">W3C homepage</a>
				</li>
				<li>
					<a href="https://www.w3.org/standards/">Standards</a>
				</li>
			</ul>
		</nav>
		<div class="col-container">
			<div class="col">
				<p>Find the navigation on the right, for the non-essential links</p>
			</div>
			<nav>
				<div class="col">
					<ul>
						<li>
							<a href="https://www.w3.org/Consortium/contact">Contact</a>
						</li>
						<li>
							<a href="https://www.w3.org/Help/">Help and FAQ</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	</body>
</html>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9bd38c/1527ef77130c2971dc36758bdc903e4f469715a5.html">Open in a new tab</a>

This paragraph includes the [visual reference word][] "triangle" (which is not included in the identified content) and no other indication is present so the rule fails. The fact that the triangle menu is on a different page of the same website does not restrict the rule.

```html
<html lang="en">
	<body>
		<p>
			On the
			<a href="/test-assets/non-visual-reference-alternative-9bd38c/triangle-menu-without-heading.html"
				>information page</a
			>
			you can find more examples within the triangle menu
		</p>
	</body>
</html>
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9bd38c/b98e3574a99c86e8cc5b63c6f85868ab4427f4e9.html">Open in a new tab</a>

This paragraph includes the [visual reference word][] "star" (which is not included in the identified content) and there is no other indication. The content described is in an `iframe`.

```html
<html lang="en">
	<body>
		<p>More examples can be found when you look underneath the star</p>
		<iframe src="/test-assets/non-visual-reference-alternative-9bd38c/star-without-heading.html"></iframe>
	</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9bd38c/8ffada5cb337c6481f65a1b0c0fc318f0695fd56.html">Open in a new tab</a>

This image link contains no [text node][].

```html
<html lang="en">
	<a href="https://act-rules.github.io/"><img src="test-assets/shared/act-logo.png" alt="ACT rules"/></a>
</html>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9bd38c/547eb8bf40d515cb7e8f35259af350bd7a92019c.html">Open in a new tab</a>

This document contains no [text node][] that is either [visible][] or [included in the accessibility tree][].

```html
<html lang="en">
	<div style="display:none">
		<p>Click the box, for a surprise</p>
		<button onclick="alert('Surprise!')">Howdy</button>
	</div>
</html>
```

## Glossary

### Accessible Name {#accessible-name}

The _accessible name_ is the programmatically determined name of a user interface element that is [included in the accessibility tree](#included-in-the-accessibility-tree).

The accessible name is calculated using the [accessible name and description computation][].

For native markup languages, such as HTML and SVG, additional information on how to calculate the accessible name can be found in [HTML Accessibility API Mappings 1.0, Accessible Name and Description Computation (working draft)](https://www.w3.org/TR/html-aam/#accessible-name-and-description-computation) and [SVG Accessibility API Mappings, Name and Description (working draft)](https://www.w3.org/TR/svg-aam/#mapping_additional).

For more details, see [examples of accessible name][].

**Note:** As per the [accessible name and description computation][], each element always has an accessible name. When no accessible name is provided, the element will nonetheless be assigned an empty (`""`) one.

**Note:** As per the [accessible name and description computation][], accessible names are [flat string](https://www.w3.org/TR/accname-1.1/#terminology) trimmed of leading and trailing whitespace. Notably, it is not possible for a non-empty accessible name to be composed only of whitespace since these must be trimmed.

### Focusable {#focusable}

An element is _focusable_ if one or both of the following are true:

- the element is part of [sequential focus navigation][]; or
- the element has a [tabindex value][] that is not null.

**Exception**: Elements that lose focus and do not regain focus during a period of up to 1 second after gaining focus, without the user interacting with the page the element is on, are not considered _focusable_.

Notes:

- The 1 second time span is an arbitrary limit which is not included in WCAG. Given that scripts can manage the focus state of elements, testing the focusability of an element consistently would be impractical without a time limit.
- The [tabindex value][] of an element is the value of the [tabindex attribute][] parsed using the [rules for parsing integers][]. For the [tabindex value][] to be different from null, it needs to be [parsed][rules for parsing integers] without errors.

### Included in the accessibility tree {#included-in-the-accessibility-tree}

Elements included in the accessibility tree of platform specific accessibility APIs are exposed to assistive technologies. This allows users of assistive technology to access the elements in a way that meets the requirements of the individual user.

The general rules for when elements are included in the accessibility tree are defined in the [core accessibility API mappings](https://www.w3.org/TR/core-aam/). For native markup languages, such as HTML and SVG, additional rules for when elements are included in the accessibility tree can be found in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/) and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/).

For more details, see [examples of included in the accessibility tree][].

[Programmatically hidden](#programmatically-hidden) elements are removed from the accessibility tree. However, some browsers will leave [focusable](#focusable) elements with an `aria-hidden` attribute set to `true` in the accessibility tree. Because they are hidden, these elements are considered **not** included in the accessibility tree. This may cause confusion for users of assistive technologies because they may still be able to interact with these focusable elements using sequential keyboard navigation, even though the element should not be included in the accessibility tree.

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

### Programmatically Hidden {#programmatically-hidden}

An HTML element is _programmatically hidden_ if either it has a [computed][] CSS property `visibility` whose value is not `visible`; or at least one of the following is true for any of its [inclusive ancestors][] in the [flat tree][]:

- has a [computed][] CSS property `display` of `none`; or
- has an `aria-hidden` attribute set to `true`

**Note**: Contrary to the other conditions, the `visibility` CSS property may be reverted by descendants.

**Note**: The [HTML standard suggests](https://html.spec.whatwg.org/multipage/rendering.html#hidden-elements) setting the CSS `display` property to `none` for elements with the `hidden` attribute. While not required by HTML, all modern browsers follow this suggestion. Because of this the `hidden` attribute is not used in this definition. In browsers that use this suggestion, overriding the CSS `display` property can reveal elements with the `hidden` attribute.

### Visible {#visible}

Content perceivable through sight.

Content is considered _visible_ if making it fully transparent would result in a difference in the pixels rendered for any part of the document that is currently within the viewport or can be brought into the viewport via scrolling.

[Content is defined in WCAG](https://www.w3.org/TR/WCAG22/#dfn-content).

For more details, see [examples of visible](https://act-rules.github.io/pages/examples/visible/).

### Visible Text Content {#visible-text-content}

The _visible text content_ of an [element][] is a set of all [visible][] [text nodes][] that are [descendants][] in the [flat tree][] of this element

### Visual Reference Words {#visual-reference-words}

Any word in a text node that is included in the translated version of the following lists, where the language of the translation is the programmatically determinable language of the text node. Some words can be translated in multiple ways or have plural forms. In such cases each translation or form must be included. Some words can be spelled in multiple ways (For example: sometimes the word is capitalized and sometimes it isn't). In such cases each spelling must be included.

**Note:** This list is not exhaustive. As soon as more visual reference words are found they can be added to this list.

Visual location:

- Above
- Below
- Beneath
- Beside
- Bottom
- Diagonal
- Down
- Left
- Near
- Nearby
- Parallel
- Right
- Top
- Under
- Underneath
- Up

Shape:

- Box
- Circle
- Circular
- Crescent
- Cross
- Diamond
- Disc
- Ellipse
- Heart
- Hexagon
- Hexagonal
- Kite
- Oval
- Parallelogram
- Pentagon
- Pentagonal
- Polygon
- Polygonal
- Rectangle
- Rectangular
- Round
- Square
- Squared
- Star
- Trapezoid
- Trapezoidal
- Triangle
- Triangular
- Wave

Size:

- Big
- Large
- Little
- Narrow
- Small
- Tiny
- Wide

Orientation:

- Angled
- Askew
- Atilt
- Crooked
- Listing
- Lopsided
- off-kilter
- Pitched
- Rotated
- Sideways
- Skewed
- Slanted
- Slanting
- Straight
- Tilt
- Tilted
- Tipped

Color

- Any single word color name in the [X11 standard](https://gitlab.freedesktop.org/xorg/app/rgb/raw/master/rgb.txt), omitting duplicates:
  - Almond
  - Aqua
  - Aquamarine
  - Azure
  - Beige
  - Bisque
  - Black
  - Blue
  - Brown
  - Burlywood
  - Chartreuse
  - Chiffon
  - Chocolate
  - Coral
  - Cornsilk
  - Cream
  - Crimson
  - Cyan
  - Firebrick
  - Fuchsia
  - Gold
  - Goldenrod
  - Gray
  - Green
  - Honeydew
  - Indigo
  - Ivory
  - Khaki
  - Lace
  - Lavender
  - Lemon
  - Lime
  - Linen
  - Magenta
  - Maroon
  - Mint
  - Moccasin
  - Olive
  - Orange
  - Orchid
  - Pink
  - Purple
  - Red
  - Rose
  - Salmon
  - Turquoise
  - Violet
  - White
  - Yellow

[accessible name and description computation]: https://www.w3.org/TR/accname 'Accessible Name and Description Computation'
[accessible name]: #accessible-name 'Definition of Accessible Name'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[descendants]: https://dom.spec.whatwg.org/#concept-tree-descendant 'DOM tree descendant, 2020/08/18'
[earl10-schema]: https://www.w3.org/TR/act-rules-format-1.1/#biblio-earl10-schema
[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2020/08/18'
[examples of accessible name]: https://act-rules.github.io/pages/examples/accessible-name/
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[outcome property]: https://www.w3.org/TR/EARL10-Schema/#outcome
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[sc131]: https://www.w3.org/TR/WCAG22/#info-and-relationships 'Success Criterion 1.3.1 Info and Relationships'
[sc133]: https://www.w3.org/TR/WCAG22/#sensory-characteristics 'Success Criterion 1.3.3 Sensory Characteristics'
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[test subject]: https://www.w3.org/TR/act-rules-format-1.1/#test-subject
[test target]: https://www.w3.org/TR/act-rules-format/#test-target
[text node]: https://dom.spec.whatwg.org/#text 'Specification of Text Node'
[text nodes]: https://dom.spec.whatwg.org/#text 'DOM text, 2020/08/18'
[text]: https://www.w3.org/TR/WCAG22/#dfn-text 'WCAG definition of Text'
[visible text content]: #visible-text-content 'Definition of Visible Text Content'
[visible]: #visible 'Definition of Visible'
[visual reference word]: #visual-reference-words 'Definition of Visual Reference Words'
[visual reference words]: #visual-reference-words 'Definition of Visual Reference Words'
[web content]: https://www.w3.org/TR/WCAG22/#dfn-content 'WCAG definition of Web Content'
[web page]: https://www.w3.org/TR/WCAG22/#dfn-web-page-s 'WCAG definition of Web Page'
