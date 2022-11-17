---
title: "Image not in the accessibility tree is decorative"
permalink: /standards-guidelines/act/rules/e88epe/proposed/
ref: /standards-guidelines/act/rules/e88epe/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/e88epe/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> e88epe</p>
  <p><strong>Date:</strong> Updated 14 November 2022</p>
  <p><strong>Authors:</strong> <a href="https://www.linkedin.com/in/brianbors/">Brian Bors</a>, <a href="https://github.com/wilcofiers">Wilco Fiers</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
  
  <p><strong>Assets:</strong> Test cases use assets from the following sources: W3C; Wikimedia; Adobe</p>
proposed: true
rule_meta:
  id: e88epe
  name: "Image not in the accessibility tree is decorative"
  rule_type: atomic
  description: |
    This rule checks that visible `img`, `svg` and `canvas` elements that are ignored by assistive technologies are decorative.
  last_modified: 14 November 2022
  scs_tested:
    - handle: Non-text Content
      num: 1.1.1
      level: A
---

## Applicability

This rule applies to any `img`, `canvas` or `svg` element that is [visible][] and for which at least one of the following is true:

- **excluded**: The element is not [included in the accessibility tree][]; or
- **ignored svg**: The element is an `svg` with an empty (`""`) [accessible name][] and a [semantic role][] of `graphics-document`; or
- **ignored canvas**: The element is a `canvas` with an empty (`""`) [accessible name][] and no [explicit semantic role][]; or

**Exception**: This rule never applies to elements for which one or more of the following is true:

- The element has an [ancestor][] in the [flat tree][] that is [named from author][]; or
- The element is an `img` element where the [current request][]'s [state][image request state] is not [completely available][].

**Note**: An example of an image ignored because of an [ancestor][] with [named from author][] is when the image is a descendant of a `button` element that uses `aria-label` for its accessible name.

## Expectation

Each test target is [purely decorative][].

**Note**: It is relatively common for an informative image such as an icon to be marked up as decorative, if the text alternative is adjacent to the image. This is a [conforming alternative version][] for the image. This fails the rule but meets [conformance requirement 1 of WCAG 2.1](https://www.w3.org/TR/WCAG21/#cc1).

## Assumptions

- `svg` elements with a [semantic role][] of `graphics-document` and with an empty (`""`) [accessible name][] are ignored by assistive technologies tested for this rule. If some assistive technology does not ignore these elements, and that assistive technology is required for conformance, passing this rule does not ensure all decorative `svg` elements can be ignored, and the [success criterion 1.1.1 Non-text content][] may still not be satisfied. The same is true for `canvas` elements with no [semantic role][] and an empty (`""`) [accessible name][].

- A web page with informative images without an [accessible name][] may conform to WCAG 2.1 Level A when the information provided by that image is available elsewhere on the web page itself. For example if an equivalent text is adjacent to the image, or if the text alternative is included in the [accessible name][] of a parent element.

## Accessibility Support

There are no accessibility support issues known.

## Background

### Bibliography

- [H67: Using null alt text and no title attribute on img elements for images that AT should ignore](https://www.w3.org/WAI/WCAG21/Techniques/html/H67.html)
- [Understanding Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html)

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
</ul>

## Input Aspects

The following aspects are required in using this rule.

- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)
- [Accessibility tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-accessibility)
- [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)

## Test Cases

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/e88epe/9554e68de401c2912fd4895b6c062cd5ec2734b2.html">Open in a new tab</a>

This `img` element with an empty `alt` attribute which is not [included in the accessibility tree][] is [purely decorative][].

```html
<p>Happy new year!</p>
<img src="/test-assets/shared/fireworks.jpg" alt="" />
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/e88epe/2a5ee04e97e798e6e08c3afb92f3b44d49ac13fa.html">Open in a new tab</a>

This `img` element that is ignored by assistive technologies because `aria-hidden` is set to `true` is [purely decorative][].

```html
<p>Happy new year!</p>
<img src="/test-assets/shared/fireworks.jpg" aria-hidden="true" role="img" alt="" />
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/e88epe/57982b4d5dad90f3f2c06d5e0233694c46842bd0.html">Open in a new tab</a>

This `img` element that is ignored by assistive technologies because it has an [explicit semantic role][] of `none` is [purely decorative][].

```html
<p>Happy new year!</p>
<img src="/test-assets/shared/fireworks.jpg" role="none" alt="ignore me" />
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/e88epe/736b18e695a44e19b8acc1a858262b4b9309c2fc.html">Open in a new tab</a>

This `svg` element that is ignored by assistive technologies because it has no attribute that would give it an [accessible name][] is [purely decorative][].

```html
<p>Happy new year!</p>
<svg height="200" xmlns="http://www.w3.org/2000/svg">
	<polygon points="100,10 40,180 190,60 10,60 160,180" fill="yellow" />
</svg>
```

#### Passed Example 5

<a class="example-link" title="Passed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/e88epe/59911c86fd770ba2c98dc1c669f9003c2c7e71ac.html">Open in a new tab</a>

This `canvas` element that is ignored by assistive technologies because it has no attribute that would give it an [accessible name][] is [purely decorative][].

```html
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
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/e88epe/e5b8fa7ab66409e7b52b335a8b6aebe11fd78635.html">Open in a new tab</a>

This `img` element with an empty (`""`) `alt` is not [purely decorative][].

```html
<img src="/test-assets/shared/w3c-logo.png" alt="" />
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/e88epe/5d0c52f3b06b60f712efaa08eb6947f18494c241.html">Open in a new tab</a>

This `img` element which is not [included in the accessibility tree][] because `aria-hidden` is set to `true` is not [purely decorative][].

```html
<img src="/test-assets/shared/w3c-logo.png" aria-hidden="true" alt="W3C logo" />
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/e88epe/9ff50232e74195770418bcfb23c1508dfcef639a.html">Open in a new tab</a>

This `img` element which is not [included in the accessibility tree][] because it has an [explicit semantic role][] of `none` is not [purely decorative][].

```html
<img src="/test-assets/shared/w3c-logo.png" role="none" alt="W3C logo" />
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/e88epe/0d0061ffdf406f0d9b21aaa00f5d557e4137e0b2.html">Open in a new tab</a>

This `svg` element which has a [semantic role][] of `graphics-document` and an empty (`""`) [accessible name][] is not [purely decorative][].

```html
<p>Best W3C logo:</p>
<svg viewBox="0 0 512 512">
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
```

#### Failed Example 5

<a class="example-link" title="Failed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/e88epe/6d108d00cc7a54f66547f02d7e7606342b11f801.html">Open in a new tab</a>

This `canvas` element which has no [semantic role][] and an empty (`""`) [accessible name][] is not [purely decorative][].

```html
<canvas id="w3c" width="200" height="60"></canvas>
<script>
	const ctx = document.querySelector('#w3c').getContext('2d')
	ctx.font = '30px Arial'
	ctx.fillText('ACT Rules!', 20, 40)
</script>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/e88epe/ebd0080bacb8debc7ad069072240657df38c3e2c.html">Open in a new tab</a>

This `img` element is [included in the accessibility tree][] because the `alt` attribute is not empty (`""`).

```html
<img src="/test-assets/shared/w3c-logo.png" alt="W3C logo" />
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/e88epe/f9c84eeeb2ab4f07802f2739786dfda1d8f974a0.html">Open in a new tab</a>

This `img` element is neither [visible][] nor [included in the accessibility tree][].

```html
<img src="/test-assets/shared/w3c-logo.png" style="display:none" alt="" />
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/e88epe/410778b7d0c30044bfafed29789220f4b7ca98f1.html">Open in a new tab</a>

This `img` element is not [visible][] because it is positioned off screen.

```html
<style>
	img {
		position: absolute;
		top: -9999em;
	}
</style>
<img src="/test-assets/shared/fireworks.jpg" alt="" />
```

#### Inapplicable Example 4

<a class="example-link" title="Inapplicable Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/e88epe/921e2bffbdced6b00801da02f7dc674b9ee6203c.html">Open in a new tab</a>

This `svg` element is ignored because it is a child of a link that provides its [accessible name][].

```html
<a href="https://example.org" aria-label="SVG star">
	<svg height="200" xmlns="http://www.w3.org/2000/svg">
		<polygon points="100,10 40,180 190,60 10,60 160,180" fill="yellow" />
	</svg>
</a>
```

#### Inapplicable Example 5

<a class="example-link" title="Inapplicable Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/e88epe/41452bcdbcb440d3f741c74fcc885a93c68d63ce.html">Open in a new tab</a>

This `svg` element has a [semantic role][] of `img` and an [accessible name][] from its `aria-label` attribute.

```html
<svg viewBox="0 0 512 512" role="img" aria-label="HTML 5 logo">
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
```

#### Inapplicable Example 6

<a class="example-link" title="Inapplicable Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/e88epe/918a4aecd343530c1d3d2160b4015a74a5ad55f7.html">Open in a new tab</a>

This `canvas` element is not [visible][] because it is completely transparent.

```html
<canvas width="200" height="200"></canvas>
```

#### Inapplicable Example 7

<a class="example-link" title="Inapplicable Example 7" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/e88epe/5b2b8357b761ba5ad2753c322f3120442b0b8ab8.html">Open in a new tab</a>

This `canvas` element has a [semantic role][] of `img` and an [accessible name][] from its `aria-label` attribute.

```html
<canvas id="w3c" width="200" height="60" role="img" aria-label="ACT Rules!"></canvas>
<script>
	const ctx = document.querySelector('#w3c').getContext('2d')
	ctx.font = '30px Arial'
	ctx.fillText('ACT Rules!', 20, 40)
</script>
```

#### Inapplicable Example 8

<a class="example-link" title="Inapplicable Example 8" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/e88epe/5e61a02512d3de1b3b0c3f32b4f6c30634108e29.html">Open in a new tab</a>

This `img` element is [visible][] but [included in the accessibility tree][].

**Note**: While it might be better for the PDF icon to be ignored by assistive technologies, because assistive technologies will announce "PDF" twice, the image is not [purely decorative][]. Having assistive technologies ignore it is not required by [Success Criterion 1.1.1 Non-text content][].

```html
<img src="/test-assets/shared/pdf-icon.png" alt="PDF" /> PDF document
```

#### Inapplicable Example 9

<a class="example-link" title="Inapplicable Example 9" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/e88epe/a09270ba161c0259b258844551e94c40cdd6b52e.html">Open in a new tab</a>

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

#### Inapplicable Example 10

<a class="example-link" title="Inapplicable Example 10" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/e88epe/8ff1c1f8ce6c58b66365fd70f6828a89527874e3.html">Open in a new tab</a>

This `img` element has an `src` attribute which will cause the [image request state][] to be [Broken](https://html.spec.whatwg.org/#img-error).

```html
<img src="/test-assets/does-not-exist.png" alt="" />
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

Other roles may be added as they become available. Not all roles will be supported in all assistive technologies. Testers are encouraged to adjust which roles are allowed according to the [accessibility support base line][]. For the purposes of executing test cases in all rules, it should be assumed that all roles are supported by assistive technologies so that none of the roles fail due to lack of accessibility support.

### Focusable {#focusable}

An element is _focusable_ if one or both of the following are true:

- the element is part of [sequential focus navigation][]; or
- the element has a [tabindex value][] that is not null.

**Exception**: Elements that lose focus during a period of up to 1 second after gaining focus, without the user interacting with the page the element is on, are not considered _focusable_.

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

### Marked as decorative {#marked-as-decorative}

An element is _marked as decorative_ if one or more of the following conditions is true:

- it has an [explicit role][] of `none` or `presentation`; or
- it is an `img` element with an `alt` attribute whose value is the empty string (`alt=""`), and with no [explicit role][].

Elements are marked as decorative as a way to convey the intention of the author that they are [pure decoration][]. It is different from the element actually being [pure decoration][] as authors may make mistakes. It is different from the element being effectively ignored by assistive technologies as rules such as [presentational roles conflict resolution][] may overwrite this intention.

Elements can also be ignored by assistive technologies if they are [programmatically hidden][]. This is different from marking the element as decorative and does not convey the same intention. Notably, being [programmatically hidden][] may change as users interact with the page (showing and hiding elements) while being marked as decorative should stay the same through all states of the page.

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

### Semantic Role {#semantic-role}

The _semantic role_ of an element is determined by the first of these cases that applies:

1. **Conflict** If the element is [marked as decorative][], but the element is [included in the accessibility tree][]; or would be [included in the accessibility tree][] when it is not [programmatically hidden][], then its _semantic role_ is its **[implicit role][]**.
1. **Explicit** If the element has an [explicit role][], then its _semantic role_ is its [explicit role][].
1. **Implicit** The _semantic role_ of the element is its [implicit role][].

This definition can be used in expressions such as "semantic `button`" meaning any element with a semantic role of `button`.

### Visible {#visible}

Content perceivable through sight.

Content is considered _visible_ if making it fully transparent would result in a difference in the pixels rendered for any part of the document that is currently within the viewport or can be brought into the viewport via scrolling.

[Content is defined in WCAG](https://www.w3.org/TR/WCAG21/#dfn-content).

For more details, see [examples of visible](https://act-rules.github.io/pages/examples/visible/).

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
[conforming alternative version]: https://www.w3.org/TR/WCAG21/#dfn-conforming-alternate-version 'WCAG definition of Conforming alternative version'
[current request]: https://html.spec.whatwg.org/#current-request 'HTML definition of Current request, 2020/03/06'
[examples of accessible name]: https://act-rules.github.io/pages/examples/accessible-name/
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[explicit role]: #explicit-role 'Definition of Explicit Role'
[explicit semantic role]: #explicit-role 'Definition of Explicit semantic role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS Scoping definition of Flat tree, working draft'
[focusable]: #focusable 'Definition of Focusable'
[image request state]: https://html.spec.whatwg.org/#img-req-state 'HTML definition of Image request state, 2020/03/06'
[implicit role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the accessibility tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as Decorative'
[named from author]: https://www.w3.org/TR/wai-aria-1.1/#namecalculation 'WAI-ARIA definition of Named from author'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[programmatically hidden]: #programmatically-hidden 'Definition of Programmatically Hidden'
[pure decoration]: https://www.w3.org/TR/WCAG21/#dfn-pure-decoration 'WCAG definition of Pure Decoration'
[purely decorative]: https://www.w3.org/TR/WCAG21/#dfn-pure-decoration 'WCAG definition of Pure decoration'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[semantic role]: #semantic-role 'Definition of Semantic Role'
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[success criterion 1.1.1 non-text content]: https://www.w3.org/TR/WCAG21/#non-text-content
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[visible]: #visible 'Definition of Visible'
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
