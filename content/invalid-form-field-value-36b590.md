---
title: "Error message describes invalid form field value"
permalink: /standards-guidelines/act/rules/invalid-form-field-value-36b590/
ref: /standards-guidelines/act/rules/invalid-form-field-value-36b590/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/invalid-form-field-value-36b590.md
footer: |
  <p><strong>Date:</strong> Updated 19 January 2022</p>
  <p><strong>Rule Identifier:</strong> 36b590</p>
  <p><strong>Authors:</strong> <a href="https://github.com/carlosapaduarte">Carlos Duarte</a>, <a href="https://github.com/joao-vicente">João Vicente</a>, <a href="https://github.com/wilcofiers">Wilco Fiers</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules community group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>.</p>
proposed: true
rule_meta:
  id: 36b590
  name: "Error message describes invalid form field value"
  rule_type: atomic
  description: |
    This rule checks that text error messages provided when the user completes a form field with invalid values or using an invalid format, identify the cause of the error or how to fix the error.
  last_modified: 19 January 2022
  scs_tested:
    - handle: Error Identification
      num: 3.3.1
      level: A
---

## Applicability

This rule applies to each [HTML element][] that has one of the following [semantic roles][semantic role]:

- `checkbox`,
- `combobox`,
- `listbox`,
- `menuitemcheckbox`,
- `menuitemradio`,
- `radio`,
- `searchbox`,
- `slider`,
- `spinbutton`,
- `switch` or
- `textbox`.

**Note**: The list of applicable [semantic roles][semantic role] is derived by taking all the [ARIA 1.1][] roles that:

- inherit from the [abstract][] `input` or `select` role, and
- do not have a [required context][] role that inherits from the [abstract][] `input` or `select` role.

## Expectation 1

Each test target either has no [form field error indicators][form field error indicator], or at least one of the [form field error indicators][form field error indicator] allows the identification of the related test target, through [text][], or through [non-text content][], or through [presentation][].

**Note**: This rule does not test [form field error indicators][form field error indicator] shown on a different page than that of the test target.

**Note**: A single [form field error indicator][] can be related to multiple test targets. For example, an error message at the top of a form can list all the form fields that are required and are empty.

**Note**: A single test target can be related to multiple [form field error indicators][form field error indicator]. For example, a text field can have a red border around it, an error icon adjacent to it, an error message below it, and another error message at the top of the form. All of these are error indicators for the same form field.

## Expectation 2

Each test target either has no [form field error indicators][form field error indicator], or at least one of the [form field error indicators][form field error indicator] describes:

- the cause of the error, or
- how to resolve it,

in [text][] that is [visible][].

## Expectation 3

Each test target either has no [form field error indicators][form field error indicator], or at least one of the [form field error indicators][form field error indicator] describes:

- the cause of the error, or
- how to resolve it,

in [text][] that is [included in the accessibility tree][] or included in the [accessible name][] or [accessible description][] of the test target.

## Assumptions

_There are currently no assumptions._

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

### Bibliography

- [Understanding Success Criterion 3.3.1: Error Identification](https://www.w3.org/WAI/WCAG21/Understanding/error-identification)
- [G84: Providing a text description when the user provides information that is not in the list of allowed values](https://www.w3.org/WAI/WCAG21/Techniques/general/G84)
- [G85: Providing a text description when user input falls outside the required format or values](https://www.w3.org/WAI/WCAG21/Techniques/general/G85)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details><summary>3.3.1 Error Identification (Level A)</summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#error-identification">Learn more about 3.3.1 Error Identification</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level A and higher.</li>
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
- [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)
- [Language](https://www.w3.org/TR/act-rules-aspects/#input-aspects-text)

## Test Cases

### Passed

#### Passed Example 1

This `input` element has a [form field error indicator][] that identifies it (by referencing its label), describes the cause of the error and how to resolve it.

```html
<form>
	<label for="age">Age (years)</label>
	<input type="number" id="age" aria-describedby="error" value="0" />
	<span id="error">Invalid value for age. Age must be at least 1.</span><br />
	<input type="button" value="Submit" />
</form>
```

#### Passed Example 2

This multiple `input` elements share a [form field error indicator][] that identifies the elements unfilled (by referencing their labels), describes the cause of the error and how to resolve it.

```html
<form>
	<h2 id="error">
		Name and color cannot be left unfilled. Please complete all required fields.
	</h2>
	<fieldset>
		<legend>Your data</legend>
		<label for="name">Name (required)</label>
		<input type="text" id="name" required />
		<br />
		<label for="address">Address</label>
		<input type="text" id="address" />
	</fieldset>
	<fieldset>
		<legend>Pick a color (required)</legend>
		<label><input type="radio" name="color" value="blue" required />Blue</label>
		<label><input type="radio" name="color" value="yellow" />Yellow</label>
	</fieldset>
	<input type="button" value="Submit" aria-describedby="error" />
</form>
```

#### Passed Example 3

This `input` element does not have a [form field error indicator][].

```html
<form>
	<label for="age">Age (years)</label>
	<input type="number" id="age" />
	<input type="button" value="Submit" />
</form>
```

### Failed

#### Failed Example 1

These multiple `input` elements share a [form field error indicator][] but its message does not identify the elements that caused the error nor describes the cause of the error.

```html
<form>
	<div id="error">Please fill the field correctly.</div>
	<label for="age">Age (years)</label>
	<input type="number" id="age" />
	<label for="name">Name</label>
	<input type="text" id="name" />
	<input type="button" value="Submit" />
</form>
```

#### Failed Example 2

This `input` element has a [form field error indicator][] but its message does not describe the cause of the error.

```html
<form>
	<label for="age">Age (years)</label>
	<input type="number" id="age" />
	<span id="error">Please enter a correct age.</span><br />
	<input type="button" value="Submit" />
</form>
```

#### Failed Example 3

This `input` element has a [form field error indicator][] that identifies it (by referencing its label) and describes the cause of the error but the message is not [visible][].

```html
<form>
	<label for="age">Age (years)</label>
	<input type="number" id="age" value="0" />
	<span id="error" style="display: none;">Invalid value for age. Age must be at least 1.</span><br />
	<input type="button" value="Submit" aria-describedby="error" />
</form>
```

#### Failed Example 4

This `input` element has a [form field error indicator][] that identifies it (by referencing its label) and describes the cause of the error but the message is not [included in the accessibility tree][].

```html
<form>
	<label for="age">Age (years)</label>
	<input type="number" id="age" value="0" />
	<span id="error" aria-hidden="true">Invalid value for age. Age must be at least 1.</span><br />
	<input type="button" value="Submit" />
</form>
```

#### Failed Example 5

These multiple `input` elements share a [form field error indicator][]. The message describes the cause of the error but does not allow to identify the elements that caused the error because the same label is used in different `fieldset`s.

```html
<form>
	<fieldset>
		<legend>Shipping</legend>
		<label for="shippingName">Name</label>
		<input type="text" id="shippingName" required />
		<label for="shippingAddress">Address</label>
		<input type="text" id="shippingAddress" required />
	</fieldset>
	<fieldset>
		<legend>Billing</legend>
		<label for="billingName">Name</label>
		<input type="text" id="billingName" />
		<label for="billingAddress">Address</label>
		<input type="text" id="billingAddress" />
	</fieldset>
	<span id="error">All required fields must be filled.<br />Please fill Name.<br />Please fill Address</span><br />
	<input type="button" value="Submit" />
</form>
```

### Inapplicable

#### Inapplicable Example 1

There are no elements with any of the required [semantic roles][semantic role].

```html
<p>This is a paragraph.</p>
```

## Glossary

### Accessible Name {#accessible-name}

The _accessible name_ is the programmatically determined name of a user interface element that is [included in the accessibility tree](#included-in-the-accessibility-tree).

The accessible name is calculated using the [accessible name and description computation][].

For native markup languages, such as HTML and SVG, additional information on how to calculate the accessible name can be found in [HTML Accessibility API Mappings 1.0, Accessible Name and Description Computation (working draft)](https://www.w3.org/TR/html-aam/#accessible-name-and-description-computation) and [SVG Accessibility API Mappings, Name and Description (working draft)](https://www.w3.org/TR/svg-aam/#mapping_additional).

For more details, see [examples of accessible name][].

**Note:** As per the [accessible name and description computation][], each element always has an accessible name. When no accessible name is provided, the element will nonetheless be assigned an empty (`""`) one.

**Note:** As per the [accessible name and description computation][], accessible names are [flat string](https://www.w3.org/TR/accname-1.1/#terminology) trimmed of leading and trailing whitespace. Notably, it is not possible for a non-empty accessible name to be composed only of whitespace since these must be trimmed.

### Explicit Semantic Role {#explicit-role}

The _explicit semantic role_ of an element is determined by its [role attribute][] (if any).

The [role attribute][] takes a list of tokens. The explicit semantic role is the first valid role in this list. The valid roles are all non-abstract roles from [WAI-ARIA Specifications][]. If the element has no [role attribute][], or if it has one with no valid role, then this element has no explicit semantic role.

Other roles may be added as they become available. Not all roles will be supported in all assistive technologies. Testers are encouraged to adjust which roles are allowed according to the [accessibility support base line][]. For the purposes of executing test cases in all rules, it should be assumed that all roles are supported by assistive technologies so that none of the roles fail due to lack of accessibility support.

### Focusable {#focusable}

Elements that can become the target of keyboard input as described in the [HTML](https://www.w3.org/TR/html) specification of [focusable](https://html.spec.whatwg.org/#focusable-area) and [can be focused](https://html.spec.whatwg.org/#specially-focusable).

### Form Field Error Indicator {#form-field-error-indicator}

Any [text][], or [non-text content][], or an element that has [presentation][] indicating that an error was identified which appears to be related to some user input into, or the lack of user input into some element. These could be different types of errors, for example:

- missing input, for example a required form field that was left empty
- incorrect input, such as an invalid password
- input not in an expected format, expected range, or of an allowed value
- timing error, such as session timeouts or expiration of an allowed action
- authentication or authorization errors

**Note**: An error indicator can be a separate element in the page, but it can also be part of a form control. For example a red outline on a form control is often used to indicate an error. Not all red outlines are indicators of an error though. This depends on the presentation of the form control in relation to other elements on the page.

### Implicit Semantic Role {#implicit-role}

The _implicit semantic role_ of an element is a pre-defined value given by the host language which depends on the element and its ancestors.

Implicit roles for HTML and SVG, are documented in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/#html-element-role-mappings) and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/#mapping_role_table).

### Included in the accessibility tree {#included-in-the-accessibility-tree}

Elements included in the accessibility tree of platform specific accessibility APIs are exposed to assistive technologies. This allows users of assistive technology to access the elements in a way that meets the requirements of the individual user.

The general rules for when elements are included in the accessibility tree are defined in the [core accessibility API mappings](https://www.w3.org/TR/core-aam/). For native markup languages, such as HTML and SVG, additional rules for when elements are included in the accessibility tree can be found in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/) and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/).

For more details, see [examples of included in the accessibility tree][].

[Programmatically hidden](#programmatically-hidden) elements are removed from the accessibility tree. However, some browsers will leave [focusable](#focusable) elements with an `aria-hidden` attribute set to `true` in the accessibility tree. Because they are hidden, these elements are considered **not** included in the accessibility tree. This may cause confusion for users of assistive technologies because they may still be able to interact with these focusable elements using sequential keyboard navigation, even though the element should not be included in the accessibility tree.

### Marked as decorative {#marked-as-decorative}

An element is _marked as decorative_ if one or more of the following conditions is true:

- it has an [explicit role][] of `none` or `presentation`; or
- it is an `img` element with an `alt` attribute whose value is the empty string (`alt=""`), and with no [explicit role][].

Elements are marked as decorative as a way to convey the intention of the author that they are [pure decoration][]. It is different from the element actually being [pure decoration][] as authors may make mistakes. It is different from the element being effectively ignored by assistive technologies as rules such as [presentational roles conflict resolution][] may overwrite this intention.

Elements can also be ignored by assistive technologies if they are [programmatically hidden][]. This is different from marking the element as decorative and does not convey the same intention. Notably, being [programmatically hidden][] may change as users interact with the page (showing and hiding elements) while being marked as decorative should stay the same through all states of the page.

### Namespaced Element {#namespaced-element}

An [element][] with a specific [namespaceURI][] value from [HTML namespaces][]. For example an "SVG element" is any element with the "SVG namespace", which is `http://www.w3.org/2000/svg`.

Namespaced elements are not limited to elements described in a specification. They also include custom elements. Elements such as `a` and `title` have a different namespace depending on where they are used. For example a `title` in an HTML page usually has the HTML namespace. When used in an `svg` element, a `title` element has the SVG namespace instead.

### Outcome {#outcome}

An _outcome_ is a conclusion that comes from evaluating an ACT Rule on a [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) or one of its constituent [test target](https://www.w3.org/TR/act-rules-format/#test-target). An outcome can be one of the three following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) meets all expectations
- **Failed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) does not meet all expectations

**Note:** A rule has one `passed` or `failed` outcome for every [test target](https://www.w3.org/TR/act-rules-format/#test-target). When there are no test targets the rule has one `inapplicable` outcome. This means that each [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) will have one or more outcomes.

**Note:** Implementations using the [EARL10-Schema](https://www.w3.org/TR/EARL10-Schema/) can express the outcome with the [outcome property](https://www.w3.org/TR/EARL10-Schema/#outcome). In addition to `passed`, `failed` and `inapplicable`, EARL 1.0 also defined an `incomplete` outcome. While this cannot be the outcome of an ACT Rule when applied in its entirety, it often happens that rules are only partially evaluated. For example, when applicability was automated, but the expectations have to be evaluated manually. Such "interim" results can be expressed with the `incomplete` outcome.

### Programmatically Hidden {#programmatically-hidden}

An HTML element is _programmatically hidden_ if either it has a [computed][] CSS property `visibility` whose value is not `visible`; or at least one of the following is true for any of its [inclusive ancestors][] in the [flat tree][]:

- has a `hidden` attribute; or
- has a [computed][] CSS property `display` of `none`; or
- has an `aria-hidden` attribute set to `true`

**Note**: Contrarily to the other conditions, the `visibility` CSS property may be reverted by descendants.

### Semantic Role {#semantic-role}

The _semantic role_ of an element is determined by the first of these cases that applies:

1. **Conflict** If the element is [marked as decorative][], but the element is [included in the accessibility tree][]; or would be [included in the accessibility tree][] when it is not [programmatically hidden][], then its _semantic role_ is its **[implicit role][]**.
1. **Explicit** If the element has an [explicit role][], then its _semantic role_ is its [explicit role][].
1. **Implicit** The _semantic role_ of the element is its [implicit role][].

This definition can be used in expressions such as "semantic `button`" meaning any element with a semantic role of `button`.

### Visible {#visible}

Content perceivable through sight.

Content is considered _visible_ if making it fully transparent would result in a difference in the pixels rendered for any part of the document that is currently within the viewport or can be brought into the viewport via scrolling.

[Content is defined in WCAG](https://www.w3.org/TR/WCAG21/#dfn-content).

For more details, see [examples of visible](https://act-rules.github.io/pages/examples/visible/).

### WAI-ARIA specifications {#wai-aria-specifications}

The _WAI ARIA Specifications_ group both the WAI ARIA W3C Recommendation and ARIA modules, namely:

- [Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria-1.1/)
- [WAI-ARIA Graphics Module 1.0](https://www.w3.org/TR/graphics-aria-1.0/)
- [Digital Publishing WAI-ARIA Module 1.0](https://www.w3.org/TR/dpub-aria-1.0/)

**Note:** depending on the type of content being evaluated, part of the specifications might be irrelevant and should be ignored.

{% include_relative implementations/36b590.md %}

## Changelog

This is the first version of this ACT rule.

[abstract]: https://www.w3.org/TR/wai-aria/#abstract_roles
[accessibility support base line]: https://www.w3.org/TR/WCAG-EM/#step1c 'Definition of accessibility support base line'
[accessible description]: https://www.w3.org/TR/accname/#dfn-accessible-description
[accessible name and description computation]: https://www.w3.org/TR/accname 'Accessible Name and Description Computation'
[accessible name]: #accessible-name 'Definition of accessible name'
[aria 1.1]: https://www.w3.org/TR/wai-aria-1.1/
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[examples of accessible name]: https://act-rules.github.io/pages/examples/accessible-name/
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[explicit role]: #explicit-role 'Definition of Explicit Role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focusable]: #focusable 'Definition of Focusable'
[form field error indicator]: #form-field-error-indicator
[html element]: #namespaced-element
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[implicit role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as Decorative'
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
[non-text content]: https://www.w3.org/TR/WCAG21/#dfn-non-text-content
[presentation]: https://www.w3.org/TR/WCAG21/#dfn-presentation
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[programmatically hidden]: #programmatically-hidden 'Definition of Programmatically Hidden'
[pure decoration]: https://www.w3.org/TR/WCAG21/#dfn-pure-decoration 'WCAG definition of Pure Decoration'
[required context]: https://www.w3.org/TR/wai-aria/#scope
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[semantic role]: #semantic-role 'Definition of semantic role'
[text]: https://www.w3.org/TR/WCAG21/#dfn-text
[visible]: #visible 'Definition of visible'
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
