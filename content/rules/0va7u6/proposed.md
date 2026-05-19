---
title: "HTML images contain no text"
permalink: /standards-guidelines/act/rules/0va7u6/proposed/
ref: /standards-guidelines/act/rules/0va7u6/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/0va7u6/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> 0va7u6</p>
  <p><strong>Date:</strong> Updated 19 January 2026</p>
  <p><strong>Authors:</strong> <a href="https://github.com/carlosapaduarte">Carlos Duarte</a>, <a href="https://github.com/wilcofiers">Wilco Fiers</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule conforms to <a href="https://www.w3.org/TR/act-rules-format-1.1/">ACT Rules Format 1.1</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
  
  <p><strong>Assets:</strong> Test cases use assets from the following sources: Times Square image released into the public domain by (WT-shared) Ypsilonatshared at wts wikivoyage.; Book shelf image by Alexandre Boue, licensed under the <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en">Creative Commons Attribution-ShareAlike 4.0 International</a> license.; Ivanhoe Classic Comics released into the public domain by Malcolm Kildale under the <a href="https://creativecommons.org/licenses/by-sa/3.0/deed.en">Creative Commons Attribution-ShareAlike 3.0 Unported</a> license</p>
proposed: true
rule_meta:
  id: 0va7u6
  name: "HTML images contain no text"
  rule_type: atomic
  original_file: image-no-text-0va7u6.md
  description: |
    This rule checks that images of text are not used
  last_modified: 19 January 2026
  scs_tested:
    - handle: Images of Text
      num: 1.4.5
      level: AA
    - handle: Images of Text (No Exception)
      num: 1.4.9
      level: AAA
---

## Applicability

This rule applies to any [image resources][rendered image resources] rendered in a [web page][].

## Expectation

Each test target has no [visible][] [text][human language], except if at least one of the following is true:

- <dfn id="0va7u6:decorative">decorative</dfn>: The image with text is [purely decorative][]; or
- <dfn id="0va7u6:incidental">incidental</dfn>: The text is not a [significant][insignificant] part of the image; or
- <dfn id="0va7u6:essential">essential</dfn>: The presentation of the text is [essential][].

## Background

This rule is designed specifically for [SC 1.4.5 Images of Text][sc1.4.5]. There are however only minimal differences between this criterion and [SC 1.4.9 Images of Text (No Exception)][sc1.4.9]. The two differences are that customizable images of text are allowed, and that images of text are allowed when the presentation cannot otherwise be achieved. These scenarios are so rare the rule ignores them as part of the assumptions, and so the [accessibility requirements mapping](#accessibility-requirements-mapping) of these two criteria is the same.

### Assumptions

- This rule assumes that there is no mechanism to change the rendering of text within image resources on the page. For pages that _do_ provide such a mechanism, this rule might fail even if [SC 1.4.5 Images of Text][sc1.4.5] is satisfied.
- When used in HTML, the SVG `<text>` element is not considered to be an image of text. This is because like any other element in HTML, SVG `<text>` can be adjusted through custom style sheets. This does not apply for SVG text that is in a separate file, and displayed through, for example, the `img` element.

### Accessibility Support

There are no accessibility support issues known.

### Other Resources

- [Understanding Success Criterion 1.4.5: Images of Text][sc1.4.5]
- [Understanding Success Criterion 1.4.9: Images of Text (No Exception)][sc1.4.9]

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>1.4.5 Images of Text (Level AA)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG22/#images-of-text">Learn more about 1.4.5 Images of Text</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level AA and higher.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>1.4.9 Images of Text (No Exception) (Level AAA)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG22/#images-of-text-no-exception">Learn more about 1.4.9 Images of Text (No Exception)</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level AAA.</li>
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
- [Language](https://www.w3.org/TR/act-rules-aspects/#input-aspects-text)

## Examples

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/0va7u6/6e6a506352542f40f4fe08a805ce736e89b46b06.html">Open in a new tab</a>

This image resource referenced by the `img` element does not contain text.

```html
<img src="/test-assets/shared/fireworks.jpg" alt="fireworks going off behind the Eiffel tower at night" />
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/0va7u6/48f02a3a361b09761b70fe85571ce0fe55b62e18.html">Open in a new tab</a>

This image resource referenced by the `input` element does not contain text.

```html
<input type="image" src="/test-assets/shared/file.svg" alt="New file" />
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/0va7u6/e5e36c1efa1c7d7f350ee94c220b58944a62c1d2.html">Open in a new tab</a>

This image resource referenced by the `svg` element does not contain text.

```html
<svg width="2in" height="3in" xmlns="http://www.w3.org/2000/svg">
	<image x="20" y="20" width="200px" height="100px" href="/test-assets/shared/fireworks.jpg">
		<title>Fireworks in Paris</title>
	</image>
</svg>
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/0va7u6/372b4acc620b897e8fa5e22607121407399f5e07.html">Open in a new tab</a>

This image resource referenced by the `object` element contains text, but it is not the most [significant](#0va7u6:incidental) content.

```html
<object data="/test-assets/0va7u6/times_square.jpg" title="Picture of Times Square, New York"></object>
```

#### Passed Example 5

<a class="example-link" title="Passed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/0va7u6/28b2597a08ca7a6fd85a273b484b599c04a03f1a.html">Open in a new tab</a>

This image resource referenced by the `img` element contains text, but its presentation is [essential](#0va7u6:essential) to convey the information.

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

<a class="example-link" title="Passed Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/0va7u6/74e69f0f02fd050e3b3bde3d1e81ca7fbc04670a.html">Open in a new tab</a>

This image resource referenced by the `background-image` property of the `div` element contains a logo with text. Logotypes are considered an [essential](#0va7u6:essential) exception.

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

<a class="example-link" title="Passed Example 7" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/0va7u6/00a1b04016513662a754e5114d0efbbd98ba58c8.html">Open in a new tab</a>

This image resource referenced by the `img` element is an image of text (the book covers), but it is just meant to decorate the webpage of a book store, therefore it is [decorative](#0va7u6:decorative).

```html
<img src="/test-assets/0va7u6/books.jpg" alt="" />
<p>Welcome to my book store</p>
```

#### Passed Example 8

<a class="example-link" title="Passed Example 8" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/0va7u6/671c8b76af94397191ae1ed8b6fdeacb3658509b.html">Open in a new tab</a>

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

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/0va7u6/80ff3d6a9f2de0b2b9f179a13d91d47ce8c9ab26.html">Open in a new tab</a>

This image resource referenced by the `img` element contains text for which the particular presentation is not [essential](#0va7u6:essential).

```html
<img
	src="/test-assets/0va7u6/textimage.jpg"
	alt="The Accessibility Conformance Testing (ACT) Rules Format 1.0 defines a format for writing accessibility test rules."
/>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/0va7u6/45041ac39ebf8f9d8ff642ea0bb56e947f0ac76e.html">Open in a new tab</a>

This image resource referenced by the `input` element in the [Image Button][] contains text for which the particular presentation is not [essential](#0va7u6:essential).

```html
<input type="image" src="/test-assets/0va7u6/button.jpg" alt="Press me" />
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/0va7u6/bf023941401d04f61ce739ee10fcc15f87d298a7.html">Open in a new tab</a>

This image resource referenced by the `background-image` property of the `div` element contains text for which the particular presentation is not [essential](#0va7u6:essential).

```html
<div style="background-image: url(/test-assets/0va7u6/textimage.jpg); width: 500px; height: 200px;" />
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/0va7u6/e1d4ed7556dabfcfde47aaf4cd0861e0fdf585d9.html">Open in a new tab</a>

This image resource referenced by the `img` element contains text that provides redundant information, but it still is information, therefore it is not [decorative](#0va7u6:decorative).

```html
<img src="/test-assets/0va7u6/welcome.png" alt="" />
<p>Welcome to our website</p>
```

#### Failed Example 5

<a class="example-link" title="Failed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/0va7u6/6a7f199a37309ccab08941b0bc64e182770c29ac.html">Open in a new tab</a>

This `img` element loads an SVG with text as an image resource. Because the SVG is loaded as an image resource, instead of being embedded in HTML the text cannot be selected or customized.

```html
<img
	alt="WCAG Rocks"
	src="data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' height='20px' width='80px'>
  <text x='0' y='15'>WCAG Rocks</text>
</svg>"
/>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/0va7u6/68dc6c98d514826f67cf700d1a5c7d449061b9ee.html">Open in a new tab</a>

The resource referenced by the `object` element does not have [visible pixels][visible].

```html
<object date="/test-assets/0va7u6/textimage.jpg" style="display: none"></object>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/0va7u6/5b1f5cf021116b02ca9a1846b18fa3e48860646b.html">Open in a new tab</a>

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

### Embedded Image {#embedded-image}

An element presents an _embedded image_ when any of the following is true:

- the element is an `img` element with a non-empty [source set][]; or
- the element is an `input` element with a `type` [attribute value][] of `image` and its `src` [attribute value][] is not empty; or
- the element is an `object` element with a `data` [attribute value][] referencing a resource with an [image MIME type](https://mimesniff.spec.whatwg.org/#image-mime-type); or
- the element is an `svg` element having one or more `image` [descendants][] with a non-empty `href` [attribute value][]; or
- the element has a [computed][] [`background-image`][background-image] CSS property with at least one [`image`][css-image] that is a [url reference][url-reference].

### Essential text presentation {#essential-text-presentation}

The presentation of text is considered essential in one of more of the following scenarios:

1. The text and its presentation is part of a brand; or
2. The text is part of a digitized image of a physical object; or
3. The text is part of a free-form digital illustration; or
4. The text is part of an image with other graphical objects, where its relationship is informative; or
5. Changing part of the presentation would alter the meaning of content on the page.

Examples of text for which the presentation is essential include:

1. Logos, product names, or slogans
2. Image of a hand-written letter, picture of a street sign, or a scanned contract
3. A digital signature, or a note written using a stylus,
4. A bar chart, diagram, or maps with place names
5. An image showing a font, or showing the difference between font-weights

**Note:** WCAG includes a generic definition of "[essential](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html#dfn-essential)".

### Insignificant {#insignificant}

Content that is neither [purely decorative][], nor required for understanding the purpose of certain pieces of information or functionality. Insignificant content is often used to provide context.

**Example**: A picture of New York's Time Square may include taxis, a famous pizza restaurant, and theater advertisements, etc. None of these are purely decorative. They provide clues as to where the picture was taken. But neither are any of these required to understand the picture as a whole. Even if the picture itself is significant, the taxis in the picture are not.

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

### Rendered Image Resource {#rendered-image-resource}

A _rendered image resource_ in a [web page][] is any resource with [visible pixels][] that has been specified in the list of [image sources][] of an [embedded image][].

### Visible {#visible}

Content perceivable through sight.

Content is considered _visible_ if making it fully transparent would result in a difference in the pixels rendered for any part of the document that is currently within the viewport or can be brought into the viewport via scrolling.

[Content is defined in WCAG](https://www.w3.org/TR/WCAG22/#dfn-content).

For more details, see [examples of visible](https://www.w3.org/WAI/standards-guidelines/act/rules/terms/visible/examples/).

### Web page (HTML) {#web-page-html}

An _HTML [web page](https://www.w3.org/TR/WCAG22/#dfn-web-page-s)_ is the set of all [fully active](https://html.spec.whatwg.org/#fully-active) [documents](https://dom.spec.whatwg.org/#concept-document) which share the same [top-level browsing context](https://html.spec.whatwg.org/#top-level-browsing-context).

**Note:** Nesting of browsing context mostly happens with `iframe` and `object`. Thus a web page will most of the time be a "top-level" document and all its `iframe` and `object` (recursively).

**Note:** [Web pages](https://www.w3.org/TR/WCAG22/#dfn-web-page-s) as defined by WCAG are not restricted to the HTML technology but can also include, _e.g._, PDF or DOCX documents.

**Note:** Although web pages as defined here are sets of [documents](https://dom.spec.whatwg.org/#concept-document) (and do not contain other kind of nodes), one can abusively write that any node is "in a web page" if it is a [shadow-including descendant](https://dom.spec.whatwg.org/#concept-shadow-including-descendant) of a [document](https://dom.spec.whatwg.org/#concept-document) that is part of that web page.

[attribute value]: #attribute-value 'Definition of Attribute Value'
[background-image]: https://drafts.csswg.org/css-backgrounds-3/#background-image
[boolean attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes 'HTML Specification of Boolean Attribute'
[comma separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#comma-separated-tokens 'HTML Specification of Comma Separated Tokens'
[computed]: https://www.w3.org/TR/css-cascade-4/#computed 'CSS Cascading and Inheritance Level 4 (Working draft) - Computed Values'
[css-image]: https://www.w3.org/TR/css-images-3/#typedef-image
[descendants]: https://dom.spec.whatwg.org/#concept-tree-descendant
[earl10-schema]: https://www.w3.org/TR/act-rules-format-1.1/#biblio-earl10-schema
[embedded image]: #embedded-image 'Definition of Embedded Image'
[enumerated attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute 'HTML Specification of Enumerated Attribute'
[essential]: #essential-text-presentation 'Definition of Essential (Text Presentation)'
[html aam]: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings 'Specification of HTML attributes value mapping to ARIA states and properties'
[human language]: https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html#dfn-human-language 'WCAG 2.2, Definition of human language'
[idl attribute]: https://heycam.github.io/webidl/#idl-attributes "Definition of Web IDL Attribute (Editor's Draft)"
[image button]: https://html.spec.whatwg.org/multipage/input.html#image-button-state-(type=image)
[image sources]: https://html.spec.whatwg.org/multipage/images.html#image-source
[insignificant]: #insignificant 'Definition of Insignificant'
[numbers]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#numbers 'HTML Specification of Number Parsing'
[outcome property]: https://www.w3.org/TR/EARL10-Schema/#outcome
[purely decorative]: https://www.w3.org/TR/WCAG22/#dfn-pure-decoration 'WCAG 2.2, Purely decorative'
[reflect]: https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes 'HTML specification of Reflecting Content Attributes in IDL Attributes'
[rendered image resources]: #rendered-image-resource 'Definition of rendered image resource'
[sc1.4.5]: https://www.w3.org/WAI/WCAG22/Understanding/images-of-text
[sc1.4.9]: https://www.w3.org/WAI/WCAG22/Understanding/images-of-text-no-exception
[source set]: https://html.spec.whatwg.org/multipage/images.html#source-set
[space separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens 'HTML Specification of Space Separated Tokens'
[test subject]: https://www.w3.org/TR/act-rules-format-1.1/#test-subject
[test target]: https://www.w3.org/TR/act-rules-format/#test-target
[url-reference]: https://www.w3.org/TR/css-images-3/#url-notation
[visible pixels]: #visible 'Definition of visible'
[visible]: #visible 'Definition of visible'
[wai-aria specification]: https://www.w3.org/TR/wai-aria-1.2/#propcharacteristic_value 'WAI-ARIA Specification of States and Properties Value'
[web page]: #web-page-html 'Definition of web page (HTML)'
