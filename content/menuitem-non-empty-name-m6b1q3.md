---
title: "Menuitem has non-empty accessible name"
permalink: /standards-guidelines/act/rules/menuitem-non-empty-name-m6b1q3/
ref: /standards-guidelines/act/rules/menuitem-non-empty-name-m6b1q3/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/menuitem-non-empty-name-m6b1q3.md
# footer: > # Text in footer in HTML
#   <p> This is the text in the footer </p>
---

{% include_relative _proposed-banner.html %}

Rule Type:
:   atomic

Rule ID:
:   m6b1q3

Last Modified:
:   June 3, 2021

Accessibility Requirements Mapping:
:   [4.1.2 Name, Role, Value (Level A)](https://www.w3.org/TR/WCAG21/#name-role-value)
    - **Required for conformance** to WCAG 2.0 and later on level A and higher
    - [Outcome](#outcome) mapping:
        - Any `failed` outcomes: success criterion is not satisfied
        - All `passed` outcomes: success criterion needs further testing
        - An `inapplicable` outcome: success criterion needs further testing

Input Aspects:
:   [Accessibility Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-accessibility)
:   [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)
:   [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)

## Description

This rule checks that each element with a `menuitem` role has a non-empty accessible name.

## Applicability

This rule applies to HTML elements with a `menuitem` [semantic role][] that are [included in the accessibility tree][].

## Expectation

Each target element has an [accessible name][] that is not empty (`""`).

## Assumptions

This rule assumes that all menuitems are [user interface components as defined by WCAG 2](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components). If an element has a role of `menuitem` that would not be perceived as a single control by users, [4.1.2 Name, Role, Value](https://www.w3.org/TR/WCAG21/#name-role-value) would not apply and so failing this rule would not result in a conformance issue.

## Accessibility Support

In some assistive technologies, the `menuitem` role will only be announced in browsing mode. When they receive focus this role is not announced. Additionally, the `title` attribute is not a reliable way to provide an accessible name. Use `aria-label` instead.

Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have a [semantic role][] of `menuitem` and fail this rule with some technology but users of other technologies would not experience any accessibility issue.

## Background

- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value)
- [ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA14)
- [ARIA16: Using aria-labelledby to provide a name for user interface controls](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16)

## Test Cases

### Passed

#### Passed Example 1

This element with the `menuitem` role has an [accessible name][] because of its text content.

```html
<div role="menu">
	<button role="menuitem">New file</button>
</div>
```

#### Passed Example 2

This element with the `menuitem` role has an [accessible name][] because of its `aria-label` attribute.

```html
<div role="menu">
	<button role="menuitem" aria-label="New file">
		<img src="/test-assets/shared/file.svg" alt="" />
	</button>
</div>
```

#### Passed Example 3

This element with the `menuitem` role has an [accessible name][] because its `aria-labelledby` attribute references an element with text content.

```html
<div role="menu">
	<button role="menuitem" aria-labelledby="newfile">
		<img src="/test-assets/shared/file.svg" alt="" />
		<span id="newfile" hidden>New file</span>
	</button>
</div>
```

#### Passed Example 4

This element with the `menuitem` role has an [accessible name][] because of its `title` attribute.

```html
<div role="menu">
	<button role="menuitem" title="New file">
		<img src="/test-assets/shared/file.svg" alt="" />
	</button>
</div>
```

### Failed

#### Failed Example 1

This element with the `menuitem` role has no [accessible name][] because it has no content or attribute that can provide it.

```html
<div role="menu">
	<button role="menuitem">
		<img src="/test-assets/shared/file.svg" alt="" />
	</button>
</div>
```

#### Failed Example 2

This element with the `menuitem` role has no [accessible name][] because it has no content or attribute that can provide it.

```html
<html lang="en">
	<style>
		.offscreen {
			position: absolute;
			left: -9999px;
			top: -9999px;
		}
	</style>
	<div role="menu" class="offscreen">
		<button role="menuitem">
			<img src="/test-assets/shared/file.svg" alt="" />
		</button>
	</div>
</html>
```

### Inapplicable

#### Inapplicable Example 1

The `li` element has a `listitem` [semantic role][], even as a child of a `menu` element.

```html
<menu>
	<li>
		<a href="#">New file</a>
	</li>
</menu>
```

#### Inapplicable Example 2

This element with the `menuitem` role does not need an [accessible name][] because it is not [included in the accessibility tree][].

```html
<div role="menu" hidden>
	<button role="menuitem">
		<img src="/test-assets/shared/file.svg" alt="" />
	</button>
</div>
```

## Glossary

{% include_relative glossary/accessible-name.md %}
{% include_relative glossary/explicit-role.md %}
{% include_relative glossary/focusable.md %}
{% include_relative glossary/hidden-state.md %}
{% include_relative glossary/implicit-role.md %}
{% include_relative glossary/included-in-the-accessibility-tree.md %}
{% include_relative glossary/marked-as-decorative.md %}
{% include_relative glossary/outcome.md %}
{% include_relative glossary/semantic-role.md %}
{% include_relative glossary/wai-aria-specifications.md %}

## Acknowledgements

This rule was written in the [ACT Rules community group](https://w3.org/community/act-r/), 
with the support of the EU-funded [WAI-Tools Project](https://www.w3.org/WAI/about/projects/wai-tools/).

### Authors

- [Wilco Fiers](https://github.com/wilcofiers)

### Assets

- The "file.svg" icon is part of the Feather Icons package, which uses the [MIT license](https://github.com/feathericons/feather/blob/master/LICENSE).

## Changelog

This is the first version of this ACT rule.

[accessible name]: #accessible-name 'Definition of accessible name'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[semantic role]: #semantic-role 'Definition of Semantic Role'
