---
title: "audio element content has text alternative"
permalink: /standards-guidelines/act/rules/e7aa44/proposed/
ref: /standards-guidelines/act/rules/e7aa44/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/e7aa44/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> e7aa44</p>
  <p><strong>Date:</strong> Updated 16 March 2022</p>
  <p><strong>Authors:</strong> <a href="https://www.linkedin.com/in/brianbors/">Brian Bors</a>, <a href="https://github.com/john-urbilog">John Hicks</a>, <a href="https://github.com/Rafalchar">Rafal Charlampowicz</a>, <a href="https://github.com/wilcofiers">Wilco Fiers</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: e7aa44
  name: "`audio` element content has text alternative"
  rule_type: composite
  description: |
    This rule checks if audio only elements have a text alternative available.
  last_modified: 16 March 2022
  scs_tested:
    - handle: Audio-only and Video-only (Prerecorded)
      num: 1.2.1
      level: A
---

## Applicability

This rule applies to any [non-streaming](#non-streaming-media-element) `audio` element that is:

- playing; or,
- has a "play button" that is [visible][] and [included in the accessibility tree](#included-in-the-accessibility-tree).

**Note:** A play button is an interactive element that when activated, plays the audio.

## Expectation

For each test target, the [outcome](#outcome) of at least one of the following rules is passed:

- [`Audio` Element Content Has Transcript](https://act-rules.github.io/rules/2eb176)
- [`Audio` Element Content Is Media Alternative For Text](https://act-rules.github.io/rules/afb423)

## Assumptions

This rule assumes that the language of each test target can be correctly determined (either programmatically or by analyzing the content), and sufficiently understood.

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

### Bibliography

- [Understanding SC 1.2.1:Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG21/Understanding/audio-only-and-video-only-prerecorded)
- [G158: Providing an alternative for time-based media for audio-only content](https://www.w3.org/WAI/WCAG21/Techniques/general/G158)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>1.2.1 Audio-only and Video-only (Prerecorded) (Level A)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#audio-only-and-video-only-prerecorded">Learn more about 1.2.1 Audio-only and Video-only (Prerecorded)</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level A and higher.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>G158: Providing an alternative for time-based media for audio-only content</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G158">Learn more about technique G158</a></li>
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

- [`audio` element content has transcript](/standards-guidelines/act/rules/audio-transcript-2eb176/)
- [`audio` element content is media alternative for text](/standards-guidelines/act/rules/audio-as-media-alternative-afb423/)

## Test Cases

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/e7aa44/85c98d1402dbc9c68ace2fbf5f063d145b8e5bd7.html">Open in a new tab</a>

Audio with controls and internal transcript

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
	<p>
		The above audio contains the following speech: We choose to go to the moon in this decade and do the other things,
		not because they are easy, but because they are hard, because that goal will serve to organize and measure the best
		of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to
		postpone, and one which we intend to win, and the others, too.
	</p>
</html>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/e7aa44/dedfb667190bd564527247550565cdea8ccefd3f.html">Open in a new tab</a>

An audio element that describes some of the text on the same page. The text on the page labels the audio as an alternative.

```html
<html lang="en">
	<p>
		A part of a speech by John F. Kennedy: We choose to go to the moon in this decade and do the other things, not
		because they are easy, but because they are hard, because that goal will serve to organize and measure the best of
		our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to
		postpone, and one which we intend to win, and the others, too.
	</p>
	<p>
		You can also listen to the audio file below to hear the above part of the speech.
	</p>
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
</html>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/e7aa44/58cd3c1ef1ce88b7878c9e11c4f610486faefbf6.html">Open in a new tab</a>

Audio with controls and incorrect internal transcript

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
	<p>
		The above audio contains the following speech: We choose to go to the cheese in this decade and do the other things,
		not because they are easy, but because they are hard, because that goal will serve to organize and measure the best
		of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to
		postpone, and one which we intend to win, and the others, too.
	</p>
</html>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/e7aa44/6f9ab7a874b2d555e94957abaec5f6e908b6c206.html">Open in a new tab</a>

An audio element that describes some of the text on the same page. The text is not [visible][] on the page.

```html
<html lang="en">
	<p style="display: none;">
		A part of a speech by John F. Kennedy: We choose to go to the moon in this decade and do the other things, not
		because they are easy, but because they are hard, because that goal will serve to organize and measure the best of
		our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to
		postpone, and one which we intend to win, and the others, too.
	</p>
	<p>
		You can also listen to the audio file below to hear the above part of the speech.
	</p>
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
</html>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/e7aa44/eba170767ac1de0092d33a9bee2c0ecf2ebdfd46.html">Open in a new tab</a>

Audio without controls.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3"></audio>
</html>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/e7aa44/1c9dada7fa918fd9cffdd6d4c3443107aee373f5.html">Open in a new tab</a>

An audio element that describes some of the text on the same page. The text on the page labels the audio as an alternative but the controls are not [visible][] on the page.

```html
<html lang="en">
	<p>
		A part of a speech by John F. Kennedy: We choose to go to the moon in this decade and do the other things, not
		because they are easy, but because they are hard, because that goal will serve to organize and measure the best of
		our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to
		postpone, and one which we intend to win, and the others, too.
	</p>
	<p>
		You can also listen to the audio file below to hear the above part of the speech.
	</p>
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls style="display: none;"></audio>
</html>
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/e7aa44/39721898dc02683e926a5cfa21afea1bcf477219.html">Open in a new tab</a>

This `a` element links to an audio file, but there is no `audio` element on this page.

```html
<html lang="en">
	<p>
		A part of a speech by John F. Kennedy: We choose to go to the moon in this decade and do the other things, not
		because they are easy, but because they are hard, because that goal will serve to organize and measure the best of
		our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to
		postpone, and one which we intend to win, and the others, too.
	</p>
	<p>
		<a href="/test-assets/moon-audio/moon-speech.mp3">Download the speach as MP3</a>
	</p>
</html>
```

## Glossary

### Focusable {#focusable}

An element is _focusable_ if one or both of the following are true:

- the element is part of [sequential focus navigation][]; or
- the element has a [tabindex value][] that is not null.

**Exception**: Elements that lose focus during a period of up to 1 second after gaining focus, without the user interacting with the page the element is on, are not considered _focusable_.

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

An _outcome_ is a conclusion that comes from evaluating an ACT Rule on a [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) or one of its constituent [test target](https://www.w3.org/TR/act-rules-format/#test-target). An outcome can be one of the three following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) meets all expectations
- **Failed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) does not meet all expectations

**Note:** A rule has one `passed` or `failed` outcome for every [test target](https://www.w3.org/TR/act-rules-format/#test-target). When there are no test targets the rule has one `inapplicable` outcome. This means that each [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) will have one or more outcomes.

**Note:** Implementations using the [EARL10-Schema](https://www.w3.org/TR/EARL10-Schema/) can express the outcome with the [outcome property](https://www.w3.org/TR/EARL10-Schema/#outcome). In addition to `passed`, `failed` and `inapplicable`, EARL 1.0 also defined an `incomplete` outcome. While this cannot be the outcome of an ACT Rule when applied in its entirety, it often happens that rules are only partially evaluated. For example, when applicability was automated, but the expectations have to be evaluated manually. Such "interim" results can be expressed with the `incomplete` outcome.

### Programmatically Hidden {#programmatically-hidden}

An HTML element is _programmatically hidden_ if either it has a [computed][] CSS property `visibility` whose value is not `visible`; or at least one of the following is true for any of its [inclusive ancestors][] in the [flat tree][]:

- has a [computed][] CSS property `display` of `none`; or
- has an `aria-hidden` attribute set to `true`

**Note**: Contrarily to the other conditions, the `visibility` CSS property may be reverted by descendants.

**Note**: The [HTML standard suggests](https://html.spec.whatwg.org/multipage/rendering.html#hidden-elements) rendering elements with the `hidden` attribute with a CSS rule that applies the value `none` to the CSS property `display` of the element. Although the suggestion is not normative, known user agents render it according to the suggestion (unless the content specifies another CSS rule that sets the value of the `display` property). If a user agent does not follow the suggestion, this definition may produce incorrect results for this user agent.

### Visible {#visible}

Content perceivable through sight.

Content is considered _visible_ if making it fully transparent would result in a difference in the pixels rendered for any part of the document that is currently within the viewport or can be brought into the viewport via scrolling.

[Content is defined in WCAG](https://www.w3.org/TR/WCAG21/#dfn-content).

For more details, see [examples of visible](https://act-rules.github.io/pages/examples/visible/).

{% include_relative _implementation-proposed.md %}

## Changelog

This is the first version of this ACT rule.

[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[visible]: #visible 'Definition of visible'
