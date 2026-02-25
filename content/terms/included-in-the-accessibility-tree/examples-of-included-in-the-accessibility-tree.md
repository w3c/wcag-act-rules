---
layout: standalone_resource
title: Examples of Included in the accessibility tree
permalink: /standards-guidelines/act/rules/terms/included-in-the-accessibility-tree/examples/
ref: /standards-guidelines/act/rules/terms/included-in-the-accessibility-tree/examples/
lang: en
type_of_guidance: ""
footer: ""
github:
  repository: w3c/wcag-act-rules
  path: content/terms/included-in-the-accessibility-tree/examples-of-included-in-the-accessibility-tree.md
footer:
  <p>ACT Rules are developed by the <a href="https://www.w3.org/community/act-r/">ACT Rules Community Group</a> and the <a href="https://www.w3.org/groups/tf/wcag-act">Accessibility Conformance Testing (ACT) Task Force</a> of the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>). ACT Rules work was part of the <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>, <a href="https://www.w3.org/WAI/about/projects/wai-guide/">WAI-Guide Project</a>, and <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>, co-funded by the European Commission.</p>  
---

These are examples of the [Included in the accessibility tree][] definition. The examples presented here are non-normative and not testable. They serve to illustrate some common pitfalls about the definition and to help implementers of ACT rules understand it.

## Default inclusion

This `h3` element is included in the accessibility tree (by default, elements are included in the accessibility tree).

```html
<h3>ACT rules</h3>
```

## Removed with CSS display

This `h3` element is not included in the accessibility tree because it is hidden to everybody by the CSS property.

```html
<h3 style="display:none">ACT rules</h3>
```

## Removed with aria-hidden

This `h3` element is not included in the accessibility tree because it is explicitly removed by the `aria-hidden` attribute.

```html
<h3 aria-hidden="true">ACT rules</h3>
```

## Included but off screen

This `h3` element is positioned off screen, hence is not [visible][], but is nonetheless included in the accessibility tree.

```html
<h3 style="position: absolute; top:-9999em">ACT rules</h3>
```

## Removed but not ignored

Although this `h2` element with an `id` of "label" is not itself included in the accessibility tree, it still provides an [accessible name][] to the `h3` via the `aria-labelledby` attribute. Thus, it is still indirectly exposed to users of assistive technologies. Removing an element from the accessibility tree is not enough to remove all accessibility concerns from it since it can still be indirectly exposed.

```html
<h2 id="label" style="display:none">ACT rules</h2>
<h3 aria-labelledby="label">Accessibility Conformance Testing rules</h3>
```

## Removed but focusable

Although this `input` element is not included in the accessibility tree, it is still [focusable][], hence users of assistive technologies can still interact with it by sequential keyboard navigation. This may result in confusing situations for such users (and is in direct violation of [the fourth rule of ARIA (working draft)](https://www.w3.org/TR/using-aria/#fourth)).

```html
<span aria-hidden="true">
	<input type="text" name="fname" />
</span>
```

## Glossary

### Accessible name {#accessible-name}

The _accessible name_ is the programmatically determined name of a user interface element that is [included in the accessibility tree](#included-in-the-accessibility-tree).

The accessible name is calculated using the [accessible name and description computation][].

For native markup languages, such as HTML and SVG, additional information on how to calculate the accessible name can be found in [HTML Accessibility API Mappings 1.0, Accessible Name and Description Computation (working draft)](https://www.w3.org/TR/html-aam/#accessible-name-and-description-computation) and [SVG Accessibility API Mappings, Name and Description (working draft)](https://www.w3.org/TR/svg-aam/#mapping_additional).

**Note:** As per the [accessible name and description computation][], each element always has an accessible name. When no accessible name is provided, the element will nonetheless be assigned an empty (`""`) one.

**Note:** As per the [accessible name and description computation][], accessible names are [flat string](https://www.w3.org/TR/accname-1.1/#terminology) trimmed of leading and trailing whitespace. Notably, it is not possible for a non-empty accessible name to be composed only of whitespace since these must be trimmed.

### Focusable {#focusable}

An element is _focusable_ if one or both of the following are true:

- the element is part of [sequential focus navigation][]; or
- the element has a [tabindex value][] that is not null.

**Exception**: Elements that lose focus and do not regain focus during a period of up to 1 second after gaining focus, without the user interacting with the page the element is on, are not considered _focusable_.

Notes:

- The 1 second time span is an arbitrary limit which is not included in WCAG. Given that scripts can manage the focus state of elements, testing the focusability of an element consistently would be impractical without a time limit.
- The [tabindex value][] of an element is the value of the [tabindex attribute][] parsed using the [rules for parsing integers][]. For the [tabindex value][] to be different from null, it needs to be [parsed][rules for parsing integers] without errors.

### Visible {#visible}

Content perceivable through sight.

Content is considered _visible_ if making it fully transparent would result in a difference in the pixels rendered for any part of the document that is currently within the viewport or can be brought into the viewport via scrolling.

[accessible name]: #accessible-name
[focusable]: #focusable
[included in the accessibility tree]: https://act-rules.github.io/glossary/#included-in-the-accessibility-tree
[visible]: #visible
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers