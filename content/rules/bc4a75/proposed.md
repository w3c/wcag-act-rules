---
title: "ARIA required owned elements"
permalink: /standards-guidelines/act/rules/bc4a75/proposed/
ref: /standards-guidelines/act/rules/bc4a75/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/bc4a75/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> bc4a75</p>
  <p><strong>Date:</strong> Updated 15 March 2022</p>
  <p><strong>Authors:</strong> <a href="https://github.com/wilcofiers">Wilco Fiers</a>. Previous Authors: <a href="https://github.com/audreymaniez">Audrey Maniez</a>, <a href="https://github.com/jkodu">Jey Nandakumar</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: bc4a75
  name: "ARIA required owned elements"
  rule_type: atomic
  description: |
    This rule checks that an element with an explicit semantic role has at least one of its required owned elements.
  last_modified: 15 March 2022
  scs_tested:
    - handle: Info and Relationships
      num: 1.3.1
      level: A
---

## Applicability

This rule applies to any [HTML or SVG element][] that is [included in the accessibility tree][] and has a [WAI-ARIA 1.1][] [explicit semantic role][] with [required owned elements][], except if one or more of the following is true:

- the element is a [semantic][semantic role] `combobox`; or
- the element has the `aria-busy` [attribute value][] of `true`, or has an [ancestor][] in the accessibility tree with this [attribute value][].

## Expectation

Each test target only [owns][] elements with a [semantic role][] from the [required owned element][] list for the test target's [semantic role]().

**Note:** The definition of [owned by][] used in this rule is different than the definition of ["owned element" in WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/#dfn-owned-element). See more in the [owned by][] definition.

## Assumptions

If the [explicit semantic role][] on the target element is incorrectly used, and any relationships between elements are already programmatically determinable, failing this rule may not result in accessibility issues for users of assistive technologies, and it should then not be considered a failure under [WCAG success criterion 1.3.1 Info and Relationships](https://www.w3.org/TR/WCAG21/#info-and-relationships).

## Accessibility Support

- User agents do not all have the same accessibility tree. Particularly the method of deriving which element owns which other elements varies between browsers. This can lead to different results for this rule, depending on which accessibility tree is used as input.
- `aria-owns` has limited support in some user agents.
- Assistive technologies are not consistent in how they handle situations where a [required owned element][] has a missing or incorrect role. This can lead to situations where inaccurate owned elements behave as expected in one assistive technology, but not in another.
- Some user agents treat the value of `aria-busy` as case-sensitive.

## Background

Some [required owned elements][] are only valid if they themselves [own][owns] (or "contain") elements with a given [semantic role][]. This is denoted by an arrow (meaning "containing") in the role description. For example, the role `menu` has `group → menuitemradio` as one of its [required owned elements][], meaning that elements with a role of `menu` may only [own][owns] elements with a role of `group` who themselves only [own][owns] elements with a role of `menuitemradio`.

The applicability of this rule is limited to the [WAI-ARIA 1.1 Recommendation][wai-aria 1.1] roles. The [WAI-ARIA Graphics Module][] does not include any [required owned elements][]. The [Digital Publishing WAI-ARIA Module (DPUB ARIA) 1.0][dpub 1.0] only has three roles with [required owned elements][] (`doc-bibliography`, `doc-endnotes` and `doc-glossary`); they have issues with their use of role inheritance, and all of them have no [required owned elements][] in the [Digital Publishing WAI-ARIA Module (DPUB ARIA) 1.1][dpub 1.1] editor's draft.

The combobox role is excluded from this rule, because the design pattern for it as described in ARIA 1.1 has proven problematic. The combobox will be significantly different for ARIA 1.2, where it does not have [required owned elements][].

**Note:** [Subclass roles](https://www.w3.org/TR/wai-aria-1.1/#subclassroles) of [required owned elements][] are not automatically included as possible [required owned elements][]. For example, the `treeitem` role is not a [required owned elements][] for [`list`](https://www.w3.org/TR/wai-aria-1.1/#list), even though `treeitem` is a [subclass role](https://www.w3.org/TR/wai-aria-1.1/#subclassroles) of `listitem`.

### Bibliography

- [Understanding Success Criterion 1.3.1: Info and Relationships](https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html)
- [Required Owned Element](https://www.w3.org/TR/wai-aria-1.1/#mustContain)
- [Owned Element](https://www.w3.org/TR/wai-aria-1.1/#dfn-owned-element)

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

<a class="example-link" title="Passed Example 1" href="/content-assets/wcag-act-rules/testcases/bc4a75/5c4aa70ce778897a8f9601621075c0f0c9abdc65.html">Open in a new tab</a>

This element with the `list` role only owns elements with the `listitem` role. The `listitem` role is one of the [required owned elements][] for `list`.

```html
<div role="list">
	<span role="listitem">Item 1</span>
	<span role="listitem">Item 2</span>
</div>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" href="/content-assets/wcag-act-rules/testcases/bc4a75/5ca6583c5d7e250e11744fd20e385ac94a6c4dcf.html">Open in a new tab</a>

This element with the `tablist` role only owns elements with the `tab` role. The `tab` role is one of the [required owned elements][] for `tablist`.

```html
<ul role="tablist">
	<li role="tab">Tab 1</li>
	<li role="tab">Tab 2</li>
</ul>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" href="/content-assets/wcag-act-rules/testcases/bc4a75/3531d0aea5d4f26705ee56b34e068880aedff56c.html">Open in a new tab</a>

This element with the `grid` role only owns elements with the `row` role, and the element with the `row` role only owns elements with the `cell` role. The `row` role is one of the [required owned elements][] for `grid`, and `cell` is one of the [required owned elements][] for `row`.

```html
<table role="grid">
	<tr role="row">
		<span role="cell">Item 1</span>
	</tr>
</table>
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" href="/content-assets/wcag-act-rules/testcases/bc4a75/12a2da38812d7bf356f0092674c1c21802faf30d.html">Open in a new tab</a>

This element with the `menu` role only owns elements with the `menuitem`, `menuitemradio` and `menuitemcheckbox` role. These roles are all [required owned elements][] for `menu`. The element with the `none` role is not [owned by][] the `menu` because it is not [included in the accessibility tree][].

```html
<div role="menu">
	<li role="none"></li>
	<li role="menuitem">Item 1</li>
	<div role="menuitemradio" aria-checked="false">Item 2</div>
	<div role="menuitemcheckbox" aria-checked="false">Item 3</div>
</div>
```

#### Passed Example 5

<a class="example-link" title="Passed Example 5" href="/content-assets/wcag-act-rules/testcases/bc4a75/a1826280426b6a76f0c871084146983b6f0faa9b.html">Open in a new tab</a>

This element with the `list` role only owns elements with the `listitem` role through the `aria-owns` attribute. The `listitem` role is one of the [required owned elements][] for `list`.

**Note:** This test case follows the definition of [owned by][]. If implemented differently, this definition could cause differences in outcome of this test case.

```html
<div role="list" aria-owns="id1"></div>
<div id="id1" role="listitem">Item 1</div>
```

#### Passed Example 6

<a class="example-link" title="Passed Example 6" href="/content-assets/wcag-act-rules/testcases/bc4a75/52c725e462af074a3559cf4bf4d4dd2386168938.html">Open in a new tab</a>

This element with the `list` role only owns elements with the `listitem` role, or elements with the `group` role, in which each element has the `listitem` role. Both the `listitem` role on its own, and the `group` role (when containing elements with the `listitem` role) are [required owned elements][] for `list`.

```html
<div role="list">
	<span role="listitem">Item 1</span>
	<div role="group">
		<span role="listitem">Item 2</span>
		<span role="listitem">Item 3</span>
	</div>
</div>
```

#### Passed Example 7

<a class="example-link" title="Passed Example 7" href="/content-assets/wcag-act-rules/testcases/bc4a75/51307c16b15d283b9f6ba7e4edc1bb99449f3f37.html">Open in a new tab</a>

This element with the `menu` role only owns an element with a `group` role. The `group` in turn owns an element with the `menuitem` role, and an element with the `group` role, in which each element has the `menuitem` role. ARIA `group` roles are allowed to own other elements with a `group` role.

```html
<div role="menu">
	<div role="group">
		<span role="menuitem">Item 1</span>
		<div role="group">
			<span role="menuitem">Item 2</span>
			<span role="menuitem">Item 3</span>
		</div>
	</div>
</div>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" href="/content-assets/wcag-act-rules/testcases/bc4a75/dd4d60acdda2a92253d4fc09cff248e9e0e3eb74.html">Open in a new tab</a>

This element with the `list` role owns an element without any of its [required owned elements][] (`listitem` or `group` containing `listitem`).

```html
<div role="list">
	<span>Item 1</span>
</div>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" href="/content-assets/wcag-act-rules/testcases/bc4a75/0763ce51664b522eb3ed2c5479e11f4ed91e871c.html">Open in a new tab</a>

This element with the `tablist` role owns an element with the `listitem` role. The `listitem` role is not one of the [required owned elements][] for `tablist`.

```html
<ol role="tablist">
	<li role="listitem">Item 1</li>
</ol>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" href="/content-assets/wcag-act-rules/testcases/bc4a75/0fd4574e8dd585f4cb14c20f9966bf94f2139ea9.html">Open in a new tab</a>

This element with the `list` role owns an element with the `listitem` role, and one with the `link` role. The `link` role is not one of the [required owned elements][] for `list`.

```html
<div role="list">
	<li>Item 1</li>
	<span role="link">Item 2</span>
</div>
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" href="/content-assets/wcag-act-rules/testcases/bc4a75/874032cb82216878366f02dd2d98e6c8047a1612.html">Open in a new tab</a>

This element with the `grid` role only owns elements with the `row` role, but the element with the `row` role does not own elements with the `cell` role. The `cell` is one of the [required owned elements][] for `row`.

```html
<div role="grid">
	<div role="row">
		<span>Item 1</span>
	</div>
</div>
```

#### Failed Example 5

<a class="example-link" title="Failed Example 5" href="/content-assets/wcag-act-rules/testcases/bc4a75/f656ec33b2faf9fa804c61d09102fc70e1b916d2.html">Open in a new tab</a>

This element with the `list` role owns an element with the `tab` role through the `aria-owns` attribute. The `tab` role is not one of the [required owned elements][] for `list`.

**Note:** This test case follows the definition of [owned by][]. If implemented differently, this definition could cause differences in outcome of this test case.

```html
<div role="list" aria-owns="id2"></div>
<div id="id2" role="tab">Tab 1</div>
```

#### Failed Example 6

<a class="example-link" title="Failed Example 6" href="/content-assets/wcag-act-rules/testcases/bc4a75/f205939f29e3507a1f1cdbea0ae86ca40e8e0ada.html">Open in a new tab</a>

This element with the `list` role owns an element with the `group` role, but the group owns elements with the `tab` role. The `group` is not a [required owned elements][] for `list`, if it owns elements with a [semantic role][] other then `listitem`.

```html
<div role="list">
	<div role="group">
		<span role="tab">Item 1</span>
		<span role="tab">Item 2</span>
	</div>
</div>
```

#### Failed Example 7

<a class="example-link" title="Failed Example 7" href="/content-assets/wcag-act-rules/testcases/bc4a75/5e0e88f9ed776c89735d7db606c1381a7a1fb877.html">Open in a new tab</a>

This element with the `menu` role only owns an element with a `group` role. The `group` in turn owns an element with the `menuitem` role, and an element with the `group` role, in which each element has the `treeitem` role. ARIA `group` roles are allowed to own other elements with a `group` role, but those nested `group` nodes must still meet the requirements.

```html
<div role="menu">
	<div role="group">
		<span role="menuitem">Item 1</span>
		<div role="group">
			<span role="treeitem">Item 1</span>
			<span role="treeitem">Item 2</span>
		</div>
	</div>
</div>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" href="/content-assets/wcag-act-rules/testcases/bc4a75/83d80bc34891ae13f05150c8c677028591f1d199.html">Open in a new tab</a>

This element with the `list` role is not included in the accessibility tree because the `aria-hidden` attribute is set to `true`.

```html
<div role="list" aria-hidden="true"></div>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" href="/content-assets/wcag-act-rules/testcases/bc4a75/9ed4f5f7c0a9b8377e7652022430cbd5b1eddccf.html">Open in a new tab</a>

This `ul` element does not have an [explicit semantic role][].

```html
<ul>
	<li>Item 1</li>
</ul>
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" href="/content-assets/wcag-act-rules/testcases/bc4a75/a700af25effa2ba2bfad2429705e634fcd0142d6.html">Open in a new tab</a>

This element with the `progressbar` role does not need [required owned elements][].

```html
<div role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">20 %</div>
```

#### Inapplicable Example 4

<a class="example-link" title="Inapplicable Example 4" href="/content-assets/wcag-act-rules/testcases/bc4a75/837f92d0ac41c14e55782991cbab75975b492702.html">Open in a new tab</a>

This element with the `menu` role has an `aria-busy` attribute set to `true`.

```html
<ul role="menu" aria-busy="true">
	Loading
</ul>
```

#### Inapplicable Example 5

<a class="example-link" title="Inapplicable Example 5" href="/content-assets/wcag-act-rules/testcases/bc4a75/01c9526cc3ea1449ab8462fdf3c2aa4f215137dc.html">Open in a new tab</a>

This element with the `combobox` role conforms to [WAI-ARIA 1.1][] without owned elements.

```html
<label for="combo">My Combobox</label> <input role="combobox" aria-expanded="false" id="combo" />
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

### Owned by {#owned-by}

An element A is _owned by_ element B if element A is a child of element B in the [accessibility tree][].

Being a child in the [accessibility tree][] is different from being a child in the DOM tree. Some DOM nodes have no corresponding node in the [accessibility tree][] (for example, because they are marked with `role="presentation"`). A child in the [accessibility tree][] can thus correspond to a descendant in the DOM tree. Additionally, the use of `aria-owns` attribute can change the tree structure to something which is not a subtree of the DOM tree.

This definition is different from the definition of ["owned element" in WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/#dfn-owned-element). Because browsers have different accessibility trees, which element owns which other elements can vary between browsers. Until there is a standard accessibility tree, testing with multiple accessibility trees may be necessary.

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
[accessibility tree]: https://www.w3.org/TR/act-rules-aspects/#input-aspects-accessibility 'Definition of accessibility tree'
[ancestor]: https://dom.spec.whatwg.org/#concept-tree-ancestor 'Definition Ancestors, as on 2020-01-10'
[attribute value]: #attribute-value 'Definition of Attribute Value'
[boolean attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes 'HTML Specification of Boolean Attribute'
[comma separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#comma-separated-tokens 'HTML Specification of Comma Separated Tokens'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[dpub 1.0]: https://www.w3.org/TR/dpub-aria-1.0/
[dpub 1.1]: https://w3c.github.io/dpub-aria/ "Digital Publishing WAI-ARIA Module (DPUB ARIA) 1.1 (Editor's Draft)"
[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[enumerated attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute 'HTML Specification of Enumerated Attribute'
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[explicit role]: #explicit-role 'Definition of Explicit Role'
[explicit semantic role]: #explicit-role
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focusable]: #focusable 'Definition of Focusable'
[html aam]: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings 'Specification of HTML attributes value mapping to ARIA states and properties'
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[html or svg element]: #namespaced-element
[idl attribute]: https://heycam.github.io/webidl/#idl-attributes "Definition of Web IDL Attribute (Editor's Draft)"
[implicit role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as Decorative'
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
[numbers]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#numbers 'HTML Specification of Number Parsing'
[owned by]: #owned-by
[owns]: #owned-by
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[programmatically hidden]: #programmatically-hidden 'Definition of Programmatically Hidden'
[pure decoration]: https://www.w3.org/TR/WCAG21/#dfn-pure-decoration 'WCAG definition of Pure Decoration'
[reflect]: https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes 'HTML specification of Reflecting Content Attributes in IDL Attributes'
[required owned element]: https://www.w3.org/TR/wai-aria-1.1/#mustContain 'Define Required owned element'
[required owned elements]: https://www.w3.org/TR/wai-aria-1.1/#mustContain 'Define Required owned element'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[semantic role]: #semantic-role
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[space separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens 'HTML Specification of Space Separated Tokens'
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[wai-aria 1.1]: https://www.w3.org/TR/wai-aria-1.1/
[wai-aria graphics module]: https://www.w3.org/TR/graphics-aria-1.0/ 'WAI-ARIA Graphics Module 1.0'
[wai-aria specification]: https://www.w3.org/TR/wai-aria-1.1/#propcharacteristic_value 'WAI-ARIA Specification of States and Properties Value'
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
