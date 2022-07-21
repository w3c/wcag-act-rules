---
title: "Element with lang attribute has valid language tag"
permalink: /standards-guidelines/act/rules/de46e4/proposed/
ref: /standards-guidelines/act/rules/de46e4/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/de46e4/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> de46e4</p>
  <p><strong>Date:</strong> Updated 11 July 2022</p>
  <p><strong>Authors:</strong> <a href="https://github.com/brynanders">Bryn Anderson</a>, <a href="https://github.com/jkodu">Jey Nandakumar</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: de46e4
  name: "Element with lang attribute has valid language tag"
  rule_type: atomic
  description: |
    This rule checks that a non-empty `lang` attribute of an element in the page has a language tag with a known primary language subtag.
  last_modified: 11 July 2022
  scs_tested:
    - handle: Language of Parts
      num: 3.1.2
      level: AA
---

## Applicability

This rule applies to any [HTML element][] with a `lang` [attribute value][] that is not empty (`""`) and for which all of the following is true:

- **descendant**: the element is an [inclusive descendant][] in the [flat tree][] of a `body` element; and
- **content type**: the element has an associated [node document][] with a [content type][] of `text/html`; and
- **text**: there is some [text inheriting its programmatic language][] from the element which is neither empty nor only [whitespace][].

## Expectation

For each test target, the `lang` [attribute value][] has a [known primary language tag][].

## Assumptions

- This rule assumes that the `lang` [attribute value][] is used to indicate the language of a section of the content. If the `lang` [attribute value][] is used for something else (for example to indicate the programming language of a `code` element), the content may still conform to WCAG despite failing this rule.

- This rule assumes that user agents and assistive technologies can programmatically determine [known primary language tags][known primary language tag] even if these do not conform to the [RFC 5646][] syntax.

- This rule assumes that only [known primary language tags][known primary language tag] are enough to satisfy [Success Criterion 3.1.2 Language of Parts][sc312]; this notably excludes [grandfathered tags][] and [ISO 639.2][] three-letters codes, both having poor support in assistive technologies.

- This rule assumes that the text nodes contain text that express something in [human language][] and therefore need a correct programmatic language.

## Accessibility Support

There are differences in how assistive technologies handle unknown and invalid language tags. Some will default to the language of the page, whereas others will default to the closest ancestor with a valid lang attribute.

## Background

### Bibliography

- [CSS Scoping Module Level 1 (editor's draft)](https://drafts.csswg.org/css-scoping/)
- [H58: Using language attributes to identify changes in the human language](https://www.w3.org/WAI/WCAG21/Techniques/html/H58)
- [RFC 5646: Tags for Identifying Languages](https://www.rfc-editor.org/rfc/rfc5646.html)
- [Understanding Success Criterion 3.1.2: Language of Parts](https://www.w3.org/WAI/WCAG21/Understanding/language-of-parts)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>3.1.2 Language of Parts (Level AA)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#language-of-parts">Learn more about 3.1.2 Language of Parts</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level AA and higher.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
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
        <li>All <code>passed</code> outcomes: technique needs further testing</li>
        <li>An <code>inapplicable</code> outcome: technique needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
</ul>

## Input Aspects

The following aspects are required in using this rule.

- [Accessibility Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-accessibility)
- [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)
- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)

## Test Cases

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/de46e4/53a78bad6e92791991df42c50d2e763a9f9d772c.html">Open in a new tab</a>

This `article` element has a `lang` [attribute value][] which has a [known primary language tag][].

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

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/de46e4/e0fe6824b5571e0552ab2955697c5ff0776abf79.html">Open in a new tab</a>

This `blockquote` element has a `lang` [attribute value][] which has a [known primary language tag][]. The region section ("CH") in the value is ignored by the rule (and the definition of [known primary language tag][]).

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

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/de46e4/207782d0d8899521e2b51b5c384f83d7f4516358.html">Open in a new tab</a>

This `p` element has a `lang` [attribute value][] which has a [known primary language tag][], but a syntactically invalid region subtag which is ignored by the rule.

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

<a class="example-link" title="Passed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/de46e4/8376f95166a75a8541217b77ae6a235f1aac6c3d.html">Open in a new tab</a>

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

<a class="example-link" title="Passed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/de46e4/2febb4d398ed0d788f9ac054ff14cfbd68c0c1f1.html">Open in a new tab</a>

This `div` element has a valid `lang` [attribute value][]. The [accessible name][] of the image is [text inheriting its programmatic language][] from the `div` element.

```html
<html>
	<body>
		<div lang="EN">
			<img src="/test-assets/shared/fireworks.jpg" alt="Fireworks over Paris" />
		</div>
	</body>
</html>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/de46e4/0545e4efa0d7897b357f0396e7e30d5f3b5921dd.html">Open in a new tab</a>

This `article` element has a `lang` [attribute value][] which does not have a [known primary language tag][] because its primary language subtag does not exist in the [language subtag registry][].

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

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/de46e4/e7f2916927e758969cbfe270ad4b6ed6c07faa72.html">Open in a new tab</a>

This `article` element has a `lang` [attribute value][] which has no [known primary language tag][].

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

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/de46e4/35a083bacf80a64deb81069ec7db0229520c9a6c.html">Open in a new tab</a>

This `article` element has a `lang` [attribute value][] which consists of only [whitespace][] and thus has no [known primary language tag][].

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

<a class="example-link" title="Failed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/de46e4/0d2ac2a60f6b99de02537945ac61366e1562403d.html">Open in a new tab</a>

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

<a class="example-link" title="Failed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/de46e4/8df22e9421c652e9849f7bfb4dbd28a24518c0fb.html">Open in a new tab</a>

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

<a class="example-link" title="Failed Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/de46e4/984a5b424d118046dfa2529398056fbd52d4e5ea.html">Open in a new tab</a>

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

<a class="example-link" title="Failed Example 7" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/de46e4/3087d6c373b09b1f4fc70a5c3ae221cce54b626c.html">Open in a new tab</a>

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

#### Failed Example 8

<a class="example-link" title="Failed Example 8" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/de46e4/915cdae554a817caa4792101fde1adf14563227d.html">Open in a new tab</a>

The `lang` [attribute value][] of this `p` element is an [iso 639.2][] three letters code, which has no [known primary language tag][].

```html
<html lang="en">
	<body>
		<p lang="eng">I love ACT rules!</p>
	</body>
</html>
```

#### Failed Example 9

<a class="example-link" title="Failed Example 9" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/de46e4/50e733e0c505a556fc53e6265eb5b432823570f7.html">Open in a new tab</a>

The `lang` [attribute value][] of this `p` element is a [grandfathered tag][grandfathered tags], which has no [known primary language tag][].

```html
<html lang="lb">
	<body>
		<p lang="i-lux">Lëtzebuerg ass e Land an Europa.</p>
	</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/de46e4/5b58b483fa53a6ff228c89a7fe57997664845663.html">Open in a new tab</a>

There is no element with a lang attribute value which is a descendant of a body element.

```html
<html lang="en">
	<body>
		They wandered into a strange Tiki bar on the edge of the small beach town.
	</body>
</html>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/de46e4/d6606eb2863e2176f9beb914e5cfe70bce2d905e.html">Open in a new tab</a>

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

<a class="example-link" title="Inapplicable Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/de46e4/a44f5e11d20feec4ae39e2db0336ddef0a8e04ec.html">Open in a new tab</a>

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

<a class="example-link" title="Inapplicable Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/de46e4/471e3f82cdd9122e2886d2d7bcfc8cda1397a51d.html">Open in a new tab</a>

There is no [text inheriting its programmatic language][] from this `div` element.

```html
<html lang="en">
	<body>
		<div lang="invalid">
			<img src="/test-assets/shared/fireworks.jpg" alt="" />
		</div>
	</body>
</html>
```

#### Inapplicable Example 5

<a class="example-link" title="Inapplicable Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/de46e4/4fa5219cf39dc536c51d67f6c4f9f54271a8dcfa.html">Open in a new tab</a>

The [text inheriting its programmatic language][] from this `div` element is only [whitespace][].

```html
<html lang="en">
	<body>
		<div lang="invalid"></div>
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

[accessible description]: https://www.w3.org/TR/accname-1.1/#dfn-accessible-description 'Definition of Accessible description'
[accessible name and description computation]: https://www.w3.org/TR/accname 'Accessible Name and Description Computation'
[accessible name]: #accessible-name 'Definition of Accessible Name'
[attribute value]: #attribute-value 'Definition of Attribute Value'
[boolean attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes 'HTML Specification of Boolean Attribute'
[browsing context container]: https://html.spec.whatwg.org/#browsing-context-container 'HTML Definition of Browsing Context Container'
[case insensitive]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.1.1
[comma separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#comma-separated-tokens 'HTML Specification of Comma Separated Tokens'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[content type]: https://dom.spec.whatwg.org/#concept-document-content-type
[descendant]: https://dom.spec.whatwg.org/#concept-tree-descendant
[document title]: https://html.spec.whatwg.org/multipage/dom.html#document.title 'HTML document title, as of 2020/06/05'
[document]: https://dom.spec.whatwg.org/#document-element 'DOM document element, as of 2020/06/05'
[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[enumerated attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute 'HTML Specification of Enumerated Attribute'
[examples of accessible name]: https://act-rules.github.io/pages/examples/accessible-name/
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree
[fully active]: https://html.spec.whatwg.org/#fully-active 'HTML definition of Fully Active Document'
[grandfathered tags]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.2.8
[html aam]: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings 'Specification of HTML attributes value mapping to ARIA states and properties'
[html element]: #namespaced-element
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[human language]: https://www.w3.org/TR/WCAG21/#dfn-human-language-s 'WCAG definition of Human Language'
[idl attribute]: https://heycam.github.io/webidl/#idl-attributes "Definition of Web IDL Attribute (Editor's Draft)"
[included in the accessibility tree]: #included-in-the-accessibility-tree
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[inclusive descendant]: https://dom.spec.whatwg.org/#concept-tree-inclusive-descendant 'DOM definition of Inclusive Descendant'
[iso 639.2]: https://www.loc.gov/standards/iso639-2/php/code_list.php 'ISO 639.2: Codes for the Representation of Names of Languages'
[known primary language tag]: #known-primary-language-tag
[language subtag registry]: https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
[language tag]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.1
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
[node document]: https://dom.spec.whatwg.org/#concept-node-document
[numbers]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#numbers 'HTML Specification of Number Parsing'
[primary language subtag]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.2.1
[reflect]: https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes 'HTML specification of Reflecting Content Attributes in IDL Attributes'
[rfc 5646]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.1
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[sc312]: https://www.w3.org/TR/WCAG21/#language-of-parts 'Success Criterion 3.1.2 Language of Parts'
[selectors level 3]: https://drafts.csswg.org/selectors-3/#lang-pseudo
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[space separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens 'HTML Specification of Space Separated Tokens'
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[text inheriting its programmatic language]: #text-inheriting-language 'Definition of Text Inheriting its Programmatic Language from an Element'
[text node]: https://dom.spec.whatwg.org/#text
[text nodes]: https://dom.spec.whatwg.org/#text 'DOM text, as of 2020/06/05'
[top-level browsing context]: https://html.spec.whatwg.org/#top-level-browsing-context 'HTML top-level browsing context, as of 2020/06/05'
[type field]: https://www.rfc-editor.org/rfc/rfc5646.html#section-3.1.3
[visible]: #visible 'Definition of visible'
[wai-aria specification]: https://www.w3.org/TR/wai-aria-1.1/#propcharacteristic_value 'WAI-ARIA Specification of States and Properties Value'
[whitespace]: #whitespace 'Definition of Whitespace'
