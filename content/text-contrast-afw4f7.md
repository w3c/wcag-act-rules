---
title: "Text has minimum contrast"
permalink: /standards-guidelines/act/rules/text-contrast-afw4f7/
ref: /standards-guidelines/act/rules/text-contrast-afw4f7/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/text-contrast-afw4f7.md
footer: |
  <p><strong>Date:</strong> Updated 19 January 2022</p>
  <p><strong>Rule Identifier:</strong> afw4f7</p>
  <p><strong>Authors:</strong> <a href="https://www.linkedin.com/in/brianbors/">Brian Bors</a>, <a href="https://github.com/wilcofiers">Wilco Fiers</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules community group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>.</p>
proposed: true
rule_meta:
  id: afw4f7
  name: "Text has minimum contrast"
  rule_type: atomic
  description: |
    This rule checks that the highest possible contrast of every text character with its background meets the minimal contrast requirement.
  last_modified: 19 January 2022
  scs_tested:
    - handle: Contrast (Minimum)
      num: 1.4.3
      level: AA
    - handle: Contrast (Enhanced)
      num: 1.4.6
      level: AAA
---

## Applicability

This rule applies to any [visible][] character in a [text node][] that is a [child][] in the [flat tree][] of an [HTML element][], except if the [text node][] has an [ancestor][] in the [flat tree][] for which at least one of the following is true:

- **widget**: the ancestor is a [inheriting semantic][] `widget`; or
- **disabled label**: the ancestor is used in the [accessible name][] of a [inheriting semantic][] `widget` that is [disabled][]; or
- **disabled group**: the ancestor has a [semantic role][] of `group` and is [disabled][].

## Expectation

For each test target, the [highest possible contrast][] between the [foreground colors][] and [background colors][] is at least 4.5:1 or 3.0:1 for [larger scale text][], except if the test target is part of a [text node][] that is [purely decorative][] or does not express anything in [human language][].

## Assumptions

- [Success criterion 1.4.3: Contrast (Minimum)][sc143] has exceptions for "incidental" text, which includes inactive user interface components and decorative texts. The rule assumes that [text nodes][text node] that should be ignored are [disabled][] or hidden from assistive technologies. If this isn't the case, the text node could fail this rule while the success criterion could still be satisfied.

- [Success criterion 1.4.3: Contrast (Minimum)][sc143] also has an exception for logos and brand names. Since logos and brand names are usually displayed through images to ensure correct rendering, this rule does not take logos or brand names into consideration. If a logo or brand name is included using [text nodes][text node], the text node could fail while the success criterion could still be satisfied.

- Text that has the same foreground and background color (a contrast ratio of 1:1) is not considered to be "visual presentation of text", making it inapplicable to the success criterion. Text hidden in this way can still cause accessibility issues under other success criteria, depending on the content.

- The definition of [disabled element][disabled] assumes that when the `aria-disabled` attribute is specified on an element, this element has also been disabled for users that do not rely on [assistive technology][]. If this is not the case, that definition may produce incorrect results and in consequence this rule might be Inapplicable to some text nodes that still require a good contrast ratio.

## Accessibility Support

- Different browsers have different levels of support for CSS. This can cause contrast issues in one browser that do not appear in another. Because of that, this rule can produce different results depending on the browser that is used. For example, a text that is positioned using CSS transform may be on a different background in a browser that does not support CSS transform.
- Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have a [semantic role][] of `none` and fail this rule with some technology but users of other technologies would not experience any accessibility issue.

## Background

Passing this rule does not mean that the text has sufficient color contrast. If all background pixels have a low contrast with all foreground pixels, the success criterion is guaranteed to not be satisfied. When some pixels have sufficient contrast, and others do not, legibility should be considered. There is no clear method for determining legibility, which is why this is out of scope for this rule.

This rule is designed specifically for [1.4.3 Contrast (Minimum)][sc143], which has the expected contrast ratio of 4.5:1 (or 3:1 for large text). Because text that fails a contrast ratio of 4.5:1 also fails a contrast ratio of 7:1, this rule maps to [1.4.6 Contrast (Enhanced)][sc146] as well. In order to adequately test the [expectation](#expectation), some of the passed examples do not satisfy [1.4.6 Contrast (Enhanced)][sc146].

When the text color or background color is not specified in the web page, colors from other [origins][] will be used. Testers must ensure colors are not affected by styles from a [user origin][], such as a custom style sheet. Contrast issues caused by specifying the text color but not the background or vice versa, must be tested separately from this rule.

### Bibliography

- [Understanding Success Criterion 1.4.3: Contrast (Minimum)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html)
- [Understanding Success Criterion 1.4.6: Contrast (Enhanced)](https://www.w3.org/WAI/WCAG21/Understanding/contrast-enhanced.html)
- [G18: Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text](https://www.w3.org/WAI/WCAG21/Techniques/general/G18)
- [G145: Ensuring that a contrast ratio of at least 3:1 exists between text (and images of text) and background behind the text](https://www.w3.org/WAI/WCAG21/Techniques/general/G145)
- [F83: Failure of Success Criterion 1.4.3 and 1.4.6 due to using background images that do not provide sufficient contrast with foreground text (or images of text)](https://www.w3.org/WAI/WCAG21/Techniques/failures/F83)
- [CSS Scoping Module Level 1 (Editor's Draft)](https://drafts.csswg.org/css-scoping/)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details><summary>1.4.3 Contrast (Minimum) (Level AA)</summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#contrast-minimum">Learn more about 1.4.3 Contrast (Minimum)</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level AA and higher.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details><summary>1.4.6 Contrast (Enhanced) (Level AAA)</summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#contrast-enhanced">Learn more about 1.4.6 Contrast (Enhanced)</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level AAA.</li>
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

- [Accessibility Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-accessibility)
- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)
- [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)
- [Language](https://www.w3.org/TR/act-rules-aspects/#input-aspects-text)

## Test Cases

### Passed

#### Passed Example 1

This dark gray text has a contrast ratio of 12.6:1 on the white background.

```html
<p style="color: #333; background: #FFF;">
	Some text in a human language
</p>
```

#### Passed Example 2

This dark gray text has a contrast ratio between 12.6:1 and 5:1 on the white to blue gradient background.

```html
<p style="color: #333; background: linear-gradient(to right, #FFF, #00F); width: 500px;">
	Some text in a human language
</p>
```

#### Passed Example 3

This light gray text has a contrast ratio between 13:1 and 5:1 on the background image.

```html
<p
	style="color: #CCC; height:50px; padding-top:15px; background: #000 no-repeat -20px -20px url('/test-assets/contrast/black-hole.jpeg');"
>
	Black hole sun
</p>
```

#### Passed Example 4

This black text has a contrast ratio between 6.1:1 and 9:1 on gray background with white text shadow on it.

```html
<p style="color: #000; background: #737373; text-shadow: white 0 0 3px">
	Some text in a human language
</p>
```

#### Passed Example 5

This 18pt large black text has a contrast ratio of 3.6:1 on the gray background.

```html
<p style="color: #000; font-size:18pt; background: #666;">
	Some text in a human language
</p>
```

#### Passed Example 6

This 14pt bold black text has a contrast ratio of 3.6:1 on the gray background.

```html
<p style="color: #000; font-size:14pt; font-weight:700; background: #666;">
	Some text in English
</p>
```

#### Passed Example 7

This text does not convey anything in human language.

```html
<p style="color: #000; background: #666;">
	----=====++++++++___________***********%%%%%%%%%%%±±±±@@@@@@@@
</p>
```

#### Passed Example 8

This text has the default browser text color on the default browser background color. By default this is black text on a white background, which has a contrast ratio of 21:1.

```html
<p>Some text in a human language</p>
```

#### Passed Example 9

This dark gray text has a contrast ratio of 12.6:1 on the white background in a shadow DOM tree.

```html
<p style="color: #CCC; background: #fff;" id="p"></p>
<script>
	const shadowRoot = document.getElementById('p').attachShadow({ mode: 'open' })
	shadowRoot.innerHTML = '<span style="color: #333;">Some text in English</span>'
</script>
```

### Failed

#### Failed Example 1

This light gray text has a contrast ratio of 2.3:1 on the white background.

```html
<p style="color: #AAA; background: white;">
	Some text in English
</p>
```

#### Failed Example 2

This light gray text has a contrast ratio between 1.2:1 and 2.3:1 on the white to blue gradient background.

```html
<p style="color: #AAA; background: linear-gradient(to right, #FFF, #00F); width: 300px">
	Some text in English
</p>
```

#### Failed Example 3

This light gray text has a contrast ratio between 2.7:1 and 3:1 on the background image.

```html
<p
	style="color: #555; height:50px; padding-top:20px; background: black no-repeat -20px -20px url('/test-assets/contrast/black-hole.jpeg');"
>
	Black hole sun
</p>
```

#### Failed Example 4

This black text with 30% alpha channel has a contrast ratio of 2.1:1 on the white background.

```html
<p style="color: rgba(0,0,0,.3); background: #FFF">
	Some text in English
</p>
```

#### Failed Example 5

This black text with 30% opacity has a contrast ratio of 2.1:1 on the white background.

```html
<div style="background: #FFF">
	<p style="color: #000; opacity: .3">
		Some text in English
	</p>
</div>
```

#### Failed Example 6

This light gray text has a contrast ratio of 2.3:1 on the white background in a shadow DOM tree.

```html
<p style="color: #aaa; background: #fff;" id="p"></p>
<script>
	const shadowRoot = document.getElementById('p').attachShadow({ mode: 'open' })
	shadowRoot.textContent = 'Some text in English'
</script>
```

#### Failed Example 7

This semi-transparent gray text has a contrast ratio between 2.3:1 and 4.2:1 on the black and white background. The light gray text is compared to the white section of the background and the dark gray text is compared to the black section of the background.

```html
<style>
	#backgroundSplit {
		color: rgba(90, 90, 90, 0.8);
		background-position: top 0 left 0;
		background-image: linear-gradient(90deg, transparent, transparent 3.3em, black 3.3em, black 6em);
		padding: 0 1em;
	}
</style>
<span id="backgroundSplit">
	Hello world
</span>
```

#### Failed Example 8

The first `p` element has a contrast ratio of 12.6:1. The second `p` element, which contains an example of the Helvetica font, has a contrast ratio of 3.5:1. Because this provides information, and not only for aesthetic purposes, this is not considered [purely decorative][].

```html
<p style="color: #333; background: #FFF;">
	Helvetica is a widely used sans-serif typeface developed in 1957 by Max Miedinger and Eduard Hoffmann.
</p>
<p style="font-family: helvetica; background: #EEE; color: #777;">
	The quick brown fox jumps over the lazy dog.
</p>
```

### Inapplicable

#### Inapplicable Example 1

This text is not [visible][] because of `display: none`.

```html
<p style="display: none">Some invisible text in English</p>
```

#### Inapplicable Example 2

This text is not [visible][] because it is positioned off screen.

```html
<p style="position:absolute; top: -999em">Some invisible text in English</p>
```

#### Inapplicable Example 3

This text is not [visible][] because the foreground color is the same as the background color.

```html
<p style="color: white; background: white;" aria-hidden="true">Hidden text - U U D D L R L R B A S</p>
```

#### Inapplicable Example 4

This text is not the child of an HTML element.

```html
<svg>
	<text x="0" y="15">I love SVG!</text>
</svg>
```

#### Inapplicable Example 5

This text not part of a [text node][].

```html
<p>
	<img scr="/test-assets/contrast/example.png" alt="example" />
</p>
```

#### Inapplicable Example 6

This text is part of a widget because it is a child of a `button` element.

```html
<button>My button!</button>
```

#### Inapplicable Example 7

This text is part of a widget because it is a child of an element with the `role` attribute set to `button`.

```html
<div role="button">My button!</div>
```

#### Inapplicable Example 8

This text is part of a label of a [disabled][] widget, because it is in a `label` element that is the label for an `input` element with `type="text"`.

```html
<label style="color:#888; background: white;">
	My name
	<input type="text" disabled />
</label>
```

#### Inapplicable Example 9

This text is part of a label of a [disabled][] widget, because it is in an element that is referenced by `aria-labelledby` from an element with `role="textbox"`.

```html
<label id="my_pets_name" style="color:#888; background: white;">
	My pet's name
</label>
<div
	role="textbox"
	aria-labelledby="my_pets_name"
	aria-disabled="true"
	style="height:20px; width:100px; border:1px solid black;"
>
	test
</div>
```

#### Inapplicable Example 10

This text is part of a label of a [disabled][] widget, because it is in a `label` element that is the label for an `input` element in a `fieldset` element with the `disabled` attribute.

```html
<fieldset disabled style="color:#888; background: white;">
	<label>
		My name
		<input />
	</label>
</fieldset>
```

#### Inapplicable Example 11

This text is part of a label of a [disabled][] widget, because it is in a `label` element that is the label for an `input` element in an element with `role="group"` with the `aria-disabled="true"` attribute.

```html
<div role="group" aria-disabled="true" style="color:#888; background: white;">
	<label>
		My name
		<input />
	</label>
</div>
```

## Glossary

### Accessible Name {#accessible-name}

The _accessible name_ is the programmatically determined name of a user interface element that is [included in the accessibility tree](#included-in-the-accessibility-tree).

The accessible name is calculated using the [accessible name and description computation][].

For native markup languages, such as HTML and SVG, additional information on how to calculate the accessible name can be found in [HTML Accessibility API Mappings 1.0, Accessible Name and Description Computation (working draft)](https://www.w3.org/TR/html-aam/#accessible-name-and-description-computation) and [SVG Accessibility API Mappings, Name and Description (working draft)](https://www.w3.org/TR/svg-aam/#mapping_additional).

For more details, see [examples of accessible name][].

**Note:** As per the [accessible name and description computation][], each element always has an accessible name. When no accessible name is provided, the element will nonetheless be assigned an empty (`""`) one.

**Note:** As per the [accessible name and description computation][], accessible names are [flat string](https://www.w3.org/TR/accname-1.1/#terminology) trimmed of leading and trailing whitespace. Notably, it is not possible for a non-empty accessible name to be composed only of whitespace since these must be trimmed.

### Attribute value {#attribute-value}

The _attribute value_ of a content attribute set on an HTML element is the value that the attribute gets after being parsed and computed according to specifications. It may differ from the value that is actually written in the HTML code due to trimming whitespace or non-digits characters, default values, or case-insensitivity.

Some notable case of attribute value, among others:

- For [enumerated attributes][], the _attribute value_ is either the state of the attribute, or the keyword that maps to it; even for the default states. Thus `<input type="image" />` has an attribute value of either `Image Button` (the state) or `image` (the keyword mapping to it), both formulations having the same meaning; similarly, "an input element with a `type` _attribute value_ of `Text`" can be either `<input type="text" />`, `<input />` (missing value default), or `<input type="invalid" />` (invalid value default).
- For [boolean attributes][], the _attribute value_ is `true` when the attribute is present and `false` otherwise. Thus `<button disabled>`, `<button disabled="disabled">` and `<button disabled="">` all have a `disabled` _attribute value_ of `true`.
- For attributes whose value is used in a case-insensitive context, the _attribute value_ is the lowercase version of the value written in the HTML code.
- For attributes that accept [numbers][], the _attribute value_ is the result of parsing the value written in the HTML code according to the rules for parsing this kind of number.
- For attributes that accept sets of tokens, whether [space separated][] or [comma separated][], the _attribute value_ is the set of tokens obtained after parsing the set and, depending on the case, converting its items to lowercase (if the set is used in a case-insensitive context).
- For `aria-*` attributes, the _attribute value_ is computed as indicated in the [WAI-ARIA specification][] and the [HTML Accessibility API Mappings][html aam].

This list is not exhaustive, and only serves as an illustration for some of the most common cases.

The _attribute value_ of an [IDL attribute][] is the value returned on getting it. Note that when an [IDL attribute][] [reflects][reflect] a content attribute, they have the same attribute value.

### Background Colors Of Text {#background-colors-of-text}

The colors of all pixels, excluding the [foreground colors](#foreground-colors-of-text) pixels, in the [bounding box](#bounding-box-around-text) around a [visible](#visible) character in a [text node](https://dom.spec.whatwg.org/#text).

### Bounding Box around Text {#bounding-box-around-text}

The smallest rectangle that encloses all the [visible](#visible) pixels of a character (including anti-aliased pixels), plus one pixel on every edge (top, right, bottom, left), aligned on the horizontal and vertical axis.

### Disabled Element {#disabled-element}

An element is _disabled_ when it has been rendered [inoperable][] in one or more of the following ways:

1. The element matches the [`:disabled` pseudo-class][disabled pseudo-class]. For HTML elements this means that the element is [actually disabled][].

2. The element has a [shadow-including ancestor][] whose `aria-disabled` [attribute value][] is "true".

### Explicit Semantic Role {#explicit-role}

The _explicit semantic role_ of an element is determined by its [role attribute][] (if any).

The [role attribute][] takes a list of tokens. The explicit semantic role is the first valid role in this list. The valid roles are all non-abstract roles from [WAI-ARIA Specifications][]. If the element has no [role attribute][], or if it has one with no valid role, then this element has no explicit semantic role.

Other roles may be added as they become available. Not all roles will be supported in all assistive technologies. Testers are encouraged to adjust which roles are allowed according to the [accessibility support base line][]. For the purposes of executing test cases in all rules, it should be assumed that all roles are supported by assistive technologies so that none of the roles fail due to lack of accessibility support.

### Focusable {#focusable}

Elements that can become the target of keyboard input as described in the [HTML](https://www.w3.org/TR/html) specification of [focusable](https://html.spec.whatwg.org/#focusable-area) and [can be focused](https://html.spec.whatwg.org/#specially-focusable).

### Foreground Colors Of Text {#foreground-colors-of-text}

The colors of all the pixels of a [visible](#visible) character in a [text node](https://dom.spec.whatwg.org/#text) that change color when the CSS `color` property is changed. This includes anti-aliased pixels.

**Note:** Anti-aliasing is a technique in which the foreground color and background color are blended to create smooth edges.

### Highest Possible Contrast {#highest-possible-contrast}

The highest value of the [contrast ratios](https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio) between two sets of colors.

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

### Large Scale Text {#large-scale-text}

Text nodes with a [computed](https://www.w3.org/TR/css-cascade-3/#computed-value) [font-size](https://www.w3.org/TR/css-fonts-3/#propdef-font-size) of:

- at least 18 [points](https://www.w3.org/TR/css-values/#pt), or
- at least 14 [points](https://www.w3.org/TR/css-values/#pt) and a [computed](https://www.w3.org/TR/css-cascade-3/#computed-value) [font weight](https://www.w3.org/TR/css-fonts-3/#font-weight-prop) CSS property of 700 or higher.

### Marked as decorative {#marked-as-decorative}

An element is _marked as decorative_ if one or more of the following conditions is true:

- it has an [explicit role][] of `none` or `presentation`; or
- it is an `img` element with an `alt` attribute whose value is the empty string (`alt=""`), and with no [explicit role][].

Elements are marked as decorative as a way to convey the intention of the author that they are [pure decoration][]. It is different from the element actually being [pure decoration][] as authors may make mistakes. It is different from the element being effectively ignored by assistive technologies as rules such as [presentational roles conflict resolution][] may overwrite this intention.

Elements can also be ignored by assistive technologies if they are [programmatically hidden][]. This is different from marking the element as decorative and does not convey the same intention. Notably, being [programmatically hidden][] may change as users interact with the page (showing and hiding elements) while being marked as decorative should stay the same through all states of the page.

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

### Programmatically Hidden {#programmatically-hidden}

An HTML element is _programmatically hidden_ if either it has a [computed][] CSS property `visibility` whose value is not `visible`; or at least one of the following is true for any of its [inclusive ancestors][] in the [flat tree][]:

- has a `hidden` attribute; or
- has a [computed][] CSS property `display` of `none`; or
- has an `aria-hidden` attribute set to `true`

**Note**: Contrarily to the other conditions, the `visibility` CSS property may be reverted by descendants.

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

- [Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria-1.1/)
- [WAI-ARIA Graphics Module 1.0](https://www.w3.org/TR/graphics-aria-1.0/)
- [Digital Publishing WAI-ARIA Module 1.0](https://www.w3.org/TR/dpub-aria-1.0/)

**Note:** depending on the type of content being evaluated, part of the specifications might be irrelevant and should be ignored.

{% include_relative implementations/afw4f7.md %}

## Changelog

This is the first version of this ACT rule.

[abstract]: https://www.w3.org/TR/wai-aria-1.1/#isAbstract 'ARIA Definition for Abstract Roles'
[accessibility support base line]: https://www.w3.org/TR/WCAG-EM/#step1c 'Definition of accessibility support base line'
[accessible name and description computation]: https://www.w3.org/TR/accname 'Accessible Name and Description Computation'
[accessible name]: #accessible-name 'Definition of Accessible Name'
[actually disabled]: https://html.spec.whatwg.org/multipage/semantics-other.html#concept-element-disabled 'HTML definition of Actually Disabled'
[ancestor]: https://dom.spec.whatwg.org/#concept-shadow-including-ancestor 'DOM, ancestor, 2020/07/23'
[assistive technology]: https://www.w3.org/TR/WCAG21/#dfn-assistive-technologies 'WCAG definition of Assistive Technologies'
[attribute value]: #attribute-value 'Definition of Attribute Value'
[background colors]: #background-colors-of-text 'Definition of Background color of text'
[boolean attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes 'HTML Specification of Boolean Attribute'
[child]: https://dom.spec.whatwg.org/#concept-tree-child 'DOM, child, 2020/07/23'
[comma separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#comma-separated-tokens 'HTML Specification of Comma Separated Tokens'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[disabled pseudo-class]: https://drafts.csswg.org/selectors/#disabled-pseudo "CSS Selectors Level 4 (Editor's Draft), definition of the :disabled pseudo-class"
[disabled]: #disabled-element 'Definition of Disabled'
[doc-biblioref]: https://www.w3.org/TR/dpub-aria-1.0/#doc-biblioref 'DPUB ARIA Definition of doc-biblioref'
[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[enumerated attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute 'HTML Specification of Enumerated Attribute'
[examples of accessible name]: https://act-rules.github.io/pages/examples/accessible-name/
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[explicit role]: #explicit-role 'Definition of Explicit Role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS draft, flat tree, 2020/07/23'
[focusable]: #focusable 'Definition of Focusable'
[foreground colors]: #foreground-colors-of-text 'Definition of Foreground color of text'
[highest possible contrast]: #highest-possible-contrast 'Definition of Highest possible contrast'
[html aam]: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings 'Specification of HTML attributes value mapping to ARIA states and properties'
[html element]: #namespaced-element
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[human language]: https://www.w3.org/TR/WCAG21/#dfn-human-language-s 'WCAG 2.1, Human language'
[idl attribute]: https://heycam.github.io/webidl/#idl-attributes "Definition of Web IDL Attribute (Editor's Draft)"
[implicit role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[inheriting semantic]: #inheriting-semantic 'Definition of Inheriting Semantic Role'
[inoperable]: https://www.w3.org/TR/wai-aria/#dfn-operable
[larger scale text]: #large-scale-text 'Definition of Large scale text'
[link]: https://www.w3.org/TR/wai-aria/#link 'ARIA Definition of the link Role'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as Decorative'
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
[numbers]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#numbers 'HTML Specification of Number Parsing'
[origins]: https://www.w3.org/TR/css3-cascade/#cascading-origins 'CSS 3, origin'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'WAI-ARIA, Presentational Roles Conflict Resolution'
[programmatically hidden]: #programmatically-hidden 'Definition of Programmatically Hidden'
[pure decoration]: https://www.w3.org/TR/WCAG21/#dfn-pure-decoration 'WCAG definition of Pure Decoration'
[purely decorative]: https://www.w3.org/TR/WCAG21/#dfn-pure-decoration 'WCAG 2.1, Purely decorative'
[reflect]: https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes 'HTML specification of Reflecting Content Attributes in IDL Attributes'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[sc143]: https://www.w3.org/TR/WCAG21/#contrast-minimum 'WCAG 2.1, Success criterion 1.4.3 Contrast (Minimum)'
[sc146]: https://www.w3.org/TR/WCAG21/#contrast-enhanced 'WCAG 2.1, Success criterion 1.4.6 Contrast (Enhanced)'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[shadow-including ancestor]: https://dom.spec.whatwg.org/#concept-shadow-including-ancestor
[space separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens 'HTML Specification of Space Separated Tokens'
[text node]: https://dom.spec.whatwg.org/#text 'DOM, text node, 2020/07/23'
[user origin]: https://www.w3.org/TR/css3-cascade/#cascade-origin-user 'CSS 3, user origin'
[visible]: #visible 'Definition of Visible'
[wai-aria specification]: https://www.w3.org/TR/wai-aria-1.1/#propcharacteristic_value 'WAI-ARIA Specification of States and Properties Value'
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
