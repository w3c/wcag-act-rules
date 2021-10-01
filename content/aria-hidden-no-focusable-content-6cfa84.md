---
title: "Element with aria-hidden has no focusable content"
permalink: /standards-guidelines/act/rules/aria-hidden-no-focusable-content-6cfa84/
ref: /standards-guidelines/act/rules/aria-hidden-no-focusable-content-6cfa84/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/aria-hidden-no-focusable-content-6cfa84.md
footer: |
  <p><strong>Date:</strong> Updated October 1st, 2021</p>
  <p><strong>Authors:</strong> <a href="https://github.com/wilcofiers">Wilco Fiers</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules community group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>.</p>
proposed: true
rule_meta:
  id: 6cfa84
  name: "Element with `aria-hidden` has no focusable content"
  rule_type: atomic
  description: |
    This rule checks that elements with an `aria-hidden` attribute do not contain focusable elements.
  accessibility_requirements:
    'wcag20:1.3.1':
      forConformance: true
      failed: not satisfied
      passed: further testing needed
      inapplicable: further testing needed
    'wcag20:4.1.2':
      forConformance: true
      failed: not satisfied
      passed: further testing needed
      inapplicable: further testing needed
    'using-aria:fourth':
      title: Fourth rule of ARIA use
      forConformance: false
      failed: not satisfied
      passed: further testing needed
      inapplicable: further testing needed
  input_aspects:
    - handle: DOM Tree
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom
    - handle: CSS Styling
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-css
  last_modified: October 1st, 2021
  scs_tested:
    - handle: Info and Relationships
      num: 1.3.1
      level: A
    - handle: Name, Role, Value
      num: 4.1.2
      level: A
---

{::options toc_levels="2" /}
{::nomarkdown}
{% include toc.html type="start" title="Page Contents" %}
{:/}

- Table of Content placeholder
{:toc}

{::nomarkdown}
{% include toc.html type="end" %}
{:/}

## Applicability

This rule applies to any element with an `aria-hidden` [attribute value][] of `true`.

**Note:** Using `aria-hidden="false"` on a descendant of an element with `aria-hidden="true"` **does not** expose that element. `aria-hidden="true"` hides itself and all its content from assistive technologies.

## Expectation

None of the target elements are part of [sequential focus navigation](https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation), nor do they have [descendants](https://dom.spec.whatwg.org/#concept-tree-descendant) in the [flat tree](https://drafts.csswg.org/css-scoping/#flat-tree) that are part of [sequential focus navigation](https://html.spec.whatwg.org/#sequential-focus-navigation).

## Assumptions

_There are currently no assumptions_

## Accessibility Support

Some user agents treat the value of `aria-hidden` attribute as case-sensitive.

## Background

By adding `aria-hidden="true"` to an element, content authors ensure that assistive technologies will ignore the element. This can be used to hide parts of a web page that are [pure decoration](https://www.w3.org/TR/WCAG21/#dfn-pure-decoration), such as icon fonts - that are not meant to be read by assistive technologies.

A [focusable][] element with `aria-hidden="true"` is ignored as part of the reading order, but still part of the focus order, making its state of [visible](#visible) or hidden unclear.

- [CSS Scoping Module Level 1 (editor's draft)](https://drafts.csswg.org/css-scoping/)
- [Understanding Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships)
- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value)
- [`aria-hidden` (state)](https://www.w3.org/TR/wai-aria-1.1/#aria-hidden)
- [Fourth rule of ARIA use](https://www.w3.org/TR/using-aria/#fourth)

## Test Cases

### Passed

#### Passed Example 1

Content not [focusable][] by default.

```html
<p aria-hidden="true">Some text</p>
```

#### Passed Example 2

Content hidden through CSS.

```html
<div aria-hidden="true">
	<a href="/" style="display:none">Link</a>
</div>
```

#### Passed Example 3

Content taken out of sequential focus order using `tabindex`.

```html
<div aria-hidden="true">
	<button tabindex="-1">Some button</button>
</div>
```

#### Passed Example 4

Content made [unfocusable][focusable] through `disabled` attribute.

```html
<input disabled aria-hidden="true" />
```

#### Passed Example 5

`aria-hidden` can't be reset once set to true on an ancestor.

```html
<div aria-hidden="true">
	<div aria-hidden="false">
		<button tabindex="-1">Some button</button>
	</div>
</div>
```

#### Passed Example 6

Content taken out of sequential focus order using `tabindex`.

```html
<div aria-hidden="true">
	<button tabindex="-2">Some button</button>
</div>
```

### Failed

#### Failed Example 1

[Focusable][] off screen link.

```html
<div aria-hidden="true">
	<a href="/" style="position:absolute; top:-999em">Link</a>
</div>
```

#### Failed Example 2

[Focusable][] form field, incorrectly disabled.

```html
<div aria-hidden="true">
	<input aria-disabled="true" />
</div>
```

#### Failed Example 3

`aria-hidden` can't be reset once set to true on an ancestor.

```html
<div aria-hidden="true">
	<div aria-hidden="false">
		<button>Some button</button>
	</div>
</div>
```

#### Failed Example 4

[Focusable][] content through `tabindex`.

```html
<p tabindex="0" aria-hidden="true">Some text</p>
```

#### Failed Example 5

[Focusable][] `summary` element.

```html
<details aria-hidden="true">
	<summary>Some button</summary>
	<p>Some details</p>
</details>
```

### Inapplicable

#### Inapplicable Example 1

Ignore `aria-hidden` with null value.

```html
<button tabindex="-1" aria-hidden>Some button</button>
```

#### Inapplicable Example 2

Ignore `aria-hidden` false.

```html
<p aria-hidden="false">Some text</p>
```

#### Inapplicable Example 3

Incorrect value of `aria-hidden`.

```html
<div aria-hidden="yes">
	<p>Some text</p>
</div>
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

### Focusable {#focusable}

Elements that can become the target of keyboard input as described in the [HTML](https://www.w3.org/TR/html) specification of [focusable](https://html.spec.whatwg.org/#focusable-area) and [can be focused](https://html.spec.whatwg.org/#specially-focusable).

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

{% include_relative implementations/6cfa84.md %}

## Changelog

This is the first version of this ACT rule.

[attribute value]: #attribute-value 'Definition of Attribute Value'
[boolean attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes 'HTML Specification of Boolean Attribute'
[comma separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#comma-separated-tokens 'HTML Specification of Comma Separated Tokens'
[enumerated attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute 'HTML Specification of Enumerated Attribute'
[focusable]: #focusable 'Definition of focusable'
[html aam]: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings 'Specification of HTML attributes value mapping to ARIA states and properties'
[idl attribute]: https://heycam.github.io/webidl/#idl-attributes "Definition of Web IDL Attribute (Editor's Draft)"
[numbers]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#numbers 'HTML Specification of Number Parsing'
[reflect]: https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes 'HTML specification of Reflecting Content Attributes in IDL Attributes'
[space separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens 'HTML Specification of Space Separated Tokens'
[wai-aria specification]: https://www.w3.org/TR/wai-aria-1.1/#propcharacteristic_value 'WAI-ARIA Specification of States and Properties Value'
