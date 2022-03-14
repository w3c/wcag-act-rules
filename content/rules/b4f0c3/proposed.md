---
title: "meta viewport allows for zoom"
permalink: /standards-guidelines/act/rules/b4f0c3/proposed/
ref: /standards-guidelines/act/rules/b4f0c3/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/b4f0c3/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> b4f0c3</p>
  <p><strong>Date:</strong> Updated 28 January 2022</p>
  <p><strong>Authors:</strong> <a href="https://github.com/audreymaniez">Audrey Maniez</a>, <a href="https://github.com/jkodu">Jey Nandakumar</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules community group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: b4f0c3
  name: "`meta` `viewport` allows for zoom"
  rule_type: atomic
  description: |
    This rule checks that the `meta` element retains the user agent ability to zoom.
  last_modified: 28 January 2022
  scs_tested:
    - handle: Resize text
      num: 1.4.4
      level: AA
---

## Applicability

This rule applies to each `meta` element with a `name` attribute whose value is a [case-insensitive][] match for `viewport` and has a `content` attribute.

## Expectation

For each test target, the `content` attribute, whose value is mapped to a list of property/value pairs in a user-agent specific manner, does not:

- specify the property `user-scalable` with a value of `no`; nor
- specify the property `maximum-scale` with a value of less than 2.

## Assumptions

If any of the following is false, this rule can fail while Success Criteria [1.4.4 Resize text][sc144] and [1.4.10 Reflow][sc1410] can still be satisfied:

- The [page][] has [visible][] [content][].
- There is no other [mechanism](https://www.w3.org/TR/WCAG21/#dfn-mechanism) available to resize the text content.
- The [content][] is not by default rendered in a way that fits in an area of 320 by 256 [CSS pixels][], and needs to reflow to do so.

## Accessibility Support

Desktop browsers ignore the viewport `meta` element, and most modern mobile browsers either ignore it by default or have an accessibility option which will allow zooming. This rule is not relevant for desktop browsers, nor for most modern mobile browsers. Only users with older mobile browsers can experience issues tested by this rule.

## Background

This rule is designed specifically for [1.4.4 Resize text][sc144], which requires that text can be resized up to 200%. Because text that can not be resized up to 200% can not fit in an area of 320 by 256 [CSS pixels][], this rule maps to [1.4.10 Reflow][sc1410] as well. All passed examples in this rule satisfy both success criteria.

### Bibliography

- [Understanding Success Criterion 1.4.4: Resize text](https://www.w3.org/WAI/WCAG21/Understanding/resize-text)
- [HTML Specification - The `meta` element][meta]
- [The initial-scale, minimum-scale, and maximum-scale properties][maximum-scale]
- [The user-scalable property][user-scalable]

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>1.4.4 Resize text (Level AA)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#resize-text">Learn more about 1.4.4 Resize text</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level AA and higher.</li>
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
		<title>Lorem ipsum</title>
		<meta charset="UTF-8" />
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

### Outcome {#outcome}

An _outcome_ is a conclusion that comes from evaluating an ACT Rule on a [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) or one of its constituent [test target](https://www.w3.org/TR/act-rules-format/#test-target). An outcome can be one of the three following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) meets all expectations
- **Failed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) does not meet all expectations

**Note:** A rule has one `passed` or `failed` outcome for every [test target](https://www.w3.org/TR/act-rules-format/#test-target). When there are no test targets the rule has one `inapplicable` outcome. This means that each [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) will have one or more outcomes.

**Note:** Implementations using the [EARL10-Schema](https://www.w3.org/TR/EARL10-Schema/) can express the outcome with the [outcome property](https://www.w3.org/TR/EARL10-Schema/#outcome). In addition to `passed`, `failed` and `inapplicable`, EARL 1.0 also defined an `incomplete` outcome. While this cannot be the outcome of an ACT Rule when applied in its entirety, it often happens that rules are only partially evaluated. For example, when applicability was automated, but the expectations have to be evaluated manually. Such "interim" results can be expressed with the `incomplete` outcome.

### Visible {#visible}

Content perceivable through sight.

Content is considered _visible_ if making it fully transparent would result in a difference in the pixels rendered for any part of the document that is currently within the viewport or can be brought into the viewport via scrolling.

[Content is defined in WCAG](https://www.w3.org/TR/WCAG21/#dfn-content).

For more details, see [examples of visible](https://act-rules.github.io/pages/examples/visible/).

{% include_relative _implementation-proposed.md %}

## Changelog

This is the first version of this ACT rule.

[case-insensitive]: https://infra.spec.whatwg.org/#ascii-case-insensitive 'ASCII case-insensitive'
[content]: https://www.w3.org/TR/WCAG21/#dfn-content 'content (Web content)'
[css pixels]: https://www.w3.org/TR/css3-values/#reference-pixel 'CSS 3 definition, reference pixel'
[maximum-scale]: https://www.w3.org/TR/css-device-adapt-1/#min-scale-max-scale 'The initial-scale, minimum-scale, and maximum-scale properties'
[meta]: https://html.spec.whatwg.org/#the-meta-element 'The meta element'
[page]: https://www.w3.org/TR/WCAG21/#dfn-web-page-s 'Web page'
[sc1410]: https://www.w3.org/TR/WCAG21/#reflow 'WCAG 2.1 Success Criterion 1.4.10 Reflow'
[sc144]: https://www.w3.org/TR/WCAG21/#resize-text 'WCAG 2.1 Success Criterion 1.4.4 Resize text'
[user-scalable]: https://www.w3.org/TR/css-device-adapt-1/#user-scalable 'The user-scalable property'
[visible]: #visible 'Definition of visible'
