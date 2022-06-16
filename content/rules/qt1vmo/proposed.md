---
title: "Image accessible name is descriptive"
permalink: /standards-guidelines/act/rules/qt1vmo/proposed/
ref: /standards-guidelines/act/rules/qt1vmo/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/qt1vmo/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> qt1vmo</p>
  <p><strong>Date:</strong> Updated 13 June 2022</p>
  <p><strong>Authors:</strong> <a href="https://github.com/wilcofiers">Wilco Fiers</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
  
  <p><strong>Assets:</strong> Test cases use assets from the following sources: W3C; HTML and W3C logo; Wikimedia; Fireworks image; Adobe; PDF logo</p>
proposed: true
rule_meta:
  id: qt1vmo
  name: "Image accessible name is descriptive"
  rule_type: atomic
  description: |
    This rule checks that the accessible names of images serve an equivalent purpose to the image.
  last_modified: 13 June 2022
  scs_tested:
    - handle: Non-text Content
      num: 1.1.1
      level: A
---

## Applicability

This rule applies to any `img`, `canvas` or `svg` element that is [visible][] and has a non-empty [accessible name][], except if one or more of the following is true:

- The element has an [ancestor][] in the [flat tree][] that is [named from author][]; or
- The element is an `img` element where the [current request][]'s [state][image request state] is not [completely available][].

## Expectation

Each test target has an [accessible name][] that serves an equivalent purpose to the [non-text content][] of that test target.

## Assumptions

This rule assumes that the language of the [accessible name][] of each test target can be correctly determined (either programmatically or by analyzing the content).

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

### Bibliography

- [Understanding Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html)
- [G94: Providing short text alternative for non-text content that serves the same purpose and presents the same information as the non-text content](https://www.w3.org/WAI/WCAG21/Techniques/general/G94)
- [G95: Providing short text alternatives that provide a brief description of the non-text content](https://www.w3.org/WAI/WCAG21/Techniques/general/G95)
- [F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)](https://www.w3.org/WAI/WCAG21/Techniques/failures/F30)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>1.1.1 Non-text Content (Level A)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#non-text-content">Learn more about 1.1.1 Non-text Content</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level A and higher.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>G94: Providing short text alternative for non-text content that serves the same purpose and presents the same information as the non-text content</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G94">Learn more about technique G94</a></li>
      <li>Not required for conformance to any W3C accessibility recommendation.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: technique is not satisfied</li>
        <li>All <code>passed</code> outcomes: technique needs further testing</li>
        <li>An <code>inapplicable</code> outcome: technique needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>G95: Providing short text alternatives that provide a brief description of the non-text content</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G95">Learn more about technique G95</a></li>
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
- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)
- [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)
- [Language](https://www.w3.org/TR/act-rules-aspects/#input-aspects-text)

## Test Cases

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/qt1vmo/2616e8486562f08449b710b8a5dc9846474af000.html">Open in a new tab</a>

This `img` element has an `alt` attribute that describes the image.

```html
<html lang="en">
	<img src="/test-assets/shared/w3c-logo.png" alt="W3C" />
</html>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/qt1vmo/75ab2815efda6d9422fcf1edc5876fcb5e398a84.html">Open in a new tab</a>

This `svg` element has an `aria-label` attribute that describes the image.

```html
<html lang="en">
	<svg viewBox="0 0 512 512" aria-label="HTML 5">
		<path
			d="M108.4 0h23v22.8h21.2V0h23v69h-23V46h-21v23h-23.2M206 23h-20.3V0h63.7v23H229v46h-23M259.5 0h24.1l14.8 24.3L313.2 0h24.1v69h-23V34.8l-16.1 24.8l-16.1-24.8v34.2h-22.6M348.7 0h23v46.2h32.6V69h-55.6"
		/>
		<path fill="#e44d26" d="M107.6 471l-33-370.4h362.8l-33 370.2L255.7 512" />
		<path fill="#f16529" d="M256 480.5V131H404.3L376 447" />
		<path
			fill="#ebebeb"
			d="M142 176.3h114v45.4h-64.2l4.2 46.5h60v45.3H154.4M156.4 336.3H202l3.2 36.3 50.8 13.6v47.4l-93.2-26"
		/>
		<path fill="#fff" d="M369.6 176.3H255.8v45.4h109.6M361.3 268.2H255.8v45.4h56l-5.3 59-50.7 13.6v47.2l93-25.8" />
	</svg>
</html>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/qt1vmo/68e50a217d9f01ccd5bfd4f3ad4227b163165297.html">Open in a new tab</a>

This `canvas` element has an `aria-label` attribute that describes the image.

```html
<html lang="en">
	<canvas id="logo" width="72" height="48" aria-label="W3C"></canvas>
	<script>
		const img = new Image();
		img.src = '/test-assets/shared/w3c-logo.png';
		img.onload = function () {
			const ctx = document.querySelector('#logo').getContext('2d');
			ctx.drawImage(img, 0, 0);
		}
	</script>
</html>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/qt1vmo/f3fa0aa13747875284429e759c8e94ac6b3fac8f.html">Open in a new tab</a>

This `img` element has an `alt` attribute that incorrectly describes the image.

```html
<html lang="en">
	<img src="/test-assets/shared/w3c-logo.png" alt="ERCIM" />
</html>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/qt1vmo/5cdb41b3b9be43fd015bf4692ea295f87cb7e02f.html">Open in a new tab</a>

This `svg` element has an `aria-label` attribute that incorrectly describes the image.

```html
<html lang="en">
	<svg viewBox="0 0 512 512" aria-label="W3C">
		<path
			d="M108.4 0h23v22.8h21.2V0h23v69h-23V46h-21v23h-23.2M206 23h-20.3V0h63.7v23H229v46h-23M259.5 0h24.1l14.8 24.3L313.2 0h24.1v69h-23V34.8l-16.1 24.8l-16.1-24.8v34.2h-22.6M348.7 0h23v46.2h32.6V69h-55.6"
		/>
		<path fill="#e44d26" d="M107.6 471l-33-370.4h362.8l-33 370.2L255.7 512" />
		<path fill="#f16529" d="M256 480.5V131H404.3L376 447" />
		<path
			fill="#ebebeb"
			d="M142 176.3h114v45.4h-64.2l4.2 46.5h60v45.3H154.4M156.4 336.3H202l3.2 36.3 50.8 13.6v47.4l-93.2-26"
		/>
		<path fill="#fff" d="M369.6 176.3H255.8v45.4h109.6M361.3 268.2H255.8v45.4h56l-5.3 59-50.7 13.6v47.2l93-25.8" />
	</svg>
</html>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/qt1vmo/954441755d9b745f7fc533a8ccfc895d40e9005d.html">Open in a new tab</a>

This `canvas` element has an `aria-label` attribute that incorrectly describes the image.

```html
<html lang="en">
	<canvas id="logo" width="72" height="48" aria-label="HTML 5"></canvas>
	<script>
		const img = new Image();
		img.src = '/test-assets/shared/w3c-logo.png';
		img.onload = function () {
			const ctx = document.querySelector('#logo').getContext('2d');
			ctx.drawImage(img, 0, 0);
		}
	</script>
</html>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/qt1vmo/0ab8d652533229aae98191a6a43c2168e1959963.html">Open in a new tab</a>

This `img` element has an empty (`""`) [accessible name][]. The image is described by the adjacent text.

```html
<img src="/test-assets/shared/pdf-icon.png" alt="" /> PDF document
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/qt1vmo/ce2c30787caebdf1d6adcd6aedfac8fa8842a9c4.html">Open in a new tab</a>

This decorative `img` element has an empty (`""`) [accessible name][] because it has no attributes or content to provide an accessible name.

```html
<html lang="en">
	<p>Happy new year!</p>
	<img src="/test-assets/shared/fireworks.jpg" role="presentation" />
</html>
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/qt1vmo/4629221e66963f356b68f6e17dacea9a937fe7d3.html">Open in a new tab</a>

This `svg` element has an empty (`""`) [accessible name][] because it has no attributes or content to provide an accessible name.

```html
<html lang="en">
	<p>Happy new year!</p>
	<svg height="200" xmlns="http://www.w3.org/2000/svg">
		<polygon points="100,10 40,180 190,60 10,60 160,180" fill="yellow" />
	</svg>
</html>
```

#### Inapplicable Example 4

<a class="example-link" title="Inapplicable Example 4" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/qt1vmo/9f373a7eca6b3dc1089e76fa275cdb63c7a8d4b6.html">Open in a new tab</a>

This `canvas` element has an empty (`""`) [accessible name][] because it has no attributes or content to provide an accessible name.

```html
<html lang="en">
	<p>Happy new year!</p>
	<canvas id="newyear" width="200" height="200"></canvas>
	<script>
		const ctx = document.querySelector('#newyear').getContext('2d')
		ctx.fillStyle = 'yellow'
		ctx.beginPath()
		ctx.moveTo(100, 10)
		ctx.lineTo(40, 180)
		ctx.lineTo(190, 60)
		ctx.lineTo(10, 60)
		ctx.lineTo(160, 180)
		ctx.fill()
	</script>
</html>
```

#### Inapplicable Example 5

<a class="example-link" title="Inapplicable Example 5" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/qt1vmo/efd997470e600544174476e95116bdac100f368b.html">Open in a new tab</a>

This `img` element is not [visible][].

```html
<html lang="en">
	<img src="/test-assets/shared/w3c-logo.png" alt="W3C" style="display:none" />
</html>
```

#### Inapplicable Example 6

<a class="example-link" title="Inapplicable Example 6" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/qt1vmo/e3fa823fa9ba97ac106cc8d13f2ba7e771cb9c75.html">Open in a new tab</a>

This `canvas` element is not [visible][] because it is completely transparent.

```html
<html lang="en">
	<canvas width="200" height="200"></canvas>
</html>
```

#### Inapplicable Example 7

<a class="example-link" title="Inapplicable Example 7" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/qt1vmo/4d04a4946e1f06834c89b91f0a765367f9d0d492.html">Open in a new tab</a>

This `img` element has no [accessible name][] because it is not [included in the accessibility tree][].

```html
<html lang="en">
	<img aria-hidden="true" src="/test-assets/shared/fireworks.jpg" alt="fireworks" />
</html>
```

#### Inapplicable Example 8

<a class="example-link" title="Inapplicable Example 8" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/qt1vmo/d5ce8939312a4c283084d0a7fdc7dd4cf6b35d4f.html">Open in a new tab</a>

This `svg` element is ignored because it is a child of a link that provides its [accessible name][].

```html
<a href="https://w3.org" aria-label="W3C Website">
	<svg height="200" xmlns="http://www.w3.org/2000/svg" aria-label="star">
		<polygon points="100,10 40,180 190,60 10,60 160,180" fill="yellow" />
	</svg>
</a>
```

#### Inapplicable Example 9

<a class="example-link" title="Inapplicable Example 9" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/qt1vmo/8ff1c1f8ce6c58b66365fd70f6828a89527874e3.html">Open in a new tab</a>

This `img` element has a `src` attribute which will cause the [image request state][] to be [Broken](https://html.spec.whatwg.org/#img-error).

```html
<img src="/test-assets/does-not-exist.png" alt="" />
```

#### Inapplicable Example 10

<a class="example-link" title="Inapplicable Example 10" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/qt1vmo/a09270ba161c0259b258844551e94c40cdd6b52e.html">Open in a new tab</a>

This is a `div` element with a background image. Background images must be tested separate from this rule.

```html
<p>Happy new year!</p>
<div
	style="
	width: 260px;
	height: 260px;
	background: url(/test-assets/shared/fireworks.jpg) no-repeat;
"
></div>
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

**Exception**: Elements that lose focus during a period of up to 1 second after gaining focus, without the user interacting with the page the element is on, are not considered _focusable_.

Notes:

- The 1 second time span is an arbitrary limit which is not included in WCAG. Given that scripts can manage the focus state of elements, testing the focusability of an element consistently would be impractical without a time limit.
- The [tabindex value][] of an element is the value of the [tabindex attribute][] parsed using the [rules for parsing integers][]. For the [tabindex value][] to be different from null, it needs to be [parsed][rules for parsing integers] without errors.

### Included in the accessibility tree {#included-in-the-accessibility-tree}

Elements included in the accessibility tree of platform specific accessibility APIs are exposed to assistive technologies. This allows users of assistive technology to access the elements in a way that meets the requirements of the individual user.

The general rules for when elements are included in the accessibility tree are defined in the [core accessibility API mappings](https://www.w3.org/TR/core-aam/). For native markup languages, such as HTML and SVG, additional rules for when elements are included in the accessibility tree can be found in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/) and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/).

For more details, see [examples of included in the accessibility tree][].

[Programmatically hidden](#programmatically-hidden) elements are removed from the accessibility tree. However, some browsers will leave [focusable](#focusable) elements with an `aria-hidden` attribute set to `true` in the accessibility tree. Because they are hidden, these elements are considered **not** included in the accessibility tree. This may cause confusion for users of assistive technologies because they may still be able to interact with these focusable elements using sequential keyboard navigation, even though the element should not be included in the accessibility tree.

### Outcome {#outcome}

An _outcome_ is a conclusion that comes from evaluating an ACT Rule on a [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) or one of its constituent [test target](https://www.w3.org/TR/act-rules-format/#test-target). An outcome can be one of the three following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) meets all expectations
- **Failed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) does not meet all expectations

**Note:** A rule has one `passed` or `failed` outcome for every [test target](https://www.w3.org/TR/act-rules-format/#test-target). When there are no test targets the rule has one `inapplicable` outcome. This means that each [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) will have one or more outcomes.

**Note:** Implementations using the [EARL10-Schema](https://www.w3.org/TR/EARL10-Schema/) can express the outcome with the [outcome property](https://www.w3.org/TR/EARL10-Schema/#outcome). In addition to `passed`, `failed` and `inapplicable`, EARL 1.0 also defined an `incomplete` outcome. While this cannot be the outcome of an ACT Rule when applied in its entirety, it often happens that rules are only partially evaluated. For example, when applicability was automated, but the expectations have to be evaluated manually. Such "interim" results can be expressed with the `incomplete` outcome.

### Programmatically Hidden {#programmatically-hidden}

An HTML element is _programmatically hidden_ if either it has a [computed][] CSS property `visibility` whose value is not `visible`; or at least one of the following is true for any of its [inclusive ancestors][] in the [flat tree][]:

- has a [computed][] CSS property `display` of `none`; or
- has an `aria-hidden` attribute set to `true`

**Note**: Contrary to the other conditions, the `visibility` CSS property may be reverted by descendants.

**Note**: The [HTML standard suggests](https://html.spec.whatwg.org/multipage/rendering.html#hidden-elements) setting the CSS `display` property to `none` for elements with the `hidden` attribute. While not required by HTML, all modern browsers follow this suggestion. Because of this the `hidden` attribute is not used in this definition. In browsers that use this suggestion, overriding the CSS `display` property can reveal elements with the `hidden` attribute.

### Visible {#visible}

Content perceivable through sight.

Content is considered _visible_ if making it fully transparent would result in a difference in the pixels rendered for any part of the document that is currently within the viewport or can be brought into the viewport via scrolling.

[Content is defined in WCAG](https://www.w3.org/TR/WCAG21/#dfn-content).

For more details, see [examples of visible](https://act-rules.github.io/pages/examples/visible/).

{% include_relative _implementation-proposed.md %}

## Changelog

This is the first version of this ACT rule.

[accessible name and description computation]: https://www.w3.org/TR/accname 'Accessible Name and Description Computation'
[accessible name]: #accessible-name 'Definition of accessible name'
[ancestor]: https://dom.spec.whatwg.org/#concept-tree-ancestor 'DOM definition of ancestor, 2020/03/06'
[completely available]: https://html.spec.whatwg.org/#img-all 'HTML definition of Completely available, 2020/03/06'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[current request]: https://html.spec.whatwg.org/#current-request 'HTML definition of Current request, 2020/03/06'
[examples of accessible name]: https://act-rules.github.io/pages/examples/accessible-name/
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS Scoping definition of Flat tree, working draft'
[image request state]: https://html.spec.whatwg.org/#img-req-state 'HTML definition of Image request state, 2020/03/06'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[named from author]: https://www.w3.org/TR/wai-aria-1.1/#namecalculation 'WAI-ARIA definition of Named from author'
[non-text content]: https://www.w3.org/TR/WCAG21/#dfn-non-text-content 'WCAG 2.1 definition of non-text content'
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[visible]: #visible 'Definition of visible'
