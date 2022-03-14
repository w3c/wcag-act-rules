---
title: "video element content is media alternative for text"
permalink: /standards-guidelines/act/rules/ab4d13/proposed/
ref: /standards-guidelines/act/rules/ab4d13/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/ab4d13/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> ab4d13</p>
  <p><strong>Date:</strong> Updated 28 January 2022</p>
  <p><strong>Authors:</strong> <a href="https://www.linkedin.com/in/brianbors/">Brian Bors</a>, <a href="https://github.com/wilcofiers">Wilco Fiers</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules community group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: ab4d13
  name: "`video` element content is media alternative for text"
  rule_type: atomic
  description: |
    This rule checks non-streaming `video` is a media alternative for text on the page.
  last_modified: 28 January 2022
---

## Applicability

This rule applies to every [non-streaming](#non-streaming-media-element) `video` element that is [visible][], where the video contains audio.

## Expectation 1

All the information contained in each test target is available as text that is [visible][] and [included in the accessibility tree][].

## Expectation 2

Each test target is labeled as a video alternative for text on the page. This label is [visible][] and [included in the accessibility tree][].

**Note:** The term label does not refer to the `label` element.

## Assumptions

- This rule assumes that a mechanism is available to start the video and that the video element is not simply used to display the [poster](https://www.w3.org/TR/html5/semantics-embedded-content.html#element-attrdef-video-poster).
- This rule assumes that the language of each test target can be correctly determined (either programmatically or by analyzing the content), and sufficiently understood.

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

### Bibliography

- [Understanding Success Criterion 1.2.3: Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded)
- [Understanding Success Criterion 1.2.5: Audio Description (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-description-prerecorded)
- [G78: Providing a second, user-selectable, audio track that includes audio descriptions](https://www.w3.org/WAI/WCAG21/Techniques/general/G78)

## Accessibility Requirements Mapping

This rule is not required for conformance.

## Input Aspects

The following aspects are required in using this rule.

- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)
- [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)
- Audio output (no link available)
- [Language](https://www.w3.org/TR/act-rules-aspects/#input-aspects-text)

## Test Cases

### Passed

#### Passed Example 1

A video element that describes some of the text on the same page. The text on the page labels the video as an alternative.

```html
<html lang="en">
	<p>
		Not being able to use your computer because your mouse doesn't work, is frustrating. Many people use only the
		keyboard to navigate websites. Either through preference or circumstance. This is solved by keyboard compatibility.
		Keyboard compatibility is described in WCAG. See the video below to watch the same information again in video form.
	</p>
	<video src="/test-assets/perspective-video/perspective-video.mp4" controls></video>
</html>
```

### Failed

#### Failed Example 1

A video element that describes some of the text on the same page. The video contains more information than the text does.

```html
<html lang="en">
	<p>
		Not being able to use your computer because your mouse doesn't work, is frustrating. Either through preference or
		circumstance. This is solved by keyboard compatibility. Keyboard compatibility is described in WCAG. See the video
		below to watch the same information again in video form.
	</p>
	<video src="/test-assets/perspective-video/perspective-video.mp4" controls></video>
</html>
```

#### Failed Example 2

A video element that describes some of the text on the same page. The text is not [visible][].

```html
<html lang="en">
	<p style="display: none;">
		Not being able to use your computer because your mouse doesn't work, is frustrating. Many people use only the
		keyboard to navigate websites. Either through preference or circumstance. This is solved by keyboard compatibility.
		Keyboard compatibility is described in WCAG. See the video below to watch the same information again in video form.
	</p>
	<video src="/test-assets/perspective-video/perspective-video.mp4" controls></video>
</html>
```

#### Failed Example 3

A video element that describes some of the text on the same page. The text on the page does not label the video as an alternative.

```html
<html lang="en">
	<p>
		Not being able to use your computer because your mouse doesn't work, is frustrating. Many people use only the
		keyboard to navigate websites. Either through preference or circumstance. This is solved by keyboard compatibility.
		Keyboard compatibility is described in WCAG.
	</p>
	<video src="/test-assets/perspective-video/perspective-video.mp4" controls></video>
</html>
```

#### Failed Example 4

A video element that describes some of the text on the same page. The text on the page labels the video as an alternative but the label is not [visible][].

```html
<html lang="en">
	<p>
		Not being able to use your computer because your mouse doesn't work, is frustrating. Many people use only the
		keyboard to navigate websites. Either through preference or circumstance. This is solved by keyboard compatibility.
		Keyboard compatibility is described in WCAG.
	</p>
	<p style="display: none;">
		See the video below to watch the same information again in video form.
	</p>
	<video src="/test-assets/perspective-video/perspective-video.mp4" controls></video>
</html>
```

### Inapplicable

#### Inapplicable Example 1

A video element without audio. The text on the page labels the video as an alternative.

```html
<html lang="en">
	<p>
		Not being able to use your computer because your mouse doesn't work, is frustrating. Many people use only the
		keyboard to navigate websites. Either through preference or circumstance. This is solved by keyboard compatibility.
		Keyboard compatibility is described in WCAG. See the video below to watch the same information again in video form.
	</p>
	<video src="/test-assets/perspective-video/perspective-video-silent.mp4" controls></video>
</html>
```

#### Inapplicable Example 2

A video element that describes some of the text on the same page. The text on the page labels the video as an alternative but the video is not [visible][].

```html
<html lang="en">
	<p>
		Not being able to use your computer because your mouse doesn't work, is frustrating. Many people use only the
		keyboard to navigate websites. Either through preference or circumstance. This is solved by keyboard compatibility.
		Keyboard compatibility is described in WCAG. See the video below to watch the same information again in video form.
	</p>
	<video src="/test-assets/perspective-video/perspective-video.mp4" controls style="display: none;"></video>
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

{% include_relative _implementation-proposed.md %}

## Changelog

This is the first version of this ACT rule.

[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[visible]: #visible 'Definition of visible'
