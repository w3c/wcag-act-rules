---
title: "Video element visual-only content has accessible alternative"
permalink: /standards-guidelines/act/rules/c3232f/proposed/
ref: /standards-guidelines/act/rules/c3232f/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/c3232f/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> c3232f</p>
  <p><strong>Date:</strong> Updated 8 July 2025</p>
  <p><strong>Authors:</strong> <a href="https://www.linkedin.com/in/brianbors/">Brian Bors</a>, <a href="https://github.com/john-urbilog">John Hicks</a>, <a href="https://github.com/Rafalchar">Rafal Charlampowicz</a>, <a href="https://github.com/wilcofiers">Wilco Fiers</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
  
  <p><strong>Assets:</strong> Test cases use assets from the following sources: Rabbit video is © copyright 2008, Blender Foundation / <a href="https://www.bigbuckbunny.org">www.bigbuckbunny.org</a>; Web Accessibility Perspective videos by W3C WAI.</p>
proposed: true
rule_meta:
  id: c3232f
  name: "Video element visual-only content has accessible alternative"
  rule_type: composite
  original_file: video-only-alternative-for-visual-c3232f.md
  description: |
    This rule checks that `video` elements without audio have an alternative available.
  last_modified: 8 July 2025
  scs_tested:
    - handle: Audio-only and Video-only (Prerecorded)
      num: 1.2.1
      level: A
---

## Applicability

This rule applies to any [non-streaming](#non-streaming-media-element) `video` element that is [visible][] where the video does not contain audio.

## Expectation

For each test target, the [outcome](#outcome) of at least one of the following rules is passed:

- [`Video` Element Visual-Only Content Is Media Alternative For Text](https://www.w3.org/WAI/standards-guidelines/act/rules/fd26cf/)
- [`Video` Element Visual-Only Content Has Transcript](https://www.w3.org/WAI/standards-guidelines/act/rules/ee13b5/)
- [`Video` Element Visual-Only Content Has Audio Track Alternative](https://www.w3.org/WAI/standards-guidelines/act/rules/d7ba54/)

## Background

### Assumptions

- A mechanism is available to start the video and the video element is not simply used to display the [poster](https://html.spec.whatwg.org/multipage/media.html#attr-video-poster).
- The language of each test target can be correctly determined (either programmatically or by analyzing the content), and sufficiently understood.

### Accessibility Support

The HTML `video` element can also have a `track` element that provides an audio description. This should provide assistive technologies with a timed text description of visual information in a video. However, there is no native support in any major browser for this technique. Technique [H96: Using the track element to provide audio descriptions](https://www.w3.org/WAI/WCAG22/Techniques/html/H96) can not be relied upon to conform to [1.2.1: Audio-only and Video-only (Prerecorded)](https://www.w3.org/TR/WCAG22/#audio-only-and-video-only-prerecorded).

### Bibliography

- [Understanding Success Criterion 1.2.1: Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded)
- [G159: Providing an alternative for time-based media for video-only content](https://www.w3.org/WAI/WCAG22/Techniques/general/G159.html)
- [G166: Providing audio that describes the important video content and describing it as such](https://www.w3.org/WAI/WCAG22/Techniques/general/G166.html)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>1.2.1 Audio-only and Video-only (Prerecorded) (Level A)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG22/#audio-only-and-video-only-prerecorded">Learn more about 1.2.1 Audio-only and Video-only (Prerecorded)</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level A and higher.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>G159: Providing an alternative for time-based media for video-only content</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG22/Techniques/general/G159">Learn more about technique G159</a></li>
      <li>Not required for conformance to any W3C accessibility recommendation.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: technique is not satisfied</li>
        <li>All <code>passed</code> outcomes: technique needs further testing</li>
        <li>An <code>inapplicable</code> outcome: technique needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>G166: Providing audio that describes the important video content and describing it as such</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG22/Techniques/general/G166">Learn more about technique G166</a></li>
      <li>Not required for conformance to any W3C accessibility recommendation.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: technique is not satisfied</li>
        <li>All <code>passed</code> outcomes: technique needs further testing</li>
        <li>An <code>inapplicable</code> outcome: technique needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
</ul>

## Input Rules

Outcomes of the following rules are required as input for this rule.

- [Video element visual-only content is media alternative for text](/standards-guidelines/act/rules/video-only-as-media-alternative-fd26cf/)
- [Video element visual-only content has transcript](/standards-guidelines/act/rules/video-only-transcript-ee13b5/)
- [Video element visual-only content has audio track alternative](/standards-guidelines/act/rules/video-only-audio-track-d7ba54/)

## Test Cases

<details class="act-inline-assets" markdown="block">
<summary><span>This HTML file is used in several examples:</span></summary>

File [`/test-assets/rabbit-video/incorrect-transcript.html`](https://w3.org/WAI/content-assets/wcag-act-rules/test-assets/rabbit-video/incorrect-transcript.html):

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>Description of the dog video</title>
	</head>
	<body>
		<h1>Description of the dog video</h1>
		<p>
			The video shows a giant fat dog climbing out of a hole in the ground. He stretches, yawns, and then starts
			walking. Then he stops to scratch his bottom.
		</p>
	</body>
</html>
```

</details>

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/c3232f/ce350e33e78f587703aa35b78fa319b9efe9291d.html">Open in a new tab</a>

This `video` element, which has no audio, has a text transcript available on the same page. Thus, it passes rule [`Video` Element Visual-Only Content Has Transcript](https://www.w3.org/WAI/standards-guidelines/act/rules/ee13b5/).

```html
<html lang="en">
<video controls>
  <source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4"></source>
  <source src="/test-assets/rabbit-video/silent.webm" type="video/webm"></source>
</video>
<p>The above video shows a giant fat rabbit climbing out of a hole in the ground.
He stretches, yawns, and then starts walking.
Then he stops to scratch his bottom.</p>
</html>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/c3232f/634bb07611c5d126e49caf4bfce8b6d50c872fce.html">Open in a new tab</a>

This `video` element, which has no audio, has a separate audio track that describes the visual information. Thus, it passes rule [`Video` Element Visual-Only Content Has Audio Track Alternative](https://www.w3.org/WAI/standards-guidelines/act/rules/d7ba54/).

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

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/c3232f/481e55b81376491b363aab5c622e58fe6b63bace.html">Open in a new tab</a>

This `video` element, which has no audio, is a media alternative for the text in the page and labeled as such. Thus, it passes rule [`Video` Element Visual-Only Content Is Media Alternative For Text](https://www.w3.org/WAI/standards-guidelines/act/rules/fd26cf/).

```html
<html lang="en">
	<p>
		Not being able to use your computer because your mouse doesn't work, is frustrating. Many people use only the
		keyboard to navigate websites. Either through preference or circumstance. This is solved by keyboard compatibility.
		Keyboard compatibility is described in WCAG. See the video below to watch the same information again in video form.
	</p>
	<video src="/test-assets/perspective-video/perspective-video-with-captions-silent.mp4" controls></video>
</html>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/c3232f/5ed3a98f771c2069c1d4581ff5f85cc38d9b5ec0.html">Open in a new tab</a>

This `video` element, which has no audio, has a transcript which does not convey the information included in the video-only content. The transcript is available through a link on the same page.

```html
<html lang="en">
<video controls>
  <source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4"></source>
  <source src="/test-assets/rabbit-video/silent.webm" type="video/webm"></source>
</video>
<a href="/test-assets/rabbit-video/incorrect-transcript.html">Transcript</a>
</html>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/c3232f/2e9bff37ba69e76a995b6339748eaad2f7a30aca.html">Open in a new tab</a>

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

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/c3232f/0f884e5935b0e6b1bd809d550738772e32f439c5.html">Open in a new tab</a>

This `video` element, which has no audio, is a media alternative for the text in the page but it is not labeled as such.

```html
<html lang="en">
	<p>
		Not being able to use your computer because your mouse doesn't work, is frustrating. Many people use only the
		keyboard to navigate websites. Either through preference or circumstance. This is solved by keyboard compatibility.
		Keyboard compatibility is described in WCAG.
	</p>
	<video src="/test-assets/perspective-video/perspective-video-with-captions-silent.mp4" controls></video>
</html>
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/c3232f/91f0cca7d0cc5c6a757f72dbeed84bcc1b79625b.html">Open in a new tab</a>

This `video` element, which has no audio, has a `track` element with descriptions. The description track is not supported.

```html
<html lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/silent.webm" type="video/webm" />
		<track kind="descriptions" src="/test-assets/rabbit-video/descriptions.vtt" />
	</video>
</html>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/c3232f/91f5189004dff8c702eefb7214486bd18868fee1.html">Open in a new tab</a>

This `video` element has audio.

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

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/c3232f/dc2a0bf420d21c386d9a7027a888276c07271988.html">Open in a new tab</a>

This `video` element is not [visible][].

```html
<html lang="en">
	<video controls style="display: none;">
		<source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/silent.webm" type="video/webm" />
		<track kind="descriptions" src="/test-assets/rabbit-video/descriptions.vtt" />
	</video>
</html>
```

## Glossary

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

### Visible {#visible}

Content perceivable through sight.

Content is considered _visible_ if making it fully transparent would result in a difference in the pixels rendered for any part of the document that is currently within the viewport or can be brought into the viewport via scrolling.

[Content is defined in WCAG](https://www.w3.org/TR/WCAG22/#dfn-content).

For more details, see [examples of visible](https://act-rules.github.io/pages/examples/visible/).

[earl10-schema]: https://www.w3.org/TR/act-rules-format-1.1/#biblio-earl10-schema
[outcome property]: https://www.w3.org/TR/EARL10-Schema/#outcome
[test subject]: https://www.w3.org/TR/act-rules-format-1.1/#test-subject
[test target]: https://www.w3.org/TR/act-rules-format/#test-target
[visible]: #visible 'Definition of visible'
