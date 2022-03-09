---
title: "HTML page lang and xml:lang attributes have matching values"
permalink: /standards-guidelines/act/rules/5b7ae0/
ref: /standards-guidelines/act/rules/5b7ae0/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/5b7ae0/index.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> 5b7ae0</p>
  <p><strong>Date:</strong> Updated 28 January 2022</p>
  <p><strong>Authors:</strong> <a href="https://github.com/jkodu">Jey Nandakumar</a>. Previous Authors: <a href="https://github.com/annika-FTB">Annika Nietzio</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules community group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It was approved and published by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: false
rule_meta:
  id: 5b7ae0
  name: "HTML page `lang` and `xml:lang` attributes have matching values"
  rule_type: atomic
  description: |
    This rule checks that both `lang` and `xml:lang` attributes on the root element of a non-embedded HTML page, have the same primary language subtag.
  last_modified: 28 January 2022
  scs_tested:
    - handle: Language of Page
      num: 3.1.1
      level: A
---

## Applicability

This rule applies to any [document element](https://dom.spec.whatwg.org/#document-element) if it is an `html` element for which all the following are true:

- is in a [top-level browsing context][]; and
- has a [node document](https://dom.spec.whatwg.org/#concept-node-document) with a [content type][] of `text/html`; and
- has a `lang` attribute with a [known primary language tag][]; and
- has a non-empty `xml:lang` attribute.

## Expectation

For each test target, the values of the [primary language subtags][], if any exist, for the `lang` and `xml:lang` attributes are the same.

## Assumptions

- The language of the page can be set by other methods than the `lang` attribute, for example using HTTP headers or the `meta` element. These methods are not supported by all assistive technologies. This rule assumes that these other methods are insufficient to satisfying [Success Criterion 3.1.1: Language of Page](https://www.w3.org/TR/WCAG21/#language-of-page).

- This rule assumes that user agents and assistive technologies can programmatically determine [known primary language tags][known primary language tag] even if these do not conform to the [RFC 5646][] syntax.

- This rule assumes that only [known primary language tags][known primary language tag] are enough to satisfy [Success Criterion 3.1.1 Language of Page][sc311]; this notably excludes [grandfathered tags][] and [ISO 639.2][] three-letters codes, both having poor support in assistive technologies.

- The rule assumes that having `lang` and `xml:lang` attributes with matching [primary language subtags][] but non-matching [language tags](https://www.rfc-editor.org/rfc/rfc5646.html#section-2) overall, will not cause accessibility issues. This is not necessarily the case for all languages. One notable case is the [language tags](https://www.rfc-editor.org/rfc/rfc5646.html#section-2) for Cantonese (`zh-yue`) and Mandarin (`zh-cmn`) where the [primary language subtags][] match, but the [extended language subtags][] don't. Such a case would not fail this rule, but could lead to accessibility issues.

## Accessibility Support

Since most assistive technologies will consistently use `lang` over `xml:lang` when both are used, violation of this rule may not necessarily be a violation of WCAG 2. Only when there are inconsistencies between assistive technologies as to which attribute is used to determine the language does this lead to a violation of SC 3.1.1.

## Background

This rule is only applicable to non-embedded HTML pages. HTML pages embedded into other documents, such as through `iframe` or `object` elements are not applicable because they are not [web pages](https://www.w3.org/TR/WCAG21/#dfn-web-page-s) according to the definition in WCAG.

### Bibliography

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
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
</ul>

## Input Aspects

The following aspects are required in using this rule.

- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)

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

This rule does not apply to `html` elements without an `xml:lang` attribute.

```html
<html lang="en"></html>
```

#### Inapplicable Example 6

This rule applies neither to `html` elements without an `xml:lang` attribute, nor to `html` in [nested browsing context][]

```html
<html lang="en">
	<iframe srcdoc="<html lang='en' xml:lang='en'></html>" />
</html>
```

#### Inapplicable Example 7

This rule does not apply to `html` elements with an empty (`""`) `xml:lang` attribute.

```html
<html lang="fr" xml:lang=""></html>
```

## Glossary

### Known Primary Language Tag {#known-primary-language-tag}

A language tag has a _known primary language tag_ if its [primary language subtag][] exists in the [language subtag registry][] with a [Type field][] whose field-body value is `language`.

A "language tag" is here to be understood as in the first paragraph of the [RFC 5646 language tag syntax][language tag], i.e. a sequence of subtags separated by hyphens, where a subtag is any sequence of alphanumerical characters. [Language tag][] that are not valid according to the stricter [RFC 5646 syntax][language tag] (and ABNF grammar) definition can still have a known primary language tag. User agents and assistive technologies are more lenient in what they accept. This definition is consistent with the behavior of the `:lang()` pseudo-selector as defined by [Selectors Level 3][].

As an example, `de-hello` would be an accepted way to indicate German in current user agents and assistive technologies, despite not being valid according to [RFC 5646 grammar][language tag]. It has a known primary language tag (namely, `de`).

As a consequence of this definition, however, [grandfathered tags][] do not have a known primary language tag.

Subtags, notably the [primary language subtag][], are [case insensitive][]. Comparison with the [language subtag registry][] must be done in a case insensitive way.

### Outcome {#outcome}

An _outcome_ is a conclusion that comes from evaluating an ACT Rule on a [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) or one of its constituent [test target](https://www.w3.org/TR/act-rules-format/#test-target). An outcome can be one of the three following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) meets all expectations
- **Failed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) does not meet all expectations

**Note:** A rule has one `passed` or `failed` outcome for every [test target](https://www.w3.org/TR/act-rules-format/#test-target). When there are no test targets the rule has one `inapplicable` outcome. This means that each [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) will have one or more outcomes.

**Note:** Implementations using the [EARL10-Schema](https://www.w3.org/TR/EARL10-Schema/) can express the outcome with the [outcome property](https://www.w3.org/TR/EARL10-Schema/#outcome). In addition to `passed`, `failed` and `inapplicable`, EARL 1.0 also defined an `incomplete` outcome. While this cannot be the outcome of an ACT Rule when applied in its entirety, it often happens that rules are only partially evaluated. For example, when applicability was automated, but the expectations have to be evaluated manually. Such "interim" results can be expressed with the `incomplete` outcome.

{% include_relative _implementation-approved.md %}

## Changelog

This is the first version of this ACT rule.

[case insensitive]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.1.1
[content type]: https://dom.spec.whatwg.org/#concept-document-content-type 'Definition of content type'
[extended language subtags]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.2.2 'Definition of extended language subtag'
[grandfathered tags]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.2.8
[iso 639.2]: https://www.loc.gov/standards/iso639-2/php/code_list.php 'ISO 639.2: Codes for the Representation of Names of Languages'
[known primary language tag]: #known-primary-language-tag 'Definition of Known Primary Language Tag'
[language subtag registry]: http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
[language tag]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.1
[nested browsing context]: https://html.spec.whatwg.org/#nested-browsing-context 'Definition of nested browsing context'
[primary language subtag]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.2.1
[primary language subtags]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.2.1 'Definition of primary language subtag'
[rfc 5646]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.1
[sc311]: https://www.w3.org/TR/WCAG21/#language-of-page 'Success Criterion 3.1.1 Language of Page'
[selectors level 3]: https://drafts.csswg.org/selectors-3/#lang-pseudo
[top-level browsing context]: https://html.spec.whatwg.org/#top-level-browsing-context 'Definition of top-level browsing context'
[type field]: https://www.rfc-editor.org/rfc/rfc5646.html#section-3.1.3
