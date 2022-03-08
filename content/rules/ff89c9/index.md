---
title: "ARIA required context role"
permalink: /standards-guidelines/act/rules/aria-required-context-role-ff89c9/
ref: /standards-guidelines/act/rules/aria-required-context-role-ff89c9/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/aria-required-context-role-ff89c9.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> ff89c9</p>
  <p><strong>Date:</strong> Updated 28 January 2022</p>
  <p><strong>Authors:</strong> <a href="https://www.linkedin.com/in/brianbors/">Brian Bors</a>, <a href="https://github.com/Jym77">Jean-Yves Moyen</a>, <a href="https://github.com/wilcofiers">Wilco Fiers</a>. Previous Authors: <a href="https://github.com/annethyme">Anne Thyme Nørregaard</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules community group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: false
rule_meta:
  id: ff89c9
  name: "ARIA required context role"
  rule_type: atomic
  description: |
    This rule checks that an element with an explicit semantic role exists inside its required context.
  last_modified: 28 January 2022
  scs_tested:
    - handle: Info and Relationships
      num: 1.3.1
      level: A
---

## Applicability

This rule applies to any [HTML or SVG element][] that is [included in the accessibility tree][] and has a [WAI-ARIA 1.1][aria 1.1] [explicit semantic role][] with a [required context role][], except if the element has an [implicit semantic role][] that is identical to its [explicit semantic role][].

## Expectation

Each test target is the child in the [accessibility tree][] of an element that has a [semantic role][] that is one of the [required context roles][] of the target element.

## Assumptions

The rule assumes that the [explicit role][] of the applicable elements is appropriate for their element. I.e. A heading incorrectly marked up with `role="cell"` does not fail [success criterion 1.3.1 Info and Relationships][sc131] for not being in the context of a `row`. Having an inappropriate role is itself an issue under 1.3.1 Info and Relationships, so in either scenario a failure of this rule means this success criterion is not satisfied.

## Accessibility Support

- User agents do not all have the same accessibility tree. This can lead to different results for this rule, depending on which accessibility tree is used as input.
- `aria-owns` has limited support in some user agents.
- There exist some combination of popular browsers and assistive technologies who do not announce correctly relationships based on a mix of [implicit][implicit role] and [explicit][explicit role] roles.

## Background

The applicability of this rule is limited to the [WAI-ARIA 1.1 Recommendation][aria 1.1] roles. The [WAI-ARIA Graphics Module][] does not include any [required context roles][]. The [Digital Publishing WAI-ARIA Module (DPUB ARIA) 1.0][dpub 1.0] only has two roles with [required context roles][] (`doc-biblioentry` and `doc-endnote`); both of them have issues with their use of role inheritance, and both of them are deprecated in the [Digital Publishing WAI-ARIA Module (DPUB ARIA) 1.1][dpub 1.1] editor's draft.

An example of an element that has an [implicit semantic role][] that is identical to its [explicit semantic role][] is a `<li role="listitem">` element. These elements are not applicable because they have extra requirements and should thus be checked separately.

Being a child in the [accessibility tree][] is different from being a child in the DOM tree. Some DOM nodes have no corresponding node in the [accessibility tree][] (for example, because they are marked with `role="presentation"`). A child in the [accessibility tree][] can thus correspond to a descendant in the DOM tree. Additionally, the use of `aria-owns` attribute can change the tree structure to something which is not a subtree of the DOM tree.

This rule is restricted to direct parent-child relation in the [accessibility tree][] which is more strict than the definition of ["owned element" in WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/#dfn-owned-element). This rule mimics, on the roles level, the [content model](https://html.spec.whatwg.org/#concept-element-content-model) of HTML.

[Subclass roles][subclass role] of [required context roles][] are not automatically included as possible [required context roles][]. For example, the [`feed`](https://www.w3.org/TR/wai-aria-1.1/#feed) role is not a possible [required context role][] for [`listitem`](https://www.w3.org/TR/wai-aria-1.1/#listitem), even though [`feed`](https://www.w3.org/TR/wai-aria-1.1/#feed) is a [subclass role][] of the [`list`](https://www.w3.org/TR/wai-aria-1.1/#list) role.

Some user agents try to correct missing [required context roles][] or incorrect [content model][]. This often results, for example, in an isolated list item being presented as part of a one-item list containing only itself. Therefore, most test cases contain several targets to try and circumvent these corrections in order to better demonstrate the issue.

### Bibliography

- [Understanding Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
- [Required Context Role][]

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
</ul>

## Input Aspects

The following aspects are required in using this rule.

- [Accessibility tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-accessibility)
- [CSS styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)
- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)

## Test Cases

### Passed

#### Passed Example 1

These elements with an [explicit role][] of `listitem` are children in the [accessibility tree][] of an element with their [required context role][], `list`, expressed as an [explicit role][].

```html
<div role="list">
	<div role="listitem">List item 1</div>
	<div role="listitem">List item 2</div>
</div>
```

#### Passed Example 2

These elements with an [explicit role][] of `listitem` are children in the [accessibility tree][] of an element with their [required context role][], `list`, expressed as an [implicit role][] of `ul`. Note that this test case does not satisfy [Success Criterion 4.1.1 Parsing][sc411] because the [`ul` element][ul] does not respect its [content model][].

```html
<ul>
	<div role="listitem">List item 1</div>
	<div role="listitem">List item 2</div>
</ul>
```

#### Passed Example 3

These elements with an [explicit role][] of `listitem` are children in the [accessibility tree][] of an element with their [required context role][] even though they are not its children in DOM. The presentational node is not [included in the accessibility tree][].

```html
<div role="list">
	<div role="presentation">
		<div role="listitem">List item 1</div>
		<div role="listitem">List item 2</div>
	</div>
</div>
```

#### Passed Example 4

These elements with an [explicit role][] of `listitem` are children in the [accessibility tree][] of an element with their [required context role][] even though they are not its DOM descendants. The `aria-owns` attribute is used to alter the accessibility tree and place the target elements in their [required context role](https://www.w3.org/TR/wai-aria-1.1/#scope).

```html
<div role="list" aria-owns="item1 item2"></div>
<div id="item1" role="listitem">List item 1</div>
<div id="item2" role="listitem">List item 2</div>
```

#### Passed Example 5

These elements with an [explicit role][] of `listitem` are children in the [accessibility tree][] of an element with their [required context role][] even though they are not its DOM children. The `aria-owns` attribute is used to alter the accessibility tree and place the target elements in their [required context role](https://www.w3.org/TR/wai-aria-1.1/#scope).

```html
<div role="list" aria-owns="item1 item2">
	<div role="navigation">
		<div id="item1" role="listitem">List item 1</div>
		<div id="item2" role="listitem">List item 2</div>
	</div>
</div>
```

#### Passed Example 6

These elements with an [explicit role][] of `listitem` are children in the [accessibility tree][] of an element with their [required context role][] because the [accessibility tree][] mimics the DOM tree across shadow boundaries.

```html
<div id="host" role="list"></div>

<script>
	const host = document.querySelector('#host')
	const root = host.attachShadow({ mode: 'open' })
	root.innerHTML = '<div role="listitem">List item 1</div> <div role="listitem">List item 2</div>'
</script>
```

### Failed

#### Failed Example 1

This element with an [explicit role][] of `listitem` is not a child in the [accessibility tree][] of an element with its [required context role][].

```html
<div role="listitem">List item 1</div>
```

#### Failed Example 2

These elements with an [explicit role][] of `listitem` are not children in the [accessibility tree][] of an element with their [required context role][], but of an element with the `tabpanel` role.

```html
<div role="list">
	<div role="tabpanel">
		<div role="listitem">List item 1</div>
		<div role="listitem">List item 2</div>
	</div>
</div>
```

#### Failed Example 3

These elements with an [explicit role][] of `listitem` are not children in the [accessibility tree][] of an element with their [required context role][]. They are instead children in the [accessibility tree][] of the `div` with an `aria-live` attribute; even though this `div` has no role, it has a global ARIA attribute and is thus [included in the accessibility tree][].

```html
<div role="list">
	<div aria-live="polite">
		<div role="listitem">List item 1</div>
		<div role="listitem">List item 2</div>
	</div>
</div>
```

#### Failed Example 4

These elements with an [explicit role][] of `listitem` are not children in the [accessibility tree][] of an element with their [required context role][] because explicit parent-child relation in the [accessibility tree][] (set by `aria-owns`) does not cross shadow boundaries.

```html
<div role="list" aria-owns="item1 item2"></div>

<div id="host"></div>

<script>
	const host = document.querySelector('#host')
	const root = host.attachShadow({ mode: 'open' })
	root.innerHTML = '<div id="item1" role="listitem">List item 1</div> <div id="item2" role="listitem">List item 2</div>'
</script>
```

### Inapplicable

#### Inapplicable Example 1

This element with an [explicit role][] of `listitem` is not [included in the accessibility tree][].

```html
<div role="listitem" style="display:none;">List item 1</div>
```

#### Inapplicable Example 2

There is no element with an [explicit role][].

```html
<ul>
	<li>List item 1</li>
</ul>
```

#### Inapplicable Example 3

This `section` element with an [explicit role][] of `doc-abstract` has a role from the [Digital Publishing WAI-ARIA Module (DPUB ARIA) 1.0][dpub 1.0], not the [WAI-ARIA 1.1 Recommendation][aria 1.1].

```html
<section role="doc-abstract" aria-label="Abstract">
	<p>Accessibility of web content requires semantic information about widgets, structures, and behaviors …</p>
</section>
```

#### Inapplicable Example 4

There is no element whose role has [required context role][] because the `header` role does not have one.

```html
<div role="header" aria-level="1">Hello!</div>
<p>Welcome to my homepage!</p>
```

#### Inapplicable Example 5

There is no element with an [explicit role][] different from its [implicit role][]. This `li` element has an [explicit role][] of `listitem` which is identical to its [implicit role][].

```html
<ul>
	<li role="listitem">List item 1</li>
</ul>
```

## Glossary

### Explicit Semantic Role {#explicit-role}

The _explicit semantic role_ of an element is determined by its [role attribute][] (if any).

The [role attribute][] takes a list of tokens. The explicit semantic role is the first valid role in this list. The valid roles are all non-abstract roles from [WAI-ARIA Specifications][]. If the element has no [role attribute][], or if it has one with no valid role, then this element has no explicit semantic role.

Other roles may be added as they become available. Not all roles will be supported in all assistive technologies. Testers are encouraged to adjust which roles are allowed according to the [accessibility support base line][]. For the purposes of executing test cases in all rules, it should be assumed that all roles are supported by assistive technologies so that none of the roles fail due to lack of accessibility support.

### Focusable {#focusable}

Elements that can become the target of keyboard input as described in the [HTML](https://www.w3.org/TR/html) specification of [focusable](https://html.spec.whatwg.org/#focusable-area) and [can be focused](https://html.spec.whatwg.org/#specially-focusable).

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

### WAI-ARIA specifications {#wai-aria-specifications}

The _WAI ARIA Specifications_ group both the WAI ARIA W3C Recommendation and ARIA modules, namely:

- [Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria-1.1/)
- [WAI-ARIA Graphics Module 1.0](https://www.w3.org/TR/graphics-aria-1.0/)
- [Digital Publishing WAI-ARIA Module 1.0](https://www.w3.org/TR/dpub-aria-1.0/)

**Note:** depending on the type of content being evaluated, part of the specifications might be irrelevant and should be ignored.

{% include_relative implementations/ff89c9.md %}

## Changelog

This is the first version of this ACT rule.

[accessibility support base line]: https://www.w3.org/TR/WCAG-EM/#step1c 'Definition of accessibility support base line'
[accessibility tree]: https://www.w3.org/TR/act-rules-aspects/#input-aspects-accessibility 'Definition of accessibility tree'
[aria 1.1]: https://www.w3.org/TR/wai-aria-1.1/ 'WAI ARIA 1.1 specifications'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[content model]: https://html.spec.whatwg.org/multipage/dom.html#concept-element-content-model 'HTML definition of the Content Model'
[dpub 1.0]: https://www.w3.org/TR/dpub-aria-1.0/ 'Digital Publishing WAI-ARIA Module (DPUB ARIA) 1.0'
[dpub 1.1]: https://w3c.github.io/dpub-aria/ "Digital Publishing WAI-ARIA Module (DPUB ARIA) 1.1 (Editor's Draft)"
[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[explicit role]: #explicit-role 'Definition of Explicit Role'
[explicit semantic role]: #explicit-role 'Definition of Explicit Role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focusable]: #focusable 'Definition of Focusable'
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[html or svg element]: #namespaced-element
[implicit role]: #implicit-role 'Definition of Implicit Role'
[implicit semantic role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as Decorative'
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[programmatically hidden]: #programmatically-hidden 'Definition of Programmatically Hidden'
[pure decoration]: https://www.w3.org/TR/WCAG21/#dfn-pure-decoration 'WCAG definition of Pure Decoration'
[required context role]: https://www.w3.org/TR/wai-aria-1.1/#scope 'WAI ARIA definition of Required Context Role'
[required context roles]: https://www.w3.org/TR/wai-aria-1.1/#scope 'WAI ARIA definition of Required Context Role'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[sc131]: https://www.w3.org/TR/WCAG21/#info-and-relationships 'Success Criterion 1.3.1 Info and Relationships'
[sc411]: https://www.w3.org/TR/WCAG21/#parsing 'Success Criterion 4.1.1 Parsing'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[subclass role]: https://www.w3.org/TR/wai-aria-1.1/#subclassroles 'ARIA Specification of Subclass Role'
[ul]: https://html.spec.whatwg.org/multipage/grouping-content.html#the-ul-element 'HTML specification of the ul element'
[wai-aria graphics module]: https://www.w3.org/TR/graphics-aria-1.0/ 'WAI-ARIA Graphics Module 1.0'
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
