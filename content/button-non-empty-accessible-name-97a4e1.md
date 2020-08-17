---
title: "Button has non-empty accessible name"
permalink: /standards-guidelines/act/rules/button-non-empty-accessible-name-97a4e1/
ref: /standards-guidelines/act/rules/button-non-empty-accessible-name-97a4e1/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/button-non-empty-accessible-name-97a4e1.md
# footer: > # Text in footer in HTML
#   <p> This is the text in the footer </p>
---

Rule Type:
:   atomic

Rule ID:
:   97a4e1

Last Modified:
:   TODO (format Sep 25, 2019)

Accessibility Requirements Mapping:
:   [4.1.2 Name, Role, Value (Level A)](https://www.w3.org/TR/WCAG21/#name-role-value)
    - **Required for conformance** to WCAG 2.0 and later on level A and higher
    - [Outcome](#outcome) mapping:
      - Any `failed` outcomes: success criterion is not satisfied
      - All `passed` outcomes: success criterion needs further testing
      - An `inapplicable` outcome: success criterion needs further testing

Input Aspects:
:   [Accessibility Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-accessibility)
:   [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)
:   [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)

## Description

This rule checks that each `button` element has a non-empty accessible name.

## Applicability

The rule applies to elements that are [included in the accessibility tree][] and have a [semantic role](#semantic-role) of `button`, except for `input` elements with a `type` [attribute value] of `image`.

## Expectation

Each target element has an [accessible name][] that is not empty (`""`).

**Note:** `input` elements with a type [attribute value][] of either `submit` or `reset` can get their [accessible name][] from a [default text](https://www.w3.org/TR/html-aam/#input-type-button-input-type-submit-and-input-type-reset), as well as from a `value` or other attribute.

## Assumptions

- The rule assumes that all buttons are [user interface components as defined by WCAG 2](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components).

## Accessibility Support

- Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have a [semantic role][] of `button` and fail this rule with some technology but users of other technologies would not experience any accessibility issue.

## Background

- [HTML Accessibility API Mappings 1.0 (working draft), 5.2 `input type="button"`, `input type="submit"` and `input type="reset"`](https://www.w3.org/TR/html-aam/#input-type-button-input-type-submit-and-input-type-reset)
- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value)
- [ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA14)
- [ARIA16: Using aria-labelledby to provide a name for user interface controls](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16)

## Test Cases

### Passed

#### Passed Example 1

This `button` element has an [accessible name][] because of its text content.

```html
<button>My button</button>
```

#### Passed Example 2

This `input` element has an [accessible name][] because of its `value` attribute.

```html
<input type="submit" value="Submit" />
```

#### Passed Example 3

This `button` element has an [accessible name][] because of its `aria-label` attribute.

```html
<button aria-label="My button"></button>
```

#### Passed Example 4

This element with a `button` role has an [accessible name][] because of its `aria-label` attribute.

```html
<span role="button" aria-label="My button"></span>
```

#### Passed Example 5

This `button` element with the `disabled` attribute has an [accessible name][] because of its text content.

```html
<button disabled>Delete</button>
```

#### Passed Example 6

This off screen `button` element has an [accessible name][] because of its text content.

```html
<html>
	<style>
		.notInPage {
			position: absolute;
			left: -9999px;
			top: -9999px;
		}
	</style>
	<body>
		<button class="notInPage">Save</button>
	</body>
</html>
```

#### Passed Example 7

This `input` element has an [accessible name][] because of the default accessible name for an `input` element with a `type` attribute set to `reset`.

```html
<input type="reset" />
```

### Failed

#### Failed Example 1

This `button` element has no [accessible name][] because it has no content or attribute that can provide it.

```html
<button></button>
```

#### Failed Example 2

This `button` element has no [accessible name][]. The `value` attribute does not provide an [accessible name][] for `button` elements, only when an `input` element's [state of the `type` attribute](https://html.spec.whatwg.org/multipage/input.html#states-of-the-type-attribute) is `button`, `submit` or `reset`.

```html
<button type="button" value="read more"></button>
```

#### Failed Example 3

This element with the `button` role has no [accessible name][] because it has no content or attribute that can provide it.

```html
<span role="button"></span>
```

#### Failed Example 4

This off screen `button` element has no [accessible name][] because it has no content or attribute that can provide it.

```html
<html>
	<style>
		.notInPage {
			position: absolute;
			left: -9999px;
			top: -9999px;
		}
	</style>
	<body>
		<button class="notInPage" value="delete"></button>
	</body>
</html>
```

#### Failed Example 5

This `button` element has an [explicit role][] of `none`. However, it is [focusable][] (by default). Thus it has a [semantic role][] of `button` due to [Presentational Roles Conflict Resolution][]. It has an empty [accessible name][].

```html
<button role="none"></button>
```

### Inapplicable

#### Inapplicable Example 1

This `input` element has a `type` attribute set to `image`. These images are tested in a separate rule which also tests [success criterion 1.1.1 Non-text Content](https://www.w3.org/TR/WCAG21/#non-text-content).

```html
<input type="image" value="download" alt="Download" />
```

#### Inapplicable Example 2

This `button` element does not need an [accessible name][] because it is not included in the accessibility tree.

```html
<button style="display: none;"></button>
```

#### Inapplicable Example 3

This `button` element has a `link` role. Links are tested in a separate rule which also tests [success criterion 2.4.4 Link Purpose (In Context)](https://www.w3.org/TR/WCAG21/#link-purpose-in-context).

```html
<button role="link">take me somewhere</button>
```

#### Inapplicable Example 4

There is no element with a semantic role of `button`.

```html
<div>Press Here</div>
```

#### Inapplicable Example 5

This `button` element has an [explicit role][] of `none`; it is not [focusable][] because it is `disabled`. Thus it has a [semantic role][] of `none`.

```html
<button role="none" disabled></button>
```

## Glossary

### Accessible Name

The _accessible name_ is the programmatically determined name of a user interface element that is [included in the accessibility tree](#included-in-the-accessibility-tree).

The accessible name is calculated using the [accessible name and description computation](https://www.w3.org/TR/accname).

For native markup languages, such as HTML and SVG, additional information on how to calculate the accessible name can be found in [HTML Accessibility API Mappings 1.0, Accessible Name and Description Computation (working draft)](https://www.w3.org/TR/html-aam/#accessible-name-and-description-computation) and [SVG Accessibility API Mappings, Name and Description (working draft)](https://www.w3.org/TR/svg-aam/#mapping_additional).

**Note:** As per the [accessible name and description computation](https://www.w3.org/TR/accname), each element always has an accessible name. When no accessible name is provided, the element will nonetheless be assigned an empty (`""`) one.

**Note:** As per the [accessible name and description computation](https://www.w3.org/TR/accname), accessible names are [flat string](https://www.w3.org/TR/accname-1.1/#terminology) trimmed of leading and trailing whitespace. Notably, it is not possible for a non-empty accessible name to be composed only of whitespace since these must be trimmed.

#### Accessibility Support (Accessible Name)

- Because the [accessible name and description computation](https://www.w3.org/TR/accname) is not clear about which whitespace are considered, browsers behave differently when trimming and flattening the accessible name. For example, some browsers completely trim non-breaking spaces while some keep them in the accessible name.
- There exists a popular browser which does not perform the same trimming and flattening depending whether the accessible name comes from content, an `aria-label` attribute, or an `alt` attribute.
- There exists a popular browser which assign no accessible name (`null`) when none is provided, instead of assigned an empty accessible name (`""`).

#### Examples (Accessible Name)

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

### Attribute value

The _attribute value_ of an attribute set on an HTML element is the value that the attribute gets after being parsed and computed according to specifications. It may differ from the value that is actually written in the HTML code due to trimming whitespace or non-digits characters, default values, or case-insensitivity.

Some notable case of attribute value, among others:

- For [enumerated attributes][], the _attribute value_ is either the state of the attribute, or the keyword that maps to it; even for the default states. Thus `<input type="image" />` has an attribute value of either `Image Button` (the state) or `image` (the keyword mapping to it), both formulations having the same meaning; similarly, "an input element with a `type` _attribute value_ of `Text`" can be either `<input type="text" />`, `<input />` (missing value default), or `<input type="invalid" />` (invalid value default).
- For [boolean attributes][], the _attribute value_ is `true` when the attribute is present and `false` otherwise. Thus `<button disabled>`, `<button disabled="disabled">` and `<button disabled="">` all have a `disabled` _attribute value_ of `true`.
- For attributes whose value is used in a case-insensitive context, the _attribute value_ is the lowercase version of the value written in the HTML code.
- For attributes that accept [numbers][], the _attribute value_ is the result of parsing the value written in the HTML code according to the rules for parsing this kind of number.
- For attributes that accept sets of tokens, whether [space separated][] or [comma separated][], the _attribute value_ is the set of tokens obtained after parsing the set and, depending on the case, converting its items to lowercase (if the set is used in a case-insensitive context).
- For `aria-*` attributes, the _attribute value_ is computed as indicated in the [WAI-ARIA specification][].

This list is not exhaustive, and only serves as an illustration for some of the most common cases.

### Explicit Semantic Role

The _explicit semantic role_ of an element is determined by its [role attribute][] (if any).

The [role attribute][] takes a list of tokens. The explicit semantic role is the first valid role in this list. The valid roles are all non-abstract roles from [WAI-ARIA Specifications][]. If the element has no [role attribute][], or if it has one with no valid role, then this element has no explicit semantic role.

Other roles may be added as they become available. Not all roles will be supported in all assistive technologies. Testers are encouraged to adjust which roles are allowed according to the [accessibility support base line][]. For the purposes of executing test cases in all rules, it should be assumed that all roles are supported by assistive technologies so that none of the roles fail due to lack of accessibility support.

#### Accessibility Support (Explicit Semantic Role)

Some browsers and assistive technologies treat the tokens of the `role` attribute as case-sensitive. Unless lowercase letters are used for the value of the `role` attribute, not all user agents will be able to interpret the tokens correctly. [ARIA in HTML (working draft)](https://www.w3.org/TR/html-aria/) also specifies that [authors must use lowercase letters for the `role` and `aria-*` attributes](https://www.w3.org/TR/html-aria/#case-sensitivity).

### Focusable

Elements that can become the target of keyboard input as described in the [HTML](https://www.w3.org/TR/html) specification of [focusable](https://html.spec.whatwg.org/#focusable-area) and [can be focused](https://html.spec.whatwg.org/#specially-focusable).

### Hidden State

An HTML element's _hidden state_ is "true" if at least one of the following is true for itself or any of its [ancestors][] in the [flat tree][]:

- has a `hidden` attribute; or
- has a [computed][] CSS property `display` of `none`; or
- has a [computed][] CSS property `visibility` of `hidden`; or
- has an `aria-hidden` attribute set to `true`

In any other case, the element's _hidden state_ is "false".

### Implicit Semantic Role

The _implicit semantic role_ of an element is a pre-defined value given by the host language which depends on the element and its ancestors.

Implicit roles for HTML and SVG, are documented in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/#html-element-role-mappings) and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/#mapping_role_table).

#### Accessibility Support (Implicit Semantic Role)

- Images with an empty `alt` attribute should have an implicit role of `presentation`, according to the [HTML Accessibility API Mapping (work in progress)](https://www.w3.org/TR/html-aam-1.0/#html-element-role-mappings). However, there are several popular browsers that do not treat images with empty `alt` attribute as having a role of `presentation`. Instead, they add the `img` element to the accessibility tree with a role of either `img` or `graphic`.

### Included in the accessibility tree

Elements included in the accessibility tree of platform specific accessibility APIs. Elements in the accessibility tree are exposed to assistive technologies, allowing users to interact with the elements in a way that meet the requirements of the individual user.

The general rules for when elements are included in the accessibility tree are defined in the [core accessibility API mappings](https://www.w3.org/TR/core-aam/). For native markup languages, such as HTML and SVG, additional rules for when elements are included in the accessibility tree can be found in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/) and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/).

**Note:** Users of assistive technologies might still be able to interact with elements that are not included in the accessibility tree. An example of this is a [focusable](#focusable) element with an `aria-hidden` attribute with a value of `true`. Such an element could still be interacted with using sequential keyboard navigation regardless of the assistive technologies used, even though the element would not be included in the accessibility tree.

#### Examples (Included in the accessibility tree)

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

An _outcome_ is a conclusion that comes from evaluating an ACT Rule on a [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) or one of its constituent [test target](https://www.w3.org/TR/act-rules-format/#test-target). An outcome can be one of the three following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) meets all expectations
- **Failed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) does not meet all expectations

**Note:** A rule has one `passed` or `failed` outcome for every [test target](https://www.w3.org/TR/act-rules-format/#test-target). When there are no test targets the rule has one `inapplicable` outcome. This means that each [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) will have one or more outcomes.

**Note:** Implementations using the [EARL10-Schema](https://www.w3.org/TR/EARL10-Schema/) can express the outcome with the [outcome property](https://www.w3.org/TR/EARL10-Schema/#outcome). In addition to `passed`, `failed` and `inapplicable`, EARL 1.0 also defined an `incomplete` outcome. While this cannot be the outcome of an ACT Rule when applied in its entirety, it often happens that rules are only partially evaluated. For example, when applicability was automated, but the expectations have to be evaluated manually. Such "interim" results can be expressed with the `incomplete` outcome.

### Semantic Role

The _semantic role_ of an element is determined by the first of these cases that applies:

1. **Conflict** If the element is [marked as decorative][], but the element is [included in the accessibility tree][]; or would be [included in the accessibility tree][] when its [hidden state][] is false, then its _semantic role_ is its **[implicit role][]**.
1. **Explicit** If the element has an [explicit role][], then its _semantic role_ is its [explicit role][].
1. **Implicit** The _semantic role_ of the element is its [implicit role][].

#### Accessibility Support for Definition of Semantic Role

- There exist popular web browsers and assistive technologies which do not correctly implement [Presentational Roles Conflict Resolution][]. These technologies will not [include in the accessibility tree][included in the accessibility tree] elements that should be, according to Specifications. Thus, some elements that should have their _semantic role_ fixed by case **Conflict** above are instead falling into case **Explicit** and are hidden for users of assistive technologies.
- A similar conflict exists for [focusable][] elements with a `aria-hidden="true"` attribute. The WAI ARIA specification does not explain how to solve it. Some browsers give precedence to the element being focusable (and expose it in the accessibility tree) while some give precedence to the `aria-hidden` attribute (and hide the element).

### Visible

Content perceivable through sight.

Content is considered _visible_ if making it fully transparent would result in a difference in the pixels rendered for any part of the document that is currently within the viewport or can be brought into the viewport via scrolling.

[Content is defined in WCAG](https://www.w3.org/TR/WCAG21/#dfn-content).

#### Examples (Visible)

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

### WAI-ARIA specifications

The _WAI ARIA Specifications_ group both the WAI ARIA W3C Recommendation and ARIA modules, namely:

- [Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria-1.1/)
- [WAI-ARIA Graphics Module 1.0](https://www.w3.org/TR/graphics-aria-1.0/)
- [Digital Publishing WAI-ARIA Module 1.0](https://www.w3.org/TR/dpub-aria-1.0/)

**Note:** depending on the type of content being evaluated, part of the specifications might be irrelevant and should be ignored.

## Acknowledgements

This rule was written in the [ACT Rules community group](https://w3.org/community/act-r/), 
with the support of the EU-funded [WAI-Tools Project](https://www.w3.org/WAI/about/projects/wai-tools/).

### Authors

- [Wilco Fiers](https://github.com/wilcofiers)
- [Stein Erik Skotkjerra](https://github.com/skotkjerra)

## Changelog

This is the first version of this ACT rule

[accessibility support base line]: https://www.w3.org/TR/WCAG-EM/#step1c 'Definition of accessibility support base line'
[accessible name]: #accessible-name 'Definition of accessible name'
[ancestors]: https://dom.spec.whatwg.org/#concept-tree-ancestor 'Definition Ancestor'
[attribute value]: #attribute-value 'Definition of Attribute Value'
[boolean attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes
[comma separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#comma-separated-tokens
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[enumerated attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute
[explicit role]: #explicit-role 'Definition of explicit role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focusable]: #focusable 'Definition of focusable'
[hidden state]: #hidden-state 'Definition of hidden state'
[implicit role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[marked as decorative]: marked-as-decorative.md 'Definition of Marked as Decorative'
[numbers]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#numbers
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[space separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens
[wai-aria specification]: https://www.w3.org/TR/wai-aria-1.1/#propcharacteristic_value
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'