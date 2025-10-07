---
title: "Audio element content has transcript"
permalink: /standards-guidelines/act/rules/2eb176/proposed/
ref: /standards-guidelines/act/rules/2eb176/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/2eb176/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> 2eb176</p>
  <p><strong>Date:</strong> Updated 7 October 2025</p>
  <p><strong>Authors:</strong> <a href="https://www.linkedin.com/in/brianbors/">Brian Bors</a>, <a href="https://github.com/wilcofiers">Wilco Fiers</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
  
  <p><strong>Assets:</strong> Test cases use assets from the following sources: JFK's "We Choose the Moon" speech excerpt is courtesy of NASA.</p>
proposed: true
rule_meta:
  id: 2eb176
  name: "Audio element content has transcript"
  rule_type: atomic
  original_file: audio-transcript-2eb176.md
  description: |
    This rule checks that `audio` elements have a transcript that includes all auditory information.
  last_modified: 7 October 2025
---

## Applicability

This rule applies to every [non-streaming](#non-streaming-media-element) `audio` element that is:

- playing; or,
- has a [play button][] that is [visible][] and [included in the accessibility tree][].

## Expectation

The auditory information of each test target is available through a text transcript. That text transcript is [visible][] and [included in the accessibility tree][], either on the page or through a link.

**Note:** A "text transcript" in the context of this rule is defined in WCAG 2 as an [alternative for time based media](https://www.w3.org/TR/WCAG22/#dfn-alternative-for-time-based-media).

## Background

### Assumptions

There are no assumptions.

### Accessibility Support

There are no accessibility support issues known.

### Other Resources

- [Understanding SC 1.2.1:Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded)
- [G158: Providing an alternative for time-based media for audio-only content](https://www.w3.org/WAI/WCAG22/Techniques/general/G158)

## Accessibility Requirements Mapping

This rule is not required for conformance.

## Input Aspects

The following aspects are required in using this rule.

- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)
- [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)
- [Audio output](https://www.w3.org/TR/act-rules-aspects/#input-aspects-audio-out)
- [Language](https://www.w3.org/TR/act-rules-aspects/#input-aspects-text)

## Examples

<details class="act-inline-assets" markdown="block">
<summary><span>These HTML files are used in several examples:</span></summary>

File [`/test-assets/moon-audio/moon-speech-transcript.html`](https://w3.org/WAI/content-assets/wcag-act-rules/test-assets/moon-audio/moon-speech-transcript.html):

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>Transcript of the moon speech</title>
	</head>
	<body>
		<p>
			The above audio contains the following speech: We choose to go to the moon in this decade and do the other things,
			not because they are easy, but because they are hard, because that goal will serve to organize and measure the
			best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling
			to postpone, and one which we intend to win, and the others, too.
		</p>
	</body>
</html>
```

File [`/test-assets/moon-audio/moon-speech-incorrect-transcript.html`](https://w3.org/WAI/content-assets/wcag-act-rules/test-assets/moon-audio/moon-speech-incorrect-transcript.html):

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>Transcript of the moon speech</title>
	</head>
	<body>
		<p>
			The above audio contains the following speech: We choose to go to the cheese in this decade and do the other
			things, not because they are easy, but because they are hard, because that goal will serve to organize and measure
			the best of our energies and skills, because that challenge is one that we are willing to accept, one we are
			unwilling to postpone, and one which we intend to win, and the others, too.
		</p>
	</body>
</html>
```

</details>

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2eb176/85c98d1402dbc9c68ace2fbf5f063d145b8e5bd7.html">Open in a new tab</a>

This `audio` element has native player controls and an internal transcript.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
	<p>
		The above audio contains the following speech: We choose to go to the moon in this decade and do the other things,
		not because they are easy, but because they are hard, because that goal will serve to organize and measure the best
		of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to
		postpone, and one which we intend to win, and the others, too.
	</p>
</html>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2eb176/d24c583b4697496be0aba15c259714da93ac209c.html">Open in a new tab</a>

This `audio` element has native player controls and an external transcript.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
	<a href="/test-assets/moon-audio/moon-speech-transcript.html">Transcript</a>
</html>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2eb176/3d78bf5e3f2b717595db4df064b0ec542bae0d9b.html">Open in a new tab</a>

This `audio` element has an `autoplay` attribute and an external transcript.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" autoplay></audio>
	<a href="/test-assets/moon-audio/moon-speech-transcript.html">Transcript</a>
</html>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2eb176/7cdf59c28089794dbbd75d81f29fb9adb9327cb2.html">Open in a new tab</a>

This `audio` element has native player controls and no transcript.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
</html>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2eb176/58cd3c1ef1ce88b7878c9e11c4f610486faefbf6.html">Open in a new tab</a>

This `audio` element has native player controls and an incorrect internal transcript.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
	<p>
		The above audio contains the following speech: We choose to go to the cheese in this decade and do the other things,
		not because they are easy, but because they are hard, because that goal will serve to organize and measure the best
		of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to
		postpone, and one which we intend to win, and the others, too.
	</p>
</html>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2eb176/3a018f7d638bd2993d176f341edaee79fda3d55a.html">Open in a new tab</a>

This `audio` element has native player controls and an incorrect external transcript.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
	<a href="/test-assets/moon-audio/moon-speech-incorrect-transcript.html">Transcript</a>
</html>
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2eb176/ff5548c1341eb4edc32a87d9a018d425a5a065e3.html">Open in a new tab</a>

This `audio` element has an `autoplay` attribute and an incorrect external transcript.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" autoplay></audio>
	<a href="/test-assets/moon-audio/moon-speech-incorrect-transcript.html">Transcript</a>
</html>
```

#### Failed Example 5

<a class="example-link" title="Failed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2eb176/06b6ada6383efa2ffeaf67370b177090dfcdf5e1.html">Open in a new tab</a>

This `audio` element has native player controls and a [non-visible][visible] internal transcript.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
	<p style="text-indent: -9999px;">
		The above audio contains the following speech: We choose to go to the moon in this decade and do the other things,
		not because they are easy, but because they are hard, because that goal will serve to organize and measure the best
		of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to
		postpone, and one which we intend to win, and the others, too.
	</p>
</html>
```

#### Failed Example 6

<a class="example-link" title="Failed Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2eb176/d58c6252f96771666f71a65d199316108e709edd.html">Open in a new tab</a>

This `audio` element has native player controls and an internal transcript that is not exposed to the accessibility tree.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
	<p aria-hidden="true">
		The above audio contains the following speech: We choose to go to the moon in this decade and do the other things,
		not because they are easy, but because they are hard, because that goal will serve to organize and measure the best
		of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to
		postpone, and one which we intend to win, and the others, too.
	</p>
</html>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2eb176/eba170767ac1de0092d33a9bee2c0ecf2ebdfd46.html">Open in a new tab</a>

This `audio` element has no native player controls.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3"></audio>
</html>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2eb176/381f800e41c8f1e72f1164ff0877bbb8446dc55d.html">Open in a new tab</a>

This `audio` element has hidden native player controls.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls style="display: none;"></audio>
</html>
```

## Glossary

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

### Instrument to achieve an objective {#instrument-to-achieve-an-objective}

An [HTML element][] that when [activated][] allows an end-user to achieve an objective.

**Note**: Any rule that uses this definition must provide an unambiguous description of the objective the instrument is used to achieve.

### Non-streaming media element {#non-streaming-media-element}

A _non-streaming media element_ is an [HTML Media Element](https://html.spec.whatwg.org/multipage/media.html#htmlmediaelement) for which the `duration` property is not 0.

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

### Play button {#play-button}

A play button is an [instrument][] that when [activated][] plays a [media resource][].

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

[activated]: https://html.spec.whatwg.org/#activation
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[earl10-schema]: https://www.w3.org/TR/act-rules-format-1.1/#biblio-earl10-schema
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[html element]: https://html.spec.whatwg.org/multipage/dom.html#htmlelement
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[instrument]: #instrument-to-achieve-an-objective
[mechanism]: https://www.w3.org/TR/WCAG22/#dfn-mechanism 'WCAG Definition of Mechanism'
[media resource]: https://html.spec.whatwg.org/multipage/media.html#media-resource
[outcome property]: https://www.w3.org/TR/EARL10-Schema/#outcome
[play button]: #play-button 'Definition of play button'
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[sc211]: https://www.w3.org/TR/WCAG22/#keyboard 'Success Criterion 2.1.1 Keyboard'
[sc412]: https://www.w3.org/TR/WCAG22/#name-role-value 'Success Criterion 4.1.2 Name, Role, Value'
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[test subject]: https://www.w3.org/TR/act-rules-format-1.1/#test-subject
[test target]: https://www.w3.org/TR/act-rules-format/#test-target
[visible]: #visible 'Definition of visible'
