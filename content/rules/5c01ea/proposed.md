---
title: "ARIA state or property is permitted"
permalink: /standards-guidelines/act/rules/5c01ea/proposed/
ref: /standards-guidelines/act/rules/5c01ea/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/5c01ea/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> 5c01ea</p>
  <p><strong>Date:</strong> Updated 7 October 2025</p>
  <p><strong>Authors:</strong> <a href="https://github.com/annethyme">Anne Thyme Nørregaard</a>, <a href="https://github.com/Jym77">Jean-Yves Moyen</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
  
  <p><strong>Assets:</strong> Test cases use assets from the following sources: JFK's "We Choose the Moon" speech excerpt is courtesy of NASA.</p>
proposed: true
rule_meta:
  id: 5c01ea
  name: "ARIA state or property is permitted"
  rule_type: atomic
  original_file: aria-state-or-property-permitted-5c01ea.md
  description: |
    This rule checks that WAI-ARIA states or properties are allowed for the element they are specified on.
  last_modified: 7 October 2025
---

## Applicability

This rule applies to any [WAI-ARIA state or property][] that is specified on an [HTML or SVG element][namespaced element] that is [included in the accessibility tree][].

## Expectation 1

For each test target, one of the following is true:

- **global**: the test target is a [global state or property][global]; or
- **semantic role**: the test target is an [inherited][], [supported][], or [required][] [state][] or [property][] of the [semantic role][] of the element on which the test target is specified; or
- **language feature**: the test target is specified on an [HTML element][namespaced element] and is allowed on that element. Which ARIA states or properties may be used on which element is described in [ARIA in HTML](https://w3c.github.io/html-aria/).

## Expectation 2

No test target is [prohibited][] on the [semantic role][] of the element on which it is specified.

## Background

The presence of prohibited ARIA attributes is often the result of a developer using an incorrect role, or a misunderstanding of the attribute. These attributes are ignored by browsers and other assistive technologies. This often means that a state or property which should exist is missing.

In HTML, there are language features that do not have corresponding implicit WAI-ARIA semantics. As per [ARIA in HTML](https://www.w3.org/TR/html-aria/), those elements can have [global states or properties][global]. Some of those elements can also have [inherited][], [supported][], or [required][] [states][state] or [properties][property] that correspond to a [WAI-ARIA role](https://www.w3.org/TR/wai-aria-1.2/#introroles). For example, the `audio` element has no corresponding ARIA semantics but it can have [inherited][], [supported][], or [required][] [states][state] or [properties][property] of the [`application` role](https://www.w3.org/TR/wai-aria-1.2/#application).

Note that required WAI-ARIA states or properties for a role may change with the advance of the WAI-ARIA specifications. For example, both aria-expanded and aria-controls were required in [ARIA 1.2](https://www.w3.org/TR/wai-aria-1.2/#combobox) for combobox role, but the aria-controls was removed from required states or properties in [ARIA 1.3](https://www.w3.org/TR/wai-aria-1.3/#combobox). The examples in this rule follow [ARIA 1.3](https://www.w3.org/TR/wai-aria-1.3/#combobox).

Assessing the value of the attribute is out of scope for this rule.

### Assumptions

There are no assumptions.

### Accessibility Support

Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have a [semantic role][] of `none` and their attributes fail this rule with some technologies but users of other technology would not experience any accessibility issue.

### Related rules

- [ARIA state or property has valid value](https://www.w3.org/WAI/standards-guidelines/act/rules/6a7281/)

### Other Resources

- [Understanding Success Criterion 4.1.1: Parsing](https://www.w3.org/WAI/WCAG22/Understanding/parsing.html)
- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)
- [WAI-ARIA 1.2, Supported States and Properties](https://www.w3.org/TR/wai-aria-1.2/#states_and_properties)
- [WAI-ARIA 1.2, Global States and Properties](https://www.w3.org/TR/wai-aria-1.2/#global_states)
- [ARIA5: Using WAI-ARIA state and property attributes to expose the state of a user interface component](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA5)
- [Document conformance requirements for use of ARIA attributes in HTML](https://www.w3.org/TR/html-aria/#docconformance)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>ARIA5: Using WAI-ARIA state and property attributes to expose the state of a user interface component</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA5">Learn more about technique ARIA5</a></li>
      <li>Not required for conformance to any W3C accessibility recommendation.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: technique is not satisfied</li>
        <li>All <code>passed</code> outcomes: technique needs further testing</li>
        <li>An <code>inapplicable</code> outcome: technique needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>ARIA 1.2, 8.6 State and Property Attribute Processing</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/wai-aria-1.2/#state_property_processing">Learn more about ARIA 1.2, 8.6 State and Property Attribute Processing</a></li>
      <li><strong>Required for conformance</strong> to WAI-ARIA 1.2 author requirements.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: WAI-ARIA requirement is not satisfied</li>
        <li>All <code>passed</code> outcomes: WAI-ARIA requirement is satisfied</li>
        <li>An <code>inapplicable</code> outcome: WAI-ARIA requirement is satisfied</li>
      </ul></li>
    </ul>
  </details></li>
</ul>

### Secondary Requirements

This rule is related to the following accessibility requirements, but was 
not designed to test this requirements directly. These 
[secondary requirements](https://w3c.github.io/wcag-act/act-rules-format.html#secondary-requirements)
can either be stricter than the rule requires, or may be satisfied in ways 
not tested by the rule:

- [1.3.1 Info and Relationships (Level A)](https://www.w3.org/TR/WCAG22/#info-and-relationships): This success criterion is **less strict** than this rule. This is because the rule does not ignore irrelevant ARIA properties. Some of the failed examples satisfy this success criterion.
- [4.1.2 Name, Role, Value (Level A)](https://www.w3.org/TR/WCAG22/#name-role-value): This success criterion is **less strict** than this rule. This is because the rule does not ignore irrelevant ARIA properties. Some of the failed examples satisfy this success criterion.

## Input Aspects

The following aspects are required in using this rule.

- [Accessibility Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-accessibility)
- [CSS styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)
- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)

## Examples

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5c01ea/4240276511703c9bfa881ac80f7c0af5c92c97cc.html">Open in a new tab</a>

The `aria-pressed` [state][] is [supported][] with `button`, which is the [implicit role][] for `button` elements.

```html
<button aria-pressed="false">My button</button>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5c01ea/f91d77e96c069380252b674faaf08eecab375503.html">Open in a new tab</a>

The `aria-pressed` [state][] is [supported][] with `button`, which is the [explicit role][] of this `div` element.

```html
<div role="button" aria-pressed="false">My button</div>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5c01ea/fec2c81ca23a9647c00ccd1fb5e74d06841ed6fa.html">Open in a new tab</a>

The `aria-busy` [state][] is a [global][] [state][] that is [supported][] by all elements, even without any [semantic role][].

```html
<div aria-busy="true">My busy div</div>
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5c01ea/655b73c1435335a6a16852210787dc3621e73cef.html">Open in a new tab</a>

The `aria-label` [property][] is a [global][] [property][]. It is allowed on any [semantic role][], except where specifically prohibited.

```html
<div role="button" aria-label="OK">✓</div>
```

#### Passed Example 5

<a class="example-link" title="Passed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5c01ea/b67ab9861299ffa342880729ee1dbb43d2068a6b.html">Open in a new tab</a>

The `aria-checked` [state][] is [required][] for the [semantic][semantic role] `checkbox`.

```html
<div role="checkbox" aria-checked="false">My checkbox</div>
```

#### Passed Example 6

<a class="example-link" title="Passed Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5c01ea/d5503ef9eb5b1a3144451f5c3a680548343c9981.html">Open in a new tab</a>

The `aria-expanded` [property][] is [required][] for the [semantic][semantic role] `combobox`.

```html
<div role="combobox" aria-controls="id1" aria-expanded="false" aria-label="My combobox">My combobox</div>
```

#### Passed Example 7

<a class="example-link" title="Passed Example 7" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5c01ea/556a7ba560d3d3ab0b78fabb46037ac4dc192fd9.html">Open in a new tab</a>

The `aria-expanded` [property][] is [required][] for the [semantic][semantic role] `combobox`.

```html
<div role="combobox" aria-expanded="false" aria-controls="id1" aria-label="My combobox">My combobox</div>
```

#### Passed Example 8

<a class="example-link" title="Passed Example 8" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5c01ea/b7736b7dffe6fc6924374d4542b0c5ce3b9456cf.html">Open in a new tab</a>

The `aria-expanded` [property][] is [required][] for the [semantic][semantic role] `combobox`. [WAI-ARIA states and properties][wai-aria state or property] with `undefined` value are still applicable to this rule.

```html
<div role="combobox" aria-expanded="undefined" aria-controls="id1" aria-label="My combobox">My combobox</div>
```

#### Passed Example 9

<a class="example-link" title="Passed Example 9" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5c01ea/6c0718872b1d915b49c48fe135b9fc251bcff561.html">Open in a new tab</a>

The `aria-label` [property][] is [global][]. It is allowed on any [semantic role][], except where specifically prohibited, including roles from the [WAI-ARIA Graphics Module](https://www.w3.org/TR/graphics-aria-1.0). This rule is applicable to SVG elements.

```html
<svg xmlns="http://www.w3.org/2000/svg" role="graphics-object" width="100" height="100" aria-label="yellow circle">
	<circle cx="50" cy="50" r="40" fill="yellow"></circle>
</svg>
```

#### Passed Example 10

<a class="example-link" title="Passed Example 10" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5c01ea/d934cb530f9bd82f0c84615dfc405efad9b1fc69.html">Open in a new tab</a>

This `button` element has an [explicit role][] of `none`. However, because it is [focusable][] (by default), it has a [semantic role][] of `button` due to [Presentational Roles Conflict Resolution][]. The `aria-pressed` [state][] is [supported][] for the `button` role.

```html
<button role="none" aria-pressed="false">ACT rules are cool!</button>
```

#### Passed Example 11

<a class="example-link" title="Passed Example 11" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5c01ea/0401164ef77abe96fd6502d35ed04952a057a8fe.html">Open in a new tab</a>

This `input` element does not have an [explicit role][] of `textbox`, but the `aria-required` property may be used on an `input` element with a `type` [attribute value][] of `password`.

```html
<label>Password<input type="password" aria-required="true"/></label>
```

#### Passed Example 12

<a class="example-link" title="Passed Example 12" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5c01ea/5f9eefc34edefab96f156894ecbd1c0b5781045d.html">Open in a new tab</a>

This `div` element has an [explicit role][] of `switch`; the `aria-required` [property][] is [inherited][] from the `checkbox` [superclass role](https://www.w3.org/TR/wai-aria-1.2/#superclassrole).

```html
<div role="switch" aria-checked="false" tabindex="0" aria-required="true">
	<span class="label">Notifications</span>
	<span
		class="switch"
		style="position: relative; display: inline-block; top: 6px; border: 2px solid black; border-radius: 12px; height: 20px; width: 40px;"
	>
		<span
			style="position: absolute; top: 2px; left: 2px; display: inline-block; border: 2px solid black; border-radius: 8px; height: 12px; width: 12px; background: black;"
		></span>
	</span>
	<span class="on" aria-hidden="true" style="display: none;">On</span>
	<span class="off" aria-hidden="true">Off</span>
</div>
```

#### Passed Example 13

<a class="example-link" title="Passed Example 13" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5c01ea/2c80908133ee63545a20ea45952de6f7d6cf845b.html">Open in a new tab</a>

This `div` element has an [explicit role][] of `separator`. The `aria-valuemin`, `aria-valuemax` and `aria-valuenow` [properties][property] are [supported][] for the `separator` role when the element is [focusable][].

```html
<div role="separator" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" tabindex="0">My separator</div>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5c01ea/5e4eedbbef33766005c6f92c3dede1b1b40a2dac.html">Open in a new tab</a>

The `aria-sort` [property][] may not be used on a [semantic][semantic role] `button`.

```html
<button aria-sort="">Sort by year</button>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5c01ea/1449cc0526959d274a89345e9b479846577aac5c.html">Open in a new tab</a>

The `aria-orientation` property may not be used on `audio` element, nor can it be used on `application` (the [semantic role][] for which [inherited][], [supported][], or [required][] [states][state] or [properties][property] are also applicable to `audio` element).

```html
<audio src="/test-assets/moon-audio/moon-speech.mp3" controls aria-orientation="horizontal"></audio>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5c01ea/d7efe21b64461052aef8d3e0fc96049dda787039.html">Open in a new tab</a>

The `aria-label` property is [prohibited][] for an element with a `generic` role.

```html
<div aria-label="Bananas"></div>
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5c01ea/eedabccf6e01bca36ee87a2af00e9d7a63a7d615.html">Open in a new tab</a>

The `aria-label` property is [prohibited][] for an element with a `paragraph` role.

```html
<div role="paragraph" aria-label="Bananas"></div>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5c01ea/2d40412f73292f3e93ce605ad5329f3ffed78ed3.html">Open in a new tab</a>

This `div` element has no [WAI-ARIA state or property][].

```html
<div role="group">A group of content</div>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5c01ea/e579177e7523653931efe361e37df7766f37b712.html">Open in a new tab</a>

This `div` element is not [included in the accessibility tree][], hence its [WAI-ARIA state or property][] is not checked.

```html
<div role="button" aria-sort="" style="display:none;"></div>
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

### Namespaced Element {#namespaced-element}

An [element][] with a specific [namespaceURI][] value from [HTML namespaces][]. For example an "SVG element" is any element with the "SVG namespace", which is `http://www.w3.org/2000/svg`.

Namespaced elements are not limited to elements described in a specification. They also include custom elements. Elements such as `a` and `title` have a different namespace depending on where they are used. For example a `title` in an HTML page usually has the HTML namespace. When used in an `svg` element, a `title` element has the SVG namespace instead.

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

### WAI-ARIA specifications {#wai-aria-specifications}

The _WAI ARIA Specifications_ group both the WAI ARIA W3C Recommendation and ARIA modules, namely:

- [Accessible Rich Internet Applications (WAI-ARIA) 1.2](https://www.w3.org/TR/wai-aria-1.2/)
- [WAI-ARIA Graphics Module 1.0](https://www.w3.org/TR/graphics-aria-1.0/)
- [Digital Publishing WAI-ARIA Module 1.0](https://www.w3.org/TR/dpub-aria-1.0/)

**Note:** depending on the type of content being evaluated, part of the specifications might be irrelevant and should be ignored.

[accessibility support base line]: https://www.w3.org/TR/WCAG-EM/#step1c 'Definition of accessibility support base line'
[attribute value]: #attribute-value 'Definition of attribute value'
[boolean attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes 'HTML Specification of Boolean Attribute'
[comma separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#comma-separated-tokens 'HTML Specification of Comma Separated Tokens'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[earl10-schema]: https://www.w3.org/TR/act-rules-format-1.1/#biblio-earl10-schema
[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[enumerated attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute 'HTML Specification of Enumerated Attribute'
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[explicit role]: #explicit-role 'Definition of Explicit Role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focusable]: #focusable 'Definition of focusable'
[global]: https://www.w3.org/TR/wai-aria-1.2/#global_states 'Definition of Global ARIA States and Properties'
[html aam]: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings 'Specification of HTML attributes value mapping to ARIA states and properties'
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[idl attribute]: https://heycam.github.io/webidl/#idl-attributes "Definition of Web IDL Attribute (Editor's Draft)"
[implicit role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[inherited]: https://www.w3.org/TR/wai-aria-1.2/#inheritedattributes 'Definition of Inherited ARIA States and Properties'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as Decorative'
[namespaced element]: #namespaced-element
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
[numbers]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#numbers 'HTML Specification of Number Parsing'
[outcome property]: https://www.w3.org/TR/EARL10-Schema/#outcome
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[programmatically hidden]: #programmatically-hidden 'Definition of Programmatically Hidden'
[prohibited]: https://www.w3.org/TR/wai-aria-1.2/#prohibitedattributes 'WAI-ARIA 1.2 Definition of Prohibited States and Properties'
[property]: https://www.w3.org/TR/wai-aria-1.2/#dfn-property 'Definition of ARIA Property'
[pure decoration]: https://www.w3.org/TR/WCAG22/#dfn-pure-decoration 'WCAG definition of Pure Decoration'
[reflect]: https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes 'HTML specification of Reflecting Content Attributes in IDL Attributes'
[required]: https://www.w3.org/TR/wai-aria-1.2/#requiredState 'Definition of Required ARIA States and Properties'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[semantic role]: #semantic-role 'Definition of Semantic Role'
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[space separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens 'HTML Specification of Space Separated Tokens'
[state]: https://www.w3.org/TR/wai-aria-1.2/#dfn-state 'Definition of ARIA State'
[supported]: https://www.w3.org/TR/wai-aria-1.2/#supportedState 'Definition of Supported ARIA States and Properties'
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[test subject]: https://www.w3.org/TR/act-rules-format-1.1/#test-subject
[test target]: https://www.w3.org/TR/act-rules-format/#test-target
[wai-aria specification]: https://www.w3.org/TR/wai-aria-1.2/#propcharacteristic_value 'WAI-ARIA Specification of States and Properties Value'
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
[wai-aria state or property]: https://www.w3.org/TR/wai-aria-1.2/#state_prop_def 'Definition of ARIA States and Properties'
