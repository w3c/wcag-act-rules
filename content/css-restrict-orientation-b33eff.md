---
title: "Orientation of the page is not restricted using CSS transform property"
permalink: /standards-guidelines/act/rules/css-restrict-orientation-b33eff/
ref: /standards-guidelines/act/rules/css-restrict-orientation-b33eff/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/css-restrict-orientation-b33eff.md
footer: |
  <p><strong>Date:</strong> Updated August 24th, 2021</p>
  <p><strong>Authors:</strong> <a href="https://github.com/audreymaniez">Audrey Maniez</a>, <a href="https://github.com/jkodu">Jey Nandakumar</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules community group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>.</p>
proposed: true
rule_meta:
  id: b33eff
  name: "Orientation of the page is not restricted using CSS transform property"
  rule_type: atomic
  description: |
    This rule checks that page content is not restricted to either `landscape` or `portrait` orientation using CSS transform property.
  accessibility_requirements:
    'wcag21:1.3.4':
      forConformance: true
      failed: not satisfied
      passed: further testing needed
      inapplicable: further testing needed
  input_aspects:
    - handle: DOM Tree
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom
    - handle: CSS Styling
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-css
  last_modified: August 24th, 2021
  scs_tested:
    - handle: Orientation
      num: 1.3.4
      level: AA
---

## Applicability

This rule applies to any HTML element that is [visible](#visible) and has a CSS [transform](https://www.w3.org/TR/css-transforms/#propdef-transform) property that is applied conditionally on the [orientation](https://www.w3.org/TR/css3-mediaqueries/#orientation) [media feature](https://www.w3.org/TR/css3-mediaqueries/#media1) with a value of `landscape` or `portrait`, where the CSS [transform](https://www.w3.org/TR/css-transforms/#propdef-transform) property has any of the below [transformation functions](https://www.w3.org/TR/css-transforms/#transform-functions):

- [rotate](https://www.w3.org/TR/css-transforms/#funcdef-transform-rotate)
- [rotate3d](https://drafts.csswg.org/css-transforms-2/#funcdef-rotate3d)
- [rotateZ](https://drafts.csswg.org/css-transforms-2/#funcdef-rotatez)
- [matrix](https://www.w3.org/TR/css-transforms/#funcdef-transform-matrix)
- [matrix3d](https://drafts.csswg.org/css-transforms-2/#funcdef-matrix3d)

**Note:** These specific [transformation functions](https://www.w3.org/TR/css-transforms/#transform-functions) are of interest to this rule as they have the potential to affect the [rotation](https://drafts.csswg.org/css-transforms-2/#Rotate3dDefined) of a given element.

**Note:** The [rotate3d](https://drafts.csswg.org/css-transforms-2/#funcdef-rotate3d), [rotateZ](https://drafts.csswg.org/css-transforms-2/#funcdef-rotatez) and [matrix3d](https://drafts.csswg.org/css-transforms-2/#funcdef-matrix3d) are currently part of a [W3C](https://www.w3.org/) Editor's Draft.

## Expectation

The target element is neither rotated clockwise nor counter clockwise around the Z-axis at an angle corresponding to 90 degrees relative from the position of the element in `landscape` orientation to the position of the element in `portrait` orientation, and vice versa.

**Note:** Imagine the display of a smartphone with cartoon figure at its center. With this example, if a user turns the smartphone a quarter turn, that is a partial move from one orientation to the other, the user would expect that the cartoon figure continues to remain facing upwards. The smartphone accomplishes this by rotating the contents of its display a quarter turn to counter the users change in orientation. In effect, the cartoon figure has remained in place and its rotation relative from one orientation to the other is 0 degrees. Now imagine that a developer facilitated this rotation of the cartoon figure by a quarter turn _only_ when the smartphone starts from one orientation and not the other; its rotation relative from one orientation to the other would then be 90 degrees and it would appear stuck, or locked, as the user moves between orientations. What the developer has done is effectively counter the smartphones attempt at countering the users change in orientation.

## Assumptions

This rule does not consider and may produce incorrect results for:

- Elements for which a particular display orientation is [essential](https://www.w3.org/TR/WCAG21/#dfn-essential).
- The existence of any control on the page that can change the orientation on demand.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 1.3.4: Orientation](https://www.w3.org/WAI/WCAG21/Understanding/orientation.html)
- [CSS Transforms Module Level 1](https://www.w3.org/TR/css-transforms/#funcdef-transform-matrix)
- [CSS Transforms Module Level 2](https://drafts.csswg.org/css-transforms-2)
- [CSS3 Media Queries](https://www.w3.org/TR/css3-mediaqueries/)
- [Managing screen orientation](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [Orientation](https://www.w3.org/TR/css3-mediaqueries/#orientation)
- [The Transform Rendering Model](https://drafts.csswg.org/css-transforms/#transform-rendering)

## Test Cases

### Passed

#### Passed Example 1

A page where CSS [transform](https://www.w3.org/TR/css-transforms/#propdef-transform) property has [rotateZ](https://drafts.csswg.org/css-transforms-2/#funcdef-rotatez) [transform function](https://www.w3.org/TR/css-transforms/#transform-functions) conditionally applied on the [orientation](https://www.w3.org/TR/css3-mediaqueries/#orientation) [media feature](https://www.w3.org/TR/css3-mediaqueries/#media1) which does not restrict the element to either `portrait` or `landscape` orientation.

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

A page where CSS [transform](https://www.w3.org/TR/css-transforms/#propdef-transform) property has [matrix](https://www.w3.org/TR/css-transforms/#funcdef-transform-matrix) [transform function](https://www.w3.org/TR/css-transforms/#transform-functions) conditionally applied on the [orientation](https://www.w3.org/TR/css3-mediaqueries/#orientation) [media feature](https://www.w3.org/TR/css3-mediaqueries/#media1) which does not restrict the element to either `portrait` or `landscape` orientation.

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

### Failed

#### Failed Example 1

A page where CSS [transform](https://www.w3.org/TR/css-transforms/#propdef-transform) property has [rotate](https://www.w3.org/TR/css-transforms/#funcdef-transform-rotate) [transform function](https://www.w3.org/TR/css-transforms/#transform-functions) conditionally applied on the [orientation](https://www.w3.org/TR/css3-mediaqueries/#orientation) [media feature](https://www.w3.org/TR/css3-mediaqueries/#media1) which restricts the element to `landscape` orientation.

```html
<html lang="en">
	<head>
		<title>Page with some content</title>
		<style>
			@media (orientation: portrait) {
				html {
					transform: rotate(1.5708rad);
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

A page where CSS [transform](https://www.w3.org/TR/css-transforms/#propdef-transform) property has [matrix3d](https://drafts.csswg.org/css-transforms-2/#funcdef-matrix3d) [transform function](https://www.w3.org/TR/css-transforms/#transform-functions) conditionally applied on the [orientation](https://www.w3.org/TR/css3-mediaqueries/#orientation) [media feature](https://www.w3.org/TR/css3-mediaqueries/#media1) which restricts the element to `portrait` orientation.

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

This page appears rotated at a slight angle of 2.5 degrees for stylistic purposes, but is locked in portrait orientation by applying a 92.5 degree rotation when in landscape orientation:

```html
<html lang="en">
	<head>
		<title>Page with some content</title>
		<style>
			body {
				transform: rotate(2.5deg);
			}

			@media (orientation: landscape) {
				body {
					transform: rotate(92.5deg);
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

A page where CSS [transform](https://www.w3.org/TR/css-transforms/#propdef-transform) property is not applied conditionally on the [orientation](https://www.w3.org/TR/css3-mediaqueries/#orientation) [media feature](https://www.w3.org/TR/css3-mediaqueries/#media1).

```html
<html lang="en">
	<head>
		<title>Page with some content</title>
		<style>
			body {
				transform: rotate(90deg);
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

[Content is defined in WCAG](https://www.w3.org/TR/WCAG21/#dfn-content).

For more details, see [examples of visible](https://act-rules.github.io/pages/examples/visible/).

{% include_relative implementations/b33eff.md %}

## Changelog

This is the first version of this ACT rule.


