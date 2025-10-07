---
title: "Audio element content has text alternative"
permalink: /standards-guidelines/act/rules/e7aa44/proposed/
ref: /standards-guidelines/act/rules/e7aa44/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/e7aa44/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> e7aa44</p>
  <p><strong>Date:</strong> Updated 7 October 2025</p>
  <p><strong>Authors:</strong> <a href="https://www.linkedin.com/in/brianbors/">Brian Bors</a>, <a href="https://github.com/john-urbilog">John Hicks</a>, <a href="https://github.com/Rafalchar">Rafal Charlampowicz</a>, <a href="https://github.com/wilcofiers">Wilco Fiers</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
  
  <p><strong>Assets:</strong> Test cases use assets from the following sources: JFK's "We Choose the Moon" speech excerpt is courtesy of NASA.</p>
proposed: true
rule_meta:
  id: e7aa44
  name: "Audio element content has text alternative"
  rule_type: composite
  original_file: audio-text-alternative-e7aa44.md
  description: |
    This rule checks that `audio` elements have a text alternative available.
  last_modified: 7 October 2025
  scs_tested:
    - handle: Audio-only and Video-only (Prerecorded)
      num: 1.2.1
      level: A
---

## Applicability

This rule applies to any [non-streaming](#non-streaming-media-element) `audio` element for which at least one of the following is true:

- has an `autoplay` [attribute value][] of true; or,
- has a [play button][] that is [visible][] and [included in the accessibility tree](#included-in-the-accessibility-tree).

## Expectation

For each test target, the [outcome](#outcome) of at least one of the following rules is passed:

- [`Audio` Element Content Has Transcript](https://www.w3.org/WAI/standards-guidelines/act/rules/2eb176/)
- [`Audio` Element Content Is Media Alternative For Text](https://www.w3.org/WAI/standards-guidelines/act/rules/afb423/)

## Background

### Assumptions

This rule assumes that the language of each test target can be correctly determined (either programmatically or by analyzing the content), and sufficiently understood.

### Accessibility Support

There are no accessibility support issues known.

### Bibliography

- [Understanding SC 1.2.1: Audio-only and Video-only (Prerecorded)](https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded)
- [G158: Providing an alternative for time-based media for audio-only content](https://www.w3.org/WAI/WCAG22/Techniques/general/G158)

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
    <summary><span>G158: Providing an alternative for time-based media for audio-only content</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG22/Techniques/general/G158">Learn more about technique G158</a></li>
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

- [Audio element content has transcript](/standards-guidelines/act/rules/audio-transcript-2eb176/)
- [Audio element content is media alternative for text](/standards-guidelines/act/rules/audio-as-media-alternative-afb423/)

## Examples

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/e7aa44/85c98d1402dbc9c68ace2fbf5f063d145b8e5bd7.html">Open in a new tab</a>

This `audio` element has a play button, and there is a transcript of the audio.

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

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/e7aa44/dedfb667190bd564527247550565cdea8ccefd3f.html">Open in a new tab</a>

This `audio` element has a play button, and the text on the page labels the audio as an alternative.

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

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/e7aa44/fae177d6e342bce9e0b7ea3dad353d4253bd4e67.html">Open in a new tab</a>

This `audio` element autoplays, and there is a transcript of the audio.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" autoplay controls></audio>
	<p>
		The above audio contains the following speech: We choose to go to the moon in this decade and do the other things,
		not because they are easy, but because they are hard, because that goal will serve to organize and measure the best
		of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to
		postpone, and one which we intend to win, and the others, too.
	</p>
</html>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/e7aa44/97850b2083474a9c7b9585c2a1cb16b85b370032.html">Open in a new tab</a>

This `audio` element has a play button but has an incorrect transcript.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
	<p>
		The above audio contains the following speech: We are going to the North Pole in this decade with puppies, not
		because they are easy, but because they are cute, because that goal will serve to organize and measure the best of
		our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to
		postpone, and one which we intend to win, and the others, too.
	</p>
</html>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/e7aa44/ef13bb60f3547081df4e6e0e668ef5497644a734.html">Open in a new tab</a>

This `audio` element autoplays but the text transcript is not [visible][] on the page.

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
	<audio src="/test-assets/moon-audio/moon-speech.mp3" autoplay controls></audio>
</html>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/e7aa44/eba170767ac1de0092d33a9bee2c0ecf2ebdfd46.html">Open in a new tab</a>

This `audio` element does not autoplay or have a play button.

```html
<html lang="en">
	<audio src="/test-assets/moon-audio/moon-speech.mp3"></audio>
</html>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/e7aa44/1c9dada7fa918fd9cffdd6d4c3443107aee373f5.html">Open in a new tab</a>

This `audio` element is labeled as an alternative by text on the same page, but the controls are not [visible][] on the page.

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

<a class="example-link" title="Inapplicable Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/e7aa44/7162304a7c27feed90f68fdf4587c94cb47dd300.html">Open in a new tab</a>

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
		<a href="/test-assets/moon-audio/moon-speech.mp3">Download the speech as MP3</a>
	</p>
</html>
```

## Glossary

### Attribute value {#attribute-value}

The <dfn id="attribute-value:attribute">attribute value</dfn> of a content attribute set on an HTML element is the value that the attribute gets after being parsed and computed according to specifications. It may differ from the value that is actually written in the HTML code due to trimming whitespace or non-digits characters, default values, or case-insensitivity.

Some notable case of attribute value, among others:

- For [enumerated attributes][], the <dfn id="attribute-value:enumerated">attribute value</dfn> is either the state of the attribute, or the keyword that maps to it; even for the default states. Thus `<input type="image" />` has an attribute value of either `Image Button` (the state) or `image` (the keyword mapping to it), both formulations having the same meaning; similarly, "an input element with a `type` _attribute value_ of `Text`" can be either `<input type="text" />`, `<input />` (missing value default), or `<input type="invalid" />` (invalid value default).
- For [boolean attributes][], the <dfn id="attribute-value:boolean">attribute value</dfn> is `true` when the attribute is present and `false` otherwise. Thus `<button disabled>`, `<button disabled="disabled">` and `<button disabled="">` all have a `disabled` _attribute value_ of `true`.
- For attributes whose value is used in a case-insensitive context, the <dfn id="attribute-value:case-insensitive">attribute value</dfn> is the lowercase version of the value written in the HTML code.
- For attributes that accept [numbers][], the <dfn id="attribute-value:number">attribute value</dfn> is the result of parsing the value written in the HTML code according to the rules for parsing this kind of number.
- For attributes that accept sets of tokens, whether [space separated][] or [comma separated][], the <dfn id="attribute-value:tokens-list">attribute value</dfn> is the set of tokens obtained after parsing the set and, depending on the case, converting its items to lowercase (if the set is used in a case-insensitive context).
- For `aria-*` attributes, the <dfn id="attribute-value:aria">attribute value</dfn> is computed as indicated in the [WAI-ARIA specification][] and the [HTML Accessibility API Mappings][html aam].

This list is not exhaustive, and only serves as an illustration for some of the most common cases.

The <dfn id="attribute-value:idl">attribute value</dfn> of an [IDL attribute][] is the value returned on getting it. Note that when an [IDL attribute][] [reflects][reflect] a content attribute, they have the same attribute value.

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

### Instrument to achieve an objective {#instrument-to-achieve-an-objective}

An [HTML element][] that when [activated][] allows an end-user to achieve an objective.

**Note**: Any rule that uses this definition must provide an unambiguous description of the objective the instrument is used to achieve.

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

### Play button {#play-button}

A play button is an [instrument][] that when [activated][] plays a [media resource][].

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

For more details, see [examples of visible](https://act-rules.github.io/pages/examples/visible/).

[activated]: https://html.spec.whatwg.org/#activation
[attribute value]: #attribute-value 'Definition of Attribute Value'
[boolean attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes 'HTML Specification of Boolean Attribute'
[comma separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#comma-separated-tokens 'HTML Specification of Comma Separated Tokens'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[earl10-schema]: https://www.w3.org/TR/act-rules-format-1.1/#biblio-earl10-schema
[enumerated attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute 'HTML Specification of Enumerated Attribute'
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[html aam]: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings 'Specification of HTML attributes value mapping to ARIA states and properties'
[html element]: https://html.spec.whatwg.org/multipage/dom.html#htmlelement
[idl attribute]: https://heycam.github.io/webidl/#idl-attributes "Definition of Web IDL Attribute (Editor's Draft)"
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[instrument]: #instrument-to-achieve-an-objective
[mechanism]: https://www.w3.org/TR/WCAG22/#dfn-mechanism 'WCAG Definition of Mechanism'
[media resource]: https://html.spec.whatwg.org/multipage/media.html#media-resource
[numbers]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#numbers 'HTML Specification of Number Parsing'
[outcome property]: https://www.w3.org/TR/EARL10-Schema/#outcome
[play button]: #play-button 'Definition of play button'
[reflect]: https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes 'HTML specification of Reflecting Content Attributes in IDL Attributes'
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[sc211]: https://www.w3.org/TR/WCAG22/#keyboard 'Success Criterion 2.1.1 Keyboard'
[sc412]: https://www.w3.org/TR/WCAG22/#name-role-value 'Success Criterion 4.1.2 Name, Role, Value'
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[space separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens 'HTML Specification of Space Separated Tokens'
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[test subject]: https://www.w3.org/TR/act-rules-format-1.1/#test-subject
[test target]: https://www.w3.org/TR/act-rules-format/#test-target
[visible]: #visible 'Definition of visible'
[wai-aria specification]: https://www.w3.org/TR/wai-aria-1.2/#propcharacteristic_value 'WAI-ARIA Specification of States and Properties Value'
