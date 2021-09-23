---
title: "Table header cell has assigned cells"
permalink: /standards-guidelines/act/rules/table-header-cell-has-assigned-cells-d0f69e/
ref: /standards-guidelines/act/rules/table-header-cell-has-assigned-cells-d0f69e/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/table-header-cell-has-assigned-cells-d0f69e.md
footer: |
  <p><strong>Date:</strong> Updated August 24th, 2021</p>
  <p><strong>Authors:</strong> <a href="https://github.com/audreymaniez">Audrey Maniez</a>, <a href="https://github.com/jkodu">Jey Nandakumar</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules community group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>.</p>
proposed: true
rule_meta:
  id: d0f69e
  name: "Table header cell has assigned cells"
  rule_type: atomic
  description: |
    This rule checks that each table header has assigned cells in a table element.
  accessibility_requirements:
    'wcag20:1.3.1':
      forConformance: true
      failed: not satisfied
      passed: further testing needed
      inapplicable: further testing needed
  input_aspects:
    - handle: Accessibility Tree
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-accessibility
    - handle: CSS styling
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-css
    - handle: DOM Tree
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom
  last_modified: August 24th, 2021
  scs_tested:
    - handle: Info and Relationships
      num: 1.3.1
      level: A
---

## Applicability

This rule applies to any HTML element with the [semantic role][] of [rowheader][] or [columnheader][] for which all of the following is true:

- the element is [visible][]; and
- the element is [included in the accessibility tree][]; and
- the element has at least one ancestor in the [flat tree][] with a [semantic role][] of either [table][] or [grid][]; and
- the element's closest ancestor in the [flat tree][] with a [semantic role][] of either [table][] or [grid][] is [included in the accessibility tree][].

## Expectation

Each target element is [assigned][] to at least one element with a [semantic role][] of [cell][] or inheriting from [cell][].

## Assumptions

This rule assumes that table header cells have a relationship conveyed through presentation with other cells within the same table. This excludes edge cases such as a table definition where there is only one header cell, or a table definition where there are multiple headers and no other cells. In such scenarios the rule fails, but [success criterion 1.3.1 Info and Relationships][sc1.3.1] could still be satisfied.

## Accessibility Support

- Table markup and header cell association is not well supported by some popular assistive technologies. Passing this rule can still cause issues for users of those assistive technologies.
- Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have one of the applicable [semantic roles][semantic role] and fail this rule with some technology but users of other technologies would not experience any accessibility issue.

## Background

The roles inheriting from `cell` are `columnheader`, `gridcell`, and `rowheader`.

- [Understanding Success Criterion 1.3.1: Information and relationships][sc1.3.1]
- [H43: Using id and headers attributes to associate data cells with header cells in data tables](https://www.w3.org/WAI/WCAG21/Techniques/html/H43)
- [Forming relationships between data cells and header cells][assigned]

## Test Cases

### Passed

#### Passed Example 1

This `th` element has an assigned `td` element.

```html
<table>
	<tr>
		<th>Time</th>
	</tr>
	<tr>
		<td>05:41</td>
	</tr>
</table>
```

#### Passed Example 2

Each of the 2 `span` elements with role of `columnheader` has assigned `span` elements with a role of `cell`.

```html
<div role="table">
	<div role="rowgroup">
		<div role="row">
			<span role="columnheader">Month</span>
			<span role="columnheader">Top Temperature</span>
		</div>
	</div>
	<div role="rowgroup">
		<div role="row">
			<span role="cell">July</span>
			<span role="cell">40 C</span>
		</div>
		<div role="row">
			<span role="cell">August</span>
			<span role="cell">45 C</span>
		</div>
	</div>
</div>
```

#### Passed Example 3

Each of the 2 `th` elements has an assigned `td` element because this `td` element spans 2 columns.

```html
<table>
	<thead>
		<tr>
			<th>Projects</th>
			<th>Exams</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td colspan="2">15%</td>
		</tr>
	</tbody>
</table>
```

#### Passed Example 4

Each of the 4 `th` elements has an assigned `td` element, within the same `table` element having a [semantic role][] of `grid`.

```html
<table role="grid">
	<thead>
		<tr role="row">
			<td></td>
			<th scope="col" role="columnheader">Breakfast</th>
			<th scope="col" role="columnheader">Lunch</th>
			<th scope="col" role="columnheader">Dinner</th>
		</tr>
	</thead>
	<tbody>
		<tr role="row">
			<th scope="row" role="rowheader">Day 1</th>
			<td>8:00</td>
			<td>13:00</td>
			<td>18:00</td>
		</tr>
	</tbody>
</table>
```

#### Passed Example 5

Each of the 2 `th` elements has an assigned `td` element because the `headers` attribute assigns the `th` with `id` equal to "col2" to the `td` element.

```html
<table>
	<tr>
		<th id="col1">Cities</th>
		<th id="col2">Count</th>
	</tr>
	<tr>
		<td>Paris</td>
	</tr>
	<tr>
		<td headers="col2">1</td>
	</tr>
</table>
```

#### Passed Example 6

Each of the 5 `th` elements in this table has assigned cells, whether data or header.

```html
<table>
	<caption>
		Opening hours
	</caption>
	<tr>
		<th>Day</th>
		<th>Morning</th>
		<th>Afternoon</th>
	</tr>
	<tr>
		<th>Mon-Fri</th>
		<td>8-12</td>
		<td>14-17</td>
	</tr>
	<tr>
		<th>Sat-Sun</th>
		<td>10-14</td>
		<td>Closed</td>
	</tr>
</table>
```

### Failed

#### Failed Example 1

The `th` element with text "Value" does not have an assigned cell within the same `table` element.

```html
<table>
	<thead>
		<tr>
			<th>Rate</th>
			<th>Value</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>15%</td>
		</tr>
	</tbody>
</table>
```

#### Failed Example 2

This `th` element with `id` equal to "col2" does not have an assigned cell within the same `table` element because the `headers` attribute removes the cell association from its column.

```html
<table>
	<tr>
		<th id="col1">Country</th>
		<th id="col2">Starting with a Z</th>
	</tr>
	<tr>
		<td>Zambia</td>
		<td headers="col1">Zimbabwe</td>
	</tr>
</table>
```

#### Failed Example 3

This `div` with role of `columnheader` and text equal to "Occupant" does not have an assigned cell within the same `table` element.

```html
<div role="grid">
	<div role="row">
		<div role="columnheader">Room</div>
		<div role="columnheader">Occupant</div>
	</div>
	<div role="row">
		<div role="gridcell">1A</div>
	</div>
	<div role="row">
		<div role="gridcell">2A</div>
	</div>
</div>
```

### Inapplicable

#### Inapplicable Example 1

There are no elements with a [semantic role][] of `header` within the `table` element.

```html
<table>
	<tr>
		<td>12:00</td>
	</tr>
</table>
```

#### Inapplicable Example 2

There are no elements with a [semantic role][] of `header` within the `table` element.

```html
<table></table>
```

#### Inapplicable Example 3

This `th` element has an [explicit role][] of `cell` and there are no more elements with a [semantic role][] of `header` within the `table` element.

```html
<table>
	<tr>
		<th role="cell">Column A</th>
	</tr>
	<tr>
		<td>Cell A</td>
	</tr>
</table>
```

#### Inapplicable Example 4

This `th` element is neither [visible][] nor [included in the accessibility tree][] and there are no more elements with a [semantic role][] of `header` within the `table` element.

```html
<table>
	<tr>
		<th style="display: none;">Organization</th>
	</tr>
	<tr>
		<td>W3C</td>
	</tr>
</table>
```

#### Inapplicable Example 5

This `th` element is not [included in the accessibility tree][] and there are no more elements with a [semantic role][] of `header` within the `table` element.

```html
<table>
	<tr>
		<th aria-hidden="true">Organization</th>
	</tr>
	<tr>
		<td>W3C</td>
	</tr>
</table>
```

#### Inapplicable Example 6

This `th` element is not a descendant in the [flat tree][] of an element with a [semantic role][] of either `table` or `grid`.

```html
<div>
	<tr>
		<th>Column A</th>
	</tr>
</div>
```

#### Inapplicable Example 7

This `th` element is part of a table which is not [included in the accessibility tree][].

```html
<table role="presentation">
	<tr>
		<th>Time</th>
	</tr>
	<tr>
		<td>12:00</td>
	</tr>
</table>
```

## Glossary

### Explicit Semantic Role {#explicit-role}

The _explicit semantic role_ of an element is determined by its [role attribute][] (if any).

The [role attribute][] takes a list of tokens. The explicit semantic role is the first valid role in this list. The valid roles are all non-abstract roles from [WAI-ARIA Specifications][]. If the element has no [role attribute][], or if it has one with no valid role, then this element has no explicit semantic role.

Other roles may be added as they become available. Not all roles will be supported in all assistive technologies. Testers are encouraged to adjust which roles are allowed according to the [accessibility support base line][]. For the purposes of executing test cases in all rules, it should be assumed that all roles are supported by assistive technologies so that none of the roles fail due to lack of accessibility support.

### Focusable {#focusable}

Elements that can become the target of keyboard input as described in the [HTML](https://www.w3.org/TR/html) specification of [focusable](https://html.spec.whatwg.org/#focusable-area) and [can be focused](https://html.spec.whatwg.org/#specially-focusable).

### Hidden State {#hidden-state}

An HTML element's _hidden state_ is "true" if at least one of the following is true for itself or any of its [ancestors][] in the [flat tree][]:

- has a `hidden` attribute; or
- has a [computed][] CSS property `display` of `none`; or
- has a [computed][] CSS property `visibility` of `hidden`; or
- has an `aria-hidden` attribute set to `true`

In any other case, the element's _hidden state_ is "false".

### Implicit Semantic Role {#implicit-role}

The _implicit semantic role_ of an element is a pre-defined value given by the host language which depends on the element and its ancestors.

Implicit roles for HTML and SVG, are documented in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/#html-element-role-mappings) and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/#mapping_role_table).

### Included in the accessibility tree {#included-in-the-accessibility-tree}

Elements included in the accessibility tree of platform specific accessibility APIs. Elements in the accessibility tree are exposed to assistive technologies, allowing users to interact with the elements in a way that meet the requirements of the individual user.

The general rules for when elements are included in the accessibility tree are defined in the [core accessibility API mappings](https://www.w3.org/TR/core-aam/). For native markup languages, such as HTML and SVG, additional rules for when elements are included in the accessibility tree can be found in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/) and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/).

For more details, see [examples of included in the accessibility tree][].

**Note:** Users of assistive technologies might still be able to interact with elements that are not included in the accessibility tree. An example of this is a [focusable](#focusable) element with an `aria-hidden` attribute with a value of `true`. Such an element could still be interacted using sequential keyboard navigation regardless of the assistive technologies used, even though the element would not be included in the accessibility tree.
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/

### Marked as decorative {#marked-as-decorative}

An element is _marked as decorative_ if one or more of the following conditions is true:

- it has an [explicit role][] of `none` or `presentation`; or
- it is an `img` element with an `alt` attribute whose value is the empty string (`alt=""`), and with no [explicit role][].

Elements are marked as decorative as a way to convey the intention of the author that they are [pure decoration][]. It is different from the element actually being [pure decoration][] as authors may make mistakes. It is different from the element being effectively ignored by assistive technologies as rules such as [presentational roles conflict resolution][] may overwrite this intention.

Elements can also be ignored by assistive technologies if their [hidden state][] is true. This is different from marking the element as decorative and does not convey the same intention. Notably, the [hidden state][] of an element may change as users interact with the page (showing and hiding elements) while being marked as decorative should stay the same through all states of the page.

### Outcome {#outcome}

An _outcome_ is a conclusion that comes from evaluating an ACT Rule on a [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) or one of its constituent [test target](https://www.w3.org/TR/act-rules-format/#test-target). An outcome can be one of the three following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) meets all expectations
- **Failed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) does not meet all expectations

**Note:** A rule has one `passed` or `failed` outcome for every [test target](https://www.w3.org/TR/act-rules-format/#test-target). When there are no test targets the rule has one `inapplicable` outcome. This means that each [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) will have one or more outcomes.

**Note:** Implementations using the [EARL10-Schema](https://www.w3.org/TR/EARL10-Schema/) can express the outcome with the [outcome property](https://www.w3.org/TR/EARL10-Schema/#outcome). In addition to `passed`, `failed` and `inapplicable`, EARL 1.0 also defined an `incomplete` outcome. While this cannot be the outcome of an ACT Rule when applied in its entirety, it often happens that rules are only partially evaluated. For example, when applicability was automated, but the expectations have to be evaluated manually. Such "interim" results can be expressed with the `incomplete` outcome.

### Semantic Role {#semantic-role}

The _semantic role_ of an element is determined by the first of these cases that applies:

1. **Conflict** If the element is [marked as decorative][], but the element is [included in the accessibility tree][]; or would be [included in the accessibility tree][] when its [hidden state][] is false, then its _semantic role_ is its **[implicit role][]**.
1. **Explicit** If the element has an [explicit role][], then its _semantic role_ is its [explicit role][].
1. **Implicit** The _semantic role_ of the element is its [implicit role][].

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

{% include_relative implementations/d0f69e.md %}

## Changelog

This is the first version of this ACT rule.

[accessibility support base line]: https://www.w3.org/TR/WCAG-EM/#step1c 'Definition of accessibility support base line'
[ancestors]: https://dom.spec.whatwg.org/#concept-tree-ancestor 'Definition Ancestor'
[assigned]: https://html.spec.whatwg.org/multipage/tables.html#header-and-data-cell-semantics 'Forming relationships between data cells and header cells'
[cell]: https://www.w3.org/TR/wai-aria-1.1/#cell 'ARIA cell role'
[columnheader]: https://www.w3.org/TR/wai-aria-1.1/#columnheader 'ARIA columnheader role'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[explicit role]: #explicit-role 'Definition of Explicit Role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focusable]: #focusable 'Definition of Focusable'
[grid]: https://www.w3.org/TR/wai-aria-1.1/#grid 'ARIA grid role'
[hidden state]: #hidden-state 'Definition of Hidden State'
[implicit role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as Decorative'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[pure decoration]: https://www.w3.org/TR/WCAG21/#dfn-pure-decoration 'WCAG definition of Pure Decoration'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[rowheader]: https://www.w3.org/TR/wai-aria-1.1/#rowheader 'ARIA rowheader role'
[sc1.3.1]: https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html 'Understanding Success Criterion 1.3.1
[semantic role]: #semantic-role 'Definition of semantic role'
[table]: https://www.w3.org/TR/wai-aria-1.1/#table 'ARIA table role'
[visible]: #visible 'Definition of visible'
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
