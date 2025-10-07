---
title: "Heading is descriptive"
permalink: /standards-guidelines/act/rules/b49b2e/proposed/
ref: /standards-guidelines/act/rules/b49b2e/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/b49b2e/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> b49b2e</p>
  <p><strong>Date:</strong> Updated 7 October 2025</p>
  <p><strong>Authors:</strong> <a href="https://github.com/carlosapaduarte">Carlos Duarte</a>, <a href="https://github.com/DagfinnRomen">Dagfinn Rømen</a>, <a href="https://github.com/geirsf">Geir Sindre Fossøy</a>, <a href="https://github.com/Jym77">Jean-Yves Moyen</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: b49b2e
  name: "Heading is descriptive"
  rule_type: atomic
  original_file: heading-descriptive-b49b2e.md
  description: |
    This rule checks that headings describe the topic or purpose of the content.
  last_modified: 7 October 2025
  scs_tested:
    - handle: Headings and Labels
      num: 2.4.6
      level: AA
---

## Applicability

This rule applies to any [semantic][semantic role] `heading` element that is [included in the accessibility tree][] and has a non-empty (`””`) [accessible name][].

## Expectation

Each target element describes the topic or purpose of the first [perceivable content][] after the test target that is not [decorative][]. The order of elements is determined by the [flat tree][].

**Note:** Headings do not need to be lengthy. A word, or even a single character, may be sufficient.

## Background

Headings that are visible but not in the accessibility tree are a failure of [Success Criterion 1.3.1 Info and Relationships][sc131]. These are not tested by this rule but they can still fail [Success Criterion 2.4.6 Headings and Labels][sc246].

### Assumptions

This rule assumes that the [flat tree][] order is close to the reading order as elements are rendered on the page. Due to positioning, it is possible to render a document in an order that greatly differs from the tree order, in which case the content which is visually associated with a heading might not be the content following it in tree order and this rule might fail while [Success Criterion 2.4.6 Headings and Label][sc246] is still satisfied.

This rule also assumes that the content the heading is intended to describe is [visible][] and not hidden from assistive technologies. Otherwise, cases such as expandable content using a heading might fail this rule while [Success Criterion 2.4.6 Headings and Label][sc246] is still satisfied.

### Accessibility Support

Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some [semantic][semantic role] `heading` elements can fail this rule with some technology but users of other technologies would not experience any accessibility issue.

### Bibliography

- [Understanding Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [Understanding Success Criterion 2.4.6: Headings and Labels](https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html)
- [G130: Providing descriptive headings](https://www.w3.org/WAI/WCAG22/Techniques/general/G130)
- [H42: Using h1-h6 to identify headings](https://www.w3.org/WAI/WCAG22/Techniques/html/H42)
- [ARIA12: Using role=heading to identify headings](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA12)
- [HTML Specification - Heading content](https://html.spec.whatwg.org/#heading-content)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>2.4.6 Headings and Labels (Level AA)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG22/#headings-and-labels">Learn more about 2.4.6 Headings and Labels</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level AA and higher.</li>
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

- [Accessibility Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-accessibility)
- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)
- [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)
- [Language](https://www.w3.org/TR/act-rules-aspects/#input-aspects-text)

## Examples

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b49b2e/25cb1d68473c174a3f3e464704de6826b7aabdd4.html">Open in a new tab</a>

This `h1` heading element describes the topic of the following paragraph.

```html
<html lang="en">
	<h1>Opening Hours</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b49b2e/8a83ca44601cb4ab173c388413df9649c8aac11f.html">Open in a new tab</a>

This heading marked up with an [explicit role][] of `heading` describes the topic of the following paragraph.

```html
<html lang="en">
	<span role="heading" aria-level="1">Opening Hours</span>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b49b2e/14faa79c92b5e281d8694f8a18ec00ba0c11da6b.html">Open in a new tab</a>

This `h1` heading element with an image describes the topic of the following paragraph.

```html
<html lang="en">
	<h1>
		<img src="/test-assets/descriptive-heading-b49b2e/opening_hours_icon.png" alt="Opening hours" />
	</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b49b2e/14ecbd9d655c833f5f9c5ee9563c472faee663c4.html">Open in a new tab</a>

This `h1` heading element has a single character text that describes the topic of the following description list.

```html
<html lang="en">
	<h1>A</h1>
	<dl>
		<dt>airplane</dt>
		<dd>
			a powered flying vehicle with fixed wings and a weight greater than that of the air it displaces.
		</dd>
		<dt>apple</dt>
		<dd>
			the round fruit of a tree of the rose family, which typically has thin green or red skin and crisp flesh.
		</dd>
	</dl>
</html>
```

#### Passed Example 5

<a class="example-link" title="Passed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b49b2e/910c8881245425846a502b38758fff7db5c213ef.html">Open in a new tab</a>

This heading marked up with an [explicit role][] of `heading` describes the topic of the following paragraph. The heading is positioned off screen but is [included in the accessibility tree][].

```html
<html lang="en">
	<span role="heading" aria-level="1" style="position: absolute; top: -9999px; left: -9999px;">Opening Hours</span>
	<p>
		We are open Monday through Friday from 10 to 16
	</p>
</html>
```

#### Passed Example 6

<a class="example-link" title="Passed Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b49b2e/fd12fb78f149251c49409189ee65a041c7d03ec5.html">Open in a new tab</a>

This heading describes the first [perceivable content][] after it (the first `p` element). The next [perceivable content][] (the second `p` element) is not considered by this rule.

```html
<html lang="en">
	<h1>Opening Hours</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
	<p>We are open Saturday from 10 to 13</p>
</html>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b49b2e/79cce8d89309bea03e122d2917d340a525db4de0.html">Open in a new tab</a>

This `h1` heading element does not describes the topic of the following paragraph.

```html
<html lang="en">
	<h1>Weather</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b49b2e/acae544ba63bf9c71988fb67d491c7d404164f52.html">Open in a new tab</a>

This heading marked up with an [explicit role][] of `heading` does not describe the topic of the following paragraph.

```html
<html lang="en">
	<span role="heading" aria-level="1">Weather</span>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b49b2e/6000a70ba2da9a828fa9c817ae6a0d2c092522fb.html">Open in a new tab</a>

This heading marked up with an [explicit role][] of `heading` does not describe the topic of the following paragraph. The heading is positioned off screen but is [included in the accessibility tree][].

```html
<html lang="en">
	<span role="heading" aria-level="1" style="position: absolute; top: -9999px; left: -9999px;">Weather</span>
	<p>
		We are open Monday through Friday from 10 to 16
	</p>
</html>
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b49b2e/d76e8834b616356b2803586a8fbd0825a84e3fc8.html">Open in a new tab</a>

This `h1` heading element does not describe the first [perceivable content][] after it (the first `p` element). The next [perceivable content][] (the second `p` element) is not considered by this rule.

```html
<html lang="en">
	<h1>Weather</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
	<p>It is going to rain tomorrow</p>
</html>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b49b2e/69658c922aa926b0b8e4e1f113620c1dff5d64a9.html">Open in a new tab</a>

There is no heading.

```html
<html lang="en">
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b49b2e/6b63f3bcb8cfa7d388c35ebe82cedf6111e3c8f6.html">Open in a new tab</a>

This `h1` heading element is not [included in the accessibility tree][].

```html
<html lang="en">
	<h1 hidden>Opening Hours</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b49b2e/b67b5eda7529c918280b442609e5b7d59c57317b.html">Open in a new tab</a>

This `h1` heading element has an empty [accessible name][].

```html
<html lang="en">
	<h1></h1>
</html>
```

#### Inapplicable Example 4

<a class="example-link" title="Inapplicable Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b49b2e/26d71f03f10bc14b28212699eddafe17adafc6b8.html">Open in a new tab</a>

Semantic heading has an empty [accessible name][].

```html
<html lang="en">
	<p role="heading" aria-level="1"></p>
</html>
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

Other roles may be added as they become available. Not all roles will be supported in all assistive technologies. Testers are encouraged to adjust which roles are allowed according to the [accessibility support base line][]. For the purposes of executing examples in all rules, it should be assumed that all roles are supported by assistive technologies so that none of the roles fail due to lack of accessibility support.

### Focusable {#focusable}

An element is _focusable_ if one or both of the following are true:

- the element is part of [sequential focus navigation][]; or
- the element has a [tabindex value][] that is not null.

**Exception**: Elements that lose focus and do not regain focus during a period of up to 1 second after gaining focus, without the user interacting with the page the element is on, are not considered _focusable_.

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

### Outcome {#outcome}

A conclusion that comes from evaluating an ACT Rule on a [test subject][] or one of its constituent test target. An outcome can be one of the five following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target][] meets all expectations
- **Failed:** A [test target][] does not meet all expectations
- **cantTell:** Whether the rule is applicable, or not all expectations were met could not be fully determined by the tester.
- **Untested**: The tester has not attempted to evaluate the test subject.

**Note**: A rule has one `passed` or `failed` outcome for every [test target][]. When a tester evaluates a test target it can also be reported as `cantTell` if the rule cannot be tested in its entirety. For example, when applicability was automated, but the expectations have to be evaluated manually.

When there are no test targets the rule has one `inapplicable` outcome. If the tester is unable to determine whether there are test targets there will be one `cantTell` outcome. And when no evaluation has occurred the test target has one untested outcome. This means that each [test subject][] always has one or more outcomes.

Outcomes used in ACT Rules can be expressed using the [outcome property][] of the [EARL10-Schema][earl10-schema].

### Perceivable content {#perceivable-content}

A node is _perceivable content_ if all the following are true:

- the node is [palpable content][]; and
- the node is either [visible][] or [included in the accessibility tree][]; and
- if the node is an element, it does not have a [semantic role][] of `none` or `presentation`.

Perceivable content corresponds to nodes that contain information and are perceived by some categories of users.

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

### Visible {#visible}

Content perceivable through sight.

Content is considered _visible_ if making it fully transparent would result in a difference in the pixels rendered for any part of the document that is currently within the viewport or can be brought into the viewport via scrolling.

[Content is defined in WCAG](https://www.w3.org/TR/WCAG22/#dfn-content).

For more details, see [examples of visible](https://act-rules.github.io/pages/examples/visible/).

### WAI-ARIA specifications {#wai-aria-specifications}

The _WAI ARIA Specifications_ group both the WAI ARIA W3C Recommendation and ARIA modules, namely:

- [Accessible Rich Internet Applications (WAI-ARIA) 1.2](https://www.w3.org/TR/wai-aria-1.2/)
- [WAI-ARIA Graphics Module 1.0](https://www.w3.org/TR/graphics-aria-1.0/)
- [Digital Publishing WAI-ARIA Module 1.0](https://www.w3.org/TR/dpub-aria-1.0/)

**Note:** depending on the type of content being evaluated, part of the specifications might be irrelevant and should be ignored.

[accessibility support base line]: https://www.w3.org/TR/WCAG-EM/#step1c 'Definition of accessibility support base line'
[accessible name and description computation]: https://www.w3.org/TR/accname 'Accessible Name and Description Computation'
[accessible name]: #accessible-name 'Definition of accessible name'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[decorative]: https://www.w3.org/TR/WCAG22/#dfn-pure-decoration 'WCAG definition of Pure decoration'
[earl10-schema]: https://www.w3.org/TR/act-rules-format-1.1/#biblio-earl10-schema
[examples of accessible name]: https://act-rules.github.io/pages/examples/accessible-name/
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[explicit role]: #explicit-role 'Definition of Explicit Role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focusable]: #focusable 'Definition of Focusable'
[implicit role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as Decorative'
[outcome property]: https://www.w3.org/TR/EARL10-Schema/#outcome
[palpable content]: https://html.spec.whatwg.org/multipage/dom.html#palpable-content 'HTML specification of palpable content'
[perceivable content]: #perceivable-content 'Definition of perceivable content'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[programmatically hidden]: #programmatically-hidden 'Definition of Programmatically Hidden'
[pure decoration]: https://www.w3.org/TR/WCAG22/#dfn-pure-decoration 'WCAG definition of Pure Decoration'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[sc131]: https://www.w3.org/TR/WCAG22/#info-and-relationships ' Success Criterion 1.3.1 Info and Relationships'
[sc246]: https://www.w3.org/TR/WCAG22/#headings-and-labels 'Success Criterion 2.4.6 Headings and Labels'
[semantic role]: #semantic-role 'Definition of semantic role'
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[test subject]: https://www.w3.org/TR/act-rules-format-1.1/#test-subject
[test target]: https://www.w3.org/TR/act-rules-format/#test-target
[visible]: #visible 'Definition of visible'
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
