---
title: "Object element rendering non-text content has non-empty accessible name"
permalink: /standards-guidelines/act/rules/8fc3b6/proposed/
ref: /standards-guidelines/act/rules/8fc3b6/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/8fc3b6/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> 8fc3b6</p>
  <p><strong>Date:</strong> Updated 16 March 2022</p>
  <p><strong>Authors:</strong> <a href="https://github.com/AntonioEstriga">António Estriga</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
  
  <p><strong>Assets:</strong> Test cases use assets from the following sources: audio is an excerpt from JFK's 'Moon Speech'</p>
proposed: true
rule_meta:
  id: 8fc3b6
  name: "Object element rendering non-text content has non-empty accessible name"
  rule_type: atomic
  description: |
    This rule checks that each `object` element rendering non-text content has a non-empty accessible name.
  last_modified: 16 March 2022
  scs_tested:
    - handle: Non-text Content
      num: 1.1.1
      level: A
---

## Applicability

This rule applies to any `object` element that is [included in the accessibility tree][] and embeds a resource with an [image MIME type](https://mimesniff.spec.whatwg.org/#image-mime-type) or an [audio or video MIME type](https://mimesniff.spec.whatwg.org/#audio-or-video-mime-type).

## Expectation

Each target element has an [accessible name][] that is not empty (`""`).

## Assumptions

The `object` element is not rendered for presentational purposes. If the `object` is decorative and not [marked as decorative][] then the rule might fail but the success criterion might still be satisfied.

## Accessibility Support

Non-supported media formats make screen readers render the text content of the element instead of other attributes.

## Background

Testing that the [accessible name][] describes the purpose of the `object` element is not part of this rule and must be tested separately.

### Bibliography

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
- [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)
- [Accessibility Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-accessibility)

## Test Cases

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/8fc3b6/2c4e13b6606b88bbe10bfffbe4b6f4e6d373c4a7.html">Open in a new tab</a>

This `object` element which embeds an audio resource has a non-empty [accessible name][] through its `aria-label` attribute.

```html
<object aria-label="Moon speech" data="/test-assets/moon-audio/moon-speech.mp3"></object>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/8fc3b6/dd651de8f984bc2bc5d791eceedf16e70cca0cdc.html">Open in a new tab</a>

This `object` element which embeds a video resource has a non-empty [accessible name][] through its `title` attribute.

```html
<object title="Rabbit animated short" data="/test-assets/rabbit-video/video.mp4"></object>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/8fc3b6/0b589d8fd36a41135b86e1f10ecac977a167c3a0.html">Open in a new tab</a>

This `object` element which embeds an image resource has a non-empty [accessible name][] through its `aria-labelledby` attribute.

```html
<span id="label">W3C</span> <object aria-labelledby="label" data="/test-assets/shared/w3c-logo.png"></object>
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/8fc3b6/c3ed1c920db04a7b13d043fae5766694cf50d561.html">Open in a new tab</a>

This `object` element placed off screen, which embeds an audio resource, has a non-empty [accessible name][] through its `title` attribute.

```html
<html>
	<style>
		.offScreen {
			position: absolute;
			left: -9999px;
			top: -9999px;
		}
	</style>
	<body>
		<object title="Moon speech" data="/test-assets/moon-audio/moon-speech.mp3" class="offScreen"></object>
	</body>
</html>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/8fc3b6/8bd420282f8209ce236004c61bc4bbd728afceb7.html">Open in a new tab</a>

This `object` element which embeds a video resource has an empty [accessible name][] because the `title` attribute is empty.

```html
<object title="" data="/test-assets/rabbit-video/video.mp4"></object>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/8fc3b6/0f4a37cd30bd688d1a8ebbb915b2c70a4bf0272c.html">Open in a new tab</a>

This `object` element which embeds an image resource has an empty [accessible name][] because the `span` element with `id="label"` is empty.

```html
<span id="label"></span> <object aria-labelledby="label" data="/test-assets/shared/w3c-logo.png"></object>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/8fc3b6/dcb42362e4cd8108444dd64c8538ef0523de0aa7.html">Open in a new tab</a>

This `object` element which embeds an audio resource has an empty [accessible name][] because the `aria-labelledby` attribute references a non-existing id.

```html
<object aria-labelledby="download" data="/test-assets/moon-audio/moon-speech.mp3"></object>
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/8fc3b6/4147da2dd50e2326a7985207296cfcd0ba57a1ee.html">Open in a new tab</a>

This `object` element which embeds an audio resource has an empty [accessible name][] because it does not provide an accessible name through one of `title`, `aria-label` or `aria-labelledby` attributes.

```html
<object data="/test-assets/moon-audio/moon-speech.mp3"></object>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/8fc3b6/84c10ba8bc5570e900a60a2e29b319e68fc093da.html">Open in a new tab</a>

This `object` element is not [included in the accessibility tree][] due to `display:none`.

```html
<object data="/test-assets/rabbit-video/video.mp4" style="display: none;"></object>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/8fc3b6/52ac3fd2be278ede2bb32987a32673c6d5ee5edb.html">Open in a new tab</a>

This `object` element is not [included in the accessibility tree][] due to `visibility:hidden`.

```html
<object data="/test-assets/moon-audio/moon-speech.mp3" style="visibility: hidden;"></object>
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/8fc3b6/90927d72c81e9a9b27034a1a99adbab46c86e196.html">Open in a new tab</a>

This `object` element is not [included in the accessibility tree][] due to `aria-hidden="true"`.

```html
<object data="/test-assets/shared/w3c-logo.png" aria-hidden="true"></object>
```

#### Inapplicable Example 4

<a class="example-link" title="Inapplicable Example 4" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/8fc3b6/511c1b1647549d8af305f68253dda6d4161bd9bc.html">Open in a new tab</a>

This `object` element is not [included in the accessibility tree][] because it is marked as decorative through `role="presentation"`.

```html
<object type="image/png" role="presentation" data="/test-assets/contrast/example.png"></object>
```

#### Inapplicable Example 5

<a class="example-link" title="Inapplicable Example 5" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/8fc3b6/852f57fb1f11a0a58d288746c14d52ce8f8dd97a.html">Open in a new tab</a>

This `object` element embeds an HTML resource.

```html
<object title="My University" data="/test-assets/shared/index.html"></object>
```

#### Inapplicable Example 6

<a class="example-link" title="Inapplicable Example 6" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/8fc3b6/fac8b25d43d0bbea83f5fe8c5fddf1b3566ac1fb.html">Open in a new tab</a>

There is no `object` element.

```html
<audio title="Moon speech" src="/test-assets/moon-audio/moon-speech.mp3"></audio>
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

**Note**: Contrarily to the other conditions, the `visibility` CSS property may be reverted by descendants.

**Note**: The [HTML standard suggests](https://html.spec.whatwg.org/multipage/rendering.html#hidden-elements) rendering elements with the `hidden` attribute with a CSS rule that applies the value `none` to the CSS property `display` of the element. Although the suggestion is not normative, known user agents render it according to the suggestion (unless the content specifies another CSS rule that sets the value of the `display` property). If a user agent does not follow the suggestion, this definition may produce incorrect results for this user agent.

### WAI-ARIA specifications {#wai-aria-specifications}

The _WAI ARIA Specifications_ group both the WAI ARIA W3C Recommendation and ARIA modules, namely:

- [Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria-1.1/)
- [WAI-ARIA Graphics Module 1.0](https://www.w3.org/TR/graphics-aria-1.0/)
- [Digital Publishing WAI-ARIA Module 1.0](https://www.w3.org/TR/dpub-aria-1.0/)

**Note:** depending on the type of content being evaluated, part of the specifications might be irrelevant and should be ignored.

{% include_relative _implementation-proposed.md %}

## Changelog

This is the first version of this ACT rule.

[accessibility support base line]: https://www.w3.org/TR/WCAG-EM/#step1c 'Definition of accessibility support base line'
[accessible name and description computation]: https://www.w3.org/TR/accname 'Accessible Name and Description Computation'
[accessible name]: #accessible-name 'Definition of accessible name'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[examples of accessible name]: https://act-rules.github.io/pages/examples/accessible-name/
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[explicit role]: #explicit-role 'Definition of Explicit Role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as decorative'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[programmatically hidden]: #programmatically-hidden 'Definition of Programmatically Hidden'
[pure decoration]: https://www.w3.org/TR/WCAG21/#dfn-pure-decoration 'WCAG definition of Pure Decoration'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
