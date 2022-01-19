---
title: "video element visual content has audio description"
permalink: /standards-guidelines/act/rules/video-audio-description-1ea59c/
ref: /standards-guidelines/act/rules/video-audio-description-1ea59c/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/video-audio-description-1ea59c.md
footer: |
  <p><strong>Date:</strong> Updated 19 January 2022</p>
  <p><strong>Rule Identifier:</strong> 1ea59c</p>
  <p><strong>Authors:</strong> <a href="https://www.linkedin.com/in/brianbors/">Brian Bors</a>, <a href="https://github.com/wilcofiers">Wilco Fiers</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules community group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>.</p>
proposed: true
rule_meta:
  id: 1ea59c
  name: "`video` element visual content has audio description"
  rule_type: atomic
  description: |
    This rule checks that non-streaming `video` elements have all visual information also contained in the audio.
  last_modified: 19 January 2022
---

## Applicability

This rule applies to every [non-streaming](#non-streaming-media-element) `video` element that is [visible][] where the video contains audio.

## Expectation

The visual information of each test target is available through its audio, or through an audio description track.

## Assumptions

- This rule assumes that a mechanism is available to start the video and that the video element is not simply used to display the [poster](https://www.w3.org/TR/html5/semantics-embedded-content.html#element-attrdef-video-poster).
- This rule assumes that the language of each test target can be correctly determined (either programmatically or by analyzing the content), and sufficiently understood.

## Accessibility Support

There are only a few implementations of video players (without third party technologies) that support audio description tracks at the time of writing.

## Background

### Bibliography

- [Understanding Success Criterion 1.2.3: Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-description-or-media-alternative-prerecorded)
- [G78: Providing a second, user-selectable, audio track that includes audio descriptions](https://www.w3.org/WAI/WCAG21/Techniques/general/G78)
- [G173: Providing a version of a movie with audio descriptions](https://www.w3.org/WAI/WCAG21/Techniques/general/G173)
- [G8: Providing a movie with extended audio descriptions](https://www.w3.org/WAI/WCAG21/Techniques/general/G8)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details><summary>G8: Providing a movie with extended audio descriptions</summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G8">Learn more about technique G8</a></li>
      <li>Not required for conformance to any W3C accessibility recommendation.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: technique is not satisfied</li>
        <li>All <code>passed</code> outcomes: technique needs further testing</li>
        <li>An <code>inapplicable</code> outcome: technique needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details><summary>G78: Providing a second, user-selectable, audio track that includes audio descriptions</summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G78">Learn more about technique G78</a></li>
      <li>Not required for conformance to any W3C accessibility recommendation.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: technique is not satisfied</li>
        <li>All <code>passed</code> outcomes: technique needs further testing</li>
        <li>An <code>inapplicable</code> outcome: technique needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details><summary>G173: Providing a version of a movie with audio descriptions</summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G173">Learn more about technique G173</a></li>
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

- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)
- [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)
- Audio output
- Visual output
- [Language](https://www.w3.org/TR/act-rules-aspects/#input-aspects-text)

## Test Cases

### Passed

#### Passed Example 1

A video element with a voiceover that describes the visual information.

```html
<html lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/video-with-voiceover.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/video-with-voiceover.webm" type="video/webm" />
	</video>
</html>
```

#### Passed Example 2

A video element with an audio description.

```html
<html lang="en">
	<link rel="stylesheet" href="https://ozplayer.global.ssl.fastly.net/3.3/ozplayer-core/ozplayer.min.css" />
	<link rel="stylesheet" href="https://ozplayer.global.ssl.fastly.net/3.3/ozplayer-skin/highlights-blue.css" />
	<link rel="stylesheet" href="https://ozplayer.global.ssl.fastly.net/3.3/transcript.css" />

	<figure id="ozplayer-1-container" class="ozplayer-container">
		<div data-controls="stack" class="ozplayer" id="ozplayer-1">
			<video controls="controls" preload="none">
				<source src="/test-assets/rabbit-video/video.mp4" type="video/mp4" />
			</video>
			<audio data-default="default" preload="none">
				<source src="/test-assets/rabbit-video/audio-description.mp3" type="audio/mp3" />
			</audio>
		</div>
	</figure>

	<script src="https://ozplayer.global.ssl.fastly.net/3.3/ozplayer-core/mediaelement.min.js"></script>
	<script src="https://ozplayer.global.ssl.fastly.net/3.3/ozplayer-core/ozplayer.free.js"></script>
	<script src="https://ozplayer.global.ssl.fastly.net/3.3/ozplayer-lang/en.js"></script>
	<script src="https://ozplayer.global.ssl.fastly.net/3.3/config.js"></script>
</html>
```

### Failed

#### Failed Example 1

A video element without an audio description.

```html
<html lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/video.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/video.webm" type="video/webm" />
	</video>
</html>
```

#### Failed Example 2

A video element with an incorrect audio description.

```html
<html lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/video-with-incorrect-voiceover.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/video-with-incorrect-voiceover.webm" type="video/webm" />
	</video>
</html>
```

#### Failed Example 3

A video element with an incorrect audio description.

```html
<html lang="en">
	<link rel="stylesheet" href="https://ozplayer.global.ssl.fastly.net/3.3/ozplayer-core/ozplayer.min.css" />
	<link rel="stylesheet" href="https://ozplayer.global.ssl.fastly.net/3.3/ozplayer-skin/highlights-blue.css" />
	<link rel="stylesheet" href="https://ozplayer.global.ssl.fastly.net/3.3/transcript.css" />

	<figure id="ozplayer-1-container" class="ozplayer-container">
		<div data-controls="stack" class="ozplayer" id="ozplayer-1">
			<video controls="controls" preload="none">
				<source src="/test-assets/rabbit-video/video.mp4" type="video/mp4" />
			</video>
			<audio data-default="default" preload="none">
				<source src="/test-assets/rabbit-video/incorrect-audio-description.mp3" type="audio/mp3" />
			</audio>
		</div>
	</figure>

	<script src="https://ozplayer.global.ssl.fastly.net/3.3/ozplayer-core/mediaelement.min.js"></script>
	<script src="https://ozplayer.global.ssl.fastly.net/3.3/ozplayer-core/ozplayer.free.js"></script>
	<script src="https://ozplayer.global.ssl.fastly.net/3.3/ozplayer-lang/en.js"></script>
	<script src="https://ozplayer.global.ssl.fastly.net/3.3/config.js"></script>
</html>
```

### Inapplicable

#### Inapplicable Example 1

A video element without audio.

```html
<html lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/silent.webm" type="video/webm" />
	</video>
</html>
```

#### Inapplicable Example 2

A video element that is not [visible][].

```html
<html lang="en">
	<video controls style="display: none;">
		<source src="/test-assets/rabbit-video/video.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/video.webm" type="video/webm" />
	</video>
</html>
```

## Glossary

### Non-streaming media element {#non-streaming-media-element}

A _non-streaming media element_ is an [HTML Media Element](https://html.spec.whatwg.org/multipage/media.html#htmlmediaelement) for which the `duration` property is not 0.

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

{% include_relative implementations/1ea59c.md %}

## Changelog

This is the first version of this ACT rule.

[visible]: #visible 'Definition of visible'
