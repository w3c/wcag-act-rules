---
title: "video element visual-only content has audio track alternative"
permalink: /standards-guidelines/act/rules/video-only-audio-track-d7ba54/
ref: /standards-guidelines/act/rules/video-only-audio-track-d7ba54/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/video-only-audio-track-d7ba54.md
# footer: > # Text in footer in HTML
#   <p> This is the text in the footer </p>
---

{% include_relative _proposed-banner.html %}

Rule Type:
:   atomic

Rule ID:
:   d7ba54

Last Modified:
:   June 3, 2021

Accessibility Requirements Mapping:
:   [G166: Providing audio that describes the important video content and describing it as such](https://www.w3.org/WAI/WCAG21/Techniques/general/G166)
    - Not required to conformance to any W3C accessibility recommendation.
    - [Outcome](#outcome) mapping:
        - Any `failed` outcomes: technique is not satisfied
        - All `passed` outcomes: technique needs further testing
        - An `inapplicable` outcome: technique needs further testing

Input Aspects:
:   [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)
:   [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)
:   Audio output
:   Visual output
:   [Language](https://www.w3.org/TR/act-rules-aspects/#input-aspects-text)

## Description

Non-streaming `video` elements without audio must have an audio alternative.

## Applicability

This rule applies to any [non-streaming](#non-streaming-media-element) `video` element that is [visible][] where the video does not contain audio.

## Expectation

The visual information of each test target is available through an audio track.

## Assumptions

- A mechanism is available to start the video and that the video element is not simply used to display the [poster](https://www.w3.org/TR/html5/semantics-embedded-content.html#element-attrdef-video-poster).
- The language of each test target can be correctly determined (either programmatically or by analyzing the content), and sufficiently understood.

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- [Understanding Success Criterion 1.2.1: Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded)
- [G166: Providing audio that describes the important video content and describing it as such](https://www.w3.org/WAI/WCAG21/Techniques/general/G166)

## Test Cases

### Passed

#### Passed Example 1

This `video` element, which has no audio, has a separate audio track that describes the visual information.

```html
<html lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/silent.webm" type="video/webm" />
	</video>

	<audio controls>
		<source src="/test-assets/rabbit-video/audio-description.mp3" type="audio/mpeg" />
	</audio>
</html>
```

### Failed

#### Failed Example 1

This `video` element, which has no audio, does not have an audio track describing the visual information.

```html
<html lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/silent.webm" type="video/webm" />
	</video>
</html>
```

#### Failed Example 2

This `video` element, which has no audio, has a separate audio track that incorrectly describes the visual information.

```html
<html lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/silent.webm" type="video/webm" />
	</video>

	<audio controls>
		<source src="/test-assets/rabbit-video/incorrect-audio-description.mp3" type="audio/mpeg" />
	</audio>
</html>
```

### Inapplicable

#### Inapplicable Example 1

This `video` element has audio.

```html
<html lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/video.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/video.webm" type="video/webm" />
	</video>
</html>
```

#### Inapplicable Example 2

This `video` element is not [visible][].

```html
<html lang="en">
	<video controls style="display: none;">
		<source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/silent.webm" type="video/webm" />
	</video>
</html>
```

## Glossary

{% include_relative glossary/non-streaming-media-element.md %}
{% include_relative glossary/outcome.md %}
{% include_relative glossary/visible.md %}

## Acknowledgements

This rule was written in the [ACT Rules community group](https://w3.org/community/act-r/), 
with the support of the EU-funded [WAI-Tools Project](https://www.w3.org/WAI/about/projects/wai-tools/).

### Authors

- [Brian Bors](https://www.linkedin.com/in/brianbors/)

## Changelog

This is the first version of this ACT rule.

[visible]: #visible 'Definition of visible'
