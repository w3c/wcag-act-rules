---
title: "Audio and visuals of video element have transcript"
permalink: /standards-guidelines/act/rules/1a02b0/proposed/
ref: /standards-guidelines/act/rules/1a02b0/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/1a02b0/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> 1a02b0</p>
  <p><strong>Date:</strong> Updated 19 January 2026</p>
  <p><strong>Authors:</strong> <a href="https://www.linkedin.com/in/brianbors/">Brian Bors</a>, <a href="https://github.com/wilcofiers">Wilco Fiers</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule conforms to <a href="https://www.w3.org/TR/act-rules-format-1.1/">ACT Rules Format 1.1</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
  
  <p><strong>Assets:</strong> Test cases use assets from the following sources: Rabbit video is © copyright 2008, Blender Foundation / <a href="https://www.bigbuckbunny.org">www.bigbuckbunny.org</a></p>
proposed: true
rule_meta:
  id: 1a02b0
  name: "Audio and visuals of video element have transcript"
  rule_type: atomic
  original_file: video-transcript-1a02b0.md
  description: |
    This rule checks that non-streaming `video` elements have all audio and visual information available in a transcript.
  last_modified: 19 January 2026
  scs_tested:
    - handle: Media Alternative (Prerecorded)
      num: 1.2.8
      level: AAA
---

## Applicability

This rule applies to every [non-streaming](#non-streaming-media-element) `video` element that is [visible][].

## Expectation

The visual information of each test target is available through a text transcript that is [included in the accessibility tree][], and is either on the page or linked.

**Note:** A "text transcript" in the context of this rule is defined in WCAG 2 as an [alternative for time based media](https://www.w3.org/TR/WCAG22/#dfn-alternative-for-time-based-media).

## Background

### Assumptions

- This rule assumes that a mechanism is available to start the video and that the video element is not simply used to display the [poster](https://www.w3.org/TR/html5/semantics-embedded-content.html#element-attrdef-video-poster).
- Users who are not visually impaired can comprehend the contents of the video through visual cues and information presented visually.

### Accessibility Support

There are no accessibility support issues known.

### Other Resources

- [Understanding Success Criterion 1.2.3: Audio Description or Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-description-or-media-alternative-prerecorded)
- [Understanding Success Criterion 1.2.8: Media Alternative (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/media-alternative-prerecorded)
- [G78: Providing a second, user-selectable, audio track that includes audio descriptions](https://www.w3.org/WAI/WCAG22/Techniques/general/G78)
- [G173: Providing a version of a movie with audio descriptions](https://www.w3.org/WAI/WCAG22/Techniques/general/G173)
- [G203: Using a static text alternative to describe a talking head video](https://www.w3.org/WAI/WCAG22/Techniques/general/G203)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>1.2.8 Media Alternative (Prerecorded) (Level AAA)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG22/#media-alternative-prerecorded">Learn more about 1.2.8 Media Alternative (Prerecorded)</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level AAA.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>G69: Providing an alternative for time based media</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG22/Techniques/general/G69">Learn more about technique G69</a></li>
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

- [1.3.1 Info and Relationships (Level A)](https://www.w3.org/TR/WCAG22/#info-and-relationships): This success criterion is **related** to this rule. This is because this criterion applies to a visible transcript.
- [1.2.1 Audio-only and Video-only (Prerecorded) (Level A)](https://www.w3.org/TR/WCAG22/#audio-only-and-video-only-prerecorded): This success criterion is **less strict** than this rule. This is because this criterion does not require a transcript when the audio-only or video-only is a media alternative for text and is clearly labeled as such. Some of the failed examples may satisfy this success criterion.

## Input Aspects

The following aspects are required in using this rule.

- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)
- [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)
- [Audio output](https://www.w3.org/TR/act-rules-aspects/#input-aspects-audio-out)
- Visual output (no link available)
- [Language](https://www.w3.org/TR/act-rules-aspects/#input-aspects-text)

## Examples

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

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/1a02b0/8ebc51b6599b22345051dc57d2c7649724f58f0b.html">Open in a new tab</a>

A video element with a visible text transcript on the same page.

```html
<html lang="en">`
<video controls>
  <source src="/test-assets/rabbit-video/video.mp4" type="video/mp4"></source>
  <source src="/test-assets/rabbit-video/video.webm" type="video/webm"></source>
</video>
<p>The above video shows a giant fat rabbit climbing out of a hole in the ground.
He stretches, yaws, and then starts walking.
Then he stops to scratch his bottom.</p>
</html>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/1a02b0/07965ba721519d8e4c53bc91692db1f97b8d7575.html">Open in a new tab</a>

A video element with a link to a text transcript on a different page.

```html
<html lang="en">`
<video controls>
  <source src="/test-assets/rabbit-video/video.mp4" type="video/mp4"></source>
  <source src="/test-assets/rabbit-video/video.webm" type="video/webm"></source>
</video>
<a href="/test-assets/rabbit-video/transcript.html">Transcript</a>
</html>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/1a02b0/a96a4eb928454e8fbf06f6e7c6ef1269f30c77df.html">Open in a new tab</a>

This `video` element has a non-visible text transcript available on the same page.

```html
<html lang="en">
<video controls>
  <source src="/test-assets/rabbit-video/video.mp4" type="video/mp4"></source>
  <source src="/test-assets/rabbit-video/video.webm" type="video/webm"></source>
</video>
<p style="position:absolute; left:-9999px; top:auto; width:1px; height:1px; overflow:hidden;">The above video shows a giant fat rabbit climbing out of a hole in the ground.
He stretches, yaws, and then starts walking.
Then he stops to scratch his bottom.</p>
</html>
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/1a02b0/a4db5d80848f49290a026e2ee5c0fa7416f14dc6.html">Open in a new tab</a>

A video element with an associated track element that contains captions for all the audio and a transcript on the page.

```html
<html lang="en">
	<video src="/test-assets/perspective-video/perspective-video.mp4" controls>
		<track src="/test-assets/perspective-video/perspective-caption.vtt" kind="captions" />
	</video>
	<p>	Web Accessibility Perspectives: Keyboard Accessibility. Not being able to use your computer because your mouse doesn't work, is frustrating. (A computer user's mouse breaks when it falls off the desk.) Many people use only the keyboard to navigate websites. Either through preference or 		circumstance. (A person wearing a sling on her arm typing with one hand.) </p>
</html>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/1a02b0/5f361cfcf29c6c37a88c0fcdb4246fd8ec0a65c1.html">Open in a new tab</a>

A video element with an incorrect text transcript on the same page.

```html
<html lang="en">`
<video controls>
  <source src="/test-assets/rabbit-video/video.mp4" type="video/mp4"></source>
  <source src="/test-assets/rabbit-video/video.webm" type="video/webm"></source>
</video>
<p>The above video shows a giant fat dog climbing out of a hole in the ground.
He stretches, yaws, and then starts walking.
Then he stops to scratch his bottom.</p>
</html>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/1a02b0/50ee346de986982007936f25602b28bf6929ea5d.html">Open in a new tab</a>

A video element with a link to an incorrect text transcript on a different page.

```html
<html lang="en">`
<video controls>
  <source src="/test-assets/rabbit-video/video.mp4" type="video/mp4"></source>
  <source src="/test-assets/rabbit-video/video.webm" type="video/webm"></source>
</video>
<a href="/test-assets/rabbit-video/incorrect-transcript.html">Transcript</a>
</html>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/1a02b0/58833c5284a944298827df756cc31d10cea1f58f.html">Open in a new tab</a>

This `video` element has a text transcript available on the same page, but the transcript is not [included in the accessibility tree][].

```html
<html lang="en">
<video controls>
  <source src="/test-assets/rabbit-video/video.mp4" type="video/mp4"></source>
  <source src="/test-assets/rabbit-video/video.webm" type="video/webm"></source>
</video>
<p aria-hidden="true">The above video shows a giant fat rabbit climbing out of a hole in the ground.
He stretches, yaws, and then starts walking.
Then he stops to scratch his bottom.</p>
</html>
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/1a02b0/9f640c8743b6ebee3942fc833f106984b5ee49bb.html">Open in a new tab</a>

A video element with audio does not have a text transcript.

```html
<html lang="en">
	<video src="/test-assets/perspective-video/perspective-video.mp4" controls>
		<track src="/test-assets/perspective-video/perspective-caption.vtt" kind="captions" />
	</video>
</html>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/1a02b0/1594b82a7acb107fc96345b864d4c1fe92f4b165.html">Open in a new tab</a>

A video element that is not [visible][].

```html
<html lang="en">`
<video controls style="display: none;">
  <source src="/test-assets/rabbit-video/video.mp4" type="video/mp4"></source>
  <source src="/test-assets/rabbit-video/video.webm" type="video/webm"></source>
</video>
<a href="/test-assets/rabbit-video/transcript.html">Transcript</a>
</html>
```

## Glossary

### Focusable {#focusable}

An element is _focusable_ if one or both of the following are true:

- the element is part of [sequential focus navigation][]; or
- the element has a [tabindex value][] that is not null.

**Exception**: Elements that lose focus and do not regain focus during a period of up to 1 second after gaining focus, without the user interacting with the page the element is on, are not considered _focusable_.

Notes:

- The 1 second time span is an arbitrary limit which is not included in WCAG. Given that scripts can manage the focus state of elements, testing the focusability of an element consistently would be impractical without a time limit.
- The [tabindex value][] of an element is the value of the [tabindex attribute][] parsed using the [rules for parsing integers][]. For the [tabindex value][] to be different from null, it needs to be [parsed][rules for parsing integers] without errors.

### Included in the accessibility tree {#included-in-the-accessibility-tree}

Elements included in the accessibility tree of platform specific accessibility APIs are exposed to assistive technologies. This allows users of assistive technology to access the elements in a way that meets the requirements of the individual user.

The general rules for when elements are included in the accessibility tree are defined in the [core accessibility API mappings](https://www.w3.org/TR/core-aam/). For native markup languages, such as HTML and SVG, additional rules for when elements are included in the accessibility tree can be found in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/) and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/).

For more details, see [examples of included in the accessibility tree][].

[Programmatically hidden](#programmatically-hidden) elements are removed from the accessibility tree. However, some browsers will leave [focusable](#focusable) elements with an `aria-hidden` attribute set to `true` in the accessibility tree. Because they are hidden, these elements are considered **not** included in the accessibility tree. This may cause confusion for users of assistive technologies because they may still be able to interact with these focusable elements using sequential keyboard navigation, even though the element should not be included in the accessibility tree.

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

### Programmatically Hidden {#programmatically-hidden}

An HTML element is _programmatically hidden_ if either it has a [computed][] CSS property `visibility` whose value is not `visible`; or at least one of the following is true for any of its [inclusive ancestors][] in the [flat tree][]:

- has a [computed][] CSS property `display` of `none`; or
- has an `aria-hidden` attribute set to `true`

**Note**: Contrary to the other conditions, the `visibility` CSS property may be reverted by descendants.

**Note**: The [HTML standard suggests](https://html.spec.whatwg.org/multipage/rendering.html#hidden-elements) setting the CSS `display` property to `none` for elements with the `hidden` attribute. While not required by HTML, all modern browsers follow this suggestion. Because of this the `hidden` attribute is not used in this definition. In browsers that use this suggestion, overriding the CSS `display` property can reveal elements with the `hidden` attribute.

### Visible {#visible}

Content perceivable through sight.

Content is considered _visible_ if making it fully transparent would result in a difference in the pixels rendered for any part of the document that is currently within the viewport or can be brought into the viewport via scrolling.

[Content is defined in WCAG](https://www.w3.org/TR/WCAG22/#dfn-content).

For more details, see [examples of visible](https://www.w3.org/WAI/standards-guidelines/act/rules/terms/visible/examples/).

[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[earl10-schema]: https://www.w3.org/TR/act-rules-format-1.1/#biblio-earl10-schema
[examples of included in the accessibility tree]: https://www.w3.org/WAI/standards-guidelines/act/rules/terms/included-in-the-accessibility-ree/examples/
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[outcome property]: https://www.w3.org/TR/EARL10-Schema/#outcome
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[test subject]: https://www.w3.org/TR/act-rules-format-1.1/#test-subject
[test target]: https://www.w3.org/TR/act-rules-format/#test-target
[visible]: #visible 'Definition of visible'
