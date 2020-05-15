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

The _accessible name_ is the programmatically determined name of a user interface element that is [included in the accessibility tree](#included-in-the-accessibility-tree).

The accessible name is calculated using the [accessible name and description computation](https://www.w3.org/TR/accname).

For native markup languages, such as HTML and SVG, additional information on how to calculate the accessible name can be found in [HTML Accessibility API Mappings 1.0, Accessible Name and Description Computation (working draft)](https://www.w3.org/TR/html-aam/#accessible-name-and-description-computation) and [SVG Accessibility API Mappings, Name and Description (working draft)](https://www.w3.org/TR/svg-aam/#mapping_additional).

**Note:** As per the [accessible name and description computation](https://www.w3.org/TR/accname), each element always has an accessible name. When no accessible name is provided, the element will nonetheless be assigned an empty (`""`) one.

**Note:** As per the [accessible name and description computation](https://www.w3.org/TR/accname), accessible names are [flat string](https://www.w3.org/TR/accname-1.1/#terminology) trimmed of leading and trailing whitespace. Notably, it is not possible for a non-empty accessible name to be composed only of whitespace since these must be trimmed.

#### Accessibility Support (Accessible name)

- Because the [accessible name and description computation](https://www.w3.org/TR/accname) is not clear about which whitespace are considered, browsers behave differently when trimming and flattening the accessible name. For example, some browsers completely trim non-breaking spaces while some keep them in the accessible name.
- There exists a popular browser which does not perform the same trimming and flattening depending whether the accessible name comes from content, an `aria-label` attribute, or an `alt` attribute.
- There exists a popular browser which assign no accessible name (`null`) when none is provided, instead of assigned an empty accessible name (`""`).

#### Examples (Accessible name)

**Note:** The examples presented here are non-normative and not testable. They serve to illustrate some common pitfalls about the definition and to help implementers of ACT rules understand it.

The `input` elements have an accessible name of, respectively, "Billing Name" and "Billing Address". These accessible names are given by the `aria-labelledby` attributes and associated elements.

```html
<div id="myBillingId">Billing</div>

<div>
	<div id="myNameId">Name</div>
	<input type="text" aria-labelledby="myBillingId myNameId" />
</div>
<div>
	<div id="myAddressId">Address</div>
	<input type="text" aria-labelledby="myBillingId myAddressId" />
</div>
```

This `button` element has an accessible name of "Share ACT rules" given by its `aria-label` attribute.

```html
<button aria-label="Share ACT rules">Share</button>
```

This `img` element has an accessible name of "ACT rules" given by its `alt` attribute.

```html
<img src="#" alt="ACT rules" />
```

The `button` element has an accessible name of "Share ACT rules" given by the enclosing `label` element (implicit `label`)

```html
<label>Share ACT rules<button>Share</button></label>
```

The `button` element has an accessible name of "Share ACT rules" given by the associated `label` element (explicit `label`)

```html
<label for="act-rules">Share ACT rules</label><button id="act-rules"></button>
```

This `a` element has an accessible name of "ACT rules" given from its content. Note that not all [semantic roles](#semantic-role) allow [name from content](https://www.w3.org/TR/wai-aria/#namefromcontent).

```html
<a href="https://act-rules.github.io/">ACT rules</a>
```

This `span` element has an empty accessible name (`""`) because `span` does not allow [name from content](https://www.w3.org/TR/wai-aria/#namefromcontent).

```html
<span>ACT rules</span>
```

This `span` element has an empty accessible name (`""`) because `span` is not a [labelable element](https://html.spec.whatwg.org/#category-label).

```html
<label>ACT rules<span></span></label>
```

**Note:** When the same element can have an accessible name from several sources, the order of precedence is: `aria-labelledby`, `aria-label`, own attributes, `label` element, name from content. The examples here are listed in the same order.

**Note:** For more examples of accessible name computation, including many tricky cases, check the [Accessible Name Testable Statements](https://www.w3.org/wiki/AccName_1.1_Testable_Statements).


### Explicit Semantic Role

The _explicit semantic role_ is the [semantic role](#semantic-role) of an element set by its [role attribute](https://www.w3.org/TR/role-attribute/).

The [role attribute](https://www.w3.org/TR/role-attribute/) takes a list of tokens. The explicit semantic role is the first valid role in this list. If none of the tokens are valid, the [implicit semantic role](#implicit-role) will be used instead. The valid roles are all non-abstract roles from [WAI-ARIA Specifications](#wai-aria-specifications).

Other roles may be added as they become available. Not all roles will be supported in all assistive technologies. Testers are encouraged to adjust which roles are allowed according to the [accessibility support base line](https://www.w3.org/TR/WCAG-EM/#step1c). For the purposes of executing test cases in all rules, it should be assumed that all roles are supported by assistive technologies so that none of the roles fail due to lack of accessibility support.

#### Accessibility Support (Explicit role)

Some browsers and assistive technologies treat the tokens of the `role` attribute as case-sensitive. Unless lowercase letters are used for the value of the `role` attribute, not all user agents will be able to interpret the tokens correctly. [ARIA in HTML (working draft)](https://www.w3.org/TR/html-aria/) also specifies that [authors must use lowercase letters for the `role` and `aria-*` attributes](https://www.w3.org/TR/html-aria/#case-sensitivity).

### Included in the accessibility tree

Elements included in the accessibility tree of platform specific accessibility APIs. Elements in the accessibility tree are exposed to assistive technologies, allowing users to interact with the elements in a way that meet the requirements of the individual user.

The general rules for when elements are included in the accessibility tree are defined in the [core accessibility API mappings](https://www.w3.org/TR/core-aam/). For native markup languages, such as HTML and SVG, additional rules for when elements are included in the accessibility tree can be found in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/) and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/).

**Note:** Users of assistive technologies might still be able to interact with elements that are not included in the accessibility tree. An example of this is a [focusable](#focusable) element with an `aria-hidden` attribute with a value of `true`. Such an element could still be interacted with using sequential keyboard navigation regardless of the assistive technologies used, even though the element would not be included in the accessibility tree.

#### Examples (included in the accessibility tree)

**Note:** The examples presented here are non-normative and not testable. They serve to illustrate some common pitfalls about the definition and to help implementers of ACT rules understand it.

This `span` element is included in the accessibility tree (by default, elements are included in the accessibility tree).

```html
<span>ACT rules</span>
```

This `span` element is not included in the accessibility tree because it is hidden to everybody by the CSS property.

```html
<span style="display:none">ACT rules</span>
```

This `span` element is not included in the accessibility tree because it is explicitly removed by the `aria-hidden` attribute.

```html
<span aria-hidden="true">ACT rules</span>
```

This `span` element is positioned off screen, hence is not [visible](#visible), but is nonetheless included in the accessibility tree.

```html
<span style="position: absolute; top:-9999em">ACT rules</span>
```

Although the `span` element with an `id` of "label" is not itself included in the accessibility tree, it still provides an [accessible name](#accessible-name) to the other `span`, via the `aria-labelledby` attribute. Thus, it is still indirectly exposed to users of assistive technologies. Removing an element from the accessibility tree is not enough to remove all accessibility concerns from it since it can still be indirectly exposed.

```html
<span id="label" style="display:none">ACT rules</span>
<span aria-labelledby="label">Accessibility Conformance Testing rules</span>
```

Although this `input` element is not included in the accessibility tree, it is still [focusable](#focusable), hence users of assistive technologies can still interact with it by sequential keyboard navigation. This may result in confusing situations for such users (and is in direct violation of [the fourth rule of ARIA (working draft)](https://www.w3.org/TR/using-aria/#fourth)).

```html
<input type="text" aria-hidden="true" name="fname" />
```

### Outcome

A conclusion that comes from evaluating an ACT Rule on a [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) or one of its constituent [test target](https://www.w3.org/TR/act-rules-format/#test-target). An outcome can be one of the three following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) meets all expectations
- **Failed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) does not meet all expectations

**Note:** A rule has one `passed` or `failed` outcome for every [test target](https://www.w3.org/TR/act-rules-format/#test-target). When there are no test targets the rule has one inapplicable outcome. This means that each [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) will have one or more outcomes.

**Note:** Implementers using the [EARL10-Schema](https://www.w3.org/TR/EARL10-Schema/) can express the outcome with the [outcome property](https://www.w3.org/TR/EARL10-Schema/#outcome). In addition to `passed`, `failed` and `inapplicable`, EARL 1.0 also defined an `incomplete` outcome. While this cannot be the outcome of an ACT Rule when applied in its entirety, it often happens that rules are only partially evaluated. For example, when applicability was automated, but the expectations have to be evaluated manually. Such "interim" results can be expressed with the incomplete outcome.


## Acknowledgements

### Authors

This rule was written in the [ACT Rules community group](https://w3.org/community/act-r/), by:

- [Bryn Anderson](https://github.com/brynanders)

Developed with the support of the EU-funded [WAI-Tools Project](https://www.w3.org/WAI/about/projects/wai-tools/).

[accessible name]: #accessible-name 'Definition of accessible name'
[explicit role]: #explicit-role 'Definition of explicit role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the accessibility tree'
[svg accessibility api mappings]: https://www.w3.org/TR/svg-aam-1.0
