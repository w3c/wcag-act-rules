---
title: "Meta element has no refresh delay (no exception)"
permalink: /standards-guidelines/act/rules/bisz58/proposed/
ref: /standards-guidelines/act/rules/bisz58/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/bisz58/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> bisz58</p>
  <p><strong>Date:</strong> Updated 8 July 2025</p>
  <p><strong>Authors:</strong> <a href="https://github.com/Jym77">Jean-Yves Moyen</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: bisz58
  name: "Meta element has no refresh delay (no exception)"
  rule_type: atomic
  original_file: meta-refresh-no-delay-no-exception-bisz58.md
  description: |
    This rule checks that the `meta` element is not used for delayed redirecting or refreshing.
  last_modified: 8 July 2025
  scs_tested:
    - handle: Interruptions
      num: 2.2.4
      level: AAA
    - handle: Change on Request
      num: 3.2.5
      level: AAA
---

## Applicability

This rule applies to the first `meta` element in a document for which all the following are true:

- the element has an `http-equiv` [attribute value][] of `"refresh"`; and
- the element has a valid `content` [attribute value][], as described in the [meta refresh][] pragma directive.

## Expectation

For each target, the _time_ from the content [attribute value][] is 0. To determine the _time_, run the [shared declarative refresh steps][] on the `meta` element as described in the [HTML refresh state](https://html.spec.whatwg.org/multipage/semantics.html#attr-meta-http-equiv-refresh).

## Background

The `meta http-equiv="refresh"` directive is an HTML tag used to instruct browsers to automatically refresh or reload a web page after a specified time interval. This can be useful for updating content dynamically or redirecting users to another page.

The `content` attribute in the `meta http-equiv="refresh"` directive is used to define the time interval, in seconds, after which the browser should automatically refresh or reload the web page. For example, `content="5"` would instruct the browser to refresh the page every 5 seconds. Careful consideration of the refresh interval is crucial to ensure optimal user experience and accessibility, particularly for individuals who may require more time to consume or interact with web content.

Because a refresh with a timing of 0 is effectively a redirect, it is exempt from this rule. Since refreshing the same page with a time of 0 can cause rapid screen flashes it is strongly recommended to avoid this.

### Assumptions

- This rule assumes that no functionality was provided by the website for the user to adjust the timer.

### Accessibility Support

Not all major web browsers parse the value of the `content` attribute in the same way. Some major browsers, when they are unable to parse the value, default to a 0 seconds delay, whereas others will not redirect at all. This can cause some pages to be inapplicable for this rule, while still having a redirect in a minority of web browsers.

### Bibliography

- [Understanding Success Criterion 2.2.1: Timing Adjustable](https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html)
- [Understanding Success Criterion 2.2.4: Interruptions](https://www.w3.org/WAI/WCAG22/Understanding/interruptions.html)
- [Understanding Success Criterion 3.2.5: Change on Request](https://www.w3.org/WAI/WCAG22/Understanding/change-on-request.html)
- [G110: Using an instant client-side redirect](https://www.w3.org/WAI/WCAG22/Techniques/general/G110)
- [H76: Using meta refresh to create an instant client-side redirect](https://www.w3.org/TR/WCAG-TECHS/H76.html)
- [F40: Failure of Success Criterion 2.2.1 and 2.2.4 due to using meta redirect with a time limit](https://www.w3.org/TR/WCAG-TECHS/F40.html)
- [F41: Failure of Success Criterion 2.2.1, 2.2.4, and 3.2.5 due to using meta refresh with a time-out](https://www.w3.org/TR/WCAG-TECHS/F41.html)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>2.2.4 Interruptions (Level AAA)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG22/#interruptions">Learn more about 2.2.4 Interruptions</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level AAA.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>3.2.5 Change on Request (Level AAA)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG22/#change-on-request">Learn more about 3.2.5 Change on Request</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level AAA.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>G110: Using an instant client-side redirect</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG22/Techniques/general/G110">Learn more about technique G110</a></li>
      <li>Not required for conformance to any W3C accessibility recommendation.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: technique is not satisfied</li>
        <li>All <code>passed</code> outcomes: technique needs further testing</li>
        <li>An <code>inapplicable</code> outcome: technique needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>H76: Using meta refresh to create an instant client-side redirect</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG22/Techniques/html/H76">Learn more about technique H76</a></li>
      <li>Not required for conformance to any W3C accessibility recommendation.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: technique is not satisfied</li>
        <li>All <code>passed</code> outcomes: technique needs further testing</li>
        <li>An <code>inapplicable</code> outcome: technique needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
</ul>

### Secondary Requirements

This rule is related to the following accessibility requirements, but was 
not designed to test this requirements directly. These 
[secondary requirements](https://w3c.github.io/wcag-act/act-rules-format.html#secondary-requirements)
can either be stricter than the rule requires, or may be satisfied in ways 
not tested by the rule:

- [2.2.1 Timing Adjustable (Level A)](https://www.w3.org/TR/WCAG22/#timing-adjustable): This success criterion is **less strict** than this rule. This is because this criterion allows redirects longer than 20 hours. Some of the failed examples satisfy this success criterion.

## Input Aspects

The following aspects are required in using this rule.

- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)

## Test Cases

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/bisz58/6a414a1455a58e4505d7c550486d628f0fd80fdd.html">Open in a new tab</a>

This `meta` element redirects the user immediately. Users won't notice the change in context.

```html
<head>
	<meta http-equiv="refresh" content="0; URL='https://w3.org'" />
</head>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/bisz58/24a98a3ff6a69e073f768bb198671ea6a1c4568a.html">Open in a new tab</a>

The first valid `meta` element redirects immediately.

```html
<head>
	<meta http-equiv="refresh" content="0; https://w3.org" />
	<meta http-equiv="refresh" content="30; https://w3.org" />
</head>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/bisz58/ecc787569c06640f3748ae90e2b57fb51c1e22d8.html">Open in a new tab</a>

This `meta` element refreshes the page after 30 seconds.

```html
<head>
	<meta http-equiv="refresh" content="30" />
</head>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/bisz58/d0672e81d17313f7ef156f3bc6e43c68143a5f45.html">Open in a new tab</a>

This `meta` element redirects the user after 20 hours.

```html
<head>
	<meta http-equiv="refresh" content="72001; URL='https://w3.org'" />
</head>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/bisz58/b8aad77e3ff2fa8d0272fac5362566ff79afad7f.html">Open in a new tab</a>

The first `meta` element is not valid (because of the colon instead of a semi-colon in the `content` attribute), the second one redirects after 20 hours.

```html
<head>
	<meta http-equiv="refresh" content="0: https://w3.org" />
	<meta http-equiv="refresh" content="72001; https://w3.org" />
</head>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/bisz58/3761ce87e64549073f62df26071fbde9850e649e.html">Open in a new tab</a>

This `meta` element has no `content` attribute.

```html
<head>
	<meta http-equiv="refresh" />
</head>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/bisz58/c73e036ba88dbbedf6b6a90b69328208eb1e14d0.html">Open in a new tab</a>

This `meta` element has no `http-equiv="refresh"` attribute.

```html
<head>
	<meta content="72001" />
</head>
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/bisz58/31864b9243c7565e802c6b4f36faed5861a631d3.html">Open in a new tab</a>

This `meta` element has an invalid `content` attribute (because of the colon instead of a semi-colon), and is therefore inapplicable.

```html
<head>
	<meta http-equiv="refresh" content="0: http://example.com" />
</head>
```

#### Inapplicable Example 4

<a class="example-link" title="Inapplicable Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/bisz58/e6e51895cab42ee6adf2ade5b654808d830e673b.html">Open in a new tab</a>

This `meta` element has an invalid `content` attribute, and is therefore inapplicable.

```html
<head>
	<meta http-equiv="refresh" content="-00.12 foo" />
</head>
```

#### Inapplicable Example 5

<a class="example-link" title="Inapplicable Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/bisz58/a32834c94a9dd1869e22ccfb0b7b753648c8d469.html">Open in a new tab</a>

This `meta` element has an invalid `content` attribute, and is therefore inapplicable.

```html
<head>
	<meta http-equiv="refresh" content="; 72001" />
</head>
```

#### Inapplicable Example 6

<a class="example-link" title="Inapplicable Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/bisz58/c3cc2e9d19259f7a7ffa99818ac44d034127f01f.html">Open in a new tab</a>

This `meta` element has an invalid `content` attribute, and is therefore inapplicable.

```html
<head>
	<meta http-equiv="refresh" content="" />
</head>
```

#### Inapplicable Example 7

<a class="example-link" title="Inapplicable Example 7" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/bisz58/1846b9116a8563e653cee40753b4c904696851f9.html">Open in a new tab</a>

This `meta` element has an invalid `content` attribute, and is therefore inapplicable.

```html
<head>
	<meta http-equiv="refresh" content="+72001; http://w3.org" />
</head>
```

#### Inapplicable Example 8

<a class="example-link" title="Inapplicable Example 8" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/bisz58/0dcdacefc963adfbb2d3493e5468f8f12f0ac6de.html">Open in a new tab</a>

This `meta` element has an invalid `content` attribute, and is therefore inapplicable.

```html
<head>
	<meta http-equiv="refresh" content="foo; URL='https://w3.org'" />
</head>
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

[attribute value]: #attribute-value 'Definition of Attribute Value'
[boolean attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes 'HTML Specification of Boolean Attribute'
[comma separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#comma-separated-tokens 'HTML Specification of Comma Separated Tokens'
[earl10-schema]: https://www.w3.org/TR/act-rules-format-1.1/#biblio-earl10-schema
[enumerated attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute 'HTML Specification of Enumerated Attribute'
[html aam]: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings 'Specification of HTML attributes value mapping to ARIA states and properties'
[idl attribute]: https://heycam.github.io/webidl/#idl-attributes "Definition of Web IDL Attribute (Editor's Draft)"
[meta refresh]: https://html.spec.whatwg.org/#attr-meta-http-equiv-refresh 'HTML specification of the meta refresh State'
[numbers]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#numbers 'HTML Specification of Number Parsing'
[outcome property]: https://www.w3.org/TR/EARL10-Schema/#outcome
[reflect]: https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes 'HTML specification of Reflecting Content Attributes in IDL Attributes'
[shared declarative refresh steps]: https://html.spec.whatwg.org/#shared-declarative-refresh-steps 'HTML specification of the Shared Declarative Refresh Steps'
[space separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens 'HTML Specification of Space Separated Tokens'
[test subject]: https://www.w3.org/TR/act-rules-format-1.1/#test-subject
[test target]: https://www.w3.org/TR/act-rules-format/#test-target
[wai-aria specification]: https://www.w3.org/TR/wai-aria-1.2/#propcharacteristic_value 'WAI-ARIA Specification of States and Properties Value'
