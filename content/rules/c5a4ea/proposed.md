---
title: "Video element visual content has accessible alternative"
permalink: /standards-guidelines/act/rules/c5a4ea/proposed/
ref: /standards-guidelines/act/rules/c5a4ea/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/c5a4ea/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> c5a4ea</p>
  <p><strong>Date:</strong> Updated 25 January 2024</p>
  <p><strong>Authors:</strong> <a href="https://www.linkedin.com/in/brianbors/">Brian Bors</a>, <a href="https://github.com/wilcofiers">Wilco Fiers</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
  
  <p><strong>Assets:</strong> Test cases use assets from the following sources: Rabbit video is © copyright 2008, Blender Foundation / <a href="https://www.bigbuckbunny.org">www.bigbuckbunny.org</a>; Web Accessibility Perspective videos by W3C WAI.</p>
proposed: true
rule_meta:
  id: c5a4ea
  name: "Video element visual content has accessible alternative"
  rule_type: composite
  original_file: video-alternative-for-visual-c5a4ea.md
  description: |
    This rule checks that `video` elements with audio have an alternative for the video content as audio or as text.
  last_modified: 25 January 2024
  scs_tested:
    - handle: Audio Description or Media Alternative (Prerecorded)
      num: 1.2.3
      level: A
---

## Test Procedure

## Applicability

This rule applies to every [non-streaming](#non-streaming-media-element) `video` element that is [visible][], where the video contains audio.

## Expectation

For each test target, the [outcome](#outcome) of at least one of the following rules is passed:

- [`Video` Element Visual Content Has Audio Description](https://www.w3.org/WAI/standards-guidelines/act/rules/1ea59c/)
- [`Video` Element Visual Content Has Transcript](https://www.w3.org/WAI/standards-guidelines/act/rules/1a02b0/)
- [`Video` Element Content Is Media Alternative For Text](https://www.w3.org/WAI/standards-guidelines/act/rules/ab4d13/)

## Assumptions

- This rule assumes that a mechanism is available to start the video and that the video element is not simply used to display the [poster](https://www.w3.org/TR/html5/semantics-embedded-content.html#element-attrdef-video-poster).
- This rule assumes that the language of each test target can be correctly determined (either programmatically or by analyzing the content), and sufficiently understood.

## Accessibility Support

The HTML `video` element can also have a `track` element that provides an audio description. This should provide assistive technologies with a timed text description of visual information in a video. However, there is no native support in any major browser for this technique. Technique [H96: Using the track element to provide audio descriptions](https://www.w3.org/WAI/WCAG22/Techniques/html/H96) can not be relied upon to conform to [1.2.3: Audio Description or Media Alternative (Prerecorded)][sc123].

## Background

### Bibliography

- [Understanding Success Criterion 1.2.5: Audio Description (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html)
- [G78: Providing a second, user-selectable, audio track that includes audio descriptions](https://www.w3.org/WAI/WCAG22/Techniques/general/G78)
- [G173: Providing a version of a movie with audio descriptions](https://www.w3.org/WAI/WCAG22/Techniques/general/G173)
- [G8: Providing a movie with extended audio descriptions](https://www.w3.org/WAI/WCAG22/Techniques/general/G8)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>1.2.3 Audio Description or Media Alternative (Prerecorded) (Level A)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#audio-description-or-media-alternative-prerecorded">Learn more about 1.2.3 Audio Description or Media Alternative (Prerecorded)</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level A and higher.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>G8: Providing a movie with extended audio descriptions</span></summary>
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
  <li><details>
    <summary><span>G69: Providing an alternative for time based media</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G69">Learn more about technique G69</a></li>
      <li>Not required for conformance to any W3C accessibility recommendation.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: technique is not satisfied</li>
        <li>All <code>passed</code> outcomes: technique needs further testing</li>
        <li>An <code>inapplicable</code> outcome: technique needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>G78: Providing a second, user-selectable, audio track that includes audio descriptions</span></summary>
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
  <li><details>
    <summary><span>G173: Providing a version of a movie with audio descriptions</span></summary>
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

### Secondary Requirements

This rule is related to the following accessibility requirements, but was 
not designed to test this requirements directly. These 
[secondary requirements](https://w3c.github.io/wcag-act/act-rules-format.html#secondary-requirements)
can either be stricter than the rule requires, or may be satisfied in ways 
not tested by the rule:

- [1.2.5 Audio Description (Prerecorded) (Level AA)](https://www.w3.org/TR/WCAG21/#audio-description-prerecorded): This success criterion is **more strict** than this rule. This is because the rule allows a media alternative in place of audio description. Some of the passed examples do not satisfy this success criterion.
- [1.2.8 Media Alternative (Prerecorded) (Level AAA)](https://www.w3.org/TR/WCAG21/#media-alternative-prerecorded): This success criterion is **more strict** than this rule. This is because the rule allows audio description in place of a media alternative. Some of the passed examples do not satisfy this success criterion.

## Input Rules

Outcomes of the following rules are required as input for this rule.

- [Video element visual content has audio description](/standards-guidelines/act/rules/video-audio-description-1ea59c/)
- [Audio and visuals of video element have transcript](/standards-guidelines/act/rules/video-transcript-1a02b0/)
- [Video element content is media alternative for text](/standards-guidelines/act/rules/video-as-media-alternative-ab4d13/)

## Test Cases

<details class="act-inline-assets" markdown="block">
<summary><span>These HTML files are used in several examples:</span></summary>

File [`/test-assets/rabbit-video/transcript.html`](https://w3.org/WAI/content-assets/wcag-act-rules/test-assets/rabbit-video/transcript.html):

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>Description of the rabbit video</title>
	</head>
	<body>
		<h1>Description of the rabbit video</h1>
		<p>
			The video shows a giant fat rabbit climbing out of a hole in the ground. He stretches, yawns, and then starts
			walking. Then he stops to scratch his bottom.
		</p>
	</body>
</html>
```

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

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/c5a4ea/830584542b47beaac2df52e84ceff7530be043fb.html">Open in a new tab</a>

This `video` element has an audio description because it has voiceover that describes the visual information.

```html
<html lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/video-with-voiceover.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/video-with-voiceover.webm" type="video/webm" />
	</video>
</html>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/c5a4ea/5168368fb6d8cc4ea41b679e312c84e283baea9f.html">Open in a new tab</a>

A video element with a link to a text transcript.

```html
<html lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/video.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/video.webm" type="video/webm" />
	</video>
	<a href="/test-assets/rabbit-video/transcript.html">Transcript</a>
</html>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/c5a4ea/91f5189004dff8c702eefb7214486bd18868fee1.html">Open in a new tab</a>

This video element describes some of the text on the same page. The text identifies the video as an alternative.

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

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/c5a4ea/4095c53d7b6550e5af6a9edf43ec7c803bc1e462.html">Open in a new tab</a>

This `video` element has an incorrect audio description.

```html
<html lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/video-with-incorrect-voiceover.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/video-with-incorrect-voiceover.webm" type="video/webm" />
	</video>
</html>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/c5a4ea/366b3437e37e58175a9edba0ce28a37e25d82902.html">Open in a new tab</a>

A video element with a link to an incorrect text transcript on a different page.

```html
<html lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/video.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/video.webm" type="video/webm" />
	</video>
	<a href="/test-assets/rabbit-video/incorrect-transcript.html">Transcript</a>
</html>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/c5a4ea/4b86a2baaa324f721a4bf646b87993be599b82a1.html">Open in a new tab</a>

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

#### Failed Example 4

<a class="example-link" title="Failed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/c5a4ea/92f8362bf7b6778410dd0a0f660918794c85df27.html">Open in a new tab</a>

A video element with a description track element. Description tracks are not supported.

```html
<html lang="en">
	<video controls>
		<source src="/test-assets/rabbit-video/video.mp4" type="video/mp4" />
		<source src="/test-assets/rabbit-video/video.webm" type="video/webm" />
		<track kind="descriptions" src="/test-assets/rabbit-video/descriptions.vtt" />
	</video>
</html>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/c5a4ea/8664da01669e891e6f0aa73cd85e71277961cc4c.html">Open in a new tab</a>

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

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/c5a4ea/1b605662e74aa7411e29dc56dfa4530efe95ae67.html">Open in a new tab</a>

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

[Content is defined in WCAG](https://www.w3.org/TR/WCAG22/#dfn-content).

For more details, see [examples of visible](https://act-rules.github.io/pages/examples/visible/).

[sc123]: https://www.w3.org/TR/WCAG22/#audio-description-or-media-alternative-prerecorded 'WCAG 2.2, Success Criterion 1.2.3 Audio Description or Media Alternative (Prerecorded)'
[visible]: #visible 'Definition of visible'
