---
title: "Scrollable content can be reached with sequential focus navigation"
permalink: /standards-guidelines/act/rules/0ssw9k/
ref: /standards-guidelines/act/rules/0ssw9k/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/0ssw9k/index.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> 0ssw9k</p>
  <p><strong>Date:</strong> Updated 30 August 2023</p>
  <p><strong>Authors:</strong> <a href="https://github.com/wilcofiers">Wilco Fiers</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It was approved and published by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: false
rule_meta:
  id: 0ssw9k
  name: "Scrollable content can be reached with sequential focus navigation"
  rule_type: atomic
  original_file: scrollable-element-keyboard-accessible-0ssw9k.md
  description: |
    This rule checks that scrollable elements or their descendants can be reached with sequential focus navigation so that they can be scrolled by keyboard
  last_modified: 30 August 2023
  scs_tested:
    - handle: Keyboard
      num: 2.1.1
      level: A
    - handle: Keyboard (No Exception)
      num: 2.1.3
      level: AAA
---

## Applicability

This rule applies to any [HTML element][] that has [visible][] [children][] in the [flat tree][], and for which at least one of the following is true:

- the element has a [horizontal scroll distance][scrollable] greater than the [computed][] [left][padding-left] or [right padding][padding-right] of the element; or
- the element has a [vertical scroll distance][scrollable] greater than the [computed][] [top][padding-top] or [bottom padding][padding-bottom] of the element.

## Expectation

Each test target is either included in [sequential focus navigation][] or has a [descendant][] in the [flat tree][] that is included in [sequential focus navigation][].

## Assumptions

This rule assumes that all [scrollable elements][scrollable] with visible content need to be keyboard accessible. [Scrollable elements][scrollable] that do not need to be keyboard accessible, perhaps because their content is [purely decorative][], the scroll area is whitespace, or because scroll can be controlled in some other keyboard accessible way such as through a button or custom scrollbar, may fail this rule but still satisfy [success criterion 2.1.1 Keyboard][].

## Accessibility Support

Some browsers will automatically make any [scrollable element][scrollable] focusable to ensure keyboard accessibility. However, the browser does not include these elements in [sequential focus navigation][] when it has a negative number as a tabindex [attribute value][].

Some browsers restrict scrolling to the [content box](https://drafts.csswg.org/css-box-4/#content-box) of elements; while others allow to scroll the full [border box](https://drafts.csswg.org/css-box-4/#border-box), hence including the element's padding. This results in some elements being scrollable with a browser but not with another.

## Background

To ensure there is some element from which arrow keys can be used to control the scroll position, focus must be on or in a scrollable region. If scripts are used to prevent the keyboard events from reaching the scrollable region, this could still cause a keyboard accessibility issue. This must be tested separately.

This rule only applies to elements who scroll content in the same document. Elements such as iframes that embed other documents may also be scrollable, but for them it is the embedded document that scrolls, not the content in the same document. Such scenarios are tested separately with rules such as [Iframe with negative tabindex has no interactive elements](https://www.w3.org/WAI/standards-guidelines/act/rules/akn7bn/proposed/).

### Bibliography

- [Understanding Success Criterion 2.1.1: Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html)
- [G202: Ensuring keyboard control for all functionality](https://www.w3.org/WAI/WCAG21/Techniques/general/G202)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>2.1.1 Keyboard (Level A)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#keyboard">Learn more about 2.1.1 Keyboard</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level A and higher.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>2.1.3 Keyboard (No Exception) (Level AAA)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#keyboard-no-exception">Learn more about 2.1.3 Keyboard (No Exception)</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level AAA.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>G202: Ensuring keyboard control for all functionality</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G202">Learn more about technique G202</a></li>
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

## Test Cases

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/0ssw9k/89302c4f9eaf142418751a45e6dd025d5d294591.html">Open in a new tab</a>

This [scrollable][] `section` element is included in [sequential focus navigation][] because it has a `tabindex` attribute set to `0`.

```html
<section style="height: 100px; width: 500px; overflow: scroll;" tabindex="0">
	<h1>WCAG 2.1 Abstract</h1>
	<p>
		Web Content Accessibility Guidelines (WCAG) 2.1 covers a wide range of recommendations for making Web content more
		accessible. Following these guidelines will make content more accessible to a wider range of people with
		disabilities, including accommodations for blindness and low vision, deafness and hearing loss, limited movement,
		speech disabilities, photosensitivity, and combinations of these, and some accommodation for learning disabilities
		and cognitive limitations; but will not address every user need for people with these disabilities. These guidelines
		address accessibility of web content on desktops, laptops, tablets, and mobile devices. Following these guidelines
		will also often make Web content more usable to users in general.
	</p>
</section>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/0ssw9k/305891f137b5927d99e74aa1efe9997e4a8a2803.html">Open in a new tab</a>

This [scrollable][] `section` element contains a link that is included in [sequential focus navigation][].

```html
<section style="height: 100px; width: 500px; overflow: scroll;">
	<h1>
		<a href="https://www.w3.org/TR/WCAG21/#abstract">
			WCAG 2.1 Abstract
		</a>
	</h1>
	<p>
		Web Content Accessibility Guidelines (WCAG) 2.1 covers a wide range of recommendations for making Web content more
		accessible. Following these guidelines will make content more accessible to a wider range of people with
		disabilities, including accommodations for blindness and low vision, deafness and hearing loss, limited movement,
		speech disabilities, photosensitivity, and combinations of these, and some accommodation for learning disabilities
		and cognitive limitations; but will not address every user need for people with these disabilities. These guidelines
		address accessibility of web content on desktops, laptops, tablets, and mobile devices. Following these guidelines
		will also often make Web content more usable to users in general.
	</p>
</section>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/0ssw9k/5fa34d0a7eea03109cd12c0e7c21fce793c268db.html">Open in a new tab</a>

This [vertically scrollable][scrollable] `section` element is not included in [sequential focus navigation][], nor does it have any [descendants][descendant] that are.

```html
<section style="height: 100px; width: 500px; overflow-y: scroll">
	<h1>WCAG 2.1 Abstract</h1>
	<p>
		Web Content Accessibility Guidelines (WCAG) 2.1 covers a wide range of recommendations for making Web content more
		accessible. Following these guidelines will make content more accessible to a wider range of people with
		disabilities, including accommodations for blindness and low vision, deafness and hearing loss, limited movement,
		speech disabilities, photosensitivity, and combinations of these, and some accommodation for learning disabilities
		and cognitive limitations; but will not address every user need for people with these disabilities. These guidelines
		address accessibility of web content on desktops, laptops, tablets, and mobile devices. Following these guidelines
		will also often make Web content more usable to users in general.
	</p>
</section>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/0ssw9k/731acbc281943f3fef81aee32f6a553fc426e20f.html">Open in a new tab</a>

This [horizontally scrollable][scrollable] `section` element is not included in [sequential focus navigation][], nor does it have any [descendants][descendant] that are.

```html
<style>
	section {
		height: 100px;
		width: 400px;
		overflow-y: auto;
		white-space: nowrap;
	}
	section > img {
		display: inline-block;
		width: 80px;
	}
</style>
<h1>Our sponsors:</h1>
<section>
	<img src="/test-assets/shared/w3c-logo.png" alt="W3C" />
	<img src="/test-assets/shared/eu-logo.svg" alt="EU" />
	<img src="/test-assets/shared/w3c-logo.png" alt="W3C" />
	<img src="/test-assets/shared/eu-logo.svg" alt="EU" />
	<img src="/test-assets/shared/w3c-logo.png" alt="W3C" />
	<img src="/test-assets/shared/eu-logo.svg" alt="EU" />
	<img src="/test-assets/shared/w3c-logo.png" alt="W3C" />
</section>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/0ssw9k/bb9ee4cc0b4779228701779090f461ecb2947b82.html">Open in a new tab</a>

This `section` element has a [computed][] [overflow][] of `visible`. Because of this its [scroll distance][scrollable] will be 0, regardless of the element's content.

```html
<section style="height: 95px; width: 500px;">
	<h1>WCAG 2.1 Abstract</h1>
	<p>
		Web Content Accessibility Guidelines (WCAG) 2.1 covers a wide range of recommendations for making Web content more
		accessible. Following these guidelines will make content more accessible to a wider range of people with
		disabilities, including accommodations for blindness and low vision, deafness and hearing loss, limited movement,
		speech disabilities, photosensitivity, and combinations of these, and some accommodation for learning disabilities
		and cognitive limitations; but will not address every user need for people with these disabilities. These guidelines
		address accessibility of web content on desktops, laptops, tablets, and mobile devices. Following these guidelines
		will also often make Web content more usable to users in general.
	</p>
</section>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/0ssw9k/997b49af2f0596bb505c7cbbfd501c0f2fa393a5.html">Open in a new tab</a>

This `section` element has a [scroll distance][scrollable] of 0 in both directions.

```html
<section style="height: 95px; width: 500px; overflow: auto;">
	<p>
		<a href="https://www.w3.org/TR/WCAG21/#abstract">
			WCAG 2.1 Abstract
		</a>
	</p>
</section>
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/0ssw9k/d7f9b0ca63b41bfc560c867696744a14f8590394.html">Open in a new tab</a>

This `section` element is not [scrollable][] because it has a [computed][] [overflow][] of `hidden`.

```html
<h1>
	<a href="https://www.w3.org/TR/WCAG21/#abstract">
		WCAG 2.1 Abstract
	</a>
</h1>
<section style="height: 95px; width: 500px; overflow: hidden;">
	<p>
		Web Content Accessibility Guidelines (WCAG) 2.1 covers a wide range of recommendations for making Web content more
		accessible. Following these guidelines will make content more accessible to a wider range of people with
		disabilities, including accommodations for blindness and low vision, deafness and hearing loss, limited movement,
		speech disabilities, photosensitivity, and combinations of these, and some accommodation for learning disabilities
		and cognitive limitations; but will not address every user need for people with these disabilities. These guidelines
		address accessibility of web content on desktops, laptops, tablets, and mobile devices. Following these guidelines
		will also often make Web content more usable to users in general.
	</p>
</section>
```

#### Inapplicable Example 4

<a class="example-link" title="Inapplicable Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/0ssw9k/5d06e0832a2a97d6dd2e5657f00dcb93c584135b.html">Open in a new tab</a>

This [scrollable][] `section` element has no [visible][] content.

```html
<p>This is what a scrollbar looks like:</p>
<section style="height: 20px; width: 500px; overflow-x:scroll;">
	<div style="width: 1000px; height: 1px;"></div>
</section>
```

#### Inapplicable Example 5

<a class="example-link" title="Inapplicable Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/0ssw9k/8f9b5bf5fc8345b8e7aa016621fb5dee6c13c8f2.html">Open in a new tab</a>

This `section` element has a [horizontal scroll distance][scrollable] that is less than its horizontal [padding][], and [vertical scroll distance][scrollable] that is less than its vertical [padding][].

```html
<section style="height: 210px; width: 530px; overflow: scroll; padding: 30px 0 30px 30px;">
	<div role="heading" aria-level="1">WCAG 2.1 Abstract</div>
	<div style="width: 520px">
		Web Content Accessibility Guidelines (WCAG) 2.1 covers a wide range of recommendations for making Web content more
		accessible. Following these guidelines will make content more accessible to a wider range of people with
		disabilities, including accommodations for blindness and low vision, deafness and hearing loss, limited movement,
		speech disabilities, photosensitivity, and combinations of these, and some accommodation for learning disabilities
		and cognitive limitations; but will not address every user need for people with these disabilities. These guidelines
		address accessibility of web content on desktops, laptops, tablets, and mobile devices. Following these guidelines
		will also often make Web content more usable to users in general.
	</div>
</section>
```

#### Inapplicable Example 6

<a class="example-link" title="Inapplicable Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/0ssw9k/dd5ca5252dacc6d5e0fabb30e92633b284336832.html">Open in a new tab</a>

This `iframe` element is not a scrollable element, but instead contains a nested browsing context that is scrollable. These must be tested separately.

```html
<iframe src="https://www.w3.org/TR/WCAG21/#abstract" width="500" height="200"></iframe>
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

### Scrollable Elements {#scrollable-element}

A scrollable element is an [element][] with a _horizontal scroll distance_ or a _vertical scroll distance_ greater than 0.

- **horizontal scroll distance**: The difference between [scrollWidth][] and [clientWidth] for elements where the [computed][] [overflow-x][] is `auto` or `scroll`. Undefined for other elements.

- **vertical scroll distance**: The difference between [scrollHeight][] and [clientHeight] for elements where the [computed][] [overflow-y][] is `auto` or `scroll`. Undefined for other elements.

**note**: Elements such as `iframe` which can render a [nested browsing context][] are not _scrollable elements_. The scrollbars on some `iframe` elements come from the content inside the [nested browsing context][].

### Visible {#visible}

Content perceivable through sight.

Content is considered _visible_ if making it fully transparent would result in a difference in the pixels rendered for any part of the document that is currently within the viewport or can be brought into the viewport via scrolling.

[Content is defined in WCAG](https://www.w3.org/TR/WCAG21/#dfn-content).

For more details, see [examples of visible](https://act-rules.github.io/pages/examples/visible/).

[attribute value]: #attribute-value
[boolean attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes 'HTML Specification of Boolean Attribute'
[children]: https://dom.spec.whatwg.org/#concept-tree-child 'DOM child, 2020/04/03'
[clientheight]: https://www.w3.org/TR/cssom-view/#dom-element-clientheight 'CSSOM working draft, Element.clientHeight, 2020/04/03'
[clientwidth]: https://www.w3.org/TR/cssom-view/#dom-element-clientwidth 'CSSOM working draft, Element.clientHeight, 2020/04/03'
[comma separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#comma-separated-tokens 'HTML Specification of Comma Separated Tokens'
[computed]: https://www.w3.org/TR/css-cascade-3/#computed-value
[descendant]: https://dom.spec.whatwg.org/#concept-tree-descendant 'DOM descendant, 2020/04/03'
[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[enumerated attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute 'HTML Specification of Enumerated Attribute'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS draft, flat tree, 2020/04/03'
[html aam]: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings 'Specification of HTML attributes value mapping to ARIA states and properties'
[html element]: #namespaced-element
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[idl attribute]: https://heycam.github.io/webidl/#idl-attributes "Definition of Web IDL Attribute (Editor's Draft)"
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
[nested browsing context]: https://html.spec.whatwg.org/#nested-browsing-context 'HTML nested browsing context, 2020/04/03'
[numbers]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#numbers 'HTML Specification of Number Parsing'
[overflow-x]: https://www.w3.org/TR/css-overflow-3/#propdef-overflow-x 'CSS Overflow working draft, overflow-x, 2020/04/03'
[overflow-y]: https://www.w3.org/TR/css-overflow-3/#propdef-overflow-y 'CSS Overflow working draft, overflow-y, 2020/04/03'
[overflow]: https://www.w3.org/TR/CSS22/visufx.html#overflow
[padding-bottom]: https://www.w3.org/TR/CSS22/box.html#propdef-padding-bottom
[padding-left]: https://www.w3.org/TR/CSS22/box.html#propdef-padding-left
[padding-right]: https://www.w3.org/TR/CSS22/box.html#propdef-padding-right
[padding-top]: https://www.w3.org/TR/CSS22/box.html#propdef-padding-top
[padding]: https://www.w3.org/TR/CSS22/box.html#propdef-padding
[purely decorative]: https://www.w3.org/TR/WCAG21/#dfn-pure-decoration
[reflect]: https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes 'HTML specification of Reflecting Content Attributes in IDL Attributes'
[scrollable]: #scrollable-element
[scrollheight]: https://www.w3.org/TR/cssom-view/#dom-element-scrollheight 'CSS working draft, Element.clientHeight, 2020/04/03'
[scrollwidth]: https://www.w3.org/TR/cssom-view/#dom-element-scrollwidth 'CSS working draft, Element.scrollHeight, 2020/04/03'
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation 'HTML sequential focus navigation, 2020/04/03'
[space separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens 'HTML Specification of Space Separated Tokens'
[success criterion 2.1.1 keyboard]: https://www.w3.org/TR/WCAG21/#keyboard
[visible]: #visible
[wai-aria specification]: https://www.w3.org/TR/wai-aria-1.1/#propcharacteristic_value 'WAI-ARIA Specification of States and Properties Value'
