---
title: "svg element with explicit role has accessible name"
permalink: /standards-guidelines/act/rules/explicit-SVG-image-has-name-7d6734/
ref: /standards-guidelines/act/rules/explicit-SVG-image-has-name-7d6734/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/explicit-SVG-image-has-name-7d6734.md
# footer: > # Text in footer in HTML
#   <p> This is the text in the footer </p>
---

Rule Type:
:   atomic

Rule ID:
:   7d6734

Last modified:
:   May 6, 2020

Accessibility Requirements Mapping
:   [1.1.1 Non-Text Content (Level A)](https://www.w3.org/TR/WCAG21/#non-text-content)
    - **Required for conformance** to WCAG 2.0 and above on level A and above
    - [Outcome](#outcome) mapping:
      - Any `failed` outcomes: success criterion is not satisfied
      - All `passed` outcomes: success criterion needs further testing
      - An `inapplicable` outcome: success criterion needs further testing

Input Aspects
: [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)
: [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)

## Description

This rule checks that each SVG image element that is explicitly included in the accessibility tree has an accessible name.



## Applicability

The rule applies to any element in the [SVG](https://www.w3.org/2000/svg) namespace with an [explicit semantic role][explicit role] of either `img`, `graphics-document`, `graphics-symbol`, that is [included in the accessibility tree][].

**Note:** The [SVG Accessibility API Mappings, Section 5.1.2 Including Elements in the Accessibility Tree](https://www.w3.org/TR/svg-aam-1.0/#include_elements) specifies that many elements in the SVG namespace are purely presentational and should not be included in the accessibility tree unless indicated otherwise through the use of text alternative content, an explicit WAI ARIA role, or a valid `tabindex` attribute.

## Expectation

Each target element has an [accessible name][] that is not empty.

**Note:** Testing that the [accessible name][] describes the purpose of the element is not part of this rule and must be tested separately.

## Assumptions

This rule assumes that the presence of one of the roles outlined in the applicability indicates the authors intent to include the element in the accessibility tree and thus convey information to the user about that element.

## Accessibility Support

The [HTML Accessibility API Mappings](https://www.w3.org/TR/html-aam-1.0/#html-element-role-mappings) specify that the `<svg>` element has an implicit role of `graphics-document`. However browser support for the `graphics-document` role and the [SVG Accessibility API Mappings][] is inconsistent.

This rule is limited to the explicit use of roles, as a clear indication that content should convey meaning, until the [SVG Accessibility API Mappings][] is more stable and browser support is more consistent.

Browser and assistive technology support for SVG `<title>` and `<desc>` elements is currently inconsistent. Using WAI ARIA in combination with the `img` role for non-decorative `<svg>` elements significantly improves accessibility browser support.

Until browser support for the [SVG Accessibility API Mappings][] is more consistent it is recommended to explicitly remove decorative `<svg>` elements from the accessibility tree.

## Background

- [Understanding Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html)
- [SVG Accessibility API Mappings (working draft)][svg accessibility api mappings]
- [WAI-ARIA Graphics Module](https://www.w3.org/TR/graphics-aria-1.0/)
- [ARIA4: Using a WAI-ARIA role to expose the role of a user interface component](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA4)
- [ARIA6: Using aria-label to provide labels for objects](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA6)
- [ARIA10: Using aria-labelledby to provide a text alternative for non-text content](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA10)

## Test Cases

### Passed

#### Passed Example 1

This `svg` element has an [explicit role][] of `img` and an [accessible name][] from the `title` element that is not empty.

```html
<p>How many circles are there?</p>
<svg xmlns="http://www.w3.org/2000/svg" role="img" width="100" height="100">
	<title>1 circle</title>
	<circle cx="50" cy="50" r="40" fill="yellow"></circle>
</svg>
```

#### Passed Example 2

This `circle` element has an [explicit role][] of `graphics-symbol` and an [accessible name][] from the `aria-label` attribute that is not empty.

```html
<p>How many circles are there?</p>
<svg xmlns="https://www.w3.org/2000/svg">
	<circle
		role="graphics-symbol"
		cx="50"
		cy="50"
		r="40"
		stroke="green"
		stroke-width="4"
		fill="yellow"
		aria-label="1 circle"
	></circle>
</svg>
```

#### Passed Example 3

This `svg` element has an [explicit role][] of `graphics-document` and an [accessible name][] from the `title` element that is not empty.

```html
<p>How many circles are there?</p>
<svg xmlns="http://www.w3.org/2000/svg" role="graphics-document" width="100" height="100">
	<title>1 circle</title>
	<circle cx="50" cy="50" r="40" fill="yellow"></circle>
</svg>
```

### Failed

#### Failed Example 1

This `svg` element has an [explicit role][] of `img` but has no [accessible name][].

```html
<p>How many circles are there?</p>
<svg xmlns="http://www.w3.org/2000/svg" role="img">
	<circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
</svg>
```

#### Failed Example 2

This `svg` element has an [explicit role][] of `img`, is included in the accessibility tree, but it has no [accessible name][] because the `title` element is empty.

```html
<p>How many circles are there?</p>
<svg xmlns="http://www.w3.org/2000/svg" role="img">
	<title></title>
	<circle cx="50" cy="50" r="40" fill="yellow"></circle>
</svg>
```

#### Failed Example 3

This `circle` element has an [explicit role][] of `graphics-symbol` but has no [accessible name][].

```html
<p>How many circles are there?</p>
<svg xmlns="http://www.w3.org/2000/svg">
	<circle role="graphics-symbol" cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
</svg>
```

### Inapplicable

#### Inapplicable Example 1

Neither the `svg` element nor the `circle` element has any of the three [explicit roles][explicit role] of `img`, `graphics-document`, `graphics-symbol`.

```html
<svg xmlns="http://www.w3.org/2000/svg">
	<circle cx="50" cy="50" r="40" fill="yellow"></circle>
</svg>
```

#### Inapplicable Example 2

This `svg` element and its descendants are not [included in the accessibility tree][] because of the `aria-hidden` attribute.

```html
<svg xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
	<circle cx="50" cy="50" r="40" fill="yellow"></circle>
</svg>
```

#### Inapplicable Example 3

This `circle` element has an [explicit role][] that is neither `img`, `graphics-document` nor `graphics-symbol`.

```html
<svg xmlns="http://www.w3.org/2000/svg">
	<circle role="graphics-object" cx="50" cy="50" r="40" fill="yellow"></circle>
</svg>
```

## Glossary

### Accessible Name

{% include_relative glossary/accessible-name.md %}

### Explicit Semantic Role

{% include_relative glossary/explicit-semantic-role.md %}

### Included in the accessibility tree

{% include_relative glossary/included-in-the-accessibility-tree.md %}

### Outcome

{% include_relative glossary/outcome.md %}

## Acknowledgements

### Authors

This rule was written in the [ACT Rules community group](https://w3.org/community/act-r/), by:

- [Bryn Anderson](https://github.com/brynanders)

Developed with the support of the EU-funded [WAI-Tools Project](https://www.w3.org/WAI/about/projects/wai-tools/).

[accessible name]: #accessible-name 'Definition of accessible name'
[explicit role]: #explicit-role 'Definition of explicit role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the accessibility tree'
[svg accessibility api mappings]: https://www.w3.org/TR/svg-aam-1.0
