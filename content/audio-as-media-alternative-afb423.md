---
title: "audio element content is media alternative for text"
permalink: /standards-guidelines/act/rules/audio-as-media-alternative-afb423/
ref: /standards-guidelines/act/rules/audio-as-media-alternative-afb423/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/audio-as-media-alternative-afb423.md
footer: |
  <p><strong>Date:</strong> Updated 22 October 2021</p>
  <p><strong>Authors:</strong> <a href="https://www.linkedin.com/in/brianbors/">Brian Bors</a>, <a href="https://github.com/wilcofiers">Wilco Fiers</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules community group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>.</p>
proposed: true
rule_meta:
  id: afb423
  name: "`audio` element content is media alternative for text"
  rule_type: atomic
  description: |
    This rule checks `audio` is a media alternative for text on the page.
  accessibility_requirements:
    null
  input_aspects:
    - handle: DOM Tree
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom
    - handle: CSS Styling
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-css
    - handle: Audio output
      url: 
    - handle: Language
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-text
  last_modified: 22 October 2021
---

{::options toc_levels="2" /}
{::nomarkdown}
{% include toc.html type="start" title="Page Contents" %}
{:/}

- Table of Content placeholder
{:toc}

{::nomarkdown}
{% include toc.html type="end" %}
{:/}

## Applicability

This rule applies to every [non-streaming](#non-streaming-media-element) `audio` element that is:

- playing; or,
- has a "play button" that is [visible][] and [included in the accessibility tree][].

**Note:** A play button is an interactive element that when activated, plays the audio.

## Expectation 1

The auditory information of each test target is available as text (directly or via text alternatives) that is [visible][] and [included in the accessibility tree][].

## Expectation 2

Each target element is labeled as an audio alternative for text on the page. This label is [visible][] and [included in the accessibility tree][].

**Note:** The term label does not refer to the `label` element.

## Assumptions

This rule assumes that the language of each test target can be correctly determined (either programmatically or by analyzing the content), and sufficiently understood.

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- [Understanding SC 1.2.1:Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded)

## Test Cases

### Passed

#### Passed Example 1

An audio element that describes some of the text on the same page. The text on the page labels the audio as an alternative.

```html
<html lang="en">
	<p>
		A part of a speech by John F. Kennedy: We choose to go to the moon in this decade and do the other things, not
		because they are easy, but because they are hard, because that goal will serve to organize and measure the best of
		our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to
		postpone, and one which we intend to win, and the others, too.
	</p>
	<p>
		You can also listen to the audio file below to hear the above part of the speech.
	</p>
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
</html>
```

### Failed

#### Failed Example 1

An audio element that describes some of the text on the same page. The audio contains more information than the text does.

```html
<html lang="en">
	<p>
		A part of a speech by John F. Kennedy: We choose to go to the moon in this decade and do the other things, not
		because they are easy, but because they are hard.
	</p>
	<p>
		You can also listen to the audio file below to hear the above part of the speech.
	</p>
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
</html>
```

#### Failed Example 2

An audio element that describes some of the text on the same page. The text is not [visible][] on the page.

```html
<html lang="en">
	<p style="display: none;">
		A part of a speech by John F. Kennedy: We choose to go to the moon in this decade and do the other things, not
		because they are easy, but because they are hard, because that goal will serve to organize and measure the best of
		our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to
		postpone, and one which we intend to win, and the others, too.
	</p>
	<p>
		You can also listen to the audio file below to hear the above part of the speech.
	</p>
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
</html>
```

#### Failed Example 3

An audio element that describes some of the text on the same page. The text on the page does not label the audio as an alternative.

```html
<html lang="en">
	<p>
		A part of a speech by John F. Kennedy: We choose to go to the moon in this decade and do the other things, not
		because they are easy, but because they are hard, because that goal will serve to organize and measure the best of
		our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to
		postpone, and one which we intend to win, and the others, too.
	</p>
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
</html>
```

#### Failed Example 4

An audio element that describes some of the text on the same page. The text on the page labels the audio as an alternative but the label is not [visible][] on the page.

```html
<html lang="en">
	<p>
		A part of a speech by John F. Kennedy: We choose to go to the moon in this decade and do the other things, not
		because they are easy, but because they are hard, because that goal will serve to organize and measure the best of
		our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to
		postpone, and one which we intend to win, and the others, too.
	</p>
	<p style="display: none;">
		You can also listen to the audio file below to hear the above part of the speech.
	</p>
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
</html>
```

### Inapplicable

#### Inapplicable Example 1

An audio element that describes some of the text on the same page. The text on the page labels the audio as an alternative but the controls are not [visible][] on the page.

```html
<html lang="en">
	<p>
		A part of a speech by John F. Kennedy: We choose to go to the moon in this decade and do the other things, not
		because they are easy, but because they are hard, because that goal will serve to organize and measure the best of
		our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to
		postpone, and one which we intend to win, and the others, too.
	</p>
	<p>
		You can also listen to the audio file below to hear the above part of the speech.
	</p>
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls style="display: none;"></audio>
</html>
```

#### Inapplicable Example 2

An audio element that describes some of the text on the same page. The text on the page labels the audio as an alternative but there are no controls.

```html
<html lang="en">
	<p>
		A part of a speech by John F. Kennedy: We choose to go to the moon in this decade and do the other things, not
		because they are easy, but because they are hard, because that goal will serve to organize and measure the best of
		our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to
		postpone, and one which we intend to win, and the others, too.
	</p>
	<p>
		You can also listen to the audio file below to hear the above part of the speech.
	</p>

	<audio src="/test-assets/moon-audio/moon-speech.mp3"></audio>
</html>
```

## Glossary

### Focusable {#focusable}

Elements that can become the target of keyboard input as described in the [HTML](https://www.w3.org/TR/html) specification of [focusable](https://html.spec.whatwg.org/#focusable-area) and [can be focused](https://html.spec.whatwg.org/#specially-focusable).

### Included in the accessibility tree {#included-in-the-accessibility-tree}

Elements included in the accessibility tree of platform specific accessibility APIs are exposed to assistive technologies. This allows users of assistive technology to access the elements in a way that meets the requirements of the individual user.

The general rules for when elements are included in the accessibility tree are defined in the [core accessibility API mappings](https://www.w3.org/TR/core-aam/). For native markup languages, such as HTML and SVG, additional rules for when elements are included in the accessibility tree can be found in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/) and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/).

For more details, see [examples of included in the accessibility tree][].

[Programmatically hidden](#programmatically-hidden) elements are removed from the accessibility tree. However, some browsers will leave [focusable](#focusable) elements with an `aria-hidden` attribute set to `true` in the accessibility tree. Because they are hidden, these elements are considered **not** included in the accessibility tree. This may cause confusion for users of assistive technologies because they may still be able to interact with these focusable elements using sequential keyboard navigation, even though the element should not be included in the accessibility tree.

### Non-streaming media element {#non-streaming-media-element}

A _non-streaming media element_ is an [HTML Media Element](https://html.spec.whatwg.org/multipage/media.html#htmlmediaelement) for which the `duration` property is not 0.

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

### Visible {#visible}

Content perceivable through sight.

Content is considered _visible_ if making it fully transparent would result in a difference in the pixels rendered for any part of the document that is currently within the viewport or can be brought into the viewport via scrolling.

[Content is defined in WCAG](https://www.w3.org/TR/WCAG21/#dfn-content).

For more details, see [examples of visible](https://act-rules.github.io/pages/examples/visible/).

{% include_relative implementations/afb423.md %}

## Changelog

This is the first version of this ACT rule.

[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[visible]: #visible 'Definition of visible'