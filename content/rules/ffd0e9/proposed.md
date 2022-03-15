---
title: "Heading has non-empty accessible name"
permalink: /standards-guidelines/act/rules/ffd0e9/proposed/
ref: /standards-guidelines/act/rules/ffd0e9/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/ffd0e9/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> ffd0e9</p>
  <p><strong>Date:</strong> Updated 15 March 2022</p>
  <p><strong>Authors:</strong> <a href="https://github.com/Jym77">Jean-Yves Moyen</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: ffd0e9
  name: "Heading has non-empty accessible name"
  rule_type: atomic
  description: |
    This rule checks that each heading has a non-empty accessible name.
  last_modified: 15 March 2022
  scs_tested:
    - handle: Info and Relationships
      num: 1.3.1
      level: A
---

## Applicability

This rule applies to any [HTML element][] that is a [semantic][semantic role] `heading`, [included in the accessibility tree][].

## Expectation

Each test target has a non-empty (`""`) [accessible name][].

## Assumptions

_There are currently no assumptions._

## Accessibility Support

- Some assistive technologies may hide headings with empty [accessible name][] from the users. This depends on the user agent, on how the [accessible name][] was computed (the [accessible name and description computation][] is not clear concerning which characters should be trimmed), and on the assistive technology itself. Hence, there are cases where the outcome of this rule is _failed_, but users of certain assistive technology and browser combinations will not experience an issue.

- Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some [semantic][semantic role] `heading` elements can fail this rule with some technology but users of other technologies would not experience any accessibility issue because the same elements would have a [semantic role][] of `presentation` and be hidden for these users.

- The [accessible name and description computation][] suggests that if an `aria-labelledby` attribute refers to an existing but empty element, the computation should stop and return an empty name without defaulting to the next steps. Several user agents and assistive technologies chose to use the next step in the computation in this case (ultimately defaulting to the content).

## Background

Completely empty headings (e.g., `<h1></h1>`) seem to be consistently ignored by assistive technologies. However, they fail [Technique H42: Using h1-h6 to identify headings][tech h42] (by using heading markup for content which is not heading). Moreover, they may be rendered on screen (by breaking flow content, or because of custom styling), thus causing concerns for sighted users. Therefore, this rule also fails on these.

### Bibliography

- [Understanding Success Criterion 1.3.1: Info and Relationships][usc131]
- [Technique H42: Using h1-h6 to identify headings][tech h42]

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>1.3.1 Info and Relationships (Level A)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#info-and-relationships">Learn more about 1.3.1 Info and Relationships</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level A and higher.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>H42: Using h1-h6 to identify headings</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H42">Learn more about technique H42</a></li>
      <li>Not required for conformance to any W3C accessibility recommendation.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: technique is not satisfied</li>
        <li>All <code>passed</code> outcomes: technique needs further testing</li>
        <li>An <code>inapplicable</code> outcome: technique needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
</ul>

## Input Aspects

The following aspects are required in using this rule.

- [Accessibility Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-accessibility)
- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)
- [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)

## Test Cases

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" href="/content-assets/wcag-act-rules/testcases/ffd0e9/0ac909cfd0a0200a97cca3107011fe1e1c08ecc8.html">Open in a new tab</a>

This `h1` element has a non-empty [accessible name][].

```html
<h1>ACT rules</h1>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" href="/content-assets/wcag-act-rules/testcases/ffd0e9/73050f33875bf32ae13733b96d0408b6b255e4a1.html">Open in a new tab</a>

This `div` element with a [semantic role][] of `heading` has a non-empty [accessible name][].

```html
<div role="heading" aria-level="1">ACT rules</div>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" href="/content-assets/wcag-act-rules/testcases/ffd0e9/f55422cabb0efc3a6491733c849306bfea1b1c9c.html">Open in a new tab</a>

This `h1` element has a non-empty [accessible name][] given by its `aria-labelledby` attribute.

```html
<span id="h-name" hidden>ACT rules</span>
<h1 aria-labelledby="h-name">Learn about ACT rules</h1>
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" href="/content-assets/wcag-act-rules/testcases/ffd0e9/bd1a62830ac1d9800078f26866da433781f9c85f.html">Open in a new tab</a>

This `h1` element has a non-empty [accessible name][] given by the `alt` attribute of its content.

```html
<h1><img src="/test-assets/shared/act-logo.png" alt="ACT rules" /></h1>
```

#### Passed Example 5

<a class="example-link" title="Passed Example 5" href="/content-assets/wcag-act-rules/testcases/ffd0e9/e62fd17ec8a90b871727e871d5136fc785ca13ad.html">Open in a new tab</a>

This `h1` element is not [visible][], but is still [included in the accessibility tree][]. It has a non-empty [accessible name][].

```html
<h1 style="position: absolute; top: -9999px">ACT rules</h1>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" href="/content-assets/wcag-act-rules/testcases/ffd0e9/5655cd127e7f8e1e9306b1858e2bc018392564b3.html">Open in a new tab</a>

This `h1` element has an empty [accessible name][] because its content is not exposed to assistive technologies.

```html
<h1><img src="/test-assets/shared/act-logo.png" alt="" /></h1>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" href="/content-assets/wcag-act-rules/testcases/ffd0e9/d37f6335303b2a57c3f81d1d602287952f27ab8e.html">Open in a new tab</a>

This `h1` element has an empty [accessible name][] given by its `aria-label` attribute. Its content is not exposed to assistive technologies, thus preventing the [accessible name][] to default to the content.

```html
<h1 aria-label=""><span aria-hidden="true">ACT rules</span></h1>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" href="/content-assets/wcag-act-rules/testcases/ffd0e9/c01940d4367bd13fca88f88c10c2a97bc243606d.html">Open in a new tab</a>

This `h1` element has an empty [accessible name][] given by its `aria-labelledby` attribute. Its content is not exposed to assistive technologies, thus preventing the [accessible name][] to default to the content.

```html
<span id="h-name" hidden></span>
<h1 aria-labelledby="h-name"><span aria-hidden="true">ACT rules</span></h1>
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" href="/content-assets/wcag-act-rules/testcases/ffd0e9/623ac29716a01c2888ff9bc94bdbca9fd18296e1.html">Open in a new tab</a>

This `h1` element has an empty [accessible name][] because the `img` element has a [semantic role][] of `presentation`, and thus does not provide an [accessible name][] to the `h1` element. Note that the `alt` attribute does not trigger [Presentational Roles Conflict Resolution][] because it is not an ARIA attribute.

```html
<h1><img src="/test-assets/shared/act-logo.png" alt="ACT rules" role="presentation" /></h1>
```

#### Failed Example 5

<a class="example-link" title="Failed Example 5" href="/content-assets/wcag-act-rules/testcases/ffd0e9/cc22b9130f7d1963b38975576e11d035ef44e13c.html">Open in a new tab</a>

This `h1` element has an empty [accessible name][] because the spaces and line break are trimmed by [accessible name computation][accessible name and description computation].

```html
<h1><br /></h1>
```

#### Failed Example 6

<a class="example-link" title="Failed Example 6" href="/content-assets/wcag-act-rules/testcases/ffd0e9/937a207d1054feada41871a2fa88257d1345bda4.html">Open in a new tab</a>

This `h1` element has an empty [accessible name][]. It is nonetheless rendered by breaking the flow content, resulting in a confusing situation for sighted users.

```html
<span>Hello</span>
<h1></h1>
<span>World!</span>
```

#### Failed Example 7

<a class="example-link" title="Failed Example 7" href="/content-assets/wcag-act-rules/testcases/ffd0e9/7c593a17ea2affd0b822f3e66b9e804f00529f0a.html">Open in a new tab</a>

This `div` element with a [semantic role][] of `heading` has an empty [accessible name][] (and content). It is nonetheless rendered due to its styling, resulting in a confusing situation for sighted users.

```html
<div role="heading" aria-level="1" style="border-style: solid"></div>
```

#### Failed Example 8

<a class="example-link" title="Failed Example 8" href="/content-assets/wcag-act-rules/testcases/ffd0e9/0bf7d49ddf99066b816fe42e5cd827a15c7ad24d.html">Open in a new tab</a>

This `h1` element has an [explicit role][] of `none`. However, the [global][] [property][] `aria-label` is specified. Thus it has a [semantic role][] of `heading` due to [Presentational Roles Conflict Resolution][]. It has an empty [accessible name][] given by its `aria-label` attribute and the lack of accessible content to fallback to.

```html
<h1 aria-label="" role="none"><span aria-hidden="true">ACT rules</span></h1>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" href="/content-assets/wcag-act-rules/testcases/ffd0e9/8f610518a287c932742748371cd51d543bb506f9.html">Open in a new tab</a>

There is no [semantic][semantic role] `heading` element.

```html
<div></div>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" href="/content-assets/wcag-act-rules/testcases/ffd0e9/ed1daf488ef94f266fdd2a4c6c4ed016024beb14.html">Open in a new tab</a>

This `h1` element is not [included in the accessibility tree][].

```html
<h1 aria-hidden="true"></h1>
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

An element is _focusable_ if one or both of the following are true:

- the element is part of [sequential focus navigation][]; or
- the element has a [tabindex value][] that is not null.

**Exception**: Elements that lose focus during a period of up to 1 second after gaining focus, without the user interacting with the page the element is on, are not considered _focusable_.

Notes:

- The 1 second time span is an arbitrary limit which is not included in WCAG. Given that scripts can manage the focus state of elements, testing the focusability of an element consistently would be impractical without a time limit.
- The [tabindex value][] of an element is the value of the [tabindex attribute][] parsed using the [rules for parsing integers][]. For the [tabindex value][] to be different from null, it needs to be [parsed][rules for parsing integers] without errors.

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

- has a [computed][] CSS property `display` of `none`; or
- has an `aria-hidden` attribute set to `true`

**Note**: Contrarily to the other conditions, the `visibility` CSS property may be reverted by descendants.

**Note**: The [HTML standard suggests](https://html.spec.whatwg.org/multipage/rendering.html#hidden-elements) rendering elements with the `hidden` attribute with a CSS rule that applies the value `none` to the CSS property `display` of the element. Although the suggestion is not normative, known user agents render it according to the suggestion (unless the content specifies another CSS rule that sets the value of the `display` property). If a user agent does not follow the suggestion, this definition may produce incorrect results for this user agent.

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

{% include_relative _implementation-proposed.md %}

## Changelog

This is the first version of this ACT rule.

[accessibility support base line]: https://www.w3.org/TR/WCAG-EM/#step1c 'Definition of accessibility support base line'
[accessible name and description computation]: https://www.w3.org/TR/accname
[accessible name]: #accessible-name 'Definition of accessible name'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[examples of accessible name]: https://act-rules.github.io/pages/examples/accessible-name/
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[explicit role]: #explicit-role 'Definition of explicit role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focusable]: #focusable 'Definition of Focusable'
[global]: https://www.w3.org/TR/wai-aria-1.1/#global_states 'Definition of Global ARIA States and Properties'
[html element]: #namespaced-element
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[implicit role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as Decorative'
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[programmatically hidden]: #programmatically-hidden 'Definition of Programmatically Hidden'
[property]: https://www.w3.org/TR/wai-aria/#dfn-property 'Definition of ARIA Property'
[pure decoration]: https://www.w3.org/TR/WCAG21/#dfn-pure-decoration 'WCAG definition of Pure Decoration'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[semantic role]: #semantic-role 'Definition of semantic role'
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[tech h42]: https://www.w3.org/WAI/WCAG21/Techniques/html/H42 'Technique H42: Using h1-h6 to identify headings'
[usc131]: https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html 'Understanding Success Criterion 1.3.1: Info and Relationships'
[visible]: #visible 'Definition of visible'
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
