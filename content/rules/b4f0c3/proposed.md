---
title: "Meta viewport allows for zoom"
permalink: /standards-guidelines/act/rules/b4f0c3/proposed/
ref: /standards-guidelines/act/rules/b4f0c3/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/b4f0c3/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> b4f0c3</p>
  <p><strong>Date:</strong> Updated 6 October 2025</p>
  <p><strong>Authors:</strong> <a href="https://github.com/Jym77">Jean-Yves Moyen</a>. Previous Authors: <a href="https://github.com/audreymaniez">Audrey Maniez</a>, <a href="https://github.com/jkodu">Jey Nandakumar</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: b4f0c3
  name: "Meta viewport allows for zoom"
  rule_type: atomic
  original_file: meta-viewport-b4f0c3.md
  description: |
    This rule checks that the `meta` element retains the user agent ability to zoom.
  last_modified: 6 October 2025
  scs_tested:
    - handle: Resize text
      num: 1.4.4
      level: AA
---

## Applicability

This rule applies to each `content` attribute for which all of the following are true:

- the attribute is defined on a `meta` element with a `name` [attribute value][] of `viewport`; and
- the [attribute value][] has at least one of the `maximum-scale` or `user-scalable` keys.

For the purpose of this rule, the [attribute value][] of the `content` attribute is a list of key/value pairs.

## Expectation 1

For each test target's [attribute value][], at least one of the following is true:

- `user-scalable` is not defined; or
- `user-scalable` is `yes`, `device-width` or `device-height`; or
- `user-scalable` is a number which is not between -1 and 1 (excluded).

**Note:** This is equivalent to applying the [translations into a `@viewport` descriptors][descriptor translation] and not obtaining a value of `fixed` for the `user-zoom` descriptor from [the translation for `user-scalable`](https://www.w3.org/TR/css-device-adapt-1/#user-scalable).

## Expectation 2

For each test target's [attribute value][], at least one of the following is true:

- `maximum-scale` is not defined; or
- `maximum-scale` is `device-width` or `device-height`; or
- `maximum-scale` is a negative number; or
- `maximum-scale` is a number which is 2 or more.

**Note:** This is equivalent to applying the [translations into a `@viewport` descriptors][descriptor translation] and not obtaining a value smaller than 2 for the `max-zoom` descriptor from [the translation for `maximum-scale`](https://www.w3.org/TR/css-device-adapt-1/#min-scale-max-scale).

## Background

### Assumptions

Pages for which any of the following is true may satisfy Success Criteria [1.4.4 Resize text][sc144] and [1.4.10 Reflow][sc1410], even if the rule results in a failed outcome.

- The [page][] has no [visible][] [content][]; or
- There is another [mechanism](https://www.w3.org/TR/WCAG22/#dfn-mechanism) available to resize the text content; or
- The [content][] does not need to reflow in order to fit in an area of 320 by 256 [CSS pixels][].

### Accessibility Support

Desktop browsers ignore the viewport `meta` element, and most modern mobile browsers either ignore it by default or have an accessibility option which will allow zooming. This rule is not relevant for desktop browsers, nor for most modern mobile browsers. Only users with older mobile browsers can experience issues tested by this rule.

The exact way the `content` attribute should be parsed (notably, for error handling) is not fully specified. CSS specification includes a [non-normative parsing algorithm](https://www.w3.org/TR/css-device-adapt-1/#parsing-algorithm). Different user agents may behave differently in some cases.

### Other Resources

- [Understanding Success Criterion 1.4.4: Resize text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text)
- [Understanding Success Criterion 1.4.10: Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow)
- [HTML Specification - The `meta` element][meta]
- [The initial-scale, minimum-scale, and maximum-scale properties][maximum-scale]
- [The user-scalable property][user-scalable]

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>1.4.4 Resize text (Level AA)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG22/#resize-text">Learn more about 1.4.4 Resize text</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level AA and higher.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
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

- [1.4.10 Reflow (Level AA)](https://www.w3.org/TR/WCAG22/#reflow): This success criterion is **related** to this rule. This is because a page that cannot be zoomed up to 200% often does not reflow sufficiently either. Most failed examples satisfy this success criterion.

## Input Aspects

The following aspects are required in using this rule.

- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)

## Examples

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b4f0c3/312146d84331c7214ed6919391ad955098eff516.html">Open in a new tab</a>

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

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b4f0c3/08e8943b849762eb7f18654c7f9e479ad33b2840.html">Open in a new tab</a>

This viewport `meta` element does not prevent user scaling because it has `user-scalable` set to `5`.

```html
<html>
	<head>
		<title>Simple page showing random text</title>
		<meta name="viewport" content="user-scalable=5" />
	</head>
	<body>
		<p>
			Lorem ipsum
		</p>
	</body>
</html>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b4f0c3/d143bfe343ecf75bceb92b6fc9807cc5f453b319.html">Open in a new tab</a>

This viewport `meta` element allows users to scale content up to 200% because it has `maximum-scale` set to 2.0.

```html
<html>
	<head>
		<title>Simple page showing random text</title>
		<meta name="viewport" content="maximum-scale=2.0" />
	</head>
	<body>
		<p>
			Lorem ipsum
		</p>
	</body>
</html>
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b4f0c3/4ade33e41dda291c9078e56ca2a95c4825dbc1fe.html">Open in a new tab</a>

This viewport `meta` element does not prevent user scaling because it has `maximum-scale` set to -1, a negative value.

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

#### Passed Example 5

<a class="example-link" title="Passed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b4f0c3/30b40365b4e59aa103ff04c369f31658fa6e2790.html">Open in a new tab</a>

This viewport `meta` element does not prevent user scaling because it has `maximum-scale` set to `device-width`.

```html
<html>
	<head>
		<title>Simple page showing random text</title>
		<meta name="viewport" content="maximum-scale=device-width" />
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

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b4f0c3/accc6adf094723693593ca3c6308f81945930dae.html">Open in a new tab</a>

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

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b4f0c3/8735b02e59dd802a5a9e9a7ea1934a106d2963eb.html">Open in a new tab</a>

This viewport `meta` element prevents user scaling because it has `user-scalable` set to `0.5`.

```html
<html>
	<head>
		<title>Simple page showing random text</title>
		<meta name="viewport" content="user-scalable=0.5" />
	</head>
	<body>
		<p>
			Lorem ipsum
		</p>
	</body>
</html>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b4f0c3/c94a59f8c3b17d722781af36da3556ff4b418776.html">Open in a new tab</a>

This viewport `meta` element prevents user scaling because it has `user-scalable` set to `invalid`.

```html
<html>
	<head>
		<title>Simple page showing random text</title>
		<meta name="viewport" content="user-scalable=invalid" />
	</head>
	<body>
		<p>
			Lorem ipsum
		</p>
	</body>
</html>
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b4f0c3/a1240b31761f65c92a8f6d08ed7105ee822d0ebc.html">Open in a new tab</a>

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

#### Failed Example 5

<a class="example-link" title="Failed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b4f0c3/e5695989a43a3297cf6b78182014c7a3848ff7e1.html">Open in a new tab</a>

This viewport `meta` element prevents users to scale content up to 200% because it has `maximum-scale` set to `yes`.

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

#### Failed Example 6

<a class="example-link" title="Failed Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b4f0c3/e5695989a43a3297cf6b78182014c7a3848ff7e1.html">Open in a new tab</a>

This viewport `meta` element prevents users to scale content up to 200% because it has `maximum-scale` set to `yes`.

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

#### Failed Example 7

<a class="example-link" title="Failed Example 7" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b4f0c3/9f288c284df9ade53aa33e50ec50c879d5aba4ef.html">Open in a new tab</a>

This viewport `meta` element prevents users to scale content up to 200% because it has `maximum-scale` set to `invalid`.

```html
<html>
	<head>
		<title>Simple page showing random text</title>
		<meta name="viewport" content="maximum-scale=invalid" />
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

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b4f0c3/824fa57ab563edbac93384a58e21b3045bd71c65.html">Open in a new tab</a>

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

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b4f0c3/fe4a93d2631e7c54f1c00e3c56e04c927b5144c1.html">Open in a new tab</a>

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

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b4f0c3/3a2c170ad31b2c0c387e06c8a3bf7e5409dcdb60.html">Open in a new tab</a>

This viewport `meta` element does not specify the `maximum-scale` nor `user-scalable` values.

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

#### Inapplicable Example 4

<a class="example-link" title="Inapplicable Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b4f0c3/a36115d7110156fde2fe6187dbb49402096f82fb.html">Open in a new tab</a>

This viewport `meta` element does not prevent user scaling because it does not specify the `maximum-scale` nor `user-scalable` values.

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

### Visible {#visible}

Content perceivable through sight.

Content is considered _visible_ if making it fully transparent would result in a difference in the pixels rendered for any part of the document that is currently within the viewport or can be brought into the viewport via scrolling.

[Content is defined in WCAG](https://www.w3.org/TR/WCAG22/#dfn-content).

For more details, see [examples of visible](https://act-rules.github.io/pages/examples/visible/).

[attribute value]: #attribute-value 'Definition of attribute value'
[boolean attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes 'HTML Specification of Boolean Attribute'
[comma separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#comma-separated-tokens 'HTML Specification of Comma Separated Tokens'
[content]: https://www.w3.org/TR/WCAG22/#dfn-content 'content (Web content)'
[css pixels]: https://www.w3.org/TR/css3-values/#reference-pixel 'CSS 3 definition, reference pixel'
[descriptor translation]: https://www.w3.org/TR/css-device-adapt-1/#translate-meta-to-at-viewport 'Translations of the content attribute into @viewport descriptors'
[earl10-schema]: https://www.w3.org/TR/act-rules-format-1.1/#biblio-earl10-schema
[enumerated attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute 'HTML Specification of Enumerated Attribute'
[html aam]: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings 'Specification of HTML attributes value mapping to ARIA states and properties'
[idl attribute]: https://heycam.github.io/webidl/#idl-attributes "Definition of Web IDL Attribute (Editor's Draft)"
[maximum-scale]: https://www.w3.org/TR/css-device-adapt-1/#min-scale-max-scale 'The initial-scale, minimum-scale, and maximum-scale properties'
[meta]: https://html.spec.whatwg.org/#the-meta-element 'The meta element'
[numbers]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#numbers 'HTML Specification of Number Parsing'
[outcome property]: https://www.w3.org/TR/EARL10-Schema/#outcome
[page]: https://www.w3.org/TR/WCAG22/#dfn-web-page-s 'Web page'
[reflect]: https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes 'HTML specification of Reflecting Content Attributes in IDL Attributes'
[sc1410]: https://www.w3.org/TR/WCAG22/#reflow 'WCAG 2.2 Success Criterion 1.4.10 Reflow'
[sc144]: https://www.w3.org/TR/WCAG22/#resize-text 'WCAG 2.2 Success Criterion 1.4.4 Resize text'
[space separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens 'HTML Specification of Space Separated Tokens'
[test subject]: https://www.w3.org/TR/act-rules-format-1.1/#test-subject
[test target]: https://www.w3.org/TR/act-rules-format/#test-target
[user-scalable]: https://www.w3.org/TR/css-device-adapt-1/#user-scalable 'The user-scalable property'
[visible]: #visible 'Definition of visible'
[wai-aria specification]: https://www.w3.org/TR/wai-aria-1.2/#propcharacteristic_value 'WAI-ARIA Specification of States and Properties Value'
