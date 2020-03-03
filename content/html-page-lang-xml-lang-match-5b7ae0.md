---
title: "HTML page lang and xml:lang attributes have matching values"
permalink: /standards-guidelines/act/rules/html-page-lang-xml-lang-match-5b7ae0/
ref: /standards-guidelines/act/rules/html-page-lang-xml-lang-match-5b7ae0/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/html-page-lang-xml-lang-match-5b7ae0.md
---

Rule Type:
:   atomic

Rule ID:
:   5b7ae0

Last modified:
:   March 5, 2020

Accessibility Requirements Mapping
:   [3.1.1 Language of Page (Level A)](https://www.w3.org/TR/WCAG21/#language-of-page)
    - **Required for conformance** to WCAG 2.0 and above on level A and above
    - [Outcome](#outcome) mapping:
        - Any `failed` outcomes: not satisfied
        - All `passed` outcomes: further testing is needed
        - An `inapplicable` outcome: further testing is needed

Input Aspects
: [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)

## Description

This rule checks that all HTML pages with both a `lang` and `xml:lang` attributes on the root element, have the same primary language subtag.

## Applicability

This rule applies to any [document element](https://dom.spec.whatwg.org/#document-element) if it is an `html` element that:

- is in a [top-level browsing context][]; and
- has a [node document](https://dom.spec.whatwg.org/#concept-node-document) with a [content type][] of `text/html`; and
- has a `lang` attribute that has a [valid language subtag][]; and
- has a non-empty `xml:lang` attribute.

**Note:** `html` elements within `iframe` and `object` elements are not applicable as `iframe` and `object` elements create [nested browsing contexts](https://html.spec.whatwg.org/#nested-browsing-context). However, as these elements are meant to provide a layer of isolation, the declared language of their [parent browsing context](https://html.spec.whatwg.org/#parent-browsing-context) will likely not be inherited, making it possible for non-matching `lang` and `xml:lang` attributes in [nested browsing contexts](https://html.spec.whatwg.org/#nested-browsing-context) to also cause accessibility issues.

## Expectation

For each test target, the values of the [primary language subtags][], if any exist, for the `lang` and `xml:lang` attributes are the same.

**Note:** Having matching [primary language subtags][] of the `lang` and `xml:lang` attribute, but non-matching [language tags](https://tools.ietf.org/html/bcp47#section-2) overall, will not cause accessibility issues unless there's a sufficiently large difference between the two [language tags](https://tools.ietf.org/html/bcp47#section-2). One notable case is the [language tags](https://tools.ietf.org/html/bcp47#section-2) for Cantonese (`zh-yue`) and Mandarin (`zh-cmn`) where the [primary language subtags][] match, but the [extended language subtags][] don't. Such a case would not fail this rule, but could lead to accessibility issues in practice.

## Assumptions

- The language of the page can be set by other methods than the `lang` attribute, for example using HTTP headers or the `meta` element. These methods are not supported by all assistive technologies. This rule assumes that these other methods are insufficient to satisfying [Success Criterion 3.1.1: Language of Page](https://www.w3.org/TR/WCAG21/#language-of-page).

- This rule assumes that user agents and assistive technologies can programmatically determine [valid language subtags](#valid-language-subtag) even if these do not conform to the [BCP 47][] syntax.

- This rule assumes that [grandfathered tags][] are not used as these will not be recognized as [valid language subtags](#valid-language-subtag).

## Accessibility Support

Since most assistive technologies will consistently use `lang` over `xml:lang` when both are used, violation of this rule may not necessarily be a violation of WCAG 2. Only when there are inconsistencies between assistive technologies, as to which attribute is used to determine the language, does this lead to a violation of SC 3.1.1.

## Background

- [H57: Using language attributes on the html element](https://www.w3.org/WAI/WCAG21/Techniques/html/H57)
- [BCP 47: Tags for Identifying Languages](https://www.ietf.org/rfc/bcp/bcp47.txt)
- [The `lang` and `xml:lang` attributes](https://html.spec.whatwg.org/multipage/dom.html#the-lang-and-xml:lang-attributes)

## Test Cases

### Passed

#### Passed Example 1

This `html` element has identical [primary language subtags][] for its `lang` and `xml:lang` attributes.

```html
<html lang="en" xml:lang="en"></html>
```

#### Passed Example 2

This `html` element has identical [primary language subtags][] for its `lang` and `xml:lang` attributes. The [extended language subtags][] also match.

```html
<html lang="en-GB" xml:lang="en-GB"></html>
```

#### Passed Example 3

This `html` element has identical [primary language subtags][] for its `lang` and `xml:lang` attributes. The [extended language subtags][] do not match, but this is not required by this rule.

```html
<html lang="en-GB" xml:lang="en-US"></html>
```

### Failed

#### Failed Example 1

This `html` element has different [primary language subtags][] for its `lang` and `xml:lang` attributes.

```html
<html lang="fr" xml:lang="en"></html>
```

#### Failed Example 2

This `html` element has different [primary language subtags][] for its `lang` and `xml:lang` attributes. The [extended language subtags][] do match, but this rules only focus on the [primary language subtags][].

```html
<html lang="fr-CA" xml:lang="en-CA"></html>
```

### Inapplicable

#### Inapplicable Example 1

This rule does not apply to `svg` elements.

```svg
<svg xmlns="http://www.w3.org/2000/svg" lang="en" xml:lang="en"></svg>
```

#### Inapplicable Example 2

This rule does not apply to `svg` elements, even inside an `html` element.

```svg
<html>
	<body>
		<svg lang="en"></svg>
	</body>
</html>
```

#### Inapplicable Example 3

This rule does not apply to `math` elements.

```xml
<math xml:lang="en"></math>
```

#### Inapplicable Example 4

This rule only applies to documents with a [content type][] of `text/html`

```xhtml
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html lang="en" xml:lang="en"></html>
```

#### Inapplicable Example 5

This rule does not apply to `html` elements whose `lang` attribute is not a [valid language subtag][].

```html
<html lang="em" xml:lang="en"></html>
```

#### Inapplicable Example 6

This rule does not apply to `html` elements without an `xml:lang` attribute.

```html
<html lang="en"></html>
```

#### Inapplicable Example 7

This rule applies neither to `html` elements without an `xml:lang` attribute, nor to `html` in [nested browsing context][]

```html
<html lang="en">
	<iframe srcdoc="<html lang='en' xml:lang='en'></html>" />
</html>
```

#### Inapplicable Example 8

This rule does not apply to `html` elements with an empty (`""`) `xml:lang` attribute.

```html
<html lang="fr" xml:lang=""></html>
```

## Glossary

### Outcome

A conclusion that comes from evaluating an ACT Rule on a [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) or one of its constituent [test target](https://www.w3.org/TR/act-rules-format/#test-target). An outcome can be one of the three following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) meets all expectations
- **Failed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) does not meet all expectations

**Note:** A rule has one `passed` or `failed` outcome for every [test target](https://www.w3.org/TR/act-rules-format/#test-target). When there are no test targets the rule has one inapplicable outcome. This means that each [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) will have one or more outcomes.

**Note:** Implementers using the [EARL10-Schema](https://www.w3.org/TR/EARL10-Schema/) can express the outcome with the [outcome property](https://www.w3.org/TR/EARL10-Schema/#outcome). In addition to `passed`, `failed` and `inapplicable`, EARL 1.0 also defined an `incomplete` outcome. While this cannot be the outcome of an ACT Rule when applied in its entirety, it often happens that rules are only partially evaluated. For example, when applicability was automated, but the expectations have to be evaluated manually. Such "interim" results can be expressed with the incomplete outcome.

### Valid Language Subtag

A language tag consists of a [primary language subtag][] from the [language subtag registry][], optionally followed by a hyphen (`-`) and any sequence of characters.

_Note:_ This definition intentionally differs from the [BCP 47][] syntax as user agents and assistive technologies are more lenient in what they accept. The definition is however consistent with the behavior of the `:lang()` pseudo-selector as defined by [Selectors Level 3][]. For example, `de-hello` would be an accepted way to indicate German in current user agents and assistive technologies, despite not being valid according to [BCP 47][]. As a consequence of this definition, however, [grandfathered tags][] are not correctly recognized as valid language subtags.

## Acknowledgements

### Authors

- [Jey Nandakumar](https://github.com/jkodu)

### Previous Authors

- [Annika Nietzio](https://github.com/annika-FTB)

[content type]: https://dom.spec.whatwg.org/#concept-document-content-type 'Definition of content type'
[extended language subtags]: https://tools.ietf.org/html/bcp47#section-2.2.2 'Definition of extended language subtag'
[nested browsing context]: https://html.spec.whatwg.org/#nested-browsing-context 'Definition of nested browsing context'
[primary language subtags]: https://tools.ietf.org/html/bcp47#section-2.2.1 'Definition of primary language subtag'
[top-level browsing context]: https://html.spec.whatwg.org/#top-level-browsing-context 'Definition of top-level browsing context'
[valid language subtag]: #valid-language-subtag 'Definition of valid language subtag'
[grandfathered tags]: https://tools.ietf.org/html/bcp47#section-2.2.8
[bcp 47]: https://tools.ietf.org/html/bcp47#section-2.1
[language subtag registry]: http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
[selectors level 3]: https://drafts.csswg.org/selectors-3/#lang-pseudo
