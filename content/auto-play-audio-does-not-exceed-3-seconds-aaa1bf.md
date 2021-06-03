---
title: "Audio or video that plays automatically has no audio that lasts more than 3 seconds"
permalink: /standards-guidelines/act/rules/auto-play-audio-does-not-exceed-3-seconds-aaa1bf/
ref: /standards-guidelines/act/rules/auto-play-audio-does-not-exceed-3-seconds-aaa1bf/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/auto-play-audio-does-not-exceed-3-seconds-aaa1bf.md
# footer: > # Text in footer in HTML
#   <p> This is the text in the footer </p>
---

{% include_relative _proposed-banner.html %}

Rule Type:
:   atomic

Rule ID:
:   aaa1bf

Last Modified:
:   June 3, 2021

Accessibility Requirements Mapping:
:   [G60: Playing a sound that turns off automatically within three seconds](https://www.w3.org/WAI/WCAG21/Techniques/general/G60)
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

## Description

`audio` or `video` that plays automatically does not output audio for more than 3 seconds.

## Applicability

This rule applies to any `audio` or `video` element for which all the following are true:

- (**autoplay**) the element has an `autoplay` [attribute value][] of `true`; and
- (**not muted**) the element has a `muted` [attribute value][] of `false`; and
- (**not paused**) the element has a `paused` [attribute value][] of `false`; and
- (**duration**) the element has a [media resource][] lasting more than 3 seconds and that contains audio.

## Expectation

For each test target the total audio output does not last more than 3 seconds.

**Note:** This rule does not cover single audio instances that play repeatedly for more than three seconds, or multiple audio instances for more than three seconds. The [WCAG Understanding documentation for 1.4.2 Audio Controls](https://www.w3.org/WAI/WCAG21/Understanding/audio-control.html) is ambiguous about how to handle these scenarios.

## Assumptions

_There are currently no assumptions_

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- [Understanding Success Criterion 1.4.2: Audio Control](https://www.w3.org/WAI/WCAG21/Understanding/audio-control.html)
- [F23: Failure of 1.4.2 due to playing a sound longer than 3 seconds where there is no mechanism to turn it off](https://www.w3.org/WAI/WCAG21/Techniques/failures/F23)
- [G60: Playing a sound that turns off automatically within three seconds](https://www.w3.org/WAI/WCAG21/Techniques/general/G60)
- [G171: Playing sounds only on user request](https://www.w3.org/WAI/WCAG21/Techniques/general/G171)

## Test Cases

### Passed

#### Passed Example 1

This `audio` element does not play automatically for more than 3 seconds.

```html
<audio src="/test-assets/moon-audio/moon-speech.mp3#t=25" autoplay></audio>
```

#### Passed Example 2

This `video` element's audio output does not last longer than 3 seconds.

```html
<video autoplay>
	<source src="/test-assets/rabbit-video/video.mp4#t=8,10" type="video/mp4" />
	<source src="/test-assets/rabbit-video/video.webm#t=8,10" type="video/webm" />
</video>
```

### Failed

#### Failed Example 1

This `audio` element plays automatically for more than 3 seconds.

```html
<audio src="/test-assets/moon-audio/moon-speech.mp3" autoplay controls></audio>
```

#### Failed Example 2

This `video` element plays some audio automatically for more than 3 seconds.

```html
<video autoplay>
	<source src="/test-assets/rabbit-video/video.mp4" type="video/mp4" />
	<source src="/test-assets/rabbit-video/video.webm" type="video/webm" />
</video>
```

### Inapplicable

#### Inapplicable Example 1

This `video` element has audio that autoplays for longer than 3 seconds but is muted.

```html
<video autoplay muted>
	<source src="/test-assets/rabbit-video/video.mp4" type="video/mp4" />
	<source src="/test-assets/rabbit-video/video.webm" type="video/webm" />
</video>
```

#### Inapplicable Example 2

This `video` element refers to a source file that has no audio output.

```html
<video autoplay>
	<source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4" />
	<source src="/test-assets/rabbit-video/silent.webm" type="video/webm" />
</video>
```

#### Inapplicable Example 3

This `audio` element does not autoplay.

```html
<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
```

## Glossary

{% include_relative glossary/attribute-value.md %}
{% include_relative glossary/outcome.md %}

## Acknowledgements

This rule was written in the [ACT Rules community group](https://w3.org/community/act-r/), 
with the support of the EU-funded [WAI-Tools Project](https://www.w3.org/WAI/about/projects/wai-tools/).

### Authors

- [Anne Thyme Nørregaard](https://github.com/annethyme)
- [Bryn Anderson](https://github.com/brynanders)

## Changelog

This is the first version of this ACT rule.

[attribute value]: #attribute-value 'Definition of Attribute Value'
[media resource]: https://html.spec.whatwg.org/multipage/media.html#media-resource 'HTML Specification of Media Resource'
