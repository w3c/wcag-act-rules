---
title: "Element with lang attribute has valid language tag"
permalink: /standards-guidelines/act/rules/element-lang-valid-de46e4/
ref: /standards-guidelines/act/rules/element-lang-valid-de46e4/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/element-lang-valid-de46e4.md
footer: |
  <p><strong>Date:</strong> Updated August 24th, 2021</p>
  <p><strong>Authors:</strong> <a href="https://github.com/brynanders">Bryn Anderson</a>, <a href="https://github.com/jkodu">Jey Nandakumar</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules community group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>.</p>
proposed: true
rule_meta:
  id: de46e4
  name: "Element with `lang` attribute has valid language tag"
  rule_type: atomic
  description: |
    This rule checks that a non-empty `lang` attribute of an element in the page has a language tag with a known primary language subtag.
  accessibility_requirements:
    'wcag20:3.1.2':
      forConformance: true
      failed: not satisfied
      passed: further testing needed
      inapplicable: further testing needed
    'wcag-technique:H58':
      forConformance: false
      failed: not satisfied
      passed: further testing needed
      inapplicable: further testing needed
  input_aspects:
    - handle: Accessibility Tree
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-accessibility
    - handle: CSS Styling
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-css
    - handle: DOM Tree
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom
  last_modified: August 24th, 2021
  scs_tested:
    - handle: Language of Parts
      num: 3.1.2
      level: AA
---

## Applicability

This rules applies to any HTML element with a `lang` [attribute value][] that is not empty (`""`) and for which all of the following is true:

- **descendant**: the element is an [inclusive descendant][] in the [flat tree][] of a `body` element; and
- **content type**: the element has an associated [node document][] with a [content type][] of `text/html`; and
- **text**: there is some non-empty [text inheriting its programmatic language][] from the element.

## Expectation

For each test target, the `lang` [attribute value][] is a [valid language tag][].

## Assumptions

- This rule assumes that the `lang` [attribute value][] is used to indicate the language of a section of the content. If the `lang` [attribute value][] is used for something else (for example to indicate the programming language of a `code` element), the content may still conform to WCAG despite failing this rule.

- This rule assumes that user agents and assistive technologies can programmatically determine [valid language tags](#valid-language-tag) even if these do not conform to the [BCP 47][] syntax.

- This rule assumes that [grandfathered tags][] are not used as these will not be recognized as [valid language tags](#valid-language-tag).

## Accessibility Support

There are differences in how assistive technologies handle unknown and invalid language tags. Some will default to the language of the page, whereas others will default to the closest ancestor with a valid lang attribute.

## Background

- [CSS Scoping Module Level 1 (editor's draft)](https://drafts.csswg.org/css-scoping/)
- [H58: Using language attributes to identify changes in the human language](https://www.w3.org/WAI/WCAG21/Techniques/html/H58)
- [BCP 47: Tags for Identifying Languages](https://www.ietf.org/rfc/bcp/bcp47.txt)
- [Understanding Success Criterion 3.1.2: Language of Parts](https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts)

## Test Cases

### Passed

#### Passed Example 1

This `article` element has a `lang` [attribute value][] which is not empty (`""`) and has a [valid language tag][].

```html
<html>
	<body>
		<article lang="en">
			They wandered into a strange Tiki bar on the edge of the small beach town.
		</article>
	</body>
</html>
```

#### Passed Example 2

This `blockquote` element has a `lang` [attribute value][] which is not empty (`""`) and has a [valid language tag][]. The region section in the value is ignored by the rule (and the definition of [valid language tag][]).

```html
<html>
	<body>
		<blockquote lang="fr-CH">
			Ils ont trouvé un étrange bar Tiki aux abords de la petite ville balnéaire.
		</blockquote>
	</body>
</html>
```

#### Passed Example 3

This `p` element has a `lang` [attribute value][] which has a [valid language tag][], but a syntactically invalid region subtag which is ignored by the rule.

```html
<html>
	<body>
		<p lang="en-US-GB">
			They wandered into a strange Tiki bar on the edge of the small beach town.
		</p>
	</body>
</html>
```

#### Passed Example 4

This `div` element has a valid `lang` [attribute value][]. There is no [text inheriting its programmatic language][] from the `article` element, therefore its `lang` attribute is not considered by the rule.

```html
<html>
	<body>
		<article lang="invalid">
			<div lang="en">
				They wandered into a strange Tiki bar on the edge of the small beach town.
			</div>
		</article>
	</body>
</html>
```

#### Passed Example 5

This `div` element has a valid `lang` [attribute value][]. The [accessible name][] of the image is [text inheriting its programmatic language][] from the `div` element.

```html
<html>
	<body>
		<div lang="en">
			<img src="/test-assets/shared/fireworks.jpg" alt="Fireworks over Paris" />
		</div>
	</body>
</html>
```

### Failed

#### Failed Example 1

This `article` element has a `lang` [attribute value][] which does not have a [valid language tag][] because its primary language subtag does not exist in the registry.

```html
<html>
	<body>
		<article lang="dutch">
			Zij liepen een vreemde Tiki bar binnen, aan de rand van een dorpje aan het strand.
		</article>
	</body>
</html>
```

#### Failed Example 2

This `article` element has a `lang` [attribute value][] which is not a [valid language tag][].

```html
<html>
	<body>
		<article lang="#!">
			They wandered into a strange Tiki bar on the edge of the small beach town.
		</article>
	</body>
</html>
```

#### Failed Example 3

This `article` element has a `lang` [attribute value][] which consists of only [whitespace][] and thus is not a [valid language tag][].

```html
<html>
	<body>
		<article lang="  ">
			They wandered into a strange Tiki bar on the edge of the small beach town.
		</article>
	</body>
</html>
```

#### Failed Example 4

The `lang` [attribute value][] does not have a valid language tag. The `lang` attribute must be valid because the content is [visible][].

```html
<html>
	<body>
		<article lang="english">
			<p aria-hidden="true">
				They wandered into a strange Tiki bar on the edge of the small beach town.
			</p>
		</article>
	</body>
</html>
```

#### Failed Example 5

The `lang` [attribute value][] does not have a valid language tag, and its [descendant][] is not [visible][] though it is still [included in the accessibility tree][].

```html
<html>
	<body>
		<article lang="English">
			<p style="position: absolute; top: -9999px">
				They wandered into a strange Tiki bar on the edge of the small beach town.
			</p>
		</article>
	</body>
</html>
```

#### Failed Example 6

This `div` element has an invalid `lang` [attribute value][]. There is no [text inheriting its programmatic language][] from the `article` element, therefore its `lang` attribute is not considered by the rule.

```html
<html>
	<body>
		<article lang="en">
			<div lang="invalid">
				They wandered into a strange Tiki bar on the edge of the small beach town.
			</div>
		</article>
	</body>
</html>
```

#### Failed Example 7

This `div` element has an invalid `lang` [attribute value][]. The [accessible name][] of the image is [text inheriting its programmatic language][] from the `div` element.

```html
<html>
	<body>
		<div lang="invalid">
			<img src="/test-assets/shared/fireworks.jpg" alt="Fireworks over Paris" />
		</div>
	</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

There is no element with a lang attribute value which is a descendant of a body element".

```html
<html lang="en">
	<body>
		They wandered into a strange Tiki bar on the edge of the small beach town.
	</body>
</html>
```

#### Inapplicable Example 2

There is no element which is a descendant of a `body` element and has a non-empty `lang` [attribute value][].

```html
<html lang="en">
	<body>
		<article lang="">
			They wandered into a strange Tiki bar on the edge of the small beach town.
		</article>
	</body>
</html>
```

#### Inapplicable Example 3

There is no element with a [text node][] as a [descendant][] in the [flat tree][] that is either [visible][] or [included in the accessibility tree][].

```html
<html lang="en">
	<body>
		<p lang="hidden">
			<span style="display: none;">
				They wandered into a strange Tiki bar on the edge of the small beach town.
			</span>
		</p>
	</body>
</html>
```

#### Inapplicable Example 4

There is no [text inheriting its programmatic language][] from this `div` element.

```html
<html>
	<body>
		<div lang="invalid">
			<img src="/test-assets/shared/fireworks.jpg" alt="" />
		</div>
	</body>
</html>
```

## Glossary

### Accessible Name {#accessible-name}

The _accessible name_ is the programmatically determined name of a user interface element that is [included in the accessibility tree](#included-in-the-accessibility-tree).

The accessible name is calculated using the [accessible name and description computation][].

For native markup languages, such as HTML and SVG, additional information on how to calculate the accessible name can be found in [HTML Accessibility API Mappings 1.0, Accessible Name and Description Computation (working draft)](https://www.w3.org/TR/html-aam/#accessible-name-and-description-computation) and [SVG Accessibility API Mappings, Name and Description (working draft)](https://www.w3.org/TR/svg-aam/#mapping_additional).

For more details, see [examples of accessible name][].

**Note:** As per the [accessible name and description computation][], each element always has an accessible name. When no accessible name is provided, the element will nonetheless be assigned an empty (`""`) one.

**Note:** As per the [accessible name and description computation][], accessible names are [flat string](https://www.w3.org/TR/accname-1.1/#terminology) trimmed of leading and trailing whitespace. Notably, it is not possible for a non-empty accessible name to be composed only of whitespace since these must be trimmed.

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

### Focusable {#focusable}

Elements that can become the target of keyboard input as described in the [HTML](https://www.w3.org/TR/html) specification of [focusable](https://html.spec.whatwg.org/#focusable-area) and [can be focused](https://html.spec.whatwg.org/#specially-focusable).

### Included in the accessibility tree {#included-in-the-accessibility-tree}

Elements included in the accessibility tree of platform specific accessibility APIs. Elements in the accessibility tree are exposed to assistive technologies, allowing users to interact with the elements in a way that meet the requirements of the individual user.

The general rules for when elements are included in the accessibility tree are defined in the [core accessibility API mappings](https://www.w3.org/TR/core-aam/). For native markup languages, such as HTML and SVG, additional rules for when elements are included in the accessibility tree can be found in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/) and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/).

For more details, see [examples of included in the accessibility tree][].

**Note:** Users of assistive technologies might still be able to interact with elements that are not included in the accessibility tree. An example of this is a [focusable](#focusable) element with an `aria-hidden` attribute with a value of `true`. Such an element could still be interacted using sequential keyboard navigation regardless of the assistive technologies used, even though the element would not be included in the accessibility tree.
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/

### Outcome {#outcome}

An _outcome_ is a conclusion that comes from evaluating an ACT Rule on a [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) or one of its constituent [test target](https://www.w3.org/TR/act-rules-format/#test-target). An outcome can be one of the three following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) meets all expectations
- **Failed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) does not meet all expectations

**Note:** A rule has one `passed` or `failed` outcome for every [test target](https://www.w3.org/TR/act-rules-format/#test-target). When there are no test targets the rule has one `inapplicable` outcome. This means that each [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) will have one or more outcomes.

**Note:** Implementations using the [EARL10-Schema](https://www.w3.org/TR/EARL10-Schema/) can express the outcome with the [outcome property](https://www.w3.org/TR/EARL10-Schema/#outcome). In addition to `passed`, `failed` and `inapplicable`, EARL 1.0 also defined an `incomplete` outcome. While this cannot be the outcome of an ACT Rule when applied in its entirety, it often happens that rules are only partially evaluated. For example, when applicability was automated, but the expectations have to be evaluated manually. Such "interim" results can be expressed with the `incomplete` outcome.

### Text Inheriting its Programmatic Language from an Element {#text-inheriting-language}

The _text inheriting its programmatic language_ from an element E is composed of all the following texts:

- **text nodes**: the value of any [text nodes][] that are [visible][] or [included in the accessibility tree][] and children of an element inheriting its programmatic language from E;
- **accessible text**: the [accessible name][] and [accessible description][] of any element inheriting its programmatic language from E, and [included in the accessibility tree][];
- **page title**: the value of the [document title][], only if E is a [document][] in a [top-level browsing context][].

An element F is an _element inheriting its programmatic language_ from an element E if at least one of the following conditions is true (recursively):

- F is E itself (an element always inherits its programmatic language from itself); or
- F does not have a non-empty `lang` attribute, and is the child in the [flat tree][] of an element inheriting its programmatic language from E; or
- F is a [fully active][] [document][] element, has no non-empty `lang` attribute, and its [browsing context container][] is an element inheriting its programmatic language from E.

### Valid Language Tag {#valid-language-tag}

A [language tag][] is _valid_ if its [primary language subtag][] exists in the [language subtag registry][] with a [Type field][] whose field-body value is `language`.

A "language tag" is here to be understood as in the first paragraph of the [BCP 47 language tag syntax][language tag], i.e. a sequence of subtags separated by hyphens, where a subtag is any sequence of alphanumerical characters. Thus, this definition intentionally differs from the strict [BCP 47 syntax][language tag] (and ABNF grammar) as user agents and assistive technologies are more lenient in what they accept. The definition is however consistent with the behavior of the `:lang()` pseudo-selector as defined by [Selectors Level 3][]. For example, `de-hello` would be an accepted way to indicate German in current user agents and assistive technologies, despite not being valid according to [BCP 47 grammar][language tag]. As a consequence of this definition, however, [grandfathered tags][] are not correctly recognized as valid language subtags.

Subtags, notably the [primary language subtag][], are [case insensitive][]. Hence comparison with the [language subtag registry][] must be done in a case insensitive way.

### Visible {#visible}

Content perceivable through sight.

Content is considered _visible_ if making it fully transparent would result in a difference in the pixels rendered for any part of the document that is currently within the viewport or can be brought into the viewport via scrolling.

[Content is defined in WCAG](https://www.w3.org/TR/WCAG21/#dfn-content).

For more details, see [examples of visible](https://act-rules.github.io/pages/examples/visible/).

### Whitespace {#whitespace}

_Whitespace_ are characters that have the Unicode "White_Space" property in the [Unicode properties list](https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt).

This includes:

- all characters in the [Unicode Separator categories](https://www.unicode.org/versions/Unicode11.0.0/ch04.pdf#G134153), and
- the following characters in the [Other, Control](https://www.unicode.org/versions/Unicode11.0.0/ch04.pdf#G134153) category:

  - Character tabulation (U+0009)
  - Line Feed (LF) (U+000A)
  - Line Tabulation (U+000B)
  - Form Feed (FF) (U+000C)
  - Carriage Return (CR) (U+000D)
  - Next Line (NEL) (U+0085)

{% include_relative implementations/de46e4.md %}

## Changelog

This is the first version of this ACT rule.

[accessible description]: https://www.w3.org/TR/accname-1.1/#dfn-accessible-description 'Definition of Accessible description'
[accessible name and description computation]: https://www.w3.org/TR/accname 'Accessible Name and Description Computation'
[accessible name]: #accessible-name 'Definition of Accessible Name'
[attribute value]: #attribute-value 'Definition of Attribute Value'
[bcp 47]: https://tools.ietf.org/html/bcp47#section-2.1
[boolean attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes 'HTML Specification of Boolean Attribute'
[browsing context container]: https://html.spec.whatwg.org/#browsing-context-container 'HTML Definition of Browsing Context Container'
[case insensitive]: https://tools.ietf.org/html/bcp47#section-2.1.1
[comma separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#comma-separated-tokens 'HTML Specification of Comma Separated Tokens'
[content type]: https://dom.spec.whatwg.org/#concept-document-content-type
[descendant]: https://dom.spec.whatwg.org/#concept-tree-descendant
[document title]: https://html.spec.whatwg.org/multipage/dom.html#document.title 'HTML document title, as of 2020/06/05'
[document]: https://dom.spec.whatwg.org/#document-element 'DOM document element, as of 2020/06/05'
[enumerated attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute 'HTML Specification of Enumerated Attribute'
[examples of accessible name]: https://act-rules.github.io/pages/examples/accessible-name/
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree
[fully active]: https://html.spec.whatwg.org/#fully-active 'HTML definition of Fully Active Document'
[grandfathered tags]: https://tools.ietf.org/html/bcp47#section-2.2.8
[html aam]: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings 'Specification of HTML attributes value mapping to ARIA states and properties'
[idl attribute]: https://heycam.github.io/webidl/#idl-attributes "Definition of Web IDL Attribute (Editor's Draft)"
[included in the accessibility tree]: #included-in-the-accessibility-tree
[inclusive descendant]: https://dom.spec.whatwg.org/#concept-tree-inclusive-descendant 'DOM definition of Inclusive Descendant'
[language subtag registry]: http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
[language tag]: https://tools.ietf.org/html/bcp47#section-2.1
[node document]: https://dom.spec.whatwg.org/#concept-node-document
[numbers]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#numbers 'HTML Specification of Number Parsing'
[primary language subtag]: https://tools.ietf.org/html/bcp47#section-2.2.1
[reflect]: https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes 'HTML specification of Reflecting Content Attributes in IDL Attributes'
[selectors level 3]: https://drafts.csswg.org/selectors-3/#lang-pseudo
[space separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens 'HTML Specification of Space Separated Tokens'
[text inheriting its programmatic language]: #text-inheriting-language 'Definition of Text Inheriting its Programmatic Language from an Element'
[text node]: https://dom.spec.whatwg.org/#text
[text nodes]: https://dom.spec.whatwg.org/#text 'DOM text, as of 2020/06/05'
[top-level browsing context]: https://html.spec.whatwg.org/#top-level-browsing-context 'HTML top-level browsing context, as of 2020/06/05'
[type field]: https://tools.ietf.org/html/bcp47#section-3.1.3
[valid language tag]: #valid-language-tag
[visible]: #visible 'Definition of visible'
[wai-aria specification]: https://www.w3.org/TR/wai-aria-1.1/#propcharacteristic_value 'WAI-ARIA Specification of States and Properties Value'
[whitespace]: #whitespace 'Definition of Whitespace'
