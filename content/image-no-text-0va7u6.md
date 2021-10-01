---
title: "HTML graphics contain no text"
permalink: /standards-guidelines/act/rules/image-no-text-0va7u6/
ref: /standards-guidelines/act/rules/image-no-text-0va7u6/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/image-no-text-0va7u6.md
footer: |
  <p><strong>Date:</strong> Updated October 1st, 2021</p>
  <p><strong>Authors:</strong> <a href="https://github.com/carlosapaduarte">Carlos Duarte</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules community group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>.</p>
  <p><strong>Assets:</strong> test cases use assets from the following sources: Times Square image released into the public domain by (WT-shared) Ypsilonatshared at wts wikivoyage.. Book shelf image by Alexandre Boue, licensed under the [Creative Commons Attribution-ShareAlike 4.0 International](https://creativecommons.org/licenses/by-sa/4.0/deed.en) license.. Ivanhoe Classic Comics released into the public domain by Malcolm Kildale under the [Creative Commons Attribution-ShareAlike 3.0 Unported](https://creativecommons.org/licenses/by-sa/3.0/deed.en) license.</p>
proposed: true
rule_meta:
  id: 0va7u6
  name: "HTML graphics contain no text"
  rule_type: atomic
  description: |
    This rule checks that images of text are not used
  accessibility_requirements:
    'wcag20:1.4.5':
      forConformance: true
      failed: not satisfied
      passed: further testing needed
      inapplicable: further testing needed
    'wcag20:1.4.9':
      forConformance: true
      failed: not satisfied
      passed: further testing needed
      inapplicable: further testing needed
  input_aspects:
    - handle: DOM Tree
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom
    - handle: CSS Styling
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-css
    - handle: Language
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-text
  last_modified: October 1st, 2021
  scs_tested:
    - handle: Images of Text
      num: 1.4.5
      level: AA
    - handle: Images of Text (No Exception)
      num: 1.4.9
      level: AAA
---

{::options toc_levels="2" /}
{::nomarkdown}
{% include toc.html type="start" title="Page Contents" %}
{:/}

- Table of Content placeholder
{:toc}

{::nomarkdown}
{% include toc.html type="end" %}
{:/}

## Applicability

This rule applies to any [rendered image resources][] in a [web page][].

## Expectation

For each test target, at least one of the following is true:

- **essential**: the [visible pixels][visible] of the test target contain text for which its presentation is [essential][]; or
- **language**: the [visible pixels][visible] of the test target do not contain text expressing anything in a [human language][]; or
- **significant**: the [visible pixels][visible] of the test target contain text and the text is not a significant part of the [visible pixels][visible] of the test target; or
- **decoration**: the [embedded image][] the test target belongs to is [purely decorative][].

## Assumptions

- There is no mechanism to change the rendered text in the image resource. Otherwise, the rule might fail while [SC 1.4.5 Images of Text][sc1.4.5] and [SC 1.4.9 Images of Text (No Exception)][sc1.4.9] might be satisfied.
- The specific presentation of the text rendered in the image resource can be achieved through formatted text. Otherwise, the rule might fail while [SC 1.4.5 Images of Text][sc1.4.5] and [SC 1.4.9 Images of Text (No Exception)][sc1.4.9] might be satisfied.

## Accessibility Support

_No accessibility support issues known._

## Background

This rule is designed specifically for [SC 1.4.5 Images of Text][sc1.4.5] which includes exceptions to the images it applies to that are not part of [SC 1.4.9 Images of Text (No Exception)][sc1.4.9]. Therefore, some images that are inapplicable for this rule can be applicable to [SC 1.4.9 Images of Text (No Exception)][sc1.4.9].

- [Understanding Success Criterion 1.4.5: Images of Text][sc1.4.5]
- [Understanding Success Criterion 1.4.9: Images of Text (No Exception)][sc1.4.9]

## Test Cases

### Passed

#### Passed Example 1

This image resource referenced by the `img` element does not contain text.

```html
<img src="/test-assets/shared/fireworks.jpg" alt="fireworks going off behind the Eiffel tower at night" />
```

#### Passed Example 2

This image resource referenced by the `input` element does not contain text.

```html
<input type="image" src="/test-assets/shared/file.svg" alt="New file" />
```

#### Passed Example 3

This image resource referenced by the `svg` element does not contain text.

```html
<svg width="2in" height="3in" xmlns="http://www.w3.org/2000/svg">
	<image x="20" y="20" width="200px" height="100px" href="/test-assets/shared/fireworks.jpg">
		<title>Fireworks in Paris</title>
	</image>
</svg>
```

#### Passed Example 4

This image resource referenced by the `object` element contains text, but it is not the most significant content.

```html
<object data="/test-assets/0va7u6/times_square.jpg" title="Picture of Times Square, New York"></object>
```

#### Passed Example 5

This image resource referenced by the `img` element contains text, but its presentation is essential to convey the information.

```html
<p>
	The following image is a close up of the cover of a Classic Comics book titled "Ivanhoe" illustrating a font that
	looks like an old Gothic style font.
</p>
<img
	src="/test-assets/0va7u6/ivanhoe.png"
	alt="The word Ivanhoe written in a style that resembles old medieval letters. The letter I is colored to resemble copper. The remaining letters are black. The background is yellow."
/>
```

#### Passed Example 6

This image resource referenced by the `background-image` property of the `div` element contains a logo with text. Logotypes are considered an essential exception.

```html
<div
	role="img"
	aria-label="W3C logo"
	style="
    width: 100px;
    height: 100px;
    background-image: url(/test-assets/shared/w3c-logo.png);
    background-repeat: no-repeat;
  "
></div>
```

#### Passed Example 7

This image resource referenced by the `img` element is an image of text (the book covers), but it is just meant to decorate the webpage of a book store, therefore it is [purely decorative][].

```html
<img src="/test-assets/0va7u6/books.jpg" alt="" />
<p>Welcome to my book store</p>
```

#### Passed Example 8

These image resources referenced by the `input` elements are images of text (the letter "A"), but they are not expressing anything in a [human language][]. The image is only used to indicate how the font size can be controlled.

```html
<input
	type="image"
	src="/test-assets/0va7u6/smallA.png"
	style="border: 1px solid black;"
	width="50px"
	height="50px"
	alt="Decrease text size"
/>
<input
	type="image"
	src="/test-assets/0va7u6/bigA.png"
	style="border: 1px solid black;"
	width="50px"
	height="50px"
	alt="Increase text size"
/>
```

### Failed

#### Failed Example 1

This image resource referenced by the `img` element contains text for which the particular presentation is not essential.

```html
<img
	src="/test-assets/0va7u6/textimage.jpg"
	alt="The Accessibility Conformance Testing (ACT) Rules Format 1.0 defines a format for writing accessibility test rules."
/>
```

#### Failed Example 2

This image resource referenced by the `input` element in the [Image Button][] contains text for which the particular presentation is not essential.

```html
<input type="image" src="/test-assets/0va7u6/button.jpg" alt="Press me" />
```

#### Failed Example 3

This image resource referenced by the `background-image` property of the `div` element contains text for which the particular presentation is not essential.

```html
<div style="background-image: url(/test-assets/0va7u6/textimage.jpg); width: 500px; height: 200px;" />
```

#### Failed Example 4

This image resource referenced by the `img` element contains text that provides redundant information, but it still is information, therefore it is not [purely decorative][].

```html
<img src="/test-assets/0va7u6/welcome.png" alt="" />
<p>Welcome to our website</p>
```

### Inapplicable

#### Inapplicable Example 1

The resource referenced by the `object` element does not have [visible pixels][visible].

```html
<object date="/test-assets/0va7u6/textimage.jpg" style="display: none"></object>
```

#### Inapplicable Example 2

This `svg` element does not have `image` element descendants.

```html
<svg xmlns="http://www.w3.org/2000/svg">
	<text x="20" y="35">My</text>
	<text x="45" y="35">cat</text>
	<text x="55" y="55">is</text>
	<text x="70" y="55">Grumpy!</text>
</svg>
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

### Embedded Image {#embedded-image}

An element presents an _embedded image_ when any of the following is true:

- the element is an `img` element with a non-empty [source set][]; or
- the element is an `input` element with a `type` [attribute value][] of `image` and its `src` [attribute value][] is not empty; or
- the element is an `object` element with a `data` [attribute value][] referencing a resource with an [image MIME type](https://mimesniff.spec.whatwg.org/#image-mime-type); or
- the element is an `svg` element having one or more `image` [descendants][] with a non-empty `href` [attribute value][]; or
- the element has a [computed][] [`background-image`][background-image] CSS property with at least one [`image`][css-image] that is a [url reference][url-reference].

### Outcome {#outcome}

An _outcome_ is a conclusion that comes from evaluating an ACT Rule on a [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) or one of its constituent [test target](https://www.w3.org/TR/act-rules-format/#test-target). An outcome can be one of the three following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) meets all expectations
- **Failed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) does not meet all expectations

**Note:** A rule has one `passed` or `failed` outcome for every [test target](https://www.w3.org/TR/act-rules-format/#test-target). When there are no test targets the rule has one `inapplicable` outcome. This means that each [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) will have one or more outcomes.

**Note:** Implementations using the [EARL10-Schema](https://www.w3.org/TR/EARL10-Schema/) can express the outcome with the [outcome property](https://www.w3.org/TR/EARL10-Schema/#outcome). In addition to `passed`, `failed` and `inapplicable`, EARL 1.0 also defined an `incomplete` outcome. While this cannot be the outcome of an ACT Rule when applied in its entirety, it often happens that rules are only partially evaluated. For example, when applicability was automated, but the expectations have to be evaluated manually. Such "interim" results can be expressed with the `incomplete` outcome.

### Rendered Image Resource {#rendered-image-resource}

A _rendered image resource_ in a [web page][] is any resource with [visible pixels][] that has been specified in the list of [image sources][] of an [embedded image][].

### Visible {#visible}

Content perceivable through sight.

Content is considered _visible_ if making it fully transparent would result in a difference in the pixels rendered for any part of the document that is currently within the viewport or can be brought into the viewport via scrolling.

[Content is defined in WCAG](https://www.w3.org/TR/WCAG21/#dfn-content).

For more details, see [examples of visible](https://act-rules.github.io/pages/examples/visible/).

### Web page (HTML) {#web-page-html}

An _HTML [web page](https://www.w3.org/TR/WCAG21/#dfn-web-page-s)_ is the set of all [fully active](https://html.spec.whatwg.org/#fully-active) [documents](https://dom.spec.whatwg.org/#concept-document) which share the same [top-level browsing context](https://html.spec.whatwg.org/#top-level-browsing-context).

**Note:** Nesting of browsing context mostly happens with `iframe` and `object`. Thus a web page will most of the time be a "top-level" document and all its `iframe` and `object` (recursively).

**Note:** [Web pages](https://www.w3.org/TR/WCAG21/#dfn-web-page-s) as defined by WCAG are not restricted to the HTML technology but can also include, _e.g._, PDF or DOCX documents.

**Note:** Although web pages as defined here are sets of [documents](https://dom.spec.whatwg.org/#concept-document) (and do not contain other kind of nodes), one can abusively write that any node is "in a web page" if it is a [shadow-including descendant](https://dom.spec.whatwg.org/#concept-shadow-including-descendant) of a [document](https://dom.spec.whatwg.org/#concept-document) that is part of that web page.

{% include_relative implementations/0va7u6.md %}

## Changelog

This is the first version of this ACT rule.

[attribute value]: #attribute-value 'Definition of Attribute Value'
[background-image]: https://drafts.csswg.org/css-backgrounds-3/#background-image
[boolean attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes 'HTML Specification of Boolean Attribute'
[comma separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#comma-separated-tokens 'HTML Specification of Comma Separated Tokens'
[computed]: https://www.w3.org/TR/css-cascade-4/#computed 'CSS Cascading and Inheritance Level 4 (Working draft) - Computed Values'
[css-image]: https://www.w3.org/TR/css-images-3/#typedef-image
[descendants]: https://dom.spec.whatwg.org/#concept-tree-descendant
[embedded image]: #embedded-image 'Definition of Embedded Image'
[enumerated attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute 'HTML Specification of Enumerated Attribute'
[essential]: https://www.w3.org/WAI/WCAG21/Understanding/images-of-text.html#dfn-essential 'WCAG 2.1, Definition of essential'
[html aam]: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings 'Specification of HTML attributes value mapping to ARIA states and properties'
[human language]: https://www.w3.org/WAI/WCAG21/Understanding/images-of-text.html#dfn-human-language 'WCAG 2.1, Definition of human language'
[idl attribute]: https://heycam.github.io/webidl/#idl-attributes "Definition of Web IDL Attribute (Editor's Draft)"
[image button]: https://html.spec.whatwg.org/multipage/input.html#image-button-state-(type=image)
[image sources]: https://html.spec.whatwg.org/multipage/images.html#image-source
[numbers]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#numbers 'HTML Specification of Number Parsing'
[purely decorative]: https://www.w3.org/TR/WCAG21/#dfn-pure-decoration 'WCAG 2.1, Purely decorative'
[reflect]: https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes 'HTML specification of Reflecting Content Attributes in IDL Attributes'
[rendered image resources]: #rendered-image-resource 'Definition of rendered image resource'
[sc1.4.5]: https://www.w3.org/WAI/WCAG21/Understanding/images-of-text
[sc1.4.9]: https://www.w3.org/WAI/WCAG21/Understanding/images-of-text-no-exception
[source set]: https://html.spec.whatwg.org/multipage/images.html#source-set
[space separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens 'HTML Specification of Space Separated Tokens'
[url-reference]: https://www.w3.org/TR/css-images-3/#url-notation
[visible pixels]: #visible 'Definition of visible'
[visible]: #visible 'Definition of visible'
[wai-aria specification]: https://www.w3.org/TR/wai-aria-1.1/#propcharacteristic_value 'WAI-ARIA Specification of States and Properties Value'
[web page]: #web-page-html 'Definition of web page (HTML)'
