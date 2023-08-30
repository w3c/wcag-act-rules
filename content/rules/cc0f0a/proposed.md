---
title: "Form field label is descriptive"
permalink: /standards-guidelines/act/rules/cc0f0a/proposed/
ref: /standards-guidelines/act/rules/cc0f0a/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/cc0f0a/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> cc0f0a</p>
  <p><strong>Date:</strong> Updated 30 August 2023</p>
  <p><strong>Authors:</strong> <a href="https://github.com/Jym77">Jean-Yves Moyen</a>, <a href="https://github.com/wilcofiers">Wilco Fiers</a>. Previous Authors: <a href="https://github.com/DagfinnRomen">Dagfinn Rømen</a>, <a href="https://github.com/geirsf">Geir Sindre Fossøy</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: cc0f0a
  name: "Form field label is descriptive"
  rule_type: atomic
  original_file: form-field-label-descriptive-cc0f0a.md
  description: |
    This rule checks that labels describe the purpose of form field elements.
  last_modified: 30 August 2023
  scs_tested:
    - handle: Headings and Labels
      num: 2.4.6
      level: AA
---

## Applicability

This rule applies to any [programmatic label][] of an element which has one of the following [semantic roles][semantic role]:

- `checkbox`
- `combobox`
- `listbox`
- `menuitemcheckbox`
- `menuitemradio`
- `radio`
- `searchbox`
- `slider`
- `spinbutton`
- `switch`
- `textbox`

and where both the element and the [programmatic label][] are [visible][].

## Expectation

Each test target, together with its [visual context][], describes the purpose of the associated element.

## Assumptions

- This rule assumes that [labels][label] are intended for sighted users, and that hiding a [visible][] [label][] from assistive technologies, is a failure of [Success Criterion 4.1.2: Name, Role and Value][sc412], but not of [Success Criterion 2.4.6: Headings and Labels][sc246].
- This rule assumes that the [programmatic labels][programmatic label] of an element are also part of its [visual context][].

## Accessibility Support

- Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have one of the applicable [semantic roles][semantic role] and fail this rule with some technology but users of other technologies would not experience any accessibility issue.

## Background

The list of applicable [semantic roles][semantic role] is derived by taking all the [ARIA 1.2][aria12] roles that:

- inherit from the `input`, `menuitem` or `select` role, and
- are form field controls (this notably excludes `menu`, `option` or `tree`).

[Labels][label] in WCAG are not restricted to the `label` element of HTML and can be any element. This rule is only concerned about actual `label` elements, and elements that are programmatically marked as [labels][label] via the `aria-labelledby` attribute.

It is possible for an element to have an [accessible name][] but still have a non-descriptive `label` element (and even a non-descriptive [label][]). In that case, it would pass [Success Criterion 4.1.2: Name, Role and Value][sc412] but still fail this rule and [Success Criterion 2.4.6: Headings and Labels][sc246].

Having a [label][] which is not included in the [accessible name][] is a violation of [Success Criterion 2.5.3: Label in Name][sc253] but not of this rule nor of [Success Criterion 2.4.6: Headings and Labels][sc246].

### Bibliography

- [Accessible Rich Internet Applications (WAI-ARIA) 1.2][aria12]
- [Understanding Success Criterion 2.4.6: Headings and Labels][usc246]
- [Understanding Success Criterion 4.1.2: Name, Role and Value][usc412]
- [G131: Providing descriptive labels](https://www.w3.org/WAI/WCAG21/Techniques/general/G131)
- [H44: Using label elements to associate text labels with form controls](https://www.w3.org/WAI/WCAG21/Techniques/html/H44)
- [ARIA16: Using aria-labelledby to provide a name for user interface controls](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>2.4.6 Headings and Labels (Level AA)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#headings-and-labels">Learn more about 2.4.6 Headings and Labels</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level AA and higher.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>G131: Providing descriptive labels</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G131">Learn more about technique G131</a></li>
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
- [Language](https://www.w3.org/TR/act-rules-aspects/#input-aspects-text)

## Test Cases

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/cc0f0a/6b256544fb761a04ec863859b1fe5a5c84d096af.html">Open in a new tab</a>

The `label` element is a [programmatic label][] of the `input` element and describes it.

```html
<html lang="en">
	<label>First name:<input id="fname" type="text" name="fname"/></label>
</html>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/cc0f0a/1a9ad651245309194777d426823bbd4ad9aade7a.html">Open in a new tab</a>

The `label` element is a [programmatic label][] of the `input` element and describes it.

```html
<html lang="en">
	<label for="fname">First name:</label>
	<input id="fname" type="text" name="fname" />
</html>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/cc0f0a/181fba1970041478bf4466ea3e16cb82178404d1.html">Open in a new tab</a>

The `p` element is a [programmatic label][] of the `input` element and describes it.

```html
<html lang="en">
	<p id="label_fname">First name:</p>
	<input aria-labelledby="label_fname" type="text" name="fname" />
</html>
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/cc0f0a/39a5a085f5d5455d67ba73e192d936b2fc9b366e.html">Open in a new tab</a>

The `p` element is a [programmatic label][] of the `input` element and describes it. The [programmatic label][] does not need to be [included in the accessibility tree][] for this rule to apply.

```html
<html lang="en">
	<p id="label_fname" aria-hidden="true">First name:</p>
	<input aria-labelledby="label_fname" type="text" name="fname" />
</html>
```

#### Passed Example 5

<a class="example-link" title="Passed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/cc0f0a/b0b11b83ebfd0d8ce9d2261ad4efe2a738fa670b.html">Open in a new tab</a>

The `label` elements are [programmatic labels][programmatic label] of their respective `input` elements. The `label` elements, are not descriptive enough (because they are repeated over several fields). However, the headings provide a [visual context][] that differentiates the purpose of the otherwise identically named form fields. Within their [visual context][], the `label` elements are descriptive of their respective `input` elements.

```html
<html lang="en">
	<h2>Shipping</h2>
	<label>Name<input id="shipping-name" type="text" name="name"/></label>
	<label>Street<input id="shipping-street" type="text" name="street"/></label>

	<h2>Billing</h2>
	<label>Name<input id="billing-name" type="text" name="name"/></label>
	<label>Street<input id="billing-street" type="text" name="street"/></label>
</html>
```

#### Passed Example 6

<a class="example-link" title="Passed Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/cc0f0a/886f79117b8bf284c124c689233842e81b7cf2e9.html">Open in a new tab</a>

Both the `div` and the `span` elements are [programmatic labels][programmatic label] of the `input` element. Each of them, within the [visual context][] formed by the other one, is descriptive.

```html
<html lang="en">
	<div id="shipping">Shipping</div>
	<span id="name">Name</span>
	<input id="shipping-name" type="text" name="name" aria-labelledby="shipping name" />
</html>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/cc0f0a/9b967559ff2691dc30436766f53feea55447b348.html">Open in a new tab</a>

The `label` element is a [programmatic label][] of the `input` element but does not describe it.

```html
<html lang="en">
	<label>Menu<input id="fname" type="text" name="fname"/></label>
</html>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/cc0f0a/1e52060759a535934176a5a981446066aad6b31f.html">Open in a new tab</a>

The `label` element is a [programmatic label][] of the `input` element but does not describe it.

```html
<html lang="en">
	<label for="fname">Menu</label>
	<input id="fname" type="text" name="fname" />
</html>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/cc0f0a/fa5104f9bd07fe52813d7e511c3cc87c4c1cf232.html">Open in a new tab</a>

The `span` element is a [programmatic label][] of the `input` element but does not describe it.

```html
<html lang="en">
	<p id="label_fname">Menu</p>
	<input aria-labelledby="label_fname" type="text" name="fname" />
</html>
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/cc0f0a/649946098faf6f36b8232ea74fc3bae3cf8997e7.html">Open in a new tab</a>

These `label` elements are [programmatic labels][programmatic label] of their respective `input` elements. They are not descriptive enough because they are reused on multiple fields. The headings are not [visible][]. Therefore, they do not provide [visual context][].

```html
<html lang="en">
	<fieldset>
		<h2 style="position: absolute; top: -9999px; left: -9999px;">Shipping address</h2>
		<label>Name: <input type="text" name="shipping-name"/></label>
		<label>Street: <input type="text" name="shipping-street"/></label>
	</fieldset>
	<fieldset>
		<h2 style="position: absolute; top: -9999px; left: -9999px;">Billing address</h2>
		<label>Name: <input type="text" name="billing-name"/></label>
		<label>Street: <input type="text" name="billing-street"/></label>
	</fieldset>
</html>
```

#### Failed Example 5

<a class="example-link" title="Failed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/cc0f0a/2f1d964151ff5269a6027371956ee3b4a4a23fe7.html">Open in a new tab</a>

These `button` and `span` elements are both [programmatic labels][programmatic label] of the `input` element, but only the `button` is [visible][]. It has no [visual context][], and is not descriptive.

```html
<html lang="en">
	<span id="search" style="display: none">Search</span>
	<input type="text" name="search" aria-labelledby="submit search" />
	<button id="submit">Go</button>
</html>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/cc0f0a/1d7c2f68ba65c3d81cb8a858f52be30d48a296c3.html">Open in a new tab</a>

The `label` element is not a [programmatic label][] of any element.

```html
<html lang="en">
	<label for="fname">First name:</label>
	<p id="fname"></p>
</html>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/cc0f0a/a83b1482ac89fb3906b839092f6118525d868967.html">Open in a new tab</a>

The `label` element is not [visible][].

```html
<html lang="en">
	<label for="fname" style="position: absolute; left: -9999px;">First name:</label>
	<label aria-hidden="true">First name:</label>
	<input id="fname" type="text" name="fname" />
</html>
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/cc0f0a/e3debccdca560d85dc223b86e9355db89b505350.html">Open in a new tab</a>

The `label` is a [visible][] [programmatic label][] of the `input` element. However, the `input` is not [visible][], hence this rule does not apply.

```html
<html lang="en">
	<label>First name: <input style="position: absolute; top: -9999px; left: -9999px;" disabled role="none"/></label>
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

### Outcome {#outcome}

An _outcome_ is a conclusion that comes from evaluating an ACT Rule on a [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) or one of its constituent [test target](https://www.w3.org/TR/act-rules-format/#test-target). An outcome can be one of the three following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) meets all expectations
- **Failed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) does not meet all expectations

**Note:** A rule has one `passed` or `failed` outcome for every [test target](https://www.w3.org/TR/act-rules-format/#test-target). When there are no test targets the rule has one `inapplicable` outcome. This means that each [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) will have one or more outcomes.

**Note:** Implementations using the [EARL10-Schema](https://www.w3.org/TR/EARL10-Schema/) can express the outcome with the [outcome property](https://www.w3.org/TR/EARL10-Schema/#outcome). In addition to `passed`, `failed` and `inapplicable`, EARL 1.0 also defined an `incomplete` outcome. While this cannot be the outcome of an ACT Rule when applied in its entirety, it often happens that rules are only partially evaluated. For example, when applicability was automated, but the expectations have to be evaluated manually. Such "interim" results can be expressed with the `incomplete` outcome.

### Programmatic Label {#programmatic-label}

Element L is a _programmatic label_ of target element T if either:

- T is a [labeled control][] of L; or
- L is referenced by ID in the `aria-labelledby` attribute of T.

For more details, see [examples of programmatic label][].

**Note**: a given element may have more than one programmatic label.

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

[Content is defined in WCAG](https://www.w3.org/TR/WCAG21/#dfn-content).

For more details, see [examples of visible](https://act-rules.github.io/pages/examples/visible/).

### Visual Context {#visual-context}

The _visual context_ of a node is everything that is visually or logically located near it when the [document](https://dom.spec.whatwg.org/#concept-document) containing it is rendered. Only [visible](#visible) information may be part of the visual context.

The logical distance is the distance in the structure of the document: either the tree distance within the DOM tree, or the semantic relation. For example, headings are logically near the content that follows (until the next heading of the same or higher level) even though they might be far away visually or in the DOM tree.

The visual context may include, but is not limited to, headings, text in the same sentence or paragraph.

**Note**: As a rule of thumb, visual context should be close enough to be displayed on the device at the same time as the element it relates to. Because device sizes vary wildly and content can further be zoomed and moved around, this is however not a strong requirement.

**Note**: Visual context that is located before (in reading order) the element it relates to is often more useful than visual context located after. Indeed, it is easier for users to use context that they have already read than context that is yet to be read.

### WAI-ARIA specifications {#wai-aria-specifications}

The _WAI ARIA Specifications_ group both the WAI ARIA W3C Recommendation and ARIA modules, namely:

- [Accessible Rich Internet Applications (WAI-ARIA) 1.2](https://www.w3.org/TR/wai-aria-1.2/)
- [WAI-ARIA Graphics Module 1.0](https://www.w3.org/TR/graphics-aria-1.0/)
- [Digital Publishing WAI-ARIA Module 1.0](https://www.w3.org/TR/dpub-aria-1.0/)

**Note:** depending on the type of content being evaluated, part of the specifications might be irrelevant and should be ignored.

[accessibility support base line]: https://www.w3.org/TR/WCAG-EM/#step1c 'Definition of accessibility support base line'
[accessible name and description computation]: https://www.w3.org/TR/accname 'Accessible Name and Description Computation'
[accessible name]: #accessible-name 'Definition of accessible name'
[aria12]: https://www.w3.org/TR/wai-aria-1.2/ 'Accessible Rich Internet Applications 1.2'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[examples of accessible name]: https://act-rules.github.io/pages/examples/accessible-name/
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[examples of programmatic label]: https://act-rules.github.io/pages/examples/programmatic-label/
[explicit role]: #explicit-role 'Definition of Explicit Role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focusable]: #focusable 'Definition of Focusable'
[implicit role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[label]: https://www.w3.org/TR/WCAG21/#dfn-labels 'Definition of label'
[labeled control]: https://html.spec.whatwg.org/multipage/forms.html#labeled-control 'Definition of labeled control'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as Decorative'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[programmatic label]: #programmatic-label 'Definition of programmatic label'
[programmatically hidden]: #programmatically-hidden 'Definition of Programmatically Hidden'
[pure decoration]: https://www.w3.org/TR/WCAG21/#dfn-pure-decoration 'WCAG definition of Pure Decoration'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[sc246]: https://www.w3.org/WAI/WCAG21/#headings-and-labels.html 'Success Criterion 2.4.6: Headings and Labels'
[sc253]: https://www.w3.org/WAI/WCAG21/label-in-name 'Success Criterion 2.5.3: Label in Name'
[sc412]: https://www.w3.org/WAI/WCAG21/#name-role-value 'Success Criterion 4.1.2: Name, Role and Value'
[semantic role]: #semantic-role 'Definition of semantic role'
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[usc246]: https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html 'Understanding SC 2.4.6: Headings and Labels'
[usc412]: https://www.w3.org/WAI/WCAG21/Understanding/name-role-value 'Understanding SC 4.1.2: Name, Role and Value'
[visible]: #visible 'Definition of visible'
[visual context]: #visual-context 'Definition of visual context'
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
