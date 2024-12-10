---
title: "Visible label is part of accessible name"
permalink: /standards-guidelines/act/rules/2ee8b8/proposed/
ref: /standards-guidelines/act/rules/2ee8b8/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/2ee8b8/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> 2ee8b8</p>
  <p><strong>Date:</strong> Updated 2 December 2024</p>
  <p><strong>Authors:</strong> <a href="https://github.com/annethyme">Anne Thyme Nørregaard</a>, <a href="https://github.com/brynanders">Bryn Anderson</a>, <a href="https://github.com/jkodu">Jey Nandakumar</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: 2ee8b8
  name: "Visible label is part of accessible name"
  rule_type: atomic
  original_file: visible-label-in-accessible-name-2ee8b8.md
  description: |
    This rule checks that interactive elements labeled through content have their visible label as part of their accessible name.
  last_modified: 2 December 2024
  scs_tested:
    - handle: Label in Name
      num: 2.5.3
      level: A
---

## Applicability

This rule applies to any element for which all the following is true:

- The element has a [semantic role][] that is a [widget][widget role] that [supports name from content][]; and
- The element has [visible text content][]; and
- The element has an `aria-label` or `aria-labelledby` attribute.

## Expectation

For each target element, all [text nodes][] in the [visible text content][] [match characters][] and are contained within the [accessible name][] of this target element, except for characters in the [text nodes][] used to express [non-text content][]. Leading and trailing [whitespace][] and difference in case sensitivity should be ignored.

## Background

This rule applies to elements with a [widget role][] that [support name from content][supports name from content]. This includes the following: `button`, `checkbox`, `gridcell`, `link`, `menuitem`, `menuitemcheckbox`, `menuitemradio`, `option`, `radio`, `searchbox`, `switch`, `tab`, `treeitem`.

The understanding document of [2.5.3 Label in Name][understand253] use the term "symbolic text characters" to refer to a type of [non-text content][] that uses text characters as symbols, such as using "x" to mean "close". This rule considers them as "characters expressing non-text content". Unicode emojis are another example of characters expressing non-text content, although these are not "symbolic text characters".

### Assumptions

This rule assumes that all resources needed for rendering the page are properly loaded. Checking if resources are missing is out of the scope of rules. Missing resources may be rendered as text (for example, missing `img` are rendered as their `alt` attribute).

### Accessibility Support

Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have one of the applicable [semantic roles][semantic role] and fail this rule with some technology but users of other technologies would not experience any accessibility issue.

### Bibliography

- [Understanding Success Criterion 2.5.3: Label in Name][understand253]
- [G208: Including the text of the visible label as part of the accessible name](https://www.w3.org/WAI/WCAG22/Techniques/general/G208)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>2.5.3 Label in Name (Level A)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG22/#label-in-name">Learn more about 2.5.3 Label in Name</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.1 and later on level A and higher.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>G208: Including the text of the visible label as part of the accessible name</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG22/Techniques/general/G208">Learn more about technique G208</a></li>
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

## Test Cases

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/326f6768ecbf60ca31149e65ab2853c138095fd7.html">Open in a new tab</a>

This link has [visible][] text that matches the [accessible name][].

```html
<a href="https://act-rules.github.io/" aria-label="ACT rules">ACT rules</a>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/02f6608c4242efccba3ceeb8b73cc6b1255e362d.html">Open in a new tab</a>

This link has [visible][] text that, ignoring trailing whitespace, matches the [accessible name][].

```html
<a href="https://act-rules.github.io/" aria-label="  ACT rules  ">ACT rules</a>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/71c4a612a2e00a8abd3d33b4a66ca8e5079fff1b.html">Open in a new tab</a>

This link has [visible][] text that, ignoring case, matches the [accessible name][].

```html
<a href="https://act-rules.github.io/" aria-label="act rules">ACT rules</a>
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/f88ac89cc14d59302666047a0da91bbc51d27bb2.html">Open in a new tab</a>

This button has [visible][] text that is contained within the [accessible name][].

```html
<button aria-label="Next Page in the list">Next Page</button>
```

#### Passed Example 5

<a class="example-link" title="Passed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/79af5d3e531aecd27961f0b9ed260d95f39440c0.html">Open in a new tab</a>

This button has [visible][] text that does not need to be contained within the [accessible name][], because the "x" text node is [non-text content][]. Note: this would need to meet SC 1.1.1 Non text content.

```html
<button aria-label="anything">X</button>
```

#### Passed Example 6

<a class="example-link" title="Passed Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/efa9543339cdad5412c7719b266a633a29ce149e.html">Open in a new tab</a>

This `button` element has the text "search" rendered as an magnifying glass icon by the font. Because the text is rendered as [non-text content][], the text does not need to be contained within the [accessible name][].

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
<style>
	button {
		font-family: 'Material Icons';
	}
</style>
<button aria-label="Find">search</button>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/4ee91039726503da19c9bc58e08e800464d94d82.html">Open in a new tab</a>

This link has [visible][] text that is different from the [accessible name][].

```html
<a href="https://act-rules.github.io/" aria-label="WCAG">ACT rules</a>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/8db20b5fa0a59906a7b182c5698d6a9ce7e85f10.html">Open in a new tab</a>

This button has [visible][] text that is only partially contained within the [accessible name][].

```html
<button aria-label="the full">The full label</button>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/20a5e321fc6a5cb2bfcd520acb8cda21e6925254.html">Open in a new tab</a>

This link has [visible][] text with mathematical symbols, that does not match the [accessible name][] because the mathematical symbols were written out in the accessible name. This is [explicitly mentioned in WCAG](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name#mathematical-expressions-and-formulae).

```html
<a href="/" aria-label="Proof of two multiplied by two is four">Proof of 2&times;2=4</a>
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/e9bbdbec137223e2973c6d2896050770c84c26e5.html">Open in a new tab</a>

This link has [visible][] text does not match the [accessible name][] because there is a hyphen in the accessible name.

```html
<a href="#" aria-label="non-standard">nonstandard</a>
```

#### Failed Example 5

<a class="example-link" title="Failed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/fd0c075f565b6f42be0ded6a959bea82ebff15e5.html">Open in a new tab</a>

This link has [visible][] text does not match the [accessible name][] because there are extra spaces in the accessible name.

```html
<a aria-label="1 2 3. 4 5 6. 7 8 9 0" href="tel:1234567890">123.456.7890</a>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/cf98c9678e70f160afcd5af246c0070550ad7398.html">Open in a new tab</a>

This `nav` is not a widget, so the [visible][] text does not need to match the [accessible name][].

```html
<nav aria-label="main nav">W3C navigation</nav>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/87e3c42fdc98d63d89a6a0d984f44f00adf02015.html">Open in a new tab</a>

This email text field does not need to have its [visible][] text match the [accessible name][]. The content of a textfield shows its value instead of its label; it does not [support name from content][supports name from content]. The label is usually adjacent to the textfield instead.

```html
<div>E-mail</div>
<input type="email" aria-label="E-mail" value="Contact" />
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/f02ba15667ff1b80a269e5ce66f152e93396c029.html">Open in a new tab</a>

This `div` element does not have a widget role, so the [visible][] text does not need to match the [accessible name][].

```html
<div role="tooltip" aria-label="OK">Next</div>
```

#### Inapplicable Example 4

<a class="example-link" title="Inapplicable Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/8c26a3506e424766019341f3b86d2f758ca1aced.html">Open in a new tab</a>

This link has no [visible text content][].

```html
<a href="https://w3.org" aria-label="W3C homepage">
	<img src="/test-assets/shared/w3c-logo.png" alt="w3c logo" />
</a>
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

### Matching characters {#matching-characters}

A sequence of characters is considered to _match_ another if, after removing leading and trailing [whitespace characters][] and replacing remaining occurrences of one or more whitespace characters with a single space, the two sequences of characters are equal character-by-character, ignoring any differences in letter casing.

### Outcome {#outcome}

A conclusion that comes from evaluating an ACT Rule on a [test subject][] or one of its constituent test target. An outcome can be one of the five following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target][] meets all expectations
- **Failed:** A [test target][] does not meet all expectations
- **cantTell:** Whether the rule is applicable, or not all expectations were met could not be fully determined by the tester.
- **Untested**: The tester has not attempted to evaluate the test subject.

**Note**: A rule has one `passed` or `failed` outcome for every [test target][]. When a tester evaluates a test target it can also be reported as `cantTell` if the rule cannot be tested in its entirety. For example, when applicability was automated, but the expectations have to be evaluated manually.

When there are no test targets the rule has one `inapplicable` outcome. If the tester is unable to determine whether there are test targets there will be one `cantTell` outcome. And when no evaluation has occurred the test target has one untested outcome. This means that each [test subject][] always has one or more outcomes.

Outcomes used in ACT Rules can be expressed using the [outcome property][] of the [[EARL10-Schema]][].

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

### Visible Text Content {#visible-text-content}

The _visible text content_ of an [element][] is a set of all [visible][] [text nodes][] that are [descendants][] in the [flat tree][] of this element

### WAI-ARIA specifications {#wai-aria-specifications}

The _WAI ARIA Specifications_ group both the WAI ARIA W3C Recommendation and ARIA modules, namely:

- [Accessible Rich Internet Applications (WAI-ARIA) 1.2](https://www.w3.org/TR/wai-aria-1.2/)
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

[accessibility support base line]: https://www.w3.org/TR/WCAG-EM/#step1c 'Definition of accessibility support base line'
[accessible name and description computation]: https://www.w3.org/TR/accname 'Accessible Name and Description Computation'
[accessible name]: #accessible-name 'Definition of accessible name'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[descendants]: https://dom.spec.whatwg.org/#concept-tree-descendant 'DOM tree descendant, 2020/08/18'
[earl10-schema]: https://www.w3.org/TR/act-rules-format-1.1/#biblio-earl10-schema
[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2020/08/18'
[examples of accessible name]: https://act-rules.github.io/pages/examples/accessible-name/
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[explicit role]: #explicit-role 'Definition of Explicit Role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focusable]: #focusable 'Definition of Focusable'
[implicit role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as Decorative'
[match characters]: #matching-characters 'Definition of matching characters'
[non-text content]: https://www.w3.org/TR/WCAG22/#dfn-non-text-content 'WCAG Definition of Non-text content'
[outcome property]: https://www.w3.org/TR/EARL10-Schema/#outcome
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[programmatically hidden]: #programmatically-hidden 'Definition of Programmatically Hidden'
[pure decoration]: https://www.w3.org/TR/WCAG22/#dfn-pure-decoration 'WCAG definition of Pure Decoration'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[semantic role]: #semantic-role 'Definition of Semantic role'
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[supports name from content]: https://www.w3.org/TR/wai-aria-1.2/#namefromcontent 'Definition of Supports name from contents'
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[test subject]: https://www.w3.org/TR/act-rules-format-1.1/#test-subject
[test target]: https://www.w3.org/TR/act-rules-format/#test-target
[text nodes]: https://dom.spec.whatwg.org/#text 'DOM text, 2020/08/18'
[understand253]: https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html
[visible text content]: #visible-text-content 'Definition of Visible text content'
[visible]: #visible 'Definition of visible'
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
[whitespace characters]: #whitespace 'Definition of Whitespace'
[whitespace]: #whitespace 'Definition of Whitespace'
[widget role]: https://www.w3.org/TR/wai-aria-1.2/#widget_roles 'Definition of Widget role'
