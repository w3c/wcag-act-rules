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
  <p><strong>Date:</strong> Updated 19 January 2026</p>
  <p><strong>Authors:</strong> <a href="https://github.com/wilcofiers">Wilco Fiers</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule conforms to <a href="https://www.w3.org/TR/act-rules-format-1.1/">ACT Rules Format 1.1</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
  
  <p><strong>Assets:</strong> Test cases use assets from the following sources: W3C; HTML and W3C logo; Wikimedia; Fireworks image; Adobe; PDF logo</p>
proposed: true
rule_meta:
  id: qt1vmo
  name: "Image accessible name is descriptive"
  rule_type: atomic
  original_file: image-accessible-name-descriptive-qt1vmo.md
  description: |
    This rule checks that the accessible names of images serve an equivalent purpose to the image.
  last_modified: 19 January 2026
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

## Background

### Assumptions

There are no assumptions.

### Accessibility Support

Some popular browser / screen reader combinations do not pronounce the accessible names of `svg` elements. This can be resolved by adding an [explicit semantic role][] of `img` to the `svg` element.

### Other Resources

- [Understanding Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html)
- [G94: Providing short text alternative for non-text content that serves the same purpose and presents the same information as the non-text content](https://www.w3.org/WAI/WCAG22/Techniques/general/G94)
- [G95: Providing short text alternatives that provide a brief description of the non-text content](https://www.w3.org/WAI/WCAG22/Techniques/general/G95)
- [F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)](https://www.w3.org/WAI/WCAG22/Techniques/failures/F30)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>1.1.1 Non-text Content (Level A)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG22/#non-text-content">Learn more about 1.1.1 Non-text Content</a></li>
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
      <li><a href="https://www.w3.org/WAI/WCAG22/Techniques/general/G94">Learn more about technique G94</a></li>
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
      <li><a href="https://www.w3.org/WAI/WCAG22/Techniques/general/G95">Learn more about technique G95</a></li>
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

## Examples

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/qt1vmo/af4423575333947073fa3729f502ff0a0c6c2fbf.html">Open in a new tab</a>

This `img` element has an `alt` attribute that describes the image.

```html
<html lang="en">
	<img src="/test-assets/shared/w3c-logo.png" alt="W3C logo" />
</html>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/qt1vmo/5d314574052bf16676abb0e9a67e48dd70116c2e.html">Open in a new tab</a>

This `svg` element has an `aria-label` attribute that describes the HTML5 logo image.

```html
<html lang="en">
	<svg viewBox="0 0 512 512" aria-label="HTML 5 logo" role="img">
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

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/qt1vmo/2a66c7b8d8ef78d350b1c995e0ad232008f6564f.html">Open in a new tab</a>

This `canvas` element has an `aria-label` attribute that describes the W3C logo image.

```html
<html lang="en">
	<canvas id="logo" width="72" height="48" aria-label="W3C logo"></canvas>
	<script>
		const img = new Image()
		img.src = '/test-assets/shared/w3c-logo.png'
		img.onload = function() {
			const ctx = document.querySelector('#logo').getContext('2d')
			ctx.drawImage(img, 0, 0)
		}
	</script>
</html>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/qt1vmo/485f10faf222cd48fea2ab3ee79c2d354e51ea33.html">Open in a new tab</a>

This `img` element has an `alt` attribute that incorrectly describes the image.

```html
<html lang="en">
	<img src="/test-assets/shared/w3c-logo.png" alt="ERCIM logo" />
</html>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/qt1vmo/2f7d82593e287df64b7459695e355a840254255c.html">Open in a new tab</a>

This `svg` element has an `aria-label` attribute that incorrectly describes the image (the `aria-label` is "W3C" but the actual image is the HTML5 logo).

```html
<html lang="en">
	<svg viewBox="0 0 512 512" aria-label="W3C" role="img">
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

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/qt1vmo/bac67a5a2ada971100bbec89961ad3e6c869f268.html">Open in a new tab</a>

This `canvas` element has an `aria-label` attribute that incorrectly describes the image (the `aria-label` is "HTML5 logo" but the actual image is the W3C logo).

```html
<html lang="en">
	<canvas id="logo" width="72" height="48" aria-label="HTML 5 logo"></canvas>
	<script>
		const img = new Image()
		img.src = '/test-assets/shared/w3c-logo.png'
		img.onload = function() {
			const ctx = document.querySelector('#logo').getContext('2d')
			ctx.drawImage(img, 0, 0)
		}
	</script>
</html>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/qt1vmo/0ab8d652533229aae98191a6a43c2168e1959963.html">Open in a new tab</a>

This `img` element has an empty (`""`) [accessible name][]. The image is described by the adjacent text.

```html
<img src="/test-assets/shared/pdf-icon.png" alt="" /> PDF document
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/qt1vmo/ce2c30787caebdf1d6adcd6aedfac8fa8842a9c4.html">Open in a new tab</a>

This decorative `img` element has an empty (`""`) [accessible name][] because it has no attributes or content to provide an accessible name.

```html
<html lang="en">
	<p>Happy new year!</p>
	<img src="/test-assets/shared/fireworks.jpg" role="presentation" />
</html>
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/qt1vmo/4629221e66963f356b68f6e17dacea9a937fe7d3.html">Open in a new tab</a>

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

<a class="example-link" title="Inapplicable Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/qt1vmo/9f373a7eca6b3dc1089e76fa275cdb63c7a8d4b6.html">Open in a new tab</a>

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

<a class="example-link" title="Inapplicable Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/qt1vmo/2e1787fbc8a76fd8a2f8cae08d72097dab75abfd.html">Open in a new tab</a>

This `img` element is not [visible][].

```html
<html lang="en">
	<img src="/test-assets/shared/w3c-logo.png" alt="W3C logo" style="display:none" />
</html>
```

#### Inapplicable Example 6

<a class="example-link" title="Inapplicable Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/qt1vmo/e3fa823fa9ba97ac106cc8d13f2ba7e771cb9c75.html">Open in a new tab</a>

This `canvas` element is not [visible][] because it is completely transparent.

```html
<html lang="en">
	<canvas width="200" height="200"></canvas>
</html>
```

#### Inapplicable Example 7

<a class="example-link" title="Inapplicable Example 7" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/qt1vmo/4d04a4946e1f06834c89b91f0a765367f9d0d492.html">Open in a new tab</a>

This `img` element has no [accessible name][] because it is not [included in the accessibility tree][].

```html
<html lang="en">
	<img aria-hidden="true" src="/test-assets/shared/fireworks.jpg" alt="fireworks" />
</html>
```

#### Inapplicable Example 8

<a class="example-link" title="Inapplicable Example 8" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/qt1vmo/d5ce8939312a4c283084d0a7fdc7dd4cf6b35d4f.html">Open in a new tab</a>

This `svg` element is ignored because it is a child of a link that provides its [accessible name][].

```html
<a href="https://w3.org" aria-label="W3C Website">
	<svg height="200" xmlns="http://www.w3.org/2000/svg" aria-label="star">
		<polygon points="100,10 40,180 190,60 10,60 160,180" fill="yellow" />
	</svg>
</a>
```

#### Inapplicable Example 9

<a class="example-link" title="Inapplicable Example 9" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/qt1vmo/8ff1c1f8ce6c58b66365fd70f6828a89527874e3.html">Open in a new tab</a>

This `img` element has a `src` attribute which will cause the [image request state][] to be [Broken](https://html.spec.whatwg.org/#img-error).

```html
<img src="/test-assets/does-not-exist.png" alt="" />
```

#### Inapplicable Example 10

<a class="example-link" title="Inapplicable Example 10" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/qt1vmo/a09270ba161c0259b258844551e94c40cdd6b52e.html">Open in a new tab</a>

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

For more details, see [examples of visible](https://www.w3.org/WAI/standards-guidelines/act/rules/terms/visible/examples/).

### WAI-ARIA specifications {#wai-aria-specifications}

The _WAI ARIA Specifications_ group both the WAI ARIA W3C Recommendation and ARIA modules, namely:

- [Accessible Rich Internet Applications (WAI-ARIA) 1.2](https://www.w3.org/TR/wai-aria-1.2/)
- [WAI-ARIA Graphics Module 1.0](https://www.w3.org/TR/graphics-aria-1.0/)
- [Digital Publishing WAI-ARIA Module 1.0](https://www.w3.org/TR/dpub-aria-1.0/)

**Note:** depending on the type of content being evaluated, part of the specifications might be irrelevant and should be ignored.

[accessibility support base line]: https://www.w3.org/TR/WCAG-EM/#step1c 'Definition of accessibility support base line'
[accessible name and description computation]: https://www.w3.org/TR/accname 'Accessible Name and Description Computation'
[accessible name]: #accessible-name 'Definition of accessible name'
[ancestor]: https://dom.spec.whatwg.org/#concept-tree-ancestor 'DOM definition of ancestor, 2020/03/06'
[completely available]: https://html.spec.whatwg.org/#img-all 'HTML definition of Completely available, 2020/03/06'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[current request]: https://html.spec.whatwg.org/#current-request 'HTML definition of Current request, 2020/03/06'
[earl10-schema]: https://www.w3.org/TR/act-rules-format-1.1/#biblio-earl10-schema
[examples of accessible name]: https://www.w3.org/WAI/standards-guidelines/act/rules/terms/accessible-name/examples/
[examples of included in the accessibility tree]: https://www.w3.org/WAI/standards-guidelines/act/rules/terms/included-in-the-accessibility-tree/examples/
[explicit semantic role]: #explicit-role
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS Scoping definition of Flat tree, working draft'
[image request state]: https://html.spec.whatwg.org/#img-req-state 'HTML definition of Image request state, 2020/03/06'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[named from author]: https://www.w3.org/TR/wai-aria-1.2/#namecalculation 'WAI-ARIA definition of Named from author'
[non-text content]: https://www.w3.org/TR/WCAG22/#dfn-non-text-content 'WCAG 2.2 definition of non-text content'
[outcome property]: https://www.w3.org/TR/EARL10-Schema/#outcome
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[test subject]: https://www.w3.org/TR/act-rules-format-1.1/#test-subject
[test target]: https://www.w3.org/TR/act-rules-format/#test-target
[visible]: #visible 'Definition of visible'
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
