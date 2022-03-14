---
title: "Image button has non-empty accessible name"
permalink: /standards-guidelines/act/rules/59796f/
ref: /standards-guidelines/act/rules/59796f/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/59796f/index.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> 59796f</p>
  <p><strong>Date:</strong> Updated 28 January 2022</p>
  <p><strong>Authors:</strong> <a href="https://github.com/annethyme">Anne Thyme Nørregaard</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules community group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It was approved and published by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: false
rule_meta:
  id: 59796f
  name: "Image button has non-empty accessible name"
  rule_type: atomic
  description: |
    This rule checks that each image button element has a non-empty accessible name.
  last_modified: 28 January 2022
  scs_tested:
    - handle: Non-text Content
      num: 1.1.1
      level: A
    - handle: Name, Role, Value
      num: 4.1.2
      level: A
---

## Applicability

This rule applies to any `input` element with a `type` [attribute value][] of `image`, and that is [included in the accessibility tree][].

## Expectation

Each target element has an [accessible name][] that is neither empty (`""`), nor the default name for this element (localized version of "Submit Query").

## Assumptions

- This rule assumes that all image buttons are [user interface components as defined by WCAG 2](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components).
- This rule assumes that the default name for image buttons ("Submit Query"), as defined by the [HTML Accessibility API Mapping][html aam image button], is never descriptive.

## Accessibility Support

There is a known combination of a popular browser and assistive technology that does not by default support `title` as an [accessible name][].

## Background

### Related rules

- [Button has non-empty accessible name](https://act-rules.github.io/rules/97a4e1)

### Bibliography

- [Understanding Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html)
- [Understanding Success Criterion 4.1.2: Name, Role, Value](https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html)
- [WCAG Technique H36: Using alt attributes on images used as submit buttons](https://www.w3.org/WAI/WCAG21/Techniques/html/H36)
- [HTML Accessibility API Mappings for computing the accessible name of image buttons](https://www.w3.org/TR/html-aam-1.0/#input-type-image)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>1.1.1 Non-text Content (Level A)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#non-text-content">Learn more about 1.1.1 Non-text Content</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level A and higher.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>4.1.2 Name, Role, Value (Level A)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#name-role-value">Learn more about 4.1.2 Name, Role, Value</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level A and higher.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>G94: Providing short text alternative for non-text content that serves the same purpose and presents the same information as the non-text content</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G94">Learn more about technique G94</a></li>
      <li>Not required for conformance to any W3C accessibility recommendation.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: technique is not satisfied</li>
        <li>All <code>passed</code> outcomes: technique needs further testing</li>
        <li>An <code>inapplicable</code> outcome: technique needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>G95: Providing short text alternatives that provide a brief description of the non-text content</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G95">Learn more about technique G95</a></li>
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

The image button has an [accessible name][] through the `alt` attribute.

```html
<input type="image" src="/test-assets/shared/search-icon.svg" alt="Search" />
```

#### Passed Example 2

The image button has an [accessible name][] through the `aria-label` attribute.

```html
<input type="image" src="/test-assets/shared/search-icon.svg" aria-label="Search" />
```

#### Passed Example 3

The image button has an [accessible name][] through the `title` attribute.

**note**: The `title` attribute may not always be [accessibility supported](#accessibility-support).

```html
<input type="image" src="/test-assets/shared/search-icon.svg" title="Search" />
```

#### Passed Example 4

The image button has an [accessible name][] through the `aria-labelledby` attribute.

```html
<input type="image" src="/test-assets/shared/search-icon.svg" aria-labelledby="id1" />
<div id="id1">Search</div>
```

### Failed

#### Failed Example 1

The image button element has an [accessible name][] equal to the default "Submit Query". The `name` attribute can not be used to provide an [accessible name][].

```html
<input type="image" name="search" src="/test-assets/shared/search-icon.svg" />
```

#### Failed Example 2

The image button has an empty `alt` attribute, and no other attributes that can give it an [accessible name][], hence its name is the default "Submit Query".

```html
<input type="image" src="/test-assets/shared/search-icon.svg" alt="" />
```

#### Failed Example 3

The image button has an `aria-labelledby` attribute, but the referenced element does not exist. This gives the button the default [accessible name][] of "Submit Query".

```html
<input type="image" src="/test-assets/shared/search-icon.svg" aria-labelledby="non-existing" />
```

### Inapplicable

#### Inapplicable Example 1

The `button` element is not an image button. [Success Criterion 1.1.1 Non-text Content](https://www.w3.org/TR/WCAG21/#non-text-content) can not fail text buttons. Only non-text content is applicable.

```html
<button>My button</button>
```

#### Inapplicable Example 2

The `input` element with the `type` [attribute value][] of `button` is not an image button. [Success Criterion 1.1.1 Non-text Content](https://www.w3.org/TR/WCAG21/#non-text-content) can not fail text buttons. Only non-text content is applicable.

```html
<input type="button" value="My button" />
```

#### Inapplicable Example 3

The `button` element is tested separately from the `img` element. [Success Criterion 4.1.2 Name, Role, Value](https://www.w3.org/TR/WCAG21/#name-role-value) is applied to the button, whereas the image is tested under [Success Criterion 1.1.1 Non-text Content](https://www.w3.org/TR/WCAG21/#non-text-content)

```html
<button><img src="/test-assets/shared/search-icon.svg" alt="Search" /></button>
```

#### Inapplicable Example 4

The `img` element is not a user interface component, and so is not tested for [Success Criterion 4.1.2 Name, Role, Value](https://www.w3.org/TR/WCAG21/#name-role-value).

```html
<img src="/test-assets/shared/w3c-logo.png" alt="W3C logo" />
```

#### Inapplicable Example 5

The image button is ignored by assistive technologies because it is not [included in the accessibility tree][]. These are not required to have an accessible name. If at some future state of the page the element gets [included in the accessibility tree][], an [accessible name][] will be necessary.

```html
<input type="image" src="/test-assets/shared/search-icon.svg" style="display: none;" />
```

## Glossary

### Accessible Name {#accessible-name}

The _accessible name_ is the programmatically determined name of a user interface element that is [included in the accessibility tree](#included-in-the-accessibility-tree).

The accessible name is calculated using the [accessible name and description computation][].

For native markup languages, such as HTML and SVG, additional information on how to calculate the accessible name can be found in [HTML Accessibility API Mappings 1.0, Accessible Name and Description Computation (working draft)](https://www.w3.org/TR/html-aam/#accessible-name-and-description-computation) and [SVG Accessibility API Mappings, Name and Description (working draft)](https://www.w3.org/TR/svg-aam/#mapping_additional).

For more details, see [examples of accessible name][].

**Note:** As per the [accessible name and description computation][], each element always has an accessible name. When no accessible name is provided, the element will nonetheless be assigned an empty (`""`) one.

**Note:** As per the [accessible name and description computation][], accessible names are [flat string](https://www.w3.org/TR/accname-1.1/#terminology) trimmed of leading and trailing whitespace. Notably, it is not possible for a non-empty accessible name to be composed only of whitespace since these must be trimmed.

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

{% include_relative _implementation-approved.md %}

## Changelog

This is the first version of this ACT rule.

[accessible name and description computation]: https://www.w3.org/TR/accname 'Accessible Name and Description Computation'
[accessible name]: #accessible-name 'Definition of Accessible Name'
[attribute value]: #attribute-value 'Definition of Attribute Value'
[boolean attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes 'HTML Specification of Boolean Attribute'
[comma separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#comma-separated-tokens 'HTML Specification of Comma Separated Tokens'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[enumerated attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute 'HTML Specification of Enumerated Attribute'
[examples of accessible name]: https://act-rules.github.io/pages/examples/accessible-name/
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[html aam image button]: https://www.w3.org/TR/html-aam-1.0/#input-type-image 'HTML Accessibility API Mapping, image button'
[html aam]: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings 'Specification of HTML attributes value mapping to ARIA states and properties'
[idl attribute]: https://heycam.github.io/webidl/#idl-attributes "Definition of Web IDL Attribute (Editor's Draft)"
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[numbers]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#numbers 'HTML Specification of Number Parsing'
[reflect]: https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes 'HTML specification of Reflecting Content Attributes in IDL Attributes'
[space separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens 'HTML Specification of Space Separated Tokens'
[wai-aria specification]: https://www.w3.org/TR/wai-aria-1.1/#propcharacteristic_value 'WAI-ARIA Specification of States and Properties Value'
