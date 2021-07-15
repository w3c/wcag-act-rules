---
title: "id attribute value is unique"
permalink: /standards-guidelines/act/rules/id-value-unique-3ea0c8/
ref: /standards-guidelines/act/rules/id-value-unique-3ea0c8/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/id-value-unique-3ea0c8.md
rule_meta:
  id: 3ea0c8
  name: "`id` attribute value is unique"
  rule_type: atomic
  description: |
    This rule checks that all `id` attribute values on a single page are unique.
  accessibility_requirements:
    'wcag20:4.1.1':
      forConformance: true
      failed: not satisfied
      passed: further testing needed
      inapplicable: further testing needed
    'wcag-technique:H93':
      forConformance: false
      failed: not satisfied
      passed: satisfied
      inapplicable: satisfied
  input_aspects:
    - handle: DOM Tree
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom
  last_modified: July 15th, 2021
  scs_tested:
    - handle: Parsing
      num: 4.1.1
      level: A
---

## Applicability

This rule applies to any `id` attribute whose value is not an empty string (`""`), specified on a HTML or SVG element.

**Note:** Elements that are neither [included in the accessibility tree][] nor [visible][] are still considered for this rule.

## Expectation

The value of the attribute is unique across all other `id` attributes specified on HTML or SVG elements that exist within the same [document tree](https://dom.spec.whatwg.org/#document-trees) or [shadow tree](https://dom.spec.whatwg.org/#shadow-trees) as the element on which the applicable `id` attribute is specified.

## Assumptions

_There are currently no assumptions._

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

- [Understanding Success Criterion 4.1.1: Parsing](https://www.w3.org/WAI/WCAG21/Understanding/parsing)
- [H93: Ensuring that id attributes are unique on a Web page](https://www.w3.org/WAI/WCAG21/Techniques/html/H93)

## Test Cases

### Passed

#### Passed Example 1

There is only one `id` attribute within the document context.

```html
<div id="my-div">This is my first element</div>
```

#### Passed Example 2

All `id` attributes are unique within the document context.

```html
<div id="my-div1">This is my first element</div>
<div id="my-div2">This is my second element</div>
<svg id="my-div3">This is my third element</svg>
```

#### Passed Example 3

Two of the `id` attributes are the same (`my-elt`), but they are in different trees (the first one in the [document tree](https://dom.spec.whatwg.org/#document-trees) and the second in the [shadow tree](https://dom.spec.whatwg.org/#shadow-trees)).

```html
<div id="my-elt"></div>
<div id="host"></div>
<script>
	var host = document.getElementById('host')
	var shadow = host.attachShadow({ mode: 'open' })
	shadow.innerHTML = '<b id="my-elt"></b>'
</script>
```

#### Passed Example 4

Both `id` attributes are the same (`my-elt`), but they are in different [document trees](https://dom.spec.whatwg.org/#document-trees) because the `iframe` is creating a new one.

```html
<div id="my-elt"></div>
<iframe title="Empty frame" srcdoc="<span id='my-elt'></span>"></iframe>
```

### Failed

#### Failed Example 1

The `id` attribute `label` is not unique among all `id` attributes in the document, resulting in a wrong [programmatic label][] on the input field.

```html
<div id="label">Name</div>
<div id="label">City</div>

<input aria-labelledby="label" type="text" name="city" />
```

#### Failed Example 2

The `id` attribute `label` is not unique among all `id` attributes in the document, resulting in a wrong [programmatic label][] on the input field.

```html
<div id="label">Name</div>
<svg id="label">
	<text x="0" y="15">City</text>
</svg>

<input aria-labelledby="label" type="text" name="city" />
```

#### Failed Example 3

The `id` attribute `label` is not unique among all `id` attributes in the document, resulting in a wrong [programmatic label][] on the input field. This rule still considers elements that are neither [included in the accessibility tree][] nor [visible][].

```html
<span id="label" style="display: none;">Name</span>
<span id="label">City</span>

<input aria-labelledby="label" type="text" name="city" />
```

### Inapplicable

#### Inapplicable Example 1

There is no `id` attribute in this document.

```html
<div>This is my first element</div>
```

#### Inapplicable Example 2

The `xml:id` attribute is not considered by this rule.

```html
<div xml:id="my-div">This is my first element</div>
```

#### Inapplicable Example 3

These `id` attributes have an empty value.

```html
<span id="">Hello</span> <span id="">world!</span>
```

## Glossary

{% include_relative glossary/focusable.md %}
{% include_relative glossary/included-in-the-accessibility-tree.md %}
{% include_relative glossary/outcome.md %}
{% include_relative glossary/programmatic-label.md %}
{% include_relative glossary/visible.md %}

## Acknowledgements

This rule was written in the [ACT Rules community group](https://w3.org/community/act-r/), 
with the support of the EU-funded [WAI-Tools Project](https://www.w3.org/WAI/about/projects/wai-tools/).

### Authors

- [Anne Thyme Nørregaard](https://github.com/annethyme)
- [Bryn Anderson](https://github.com/brynanders)

## Changelog

This is the first version of this ACT rule.

[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[programmatic label]: #programmatic-label 'Definition of programmatic label'
[visible]: #visible 'Definition of visible'
