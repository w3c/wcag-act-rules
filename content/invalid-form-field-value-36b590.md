---
title: "Error message describes invalid form field value"
permalink: /standards-guidelines/act/rules/invalid-form-field-value-36b590/
ref: /standards-guidelines/act/rules/invalid-form-field-value-36b590/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/invalid-form-field-value-36b590.md
# footer: > # Text in footer in HTML
#   <p> This is the text in the footer </p>
---

{% include_relative _proposed-banner.html %}

Rule Type:
:   atomic

Rule ID:
:   36b590

Last Modified:
:   Jun 14, 2021

Accessibility Requirements Mapping:
:   [3.3.1 Error Identification (Level A)](https://www.w3.org/TR/WCAG21/#error-identification)
    - **Required for conformance** to WCAG 2.0 and later on level A and higher
    - [Outcome](#outcome) mapping:
        - Any `failed` outcomes: success criterion is not satisfied
        - All `passed` outcomes: success criterion needs further testing
        - An `inapplicable` outcome: success criterion needs further testing

Input Aspects:
:   [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)
:   [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)
:   [Language](https://www.w3.org/TR/act-rules-aspects/#input-aspects-text)

## Description

This rule checks that text error messages provided when the user completes a form field with invalid values or using an invalid format, identify the cause of the error or how to fix the error.

## Applicability

This rule applies to each HTML element that has one of the following [semantic roles][semantic role]:

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

- [Understanding Success Criterion 3.3.1: Error Identification](https://www.w3.org/WAI/WCAG21/Understanding/error-identification)
- [G84: Providing a text description when the user provides information that is not in the list of allowed values](https://www.w3.org/WAI/WCAG21/Techniques/general/G84)
- [G85: Providing a text description when user input falls outside the required format or values](https://www.w3.org/WAI/WCAG21/Techniques/general/G85)

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

{% include_relative glossary/accessible-name.md %}
{% include_relative glossary/explicit-role.md %}
{% include_relative glossary/focusable.md %}
{% include_relative glossary/form-field-error-indicator.md %}
{% include_relative glossary/hidden-state.md %}
{% include_relative glossary/implicit-role.md %}
{% include_relative glossary/included-in-the-accessibility-tree.md %}
{% include_relative glossary/marked-as-decorative.md %}
{% include_relative glossary/outcome.md %}
{% include_relative glossary/semantic-role.md %}
{% include_relative glossary/visible.md %}
{% include_relative glossary/wai-aria-specifications.md %}

## Acknowledgements

This rule was written in the [ACT Rules community group](https://w3.org/community/act-r/), 
with the support of the EU-funded [WAI-Tools Project](https://www.w3.org/WAI/about/projects/wai-tools/).

### Authors

- [Carlos Duarte](https://github.com/carlosapaduarte)
- [João Vicente](https://github.com/joao-vicente)
- [Wilco Fiers](https://github.com/wilcofiers)

## Changelog

This is the first version of this ACT rule.

[abstract]: https://www.w3.org/TR/wai-aria/#abstract_roles
[accessible description]: https://www.w3.org/TR/accname/#dfn-accessible-description
[accessible name]: #accessible-name 'Definition of accessible name'
[aria 1.1]: https://www.w3.org/TR/wai-aria-1.1/
[form field error indicator]: #form-field-error-indicator
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[non-text content]: https://www.w3.org/TR/WCAG21/#dfn-non-text-content
[presentation]: https://www.w3.org/TR/WCAG21/#dfn-presentation
[required context]: https://www.w3.org/TR/wai-aria/#scope
[semantic role]: #semantic-role 'Definition of semantic role'
[text]: https://www.w3.org/TR/WCAG21/#dfn-text
[visible]: #visible 'Definition of visible'
