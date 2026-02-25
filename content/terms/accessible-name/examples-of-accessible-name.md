---
layout: standalone_resource
title: Examples of Accessible name
permalink: /standards-guidelines/act/rules/terms/accessible-name/examples/
ref: /standards-guidelines/act/rules/terms/accessible-name/examples/
lang: en
type_of_guidance: ""
footer: ""
github:
  repository: w3c/wcag-act-rules
  path: content/terms/accessible-name/examples-of-accessible-name.md
footer:
  <p>ACT Rules are developed by the <a href="https://www.w3.org/community/act-r/">ACT Rules Community Group</a> and the <a href="https://www.w3.org/groups/tf/wcag-act">Accessibility Conformance Testing (ACT) Task Force</a> of the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>). ACT Rules work was part of the <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>, <a href="https://www.w3.org/WAI/about/projects/wai-guide/">WAI-Guide Project</a>, and <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>, co-funded by the European Commission.</p>  
---

These are examples of the [accessible name][] definition. The examples presented here are non-normative and not testable. They serve to illustrate some common pitfalls about the definition and to help implementers of ACT rules understand it.

## Using aria-labelledby

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

## Using aria-label

This `button` element has an accessible name of "Share ACT rules" given by its `aria-label` attribute.

```html
<button aria-label="Share ACT rules">Share</button>
```

## Using img alt attribute

This `img` element has an accessible name of "ACT rules" given by its `alt` attribute.

```html
<img src="#" alt="ACT rules" />
```

## Using implicit labels

The `button` element has an accessible name of "Share ACT rules" given by the enclosing `label` element (implicit `label`)

```html
<label>Share ACT rules<button>Share</button></label>
```

## Using explicit labels

The `button` element has an accessible name of "Share ACT rules" given by the associated `label` element (explicit `label`)

```html
<label for="act-rules">Share ACT rules</label><button id="act-rules"></button>
```

## Using text content

This `a` element has an accessible name of "ACT rules" given from its content. Note that not all [semantic roles][] allow [name from content](https://www.w3.org/TR/wai-aria/#namefromcontent).

```html
<a href="https://act-rules.github.io/">ACT rules</a>
```

## Not named from content

This `span` element has an empty accessible name (`""`) because `span` does not allow [name from content](https://www.w3.org/TR/wai-aria/#namefromcontent).

```html
<span>ACT rules</span>
```

## Not Labelable elements

This `span` element has an empty accessible name (`""`) because `span` is not a [labelable element](https://html.spec.whatwg.org/#category-label).

```html
<label>ACT rules<span></span></label>
```

**Note:** When the same element can have an accessible name from several sources, the order of precedence is: `aria-labelledby`, `aria-label`, own attributes, `label` element, name from content. The examples here are listed in the same order.

**Note:** For more examples of accessible name computation, including many tricky cases, check the [Accessible Name Testable Statements](https://www.w3.org/wiki/AccName_1.1_Testable_Statements).

## Glossary

### Accessible name {#accessible-name}

The _accessible name_ is the programmatically determined name of a user interface element that is [included in the accessibility tree][].

The accessible name is calculated using the [accessible name and description computation][].

For native markup languages, such as HTML and SVG, additional information on how to calculate the accessible name can be found in [HTML Accessibility API Mappings 1.0, Accessible Name and Description Computation (working draft)](https://www.w3.org/TR/html-aam/#accessible-name-and-description-computation) and [SVG Accessibility API Mappings, Name and Description (working draft)](https://www.w3.org/TR/svg-aam/#mapping_additional).

**Note:** As per the [accessible name and description computation][], each element always has an accessible name. When no accessible name is provided, the element will nonetheless be assigned an empty (`""`) one.

**Note:** As per the [accessible name and description computation][], accessible names are [flat string](https://www.w3.org/TR/accname-1.1/#terminology) trimmed of leading and trailing whitespace. Notably, it is not possible for a non-empty accessible name to be composed only of whitespace since these must be trimmed.

[accessible name]: #accessible-name
[accessible name and description computation]: https://www.w3.org/TR/accname 'Accessible Name and Description Computation'
[examples of accessible name]: https://act-rules.github.io/pages/examples/accessible-name/
[included in the accessibility tree]: https://act-rules.github.io/glossary/#included-in-the-accessibility-tree
[semantic roles]: https://act-rules.github.io/glossary/#semantic-role