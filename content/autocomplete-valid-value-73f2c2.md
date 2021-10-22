---
title: "autocomplete attribute has valid value"
permalink: /standards-guidelines/act/rules/autocomplete-valid-value-73f2c2/
ref: /standards-guidelines/act/rules/autocomplete-valid-value-73f2c2/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/autocomplete-valid-value-73f2c2.md
footer: |
  <p><strong>Date:</strong> Updated 22 October 2021</p>
  <p><strong>Authors:</strong> <a href="https://github.com/ajanec01">Aron Janecki</a>, <a href="https://github.com/wilcofiers">Wilco Fiers</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules community group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>.</p>
proposed: true
rule_meta:
  id: 73f2c2
  name: "`autocomplete` attribute has valid value"
  rule_type: atomic
  description: |
    This rule checks that the HTML `autocomplete` attribute has a correct value.
  accessibility_requirements:
    'wcag21:1.3.5':
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
  last_modified: 22 October 2021
  scs_tested:
    - handle: Identify Input Purpose
      num: 1.3.5
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

This rule applies to any [HTML][] `input`, `select` and `textarea` element with an `autocomplete` [attribute value][] that is neither empty (`""`) nor only [ASCII whitespace][], except if one or more of the following is true:

- **toggle**: the `autocomplete` attribute consists of a single token that is an [ASCII case-insensitive][] match for the string `off` or the string `on`; or
- **disabled**: the element is a [disabled element]; or
- **fixed value**: the element is an `input` element with a `type` [attribute value][] of `hidden`, `button`, `submit` or `reset`; or
- **hidden**: the element is not [visible][], and not [included in the accessibility tree][]; or
- **static**: the element is not part of [sequential focus navigation][] and has a [semantic role][] that is not a [widget role][].

## Expectation

Each test target's `autocomplete` [attribute value][] is a [space separated][] list of one or more tokens that follow the [HTML specification for Autofill detail tokens][], which requires that the token list match the following in the correct order:

1. An optional token that starts with "section-"; then
2. An optional token of either "shipping" or "billing"; then
3. An optional token of either "home", "work", "mobile", "fax" or "pager", only if the last token is "email", "impp", "tel" or "tel-\*"; then
4. A required token from the [correct autocomplete field][].

## Assumptions

The `autocomplete` attribute is used on form fields that correspond to [Input Purposes for User Interface Components](https://www.w3.org/TR/WCAG21/#input-purposes) and collect information about the user.

If the `autocomplete` attribute is used to describe "custom" taxonomy, for example using the custom autocomplete value "banner" (`<input type="text" autocomplete="banner" />`), success Criterion [1.3.5 Identify Input Purpose][sc135] may be satisfied even if this rule failed.

The `aria-disabled` state is used on `input` elements which are not part of [sequential focus navigation][] and are not otherwise [operable](https://www.w3.org/TR/wai-aria-1.2/#dfn-operable). If this is not the case, this rule may be inapplicable on elements that are still operable and require a valid `autocomplete` attribute to satisfy success criterion [1.3.5 Identify Input Purpose][sc135].

The purpose of a control is programmatically identifiable even when its `autocomplete` [attribute value][] is not an [appropriate field name for the form control][].

## Accessibility Support

- While `autocomplete` is a promising technique for supporting personalization in HTML, support for this in assistive technologies is fairly limited.
- Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have a [semantic role][] of `none` and fail this rule with some technology but users of other technologies would not experience any accessibility issue.
- Some user agents treat the value of the `aria-disabled` attribute as case-sensitive.
- In some user agents, querying the value of the `autocomplete` property returns an empty string ("") even when the attribute was set according to the rule's expectations. It affects assistive technologies which rely on this property to personalize input fields collecting information about the user.

## Background

The intent of this rule is to ensure that the `autocomplete` attribute can be used to support personalization. Many users may find it easier to fill out forms if those can be styled or laid out in a way that is familiar to them. Assistive technologies can do this when a form control is marked up in such a way that its purpose can be understood. For instance, assistive technologies could add familiar icons and colors to different fields, making it easier for the user to understand what the form does.

Many browsers provide auto-filling suggestions even when the control's `type` [attribute value][] is not [appropriate][appropriate field name for the form control] for its `autocomplete` [attribute value][]. The same happens when the `autocomplete` property is queried. However, the `autocomplete` property is not programmatically identifiable if the requirements for the optional tokens are not met.

The auto-completing feature of the `autocomplete` attribute benefits many users, but it is not required to satisfy success Criterion [1.3.5 Identify Input Purpose][sc135]. Setting `autocomplete="off"` on the element's [form owner](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-owner) prevents the user agent from completing it, but it does not prevent the `autocomplete` [attribute value][] from being programmatically identifiable.

- [Understanding Success Criterion 1.3.5: Identify Input Purpose](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html)
- [Definition: programmatically determined (programmatically determinable)](https://www.w3.org/TR/WCAG21/#dfn-programmatically-determinable)
- [Autofill](https://html.spec.whatwg.org/#autofill)

## Test Cases

### Passed

#### Passed Example 1

This `autocomplete` [attribute value][] only has the required token "username".

```html
<label>Username<input autocomplete="username"/></label>
```

#### Passed Example 2

The `autocomplete` [attribute value][] of this `select` element has the required token "bday-month". The element's [form owner](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-owner) has `autocomplete="off"`, which prevents the user agent from completing it. It does not prevent the `autocomplete` [attribute value][] from being programmatically identifiable.

```html
<form autocomplete="off">
	<label
		>Birthday month
		<select autocomplete="bday-month">
			<option>January</option>
			<option>...</option>
		</select>
	</label>
</form>
```

#### Passed Example 3

This `autocomplete` [attribute value][] only has the required token "street-address". Mixing upper and lower case letters is allowed for `autocomplete` attributes.

```html
<label> Street address<textarea autocomplete="Street-Address"></textarea></label>
```

#### Passed Example 4

This `autocomplete` [attribute value][] list includes a `work` token, allowed because it is used before `email`.

```html
<label>Work email<input autocomplete="work email"/></label>
```

#### Passed Example 5

This `autocomplete` [attribute value][] list includes a `section-` token, which can preface any [correct autocomplete field][].

```html
<label>Partner's email address<input autocomplete="section-partner email"/></label>
```

#### Passed Example 6

This `autocomplete` [attribute value][] list includes `section-` and `billing` tokens. These tokens can preface any [correct autocomplete field][].

```html
<label>Billing address- first line<input type="text" autocomplete="section-primary billing address-line1"/></label>
```

#### Passed Example 7

This `autocomplete` [attribute value][] list includes all allowed types of tokens in the correct order.

```html
<label>Office email<input type="text" autocomplete="section-primary shipping work email"/></label>
```

#### Passed Example 8

This `autocomplete` [attribute value][] only has the required token "bday-day". It remains programmatically identifiable even though it is inappropriate for the control's `type` [attribute value][] "tel".

```html
<label>Birthday day<input name="bdayday" type="tel" autocomplete="bday-day"/></label>
```

### Failed

#### Failed Example 1

This `autocomplete` [attribute value][] has an unknown term that is not a [correct autocomplete field][].

```html
<label>Username<input autocomplete="badname"/></label>
```

#### Failed Example 2

This `autocomplete` [attribute value][] has the `work` token which is a [correct autocomplete field][]. However, `work` can not be used with `photo`.

```html
<label>Photo<input autocomplete="work photo"/></label>
```

#### Failed Example 3

This `autocomplete` [attribute value][] includes the `work` token before the `shipping` token, instead of the other way around.

```html
<label>Email<input autocomplete="work shipping email"/></label>
```

#### Failed Example 4

This `autocomplete` [attribute value][] is comma separated instead of space using [ASCII whitespace][].

```html
<label>Email<input autocomplete="work,email"/></label>
```

#### Failed Example 5

The `autocomplete` attribute value is on an `input` element that does not have a semantic role that is a widget role, but still participates in [sequential focus navigation][] because of the `tabindex` attribute.

```html
<label>Username<input role="banner" tabindex="0" autocomplete="banner"/></label>
```

### Inapplicable

#### Inapplicable Example 1

This `autocomplete` [attribute value][] is empty ("").

```html
<label>Username<input autocomplete=""/></label>
```

#### Inapplicable Example 2

This `autocomplete` [attribute value][] contains only [ASCII whitespace][].

```html
<label>Username<input autocomplete=" "/></label>
```

#### Inapplicable Example 3

This `autocomplete` [attribute value][] is on an element that is not [visible][] through `display:none`.

```html
<label>Username<input autocomplete="badname" style="display:none"/></label>
```

#### Inapplicable Example 4

This `autocomplete` attribute is on an `input` element that has the `disabled` attribute.

```html
<label>Username<input autocomplete="badname" disabled/></label>
```

#### Inapplicable Example 5

This `autocomplete` attribute is on an `input` element that has the `aria-disabled` [attribute value][] of `true`.

```html
<label>Username<input autocomplete="badname" aria-disabled="true"/></label>
```

#### Inapplicable Example 6

This `autocomplete` attribute is ignored because it is on an element with a [semantic role][] of `none`. The `disabled` attribute is required to ensure [presentational roles conflict resolution][] does not cause the `none` role to be ignored.

```html
<label>Username<input type="text" role="none" disabled autocomplete="badname"/></label>
```

#### Inapplicable Example 7

This `autocomplete` attribute is inapplicable because it has the `off` value.

```html
<label>Friend's first name<input type="text" autocomplete="off"/></label>
```

## Glossary

### Appropriate field for the form control {#appropriate-field-for-the-form-control}

The field name of the form control is _appropriate_ if it is listed in the autocomplete fields table from the HTML 5.2 specification as applying to the specified control group. [https://html.spec.whatwg.org/#inappropriate-for-the-control](https://html.spec.whatwg.org/#inappropriate-for-the-control).

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

### Correct autocomplete field {#correct-autocomplete-field}

Any field name listed in the autocomplete fields table from the HTML 5.2 specification:
[https://html.spec.whatwg.org/#autofill-field](https://html.spec.whatwg.org/#autofill-field)

### Disabled Element {#disabled-element}

An element is _disabled_ when it has been rendered [inoperable][] in one or more of the following ways:

1. The element matches the [`:disabled` pseudo-class][disabled pseudo-class]. For HTML elements this means that the element is [actually disabled][].

2. The element has a [shadow-including ancestor][] whose `aria-disabled` [attribute value][] is "true".

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

{% include_relative implementations/73f2c2.md %}

## Changelog

This is the first version of this ACT rule.

[accessibility support base line]: https://www.w3.org/TR/WCAG-EM/#step1c 'Definition of accessibility support base line'
[actually disabled]: https://html.spec.whatwg.org/multipage/semantics-other.html#concept-element-disabled 'HTML definition of Actually Disabled'
[appropriate field name for the form control]: #appropriate-field-for-the-form-control 'Definition of Appropriate field for the form control'
[ascii case-insensitive]: https://infra.spec.whatwg.org/#ascii-case-insensitive 'definition of ASCII case-insensitive'
[ascii whitespace]: https://infra.spec.whatwg.org/#ascii-whitespace 'HTML ASCII whitespace 2020/08/12'
[assistive technology]: https://www.w3.org/TR/WCAG21/#dfn-assistive-technologies 'WCAG definition of Assistive Technologies'
[attribute value]: #attribute-value 'Definition of Attribute Value'
[boolean attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes 'HTML Specification of Boolean Attribute'
[comma separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#comma-separated-tokens 'HTML Specification of Comma Separated Tokens'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[correct autocomplete field]: #correct-autocomplete-field 'Definition of Correct autocomplete field'
[disabled element]: #disabled-element 'Definition of Disabled Element'
[disabled pseudo-class]: https://drafts.csswg.org/selectors/#disabled-pseudo "CSS Selectors Level 4 (Editor's Draft), definition of the :disabled pseudo-class"
[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[enumerated attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute 'HTML Specification of Enumerated Attribute'
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[explicit role]: #explicit-role 'Definition of Explicit Role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focusable]: #focusable 'Definition of Focusable'
[html aam]: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings 'Specification of HTML attributes value mapping to ARIA states and properties'
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[html specification for autofill detail tokens]: https://html.spec.whatwg.org/#autofill-detail-tokens 'HTML Autofill Detail, 2020/08/12'
[html]: #namespaced-element
[idl attribute]: https://heycam.github.io/webidl/#idl-attributes "Definition of Web IDL Attribute (Editor's Draft)"
[implicit role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the accessibility tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[inoperable]: https://www.w3.org/TR/wai-aria/#dfn-operable
[marked as decorative]: #marked-as-decorative 'Definition of Marked as Decorative'
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
[numbers]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#numbers 'HTML Specification of Number Parsing'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[programmatically hidden]: #programmatically-hidden 'Definition of Programmatically Hidden'
[pure decoration]: https://www.w3.org/TR/WCAG21/#dfn-pure-decoration 'WCAG definition of Pure Decoration'
[reflect]: https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes 'HTML specification of Reflecting Content Attributes in IDL Attributes'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[sc135]: https://www.w3.org/TR/WCAG21/#identify-input-purpose 'WCAG 2.1 success criterion 1.3.5 Identify Input Purpose'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[sequential focus navigation]: https://html.spec.whatwg.org/#sequential-focus-navigation 'HTML sequential focus navigation, 2020/08/12'
[shadow-including ancestor]: https://dom.spec.whatwg.org/#concept-shadow-including-ancestor
[space separated]: https://html.spec.whatwg.org/#set-of-space-separated-tokens 'HTML Set of space separated tokens 2020/08/12'
[visible]: #visible 'Definition of Visible'
[wai-aria specification]: https://www.w3.org/TR/wai-aria-1.1/#propcharacteristic_value 'WAI-ARIA Specification of States and Properties Value'
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
[widget role]: https://www.w3.org/TR/wai-aria-1.1/#widget_roles 'WAI-ARIA widget roles'
