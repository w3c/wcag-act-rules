---
title: "Role attribute has valid value"
permalink: /standards-guidelines/act/rules/674b10/proposed/
ref: /standards-guidelines/act/rules/674b10/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/674b10/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> 674b10</p>
  <p><strong>Date:</strong> Updated 13 June 2022</p>
  <p><strong>Authors:</strong> <a href="https://github.com/jkodu">Jey Nandakumar</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: 674b10
  name: "Role attribute has valid value"
  rule_type: atomic
  description: |
    This rule checks that each `role` attribute has a valid value.
  last_modified: 13 June 2022
  scs_tested:
    - handle: Info and Relationships
      num: 1.3.1
      level: A
---

## Applicability

This rule applies to any `role` attribute for which all the following are true:

- the attribute has a value that is neither empty ("") nor only [ASCII whitespace][]; and
- the attribute is specified on an [HTML or SVG element][] which is not [programmatically hidden][].

## Expectation

Each test target has at least one token which is a valid value corresponding to a non-abstract role from [WAI-ARIA Specifications][].

## Assumptions

- This rule assumes that the `role` attribute is used to provide an ARIA [semantic role][] to the elements. If it is used for other purposes, this rule shouldn't be used.
- This rule assumes that elements with a `role` attribute have their intended structure and relationship conveyed through some sort of presentation. If it is not the case, it is possible to fail this rule while still satisfying [Success Criterion 1.3.1 Info and Relationship][sc131].
- This rule assumes that the intended role of the element is not its [implicit role][]. If no token is valid, User Agents will default to the [implicit role][] for the element; if that role is the intended one, it is possible to fail this rule but still satisfy [Success Criterion 1.3.1 Info and Relationship][sc131].

## Accessibility Support

Older browsers do not support more than one token in the value for a role attribute. If multiple values are used in the role attribute, the attribute is ignored in these browsers.

## Background

The `role` attribute is a set of [space separated tokens][]. Having a [whitespace](#whitespace) separated list of more than one token in the value of the role attribute is used for what is known as _fallback roles_. If the first token is not accessibility supported (or valid), the next one will be used for determining the [semantic role][] of the element, and so forth. Having the rule target attributes containing at least one non-[ASCII whitespace][] character ensures that there is at least one token in the set.

### Bibliography

- [List of WAI-ARIA Roles][wai-aria role]
- [List of Graphics ARIA Roles](https://www.w3.org/TR/graphics-aria-1.0/#role_definitions)
- [List of DPUB ARIA Roles](https://www.w3.org/TR/dpub-aria-1.0/#role_definitions)
- [Specification of the `role` attribute][role attribute]
- [WAI-ARIA 1.1 Categorization of Roles](https://www.w3.org/TR/wai-aria-1.1/#roles_categorization)
- [WAI-ARIA Roles](https://www.w3.org/TR/wai-aria-1.1/#usage_intro)

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
    <summary><span>ARIA4: Using a WAI-ARIA role to expose the role of a user interface component</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA4">Learn more about technique ARIA4</a></li>
      <li>Not required for conformance to any W3C accessibility recommendation.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: technique is not satisfied</li>
        <li>All <code>passed</code> outcomes: technique needs further testing</li>
        <li>An <code>inapplicable</code> outcome: technique needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>G108: Using markup features to expose the name and role, allow user-settable properties to be directly set, and provide notification of changes</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G108">Learn more about technique G108</a></li>
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

- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)
- [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)

## Test Cases

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/674b10/c181f7267bf9f4fc0f9ad9e2a69c1ad7da504f4d.html">Open in a new tab</a>

This `role` attribute contains one token, and this token is a valid [WAI-ARIA role][].

```html
<label>Search: <input type="text" role="searchbox" placeholder="Enter 3 or more characters"/></label>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/674b10/9980fd3a6f30b20069618708b2c8fa79d444e0a4.html">Open in a new tab</a>

This `role` attribute contains two tokens, and these tokens are both valid [WAI-ARIA roles][wai-aria role].

```html
<style>
	.ref {
		color: #0000ee;
		text-decoration: underline;
		cursor: pointer;
	}
</style>
See [<span class="ref" onclick="location.href='https://act-rules.github.io/'" role="doc-biblioref link">ACT rules</span
>].
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/674b10/8ee31c22ec3fa0bccf46e3f44e9a5d8e752bc776.html">Open in a new tab</a>

This `role` attribute contains two tokens, and one of these tokens (`searchbox`) is a valid [WAI-ARIA role][].

```html
<label>Search: <input type="text" role="searchfield searchbox" placeholder="Enter 3 or more characters"/></label>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/674b10/4b0aaf07c6e9fb6ea3495dd9cecf55d47b9539b8.html">Open in a new tab</a>

This `role` attribute contains one token, but this token is not a valid role in any of the [WAI-ARIA specifications][].

```html
<style>
	.link {
		color: #0000ee;
		text-decoration: underline;
		cursor: pointer;
	}
</style>
I love <span class="link" onclick="location.href='https://act-rules.github.io/'" role="lnik">ACT rules</span>.
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/674b10/527c265ba570f0131dddef3687981b66f6dd156f.html">Open in a new tab</a>

This `role` attribute contains two tokens, but none of these tokens is a valid role in any of the [WAI-ARIA specifications][].

```html
<style>
	.ref {
		color: #0000ee;
		text-decoration: underline;
		cursor: pointer;
	}
</style>
See [<span class="ref" onclick="location.href='https://act-rules.github.io/'" role="bibliographic-reference lnik"
	>ACT rules</span
>].
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/674b10/ebd0080bacb8debc7ad069072240657df38c3e2c.html">Open in a new tab</a>

There is no `role` attribute.

```html
<img src="/test-assets/shared/w3c-logo.png" alt="W3C logo" />
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/674b10/98f200a9611571fd8db46027c8d28616d94083c8.html">Open in a new tab</a>

This `role` attribute has no value.

```html
<div role>Some Content</div>
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/674b10/8f409b57b31bce96b6f256d0fa9cfabcd0b984ca.html">Open in a new tab</a>

This `role` attribute is empty ("").

```html
<div role="">Some Content</div>
```

#### Inapplicable Example 4

<a class="example-link" title="Inapplicable Example 4" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/674b10/0b8e3a6fb2bfd495683f686cf99ea1e46f2074ed.html">Open in a new tab</a>

This `role` attribute is only [ASCII whitespace][].

```html
<input type="text" role=" " />
```

#### Inapplicable Example 5

<a class="example-link" title="Inapplicable Example 5" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/674b10/575a5e323abe810450d5ff443a5fd614dae12257.html">Open in a new tab</a>

This `role` attribute is specified on an element which is [programmatically hidden][].

```html
<div aria-hidden="true" role="banner">Some Content</div>
```

## Glossary

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

**Note**: Contrary to the other conditions, the `visibility` CSS property may be reverted by descendants.

**Note**: The [HTML standard suggests](https://html.spec.whatwg.org/multipage/rendering.html#hidden-elements) setting the CSS `display` property to `none` for elements with the `hidden` attribute. While not required by HTML, all modern browsers follow this suggestion. Because of this the `hidden` attribute is not used in this definition. In browsers that use this suggestion, overriding the CSS `display` property can reveal elements with the `hidden` attribute.

### Semantic Role {#semantic-role}

The _semantic role_ of an element is determined by the first of these cases that applies:

1. **Conflict** If the element is [marked as decorative][], but the element is [included in the accessibility tree][]; or would be [included in the accessibility tree][] when it is not [programmatically hidden][], then its _semantic role_ is its **[implicit role][]**.
1. **Explicit** If the element has an [explicit role][], then its _semantic role_ is its [explicit role][].
1. **Implicit** The _semantic role_ of the element is its [implicit role][].

This definition can be used in expressions such as "semantic `button`" meaning any element with a semantic role of `button`.

### WAI-ARIA specifications {#wai-aria-specifications}

The _WAI ARIA Specifications_ group both the WAI ARIA W3C Recommendation and ARIA modules, namely:

- [Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria-1.1/)
- [WAI-ARIA Graphics Module 1.0](https://www.w3.org/TR/graphics-aria-1.0/)
- [Digital Publishing WAI-ARIA Module 1.0](https://www.w3.org/TR/dpub-aria-1.0/)

**Note:** depending on the type of content being evaluated, part of the specifications might be irrelevant and should be ignored.

### Whitespace {#whitespace}

_Whitespace_ are characters that have the Unicode "White_Space" property in the [Unicode properties list](https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt).

This includes:

- all characters in the [Unicode Separator categories](https://www.unicode.org/versions/Unicode11.0.0/ch04.pdf#G134153), and
- the following characters in the [Other, Control](https://www.unicode.org/versions/Unicode11.0.0/ch04.pdf#G134153) category:

  - Character tabulation (U+0009)
  - Line Feed (LF) (U+000A)
  - Line Tabulation (U+000B)
  - Form Feed (FF) (U+000C)
  - Carriage Return (CR) (U+000D)
  - Next Line (NEL) (U+0085)

{% include_relative _implementation-proposed.md %}

## Changelog

This is the first version of this ACT rule.

[accessibility support base line]: https://www.w3.org/TR/WCAG-EM/#step1c 'Definition of accessibility support base line'
[ascii whitespace]: https://infra.spec.whatwg.org/#ascii-whitespace 'Definition of ASCII whitespace'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[explicit role]: #explicit-role 'Definition of Explicit Role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focusable]: #focusable 'Definition of Focusable'
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[html or svg element]: #namespaced-element
[implicit role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as Decorative'
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[programmatically hidden]: #programmatically-hidden 'Definition of Programmatically Hidden'
[pure decoration]: https://www.w3.org/TR/WCAG21/#dfn-pure-decoration 'WCAG definition of Pure Decoration'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the Role attribute'
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[sc131]: https://www.w3.org/TR/WCAG21/#info-and-relationships 'Success Criterion 1.3.1 Info and Relationship'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[space separated tokens]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens 'Definition of space separated tokens'
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[wai-aria role]: https://www.w3.org/TR/wai-aria-1.1/#role_definitions 'List of WAI-ARIA roles'
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA Specifications'
