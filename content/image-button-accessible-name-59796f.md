---
title: "Image button has accessible name"
permalink: /standards-guidelines/act/rules/image-button-accessible-name-59796f/
ref: /standards-guidelines/act/rules/image-button-accessible-name-59796f/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/image-button-accessible-name-59796f.md
---

Rule Type:
:   atomic

Rule ID:
:   59796f

Last modified:
:   March 5, 2020

Accessibility Requirements Mapping
:   [1.1.1 Non-Text Content (Level A)](https://www.w3.org/TR/WCAG21/#non-text-content)
    - **Required for conformance** to WCAG 2.0 and above on level A and above
    - [Outcome](#outcome) mapping:
        - Any `failed` outcomes: not satisfied
        - All `passed` outcomes: further testing is needed
        - An `inapplicable` outcome: further testing is needed
:   [4.1.2 Name, Role, Value (Level A)](https://www.w3.org/TR/WCAG21/#name-role-value)
    - **Required for conformance** to WCAG 2.0 and above on level A and above
    - [Outcome](#outcome) mapping:
        - Any `failed` outcomes: not satisfied
        - All `passed` outcomes: further testing is needed
        - An `inapplicable` outcome: further testing is needed

Input Aspects
: [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)
: [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)

## Description

This rule checks that each image button element has an accessible name.

## Applicability

The rule applies to any HTML `input` element with a `type` attribute in the [`Image Button` state](<https://html.spec.whatwg.org/#image-button-state-(type=image)>), that is [included in the accessibility tree][].

**Note:** The specification of the [`type`](https://html.spec.whatwg.org/#states-of-the-type-attribute) attribute describes in detail how to map the value of the attribute to its corresponding state.

## Expectation

Each target element has an [accessible name][] that is not empty (`""`).

**Note:** Testing that the [accessible name][] is descriptive is not part of this rule and must be tested separately.

## Assumptions

- This rule assumes that all image buttons are [user interface components as defined by WCAG 2](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components).

## Accessibility Support

There is a known combination of a popular browser and assistive technology that does not by default support `title` as an [accessible name][].

## Background

- [Understanding Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html)
- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html)
- [WCAG Technique H36: Using alt attributes on images used as submit buttons](https://www.w3.org/WAI/WCAG21/Techniques/html/H36)

## Test Cases

### Passed

#### Passed Example 1

The image button has an [accessible name][] through the `alt` attribute.

```html
<input type="image" src="/test-assets/shared/search-icon.svg" alt="Search" />
```

#### Passed Example 2

The image button has an [accessible name][] through the `aria-label` attribute.

```html
<input type="image" src="/test-assets/shared/search-icon.svg" aria-label="Search" />
```

#### Passed Example 3

The image button has an [accessible name][] through the `title` attribute.

```html
<input type="image" src="/test-assets/shared/search-icon.svg" title="Search" />
```

#### Passed Example 4

The image button has an [accessible name][] through the `aria-labelledby` attribute.

```html
<input type="image" src="/test-assets/shared/search-icon.svg" aria-labelledby="id1" />
<div id="id1">Search</div>
```

### Failed

#### Failed Example 1

The image button element has an empty [accessible name][]. The `name` attribute can not be used to provide an [accessible name][].

```html
<input type="image" name="search" src="/test-assets/shared/search-icon.svg" />
```

#### Failed Example 2

The image button has an empty `alt` attribute, and no other attributes that can give it an [accessible name][].

```html
<input type="image" src="/test-assets/shared/search-icon.svg" alt="" />
```

#### Failed Example 3

The image button has an `aria-labelledby` attribute, but the referenced element does not exist. This gives the button an empty [accessible name][].

```html
<input type="image" src="/test-assets/shared/search-icon.svg" aria-labelledby="non-existing" />
```

### Inapplicable

#### Inapplicable Example 1

The `button` element is not an image button. [Success Criterion 1.1.1 Non-text Content](https://www.w3.org/TR/WCAG21/#non-text-content) can not fail text buttons. Only non-text content is applicable.

```html
<button>My button</button>
```

#### Inapplicable Example 2

The `input` element with type with a `type` attribute in the `Button` state is not an image button. [Success Criterion 1.1.1 Non-text Content](https://www.w3.org/TR/WCAG21/#non-text-content) can not fail text buttons. Only non-text content is applicable.

```html
<input type="button" value="My button" />
```

#### Inapplicable Example 3

The `button` element is tested separately from the `img` element. [Success Criterion 4.1.2 Name, Role, Value](https://www.w3.org/TR/WCAG21/#name-role-value) is applied to the button, whereas the image is tested under [Success Criterion 1.1.1 Non-text Content](https://www.w3.org/TR/WCAG21/#non-text-content)

```html
<button><img src="/test-assets/shared/search-icon.svg" alt="Search" /></button>
```

#### Inapplicable Example 4

The `img` element is not a user interface component, and so is not tested for [Success Criterion 4.1.2 Name, Role, Value](https://www.w3.org/TR/WCAG21/#name-role-value).

```html
<img src="/test-assets/shared/w3c-logo.png" alt="W3C logo" />
```

#### Inapplicable Example 5

The image button is ignored by assistive technologies because it is not [included in the accessibility tree][]. These are not required to have an accessible name. If at some future state of the page the element gets [included in the accessibility tree][], an [accessible name][] will be necessary.

```html
<input type="image" src="/test-assets/shared/search-icon.svg" style="display: none;" />
```

## Glossary

### Accessible Name

The programmatically determined name of a user interface element that is [included in the accessibility tree](#included-in-the-accessibility-tree).

The accessible name is calculated using the [accessible name and description computation](https://www.w3.org/TR/accname).

For native markup languages, such as HTML and SVG, additional information on how to calculate the accessible name can be found in [HTML Accessibility API Mappings 1.0, Accessible Name and Description Computation (working draft)](https://www.w3.org/TR/html-aam/#accessible-name-and-description-computation) and [SVG Accessibility API Mappings, Name and Description (working draft)](https://www.w3.org/TR/svg-aam/#mapping_additional).

**Note**: As per the [accessible name and description computation](https://www.w3.org/TR/accname), each element always has an accessible name. When no accessible name is provided, the element will nonetheless be assigned an empty (`""`) one.

**Note**: As per the [accessible name and description computation](https://www.w3.org/TR/accname), accessible names are [flat string](https://www.w3.org/TR/accname-1.1/#terminology) trimmed of leading and trailing whitespace. Notably, it is not possible for a non-empty accessible name to be composed only of whitespace since these must be trimmed.

#### Accessibility Support

- Because the [accessible name and description computation](https://www.w3.org/TR/accname) is not clear about which whitespace are considered, browsers behave differently when trimming and flattening the accessible name. For example, some browsers completely trim non-breaking spaces while some keep them in the accessible name.
- There exists a popular browser which does not perform the same trimming and flattening depending whether the accessible name comes from content, an `aria-label` attribute, or an `alt` attribute.
- There exists a popular browser which assign no accessible name (`null`) when none is provided, instead of assigned an empty accessible name (`""`).

#### Examples

**Note**: The examples presented here are non-normative and not testable. They serve to illustrate some common pitfalls about the definition and to help implementers of ACT rules understand it.

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

**Note**: When the same element can have an accessible name from several sources, the order of precedence is: `aria-labelledby`, `aria-label`, own attributes, `label` element, name from content. The examples here are listed in the same order.

**Note**: For more examples of accessible name computation, including many tricky cases, check the [Accessible Name Testable Statements](https://www.w3.org/wiki/AccName_1.1_Testable_Statements).


### Included In The Accessibility Tree

Elements included in the accessibility tree of platform specific accessibility APIs. Elements in the accessibility tree are exposed to assistive technologies, allowing users to interact with the elements in a way that meet the requirements of the individual user.

The general rules for when elements are included in the accessibility tree are defined in the [core accessibility API mappings](https://www.w3.org/TR/core-aam/). For native markup languages, such as HTML and SVG, additional rules for when elements are included in the accessibility tree can be found in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/) and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/).

> **Note:** Users of assistive technologies might still be able to interact with elements that are not included in the accessibility tree. An example of this is a [focusable](#focusable) element with an `aria-hidden` attribute with a value of `true`. Such an element could still be interacted with using sequential keyboard navigation regardless of the assistive technologies used, even though the element would not be included in the accessibility tree.

#### Examples

**Note**: The examples presented here are non-normative and not testable. They serve to illustrate some common pitfalls about the definition and to help implementers of ACT rules understand it.

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

### Whitespace

Characters that have the Unicode "White_Space" property in the [Unicode properties list](https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt).

This includes:

- all characters in the [Unicode Separator categories](https://www.unicode.org/versions/Unicode11.0.0/ch04.pdf#G134153), and
- the following characters in the [Other, Control](https://www.unicode.org/versions/Unicode11.0.0/ch04.pdf#G134153) category:
  - Character tabulation (`U+0009`)
  - Line Feed (LF) (`U+000A`)
  - Line Tabulation (`U+000B`)
  - Form Feed (FF) (`U+000C`)
  - Carriage Return (CR) (`U+000D`)
  - Next Line (NEL) (`U+0085`)

## Acknowledgements

### Authors

- [Anne Thyme Nørregaard](https://github.com/annethyme)


[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[accessible name]: #accessible-name 'Definition of accessible name'
[whitespace]: #whitespace 'Definition of whitespace'
