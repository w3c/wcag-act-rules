---
title: "Video element auditory content has captions"
permalink: /standards-guidelines/act/rules/f51b46/proposed/
ref: /standards-guidelines/act/rules/f51b46/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/f51b46/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> f51b46</p>
  <p><strong>Date:</strong> Updated 2 February 2023</p>
  <p><strong>Authors:</strong> <a href="https://www.linkedin.com/in/brianbors/">Brian Bors</a>, <a href="https://github.com/wilcofiers">Wilco Fiers</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
  
  <p><strong>Assets:</strong> Test cases use assets from the following sources: Web Accessibility Perspective videos by W3C WAI.</p>
proposed: true
rule_meta:
  id: f51b46
  name: "Video element auditory content has captions"
  rule_type: atomic
  description: |
    This rule checks that captions are available for audio information in non-streaming `video` elements.
  last_modified: 2 February 2023
---

## Applicability

This rule applies to every [non-streaming](#non-streaming-media-element) `video` element that is [visible][] where the video contains [audio](#audio-output) that is not only silence.

## Expectation

For each test target, audio information that is not conveyed visually in the video, is available through [captions](https://www.w3.org/TR/WCAG21/#dfn-captions).

**Note:** Captions can be either embedded in the video file itself or can be made available trough a separate track.

## Assumptions

This rule assumes that the video element is used to play a video (for example, not only used to display an image), and that there is a mechanism to start the video.

## Accessibility Support

There are no accessibility support issues known.

## Background

### Bibliography

- [Understanding Success Criterion 1.2.2: Captions (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded)
- [G93: Providing open (always visible) captions](https://www.w3.org/WAI/WCAG21/Techniques/general/G93)
- [G87: Providing closed captions](https://www.w3.org/WAI/WCAG21/Techniques/general/G87)
- [H95: Using the track element to provide captions](https://www.w3.org/WAI/WCAG21/Techniques/html/H95)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>G87: Providing closed captions</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G87">Learn more about technique G87</a></li>
      <li>Not required for conformance to any W3C accessibility recommendation.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: technique is not satisfied</li>
        <li>All <code>passed</code> outcomes: technique needs further testing</li>
        <li>An <code>inapplicable</code> outcome: technique needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>G93: Providing open (always visible) captions</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G93">Learn more about technique G93</a></li>
      <li>Not required for conformance to any W3C accessibility recommendation.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: technique is not satisfied</li>
        <li>All <code>passed</code> outcomes: technique needs further testing</li>
        <li>An <code>inapplicable</code> outcome: technique needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>H95: Using the track element to provide captions</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H95">Learn more about technique H95</a></li>
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

## Test Cases

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/f51b46/107f5b9199edada98041895374e27e3c51fc6a3d.html">Open in a new tab</a>

A video element that has open captions for all of the audio content.

```html
<video src="/test-assets/perspective-video/perspective-video-with-captions.mp4" controls></video>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/f51b46/80bae3524849f9516dfdcdb647ecc44c6d439ac3.html">Open in a new tab</a>

A video element with an associated track element that contains captions for all of the audio content.

```html
<video src="/test-assets/perspective-video/perspective-video.mp4" controls>
	<track src="/test-assets/perspective-video/perspective-caption.vtt" kind="captions" />
</video>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/f51b46/af732f8f4e215ef60d49f6ada1f513e8d9776aa1.html">Open in a new tab</a>

A video element without any form of captions.

```html
<video src="/test-assets/perspective-video/perspective-video.mp4" controls></video>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/f51b46/b489643151f44cfeda7ad8356c1e46893c3d962c.html">Open in a new tab</a>

A video element with an associated track element that contains incorrect captions. Specifically, the captions flip the role of the mouse and computer by saying, "Not being able to use your mouse because your computer doesn't work is frustrating."

```html
<video src="/test-assets/perspective-video/perspective-video.mp4" controls>
	<track src="/test-assets/perspective-video/perspective-incorrect-caption.vtt" kind="captions" />
</video>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/f51b46/7a21303822a22edb9384d8956b95bcfe0c01a1fb.html">Open in a new tab</a>

A video element with text on the same page that describes the audio in the video.

```html
<p>
	The video below shows a man working on a keyboard. A voiceover is heard saying the following text: Web accessibility
	perspectives. Keyboard compatibility. Not being able to use your computer because your mouse doesn't work, is
	frustrating. Many people use only the keyboard to navigate websites. Either through preference or circumstance.
</p>
<video src="/test-assets/perspective-video/perspective-video.mp4" controls></video>
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/f51b46/a4bf1f36113b22a1c9d34d7155269b72cf5721fc.html">Open in a new tab</a>

A video element with an explicitly associated text on the same page that describes the audio in the video.

```html
<p id="text">
	The video below shows a man working on a keyboard. A voiceover is heard saying the following text: Web accessibility
	perspectives. Keyboard compatibility. Not being able to use your computer because your mouse doesn't work, is
	frustrating. Many people use only the keyboard to navigate websites. Either through preference or circumstance.
</p>
<video src="/test-assets/perspective-video/perspective-video.mp4" controls ariadescribedby="text"></video>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/f51b46/38d4f61c98b1fe90c7e9c3d3eddd8d82f0596b53.html">Open in a new tab</a>

A video element without audio.

```html
<video src="/test-assets/perspective-video/perspective-video-silent.mp4" controls></video>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/f51b46/85f831671b50b4472c1a08a9108612c5d39571c2.html">Open in a new tab</a>

A video element that is not [visible][].

```html
<video src="/test-assets/perspective-video/perspective-video.mp4" controls style="display: none;"></video>
```

## Glossary

### Audio output {#audio-output}

This [test aspect](https://www.w3.org/TR/act-rules-format/#input-aspects) includes all auditory data output from the web page into an audio channel.

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

[visible]: #visible 'Definition of visible'
