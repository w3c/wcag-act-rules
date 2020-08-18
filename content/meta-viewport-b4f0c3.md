---
title: "meta viewport does not prevent zoom"
permalink: /standards-guidelines/act/rules/meta-viewport-b4f0c3/
ref: /standards-guidelines/act/rules/meta-viewport-b4f0c3/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/meta-viewport-b4f0c3.md
# footer: > # Text in footer in HTML
#   <p> This is the text in the footer </p>
---

Rule Type:
:   atomic

Rule ID:
:   b4f0c3

Last Modified:
:   Aug 17, 2020

Accessibility Requirements Mapping:
:   [1.4.4 Resize text (Level AA)](https://www.w3.org/TR/WCAG21/#resize-text)
    - **Required for conformance** to WCAG 2.0 and later on level AA and higher
    - [Outcome](#outcome) mapping:
      - Any `failed` outcomes: success criterion is not satisfied
      - All `passed` outcomes: success criterion needs further testing
      - An `inapplicable` outcome: success criterion needs further testing
:   [1.4.10 Reflow (Level AA)](https://www.w3.org/TR/WCAG21/#reflow)
    - **Required for conformance** to WCAG 2.1 on level AA and higher
    - [Outcome](#outcome) mapping:
      - Any `failed` outcomes: success criterion is not satisfied
      - All `passed` outcomes: success criterion needs further testing
      - An `inapplicable` outcome: success criterion needs further testing

Input Aspects:
:   [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)

## Description

This rule checks that the `meta` element retains the user agent ability to zoom.

## Applicability

The rule applies to each `meta` element with a `name` attribute whose value is a [case-insensitive][] match for `viewport` and has a `content` attribute.

## Expectation

For each test target, the `content` attribute, whose value is mapped to a list of property/value pairs in a user-agent specific manner, does not:

- specify the property `user-scalable` with a value of `no`; nor
- specify the property `maximum-scale` with a value of less than 2.

## Assumptions

- The [page][] has [visible][] [content][].
- There is no other [mechanism](https://www.w3.org/TR/WCAG21/#dfn-mechanism) available to resize the text content.

## Accessibility Support

Desktop browsers ignore the viewport `meta` element, and most modern mobile browsers either ignore it by default or have an accessibility option which will allow zooming. This rule is not relevant for desktop browsers, nor for most modern mobile browsers. Only users with older mobile browsers can experience issues tested by this rule.

## Background

- [Understanding Success Criterion 1.4.4: Resize text](https://www.w3.org/WAI/WCAG21/Understanding/resize-text)
- [HTML Specification - The `meta` element][meta]
- [The initial-scale, minimum-scale, and maximum-scale properties][maximum-scale]
- [The user-scalable property][user-scalable]

## Test Cases

### Passed

#### Passed Example 1

This viewport `meta` element does not prevent user scaling because it does not specify the `maximum-scale` and `user-scalable` values.

```html
<html>
	<head>
		<title>Simple page showing random text</title>
		<meta name="viewport" content="width=device-width" />
	</head>
	<body>
		<p>
			Lorem ipsum
		</p>
	</body>
</html>
```

#### Passed Example 2

This viewport `meta` element does not prevent user scaling because it has `user-scalable` set to `yes`.

```html
<html>
	<head>
		<title>Simple page showing random text</title>
		<meta name="viewport" content="user-scalable=yes" />
	</head>
	<body>
		<p>
			Lorem ipsum
		</p>
	</body>
</html>
```

#### Passed Example 3

This viewport `meta` element allows users to scale content up to 600% because it has `maximum-scale` set to 6.0.

```html
<html>
	<head>
		<title>Simple page showing random text</title>
		<meta name="viewport" content="maximum-scale=6.0" />
	</head>
	<body>
		<p>
			Lorem ipsum
		</p>
	</body>
</html>
```

#### Passed Example 4

This viewport `meta` element does not prevent user scaling because it does not specify the `maximum-scale` and `user-scalable` values.

```html
<html>
	<head>
		<title>Simple page showing random text</title>
		<meta name="viewport" content="" />
	</head>
	<body>
		<p>
			Lorem ipsum
		</p>
	</body>
</html>
```

#### Passed Example 5

This viewport `meta` element does not prevent user scaling because it has `maximum-scale` set to -1 which results in this value being dropped.

```html
<html>
	<head>
		<title>Simple page showing random text</title>
		<meta name="viewport" content="maximum-scale=-1" />
	</head>
	<body>
		<p>
			Lorem ipsum
		</p>
	</body>
</html>
```

### Failed

#### Failed Example 1

This viewport `meta` element prevents user scaling because it has `user-scalable` set to `no`.

```html
<html>
	<head>
		<title>Simple page showing random text</title>
		<meta name="viewport" content="user-scalable=no" />
	</head>
	<body>
		<p>
			Lorem ipsum
		</p>
	</body>
</html>
```

#### Failed Example 2

This viewport `meta` element prevents users to scale content up to 200% because it has `maximum-scale` set to 1.5.

```html
<html>
	<head>
		<title>Simple page showing random text</title>
		<meta name="viewport" content="user-scalable=yes, initial-scale=0.8, maximum-scale=1.5" />
	</head>
	<body>
		<p>
			Lorem ipsum
		</p>
	</body>
</html>
```

#### Failed Example 3

This viewport `meta` element prevents users to scale content up to 200% because it has `maximum-scale` set to 1.0.

```html
<html>
	<head>
		<title>Simple page showing random text</title>
		<meta name="viewport" content="maximum-scale=1.0" />
	</head>
	<body>
		<p>
			Lorem ipsum
		</p>
	</body>
</html>
```

#### Failed Example 4

This viewport `meta` element prevents users to scale content up to 200% because it has `maximum-scale` set to `yes` which translates to 1.0.

```html
<html>
	<head>
		<title>Simple page showing random text</title>
		<meta name="viewport" content="maximum-scale=yes" />
	</head>
	<body>
		<p>
			Lorem ipsum
		</p>
	</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

There is no viewport `meta` element.

```html
<html>
	<head>
		<title>Simple page showing random text</title>
		<meta http-equiv="refresh" content="10; URL='https://github.com'" />
	</head>
	<body>
		<p>
			Lorem ipsum
		</p>
	</body>
</html>
```

#### Inapplicable Example 2

This viewport `meta` element does not have a `content` attribute.

```html
<html>
	<head>
		<title>Simple page showing random text</title>
		<meta name="viewport" />
	</head>
	<body>
		<p>
			Lorem ipsum
		</p>
	</body>
</html>
```

## Glossary

### Outcome

An _outcome_ is a conclusion that comes from evaluating an ACT Rule on a [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) or one of its constituent [test target](https://www.w3.org/TR/act-rules-format/#test-target). An outcome can be one of the three following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) meets all expectations
- **Failed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) does not meet all expectations

**Note:** A rule has one `passed` or `failed` outcome for every [test target](https://www.w3.org/TR/act-rules-format/#test-target). When there are no test targets the rule has one `inapplicable` outcome. This means that each [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) will have one or more outcomes.

**Note:** Implementations using the [EARL10-Schema](https://www.w3.org/TR/EARL10-Schema/) can express the outcome with the [outcome property](https://www.w3.org/TR/EARL10-Schema/#outcome). In addition to `passed`, `failed` and `inapplicable`, EARL 1.0 also defined an `incomplete` outcome. While this cannot be the outcome of an ACT Rule when applied in its entirety, it often happens that rules are only partially evaluated. For example, when applicability was automated, but the expectations have to be evaluated manually. Such "interim" results can be expressed with the `incomplete` outcome.

### Visible

Content perceivable through sight.

Content is considered _visible_ if making it fully transparent would result in a difference in the pixels rendered for any part of the document that is currently within the viewport or can be brought into the viewport via scrolling.

[Content is defined in WCAG](https://www.w3.org/TR/WCAG21/#dfn-content).

#### Examples

**Note:** The examples presented here are non-normative and not testable. They serve to illustrate some common pitfalls about the definition and to help the implementers of ACT rules understand it.

This `span` element is visible (by default, elements are visible).

```html
<span>Now you can see me!</span>
```

This `span` element is not visible because of the CSS `visibility` property.

```html
<span style="visibility: hidden">I'm the invisible man</span>
```

This `span` element is not visible because of the CSS `display` property.

```html
<span style="display: none">I'm the invisible man</span>
```

This `span` element is not visible because it is positioned off-screen

```html
<span style="position: absolute; top: -9999px; left: -9999px;">Incredible how you can</span>
```

This `span` element is not visible because it contains only whitespace and line breaks.

```html
<span>
	<br />
	&nbsp;
</span>
```

This `span` element is not visible because it has the exact same color as its background.

```html
<span style="color: #00F; background: #00F;">See right through me</span>
```

## Acknowledgements

This rule was written in the [ACT Rules community group](https://w3.org/community/act-r/), 
with the support of the EU-funded [WAI-Tools Project](https://www.w3.org/WAI/about/projects/wai-tools/).

### Authors

- [Jey Nandakumar](https://github.com/jkodu)
- [Audrey Maniez](https://github.com/audreymaniez)

## Changelog

This is the first version of this ACT rule.

[case-insensitive]: https://infra.spec.whatwg.org/#ascii-case-insensitive 'ASCII case-insensitive'
[content]: https://www.w3.org/TR/WCAG21/#dfn-content 'content (Web content)'
[maximum-scale]: https://www.w3.org/TR/css-device-adapt-1/#min-scale-max-scale 'The initial-scale, minimum-scale, and maximum-scale properties'
[meta]: https://html.spec.whatwg.org/#the-meta-element 'The meta element'
[page]: https://www.w3.org/TR/WCAG21/#dfn-web-page-s 'Web page'
[user-scalable]: https://www.w3.org/TR/css-device-adapt-1/#user-scalable 'The user-scalable property'
[visible]: #visible 'Definition of visible'