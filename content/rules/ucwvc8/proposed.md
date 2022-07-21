---
title: "HTML page language subtag matches default language"
permalink: /standards-guidelines/act/rules/ucwvc8/proposed/
ref: /standards-guidelines/act/rules/ucwvc8/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/ucwvc8/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> ucwvc8</p>
  <p><strong>Date:</strong> Updated 11 July 2022</p>
  <p><strong>Authors:</strong> <a href="https://github.com/wilcofiers">Wilco Fiers</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: ucwvc8
  name: "HTML page language subtag matches default language"
  rule_type: atomic
  description: |
    This rule checks that the primary language subtag of the page language matches the default language of the page
  last_modified: 11 July 2022
  scs_tested:
    - handle: Language of Page
      num: 3.1.1
      level: A
---

## Applicability

This rule applies to any [document element][] if it is an `html` element for which all of the following are true:

- The [document element][] has a `lang` attribute with a value that has a [known primary language tag][]; and
- The [document element][] is in a [top-level browsing context][]; and
- The [document element][] has a [content type][] of `text/html`; and
- The [document element][] has a defined [default page language][].

## Expectation

For each test target, the [known primary language tag][] of its `lang` attribute matches the [default page language][] of the test target.

## Assumptions

- This rule assumes that the default human language of a page, as described in WCAG 2, can be determined by counting the number of words used in each language. If the default language needs to be derived in some other way (such as frequency analysis, mutual information based distance, …), this rule may fail while [Success Criterion 3.1.1: Language of Page](https://www.w3.org/TR/WCAG21/#language-of-page) is still satisfied.

- The language of the page can be set by other methods than the `lang` attribute, for example using HTTP headers or the `meta` element. These methods are not supported by all assistive technologies. This rule assumes that these other methods are insufficient to satisfying [Success Criterion 3.1.1: Language of Page](https://www.w3.org/TR/WCAG21/#language-of-page).

- This rule assumes that user agents and assistive technologies can programmatically determine [known primary language tags][known primary language tag] even if these do not conform to the [RFC 5646][] syntax.

- This rule assumes that only [known primary language tags][known primary language tag] are enough to satisfy [Success Criterion 3.1.1 Language of Page][sc311]; this notably excludes [grandfathered tags][] and [ISO 639.2][] three-letters codes, both having poor support in assistive technologies.

- This rule assumes that `iframe` title elements are not exposed to assistive technologies and so does not consider them as part of the [default page language][].

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

### Related rules

- [HTML page has `lang` attribute](https://act-rules.github.io/rules/b5c3f8)
- [HTML page `lang` attribute has valid language tag](https://act-rules.github.io/rules/bf051a)

### Bibliography

- [Understanding Success Criterion 3.1.1: Language of Page](https://www.w3.org/WAI/WCAG21/Understanding/language-of-page.html)
- [H57: Using language attributes on the html element](https://www.w3.org/WAI/WCAG21/Techniques/html/H57)
- [RFC 5646: Tags for Identifying Languages](https://www.rfc-editor.org/rfc/rfc5646.html)
- [The `lang` and `xml:lang` attributes](https://html.spec.whatwg.org/multipage/dom.html#the-lang-and-xml:lang-attributes)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>3.1.1 Language of Page (Level A)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#language-of-page">Learn more about 3.1.1 Language of Page</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level A and higher.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion is satisfied</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>H57: Using language attributes on the html element</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H57">Learn more about technique H57</a></li>
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

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/ucwvc8/96785fb73282803fa4ca791ffdc0c3bc46b90702.html">Open in a new tab</a>

This page has a `lang` [attribute value][] of `en` (English), which matches the [default language of the page][default page language]. The default language is English because all words are English.

```html
<html lang="en">
	<head>
		<title>ACT Rules Format 1.0 - Abstract</title>
	</head>
	<body>
		<p>
			The Accessibility Conformance Testing (ACT) Rules Format 1.0 defines a format for writing accessibility test
			rules. These test rules can be used for developing automated testing tools and manual testing methodologies. It
			provides a common format that allows any party involved in accessibility testing to document and share their
			testing procedures in a robust and understandable manner. This enables transparency and harmonization of testing
			methods, including methods implemented by accessibility test tools.
		</p>
	</body>
</html>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/ucwvc8/cd7898c9fcd7d06565cd55393310c2600ffc070f.html">Open in a new tab</a>

This page has a `lang` attribute value of `en` (English), which matches the [default language of the page][default page language]. The default language is English because all but a few words are English.

```html
<html lang="EN">
	<head>
		<title>Gelukkig</title>
	</head>
	<body>
		<p>The Dutch word "gelukkig" has no equivalent in English.</p>
	</body>
</html>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/ucwvc8/5f654ecf0b7a0af4d0ba120a5cd1db2761ffa79c.html">Open in a new tab</a>

This page has `lang` attribute value of `nl` (Dutch), which matches the [default language of the page][default page language]. The default language is Dutch because all English words are in a `p` element with a `lang` attribute value of `en`.

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
			This Dutch phrase literally translates into "He went to roost with the chickens", but it means that he went to bed
			early.
		</p>
	</body>
</html>
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/ucwvc8/a67210a4d3e4db840309518c1ec557459b709206.html">Open in a new tab</a>

This page has a `lang` attribute value of `en` (English), which matches the [default language of the page][default page language]. The default language is English because the accessible texts are English, and all other text is in a `p` element with a `lang` attribute value of `nl`.

```html
<html lang="en">
	<head>
		<title>Fireworks over Paris</title>
	</head>
	<body>
		<img src="/test-assets/shared/fireworks.jpg" alt="Fireworks over Paris" />
		<p lang="nl">
			Gelukkig nieuwjaar!
		</p>
	</body>
</html>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/ucwvc8/b1a2ce0c3435765e96d31a3262f1ed8c1d92f817.html">Open in a new tab</a>

This page has a `lang` attribute value of `da` (Danish), which does not match the [default language of the page][default page language]. The default language is English because all words are English.

```html
<html lang="da">
	<head>
		<title>ACT Rules Format 1.0 - Abstract</title>
	</head>
	<body>
		<p>
			The Accessibility Conformance Testing (ACT) Rules Format 1.0 defines a format for writing accessibility test
			rules. These test rules can be used for developing automated testing tools and manual testing methodologies. It
			provides a common format that allows any party involved in accessibility testing to document and share their
			testing procedures in a robust and understandable manner. This enables transparency and harmonization of testing
			methods, including methods implemented by accessibility test tools.
		</p>
	</body>
</html>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/ucwvc8/6616b9ffd712e7789c50b01da8420fd665786677.html">Open in a new tab</a>

This page has a `lang` attribute value of `nl` (Dutch), which does not match the [default language of the page][default page language]. The default language is English because all but a few words are English.

```html
<html lang="nl">
	<head>
		<title>Gelukkig</title>
	</head>
	<body>
		<p>The Dutch word "gelukkig" has no equivalent in English.</p>
	</body>
</html>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/ucwvc8/61b97f487132c7aca3dd9787e9ff1454903d45fb.html">Open in a new tab</a>

This page has a `lang` attribute value of `en` (English), which does not match the [default language of the page][default page language]. The default language is Dutch because all English words are in a `p` element with a `lang` attribute value of `en`.

```html
<html lang="en">
	<head>
		<title>Met de kippen op stok</title>
	</head>
	<body>
		<blockquote>
			<p>"Hij ging met de kippen op stok"</p>
		</blockquote>
		<p lang="en">
			This Dutch phrase literally translates into "He went to roost with the chickens", but it means that he went to bed
			early.
		</p>
	</body>
</html>
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/ucwvc8/c4eaf50df4fa37f931374c74ac369a018b780ec6.html">Open in a new tab</a>

This page has a `lang` attribute value of `nl` (Dutch), which does not match the [default language of the page][default page language]. The default language is English because the accessible texts are English, and all other text is in a `p` element with a `lang` attribute value of `nl`.

```html
<html lang="nl">
	<head>
		<title>Fireworks over Paris</title>
	</head>
	<body>
		<img src="/test-assets/shared/fireworks.jpg" alt="Fireworks over Paris" />
		<p lang="nl">
			Gelukkig nieuwjaar!
		</p>
	</body>
</html>
```

#### Failed Example 5

<a class="example-link" title="Failed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/ucwvc8/864ccfb9bdb2c7f797602c5e4f25d1a0ad2aad7c.html">Open in a new tab</a>

This page has a `lang` attribute value of `nl` (Dutch), which does not match the [default language of the page][default page language]. The default language is English because the accessible name of the `img` element is English. The `lang` attribute on the `p` element is effectively ignored.

```html
<html lang="nl">
	<head>
		<title>Paris</title>
	</head>
	<body>
		<img src="/test-assets/shared/fireworks.jpg" aria-labelledby="caption" />
		<p lang="en" id="caption" hidden>
			Fireworks over Paris!
		</p>
	</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/ucwvc8/1b73557d29073ecd327790ca1a6e343b4395b2ab.svg">Open in a new tab</a>

This is an SVG [document][document element], not an HTML document.

```svg
<svg xmlns="http://www.w3.org/2000/svg" lang="fr"></svg>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/ucwvc8/941efb7368e46b27b937d34b07fc4d41da01b002.html">Open in a new tab</a>

This page has an undefined [default language][default page language] because it has no content or [document title][].

```html
<html></html>
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/ucwvc8/dbc6a8459d78e618aab31e7051b4ce69b59c7f2f.html">Open in a new tab</a>

This page has an undefined [default language][default page language] because it has no [document title][] and all its content is wrapped in an element with a `lang` attribute.

```html
<html>
	<p lang="en">
		The Accessibility Conformance Testing (ACT) Rules Format 1.0 defines a format for writing accessibility test rules.
		These test rules can be used for developing automated testing tools and manual testing methodologies. It provides a
		common format that allows any party involved in accessibility testing to document and share their testing procedures
		in a robust and understandable manner. This enables transparency and harmonization of testing methods, including
		methods implemented by accessibility test tools.
	</p>
</html>
```

#### Inapplicable Example 4

<a class="example-link" title="Inapplicable Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/ucwvc8/80e6225b051ac34c23c7c0ede7d28d426d1be084.html">Open in a new tab</a>

This page has an undefined [default language][default page language] because it can either be English or French.

```html
<html lang="fr">
	<head>
		<title>Paul put dire comment on tape</title>
	</head>
	<body>
		<p>Paul put dire comment on tape</p>
	</body>
</html>
```

#### Inapplicable Example 5

<a class="example-link" title="Inapplicable Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/ucwvc8/0f73e7179e17f050380f0ea350d2551611820fd5.html">Open in a new tab</a>

The `lang` [attribute value][] of this page is an [iso 639.2][] three letters code, hence has no [known primary language tag][].

```html
<html lang="eng">
	<body>
		<p lang="en">I love ACT rules!</p>
	</body>
</html>
```

#### Inapplicable Example 6

<a class="example-link" title="Inapplicable Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/ucwvc8/b64d767d873269ff00966630e34ab198fc24368f.html">Open in a new tab</a>

The `lang` [attribute value][] of this page is a [grandfathered tag][grandfathered tags], hence has no [known primary language tag][].

```html
<html lang="i-lux">
	<body>
		<p lang="lb">Lëtzebuerg ass e Land an Europa.</p>
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

### Default Page Language {#default-page-language}

The _default language of a [web page][]_ is the [most common language][] of its [top-level browsing context](https://html.spec.whatwg.org/#top-level-browsing-context) [document][], if it is unique. If this [document][] has either no or several [most common languages][most common language], then it has no default language.

For more details, see [examples of default language][].

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

### Known Primary Language Tag {#known-primary-language-tag}

A language tag has a _known primary language tag_ if its [primary language subtag][] exists in the [language subtag registry][] with a [Type field][] whose field-body value is `language`.

A "language tag" is here to be understood as in the first paragraph of the [RFC 5646 language tag syntax][language tag], i.e. a sequence of subtags separated by hyphens, where a subtag is any sequence of alphanumerical characters. [Language tag][] that are not valid according to the stricter [RFC 5646 syntax][language tag] (and ABNF grammar) definition can still have a known primary language tag. User agents and assistive technologies are more lenient in what they accept. This definition is consistent with the behavior of the `:lang()` pseudo-selector as defined by [Selectors Level 3][].

As an example, `de-hello` would be an accepted way to indicate German in current user agents and assistive technologies, despite not being valid according to [RFC 5646 grammar][language tag]. It has a known primary language tag (namely, `de`).

As a consequence of this definition, however, [grandfathered tags][] do not have a known primary language tag.

Subtags, notably the [primary language subtag][], are [case insensitive][]. Comparison with the [language subtag registry][] must be done in a case insensitive way.

### Most Common Language of an Element {#most-common-element-language}

The _most common language of an element_ is determined by counting the number of _words_ in the [text inheriting its programmatic language][] from this element that are part of any of the languages in the [language subtag registry][]. The same word can be part of multiple languages. In case of ties, the element has several most common languages. If there are no words in the [text inheriting its programmatic language][] from the element, then it has no most common language.

For more details, see [examples of most common language][].

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

**Note**: Contrary to the other conditions, the `visibility` CSS property may be reverted by descendants.

**Note**: The [HTML standard suggests](https://html.spec.whatwg.org/multipage/rendering.html#hidden-elements) setting the CSS `display` property to `none` for elements with the `hidden` attribute. While not required by HTML, all modern browsers follow this suggestion. Because of this the `hidden` attribute is not used in this definition. In browsers that use this suggestion, overriding the CSS `display` property can reveal elements with the `hidden` attribute.

### Text Inheriting its Programmatic Language from an Element {#text-inheriting-language}

The <dfn id="text-inheriting-language:text">text inheriting its programmatic language</dfn> from an element E is composed of all the following texts:

- **text nodes**: the value of any [text nodes][] that are [visible][] or [included in the accessibility tree][] and children of an element inheriting its programmatic language from E;
- **accessible text**: the [accessible name][] and [accessible description][] of any [element inheriting its programmatic language](#text-inheriting-language:element) from E, and [included in the accessibility tree][];
- **page title**: the value of the [document title][], only if E is a [document][] in a [top-level browsing context][].

An element F is an <dfn id="text-inheriting-language:element">element inheriting its programmatic language</dfn> from an element E if at least one of the following conditions is true (recursively):

- F is E itself (an element always inherits its programmatic language from itself); or
- F does not have a non-empty `lang` attribute, and is the child in the [flat tree][] of an element inheriting its programmatic language from E; or
- F is a [fully active][] [document][] element, has no non-empty `lang` attribute, and its [browsing context container][] is an element inheriting its programmatic language from E.

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

[accessible description]: https://www.w3.org/TR/accname-1.1/#dfn-accessible-description 'Definition of Accessible description'
[accessible name and description computation]: https://www.w3.org/TR/accname 'Accessible Name and Description Computation'
[accessible name]: #accessible-name 'Definition of Accessible Name'
[attribute value]: #attribute-value
[boolean attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes 'HTML Specification of Boolean Attribute'
[browsing context container]: https://html.spec.whatwg.org/#browsing-context-container 'HTML Definition of Browsing Context Container'
[case insensitive]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.1.1
[comma separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#comma-separated-tokens 'HTML Specification of Comma Separated Tokens'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[content type]: https://dom.spec.whatwg.org/#concept-document-content-type 'DOM content type, as of 2020/06/05'
[default page language]: #default-page-language
[document element]: https://dom.spec.whatwg.org/#document-element 'DOM document element, as of 2020/06/05'
[document title]: https://html.spec.whatwg.org/multipage/dom.html#document.title 'HTML document title, as of 2020/06/05'
[document]: https://dom.spec.whatwg.org/#document-element 'DOM document element, as of 2020/06/05'
[enumerated attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute 'HTML Specification of Enumerated Attribute'
[examples of accessible name]: https://act-rules.github.io/pages/examples/accessible-name/
[examples of default language]: https://act-rules.github.io/pages/examples/element-language/
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[examples of most common language]: https://act-rules.github.io/pages/examples/element-language/
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[fully active]: https://html.spec.whatwg.org/#fully-active 'HTML definition of Fully Active Document'
[grandfathered tags]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.2.8
[html aam]: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings 'Specification of HTML attributes value mapping to ARIA states and properties'
[idl attribute]: https://heycam.github.io/webidl/#idl-attributes "Definition of Web IDL Attribute (Editor's Draft)"
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[iso 639.2]: https://www.loc.gov/standards/iso639-2/php/code_list.php 'ISO 639.2: Codes for the Representation of Names of Languages'
[known primary language tag]: #known-primary-language-tag
[language subtag registry]: http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
[language tag]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.1
[most common language]: #most-common-element-language 'Definition of Most Common Language of an Element'
[numbers]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#numbers 'HTML Specification of Number Parsing'
[primary language subtag]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.2.1
[reflect]: https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes 'HTML specification of Reflecting Content Attributes in IDL Attributes'
[rfc 5646]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.1
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[sc311]: https://www.w3.org/TR/WCAG21/#language-of-page 'Success Criterion 3.1.1 Language of Page'
[selectors level 3]: https://drafts.csswg.org/selectors-3/#lang-pseudo
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[space separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens 'HTML Specification of Space Separated Tokens'
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[text inheriting its programmatic language]: #text-inheriting-language 'Definition of Text Inheriting its Programmatic Language from an Element'
[text nodes]: https://dom.spec.whatwg.org/#text 'DOM text, as of 2020/06/05'
[top-level browsing context]: https://html.spec.whatwg.org/#top-level-browsing-context 'HTML top-level browsing context, as of 2020/06/05'
[type field]: https://www.rfc-editor.org/rfc/rfc5646.html#section-3.1.3
[visible]: #visible 'Definition of Visible'
[wai-aria specification]: https://www.w3.org/TR/wai-aria-1.1/#propcharacteristic_value 'WAI-ARIA Specification of States and Properties Value'
[web page]: #web-page-html 'Definition of Web Page (HTML)'
