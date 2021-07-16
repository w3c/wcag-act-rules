---
title: "video element auditory content has accessible alternative"
permalink: /standards-guidelines/act/rules/video-alternative-for-auditory-eac66b/
ref: /standards-guidelines/act/rules/video-alternative-for-auditory-eac66b/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/video-alternative-for-auditory-eac66b.md
proposed: true
rule_meta:
  id: eac66b
  name: "`video` element auditory content has accessible alternative"
  rule_type: composite
  description: |
    This rule checks that `video` elements have an alternative for information conveyed through audio.
  accessibility_requirements:
    'wcag20:1.2.2':
      forConformance: true
      failed: not satisfied
      passed: further testing needed
      inapplicable: further testing needed
    'wcag-technique:G87':
      forConformance: false
      failed: not satisfied
      passed: further testing needed
      inapplicable: further testing needed
    'wcag-technique:G93':
      forConformance: false
      failed: not satisfied
      passed: further testing needed
      inapplicable: further testing needed
    'wcag-technique:H95':
      forConformance: false
      failed: not satisfied
      passed: further testing needed
      inapplicable: further testing needed
  input_aspects:
    - ab4d13
    - f51b46
  last_modified: July 16th, 2021
  scs_tested:
    - handle: Captions (Prerecorded)
      num: 1.2.2
      level: A
---

## Applicability

This rule applies to every [non-streaming](#non-streaming-media-element) `video` element that is [visible][], where the video contains audio.

## Expectation

For each test target, the [outcome](#outcome) of at least one of the following rules is passed:

- [`Video` Element Content Is Media Alternative For Text](https://act-rules.github.io/rules/ab4d13)
- [`Video` Element Auditory Content Has Captions](https://act-rules.github.io/rules/f51b46)

## Assumptions

- This rule assumes that the video element is used to play synchronized media (video with audio), and that there is a mechanism to start the media.
- This rule assumes that the language of each test target can be correctly determined (either programmatically or by analyzing the content), and sufficiently understood.

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- [Understanding Success Criterion 1.2.2: Captions (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/captions-prerecorded)
- [G93: Providing open (always visible) captions](https://www.w3.org/WAI/WCAG21/Techniques/general/G93)
- [G87: Providing closed captions](https://www.w3.org/WAI/WCAG21/Techniques/general/G87)
- [H95: Using the track element to provide captions](https://www.w3.org/WAI/WCAG21/Techniques/html/H95)

## Test Cases

### Passed

#### Passed Example 1

A video element with an associated track element that contains captions for all the audio.

```html
<html lang="en">
	<video src="/test-assets/perspective-video/perspective-video.mp4" controls>
		<track src="/test-assets/perspective-video/perspective-caption.vtt" kind="captions" />
	</video>
</html>
```

#### Passed Example 2

A video element that describes some of the text on the same page. The text on the page labels the video as an alternative.

```html
<html lang="en">
	<p>
		Web Accessibility Perspectives: Keyboard Accessibility. Not being able to use your computer because your mouse doesn't work, is frustrating. Many people use only the
		keyboard to navigate websites. Either through preference or circumstance. This is solved by keyboard compatibility.
		Keyboard compatibility is described in WCAG. See the video below to watch the same information again in video form.
	</p>
	<video src="/test-assets/perspective-video/perspective-video.mp4" controls></video>
</html>
```

### Failed

#### Failed Example 1

A video element without any form of captions.

```html
<html lang="en">
	<video src="/test-assets/perspective-video/perspective-video.mp4" controls></video>
</html>
```

#### Failed Example 2

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

### Inapplicable

#### Inapplicable Example 1

A video element that is not [visible][].

```html
<html lang="en">
	<video src="/test-assets/perspective-video/perspective-video.mp4" controls style="display: none;"></video>
</html>
```

#### Inapplicable Example 2

A video element without audio.

```html
<html lang="en">
	<video src="/test-assets/perspective-video/perspective-video-silent.mp4" controls></video>
</html>
```

## Glossary

{% include_relative glossary/non-streaming-media-element.md %}
{% include_relative glossary/outcome.md %}
{% include_relative glossary/visible.md %}

{% include implementations/eac66b.md %}

## Acknowledgements

This rule was written in the [ACT Rules community group](https://w3.org/community/act-r/), 
with the support of the EU-funded [WAI-Tools Project](https://www.w3.org/WAI/about/projects/wai-tools/).

### Authors

- [Brian Bors](https://www.linkedin.com/in/brianbors/)
- [Wilco Fiers](https://github.com/wilcofiers)

## Changelog

This is the first version of this ACT rule.

[visible]: #visible 'Definition of visible'
