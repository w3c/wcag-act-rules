---
title: "Audio or video element avoids automatically playing audio"
permalink: /standards-guidelines/act/rules/80f0bf/proposed/
ref: /standards-guidelines/act/rules/80f0bf/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/80f0bf/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> 80f0bf</p>
  <p><strong>Date:</strong> Updated 15 February 2024</p>
  <p><strong>Authors:</strong> <a href="https://github.com/annethyme">Anne Thyme Nørregaard</a>, <a href="https://github.com/brynanders">Bryn Anderson</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
  
  <p><strong>Assets:</strong> Test cases use assets from the following sources: Rabbit video is © copyright 2008, Blender Foundation / <a href="https://www.bigbuckbunny.org">www.bigbuckbunny.org</a>; JFK's "We Choose the Moon" speech excerpt is courtesy of NASA.</p>
proposed: true
rule_meta:
  id: 80f0bf
  name: "Audio or video element avoids automatically playing audio"
  rule_type: composite
  original_file: audio-or-video-avoids-automatically-playing-audio-80f0bf.md
  description: |
    This rule checks that audio or video that plays automatically does not have audio that lasts for more than 3 seconds or has an audio control mechanism to stop or mute it.
  last_modified: 15 February 2024
  scs_tested:
    - handle: Audio Control
      num: 1.4.2
      level: A
---

## Applicability

This rule applies to any `audio` or `video` element for which all the following are true:

- **autoplay**: the element has an `autoplay` [attribute value][] of `true`; and
- **not muted**: the element has a `muted` [attribute value][] of `false`; and
- **not paused**: the element has a `paused` [attribute value][] of `false`; and
- **duration**: the element has a [media resource][] lasting more than 3 seconds and that contains audio.

## Expectation

For each test target, the [outcome](#outcome) of at least one of the following rules is passed:

- [Audio Or Video That Plays Automatically Has A Control Mechanism](https://www.w3.org/WAI/standards-guidelines/act/rules/4c31df/)
- [Audio Or Video That Plays Automatically Has No Audio That Lasts More Than 3 Seconds](https://www.w3.org/WAI/standards-guidelines/act/rules/aaa1bf/)

## Assumptions

- This rule assumes that it is not possible to satisfy [Success Criterion 1.4.2 Audio Control][sc142] if the total length of the automatically playing audio is more than 3 seconds, even if there are pauses in the sound and no more than 3 seconds in a row with actual sound.
- This rule assumes that the [mechanism](https://www.w3.org/TR/WCAG22/#dfn-mechanism) to control the sound must be located in the same [web page][]. Mechanisms located on other pages can still create accessibility issues for users relying on sound to navigate (e.g. screen readers users) since the autoplaying sound will interfere with their ability to find and activate the mechanism. If a [mechanism](https://www.w3.org/TR/WCAG22/#dfn-mechanism) external to the [web page][] is provided, it is possible to fail this rule but still satisfy [Success Criterion 1.4.2 Audio Control][sc142].
- This rule assumes that the [mechanism](https://www.w3.org/TR/WCAG22/#dfn-mechanism) to control the sound must be visible and accessible in order to be effective and usable by all kinds of users. If the mechanism is hidden to some users, it is possible to fail this rule but still satisfy [Success Criterion 1.4.2 Audio Control][sc142].

## Accessibility Support

The native `video` and `audio` controls in several browser and assistive technology combinations are not keyboard accessible and the `video` or `audio` element itself may not be announced. Authors are recommended to use custom controls for keyboard navigation and cross browser accessibility support in general. Some major browsers no longer automatically play the 'video' unless the 'video' is muted.

User agents do not always automatically play media, even when an `autoplay` attribute is present. This is done to avoid autoplaying media interrupting the user when they do not want to, especially when the media is likely to contain sound. The decision to respect the `autoplay` attribute or not depends on user settings and previous behavior (interaction with the site). Therefore, some media files may fail this rule but satisfy [Success Criterion 1.4.2 Audio Control][sc142] on some combination of User Agent and user settings. The rule considers that the presence of the `autoplay` attribute is an indication of the author intention to have automatically playing media, and therefore requires the author to provide a mechanism to control the sound.

## Background

The [instruments][instrument] used to pass this rule (if any), must meet all level A Success Criteria in order to fully satisfy [Success Criterion 1.4.2 Audio Control][sc142]. These extra requirements are left out of this rule, and should be tested separately.

### Bibliography

- [Understanding Success Criterion 1.4.2: Audio Control](https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html)
- [Accessible Multimedia](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/Multimedia)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>1.4.2 Audio Control (Level A)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#audio-control">Learn more about 1.4.2 Audio Control</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level A and higher.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>WCAG Non-Interference</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#cc5">Learn more about WCAG Non-Interference</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.1.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: WCAG 2 conformance requirement is not satisfied</li>
        <li>All <code>passed</code> outcomes: WCAG 2 conformance requirement needs further testing</li>
        <li>An <code>inapplicable</code> outcome: WCAG 2 conformance requirement needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>G60: Playing a sound that turns off automatically within three seconds</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G60">Learn more about technique G60</a></li>
      <li>Not required for conformance to any W3C accessibility recommendation.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: technique is not satisfied</li>
        <li>All <code>passed</code> outcomes: technique needs further testing</li>
        <li>An <code>inapplicable</code> outcome: technique needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>G170: Providing a control near the beginning of the Web page that turns off sounds that play automatically</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G170">Learn more about technique G170</a></li>
      <li>Not required for conformance to any W3C accessibility recommendation.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: technique is not satisfied</li>
        <li>All <code>passed</code> outcomes: technique needs further testing</li>
        <li>An <code>inapplicable</code> outcome: technique needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>G171: Playing sounds only on user request</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G171">Learn more about technique G171</a></li>
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

- [Audio or video element that plays automatically has a control mechanism](/standards-guidelines/act/rules/auto-play-audio-has-control-mechanism-4c31df/)
- [Audio or video element that plays automatically has no audio that lasts more than 3 seconds](/standards-guidelines/act/rules/auto-play-audio-does-not-exceed-3-seconds-aaa1bf/)

## Test Cases

<details class="act-inline-assets" markdown="block">
<summary><span>This Javascript file is used in several examples:</span></summary>

File [`/test-assets/80f0bf/no-autoplay.js`](https://w3.org/WAI/content-assets/wcag-act-rules/test-assets/80f0bf/no-autoplay.js):

```javascript
window.onload = function() {
	// Video
	var video = document.getElementById('video')

	// Buttons
	var playButton = document.getElementById('play-pause')
	var muteButton = document.getElementById('mute')

	// Event listener for the play/pause button
	playButton.addEventListener('click', function() {
		if (video.paused == true) {
			// Play the video
			video.play()

			// Update the button text to 'Pause'
			playButton.innerHTML = 'Pause'
		} else {
			// Pause the video
			video.pause()

			// Update the button text to 'Play'
			playButton.innerHTML = 'Play'
		}
	})

	// Event listener for the mute button
	muteButton.addEventListener('click', function() {
		if (video.muted == false) {
			// Mute the video
			video.muted = true

			// Update the button text
			muteButton.innerHTML = 'Unmute'
		} else {
			// Unmute the video
			video.muted = false

			// Update the button text
			muteButton.innerHTML = 'Mute'
		}
	})
}
```

</details>

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80f0bf/0d2dcde8931a9083e590034768ae2e0af747491c.html">Open in a new tab</a>

This `audio` element has an [instrument][] to pause, stop, or turn the audio volume off.

```html
<audio src="/test-assets/moon-audio/moon-speech.mp3" autoplay controls></audio>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80f0bf/e4d78b5074773ab0cbd8c72732e948c4608f5c9d.html">Open in a new tab</a>

This `video` element does not play for longer than 3 seconds.

```html
<video autoplay>
	<source src="/test-assets/rabbit-video/video.mp4#t=8,10" type="video/mp4" />
	<source src="/test-assets/rabbit-video/video.webm#t=8,10" type="video/webm" />
</video>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80f0bf/29ea904ef03f14401a7b43a5ffc9b30271697bc7.html">Open in a new tab</a>

This `video` element autoplays and has an [instrument][] to pause, stop, or turn the audio volume off.

```html
<head>
	<style>
		button {
			color: #000;
		}
		button:hover {
			cursor: pointer;
			cursor: pointer;
			background-color: grey;
			color: white;
		}
	</style>
</head>
<body>
	<div id="video-container">
		<!-- Video -->
		<video id="video" autoplay>
			<source src="/test-assets/rabbit-video/video.mp4" type="video/mp4" />
			<source src="/test-assets/rabbit-video/video.webm" type="video/webm" />
		</video>
		<!-- Video Controls -->
		<div id="video-controls">
			<button type="button" id="play-pause" class="play">Play</button>
			<button type="button" id="mute">Mute</button>
		</div>
	</div>
	<script src="/test-assets/80f0bf/no-autoplay.js"></script>
</body>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80f0bf/968b12b14eb008b424f050ab74277426b2ea81bf.html">Open in a new tab</a>

This `audio` element autoplays, lasts for more than 3 seconds, and does not have an [instrument][] to pause, stop, or mute the audio.

```html
<audio src="/test-assets/moon-audio/moon-speech.mp3" autoplay></audio>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80f0bf/b712209d068fff2878cceadf40efe21a3ec4f6d8.html">Open in a new tab</a>

This `video` element audio autoplays for longer than 3 seconds, and does not have an [instrument][] to pause, stop, or mute the audio

```html
<video autoplay>
	<source src="/test-assets/rabbit-video/video.mp4" type="video/mp4" />
	<source src="/test-assets/rabbit-video/video.webm" type="video/webm" />
</video>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80f0bf/ffa08bb05064fdf4005d0e3baff46b9f7de21336.html">Open in a new tab</a>

This `video` element audio autoplays for longer than 3 seconds but is `muted`.

```html
<video autoplay muted>
	<source src="/test-assets/rabbit-video/video.mp4" type="video/mp4" />
	<source src="/test-assets/rabbit-video/video.webm" type="video/webm" />
</video>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80f0bf/7d3d7214d9fca81a8a09a819665871a474f85548.html">Open in a new tab</a>

This `video` element has no audio output.

```html
<video autoplay>
	<source src="/test-assets/rabbit-video/silent.mp4" type="video/mp4" />
	<source src="/test-assets/rabbit-video/silent.webm" type="video/webm" />
</video>
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80f0bf/b5c74f9ddba668623e33e33e3b8f773776f3177f.html">Open in a new tab</a>

This `audio` element does not play automatically.

```html
<audio src="/test-assets/moon-audio/moon-speech.mp3" controls></audio>
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

### Instrument to achieve an objective {#instrument-to-achieve-an-objective}

An [HTML element][] that when [activated][] allows an end-user to achieve an objective.

**Note**: Any rule that uses this definition must provide an unambiguous description of the objective the instrument is used to achieve.

### Outcome {#outcome}

An _outcome_ is a conclusion that comes from evaluating an ACT Rule on a [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) or one of its constituent [test target](https://www.w3.org/TR/act-rules-format/#test-target). An outcome can be one of the three following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) meets all expectations
- **Failed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) does not meet all expectations

**Note:** A rule has one `passed` or `failed` outcome for every [test target](https://www.w3.org/TR/act-rules-format/#test-target). When there are no test targets the rule has one `inapplicable` outcome. This means that each [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) will have one or more outcomes.

**Note:** Implementations using the [EARL10-Schema](https://www.w3.org/TR/EARL10-Schema/) can express the outcome with the [outcome property](https://www.w3.org/TR/EARL10-Schema/#outcome). In addition to `passed`, `failed` and `inapplicable`, EARL 1.0 also defined an `incomplete` outcome. While this cannot be the outcome of an ACT Rule when applied in its entirety, it often happens that rules are only partially evaluated. For example, when applicability was automated, but the expectations have to be evaluated manually. Such "interim" results can be expressed with the `incomplete` outcome.

### Web page (HTML) {#web-page-html}

An _HTML [web page](https://www.w3.org/TR/WCAG22/#dfn-web-page-s)_ is the set of all [fully active](https://html.spec.whatwg.org/#fully-active) [documents](https://dom.spec.whatwg.org/#concept-document) which share the same [top-level browsing context](https://html.spec.whatwg.org/#top-level-browsing-context).

**Note:** Nesting of browsing context mostly happens with `iframe` and `object`. Thus a web page will most of the time be a "top-level" document and all its `iframe` and `object` (recursively).

**Note:** [Web pages](https://www.w3.org/TR/WCAG22/#dfn-web-page-s) as defined by WCAG are not restricted to the HTML technology but can also include, _e.g._, PDF or DOCX documents.

**Note:** Although web pages as defined here are sets of [documents](https://dom.spec.whatwg.org/#concept-document) (and do not contain other kind of nodes), one can abusively write that any node is "in a web page" if it is a [shadow-including descendant](https://dom.spec.whatwg.org/#concept-shadow-including-descendant) of a [document](https://dom.spec.whatwg.org/#concept-document) that is part of that web page.

[activated]: https://html.spec.whatwg.org/#activation
[attribute value]: #attribute-value 'Definition of Attribute Value'
[boolean attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes 'HTML Specification of Boolean Attribute'
[comma separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#comma-separated-tokens 'HTML Specification of Comma Separated Tokens'
[enumerated attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute 'HTML Specification of Enumerated Attribute'
[html aam]: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings 'Specification of HTML attributes value mapping to ARIA states and properties'
[html element]: https://html.spec.whatwg.org/multipage/dom.html#htmlelement
[idl attribute]: https://heycam.github.io/webidl/#idl-attributes "Definition of Web IDL Attribute (Editor's Draft)"
[instrument]: #instrument-to-achieve-an-objective 'Definition of Instrument to Achieve an Objective'
[mechanism]: https://www.w3.org/TR/WCAG22/#dfn-mechanism 'WCAG Definition of Mechanism'
[media resource]: https://html.spec.whatwg.org/multipage/media.html#media-resource 'HTML Specification of Media Resource'
[numbers]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#numbers 'HTML Specification of Number Parsing'
[reflect]: https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes 'HTML specification of Reflecting Content Attributes in IDL Attributes'
[sc142]: https://www.w3.org/TR/WCAG22/#audio-control 'Success Criterion 1.4.2 Audio Control'
[sc211]: https://www.w3.org/TR/WCAG22/#keyboard 'Success Criterion 2.1.1 Keyboard'
[sc412]: https://www.w3.org/TR/WCAG22/#name-role-value 'Success Criterion 4.1.2 Name, Role, Value'
[space separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens 'HTML Specification of Space Separated Tokens'
[wai-aria specification]: https://www.w3.org/TR/wai-aria-1.2/#propcharacteristic_value 'WAI-ARIA Specification of States and Properties Value'
[web page]: #web-page-html 'Definition of HTML web page'
