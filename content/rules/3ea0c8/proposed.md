---
title: "id attribute value is unique"
permalink: /standards-guidelines/act/rules/3ea0c8/proposed/
ref: /standards-guidelines/act/rules/3ea0c8/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/3ea0c8/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> 3ea0c8</p>
  <p><strong>Date:</strong> Updated 15 March 2022</p>
  <p><strong>Authors:</strong> <a href="https://github.com/annethyme">Anne Thyme Nørregaard</a>, <a href="https://github.com/brynanders">Bryn Anderson</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: 3ea0c8
  name: "`id` attribute value is unique"
  rule_type: atomic
  description: |
    This rule checks that all `id` attribute values on a single page are unique.
  last_modified: 15 March 2022
  scs_tested:
    - handle: Parsing
      num: 4.1.1
      level: A
---

## Applicability

This rule applies to any `id` attribute whose value is not an empty string (`""`), specified on a [HTML or SVG element][].

**Note:** Elements that are neither [included in the accessibility tree][] nor [visible][] are still considered for this rule.

## Expectation

The value of the attribute is unique across all other `id` attributes specified on [HTML or SVG elements][html or svg element] that exist within the same [document tree](https://dom.spec.whatwg.org/#document-trees) or [shadow tree](https://dom.spec.whatwg.org/#shadow-trees) as the element on which the applicable `id` attribute is specified.

## Assumptions

_There are currently no assumptions._

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

### Bibliography

- [Understanding Success Criterion 4.1.1: Parsing](https://www.w3.org/WAI/WCAG21/Understanding/parsing)
- [H93: Ensuring that id attributes are unique on a Web page](https://www.w3.org/WAI/WCAG21/Techniques/html/H93)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>4.1.1 Parsing (Level A)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#parsing">Learn more about 4.1.1 Parsing</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level A and higher.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>H93: Ensuring that id attributes are unique on a Web page</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H93">Learn more about technique H93</a></li>
      <li>Not required for conformance to any W3C accessibility recommendation.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: technique is not satisfied</li>
        <li>All <code>passed</code> outcomes: technique is satisfied</li>
        <li>An <code>inapplicable</code> outcome: technique is satisfied</li>
      </ul></li>
    </ul>
  </details></li>
</ul>

## Input Aspects

The following aspects are required in using this rule.

- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)

## Test Cases

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" href="/content-assets/wcag-act-rules/testcases/3ea0c8/4ef5ade1eef2acf1f18958afa7e30499c4d6a21e.html">Open in a new tab</a>

There is only one `id` attribute within the document context.

```html
<div id="my-div">This is my first element</div>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" href="/content-assets/wcag-act-rules/testcases/3ea0c8/0dd7b6f5b1643b9445ac9d6cfe15a8a288c642d7.html">Open in a new tab</a>

All `id` attributes are unique within the document context.

```html
<div id="my-div1">This is my first element</div>
<div id="my-div2">This is my second element</div>
<svg id="my-div3">This is my third element</svg>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" href="/content-assets/wcag-act-rules/testcases/3ea0c8/506213ce24435d4548e742b4b37c3e133675d2fb.html">Open in a new tab</a>

Two of the `id` attributes are the same (`my-elt`), but they are in different trees (the first one in the [document tree](https://dom.spec.whatwg.org/#document-trees) and the second in the [shadow tree](https://dom.spec.whatwg.org/#shadow-trees)).

```html
<div id="my-elt"></div>
<div id="host"></div>
<script>
	var host = document.getElementById('host')
	var shadow = host.attachShadow({ mode: 'open' })
	shadow.innerHTML = '<b id="my-elt"></b>'
</script>
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" href="/content-assets/wcag-act-rules/testcases/3ea0c8/4ff699b4bf035b12c5b89ce9369027d9b48bf5b2.html">Open in a new tab</a>

Both `id` attributes are the same (`my-elt`), but they are in different [document trees](https://dom.spec.whatwg.org/#document-trees) because the `iframe` is creating a new one.

```html
<div id="my-elt"></div>
<iframe title="Empty frame" srcdoc="<span id='my-elt'></span>"></iframe>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" href="/content-assets/wcag-act-rules/testcases/3ea0c8/fd85a9469f647cbe3587d80e41efb9cdf833bfb9.html">Open in a new tab</a>

The `id` attribute `label` is not unique among all `id` attributes in the document, resulting in a wrong [programmatic label][] on the input field.

```html
<div id="label">Name</div>
<div id="label">City</div>

<input aria-labelledby="label" type="text" name="city" />
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" href="/content-assets/wcag-act-rules/testcases/3ea0c8/13fa2fe0f46cfd134956865e23e5120c30977666.html">Open in a new tab</a>

The `id` attribute `label` is not unique among all `id` attributes in the document, resulting in a wrong [programmatic label][] on the input field.

```html
<div id="label">Name</div>
<svg id="label">
	<text x="0" y="15">City</text>
</svg>

<input aria-labelledby="label" type="text" name="city" />
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" href="/content-assets/wcag-act-rules/testcases/3ea0c8/b4aa56c42d630ec9d31acab94afc3c7fa88b8c1a.html">Open in a new tab</a>

The `id` attribute `label` is not unique among all `id` attributes in the document, resulting in a wrong [programmatic label][] on the input field. This rule still considers elements that are neither [included in the accessibility tree][] nor [visible][].

```html
<span id="label" style="display: none;">Name</span>
<span id="label">City</span>

<input aria-labelledby="label" type="text" name="city" />
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" href="/content-assets/wcag-act-rules/testcases/3ea0c8/1999e27d1ba312c320a1f9b457a34440edf4d190.html">Open in a new tab</a>

There is no `id` attribute in this document.

```html
<div>This is my first element</div>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" href="/content-assets/wcag-act-rules/testcases/3ea0c8/bd30d0514cc294ca6604e7f0ef963ef7df386d64.html">Open in a new tab</a>

The `xml:id` attribute is not considered by this rule.

```html
<div xml:id="my-div">This is my first element</div>
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" href="/content-assets/wcag-act-rules/testcases/3ea0c8/2b2101d5ebab1b49c1b0293df1eb625bdbd6f934.html">Open in a new tab</a>

These `id` attributes have an empty value.

```html
<span id="">Hello</span> <span id="">world!</span>
```

## Glossary

### Focusable {#focusable}

An element is _focusable_ if one or both of the following are true:

- the element is part of [sequential focus navigation][]; or
- the element has a [tabindex value][] that is not null.

**Exception**: Elements that lose focus during a period of up to 1 second after gaining focus, without the user interacting with the page the element is on, are not considered _focusable_.

Notes:

- The 1 second time span is an arbitrary limit which is not included in WCAG. Given that scripts can manage the focus state of elements, testing the focusability of an element consistently would be impractical without a time limit.
- The [tabindex value][] of an element is the value of the [tabindex attribute][] parsed using the [rules for parsing integers][]. For the [tabindex value][] to be different from null, it needs to be [parsed][rules for parsing integers] without errors.

### Included in the accessibility tree {#included-in-the-accessibility-tree}

Elements included in the accessibility tree of platform specific accessibility APIs are exposed to assistive technologies. This allows users of assistive technology to access the elements in a way that meets the requirements of the individual user.

The general rules for when elements are included in the accessibility tree are defined in the [core accessibility API mappings](https://www.w3.org/TR/core-aam/). For native markup languages, such as HTML and SVG, additional rules for when elements are included in the accessibility tree can be found in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/) and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/).

For more details, see [examples of included in the accessibility tree][].

[Programmatically hidden](#programmatically-hidden) elements are removed from the accessibility tree. However, some browsers will leave [focusable](#focusable) elements with an `aria-hidden` attribute set to `true` in the accessibility tree. Because they are hidden, these elements are considered **not** included in the accessibility tree. This may cause confusion for users of assistive technologies because they may still be able to interact with these focusable elements using sequential keyboard navigation, even though the element should not be included in the accessibility tree.

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

### Programmatic Label {#programmatic-label}

Element L is a _programmatic label_ of target element T if either:

- T is a [labeled control][] of L; or
- L is referenced by ID in the `aria-labelledby` attribute of T.

For more details, see [examples of programmatic label][].

**Note**: a given element may have more than one programmatic label.

### Programmatically Hidden {#programmatically-hidden}

An HTML element is _programmatically hidden_ if either it has a [computed][] CSS property `visibility` whose value is not `visible`; or at least one of the following is true for any of its [inclusive ancestors][] in the [flat tree][]:

- has a [computed][] CSS property `display` of `none`; or
- has an `aria-hidden` attribute set to `true`

**Note**: Contrarily to the other conditions, the `visibility` CSS property may be reverted by descendants.

**Note**: The [HTML standard suggests](https://html.spec.whatwg.org/multipage/rendering.html#hidden-elements) rendering elements with the `hidden` attribute with a CSS rule that applies the value `none` to the CSS property `display` of the element. Although the suggestion is not normative, known user agents render it according to the suggestion (unless the content specifies another CSS rule that sets the value of the `display` property). If a user agent does not follow the suggestion, this definition may produce incorrect results for this user agent.

### Visible {#visible}

Content perceivable through sight.

Content is considered _visible_ if making it fully transparent would result in a difference in the pixels rendered for any part of the document that is currently within the viewport or can be brought into the viewport via scrolling.

[Content is defined in WCAG](https://www.w3.org/TR/WCAG21/#dfn-content).

For more details, see [examples of visible](https://act-rules.github.io/pages/examples/visible/).

{% include_relative _implementation-proposed.md %}

## Changelog

This is the first version of this ACT rule.

[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[examples of programmatic label]: https://act-rules.github.io/pages/examples/programmatic-label/
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[html or svg element]: #namespaced-element
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[labeled control]: https://html.spec.whatwg.org/multipage/forms.html#labeled-control 'Definition of labeled control'
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
[programmatic label]: #programmatic-label 'Definition of programmatic label'
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[visible]: #visible 'Definition of visible'
