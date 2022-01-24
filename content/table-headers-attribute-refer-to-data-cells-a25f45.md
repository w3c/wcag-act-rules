---
title: "headers attribute specified on a cell refers to cells in the same table element"
permalink: /standards-guidelines/act/rules/table-headers-attribute-refer-to-data-cells-a25f45/
ref: /standards-guidelines/act/rules/table-headers-attribute-refer-to-data-cells-a25f45/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/table-headers-attribute-refer-to-data-cells-a25f45.md
footer: |
  <p><strong>Date:</strong> Updated 24 January 2022</p>
  <p><strong>Rule Identifier:</strong> a25f45</p>
  <p><strong>Authors:</strong> <a href="https://github.com/audreymaniez">Audrey Maniez</a>, <a href="https://github.com/jkodu">Jey Nandakumar</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules community group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>.</p>
proposed: true
rule_meta:
  id: a25f45
  name: "`headers` attribute specified on a cell refers to cells in the same `table` element"
  rule_type: atomic
  description: |
    This rule checks that the `headers` attribute on a cell refer to other cells in the same `table` element.
  last_modified: 24 January 2022
  scs_tested:
    - handle: Info and Relationships
      num: 1.3.1
      level: A
---

## Applicability

This rule applies to any `headers` attribute specified on a [`cell`][] within a [`table`][] element, where the [`table`][] element is [visible][] and [included in the accessibility tree][].

## Expectation 1

Each target's [attribute value][] is a [set of space separated tokens][]. Each token is the value of the `id` attribute of an element, that is a [`cell`][] of the same [`table`][].

## Expectation 2

Each target's [attribute value][] is a [set of space separated tokens][], and none of these tokens is the `id` of the element on which the test target is specified.

## Assumptions

- This rule assumes that the `headers` attribute is only used to identify table headers. If other information is included in the `headers` attribute, the rule may fail on issues that are not accessibility concerns. For example, if `headers` is used to include information for scripts, this rule may not be accurate.
- This rule assumes that the `headers` attribute is required to express the relationship between data and table header cells in the same `table`. If the browser [computes an adequate fallback header][] for cells that have the `headers` [attribute value][] that does not correspond to the `id` of any one cell in the same `table`, success Criterion [1.3.1 Info and Relationships][sc131] may be satisfied even if this rule failed.
- This rule assumes that the id values on the `headers` attribute are unique.

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

### Bibliography

- [Understanding Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
- [H43: Using id and headers attributes to associate data cells with header cells in data tables](https://www.w3.org/WAI/WCAG21/Techniques/html/H43)
- [F90: Incorrectly associating table headers and content via the headers and id attributes](https://www.w3.org/WAI/WCAG21/Techniques/failures/F90)

* `headers` attribute referencing elements that are non-existent or not in the table are ignored when [assigning header cells (step 3, first case, point 2)](https://html.spec.whatwg.org/multipage/tables.html#algorithm-for-assigning-header-cells).
* `headers` attribute referencing to the cell itself are ignored when [assigning header cells (step 3, first case, point 2)](https://html.spec.whatwg.org/multipage/tables.html#algorithm-for-assigning-header-cells).

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
    <summary><span>H43: Using id and headers attributes to associate data cells with header cells in data tables</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/html/H43">Learn more about technique H43</a></li>
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

The `headers` attribute on the data cells refers to a `th` element within the same `table`.

```html
<table>
	<thead>
		<tr>
			<th id="header1">Projects</th>
			<th id="header2">Objective</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td headers="header1">15%</td>
			<td headers="header2">10%</td>
		</tr>
	</tbody>
</table>
```

#### Passed Example 2

The `headers` attribute on the cell refers to a `th` element within the same `table`. Multiple headers are referenced for a cell with `colspan` of `2`.

```html
<table>
	<thead>
		<tr>
			<th id="header1">Projects</th>
			<th id="header2">Exams</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td colspan="2" headers="header1 header2">15%</td>
		</tr>
	</tbody>
</table>
```

#### Passed Example 3

The `headers` attribute on the data cells in the second row refers to a `td` element with a role of `columnheader` within the same `table`.

```html
<table>
	<thead>
		<tr>
			<td role="columnheader" id="header1">Projects</td>
			<td role="columnheader" id="header2">Objective</td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td headers="header1">15%</td>
			<td headers="header2">10%</td>
		</tr>
	</tbody>
</table>
```

#### Passed Example 4

This `table` has multiple elements with a role of `columnheader`. The `headers` attribute on the cells lists IDs of `th` elements within the same `table`.

```html
<table>
	<tr>
		<th colspan="2" id="header1">Projects</th>
		<th colspan="2" id="header2">Exams</th>
	</tr>
	<tr>
		<th id="e1" headers="header1">1</th>
		<th id="e2" headers="header1">2</th>
		<th id="p1" headers="header2">1</th>
		<th id="p2" headers="header2">2</th>
	</tr>
	<tr>
		<td colspan="2" headers="header1 e1 e2">15%</td>
		<td headers="header2 p1">15%</td>
		<td headers="header2 p2">45%</td>
	</tr>
</table>
```

#### Passed Example 5

The `headers` attribute on the second data cell in each row refers to a `th` element with a role of `rowheader` within the same `table`.

```html
<table>
	<tbody>
		<tr>
			<th role="rowheader" id="headerAge">Age</th>
			<td headers="headerAge">65</td>
		</tr>
		<tr>
			<th role="rowheader" id="headerObjective">Objective</th>
			<td headers="headerObjective">40%</td>
		</tr>
	</tbody>
</table>
```

#### Passed Example 6

The `headers` attribute on the last two `th` elements refers to another `th` element within the same `table`. Here the column header has a span of two columns.

```html
<table>
	<tr>
		<th id="name" colspan="2">Name</th>
	</tr>
	<tr>
		<th headers="name">Firstname</th>
		<th headers="name">Lastname</th>
	</tr>
</table>
```

#### Passed Example 7

The `headers` attribute on the cells refers to `th` elements which are row scoped & within the same `table`.

```html
<table>
	<tr>
		<th id="projects1" scope="row">Projects</th>
		<th id="progress1" scope="row">Progress</th>
	</tr>
	<tr>
		<td headers="projects1">My Project</td>
		<td headers="progress1">15%</td>
	</tr>
</table>
```

#### Passed Example 8

The `headers` attribute on the cell refers to `th` element which is not the same column as the cell.

```html
<table>
	<tr>
		<td></td>
		<th id="projects2">Projects</th>
	</tr>
	<tr>
		<td headers="projects2">15%</td>
		<td></td>
	</tr>
</table>
```

### Failed

#### Failed Example 1

The `td` elements have a `headers` attribute referring to an ID that does not exist within the same `table`. Here the referenced ID is incorrect.

```html
<table>
	<tr>
		<th id="headerOfColumn1">Projects</th>
		<th id="headerOfColumn2">Objective</th>
	</tr>
	<tr>
		<td headers="headOfColumn1">15%</td>
		<td headers="headOfColumn2">10%</td>
	</tr>
</table>
```

#### Failed Example 2

The `td` element has a `headers` attribute referring to its own ID.

```html
<table>
	<tr>
		<th>Event Type</th>
	</tr>
	<tr>
		<td id="headerBday" headers="headerBday">
			Birthday
		</td>
	</tr>
</table>
```

#### Failed Example 3

The `headers` attribute on the data cells in the second row refers to an element inside the same `table` which does not have a role of `rowheader` or `columnheader`.

```html
<table>
	<tr>
		<td>
			<span id="headerProject">Projects</span>
		</td>
		<td>
			<span id="headerObjective">Objective</span>
		</td>
	</tr>
	<tr>
		<td headers="headerProject">
			15%
		</td>
		<td headers="headerObjective">
			10%
		</td>
	</tr>
</table>
```

### Inapplicable

#### Inapplicable Example 1

There is no `headers` attribute.

```html
<table>
	<tr>
		<th scope="col">Projects</th>
		<th scope="col">Exams</th>
	</tr>
	<tr>
		<td>15%</td>
		<td>45%</td>
	</tr>
</table>
```

#### Inapplicable Example 2

The `table` has a `role="presentation"` and thus is not [included in the accessibility tree][].

```html
<table role="presentation">
	<tr>
		<td id="header1">Project Status</td>
		<td id="header2">Objective</td>
	</tr>
	<tr>
		<td headers="header1">15%</td>
		<td headers="header2">10%</td>
	</tr>
</table>
```

#### Inapplicable Example 3

The `table` is not [visible][] in page.

```html
<html>
	<style>
		.notInPage {
			position: absolute;
			left: -9999px;
			top: -9999px;
		}
	</style>
	<table class="notInPage">
		<tr>
			<th id="header1">Project Status</th>
			<th id="header2">Objective</th>
		</tr>
		<tr>
			<td headers="header1">15%</td>
			<td headers="header2">10%</td>
		</tr>
	</table>
</html>
```

#### Inapplicable Example 4

The rule applies only to `headers` attribute within a `table` element.

```html
<div role="table">
	<div role="row">
		<div role="columnheader" id="header1">Projects</div>
		<div role="columnheader" id="header2">Exams</div>
	</div>
	<div role="row">
		<div role="cell" headers="header2">15%</div>
		<div role="cell" headers="header1">15%</div>
	</div>
</div>
```

#### Inapplicable Example 5

The `table` is not [included in the accessibility tree][].

```html
<table style="display:none;">
	<tr>
		<td id="header1">Project Status</td>
		<td id="header2">Objective</td>
	</tr>
	<tr>
		<td headers="header1">15%</td>
		<td headers="header2">10%</td>
	</tr>
</table>
```

## Glossary

### Attribute value {#attribute-value}

The _attribute value_ of a content attribute set on an HTML element is the value that the attribute gets after being parsed and computed according to specifications. It may differ from the value that is actually written in the HTML code due to trimming whitespace or non-digits characters, default values, or case-insensitivity.

Some notable case of attribute value, among others:

- For [enumerated attributes][], the _attribute value_ is either the state of the attribute, or the keyword that maps to it; even for the default states. Thus `<input type="image" />` has an attribute value of either `Image Button` (the state) or `image` (the keyword mapping to it), both formulations having the same meaning; similarly, "an input element with a `type` _attribute value_ of `Text`" can be either `<input type="text" />`, `<input />` (missing value default), or `<input type="invalid" />` (invalid value default).
- For [boolean attributes][], the _attribute value_ is `true` when the attribute is present and `false` otherwise. Thus `<button disabled>`, `<button disabled="disabled">` and `<button disabled="">` all have a `disabled` _attribute value_ of `true`.
- For attributes whose value is used in a case-insensitive context, the _attribute value_ is the lowercase version of the value written in the HTML code.
- For attributes that accept [numbers][], the _attribute value_ is the result of parsing the value written in the HTML code according to the rules for parsing this kind of number.
- For attributes that accept sets of tokens, whether [space separated][] or [comma separated][], the _attribute value_ is the set of tokens obtained after parsing the set and, depending on the case, converting its items to lowercase (if the set is used in a case-insensitive context).
- For `aria-*` attributes, the _attribute value_ is computed as indicated in the [WAI-ARIA specification][] and the [HTML Accessibility API Mappings][html aam].

This list is not exhaustive, and only serves as an illustration for some of the most common cases.

The _attribute value_ of an [IDL attribute][] is the value returned on getting it. Note that when an [IDL attribute][] [reflects][reflect] a content attribute, they have the same attribute value.

### Focusable {#focusable}

Elements that can become the target of keyboard input as described in the [HTML](https://www.w3.org/TR/html) specification of [focusable](https://html.spec.whatwg.org/#focusable-area) and [can be focused](https://html.spec.whatwg.org/#specially-focusable).

### Included in the accessibility tree {#included-in-the-accessibility-tree}

Elements included in the accessibility tree of platform specific accessibility APIs are exposed to assistive technologies. This allows users of assistive technology to access the elements in a way that meets the requirements of the individual user.

The general rules for when elements are included in the accessibility tree are defined in the [core accessibility API mappings](https://www.w3.org/TR/core-aam/). For native markup languages, such as HTML and SVG, additional rules for when elements are included in the accessibility tree can be found in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/) and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/).

For more details, see [examples of included in the accessibility tree][].

[Programmatically hidden](#programmatically-hidden) elements are removed from the accessibility tree. However, some browsers will leave [focusable](#focusable) elements with an `aria-hidden` attribute set to `true` in the accessibility tree. Because they are hidden, these elements are considered **not** included in the accessibility tree. This may cause confusion for users of assistive technologies because they may still be able to interact with these focusable elements using sequential keyboard navigation, even though the element should not be included in the accessibility tree.

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

### Visible {#visible}

Content perceivable through sight.

Content is considered _visible_ if making it fully transparent would result in a difference in the pixels rendered for any part of the document that is currently within the viewport or can be brought into the viewport via scrolling.

[Content is defined in WCAG](https://www.w3.org/TR/WCAG21/#dfn-content).

For more details, see [examples of visible](https://act-rules.github.io/pages/examples/visible/).

{% include_relative implementations/a25f45.md %}

## Changelog

This is the first version of this ACT rule.

[`cell`]: https://html.spec.whatwg.org/#concept-cell 'Definition of cell'
[`table`]: https://html.spec.whatwg.org/#concept-table 'Definition of table'
[attribute value]: #attribute-value 'Definition of Attribute Value'
[boolean attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes 'HTML Specification of Boolean Attribute'
[comma separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#comma-separated-tokens 'HTML Specification of Comma Separated Tokens'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[computes an adequate fallback header]: https://html.spec.whatwg.org/multipage/tables.html#header-and-data-cell-semantics 'Forming relationships between data cells and header cells'
[enumerated attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute 'HTML Specification of Enumerated Attribute'
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[html aam]: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings 'Specification of HTML attributes value mapping to ARIA states and properties'
[idl attribute]: https://heycam.github.io/webidl/#idl-attributes "Definition of Web IDL Attribute (Editor's Draft)"
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[numbers]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#numbers 'HTML Specification of Number Parsing'
[reflect]: https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes 'HTML specification of Reflecting Content Attributes in IDL Attributes'
[sc131]: https://www.w3.org/TR/WCAG21/#info-and-relationships 'WCAG 2.1 success criterion 1.3.1 Info and Relationships'
[set of space separated tokens]: https://html.spec.whatwg.org/#set-of-space-separated-tokens 'Space separated tokens'
[space separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens 'HTML Specification of Space Separated Tokens'
[visible]: #visible 'Definition of visible'
[wai-aria specification]: https://www.w3.org/TR/wai-aria-1.1/#propcharacteristic_value 'WAI-ARIA Specification of States and Properties Value'
