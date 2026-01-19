---
title: "Headers attribute specified on a cell refers to cells in the same table element"
permalink: /standards-guidelines/act/rules/a25f45/proposed/
ref: /standards-guidelines/act/rules/a25f45/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/a25f45/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> a25f45</p>
  <p><strong>Date:</strong> Updated 19 January 2026</p>
  <p><strong>Authors:</strong> <a href="https://github.com/audreymaniez">Audrey Maniez</a>, <a href="https://github.com/jkodu">Jey Nandakumar</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule conforms to <a href="https://www.w3.org/TR/act-rules-format-1.1/">ACT Rules Format 1.1</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: a25f45
  name: "Headers attribute specified on a cell refers to cells in the same table element"
  rule_type: atomic
  original_file: table-headers-attribute-refer-to-data-cells-a25f45.md
  description: |
    This rule checks that the `headers` attribute on a cell refer to other cells in the same `table` element.
  last_modified: 19 January 2026
  scs_tested:
    - handle: Info and Relationships
      num: 1.3.1
      level: A
---

## Applicability

This rule applies to any `headers` attribute specified on a [`cell`][] within a [`table`][] element, where all of the following is true for the [`table`][] element:

- The `table` is [visible][]; and
- The `table` is [included in the accessibility tree][]; and
- The `table` has a [semantic role][] of `table`, `grid` or `treegrid`.

## Expectation 1

Each target's [attribute value][] is a [set of space separated tokens][]. Each token is the value of the `id` attribute of an element, that is a [`cell`][] of the same [`table`][].

## Expectation 2

Each target's [attribute value][] is a [set of space separated tokens][], and none of these tokens is the `id` of the element on which the test target is specified.

## Background

### Assumptions

- This rule assumes that the `headers` attribute is only used to identify table headers. If other information is included in the `headers` attribute, the rule may fail on issues that are not accessibility concerns. For example, if `headers` is used to include information for scripts, this rule may not be accurate.
- This rule assumes that the `headers` attribute is required to express the relationship between data and table header cells in the same `table`. If the browser [computes an adequate fallback header][] for cells that have the `headers` [attribute value][] that does not correspond to the `id` of any one cell in the same `table`, success Criterion [1.3.1 Info and Relationships][sc131] may be satisfied even if this rule failed.
- This rule assumes that the id values on the `headers` attribute are unique.

### Accessibility Support

Different screen reader and browser combinations may fail to correctly associate table headers and cells when using the headers and id attributes.
While these constructs are technically valid, relying solely on them can still lead to accessibility issues depending on the user’s setup.

### Other Resources

- [Understanding Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html)
- [H43: Using id and headers attributes to associate data cells with header cells in data tables](https://www.w3.org/WAI/WCAG22/Techniques/html/H43)
- [F90: Incorrectly associating table headers and content via the headers and id attributes](https://www.w3.org/WAI/WCAG22/Techniques/failures/F90)

* `headers` attribute referencing elements that are non-existent or not in the table are ignored when [assigning header cells (step 3, first case, point 2)](https://html.spec.whatwg.org/multipage/tables.html#algorithm-for-assigning-header-cells).
* `headers` attribute referencing to the cell itself are ignored when [assigning header cells (step 3, first case, point 2)](https://html.spec.whatwg.org/multipage/tables.html#algorithm-for-assigning-header-cells).

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>1.3.1 Info and Relationships (Level A)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG22/#info-and-relationships">Learn more about 1.3.1 Info and Relationships</a></li>
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
      <li><a href="https://www.w3.org/WAI/WCAG22/Techniques/html/H43">Learn more about technique H43</a></li>
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

## Examples

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/a25f45/f99c8bd6aa53c3b2f4d63fee994333453df410c6.html">Open in a new tab</a>

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

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/a25f45/1400d13aa5a86dbacf71db631f5de1abfc982094.html">Open in a new tab</a>

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

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/a25f45/8391fee07d35c11cfb3fecd19ddaad0fb8c68871.html">Open in a new tab</a>

The `headers` attribute on the data cells in the second row refers to a `td` element with a role of `columnheader` within the same `table`.
Although this construct does not conform to the [ARIA in HTML](https://www.w3.org/TR/html-aria/#el-td) or [HTML specifications](https://html.spec.whatwg.org/#attributes-common-to-td-and-th-elements), it behaves the same as using a `th` element instead of a `td` element with a role of `columnheader`, on all popular browser / screen reader combinations, at the time of writing.

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

<a class="example-link" title="Passed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/a25f45/c02748c85d58e188b3c13773986272df616b2f3c.html">Open in a new tab</a>

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

<a class="example-link" title="Passed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/a25f45/d935494fdcd2c1fef14d14842c0a19c8f8c54c78.html">Open in a new tab</a>

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

<a class="example-link" title="Passed Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/a25f45/ba5019010a6e0cfbcb46b2f7e9e63a6117e06f97.html">Open in a new tab</a>

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

<a class="example-link" title="Passed Example 7" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/a25f45/b1b17ab86ee2ebce350af1c41d2e6ff8911a33f1.html">Open in a new tab</a>

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

<a class="example-link" title="Passed Example 8" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/a25f45/7291b4b36dfa21e666a765a51c01e777d40a5174.html">Open in a new tab</a>

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

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/a25f45/7f2be26b42fa5846a09019bb949c44be95586e0d.html">Open in a new tab</a>

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

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/a25f45/cd25fd6cc4fde1734fc90c2f11e71886e3458007.html">Open in a new tab</a>

The `td` elements have a `headers` attribute referring to an ID that exist in a separate `table`.

```html
<table>
	<tr>
		<th id="headOfColumn1">Projects</th>
		<th id="headOfColumn2">Objective</th>
	</tr>
</table>

<table>
	<tr>
		<td headers="headOfColumn1">15%</td>
		<td headers="headOfColumn2">10%</td>
	</tr>
</table>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/a25f45/d0c53c06c9e0a766fd5830fbbaa7df76f8cef92a.html">Open in a new tab</a>

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

#### Failed Example 4

<a class="example-link" title="Failed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/a25f45/1bdbd209a611d68876d5b6e37541f7ddc2038f97.html">Open in a new tab</a>

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

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/a25f45/9f7979f4854efa0b1ac299f920229d20246710b9.html">Open in a new tab</a>

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

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/a25f45/09d9fb1862a6f579a948259a44e1117af595d937.html">Open in a new tab</a>

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

<a class="example-link" title="Inapplicable Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/a25f45/76b79146e3be6b8ea6920df93b68352b8b9d3c8b.html">Open in a new tab</a>

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

<a class="example-link" title="Inapplicable Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/a25f45/cb36dcc6ce2d1787e287ff967559b186eb77d6bd.html">Open in a new tab</a>

The rule applies only to `headers` attribute within a `table` element.

```html
<div role="table" aria-label="Grades">
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

<a class="example-link" title="Inapplicable Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/a25f45/e6fd17797e01f46032b6d8edf24831b2775cc831.html">Open in a new tab</a>

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

#### Inapplicable Example 6

<a class="example-link" title="Inapplicable Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/a25f45/add6f67d15c10ce6195ff5488ae7f5dab8bc3632.html">Open in a new tab</a>

This `table` doesn't have a role of `table`, `grid` or `treegrid`.

```html
<table role="heading" aria-level="1">
	<td id="self" headers="self">World</td>
</table>
```

## Glossary

### Attribute value {#attribute-value}

The <dfn id="attribute-value:attribute">attribute value</dfn> of a content attribute set on an HTML element is the value that the attribute gets after being parsed and computed according to specifications. It may differ from the value that is actually written in the HTML code due to trimming whitespace or non-digits characters, default values, or case-insensitivity.

Some notable case of attribute value, among others:

- For [enumerated attributes][], the <dfn id="attribute-value:enumerated">attribute value</dfn> is either the state of the attribute, or the keyword that maps to it; even for the default states. Thus `<input type="image" />` has an attribute value of either `Image Button` (the state) or `image` (the keyword mapping to it), both formulations having the same meaning; similarly, "an input element with a `type` _attribute value_ of `Text`" can be either `<input type="text" />`, `<input />` (missing value default), or `<input type="invalid" />` (invalid value default).
- For [boolean attributes][], the <dfn id="attribute-value:boolean">attribute value</dfn> is `true` when the attribute is present and `false` otherwise. Thus `<button disabled>`, `<button disabled="disabled">` and `<button disabled="">` all have a `disabled` _attribute value_ of `true`.
- For attributes whose value is used in a case-insensitive context, the <dfn id="attribute-value:case-insensitive">attribute value</dfn> is the lowercase version of the value written in the HTML code.
- For attributes that accept [numbers][], the <dfn id="attribute-value:number">attribute value</dfn> is the result of parsing the value written in the HTML code according to the rules for parsing this kind of number.
- For attributes that accept sets of tokens, whether [space separated][] or [comma separated][], the <dfn id="attribute-value:tokens-list">attribute value</dfn> is the set of tokens obtained after parsing the set and, depending on the case, converting its items to lowercase (if the set is used in a case-insensitive context).
- For `aria-*` attributes, the <dfn id="attribute-value:aria">attribute value</dfn> is computed as indicated in the [WAI-ARIA specification][] and the [HTML Accessibility API Mappings][html aam].

This list is not exhaustive, and only serves as an illustration for some of the most common cases.

The <dfn id="attribute-value:idl">attribute value</dfn> of an [IDL attribute][] is the value returned on getting it. Note that when an [IDL attribute][] [reflects][reflect] a content attribute, they have the same attribute value.

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

For more details, see [examples of visible](https://www.w3.org/WAI/standards-guidelines/act/rules/terms/visible/examples/).

### WAI-ARIA specifications {#wai-aria-specifications}

The _WAI ARIA Specifications_ group both the WAI ARIA W3C Recommendation and ARIA modules, namely:

- [Accessible Rich Internet Applications (WAI-ARIA) 1.2](https://www.w3.org/TR/wai-aria-1.2/)
- [WAI-ARIA Graphics Module 1.0](https://www.w3.org/TR/graphics-aria-1.0/)
- [Digital Publishing WAI-ARIA Module 1.0](https://www.w3.org/TR/dpub-aria-1.0/)

**Note:** depending on the type of content being evaluated, part of the specifications might be irrelevant and should be ignored.

[`cell`]: https://html.spec.whatwg.org/#concept-cell 'Definition of cell'
[`table`]: https://html.spec.whatwg.org/#concept-table 'Definition of table'
[accessibility support base line]: https://www.w3.org/TR/WCAG-EM/#step1c 'Definition of accessibility support base line'
[attribute value]: #attribute-value 'Definition of Attribute Value'
[boolean attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes 'HTML Specification of Boolean Attribute'
[comma separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#comma-separated-tokens 'HTML Specification of Comma Separated Tokens'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[computes an adequate fallback header]: https://html.spec.whatwg.org/multipage/tables.html#header-and-data-cell-semantics 'Forming relationships between data cells and header cells'
[earl10-schema]: https://www.w3.org/TR/act-rules-format-1.1/#biblio-earl10-schema
[enumerated attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute 'HTML Specification of Enumerated Attribute'
[examples of included in the accessibility tree]: https://www.w3.org/WAI/standards-guidelines/act/rules/terms/included-in-the-accesibility-tree/examples/
[explicit role]: #explicit-role 'Definition of Explicit Role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focusable]: #focusable 'Definition of Focusable'
[html aam]: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings 'Specification of HTML attributes value mapping to ARIA states and properties'
[idl attribute]: https://heycam.github.io/webidl/#idl-attributes "Definition of Web IDL Attribute (Editor's Draft)"
[implicit role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as Decorative'
[numbers]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#numbers 'HTML Specification of Number Parsing'
[outcome property]: https://www.w3.org/TR/EARL10-Schema/#outcome
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[programmatically hidden]: #programmatically-hidden 'Definition of Programmatically Hidden'
[pure decoration]: https://www.w3.org/TR/WCAG22/#dfn-pure-decoration 'WCAG definition of Pure Decoration'
[reflect]: https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes 'HTML specification of Reflecting Content Attributes in IDL Attributes'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[sc131]: https://www.w3.org/TR/WCAG22/#info-and-relationships 'WCAG 2.2 success criterion 1.3.1 Info and Relationships'
[semantic role]: #semantic-role 'Definition of semantic role'
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[set of space separated tokens]: https://html.spec.whatwg.org/#set-of-space-separated-tokens 'Space separated tokens'
[space separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens 'HTML Specification of Space Separated Tokens'
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[test subject]: https://www.w3.org/TR/act-rules-format-1.1/#test-subject
[test target]: https://www.w3.org/TR/act-rules-format/#test-target
[visible]: #visible 'Definition of visible'
[wai-aria specification]: https://www.w3.org/TR/wai-aria-1.2/#propcharacteristic_value 'WAI-ARIA Specification of States and Properties Value'
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
