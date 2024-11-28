---
title: "Zoomed text node is not clipped with CSS overflow"
permalink: /standards-guidelines/act/rules/59br37/proposed/
ref: /standards-guidelines/act/rules/59br37/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/59br37/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> 59br37</p>
  <p><strong>Date:</strong> Updated 21 November 2024</p>
  <p><strong>Authors:</strong> <a href="https://github.com/wilcofiers">Wilco Fiers</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
  
  <p><strong>Assets:</strong> Test cases use assets from the following sources: The Raven, poem by Edgar Allan Poe</p>
proposed: true
rule_meta:
  id: 59br37
  name: "Zoomed text node is not clipped with CSS overflow"
  rule_type: atomic
  original_file: zoom-text-no-overflow-clipping-59br37.md
  description: |
    This rule checks that text nodes are not unintentionally clipped by overflow, when a page is zoomed to 200% on 1280 by 1024 viewport;
  last_modified: 21 November 2024
  scs_tested:
    - handle: Resize text
      num: 1.4.4
      level: AA
---

## Applicability

This rule applies to any [text node][] for which all of the following is true when in a [viewport size][] of 640 by 512:

- The [text node][] is [visible][]; and
- The [text node][] has an [HTML element][] as a [parent][] in the [flat tree][]; and
- The [text node][] has an [ancestor][] in the [flat tree][] with a [computed][] [overflow-x][overflow] or [overflow-y][overflow] of `hidden` or `clip`; and
- The [text node][] does not have an [ancestor][] in the [flat tree][] with an `aria-hidden` [attribute value][] of `true`.

**Note**: A [viewport size][] of 640 by 512 is equivalent to a [viewport size][] of 1280 by 1024 zoomed 200%.

## Expectation 1

Each test target is not [horizontally clipped by overflow][horizontally clipped] of an [ancestor][] in the [flat tree][] when in a [viewport size][] of 640 by 512, except if the [clipping][horizontally clipped] [ancestor][] has a [computed][] [white-space][] of `nowrap`, and a [computed][] [text-overflow][] that is not `clip`

## Expectation 2

Each test target is not [vertically clipped by overflow][vertically clipped] of an [ancestor][] in the [flat tree][] when in a [viewport size][] of 640 by 512, except if the [clipping][vertically clipped] [ancestor][] has a [used][] [line-height][] equal to or greater than the height of its [bounding box][], or in case of a [computed][] [overflow-y][overflow] of `clip`, its [content box][].

## Background

When the [computed][] value of the `line-height` property is `normal`, the [used][] value depends on font specific metrics. [CSS specifications][line-height normal] recommend that the [used][] value is between 1.0 and 1.2 and major browsers are effectively using values close to 1.2.

### Assumptions

If any of the following assumptions is true, failing this rule may not result in a failure of [success criterion 1.4.4 Resize text](https://www.w3.org/TR/WCAG22/#resize-text):

- There is no other mechanism for resizing text available on the page, that can be used to resize text to 200% without loss of information or functionality. This includes font resizing in the browser, or a javascript mechanism of resizing in the page.

- [Text nodes][text node] can not be [horizontally][horizontally clipped] or [vertically clipped by overflow][vertically clipped] without loss of information, except for [text nodes][text node] with an [ancestor][] with `aria-hidden` set to `true`, or when specific styles have been applied to ensure text is clipped cleanly (text-overflow, line wrapping or hidden text).

- While [success criterion 1.4.4 Resize text](https://www.w3.org/TR/WCAG22/#resize-text) does not explicitly mention which viewport size has to be resized up to 200%, it is assumed that a [viewport size][] of 1280 by 1024 is applicable. A 1280 by 1024 [viewport size][] is explicitly mentioned under [success criterion 1.4.10 Reflow](https://www.w3.org/TR/WCAG22/#reflow).

### Accessibility Support

Some user agents treat the value of the `aria-hidden` attribute as case-sensitive.

### Bibliography

- [Understanding Success Criterion 1.4.4: Resize text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html)
- [G42: Using a technology that has commonly-available user agents that support zoom](https://www.w3.org/WAI/WCAG22/Techniques/general/G142)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>1.4.4 Resize text (Level AA)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#resize-text">Learn more about 1.4.4 Resize text</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level AA and higher.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
</ul>

## Input Aspects

The following aspects are required in using this rule.

- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)
- [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)

## Test Cases

<details class="act-inline-assets" markdown="block">
<summary><span>This HTML file is used in several examples:</span></summary>

File [`/test-assets/59br37/poem.html`](https://w3.org/WAI/content-assets/wcag-act-rules/test-assets/59br37/poem.html):

```html
<!DOCTYPE html>
<html>
	<h1>The Raven</h1>
	<p>By Edgar Allan Poe</p>
	<p>
		Once upon a midnight dreary, while I pondered, weak and weary,<br />
		Over many a quaint and curious volume of forgotten lore—<br />
		While I nodded, nearly napping, suddenly there came a tapping,<br />
		As of some one gently rapping, rapping at my chamber door.<br />
		“’Tis some visitor,” I muttered, “tapping at my chamber door—<br />
		Only this and nothing more.”
	</p>
	<p>
		Ah, distinctly I remember it was in the bleak December;<br />
		And each separate dying ember wrought its ghost upon the floor.<br />
		Eagerly I wished the morrow;—vainly I had sought to borrow<br />
		From my books surcease of sorrow—sorrow for the lost Lenore—<br />
		For the rare and radiant maiden whom the angels name Lenore—<br />
		Nameless here for evermore.
	</p>
	<p>
		And the silken, sad, uncertain rustling of each purple curtain<br />
		Thrilled me—filled me with fantastic terrors never felt before;<br />
		So that now, to still the beating of my heart, I stood repeating<br />
		“’Tis some visitor entreating entrance at my chamber door—<br />
		Some late visitor entreating entrance at my chamber door;—<br />
		This it is and nothing more.”
	</p>
	<p>
		Presently my soul grew stronger; hesitating then no longer,<br />
		“Sir,” said I, “or Madam, truly your forgiveness I implore;<br />
		But the fact is I was napping, and so gently you came rapping,<br />
		And so faintly you came tapping, tapping at my chamber door,<br />
		That I scarce was sure I heard you”—here I opened wide the door;—<br />
		Darkness there and nothing more.
	</p>
	<p>
		Deep into that darkness peering, long I stood there wondering, fearing,<br />
		Doubting, dreaming dreams no mortal ever dared to dream before;<br />
		But the silence was unbroken, and the stillness gave no token,<br />
		And the only word there spoken was the whispered word, “Lenore?”<br />
		This I whispered, and an echo murmured back the word, “Lenore!”—<br />
		Merely this and nothing more.
	</p>
	<p>
		Back into the chamber turning, all my soul within me burning,<br />
		Soon again I heard a tapping somewhat louder than before.<br />
		“Surely,” said I, “surely that is something at my window lattice;<br />
		Let me see, then, what thereat is, and this mystery explore—<br />
		Let my heart be still a moment and this mystery explore;—<br />
		’Tis the wind and nothing more!”
	</p>
	<p>
		Open here I flung the shutter, when, with many a flirt and flutter,<br />
		In there stepped a stately Raven of the saintly days of yore;<br />
		Not the least obeisance made he; not a minute stopped or stayed he;<br />
		But, with mien of lord or lady, perched above my chamber door—<br />
		Perched upon a bust of Pallas just above my chamber door—<br />
		Perched, and sat, and nothing more.
	</p>
	<p>
		Then this ebony bird beguiling my sad fancy into smiling,<br />
		By the grave and stern decorum of the countenance it wore,<br />
		“Though thy crest be shorn and shaven, thou,” I said, “art sure no craven,<br />
		Ghastly grim and ancient Raven wandering from the Nightly shore—<br />
		Tell me what thy lordly name is on the Night’s Plutonian shore!”<br />
		Quoth the Raven “Nevermore.”
	</p>
	<p>
		Much I marvelled this ungainly fowl to hear discourse so plainly,<br />
		Though its answer little meaning—little relevancy bore;<br />
		For we cannot help agreeing that no living human being<br />
		Ever yet was blessed with seeing bird above his chamber door—<br />
		Bird or beast upon the sculptured bust above his chamber door,<br />
		With such name as “Nevermore.”
	</p>
	<p>
		But the Raven, sitting lonely on the placid bust, spoke only<br />
		That one word, as if his soul in that one word he did outpour.<br />
		Nothing farther then he uttered—not a feather then he fluttered—<br />
		Till I scarcely more than muttered “Other friends have flown before—<br />
		On the morrow he will leave me, as my Hopes have flown before.”<br />
		Then the bird said “Nevermore.”
	</p>
	<p>
		Startled at the stillness broken by reply so aptly spoken,<br />
		“Doubtless,” said I, “what it utters is its only stock and store<br />
		Caught from some unhappy master whom unmerciful Disaster<br />
		Followed fast and followed faster till his songs one burden bore—<br />
		Till the dirges of his Hope that melancholy burden bore<br />
		Of ‘Never—nevermore’.”
	</p>
	<p>
		But the Raven still beguiling all my fancy into smiling,<br />
		Straight I wheeled a cushioned seat in front of bird, and bust and door;<br />
		Then, upon the velvet sinking, I betook myself to linking<br />
		Fancy unto fancy, thinking what this ominous bird of yore—<br />
		What this grim, ungainly, ghastly, gaunt, and ominous bird of yore<br />
		Meant in croaking “Nevermore.”
	</p>
	<p>
		This I sat engaged in guessing, but no syllable expressing<br />
		To the fowl whose fiery eyes now burned into my bosom’s core;<br />
		This and more I sat divining, with my head at ease reclining<br />
		On the cushion’s velvet lining that the lamp-light gloated o’er,<br />
		But whose velvet-violet lining with the lamp-light gloating o’er,<br />
		She shall press, ah, nevermore!
	</p>
	<p>
		Then, methought, the air grew denser, perfumed from an unseen censer<br />
		Swung by Seraphim whose foot-falls tinkled on the tufted floor.<br />
		“Wretch,” I cried, “thy God hath lent thee—by these angels he hath sent thee<br />
		Respite—respite and nepenthe from thy memories of Lenore;<br />
		Quaff, oh quaff this kind nepenthe and forget this lost Lenore!”<br />
		Quoth the Raven “Nevermore.”
	</p>
	<p>
		“Prophet!” said I, “thing of evil!—prophet still, if bird or devil!—<br />
		Whether Tempter sent, or whether tempest tossed thee here ashore,<br />
		Desolate yet all undaunted, on this desert land enchanted—<br />
		On this home by Horror haunted—tell me truly, I implore—<br />
		Is there—is there balm in Gilead?—tell me—tell me, I implore!”<br />
		Quoth the Raven “Nevermore.”
	</p>
	<p>
		“Prophet!” said I, “thing of evil!—prophet still, if bird or devil!<br />
		By that Heaven that bends above us—by that God we both adore—<br />
		Tell this soul with sorrow laden if, within the distant Aidenn,<br />
		It shall clasp a sainted maiden whom the angels name Lenore—<br />
		Clasp a rare and radiant maiden whom the angels name Lenore.”<br />
		Quoth the Raven “Nevermore.”
	</p>
	<p>
		“Be that word our sign of parting, bird or fiend!” I shrieked, upstarting—<br />
		“Get thee back into the tempest and the Night’s Plutonian shore!<br />
		Leave no black plume as a token of that lie thy soul hath spoken!<br />
		Leave my loneliness unbroken!—quit the bust above my door!<br />
		Take thy beak from out my heart, and take thy form from off my door!”<br />
		Quoth the Raven “Nevermore.”
	</p>
	<p>
		And the Raven, never flitting, still is sitting, still is sitting<br />
		On the pallid bust of Pallas just above my chamber door;<br />
		And his eyes have all the seeming of a demon’s that is dreaming,<br />
		And the lamp-light o’er him streaming throws his shadow on the floor;<br />
		And my soul from out that shadow that lies floating on the floor<br />
		Shall be lifted—nevermore!
	</p>
</html>
```

</details>

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/59br37/bf6c2877d53f69c82720898bfe0417e37a01cd53.html">Open in a new tab</a>

This [text node][] is fully [visible][] at a [viewport size][] of 640 by 512.

```html
<div style="white-space: nowrap; overflow: hidden; font-size: 16px;">
	Once upon a midnight dreary, while I pondered, weak and weary,<br />
	Over many a quaint and curious volume of forgotten lore.<br />
	While I nodded, nearly napping, suddenly there came a tapping,<br />
	As of some one gently rapping, rapping at my chamber door.<br />
	“’Tis some visitor,” I muttered, “tapping at my chamber door.<br />
	Only this and nothing more.”
</div>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/59br37/47d2a65e7d1fcc2ac9457a6283e35e82d68aa3ce.html">Open in a new tab</a>

This [text node][] is [horizontally clipped][] using `text-overflow: ellipsis` at a [viewport size][] of 640 by 512. A link to a full version of the poem is also provided.

```html
<div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 16px;">
	Once upon a midnight dreary, while I pondered, weak and weary, Over many a quaint and curious volume of forgotten
	lore. While I nodded, nearly napping, suddenly there came a tapping.
</div>
<a href="/test-assets/59br37/poem.html">Full text of the poem</a>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/59br37/f6c5d3bf4a33699dfa4d53d1949c262df1021735.html">Open in a new tab</a>

This [text node][] is restricted to a single line, by setting a `line-height` that is the same as the `height`. A link to a full version of the poem is also provided.

```html
<style>
	.wordClip {
		overflow: hidden;
		word-wrap: break-word;
		height: 16px;
		line-height: 16px;
		font-size: 16px;
	}
</style>
<div class="wordClip">
	Once upon a midnight dreary, while I pondered, weak and weary, Over many a quaint and curious volume of forgotten
	lore. While I nodded, nearly napping, suddenly there came a tapping.
</div>
<a href="/test-assets/59br37/poem.html">Full text of the poem</a>
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/59br37/b17a15385fc63a75363c56ea30ff402056c1da8f.html">Open in a new tab</a>

This [text node][] is not [vertically clipped][] with `overflow: hidden` because it has a parent with `overflow: auto` at a [viewport size][] of 640 by 512.

```html
<div style="overflow: hidden; height: 2em; font-size: 16px;">
	<div style="overflow: auto; height: 2em;">
		Once upon a midnight dreary, while I pondered, weak and weary, Over many a quaint and curious volume of forgotten
		lore. While I nodded, nearly napping, suddenly there came a tapping.
	</div>
</div>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/59br37/c5cd793a4f7c929182a1302f1bb8c1e43508de1b.html">Open in a new tab</a>

This [text node][] is [vertically clipped][] because it has a fixed height that does not leave enough space for the content to wrap.

```html
<div style="overflow: hidden; height: 1.5em; font-size: 16px;">
	Once upon a midnight dreary, while I pondered, weak and weary, Over many a quaint and curious volume of forgotten
	lore. While I nodded, nearly napping, suddenly there came a tapping.
</div>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/59br37/758faeb173a6796691843ae93839928b23ae6378.html">Open in a new tab</a>

This [text node][] is [vertically clipped][] because its height is relative to the viewport height, leaving insufficient space for the page to be zoomed to 200% at a [viewport size][] of 1280 by 1024.

```html
<div style="overflow: hidden; height: 16vh; font-size: 16px;">
	Once upon a midnight dreary, while I pondered, weak and weary,<br />
	Over many a quaint and curious volume of forgotten lore.<br />
	While I nodded, nearly napping, suddenly there came a tapping,<br />
	As of some one gently rapping, rapping at my chamber door.<br />
	“’Tis some visitor,” I muttered, “tapping at my chamber door.<br />
	Only this and nothing more.”
</div>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/59br37/ef39fe61d9b0093a3a886c3482d69adc7aeabd52.html">Open in a new tab</a>

This [text node][] is [vertically clipped][] by style that is applied at a [viewport size][] width of 640.

```html
<style>
	@media screen and (max-width: 640px) {
		.myContainer {
			height: 1.5em;
			width: 50%;
			overflow: hidden;
			font-size: 16px;
		}
	}
</style>
<div class="myContainer">
	Once upon a midnight dreary, while I pondered, weak and weary, Over many a quaint and curious volume of forgotten
	lore. While I nodded, nearly napping, suddenly there came a tapping, As of some one gently rapping, rapping at my
	chamber door. “’Tis some visitor,” I muttered, “tapping at my chamber door. Only this and nothing more.”
</div>
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/59br37/fc598e8d60950941aae5070b17eb4ca1d4bd3bdf.html">Open in a new tab</a>

This [text node][] is [vertically clipped][] at a [viewport size][] of 640 by 512.

```html
<div style="overflow-y: hidden; height: 10px; white-space: nowrap; text-overflow: ellipsis; font-size: 16px;">
	Once upon a midnight dreary, while I pondered, weak and weary, Over many a quaint and curious volume of forgotten
	lore. While I nodded, nearly napping, suddenly there came a tapping.
</div>
```

#### Failed Example 5

<a class="example-link" title="Failed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/59br37/3665c0599c286b1b3060aee795009ab5b8942a14.html">Open in a new tab</a>

This [text node][] is [horizontally clipped][] at a [viewport size][] of 640 by 512.

```html
<style>
	.wordClip {
		overflow-x: hidden;
		white-space: nowrap;
		text-overflow: clip;
		width: 50px;
		height: 16px;
		line-height: 16px;
		font-size: 16px;
	}
</style>
<div class="wordClip">
	Once upon a midnight dreary, while I pondered, weak and weary, Over many a quaint and curious volume of forgotten
	lore. While I nodded, nearly napping, suddenly there came a tapping.
</div>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/59br37/6331217170b53156f0e8e17d771a1bdf4edb329d.html">Open in a new tab</a>

This [text node][] is not [visible][] at a [viewport size][] of 640 by 512.

```html
<p style="display:none;">Last updated 2020/03/27 10:52pm</p>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/59br37/881897444deae644139c4b799b8eeb4b4b764c2a.html">Open in a new tab</a>

This [text node][] has an SVG element as a [parent][].

```html
<svg>
	<text x="0" y="15">I love SVG!</text>
</svg>
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/59br37/ef943b4ae6afe659dfb257688f942099ed46907f.html">Open in a new tab</a>

This [text node][] has no [ancestor][] with `overflow: hidden` or `clip`.

```html
<div style="overflow: auto; height: 1.5em; font-size: 16px;">
	Once upon a midnight dreary, while I pondered, weak and weary, Over many a quaint and curious volume of forgotten
	lore. While I nodded, nearly napping, suddenly there came a tapping.
</div>
```

#### Inapplicable Example 4

<a class="example-link" title="Inapplicable Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/59br37/914f51f7683a69d3055aab93f9b8d4a9c018158c.html">Open in a new tab</a>

This [text node][] has an [ancestor][] with `aria-hidden` set to `true`.

```html
<img src="/test-assets/shared/w3c-logo.png" alt="W3C logo" /> <span aria-hidden="true">(W3C Logo)</span>
```

#### Inapplicable Example 5

<a class="example-link" title="Inapplicable Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/59br37/61c21364304e588dd3f30317bcee4224c31a61fb.html">Open in a new tab</a>

This [text node][] with the text "Web Content Accessibility Guidelines 2.1" is fully hidden in a [viewport size][] of 640 by 512.

```html
<style>
	@media screen and (max-width: 640px) {
		.mobile-hidden {
			position: absolute;
			width: 1px;
			height: 1px;
			overflow: hidden;
			font-size: 16px;
		}
	}
</style>
<a href="/"> Next<span class="mobile-hidden">: Web Content Accessibility Guidelines 2.1</span> </a>
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

### Horizontally Clipped by Overflow {#horizontally-clipped-by-overflow}

A [node][] is <dfn>Horizontally Clipped by Overflow</dfn> if it has an [ancestor][] in the [flat tree][] with a [computed][] [overflow-x][] of `hidden` or `clip`, where changing the [overflow-x][] of all such [ancestors][ancestor] to `visible` would cause more of the [node][] to become [visible][].

### Namespaced Element {#namespaced-element}

An [element][] with a specific [namespaceURI][] value from [HTML namespaces][]. For example an "SVG element" is any element with the "SVG namespace", which is `http://www.w3.org/2000/svg`.

Namespaced elements are not limited to elements described in a specification. They also include custom elements. Elements such as `a` and `title` have a different namespace depending on where they are used. For example a `title` in an HTML page usually has the HTML namespace. When used in an `svg` element, a `title` element has the SVG namespace instead.

### Outcome {#outcome}

A conclusion that comes from evaluating an ACT Rule on a [test subject][] or one of its constituent test target. An outcome can be one of the five following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target][] meets all expectations
- **Failed:** A [test target][] does not meet all expectations
- **cantTell:** Whether the rule is applicable, or not all expectations were met could not be fully determined by the tester.
- **Untested**: The tester has not attempted to evaluate the test subject.

**Note**: A rule has one `passed` or `failed` outcome for every [test target][]. When a tester evaluates a test target it can also be reported as `cantTell` if the rule cannot be tested in its entirety. For example, when applicability was automated, but the expectations have to be evaluated manually.

When there are no test targets the rule has one `inapplicable` outcome. If the tester is unable to determine whether there are test targets there will be one `cantTell` outcome. And when no evaluation has occurred the test target has one untested outcome. This means that each [test subject][] always has one or more outcomes.

Outcomes used in ACT Rules can be expressed using the [outcome property][] of the [[EARL10-Schema]][].

### Vertically Clipped by Overflow {#vertically-clipped-by-overflow}

A [node][] is <dfn>Vertically Clipped by Overflow</dfn> if it has an [ancestor][] in the [flat tree][] with a [computed][] [overflow-y][] of `hidden` or `clip`, where changing the [overflow-y][] of all such [ancestors][ancestor] to `visible` would cause more of the [node][] to become [visible][].

### viewport size {#viewport-size}

The viewport size is the width and height at which a page is rendered. The viewport size is equal to the [innerWidth][] and [innerHeight][] of the [window][] of the [top-level browsing context][].

**Note**: The viewport size is not to be confused with the "resolution" of the operating system. Often a browser will be a single window in the operating system, with a width and height different from the resolution of the operating system. Often browsers also include additional user interface components, such as a URL bar, tab bar, and a bookmarks bar. None of these are included in the viewport size. In full screen mode the viewport size might be the same as the resolution of the operating system.

**Note**: The viewport size includes, if rendered, all scrollbars.

### Visible {#visible}

Content perceivable through sight.

Content is considered _visible_ if making it fully transparent would result in a difference in the pixels rendered for any part of the document that is currently within the viewport or can be brought into the viewport via scrolling.

[Content is defined in WCAG](https://www.w3.org/TR/WCAG22/#dfn-content).

For more details, see [examples of visible](https://act-rules.github.io/pages/examples/visible/).

[ancestor]: https://dom.spec.whatwg.org/#concept-tree-ancestor 'DOM ancestor, 2020/02/13'
[attribute value]: #attribute-value 'Definition of Attribute Value'
[boolean attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes 'HTML Specification of Boolean Attribute'
[bounding box]: https://www.w3.org/TR/css-ui-3/#valdef-box-sizing-border-box
[comma separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#comma-separated-tokens 'HTML Specification of Comma Separated Tokens'
[computed]: https://www.w3.org/TR/css-cascade-3/#computed-value
[content box]: https://www.w3.org/TR/css-ui-3/#valdef-box-sizing-content-box
[earl10-schema]: https://www.w3.org/TR/act-rules-format-1.1/#biblio-earl10-schema
[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[enumerated attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute 'HTML Specification of Enumerated Attribute'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS draft, flat tree, 2020/02/14'
[horizontally clipped]: #horizontally-clipped-by-overflow
[html aam]: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings 'Specification of HTML attributes value mapping to ARIA states and properties'
[html element]: #namespaced-element
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[idl attribute]: https://heycam.github.io/webidl/#idl-attributes "Definition of Web IDL Attribute (Editor's Draft)"
[innerheight]: https://drafts.csswg.org/cssom-view/#dom-window-innerheight 'CSS working draft, window.innerHeight, 2020/03/30'
[innerwidth]: https://drafts.csswg.org/cssom-view/#dom-window-innerwidth 'CSS working draft, window.innerWidth, 2020/03/30'
[line-height normal]: https://drafts.csswg.org/css2/#valdef-line-height-normal "CSS 2.2 (Editor's draft) - normal line-height"
[line-height]: https://www.w3.org/TR/CSS22/visudet.html#propdef-line-height
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
[node]: https://dom.spec.whatwg.org/#node 'DOM node, as of 2019/02/14'
[numbers]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#numbers 'HTML Specification of Number Parsing'
[outcome property]: https://www.w3.org/TR/EARL10-Schema/#outcome
[overflow-x]: https://drafts.csswg.org/css-overflow/#overflow-properties
[overflow-y]: https://drafts.csswg.org/css-overflow/#overflow-properties
[overflow]: https://drafts.csswg.org/css-overflow/#overflow-properties
[parent]: https://dom.spec.whatwg.org/#concept-tree-parent 'DOM parent, as of 2020/02/14'
[reflect]: https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes 'HTML specification of Reflecting Content Attributes in IDL Attributes'
[space separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens 'HTML Specification of Space Separated Tokens'
[test subject]: https://www.w3.org/TR/act-rules-format-1.1/#test-subject
[test target]: https://www.w3.org/TR/act-rules-format/#test-target
[text node]: https://dom.spec.whatwg.org/#text
[text-overflow]: https://www.w3.org/TR/css-ui-3/#text-overflow
[top-level browsing context]: https://html.spec.whatwg.org/#top-level-browsing-context 'DOM: top-level browsing context, 2020/03/30'
[used]: https://www.w3.org/TR/css-cascade-4/#used 'CSS Cascading and Inheritance Level 4 (Working draft) - Used Values'
[vertically clipped]: #vertically-clipped-by-overflow
[viewport size]: #viewport-size
[visible]: #visible
[wai-aria specification]: https://www.w3.org/TR/wai-aria-1.2/#propcharacteristic_value 'WAI-ARIA Specification of States and Properties Value'
[white-space]: https://www.w3.org/TR/CSS22/text.html#propdef-white-space
[window]: https://html.spec.whatwg.org/#window 'HTML: window object, 2020/03/30'
