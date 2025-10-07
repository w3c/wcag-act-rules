---
title: "HTML page lang attribute has valid language tag"
permalink: /standards-guidelines/act/rules/bf051a/proposed/
ref: /standards-guidelines/act/rules/bf051a/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/bf051a/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> bf051a</p>
  <p><strong>Date:</strong> Updated 7 October 2025</p>
  <p><strong>Authors:</strong> <a href="https://github.com/jkodu">Jey Nandakumar</a>. Previous Authors: <a href="https://github.com/annika-FTB">Annika Nietzio</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: bf051a
  name: "HTML page lang attribute has valid language tag"
  rule_type: atomic
  original_file: html-page-lang-valid-bf051a.md
  description: |
    This rule checks that the `lang` attribute of the root element of a non-embedded HTML page has a language tag with a known primary language subtag.
  last_modified: 7 October 2025
  scs_tested:
    - handle: Language of Page
      num: 3.1.1
      level: A
---

## Applicability

This rule applies to any [document element](https://dom.spec.whatwg.org/#document-element) if it is an `html` element for which all the following are true:

- has a `lang` attribute that is neither empty ("") nor only [ASCII whitespace](https://infra.spec.whatwg.org/#ascii-whitespace); and
- is in a [top-level browsing context](https://html.spec.whatwg.org/#top-level-browsing-context); and
- has a [node document](https://dom.spec.whatwg.org/#concept-node-document) with a [content type](https://dom.spec.whatwg.org/#concept-document-content-type) of `text/html`.

## Expectation

For each test target, the `lang` attribute has a [known primary language tag][].

## Background

### Assumptions

- The language of the page can be set by other methods than the `lang` attribute, for example using HTTP headers or the `meta` element. These methods are not supported by all assistive technologies. This rule assumes that these other methods are insufficient to satisfying [Success Criterion 3.1.1: Language of Page](https://www.w3.org/TR/WCAG22/#language-of-page).

- This rule assumes that user agents and assistive technologies can programmatically determine [known primary language tags][known primary language tag] even if these do not conform to the [RFC 5646][] syntax.

- This rule assumes that only [known primary language tags][known primary language tag] are enough to satisfy [Success Criterion 3.1.1 Language of Page][sc311]; this notably excludes [grandfathered tags][] and [ISO 639.2][] three-letters codes, both having poor support in assistive technologies.

### Accessibility Support

There are no accessibility support issues known.

This rule is only applicable to non-embedded HTML pages. HTML pages embedded into other documents, such as through `iframe` or `object` elements are not applicable because they are not [web pages](https://www.w3.org/TR/WCAG22/#dfn-web-page-s) according to the definition in WCAG.

### Related rules

- [HTML page has `lang` attribute](https://www.w3.org/WAI/standards-guidelines/act/rules/b5c3f8/)
- [HTML page language subtag matches default language](https://www.w3.org/WAI/standards-guidelines/act/rules/ucwvc8/)

### Bibliography

- [Understanding Success Criterion 3.1.1: Language of Page](https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html)
- [H57: Using language attributes on the html element](https://www.w3.org/WAI/WCAG22/Techniques/html/H57)
- [RFC 5646: Tags for Identifying Languages](https://www.rfc-editor.org/rfc/rfc5646.html)
- [The `lang` and `xml:lang` attributes](https://html.spec.whatwg.org/multipage/dom.html#the-lang-and-xml:lang-attributes)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>3.1.1 Language of Page (Level A)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG22/#language-of-page">Learn more about 3.1.1 Language of Page</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level A and higher.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>H57: Using the language attribute on the HTML element</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG22/Techniques/html/H57">Learn more about technique H57</a></li>
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

## Examples

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/bf051a/7d8c4fd028c504d10c4e5e9bd7183c139549e1a1.html">Open in a new tab</a>

This `html` element has a `lang` attribute with a [known primary language tag][].

```html
<html lang="FR"></html>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/bf051a/a49f11c86ad81c4d42700dfca58a7eeec377f02e.html">Open in a new tab</a>

This `html` element has a `lang` attribute with a [known primary language tag][] even though the [region subtag][] is not.

```html
<html lang="en-US-GB"></html>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/bf051a/b7a35f8080e756776877bca013a910dafde8ef73.html">Open in a new tab</a>

This `html` element has a `lang` attribute, with no [known primary language tag][].

```html
<html lang="em-US"></html>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/bf051a/5c998eef8cb13a8f577dade1a3b9fe591bc69204.html">Open in a new tab</a>

This `html` element has a `lang` attribute, with no [known primary language tag][].

```html
<html lang="#1"></html>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/bf051a/0f73e7179e17f050380f0ea350d2551611820fd5.html">Open in a new tab</a>

The `lang` attribute of this page is an [iso 639.2][] three-letter code, which has no [known primary language tag][].

```html
<html lang="eng">
	<body>
		<p lang="en">I love ACT rules!</p>
	</body>
</html>
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/bf051a/b64d767d873269ff00966630e34ab198fc24368f.html">Open in a new tab</a>

The `lang` attribute of this page is a [grandfathered tag][grandfathered tags], which has no [known primary language tag][].

```html
<html lang="i-lux">
	<body>
		<p lang="lb">Lëtzebuerg ass e Land an Europa.</p>
	</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/bf051a/1b73557d29073ecd327790ca1a6e343b4395b2ab.svg">Open in a new tab</a>

This rule does not apply to `svg` elements.

```svg
<svg xmlns="http://www.w3.org/2000/svg" lang="fr"></svg>
```

## Glossary

### Known Primary Language Tag {#known-primary-language-tag}

A language tag has a _known primary language tag_ if its [primary language subtag][] exists in the [language subtag registry][] with a [Type field][] whose field-body value is `language`.

A "language tag" is here to be understood as in the first paragraph of the [RFC 5646 language tag syntax][language tag], i.e. a sequence of subtags separated by hyphens, where a subtag is any sequence of alphanumerical characters. [Language tag][] that are not valid according to the stricter [RFC 5646 syntax][language tag] (and ABNF grammar) definition can still have a known primary language tag. User agents and assistive technologies are more lenient in what they accept. This definition is consistent with the behavior of the `:lang()` pseudo-selector as defined by [Selectors Level 3][].

As an example, `de-hello` would be an accepted way to indicate German in current user agents and assistive technologies, despite not being valid according to [RFC 5646 grammar][language tag]. It has a known primary language tag (namely, `de`).

As a consequence of this definition, however, [grandfathered tags][] do not have a known primary language tag.

Subtags, notably the [primary language subtag][], are [case insensitive][]. Comparison with the [language subtag registry][] must be done in a case insensitive way.

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

[case insensitive]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.1.1
[earl10-schema]: https://www.w3.org/TR/act-rules-format-1.1/#biblio-earl10-schema
[grandfathered tags]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.2.8
[iso 639.2]: https://www.loc.gov/standards/iso639-2/php/code_list.php 'ISO 639.2: Codes for the Representation of Names of Languages'
[known primary language tag]: #known-primary-language-tag 'Definition of Known Primary Language Tag'
[language subtag registry]: http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
[language tag]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.1
[outcome property]: https://www.w3.org/TR/EARL10-Schema/#outcome
[primary language subtag]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.2.1
[region subtag]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.2.4 'Definition of region subtag'
[rfc 5646]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.1
[sc311]: https://www.w3.org/TR/WCAG22/#language-of-page 'Success Criterion 3.1.1 Language of Page'
[selectors level 3]: https://drafts.csswg.org/selectors-3/#lang-pseudo
[test subject]: https://www.w3.org/TR/act-rules-format-1.1/#test-subject
[test target]: https://www.w3.org/TR/act-rules-format/#test-target
[type field]: https://www.rfc-editor.org/rfc/rfc5646.html#section-3.1.3
