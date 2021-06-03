---
title: "meta element has no refresh delay"
permalink: /standards-guidelines/act/rules/meta-refresh-no-delay-bc659a/
ref: /standards-guidelines/act/rules/meta-refresh-no-delay-bc659a/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/meta-refresh-no-delay-bc659a.md
# footer: > # Text in footer in HTML
#   <p> This is the text in the footer </p>
---

{% include_relative _proposed-banner.html %}

Rule Type:
:   atomic

Rule ID:
:   bc659a

Last Modified:
:   June 3, 2021

Accessibility Requirements Mapping:
:   [2.2.1 Timing Adjustable (Level A)](https://www.w3.org/TR/WCAG21/#timing-adjustable)
    - **Required for conformance** to WCAG 2.0 and later on level A and higher
    - [Outcome](#outcome) mapping:
        - Any `failed` outcomes: success criterion is not satisfied
        - All `passed` outcomes: success criterion needs further testing
        - An `inapplicable` outcome: success criterion needs further testing
:   [2.2.4 Interruptions (Level AAA)](https://www.w3.org/TR/WCAG21/#interruptions)
    - **Required for conformance** to WCAG 2.0 and later on level AAA
    - [Outcome](#outcome) mapping:
        - Any `failed` outcomes: success criterion is not satisfied
        - All `passed` outcomes: success criterion needs further testing
        - An `inapplicable` outcome: success criterion needs further testing
:   [3.2.5 Change on Request (Level AAA)](https://www.w3.org/TR/WCAG21/#change-on-request)
    - **Required for conformance** to WCAG 2.0 and later on level AAA
    - [Outcome](#outcome) mapping:
        - Any `failed` outcomes: success criterion is not satisfied
        - All `passed` outcomes: success criterion needs further testing
        - An `inapplicable` outcome: success criterion needs further testing
:   [G110: Using an instant client-side redirect](https://www.w3.org/WAI/WCAG21/Techniques/general/G110)
    - Not required to conformance to any W3C accessibility recommendation.
    - [Outcome](#outcome) mapping:
        - Any `failed` outcomes: technique is not satisfied
        - All `passed` outcomes: technique needs further testing
        - An `inapplicable` outcome: technique needs further testing
:   [H76: Using meta refresh to create an instant client-side redirect](https://www.w3.org/WAI/WCAG21/Techniques/html/H76)
    - Not required to conformance to any W3C accessibility recommendation.
    - [Outcome](#outcome) mapping:
        - Any `failed` outcomes: technique is not satisfied
        - All `passed` outcomes: technique needs further testing
        - An `inapplicable` outcome: technique needs further testing

Input Aspects:
:   [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)

## Description

This rule checks that the `meta` element is not used for delayed redirecting or refreshing.

## Applicability

This rule applies to the first `meta` element in a document for which all the following are true:

- the element has an `http-equiv` [attribute value][] of `"refresh"`; and
- the element has a valid `content` [attribute value][], as described in the [meta refresh][] pragma directive.

## Expectation

For each test target, running the [shared declarative refresh steps][], given the target's document, the value of the target's `content` attribute, and the target results in _time_ being either 0 or greater than 72000 (20 hours).

## Assumptions

- This rule assumes no functionality was provided by the website for the user to adjust the timer.
- This rule assumes that the refresh was not [essential](https://www.w3.org/TR/WCAG21/#dfn-essential), which is listed as a valid exception to SC 2.2.1.

## Accessibility Support

Not all major web browsers parse the value of the `content` attribute in the same way. Some major browsers, when they are unable to parse the value, default to a 0 seconds delay, whereas others will not redirect at all. This can cause some pages to be inapplicable for this rule, while still having a redirect in a minority of web browsers.

## Background

This rule is designed specifically for [2.2.1 Timing Adjustable][sc221], which can be satisfied if the time limit is over 20 hours long. All pages that fail this because of a "refresh" `meta` element also do not satisfy [2.2.3 No Timing][sc223] and [3.2.5 Change on Request][sc325]. In order to adequately test the [expectation](#expectation), some of the passed examples do not satisfy [2.2.3 No Timing][sc223] and [3.2.5 Change on Request][sc325].

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

Redirects immediately.

```html
<head>
	<meta http-equiv="refresh" content="0; URL='https://github.com'" />
</head>
```

#### Passed Example 2

First valid `<meta http-equiv="refresh">` redirects immediately.

```html
<head>
	<meta http-equiv="refresh" content="0; https://w3.org" />
	<meta http-equiv="refresh" content="5; https://w3.org" />
</head>
```

#### Passed Example 3

Redirects after more than 20 hours.

```html
<head>
	<meta http-equiv="refresh" content="72001; https://w3.org" />
</head>
```

### Failed

#### Failed Example 1

Refreshes after 30 seconds.

```html
<head>
	<meta http-equiv="refresh" content="30" />
</head>
```

#### Failed Example 2

Redirects after 30 seconds.

```html
<head>
	<meta http-equiv="refresh" content="30; URL='https://w3.org'" />
</head>
```

#### Failed Example 3

First `<meta http-equiv="refresh">` element is not valid, second one redirects after 5 seconds.

```html
<head>
	<meta http-equiv="refresh" content="0: https://w3.org" />
	<meta http-equiv="refresh" content="5; https://w3.org" />
</head>
```

#### Failed Example 4

Redirects after exactly 20 hours.

```html
<head>
	<meta http-equiv="refresh" content="72000; https://w3.org" />
</head>
```

### Inapplicable

#### Inapplicable Example 1

No `content` attribute.

```html
<head>
	<meta http-equiv="refresh" />
</head>
```

#### Inapplicable Example 2

No `http-equiv="refresh"` attribute.

```html
<head>
	<meta content="30" />
</head>
```

#### Inapplicable Example 3

`content` attribute is invalid and therefore inapplicable.

```html
<head>
	<meta http-equiv="refresh" content="0: https://w3.org" />
</head>
```

#### Inapplicable Example 4

`content` attribute is invalid and therefore inapplicable.

```html
<head>
	<meta http-equiv="refresh" content="-00.12 foo" />
</head>
```

#### Inapplicable Example 5

`content` attribute is invalid and therefore inapplicable.

```html
<head>
	<meta http-equiv="refresh" content="; 30" />
</head>
```

#### Inapplicable Example 6

`content` attribute is invalid and therefore inapplicable.

```html
<head>
	<meta http-equiv="refresh" content="" />
</head>
```

#### Inapplicable Example 7

`content` attribute is invalid and therefore inapplicable.

```html
<head>
	<meta http-equiv="refresh" content="+5; https://w3.org" />
</head>
```

#### Inapplicable Example 8

`content` attribute is invalid and therefore inapplicable.

```html
<head>
	<meta http-equiv="refresh" content="foo; URL='https://w3.org'" />
</head>
```

## Glossary

{% include_relative glossary/attribute-value.md %}
{% include_relative glossary/outcome.md %}

## Acknowledgements

This rule was written in the [ACT Rules community group](https://w3.org/community/act-r/), 
with the support of the EU-funded [WAI-Tools Project](https://www.w3.org/WAI/about/projects/wai-tools/).

### Authors

- [Anne Thyme Nørregaard](https://github.com/annethyme)
- [Jean-Yves Moyen](https://github.com/Jym77)
- [Wilco Fiers](https://github.com/wilcofiers)

## Changelog

This is the first version of this ACT rule.

[attribute value]: #attribute-value 'Definition of Attribute Value'
[meta refresh]: https://html.spec.whatwg.org/#attr-meta-http-equiv-refresh 'HTML specification of the meta refresh State'
[sc221]: https://www.w3.org/TR/WCAG21/#timing-adjustable 'WCAG 2.1 Success Criterion 2.2.1 Timing Adjustable'
[sc223]: https://www.w3.org/TR/WCAG21/#no-timing 'WCAG 2.1 Success Criterion 2.2.3 No Timing'
[sc325]: https://www.w3.org/TR/WCAG21/#change-on-request 'WCAG 2.1 Success Criterion 3.2.5 Change on Request'
[shared declarative refresh steps]: https://html.spec.whatwg.org/#shared-declarative-refresh-steps 'HTML specification of the Shared Declarative Refresh Steps'
