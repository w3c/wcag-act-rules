---
title: "Zoomed text node is not clipped with CSS overflow"
permalink: /standards-guidelines/act/rules/59br37/
ref: /standards-guidelines/act/rules/59br37/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/59br37/index.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> 59br37</p>
  <p><strong>Date:</strong> Updated 28 January 2022</p>
  <p><strong>Authors:</strong> <a href="https://github.com/wilcofiers">Wilco Fiers</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules community group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
  
  <p><strong>Assets:</strong> Test cases use assets from the following sources: The Raven, poem by Edgar Allan Poe</p>
proposed: true
rule_meta:
  id: 59br37
  name: "Zoomed text node is not clipped with CSS overflow"
  rule_type: atomic
  description: |
    This rule checks that text nodes are not unintentionally clipped by overflow, when a page is zoomed to 200% on 1280 by 1024 viewport;
  last_modified: 28 January 2022
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

## Expectation

Each test target is not [clipped by overflow][clipped] of an [ancestor][] in the [flat tree][] when in a [viewport size][] of 640 by 512, except if the [clipping][clipped] [ancestor][] has at least one of the following:

- **text-overflow**: A [computed][] [white-space][] of `nowrap`, and a [computed][] [text-overflow][] that is not `clip`; or

- **line wrapping**: A [used][] [line-height][] equal to or greater than the height of its [bounding box][], or in case of a [computed][] [overflow][] of `clip`, its [content box][].

## Assumptions

If any of the following assumptions is true, failing this rule may not result in a failure of [success criterion 1.4.4 Resize text](https://www.w3.org/TR/WCAG21/#resize-text):

- There is no other mechanism for resizing text available on the page, that can be used to resize text to 200% without loss of information or functionality. This includes font resizing in the browser, or a javascript mechanism of resizing in the page.

- [Text nodes][text node] can not be [clipped by overflow][clipped] without loss of information, except for [text nodes][text node] with an [ancestor][] with `aria-hidden` set to `true`, or when specific styles have been applied to ensure text is clipped cleanly (text-overflow, line wrapping or hidden text).

- While [success criterion 1.4.4 Resize text](https://www.w3.org/TR/WCAG21/#resize-text) does not explicitly mention which viewport size has to be resized up to 200%, it is assumed that a [viewport size][] of 1280 by 1024 is applicable. A 1280 by 1024 [viewport size][] is explicitly mentioned under [success criterion 1.4.10 Reflow](https://www.w3.org/TR/WCAG21/#reflow).

## Accessibility Support

Some user agents treat the value of the `aria-hidden` attribute as case-sensitive.

## Background

When the [computed][] value of the `line-height` property is `normal`, the [used][] value depends on font specific metrics. [CSS specifications][line-height normal] recommend that the [used][] value is between 1.0 and 1.2 and major browsers are effectively using values close to 1.2.

### Bibliography

- [Understanding Success Criterion 1.4.4: Resize text](https://www.w3.org/WAI/WCAG21/Understanding/resize-text.html)
- [G42: Using a technology that has commonly-available user agents that support zoom](https://www.w3.org/WAI/WCAG21/Techniques/general/G142)

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

### Passed

#### Passed Example 1

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

This [text node][] is [clipped][] using `text-overflow: ellipsis` at a [viewport size][] of 640 by 512. A link to a full version of the poem is also provided.

```html
<div style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size: 16px;">
	Once upon a midnight dreary, while I pondered, weak and weary, Over many a quaint and curious volume of forgotten
	lore. While I nodded, nearly napping, suddenly there came a tapping.
</div>
<a href="/test-assets/59br37/poem.html">Full text of the poem</a>
```

#### Passed Example 3

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

This [text node][] is not [clipped][] with `overflow: hidden` because it has a parent with `overflow: auto` at a [viewport size][] of 640 by 512.

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

This [text node][] is [clipped][] because it has a fixed height that does not leave enough space for the content to wrap.

```html
<div style="overflow: hidden; height: 1.5em; font-size: 16px;">
	Once upon a midnight dreary, while I pondered, weak and weary, Over many a quaint and curious volume of forgotten
	lore. While I nodded, nearly napping, suddenly there came a tapping.
</div>
```

#### Failed Example 2

This [text node][] is [clipped][] because its height is relative to the viewport height, leaving insufficient space for the page to be zoomed to 200% at a [viewport size][] of 1280 by 1024.

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

This [text node][] is [clipped][] by style that is applied at a [viewport size][] width of 640.

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

### Inapplicable

#### Inapplicable Example 1

This [text node][] is not [visible][] at a [viewport size][] of 640 by 512.

```html
<p style="display:none;">Last updated 2020/03/27 10:52pm</p>
```

#### Inapplicable Example 2

This [text node][] has an SVG element as a [parent][].

```html
<svg>
	<text x="0" y="15">I love SVG!</text>
</svg>
```

#### Inapplicable Example 3

This [text node][] has no [ancestor][] with `overflow: hidden` or `clip`.

```html
<div style="overflow: auto; height: 1.5em; font-size: 16px;">
	Once upon a midnight dreary, while I pondered, weak and weary, Over many a quaint and curious volume of forgotten
	lore. While I nodded, nearly napping, suddenly there came a tapping.
</div>
```

#### Inapplicable Example 4

This [text node][] has an [ancestor][] with `aria-hidden` set to `true`.

```html
<img src="/test-assets/shared/w3c-logo.png" alt="W3C logo" /> <span aria-hidden="true">(W3C Logo)</span>
```

#### Inapplicable Example 5

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

The _attribute value_ of a content attribute set on an HTML element is the value that the attribute gets after being parsed and computed according to specifications. It may differ from the value that is actually written in the HTML code due to trimming whitespace or non-digits characters, default values, or case-insensitivity.

Some notable case of attribute value, among others:

- For [enumerated attributes][], the _attribute value_ is either the state of the attribute, or the keyword that maps to it; even for the default states. Thus `<input type="image" />` has an attribute value of either `Image Button` (the state) or `image` (the keyword mapping to it), both formulations having the same meaning; similarly, "an input element with a `type` _attribute value_ of `Text`" can be either `<input type="text" />`, `<input />` (missing value default), or `<input type="invalid" />` (invalid value default).
- For [boolean attributes][], the _attribute value_ is `true` when the attribute is present and `false` otherwise. Thus `<button disabled>`, `<button disabled="disabled">` and `<button disabled="">` all have a `disabled` _attribute value_ of `true`.
- For attributes whose value is used in a case-insensitive context, the _attribute value_ is the lowercase version of the value written in the HTML code.
- For attributes that accept [numbers][], the _attribute value_ is the result of parsing the value written in the HTML code according to the rules for parsing this kind of number.
- For attributes that accept sets of tokens, whether [space separated][] or [comma separated][], the _attribute value_ is the set of tokens obtained after parsing the set and, depending on the case, converting its items to lowercase (if the set is used in a case-insensitive context).
- For `aria-*` attributes, the _attribute value_ is computed as indicated in the [WAI-ARIA specification][] and the [HTML Accessibility API Mappings][html aam].

This list is not exhaustive, and only serves as an illustration for some of the most common cases.

The _attribute value_ of an [IDL attribute][] is the value returned on getting it. Note that when an [IDL attribute][] [reflects][reflect] a content attribute, they have the same attribute value.

### Clipped by Overflow {#clipped-by-overflow}

A [node][] with an [ancestor][] in the [flat tree][] with a [computed][] [overflow][] of `none` or `clipped`, where
changing the [overflow][] of all such [ancestors][ancestor] to `visible` would cause more of the [node][] to become [visible][].

### Namespaced Element {#namespaced-element}

An [element][] with a specific [namespaceURI][] value from [HTML namespaces][]. For example an "SVG element" is any element with the "SVG namespace", which is `http://www.w3.org/2000/svg`.

Namespaced elements are not limited to elements described in a specification. They also include custom elements. Elements such as `a` and `title` have a different namespace depending on where they are used. For example a `title` in an HTML page usually has the HTML namespace. When used in an `svg` element, a `title` element has the SVG namespace instead.

### Outcome {#outcome}

An _outcome_ is a conclusion that comes from evaluating an ACT Rule on a [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) or one of its constituent [test target](https://www.w3.org/TR/act-rules-format/#test-target). An outcome can be one of the three following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) meets all expectations
- **Failed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) does not meet all expectations

**Note:** A rule has one `passed` or `failed` outcome for every [test target](https://www.w3.org/TR/act-rules-format/#test-target). When there are no test targets the rule has one `inapplicable` outcome. This means that each [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) will have one or more outcomes.

**Note:** Implementations using the [EARL10-Schema](https://www.w3.org/TR/EARL10-Schema/) can express the outcome with the [outcome property](https://www.w3.org/TR/EARL10-Schema/#outcome). In addition to `passed`, `failed` and `inapplicable`, EARL 1.0 also defined an `incomplete` outcome. While this cannot be the outcome of an ACT Rule when applied in its entirety, it often happens that rules are only partially evaluated. For example, when applicability was automated, but the expectations have to be evaluated manually. Such "interim" results can be expressed with the `incomplete` outcome.

### viewport size {#viewport-size}

The viewport size is the width and height at which a page is rendered. The viewport size is equal to the [innerWidth][] and [innerHeight][] of the [window][] of the [top-level browsing context][].

**Note**: The viewport size is not to be confused with the "resolution" of the operating system. Often a browser will be a single window in the operating system, with a width and height different from the resolution of the operating system. Often browsers also include additional user interface components, such as a URL bar, tab bar, and a bookmarks bar. None of these are included in the viewport size. In full screen mode the viewport size might be the same as the resolution of the operating system.

**Note**: The viewport size includes, if rendered, all scrollbars.

### Visible {#visible}

Content perceivable through sight.

Content is considered _visible_ if making it fully transparent would result in a difference in the pixels rendered for any part of the document that is currently within the viewport or can be brought into the viewport via scrolling.

[Content is defined in WCAG](https://www.w3.org/TR/WCAG21/#dfn-content).

For more details, see [examples of visible](https://act-rules.github.io/pages/examples/visible/).

{% include_relative _implementation-proposed.md %}

## Changelog

This is the first version of this ACT rule.

[ancestor]: https://dom.spec.whatwg.org/#concept-tree-ancestor 'DOM ancestor, 2020/02/13'
[attribute value]: #attribute-value 'Definition of Attribute Value'
[boolean attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes 'HTML Specification of Boolean Attribute'
[bounding box]: https://www.w3.org/TR/css-ui-3/#valdef-box-sizing-border-box
[clipped]: #clipped-by-overflow
[comma separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#comma-separated-tokens 'HTML Specification of Comma Separated Tokens'
[computed]: https://www.w3.org/TR/css-cascade-3/#computed-value
[content box]: https://www.w3.org/TR/css-ui-3/#valdef-box-sizing-content-box
[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[enumerated attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute 'HTML Specification of Enumerated Attribute'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS draft, flat tree, 2020/02/14'
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
[overflow]: https://www.w3.org/TR/CSS22/visufx.html#overflow
[parent]: https://dom.spec.whatwg.org/#concept-tree-parent 'DOM parent, as of 2020/02/14'
[reflect]: https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes 'HTML specification of Reflecting Content Attributes in IDL Attributes'
[space separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens 'HTML Specification of Space Separated Tokens'
[text node]: https://dom.spec.whatwg.org/#text
[text-overflow]: https://www.w3.org/TR/css-ui-3/#text-overflow
[top-level browsing context]: https://html.spec.whatwg.org/#top-level-browsing-context 'DOM: top-level browsing context, 2020/03/30'
[used]: https://www.w3.org/TR/css-cascade-4/#used 'CSS Cascading and Inheritance Level 4 (Working draft) - Used Values'
[viewport size]: #viewport-size
[visible]: #visible
[wai-aria specification]: https://www.w3.org/TR/wai-aria-1.1/#propcharacteristic_value 'WAI-ARIA Specification of States and Properties Value'
[white-space]: https://www.w3.org/TR/CSS22/text.html#propdef-white-space
[window]: https://html.spec.whatwg.org/#window 'HTML: window object, 2020/03/30'
