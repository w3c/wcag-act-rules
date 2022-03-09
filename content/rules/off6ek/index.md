---
title: "HTML element language subtag matches language"
permalink: /standards-guidelines/act/rules/off6ek/
ref: /standards-guidelines/act/rules/off6ek/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/off6ek/index.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> off6ek</p>
  <p><strong>Date:</strong> Updated 28 January 2022</p>
  <p><strong>Authors:</strong> <a href="https://github.com/Jym77">Jean-Yves Moyen</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules community group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: off6ek
  name: "HTML element language subtag matches language"
  rule_type: atomic
  description: |
    This rule checks that the primary language subtag of an element matches its default language
  last_modified: 28 January 2022
  scs_tested:
    - handle: Language of Parts
      num: 3.1.2
      level: AA
---

## Applicability

This rule applies to any [HTML element][] with a `lang` attribute for which all the following are true:

- the element is an [inclusive descendant][] in the [flat tree][] of a `body` element; and
- the element is in a [document][] with a [content type][] of `text/html`; and
- the element's `lang` [attribute value][] has a [known primary language tag][]; and
- there is some non-empty [text inheriting its programmatic language][] from the element.

## Expectation

For each test target, the [primary language][] of its `lang` [attribute value][] is a [most common language][] of the test target.

## Assumptions

- This rule assumes that user agents and assistive technologies can programmatically determine [known primary language tags][known primary language tag] even on [language tags][rfc 5646] that do not conform to the [RFC 5646][] syntax.

- This rule assumes that only [language tags][rfc 5646] with a [known primary language tag][] are enough to satisfy [Success Criterion 3.1.2 Language of Parts][sc312]; this notably excludes [grandfathered tags][] and [ISO 639.2][] three-letters codes, both having poor support in assistive technologies.

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

This rule checks that, if a `lang` attribute is used, its value is correct with respect to the content. This rule does not check whether a `lang` attribute should have been used or not. Especially, this rule does not check when `lang` attributes are missing. This must be tested separately and it is therefore possible to pass this rule without satisfying [Success Criterion 3.1.2 Language of Parts](https://www.w3.org/TR/WCAG21/#language-of-parts).

### Related rules

- [_Element with `lang` Attribute Has Valid Language Tag_](https://act-rules.github.io/rules/de46e4)

### Bibliography

- [Understanding Success Criterion 3.1.2: Language of Page][usc312]
- [H58: Using language attributes to identify changes in the human language](https://www.w3.org/WAI/WCAG21/Techniques/html/H58)
- [RFC 5646: Tags for Identifying Languages](https://www.rfc-editor.org/rfc/rfc5646.html)
- [The `lang` and `xml:lang` attributes](https://html.spec.whatwg.org/multipage/dom.html#the-lang-and-xml:lang-attributes)

In all examples, the `html` element has itself a `lang` attribute in order to make sure that the examples satisfy [Success Criterion 3.1.1 Language of Page](https://www.w3.org/TR/WCAG21/#language-of-page). These `html` elements are, however, never applicable because they are not descendants of a `body` element, and the example descriptions do not mention them further.

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>3.1.2 Language of Parts (Level AA)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#language-of-parts">Learn more about 3.1.2 Language of Parts</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level AA and higher.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion is satisfied</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>H58: Using language attributes to identify changes in the human language</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H58">Learn more about technique H58</a></li>
      <li>Not required for conformance to any W3C accessibility recommendation.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: technique is not satisfied</li>
        <li>All <code>passed</code> outcomes: technique is satisfied</li>
        <li>An <code>inapplicable</code> outcome: technique is satisfied</li>
      </ul></li>
    </ul>
  </details></li>
</ul>

## Input Aspects

The following aspects are required in using this rule.

- [DOM tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)
- [Accessibility tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-accessibility)
- [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)
- [Language](https://www.w3.org/TR/act-rules-aspects/#input-aspects-text)

## Test Cases

### Passed

#### Passed Example 1

This `span` element has a `lang` [attribute value][] of `nl` (Dutch), which matches its [most common language][]. The most common language is Dutch because all words are Dutch.

```html
<html lang="en">
	<head>
		<title>Dutch idioms</title>
	</head>
	<body>
		<p>
			The Dutch phrase <span lang="nl">"Hij ging met de kippen op stok"</span> literally translates into "He went to
			roost with the chickens", but it means that he went to bed early.
		</p>
	</body>
</html>
```

#### Passed Example 2

The second `p` element has `lang` attribute value of `nl` (Dutch), which matches its [most common language][]. The most common language is Dutch because all English words are in `span` elements with a `lang` attribute value of `en`. Both `span` elements also have a `lang` attribute matching their most common language.

```html
<html lang="en">
	<head>
		<title>Dutch idioms</title>
	</head>
	<body>
		<p>Dutch idioms and their English meaning.</p>
		<p lang="nl">
			<span lang="en">The Dutch phrase</span> "Hij ging met de kippen op stok"
			<span lang="en"
				>literally translates into "He went to roost with the chickens", but it means that he went to bed early.</span
			>
		</p>
	</body>
</html>
```

#### Passed Example 3

This `div` element has a `lang` [attribute value][] of `en` (English), which matches its [most common language][]. The most common language is English because the accessible texts are English, and all other text is in a `p` element with a (correct) `lang` attribute value of `fr`.

```html
<html lang="fr">
	<head>
		<title>Feu d'artifice du nouvel an</title>
	</head>
	<body>
		<div lang="en">
			<img src="/test-assets/shared/fireworks.jpg" alt="Fireworks over Paris" />
			<p lang="fr">
				Bonne année !
			</p>
		</div>
	</body>
</html>
```

#### Passed Example 4

This `span` element has a `lang` [attribute value][] of `fr` (French), which matches one of its [most common languages][most common language]. The most common languages are both English and French because all the words belong to both languages.

```html
<html lang="en">
	<p>
		Even though all its words are English and it has meaning in English, the sentence
		<span lang="fr">Paul put dire comment on tape</span> is also a French sentence.
	</p>
</html>
```

#### Passed Example 5

This `span` element has a `lang` [attribute value][] of `en` (English), which matches one of its [most common languages][most common language]. The most common languages are both English and French because all the words belong to both languages.

```html
<html lang="fr">
	<p>
		Bien que tous les ses mots soient français et qu'elle ait un sens en français, la phrase
		<span lang="en">Paul put dire comment on tape</span> est aussi une phrase anglaise.
	</p>
</html>
```

### Failed

#### Failed Example 1

This `span` element has `lang` attribute value of `fr` (French), which does not match its [most common language][]. The most common language is Dutch because all words are Dutch.

```html
<html lang="en">
	<head>
		<title>Dutch idioms</title>
	</head>
	<body>
		<p>
			The Dutch phrase <span lang="fr">"Hij ging met de kippen op stok"</span> literally translates into "He went to
			roost with the chickens", but it means that he went to bed early.
		</p>
	</body>
</html>
```

#### Failed Example 2

The second `p` element has `lang` attribute value of `en` (English), which does not match its [most common language][]. The most common language is Dutch because all English words are in `span` elements with a `lang` attribute value of `fr`. Both `span` elements also have an incorrect `lang` attribute in order to make sure that all targets in this example fail the rule.

```html
<html lang="nl">
	<head>
		<title>Met de kippen op stok</title>
	</head>
	<body>
		<blockquote>
			<p>"Hij ging met de kippen op stok"</p>
		</blockquote>
		<p lang="en">
			<span lang="fr">The Dutch phrase</span> "Hij ging met de kippen op stok"
			<span lang="fr"
				>literally translates into "He went to roost with the chickens", but it means that he went to bed early.</span
			>
		</p>
	</body>
</html>
```

#### Failed Example 3

This `div` element has a `lang` attribute value of `fr` (French), which does not match its [most common language][]. The most common language is English because the accessible texts are English, and all other text is in a `p` element with a `lang` attribute value of `nl`, which also doesn't match its common language.

```html
<html lang="fr">
	<head>
		<title>Feu d'artifice du nouvel an</title>
	</head>
	<body>
		<div lang="fr">
			<img src="/test-assets/shared/fireworks.jpg" alt="Fireworks over Paris" />
			<p lang="nl">
				Bonne année !
			</p>
		</div>
	</body>
</html>
```

#### Failed Example 4

This `div` element has a `lang` attribute value of `fr` (French), which does not match its [most common language][]. The most common language is English because the accessible name of the `img` element is English. The `lang` attribute on the `p` element is effectively ignored. The `p` element is not applicable because there is no [text inheriting its programmatic language][] from it since its content is neither [visible][] nor [included in the accessibility tree][].

```html
<html lang="fr">
	<head>
		<title>Feu d'artifice du nouvel an</title>
	</head>
	<body>
		<div lang="fr">
			<img src="/test-assets/shared/fireworks.jpg" aria-labelledby="caption" />
			<p lang="en" id="caption" hidden>
				Fireworks over Paris
			</p>
		</div>
	</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

There are no HTML elements in this document.

```svg
<svg xmlns="http://www.w3.org/2000/svg" lang="en">
    <text x="0" y="0">I love ACT rules!</text>
</svg>
```

#### Inapplicable Example 2

There is no descendant of a `body` element with a `lang` attribute.

```html
<html lang="en">
	<body>
		<p>I love ACT rules!</p>
	</body>
</html>
```

#### Inapplicable Example 3

This `p` element has an invalid language tag.

```html
<html lang="en">
	<body>
		<p lang="français">
			I love ACT rules!
		</p>
	</body>
</html>
```

#### Inapplicable Example 4

There is no [text inheriting its programmatic language][] from the first `p` element because it has no content.

```html
<html lang="en">
	<body>
		<p lang="fr"></p>
		<p>I love ACT rules!</p>
	</body>
</html>
```

#### Inapplicable Example 5

There is no [text inheriting its programmatic language][] from this `p` element because it has no content that is either [visible][] or [included in the accessibility tree][].

```html
<html lang="en">
	<body>
		<p lang="fr" hidden>I love ACT rules!</p>
	</body>
</html>
```

#### Inapplicable Example 6

The `lang` [attribute value][] of this `p` element has no [known primary language tag][] because the `eng` [iso 639.2][] three letters code does not exist in the [language subtag registry][].

```html
<html lang="en">
	<body>
		<p lang="eng">I love ACT rules!</p>
	</body>
</html>
```

#### Inapplicable Example 7

The `lang` [attribute value][] of this `p` element has no [known primary language tag][] because the `i-lox` [grandfathered tag][grandfathered tags] does not exist in the [language subtag registry][].

```html
<html lang="lb">
	<body>
		<p lang="i-lux">Lëtzebuerg ass e Land an Europa.</p>
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

Elements included in the accessibility tree of platform specific accessibility APIs are exposed to assistive technologies. This allows users of assistive technology to access the elements in a way that meets the requirements of the individual user.

The general rules for when elements are included in the accessibility tree are defined in the [core accessibility API mappings](https://www.w3.org/TR/core-aam/). For native markup languages, such as HTML and SVG, additional rules for when elements are included in the accessibility tree can be found in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/) and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/).

For more details, see [examples of included in the accessibility tree][].

[Programmatically hidden](#programmatically-hidden) elements are removed from the accessibility tree. However, some browsers will leave [focusable](#focusable) elements with an `aria-hidden` attribute set to `true` in the accessibility tree. Because they are hidden, these elements are considered **not** included in the accessibility tree. This may cause confusion for users of assistive technologies because they may still be able to interact with these focusable elements using sequential keyboard navigation, even though the element should not be included in the accessibility tree.

### Known Primary Language Tag {#known-primary-language-tag}

A language tag has a _known primary language tag_ if its [primary language subtag][] exists in the [language subtag registry][] with a [Type field][] whose field-body value is `language`.

A "language tag" is here to be understood as in the first paragraph of the [RFC 5646 language tag syntax][language tag], i.e. a sequence of subtags separated by hyphens, where a subtag is any sequence of alphanumerical characters. [Language tag][] that are not valid according to the stricter [RFC 5646 syntax][language tag] (and ABNF grammar) definition can still have a known primary language tag. User agents and assistive technologies are more lenient in what they accept. This definition is consistent with the behavior of the `:lang()` pseudo-selector as defined by [Selectors Level 3][].

As an example, `de-hello` would be an accepted way to indicate German in current user agents and assistive technologies, despite not being valid according to [RFC 5646 grammar][language tag]. It has a known primary language tag (namely, `de`).

As a consequence of this definition, however, [grandfathered tags][] do not have a known primary language tag.

Subtags, notably the [primary language subtag][], are [case insensitive][]. Comparison with the [language subtag registry][] must be done in a case insensitive way.

### Most Common Language of an Element {#most-common-element-language}

The _most common language of an element_ is determined by counting the number of _words_ in the [text inheriting its programmatic language][] from this element that are part of any of the languages in the [language subtag registry][]. The same word can be part of multiple languages. In case of ties, the element has several most common languages. If there are no words in the [text inheriting its programmatic language][] from the element, then it has no most common language.

For more details, see [examples of most common language][].

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

### Programmatically Hidden {#programmatically-hidden}

An HTML element is _programmatically hidden_ if either it has a [computed][] CSS property `visibility` whose value is not `visible`; or at least one of the following is true for any of its [inclusive ancestors][] in the [flat tree][]:

- has a `hidden` attribute; or
- has a [computed][] CSS property `display` of `none`; or
- has an `aria-hidden` attribute set to `true`

**Note**: Contrarily to the other conditions, the `visibility` CSS property may be reverted by descendants.

### Text Inheriting its Programmatic Language from an Element {#text-inheriting-language}

The _text inheriting its programmatic language_ from an element E is composed of all the following texts:

- **text nodes**: the value of any [text nodes][] that are [visible][] or [included in the accessibility tree][] and children of an element inheriting its programmatic language from E;
- **accessible text**: the [accessible name][] and [accessible description][] of any element inheriting its programmatic language from E, and [included in the accessibility tree][];
- **page title**: the value of the [document title][], only if E is a [document][] in a [top-level browsing context][].

An element F is an _element inheriting its programmatic language_ from an element E if at least one of the following conditions is true (recursively):

- F is E itself (an element always inherits its programmatic language from itself); or
- F does not have a non-empty `lang` attribute, and is the child in the [flat tree][] of an element inheriting its programmatic language from E; or
- F is a [fully active][] [document][] element, has no non-empty `lang` attribute, and its [browsing context container][] is an element inheriting its programmatic language from E.

### Visible {#visible}

Content perceivable through sight.

Content is considered _visible_ if making it fully transparent would result in a difference in the pixels rendered for any part of the document that is currently within the viewport or can be brought into the viewport via scrolling.

[Content is defined in WCAG](https://www.w3.org/TR/WCAG21/#dfn-content).

For more details, see [examples of visible](https://act-rules.github.io/pages/examples/visible/).

{% include_relative _implementation-proposed.md %}

## Changelog

This is the first version of this ACT rule.

[accessible description]: https://www.w3.org/TR/accname-1.1/#dfn-accessible-description 'Definition of Accessible description'
[accessible name and description computation]: https://www.w3.org/TR/accname 'Accessible Name and Description Computation'
[accessible name]: #accessible-name 'Definition of Accessible Name'
[attribute value]: #attribute-value 'Definition of Attribute Value'
[boolean attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes 'HTML Specification of Boolean Attribute'
[browsing context container]: https://html.spec.whatwg.org/#browsing-context-container 'HTML Definition of Browsing Context Container'
[case insensitive]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.1.1
[comma separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#comma-separated-tokens 'HTML Specification of Comma Separated Tokens'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[content type]: https://dom.spec.whatwg.org/#concept-document-content-type 'DOM definition of Content Type'
[document title]: https://html.spec.whatwg.org/multipage/dom.html#document.title 'HTML document title, as of 2020/06/05'
[document]: https://dom.spec.whatwg.org/#document-element 'DOM definition of Document Element'
[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[enumerated attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute 'HTML Specification of Enumerated Attribute'
[examples of accessible name]: https://act-rules.github.io/pages/examples/accessible-name/
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[examples of most common language]: https://act-rules.github.io/pages/examples/element-language/
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS Scoping definition of Flat tree, working draft'
[fully active]: https://html.spec.whatwg.org/#fully-active 'HTML definition of Fully Active Document'
[grandfathered tags]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.2.8
[html aam]: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings 'Specification of HTML attributes value mapping to ARIA states and properties'
[html element]: #namespaced-element
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[idl attribute]: https://heycam.github.io/webidl/#idl-attributes "Definition of Web IDL Attribute (Editor's Draft)"
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[inclusive descendant]: https://dom.spec.whatwg.org/#concept-tree-inclusive-descendant 'DOM definition of Inclusive Descendant'
[iso 639.2]: https://www.loc.gov/standards/iso639-2/php/code_list.php 'ISO 639.2: Codes for the Representation of Names of Languages'
[known primary language tag]: #known-primary-language-tag 'Definition of Known Primary Language Tag'
[language subtag registry]: http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
[language tag]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.1
[most common language]: #most-common-element-language 'Definition of Common Language of an Element'
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
[numbers]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#numbers 'HTML Specification of Number Parsing'
[primary language subtag]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.2.1
[primary language]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.2.1 'Definition of primary language subtag'
[reflect]: https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes 'HTML specification of Reflecting Content Attributes in IDL Attributes'
[rfc 5646]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.1
[sc312]: https://www.w3.org/TR/WCAG21/#language-of-parts 'Success Criterion 3.1.2 Language of Parts'
[selectors level 3]: https://drafts.csswg.org/selectors-3/#lang-pseudo
[space separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens 'HTML Specification of Space Separated Tokens'
[text inheriting its programmatic language]: #text-inheriting-language 'Definition of Text Inheriting its Programmatic Language from an Element'
[text nodes]: https://dom.spec.whatwg.org/#text 'DOM text, as of 2020/06/05'
[top-level browsing context]: https://html.spec.whatwg.org/#top-level-browsing-context 'HTML top-level browsing context, as of 2020/06/05'
[type field]: https://www.rfc-editor.org/rfc/rfc5646.html#section-3.1.3
[usc312]: https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts.html 'Understanding Success Criterion 3.1.2: Language of Parts'
[visible]: #visible 'Definition of Visible'
[wai-aria specification]: https://www.w3.org/TR/wai-aria-1.1/#propcharacteristic_value 'WAI-ARIA Specification of States and Properties Value'
