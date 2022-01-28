---
title: "video element visual-only content has audio track alternative"
permalink: /standards-guidelines/act/rules/video-only-audio-track-d7ba54/
ref: /standards-guidelines/act/rules/video-only-audio-track-d7ba54/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/video-only-audio-track-d7ba54.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> d7ba54</p>
  <p><strong>Date:</strong> Updated 28 January 2022</p>
  <p><strong>Authors:</strong> <a href="https://www.linkedin.com/in/brianbors/">Brian Bors</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules community group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: d7ba54
  name: "`video` element visual-only content has audio track alternative"
  rule_type: atomic
  description: |
    Non-streaming `video` elements without audio must have an audio alternative.
  last_modified: 28 January 2022
---

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

### Bibliography

- [Understanding Success Criterion 1.2.1: Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded)
- [G166: Providing audio that describes the important video content and describing it as such](https://www.w3.org/WAI/WCAG21/Techniques/general/G166)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>G166: Providing audio that describes the important video content and describing it as such</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G166">Learn more about technique G166</a></li>
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
- Audio output (no link available)
- Visual output (no link available)
- [Language](https://www.w3.org/TR/act-rules-aspects/#input-aspects-text)

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

{% include_relative implementations/d7ba54.md %}

## Changelog

This is the first version of this ACT rule.

[visible]: #visible 'Definition of visible'
