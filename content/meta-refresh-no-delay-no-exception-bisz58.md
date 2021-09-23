---
title: "meta element has no refresh delay (no exception)"
permalink: /standards-guidelines/act/rules/meta-refresh-no-delay-no-exception-bisz58/
ref: /standards-guidelines/act/rules/meta-refresh-no-delay-no-exception-bisz58/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/meta-refresh-no-delay-no-exception-bisz58.md
footer: |
  <p><strong>Date:</strong> Updated August 24th, 2021</p>
  <p><strong>Authors:</strong> <a href="https://github.com/Jym77">Jean-Yves Moyen</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules community group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>.</p>
proposed: true
rule_meta:
  id: bisz58
  name: "`meta` element has no refresh delay (no exception)"
  rule_type: atomic
  description: |
    This rule checks that the `meta` element is not used for delayed redirecting or refreshing.
  accessibility_requirements:
    'wcag20:2.2.4':
      forConformance: true
      failed: not satisfied
      passed: further testing needed
      inapplicable: further testing needed
    'wcag20:3.2.5':
      forConformance: true
      failed: not satisfied
      passed: further testing needed
      inapplicable: further testing needed
    'wcag-technique:G110':
      forConformance: false
      failed: not satisfied
      passed: further testing needed
      inapplicable: further testing needed
    'wcag-technique:H76':
      forConformance: false
      failed: not satisfied
      passed: further testing needed
      inapplicable: further testing needed
  input_aspects:
    - handle: DOM Tree
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom
  last_modified: August 24th, 2021
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

For each test target, running the [shared declarative refresh steps][], given the target's document, the value of the target's `content` attribute, and the target results in _time_ is 0.

## Assumptions

- This rule assumes that no functionality was provided by the website for the user to adjust the timer.

## Accessibility Support

Not all major web browsers parse the value of the `content` attribute in the same way. Some major browsers, when they are unable to parse the value, default to a 0 seconds delay, whereas others will not redirect at all. This can cause some pages to be inapplicable for this rule, while still having a redirect in a minority of web browsers.

## Background

- [Understanding Success Criterion 2.2.1: Timing Adjustable](https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html)
- [Understanding Success Criterion 2.2.4: Interruptions](https://www.w3.org/WAI/WCAG21/Understanding/interruptions.html)
- [Understanding Success Criterion 3.2.5: Change on Request](https://www.w3.org/WAI/WCAG21/Understanding/change-on-request.html)
- [G110: Using an instant client-side redirect](https://www.w3.org/WAI/WCAG21/Techniques/general/G110)
- [H76: Using meta refresh to create an instant client-side redirect](https://www.w3.org/TR/WCAG-TECHS/H76.html)
- [F40: Failure of Success Criterion 2.2.1 and 2.2.4 due to using meta redirect with a time limit](https://www.w3.org/TR/WCAG-TECHS/F40.html)
- [F41: Failure of Success Criterion 2.2.1, 2.2.4, and 3.2.5 due to using meta refresh with a time-out](https://www.w3.org/TR/WCAG-TECHS/F41.html)

## Test Cases

### Passed

#### Passed Example 1

This `meta` element redirects the user immediately. Users won't notice the change in context.

```html
<head>
	<meta http-equiv="refresh" content="0; URL='https://w3.org'" />
</head>
```

#### Passed Example 2

The first valid `meta` element redirects immediately.

```html
<head>
	<meta http-equiv="refresh" content="0; https://w3.org" />
	<meta http-equiv="refresh" content="5; https://w3.org" />
</head>
```

### Failed

#### Failed Example 1

This `meta` element refreshes the page after 30 seconds.

```html
<head>
	<meta http-equiv="refresh" content="30" />
</head>
```

#### Failed Example 2

This `meta` element redirects the user after 30 seconds.

```html
<head>
	<meta http-equiv="refresh" content="30; URL='https://w3.org'" />
</head>
```

#### Failed Example 3

The first `meta` element is not valid (because of the colon instead of a semi-colon in the `content` attribute), the second one redirects after 5 seconds.

```html
<head>
	<meta http-equiv="refresh" content="0: https://w3.org" />
	<meta http-equiv="refresh" content="5; https://w3.org" />
</head>
```

#### Failed Example 4

This `meta` element redirects the user after 20 hours.

```html
<head>
	<meta http-equiv="refresh" content="72001; http://example.com" />
</head>
```

### Inapplicable

#### Inapplicable Example 1

This `meta` element has no `content` attribute.

```html
<head>
	<meta http-equiv="refresh" />
</head>
```

#### Inapplicable Example 2

This `meta` element has no `http-equiv="refresh"` attribute.

```html
<head>
	<meta content="30" />
</head>
```

#### Inapplicable Example 3

This `meta` element has an invalid `content` attribute (because of the colon instead of a semi-colon), and is therefore inapplicable.

```html
<head>
	<meta http-equiv="refresh" content="0: http://example.com" />
</head>
```

#### Inapplicable Example 4

This `meta` element has an invalid `content` attribute, and is therefore inapplicable.

```html
<head>
	<meta http-equiv="refresh" content="-00.12 foo" />
</head>
```

#### Inapplicable Example 5

This `meta` element has an invalid `content` attribute, and is therefore inapplicable.

```html
<head>
	<meta http-equiv="refresh" content="; 30" />
</head>
```

#### Inapplicable Example 6

This `meta` element has an invalid `content` attribute, and is therefore inapplicable.

```html
<head>
	<meta http-equiv="refresh" content="" />
</head>
```

#### Inapplicable Example 7

This `meta` element has an invalid `content` attribute, and is therefore inapplicable.

```html
<head>
	<meta http-equiv="refresh" content="+5; http://w3.org" />
</head>
```

#### Inapplicable Example 8

This `meta` element has an invalid `content` attribute, and is therefore inapplicable.

```html
<head>
	<meta http-equiv="refresh" content="foo; URL='https://w3.org'" />
</head>
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

### Outcome {#outcome}

An _outcome_ is a conclusion that comes from evaluating an ACT Rule on a [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) or one of its constituent [test target](https://www.w3.org/TR/act-rules-format/#test-target). An outcome can be one of the three following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) meets all expectations
- **Failed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) does not meet all expectations

**Note:** A rule has one `passed` or `failed` outcome for every [test target](https://www.w3.org/TR/act-rules-format/#test-target). When there are no test targets the rule has one `inapplicable` outcome. This means that each [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) will have one or more outcomes.

**Note:** Implementations using the [EARL10-Schema](https://www.w3.org/TR/EARL10-Schema/) can express the outcome with the [outcome property](https://www.w3.org/TR/EARL10-Schema/#outcome). In addition to `passed`, `failed` and `inapplicable`, EARL 1.0 also defined an `incomplete` outcome. While this cannot be the outcome of an ACT Rule when applied in its entirety, it often happens that rules are only partially evaluated. For example, when applicability was automated, but the expectations have to be evaluated manually. Such "interim" results can be expressed with the `incomplete` outcome.

{% include_relative implementations/bisz58.md %}

## Changelog

This is the first version of this ACT rule.

[attribute value]: #attribute-value 'Definition of Attribute Value'
[boolean attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes 'HTML Specification of Boolean Attribute'
[comma separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#comma-separated-tokens 'HTML Specification of Comma Separated Tokens'
[enumerated attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute 'HTML Specification of Enumerated Attribute'
[html aam]: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings 'Specification of HTML attributes value mapping to ARIA states and properties'
[idl attribute]: https://heycam.github.io/webidl/#idl-attributes "Definition of Web IDL Attribute (Editor's Draft)"
[meta refresh]: https://html.spec.whatwg.org/#attr-meta-http-equiv-refresh 'HTML specification of the meta refresh State'
[numbers]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#numbers 'HTML Specification of Number Parsing'
[reflect]: https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes 'HTML specification of Reflecting Content Attributes in IDL Attributes'
[shared declarative refresh steps]: https://html.spec.whatwg.org/#shared-declarative-refresh-steps 'HTML specification of the Shared Declarative Refresh Steps'
[space separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens 'HTML Specification of Space Separated Tokens'
[wai-aria specification]: https://www.w3.org/TR/wai-aria-1.1/#propcharacteristic_value 'WAI-ARIA Specification of States and Properties Value'
