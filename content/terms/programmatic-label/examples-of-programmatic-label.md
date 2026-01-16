---
layout: standalone_resource
title: Examples of Programmatic label
permalink: /standards-guidelines/act/rules/terms/programmatic-label/examples/
ref: /standards-guidelines/act/rules/terms/programmatic-label/examples/
lang: en
type_of_guidance: ""
footer: ""
github:
  repository: w3c/wcag-act-rules
  path: content/terms/programmatic-label/examples-of-programmatic-label.md
footer:
  <p>ACT Rules are developed by the <a href="https://www.w3.org/community/act-r/">ACT Rules Community Group</a> and the <a href="https://www.w3.org/groups/tf/wcag-act">Accessibility Conformance Testing (ACT) Task Force</a> of the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>). ACT Rules work was part of the <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>, <a href="https://www.w3.org/WAI/about/projects/wai-guide/">WAI-Guide Project</a>, and <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>, co-funded by the European Commission.</p>  
---

These are examples of the [Programmatic label][] definition. The examples presented here are non-normative and not testable. They serve to illustrate some common pitfalls about the definition and to help implementers of ACT rules understand it.

## Implicit labels

The `input` element is a [labeled control][] of the `label` element (implicit label). Therefore the `label` element is a programmatic label of the `input` element.

```html
<label>Full name: <input type="text" name="full_name" /> </label>
```

## Explicit labels

The `input` element is a [labeled control][] of the `label` element (explicit label). Therefore the `label` element is a programmatic label of the `input` element.

```html
<label for="fname">Full name:</label> <input type="text" id="fname" name="full_name" />
```

## Aria-labelledby, single reference

The `span` element is referenced by the `aria-labelledby` attribute on the `input` element. Therefore, the `span` element is a programmatic label of the `input` element.

```html
<span id="label_fname">Full name:</span> <input type="text" name="full_name" aria-labelledby="label_fname" />
```

## Aria-labelledby, multiple references

Both `span` elements are referenced by the `aria-labelledby` attribute on the `input` element. Therefore, each `span` element is a programmatic label of the `input` element.

```html
<span id="billing">Billing</span>
<span id="address">address</span>
<input type="text" name="billing_address" aria-labelledby="billing address" />
```

## Conflicting label methods

The `span` element is referenced by the `aria-labelledby` attribute on the `input` element and the `input` element is a [labeled control][] of the `label`. Therefore, the `span` element and the `label` are each a programmatic label of the `input` element.

```html
<span id="label_fname">Full name:</span>
<label>Full name: <input type="text" name="full_name" aria-labelledby="label_fname"/></label>
```

## Invalid label `for` attribute

The `div` element is not [labelable][]. Therefore, it is not a [labeled control][] for the `label` element and the `label` element is **not** a programmatic label for the `div` element.

```html
<label for="bond">Full name</label>
<div id="bond">My name is Bond. James Bond.</div>
```

## aria-labelledby on div

The `span` element is referenced by the `aria-labelledby` attribute on the `div` element. Therefore, the `span` element is a programmatic label of the `div` element. Note that the `aria-labelledby` attribute works on any element, not just on the [labelable][] elements.

```html
<span id="label_fname">Full name:</span>
<div aria-labelledby="label_fname">My name is Bond. James Bond.</div>
```

## Glossary

### Programmatic label {#programmatic-label}

Element L is a _programmatic label_ of target element T if either:

- T is a [labeled control][] of L; or
- L is referenced by ID in the `aria-labelledby` attribute of T.

**Note**: a given element may have more than one programmatic label.

[programmatic label]: /glossary/#programmatic-label
[labelable]: https://html.spec.whatwg.org/multipage/forms.html#category-label 'Definition of labelable elements'
[labeled control]: https://html.spec.whatwg.org/multipage/forms.html#labeled-control 'Definition of labeled control'
