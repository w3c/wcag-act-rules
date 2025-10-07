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
  <p><strong>Date:</strong> Updated 7 October 2025</p>
  <p><strong>Authors:</strong> <a href="https://www.linkedin.com/in/brianbors/">Brian Bors</a>, <a href="https://github.com/wilcofiers">Wilco Fiers</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
  
  <p><strong>Assets:</strong> Test cases use assets from the following sources: Web Accessibility Perspective videos by W3C WAI.</p>
proposed: true
rule_meta:
  id: f51b46
  name: "Video element auditory content has captions"
  rule_type: atomic
  original_file: video-captions-f51b46.md
  description: |
    This rule checks that captions are available for audio information in non-streaming `video` elements.
  last_modified: 7 October 2025
---

## Applicability

This rule applies to every [non-streaming](#non-streaming-media-element) `video` element that is [visible][] where the video contains [audio](#audio-output) that is not only silence.

## Expectation

For each test target, audio information that is not conveyed visually in the video, is available through [captions](https://www.w3.org/TR/WCAG22/#dfn-captions).

**Note:** Captions can be either embedded in the video file itself or can be made available trough a separate track.

## Background

### Assumptions

This rule assumes that the video element is used to play a video (for example, not only used to display an image), and that there is a mechanism to start the video.

### Accessibility Support

There are no accessibility support issues known.

### Bibliography

- [Understanding Success Criterion 1.2.2: Captions (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded)
- [G93: Providing open (always visible) captions](https://www.w3.org/WAI/WCAG22/Techniques/general/G93)
- [G87: Providing closed captions](https://www.w3.org/WAI/WCAG22/Techniques/general/G87)
- [H95: Using the track element to provide captions](https://www.w3.org/WAI/WCAG22/Techniques/html/H95)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>G87: Providing closed captions</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG22/Techniques/general/G87">Learn more about technique G87</a></li>
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
      <li><a href="https://www.w3.org/WAI/WCAG22/Techniques/general/G93">Learn more about technique G93</a></li>
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
      <li><a href="https://www.w3.org/WAI/WCAG22/Techniques/html/H95">Learn more about technique H95</a></li>
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

- [1.2.1 Audio-only and Video-only (Prerecorded) (Level A)](https://www.w3.org/TR/WCAG22/#audio-only-and-video-only-prerecorded): This success criterion is **less strict** than this rule. This is because the rule does not consider that the video may be a media alternative for text. Some of the failed examples satisfy this success criterion.

## Input Aspects

The following aspects are required in using this rule.

- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)
- [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)
- [Audio output](https://www.w3.org/TR/act-rules-aspects/#input-aspects-audio-out)
- Visual output (no link available)

## Examples

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
