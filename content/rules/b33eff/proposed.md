---
title: "Orientation of the page is not restricted using CSS transforms"
permalink: /standards-guidelines/act/rules/b33eff/proposed/
ref: /standards-guidelines/act/rules/b33eff/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/b33eff/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> b33eff</p>
  <p><strong>Date:</strong> Updated 25 January 2024</p>
  <p><strong>Authors:</strong> <a href="https://github.com/audreymaniez">Audrey Maniez</a>, <a href="https://github.com/jkodu">Jey Nandakumar</a>, Tom Brunet. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: b33eff
  name: "Orientation of the page is not restricted using CSS transforms"
  rule_type: atomic
  original_file: css-restrict-orientation-b33eff.md
  description: |
    This rule checks that page content is not restricted to either `landscape` or `portrait` orientation using CSS transforms
  last_modified: 25 January 2024
  scs_tested:
    - handle: Orientation
      num: 1.3.4
      level: AA
---

## Applicability

This rule applies to any [HTML element][] that is [visible](#visible) and has one of the following CSS properties applied conditionally on the [orientation](https://www.w3.org/TR/css3-mediaqueries/#orientation) [media feature](https://www.w3.org/TR/css3-mediaqueries/#media1) with a value of `landscape` or `portrait`:

- the CSS [rotate](https://www.w3.org/TR/css-transforms-2/#individual-transforms) property; or
- the CSS [transform](https://www.w3.org/TR/css-transforms/#propdef-transform) property with any of the below [transformation functions](https://www.w3.org/TR/css-transforms/#transform-functions):

  - [rotate](https://www.w3.org/TR/css-transforms/#funcdef-transform-rotate)
  - [rotate3d](https://www.w3.org/TR/css-transforms-2/#funcdef-rotate3d)
  - [rotateZ](https://www.w3.org/TR/css-transforms-2/#funcdef-rotatez)
  - [matrix](https://www.w3.org/TR/css-transforms/#funcdef-transform-matrix)
  - [matrix3d](https://www.w3.org/TR/css-transforms-2/#funcdef-matrix3d)

**Note:** These specific [transformation functions](https://www.w3.org/TR/css-transforms/#transform-functions) are of interest to this rule as they have the potential to affect the [rotation](https://www.w3.org/TR/css-transforms-2/#Rotate3dDefined) of a given element.

**Note:** The [rotate](https://www.w3.org/TR/css-transforms-2/#individual-transforms) property and the [rotate3d](https://www.w3.org/TR/css-transforms-2/#funcdef-rotate3d), [rotateZ](https://www.w3.org/TR/css-transforms-2/#funcdef-rotatez) and [matrix3d](https://www.w3.org/TR/css-transforms-2/#funcdef-matrix3d) transform functions are currently part of a [W3C](https://www.w3.org/) Working Draft and widely implemented in browsers.

## Expectation

The target element is neither rotated clockwise nor counter clockwise around the Z-axis at an angle corresponding to 90 degrees relative from the position of the element in `landscape` orientation to the position of the element in `portrait` orientation, and vice versa.

**Note:** Imagine the display of a smartphone with cartoon figure at its center. With this example, if a user turns the smartphone a quarter turn, that is a partial move from one orientation to the other, the user would expect that the cartoon figure continues to remain facing upwards. The smartphone accomplishes this by rotating the contents of its display a quarter turn to counter the users change in orientation. In effect, the cartoon figure has remained in place and its rotation relative from one orientation to the other is 0 degrees. Now imagine that a developer facilitated this rotation of the cartoon figure by a quarter turn _only_ when the smartphone starts from one orientation and not the other; its rotation relative from one orientation to the other would then be 90 degrees and it would appear stuck, or locked, as the user moves between orientations. What the developer has done is effectively counter the smartphone's attempt at countering the user's change in orientation.

## Assumptions

This rule does not consider and may produce incorrect results for:

- Elements for which a particular display orientation is [essential](https://www.w3.org/TR/WCAG22/#dfn-essential).
- The existence of any control on the page that can change the orientation on demand.
- Scripts are not used to adjust the CSS orientation lock.

## Accessibility Support

There are no accessibility support issues known.

## Background

### Bibliography

- [Understanding Success Criterion 1.3.4: Orientation](https://www.w3.org/WAI/WCAG22/Understanding/orientation.html)
- [CSS Transforms Module Level 1](https://www.w3.org/TR/css-transforms/#funcdef-transform-matrix)
- [CSS Transforms Module Level 2](https://www.w3.org/TR/css-transforms-2)
- [CSS3 Media Queries](https://www.w3.org/TR/css3-mediaqueries/)
- [Managing screen orientation](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [Orientation](https://www.w3.org/TR/css3-mediaqueries/#orientation)
- [The Transform Rendering Model](https://drafts.csswg.org/css-transforms/#transform-rendering)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>1.3.4 Orientation (Level AA)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#orientation">Learn more about 1.3.4 Orientation</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.1 on level AA and higher.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
</ul>

## Input Aspects

The following aspects are required in using this rule.

- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)
- [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)

## Test Cases

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b33eff/0b392e6774d063a24241c3629113909e98c98607.html">Open in a new tab</a>

A page where CSS [transform](https://www.w3.org/TR/css-transforms/#propdef-transform) property has [rotateZ](https://www.w3.org/TR/css-transforms-2/#funcdef-rotatez) [transform function](https://www.w3.org/TR/css-transforms/#transform-functions) conditionally applied on the [orientation](https://www.w3.org/TR/css3-mediaqueries/#orientation) [media feature](https://www.w3.org/TR/css3-mediaqueries/#media1) which does not restrict the element to either `portrait` or `landscape` orientation.

```html
<html lang="en">
	<head>
		<title>Page with some content</title>
		<style>
			@media (orientation: portrait) {
				html {
					transform: rotateZ(1turn);
				}
			}
		</style>
	</head>
	<body>
		<main>
			Page Content
		</main>
	</body>
</html>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b33eff/405d1e8fb50b36ae53c655c228126a078e591d3b.html">Open in a new tab</a>

A page where CSS [transform](https://www.w3.org/TR/css-transforms/#propdef-transform) property has [matrix](https://www.w3.org/TR/css-transforms/#funcdef-transform-matrix) [transform function](https://www.w3.org/TR/css-transforms/#transform-functions) conditionally applied on the [orientation](https://www.w3.org/TR/css3-mediaqueries/#orientation) [media feature](https://www.w3.org/TR/css3-mediaqueries/#media1) which does not restrict the element to either `portrait` or `landscape` orientation.

**Note:** The extremely small number in the transform function below is included to ensure testing methodologies correctly interpret the impacts of the transformation and are not simply looking for 0.

```html
<html lang="en">
	<head>
		<title>Page with some content</title>
		<style>
			@media (orientation: portrait) {
				html {
					transform: matrix(1, -1.22465e-15, 1.22465e-15, 1, 0, 0);
				}
			}
		</style>
	</head>
	<body>
		<main>
			Page Content
		</main>
	</body>
</html>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b33eff/4fa1ac6e6c6c65a3cc17e144823e45ff30f428bb.html">Open in a new tab</a>

A page where the CSS [rotate](https://www.w3.org/TR/css-transforms-2/#individual-transforms) property has a 0 degree rotation conditionally applied on the [orientation](https://www.w3.org/TR/css3-mediaqueries/#orientation) [media feature](https://www.w3.org/TR/css3-mediaqueries/#media1) which does not restrict the element to either `portrait` or `landscape` orientation.

```html
<html lang="en">
	<head>
		<title>Page with some content</title>
		<style>
			@media (orientation: portrait) {
				html {
					rotate: 0turn;
				}
			}
		</style>
	</head>
	<body>
		<main>
			Page Content
		</main>
	</body>
</html>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b33eff/3b2f386c66ccb9c1a9a848017dab9b074afbf858.html">Open in a new tab</a>

A page where CSS [transform](https://www.w3.org/TR/css-transforms/#propdef-transform) property has [rotate](https://www.w3.org/TR/css-transforms/#funcdef-transform-rotate) [transform function](https://www.w3.org/TR/css-transforms/#transform-functions) conditionally applied on the [orientation](https://www.w3.org/TR/css3-mediaqueries/#orientation) [media feature](https://www.w3.org/TR/css3-mediaqueries/#media1) which restricts the element to `landscape` orientation.

```html
<html lang="en">
	<head>
		<title>Page with some content</title>
		<style>
			@media (orientation: portrait) {
				html {
					transform: rotate(1.5708rad);
					width: min(100vw, 100vh);
					height: min(100vw, 100vh);
				}
			}
		</style>
	</head>
	<body>
		Page Content
	</body>
</html>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b33eff/388f97562ae3b7e3aec7ad6305df36a91b68cf77.html">Open in a new tab</a>

A page where CSS [transform](https://www.w3.org/TR/css-transforms/#propdef-transform) property has [matrix3d](https://www.w3.org/TR/css-transforms-2/#funcdef-matrix3d) [transform function](https://www.w3.org/TR/css-transforms/#transform-functions) conditionally applied on the [orientation](https://www.w3.org/TR/css3-mediaqueries/#orientation) [media feature](https://www.w3.org/TR/css3-mediaqueries/#media1) which restricts the element to `portrait` orientation.

```html
<html lang="en">
	<head>
		<title>Page with some content</title>
		<style>
			@media (orientation: landscape) {
				body {
					transform: matrix3d(0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
				}
			}
		</style>
	</head>
	<body>
		Page Content
	</body>
</html>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b33eff/93ad10ce32325be5b7c8cbaec7254d55e8fb577c.html">Open in a new tab</a>

This page appears rotated at a slight angle of 2.5 degrees for stylistic purposes, but is locked in portrait orientation by applying a 92.5 degree rotation when in landscape orientation:

```html
<html lang="en">
	<head>
		<title>Page with some content</title>
		<style>
			body {
				transform: rotate(2.5deg);
				padding: 2rem;
				width: min(100vw, 100vh);
				height: min(100vw, 100vh);
			}

			@media (orientation: landscape) {
				body {
					transform: rotate(92.5deg);
					position: absolute;
					right: 0px;
				}
			}
		</style>
	</head>
	<body>
		Page Content
	</body>
</html>
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b33eff/8f341a73c698daf157613c32a521878ed5aa7310.html">Open in a new tab</a>

A page where the CSS [rotate](https://www.w3.org/TR/css-transforms-2/#individual-transforms) property has a 90 degree rotation conditionally applied on the [orientation](https://www.w3.org/TR/css3-mediaqueries/#orientation) [media feature](https://www.w3.org/TR/css3-mediaqueries/#media1) which restricts the element to `landscape` orientation.

```html
<html lang="en">
	<head>
		<title>Page with some content</title>
		<style>
			@media (orientation: portrait) {
				html {
					rotate: 90deg;
					width: min(100vw, 100vh);
					height: min(100vw, 100vh);
				}
			}
		</style>
	</head>
	<body>
		Page Content
	</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b33eff/c59f09b11f0743c523cc63ae3c827996889fa32d.html">Open in a new tab</a>

A page where there are no CSS styles.

```html
<html lang="en">
	<head>
		<title>Page with some content</title>
	</head>
	<body>
		I am a page with no styles
	</body>
</html>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b33eff/b8d71ae629b704bd374b0a2dcde569bd108c848e.html">Open in a new tab</a>

A page that has no CSS [transform](https://www.w3.org/TR/css-transforms/#propdef-transform) property specified.

```html
<html lang="en">
	<head>
		<title>Page with some content</title>
		<style>
			html {
				font-size: 22px;
			}
			@media (min-width: 30em) {
				font-size: 100%;
			}
		</style>
	</head>
	<body>
		Page Content
	</body>
</html>
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b33eff/5cde20e2acab8991c299a317825201af48bf5736.html">Open in a new tab</a>

A page where CSS [transform](https://www.w3.org/TR/css-transforms/#propdef-transform) property is applied to an element that is not [visible](#visible).

```html
<html lang="en">
	<head>
		<title>Page with some content</title>
		<style>
			@media (orientation: lanscape) {
				body {
					transform: rotateZ(0, 0, 1, 270deg);
				}
			}
		</style>
	</head>
	<body style="display:none;">
		<main>
			Page Content
		</main>
	</body>
</html>
```

#### Inapplicable Example 4

<a class="example-link" title="Inapplicable Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b33eff/4c34705d8d866194fd8fe96a0bd1abaf267b11f0.html">Open in a new tab</a>

A page where CSS [transform](https://www.w3.org/TR/css-transforms/#propdef-transform) property is not applied conditionally on the [orientation](https://www.w3.org/TR/css3-mediaqueries/#orientation) [media feature](https://www.w3.org/TR/css3-mediaqueries/#media1).

```html
<html lang="en">
	<head>
		<title>Page with some content</title>
		<style>
			body {
				transform: rotate(90deg);
				width: calc(min(100vw, 100vh) - 2rem);
				height: calc(min(100vw, 100vh) - 2rem);
				padding: 1rem;
			}
		</style>
	</head>
	<body>
		<main>
			Page Content
		</main>
	</body>
</html>
```

#### Inapplicable Example 5

<a class="example-link" title="Inapplicable Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b33eff/e228ac70387fe286917bce3028ae311269ae2f35.html">Open in a new tab</a>

A page where CSS [transform](https://www.w3.org/TR/css-transforms/#propdef-transform) property is conditionally applied on the [orientation](https://www.w3.org/TR/css3-mediaqueries/#orientation) [media feature](https://www.w3.org/TR/css3-mediaqueries/#media1), but does not have any of the applicable [transformation functions](https://www.w3.org/TR/css-transforms/#transform-functions) which restricts the element to either `landscape` or `portrait` orientation.

```html
<html lang="en">
	<head>
		<title>Page with some content</title>
		<style>
			@media (orientation: portrait) {
				body {
					transform: translateX(100px);
				}
			}
		</style>
	</head>
	<body>
		<main>
			Page Content
		</main>
	</body>
</html>
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

### Visible {#visible}

Content perceivable through sight.

Content is considered _visible_ if making it fully transparent would result in a difference in the pixels rendered for any part of the document that is currently within the viewport or can be brought into the viewport via scrolling.

[Content is defined in WCAG](https://www.w3.org/TR/WCAG22/#dfn-content).

For more details, see [examples of visible](https://act-rules.github.io/pages/examples/visible/).

[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[html element]: #namespaced-element
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
