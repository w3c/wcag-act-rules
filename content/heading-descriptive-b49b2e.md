---
title: "Heading is descriptive"
permalink: /standards-guidelines/act/rules/heading-descriptive-b49b2e/
ref: /standards-guidelines/act/rules/heading-descriptive-b49b2e/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/heading-descriptive-b49b2e.md
footer: |
  <p><strong>Date:</strong> Updated 22 October 2021</p>
  <p><strong>Authors:</strong> <a href="https://github.com/carlosapaduarte">Carlos Duarte</a>, <a href="https://github.com/DagfinnRomen">Dagfinn Rømen</a>, <a href="https://github.com/geirsf">Geir Sindre Fossøy</a>, <a href="https://github.com/Jym77">Jean-Yves Moyen</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules community group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>.</p>
proposed: true
rule_meta:
  id: b49b2e
  name: "Heading is descriptive"
  rule_type: atomic
  description: |
    This rule checks that headings describe the topic or purpose of the content.
  accessibility_requirements:
    'wcag20:2.4.6':
      forConformance: true
      failed: not satisfied
      passed: further testing needed
      inapplicable: further testing needed
  input_aspects:
    - handle: Accessibility Tree
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-accessibility
    - handle: DOM Tree
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom
    - handle: CSS Styling
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-css
    - handle: Language
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-text
  last_modified: 22 October 2021
  scs_tested:
    - handle: Headings and Labels
      num: 2.4.6
      level: AA
---

{::options toc_levels="2" /}
{::nomarkdown}
{% include toc.html type="start" title="Page Contents" %}
{:/}

- Table of Content placeholder
{:toc}

{::nomarkdown}
{% include toc.html type="end" %}
{:/}

## Applicability

This rule applies to any [semantic][semantic role] `heading` element that is either [visible][] or [included in the accessibility tree][].

## Expectation 1

For each target element at least one of the following is true:

- the target element is not [visible][]; or
- the target element describes the topic or purpose of the first [palpable content][] which is non-[decorative][], [visible][], and after the target element in tree order in the [flat tree][].

## Expectation 2

For each target element at least one of the following is true:

- the target element is not [included in the accessibility tree][]; or
- the target element describes the topic or purpose of the first [palpable content][] which is non-[decorative][], [included in the accessibility tree][], and after the target element in tree order in the [flat tree][].

**Note:** Headings do not need to be lengthy. A word, or even a single character, may suffice.

## Assumptions

- This rule assumes that the language of each test target can be correctly determined (either programmatically or by analyzing the content), and sufficiently understood.
- This rule assumes that the [flat tree][] order is close to the reading order, as elements are rendered on the page. Due to positioning, it is possible to render a document in a order that greatly differ from the tree order, in which case the content which is visually associated with a heading might not be the content following it in tree order and this rule might fail while [Success Criterion 2.4.6 Headings and Label][sc246] is still satisfied.

## Accessibility Support

Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some [semantic][semantic role] `heading` elements can fail this rule with some technology but users of other technologies would not experience any accessibility issue.

## Background

- [Understanding Success Criterion 2.4.6: Headings and Labels](https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html)
- [G130: Providing descriptive headings](https://www.w3.org/WAI/WCAG21/Techniques/general/G130)
- [H42: Using h1-h6 to identify headings](https://www.w3.org/WAI/WCAG21/Techniques/html/H42)
- [ARIA12: Using role=heading to identify headings](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA12)
- [HTML Specification - Heading content](https://html.spec.whatwg.org/#heading-content)

## Test Cases

### Passed

#### Passed Example 1

Heading marked up with `h1` element that describes the topic or purpose of the following [palpable content][].

```html
<html lang="en">
	<h1>Opening Hours</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Passed Example 2

Heading marked up with `role="heading"` that describes the topic or purpose of the following [palpable content][].

```html
<html lang="en">
	<span role="heading" aria-level="1">Opening Hours</span>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Passed Example 3

Heading marked up with `role="heading"` that describes the topic or purpose of the following [palpable content][], with a default aria-level assigned.

```html
<html lang="en">
	<span role="heading">Opening Hours</span>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Passed Example 4

Heading marked up with `h1` element with an image that describes the topic or purpose of the following [palpable content][].

```html
<html lang="en">
	<h1>
		<img scr="/test-assets/descriptive-heading-b49b2e/opening_hours_icon.png" alt="Opening hours" />
	</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Passed Example 5

Heading marked up with `h1` element that is a single character that describes the topic or purpose of the following [palpable content][].

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

#### Passed Example 6

Heading marked up with `role="heading"` that describes the topic or purpose of the following [palpable content][]. The heading is positioned off screen and is [included in the accessibility tree][].

```html
<html lang="en">
	<span role="heading" aria-level="1" style="position: absolute; top: -9999px; left: -9999px;">Opening Hours</span>
	<p style="position: absolute; top: -9999px; left: -9999px;">
		We are open Monday through Friday from 10 to 16
	</p>
</html>
```

#### Passed Example 7

Heading marked up with `h1` element that describes the topic or purpose of the following [palpable content][]. The heading is [visible][], but is not [included in the accessibility tree][].

```html
<html lang="en">
	<h1 aria-hidden="true">Opening Hours</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Passed Example 8

This heading describes the first [palpable content][] after it (the first `p` element). The next [palpable content][] (the second `p` element) is not considered by this rule.

```html
<html lang="en">
	<h1>Opening Hours</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
	<p>We are open Saturday from 10 to 13</p>
</html>
```

### Failed

#### Failed Example 1

Heading marked up with `h1` element that does not describe the topic or purpose of the following [palpable content][].

```html
<html lang="en">
	<h1>Weather</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Failed Example 2

Heading marked up with `role="heading"` that does not describe the topic or purpose of the following [palpable content][].

```html
<html lang="en">
	<span role="heading" aria-level="1">Weather</span>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Failed Example 3

Heading marked up with `role="heading"` that does not describe the topic or purpose of the following [palpable content][]. The heading is positioned off screen and is [included in the accessibility tree][].

```html
<html lang="en">
	<span role="heading" style="position: absolute; top: -9999px; left: -9999px;">Weather</span>
	<p style="position: absolute; top: -9999px; left: -9999px;">
		We are open Monday through Friday from 10 to 16
	</p>
</html>
```

#### Failed Example 4

Heading marked up with `h1` element that does not describe the topic or purpose of the following [palpable content][]. The heading is [visible][], but is not [included in the accessibility tree][].

```html
<html lang="en">
	<h1 aria-hidden="true">Weather</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Failed Example 5

This heading does not describe the first [palpable content][] after it (the first `p` element). The next [palpable content][] (the second `p` element) is not considered by this rule.

```html
<html lang="en">
	<h1>Weather</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
	<p>It is going to rain tomorrow</p>
</html>
```

### Inapplicable

#### Inapplicable Example 1

No heading.

```html
<html lang="en">
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Inapplicable Example 2

Heading that is neither [visible][] to users, nor [included in the accessibility tree][].

```html
<html lang="en">
	<h1 style="display: none;">Opening hours</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Inapplicable Example 3

Empty heading marked up with `h1` is not [visible][].

```html
<html lang="en">
	<h1></h1>
</html>
```

#### Inapplicable Example 4

Empty heading marked up with `role="heading"` is not [visible][].

```html
<html lang="en">
	<p role="heading" aria-level="1"></p>
</html>
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

{% include_relative implementations/b49b2e.md %}

## Changelog

This is the first version of this ACT rule.

[accessibility support base line]: https://www.w3.org/TR/WCAG-EM/#step1c 'Definition of accessibility support base line'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[decorative]: https://www.w3.org/TR/WCAG21/#dfn-pure-decoration 'WCAG definition of Pure decoration'
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[explicit role]: #explicit-role 'Definition of Explicit Role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focusable]: #focusable 'Definition of Focusable'
[implicit role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as Decorative'
[palpable content]: https://html.spec.whatwg.org/multipage/dom.html#palpable-content 'HTML definition of Palpable Content'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[programmatically hidden]: #programmatically-hidden 'Definition of Programmatically Hidden'
[pure decoration]: https://www.w3.org/TR/WCAG21/#dfn-pure-decoration 'WCAG definition of Pure Decoration'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[sc246]: https://www.w3.org/TR/WCAG21/#headings-and-labels 'Success Criterion 2.4.6 Headings and Labels'
[semantic role]: #semantic-role 'Definition of semantic role'
[visible]: #visible 'Definition of visible'
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
