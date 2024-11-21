---
title: "Autocomplete attribute has valid value"
permalink: /standards-guidelines/act/rules/73f2c2/proposed/
ref: /standards-guidelines/act/rules/73f2c2/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/73f2c2/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> 73f2c2</p>
  <p><strong>Date:</strong> Updated 21 November 2024</p>
  <p><strong>Authors:</strong> <a href="https://github.com/ajanec01">Aron Janecki</a>, <a href="https://github.com/wilcofiers">Wilco Fiers</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: 73f2c2
  name: "Autocomplete attribute has valid value"
  rule_type: atomic
  original_file: autocomplete-valid-value-73f2c2.md
  description: |
    This rule checks that the HTML `autocomplete` attribute has a correct value.
  last_modified: 21 November 2024
  scs_tested:
    - handle: Identify Input Purpose
      num: 1.3.5
      level: AA
---

## Applicability

This rule applies to any [HTML][] `input`, `select` and `textarea` element with an `autocomplete` [attribute value][] that is neither empty (`""`) nor only [ASCII whitespace][], except if one or more of the following is true:

- <dfn id="73f2c2:toggle">toggle</dfn>: the `autocomplete` attribute consists of a single token that is an [ASCII case-insensitive][] match for the string `off` or the string `on`; or
- <dfn id="73f2c2:disabled">disabled</dfn>: the element is a [disabled element]; or
- <dfn id="73f2c2:fixed-value">fixed value</dfn>: the element is an `input` element with a `type` [attribute value][] of `button`, `checkbox`, `file`, `image`, `radio`, `reset` or `submit`; or
- <dfn id="73f2c2:hidden">hidden</dfn>: the element is not [visible][], and not [included in the accessibility tree][]; or
- <dfn id="73f2c2:static">static</dfn>: the element is not part of [sequential focus navigation][] and has a [semantic role][] that is not a [widget role][].

## Expectation

Each test target's `autocomplete` [attribute value][] is a [space separated][] list of one or more tokens that follow the [HTML specification for Autofill detail tokens][], which requires that the token list match the following in the correct order:

1. An optional token that starts with "section-"; then
2. An optional token of either "shipping" or "billing"; then
3. An optional token of either "home", "work", "mobile", "fax" or "pager", only if the next token is "email", "impp", "tel" or "tel-\*"; then
4. A required token from the [correct autocomplete field][]; then
5. An optional "webauthn" token.

## Assumptions

The `autocomplete` attribute is used on form fields that correspond to [Input Purposes for User Interface Components](https://www.w3.org/TR/WCAG22/#input-purposes) and collect information about the user.

If the `autocomplete` attribute is used to describe "custom" taxonomy, for example using the custom autocomplete value "banner" (`<input type="text" autocomplete="banner" />`), success criterion [1.3.5 Identify Input Purpose][sc135] may be satisfied even if this rule failed.

The `aria-disabled` state is used on `input` elements which are not part of [sequential focus navigation][] and are not otherwise [operable](https://www.w3.org/TR/wai-aria-1.2/#dfn-operable). If this is not the case, this rule may be inapplicable on elements that are still operable and require a valid `autocomplete` attribute to satisfy success criterion [1.3.5 Identify Input Purpose][sc135].

The purpose of a control is programmatically identifiable even when its `autocomplete` [attribute value][] is not an [appropriate field name for the form control][].

## Accessibility Support

- While `autocomplete` is a promising technique for supporting personalization in HTML, support for this in assistive technologies is fairly limited.
- Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have a [semantic role][] of `none` and fail this rule with some technology but users of other technologies would not experience any accessibility issue.
- In some user agents, querying the value of the `autocomplete` property returns an empty string ("") even when the attribute was set according to the rule's expectations. It affects assistive technologies which rely on this property to personalize input fields collecting information about the user.
- Authors may assign inappropriate `autocomplete` attribute values. Moreover, HTML specifications restrict certain `autocomplete` attribute values to specific form controls. Mismatches between `autocomplete` attribute values and form control types may or may not lead to a failure of [success criterion 1.3.5 Identify Input Purpose](https://www.w3.org/TR/WCAG22/#identify-input-purpose). However, this rule focuses exclusively on validating valid `autocomplete` attribute values, disregarding their contextual appropriateness.

## Background

The intent of this rule is to ensure that the `autocomplete` attribute can be used to support personalization. Many users may find it easier to fill out forms if those can be styled or laid out in a way that is familiar to them. Assistive technologies can do this when a form control is marked up in such a way that its purpose can be understood. For instance, assistive technologies could add familiar icons and colors to different fields, making it easier for the user to understand what the form does.

Many browsers provide auto-filling suggestions even when the control's `type` [attribute value][] is not [appropriate][appropriate field name for the form control] for its `autocomplete` [attribute value][]. The same happens when the `autocomplete` property is queried. However, the `autocomplete` property is not programmatically identifiable if the requirements for the optional tokens are not met.

The auto-completing feature of the `autocomplete` attribute benefits many users, but it is not required to satisfy success criterion [1.3.5 Identify Input Purpose][sc135]. Setting `autocomplete="off"` on the element's [form owner](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#form-owner) prevents the user agent from completing it, but it does not prevent the `autocomplete` [attribute value][] from being programmatically identifiable.

The [fixed value](#73f2c2:fixed-value) condition in the Applicability is excluding `input` elements that do not consider the `autocomplete` attribute, based on their `type` [attribute value][]; `input` elements with a `type` [attribute value][] of `hidden` are excluded by the [hidden](#73f2c2:hidden) condition.

On an `input` element with a `type` [attribute value][] of `hidden`, the autocomplete attribute wears the [autofill anchor mantle](https://html.spec.whatwg.org/#autofill-anchor-mantle), describing the meaning of the given value. In all other cases, it wears the [autofill expectation mantle](https://html.spec.whatwg.org/#autofill-expectation-mantle).

### Bibliography

- [Understanding Success Criterion 1.3.5: Identify Input Purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html)
- [Definition: programmatically determined (programmatically determinable)](https://www.w3.org/TR/WCAG22/#dfn-programmatically-determinable)
- [Autofill](https://html.spec.whatwg.org/#autofill)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>1.3.5 Identify Input Purpose (Level AA)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#identify-input-purpose">Learn more about 1.3.5 Identify Input Purpose</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.1 on level AA and higher.</li>
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

- [Accessibility Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-accessibility)
- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)
- [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)

## Test Cases

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/73f2c2/eabc191efa65e6613739042a0ae21937cda02428.html">Open in a new tab</a>

This `autocomplete` [attribute value][] only has the required token "username".

```html
<label>Username<input autocomplete="username"/></label>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/73f2c2/93ac216a885112ab9882b119a62532c7f6b6c528.html">Open in a new tab</a>

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

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/73f2c2/d64a0231dbcc95b21aafe3b554b9fdcbc9855301.html">Open in a new tab</a>

This `autocomplete` [attribute value][] only has the required token "street-address". Mixing upper and lower case letters is allowed for `autocomplete` attributes.

```html
<label> Street address<textarea autocomplete="Street-Address"></textarea></label>
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/73f2c2/ff150593870cd4c1228d5eb69e2e0bc205e09727.html">Open in a new tab</a>

This `autocomplete` [attribute value][] list includes a `work` token, allowed because it is used before `email`.

```html
<label>Work email<input autocomplete="work email"/></label>
```

#### Passed Example 5

<a class="example-link" title="Passed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/73f2c2/e9f07d1795d34f948d3dd42051963623109a0bae.html">Open in a new tab</a>

This `autocomplete` [attribute value][] list includes a `section-` token, which can preface any [correct autocomplete field][].

```html
<label>Partner's email address<input autocomplete="section-partner email"/></label>
```

#### Passed Example 6

<a class="example-link" title="Passed Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/73f2c2/0411dce372604b1c0b14fe48aae6190882e8110c.html">Open in a new tab</a>

This `autocomplete` [attribute value][] list includes `section-` and `billing` tokens. These tokens can preface any [correct autocomplete field][].

```html
<label>Billing address- first line<input type="text" autocomplete="section-primary billing address-line1"/></label>
```

#### Passed Example 7

<a class="example-link" title="Passed Example 7" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/73f2c2/41c94e01a5809d1558eea96efc67a3ac6c90c148.html">Open in a new tab</a>

This `autocomplete` [attribute value][] list includes all allowed types of tokens in the correct order.

```html
<label>Office email<input type="text" autocomplete="section-primary shipping work email"/></label>
```

#### Passed Example 8

<a class="example-link" title="Passed Example 8" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/73f2c2/efcd5df49b39506dac34a310f4b8bc0df71716d3.html">Open in a new tab</a>

This `autocomplete` [attribute value][] has the required token "current-password", followed by the optional "webauthn" token.

```html
<label>
	Password
	<input type="password" autocomplete="current-password webauthn" />
</label>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/73f2c2/2ed049a75aaa549c0ba477c5048f7f2bb34cb160.html">Open in a new tab</a>

This `autocomplete` [attribute value][] has an unknown term that is not a [correct autocomplete field][].

```html
<label>Username<input autocomplete="badname"/></label>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/73f2c2/512d17179ce05f1d10bccf46b7e294864bfa308d.html">Open in a new tab</a>

This `autocomplete` [attribute value][] has the `work` token which is a [correct autocomplete field][]. However, `work` can not be used with `photo`.

```html
<label>Photo<input autocomplete="work photo"/></label>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/73f2c2/9a55c66417d240eec2078684cd95c37cd35660ec.html">Open in a new tab</a>

This `autocomplete` [attribute value][] includes the `work` token before the `shipping` token, instead of the other way around.

```html
<label>Email<input autocomplete="work shipping email"/></label>
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/73f2c2/81de203102fe8bf98e7f95aa9959374c1f6a3d3b.html">Open in a new tab</a>

This `autocomplete` [attribute value][] is comma separated instead of space using [ASCII whitespace][].

```html
<label>Email<input autocomplete="work,email"/></label>
```

#### Failed Example 5

<a class="example-link" title="Failed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/73f2c2/7f282d49777b1261a3907ca35c6549b2210b18df.html">Open in a new tab</a>

The `autocomplete` attribute value is on an `input` element that does not have a semantic role that is a widget role, but still participates in [sequential focus navigation][] because of the `tabindex` attribute.

```html
<label>Username<input role="banner" tabindex="0" autocomplete="banner"/></label>
```

#### Failed Example 6

<a class="example-link" title="Failed Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/73f2c2/2512c24c9a793fa8a30958e203090f955a3fc262.html">Open in a new tab</a>

This `autocomplete` attribute does not contain any required token.

```html
<label>Address<input autocomplete="shipping"/></label>
```

#### Failed Example 7

<a class="example-link" title="Failed Example 7" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/73f2c2/55ce632e85a0243abf196c59242b2af699e5c0d4.html">Open in a new tab</a>

This `autocomplete` attribute contains two of the required tokens, but only one is allowed.

```html
<label>Address<input autocomplete="address-line1 address-line2"/></label>
```

#### Failed Example 8

<a class="example-link" title="Failed Example 8" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/73f2c2/130d7f761a6a43b896b2f1d0ded311da6a7aebf1.html">Open in a new tab</a>

This `autocomplete` attribute contains a `work` modifier but no required token afterwards.

```html
<label>Email<input autocomplete="work"/></label>
```

#### Failed Example 9

<a class="example-link" title="Failed Example 9" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/73f2c2/3d79434f382323a20bc7dda8cd01e8d084a3c3bf.html">Open in a new tab</a>

This `autocomplete` attribute contains an extra token after the allowed ones.

```html
<label>Password<input type="password" autocomplete="current-password webauthn invalid"/></label>
```

#### Failed Example 10

<a class="example-link" title="Failed Example 10" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/73f2c2/92214e0008b9b2e7bd98d991d27c09bb33d4c92c.html">Open in a new tab</a>

This `autocomplete` attribute contains an extra token after the allowed ones.

```html
<label>Email<input autocomplete="email invalid"/></label>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/73f2c2/b08efeaf52bbd436d492213c3843894ce4e1151f.html">Open in a new tab</a>

This `autocomplete` [attribute value][] is empty ("").

```html
<label>Username<input autocomplete=""/></label>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/73f2c2/b3ca8290eb74aa794ffbfd3e338facc52e675746.html">Open in a new tab</a>

This `autocomplete` [attribute value][] contains only [ASCII whitespace][].

```html
<label>Username<input autocomplete=" "/></label>
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/73f2c2/84ead6cf6757e4ddb90a2912c50ee670b2c776ba.html">Open in a new tab</a>

This `autocomplete` [attribute value][] is on an element that is not [visible][] through `display:none`.

```html
<label>Username<input autocomplete="badname" style="display:none"/></label>
```

#### Inapplicable Example 4

<a class="example-link" title="Inapplicable Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/73f2c2/8ffedb82ca905c0cd8851d924884d9c1cdcb8d08.html">Open in a new tab</a>

This `autocomplete` attribute is on an `input` element that has the `disabled` attribute.

```html
<label>Username<input autocomplete="badname" disabled/></label>
```

#### Inapplicable Example 5

<a class="example-link" title="Inapplicable Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/73f2c2/84895e9fbb270edde8d9356fa9924eabaf86cf02.html">Open in a new tab</a>

This `autocomplete` attribute is on an `input` element that has the `aria-disabled` [attribute value][] of `true`.

```html
<label>Username<input autocomplete="badname" aria-disabled="true"/></label>
```

#### Inapplicable Example 6

<a class="example-link" title="Inapplicable Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/73f2c2/4700b31c9114050fe08d832c6a634d9e54ac78ee.html">Open in a new tab</a>

This `autocomplete` attribute is ignored because it is on an element with a [semantic role][] of `none`. The `disabled` attribute is required to ensure [presentational roles conflict resolution][] does not cause the `none` role to be ignored.

```html
<label>Username<input type="text" role="none" disabled autocomplete="badname"/></label>
```

#### Inapplicable Example 7

<a class="example-link" title="Inapplicable Example 7" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/73f2c2/3a6b86ed813d4c34e566641e9fcd571e16aeae6f.html">Open in a new tab</a>

This `autocomplete` attribute is inapplicable because it has the `off` value.

```html
<label>Friend's first name<input type="text" autocomplete="off"/></label>
```

#### Inapplicable Example 8

<a class="example-link" title="Inapplicable Example 8" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/73f2c2/cd80cea25465f393871872ab3cc202d765e5d11d.html">Open in a new tab</a>

This `input` element has a [fixed value](#73f2c2:fixed-value) due to its `type` [attribute value][] of `submit`. `autocomplete` does not apply to Submit buttons.

```html
<input type="submit" autocomplete="email" />
```

#### Inapplicable Example 9

<a class="example-link" title="Inapplicable Example 9" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/73f2c2/87773383afa97f86ca5a0811cbe77c4f14ec1524.html">Open in a new tab</a>

This `input` element is [hidden](#73f2c2:hidden) because of its `type` [attribute value][] of `hidden` (following standard [User Agent style sheet recommendations](https://html.spec.whatwg.org/multipage/rendering.html#hidden-elements). Knowing the transaction amount may still be used in other fields, e.g. to suggest a card with sufficient balance; this is not tested by this rule.

```html
<input type="hidden" autocomplete="transaction-amount" value="100.00" />
```

## Glossary

### Appropriate field for the form control {#appropriate-field-for-the-form-control}

The field name of the form control is _appropriate_ if it is listed in the autocomplete fields table from the HTML 5.2 specification as applying to the specified control group. [https://html.spec.whatwg.org/#inappropriate-for-the-control](https://html.spec.whatwg.org/#inappropriate-for-the-control).

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

An _outcome_ is a conclusion that comes from evaluating an ACT Rule on a [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) or one of its constituent [test target](https://www.w3.org/TR/act-rules-format/#test-target). An outcome can be one of the three following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) meets all expectations
- **Failed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) does not meet all expectations

**Note:** A rule has one `passed` or `failed` outcome for every [test target](https://www.w3.org/TR/act-rules-format/#test-target). When there are no test targets the rule has one `inapplicable` outcome. This means that each [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) will have one or more outcomes.

**Note:** Implementations using the [EARL10-Schema](https://www.w3.org/TR/EARL10-Schema/) can express the outcome with the [outcome property](https://www.w3.org/TR/EARL10-Schema/#outcome). In addition to `passed`, `failed` and `inapplicable`, EARL 1.0 also defined an `incomplete` outcome. While this cannot be the outcome of an ACT Rule when applied in its entirety, it often happens that rules are only partially evaluated. For example, when applicability was automated, but the expectations have to be evaluated manually. Such "interim" results can be expressed with the `incomplete` outcome.

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

### WAI-ARIA specifications {#wai-aria-specifications}

The _WAI ARIA Specifications_ group both the WAI ARIA W3C Recommendation and ARIA modules, namely:

- [Accessible Rich Internet Applications (WAI-ARIA) 1.2](https://www.w3.org/TR/wai-aria-1.2/)
- [WAI-ARIA Graphics Module 1.0](https://www.w3.org/TR/graphics-aria-1.0/)
- [Digital Publishing WAI-ARIA Module 1.0](https://www.w3.org/TR/dpub-aria-1.0/)

**Note:** depending on the type of content being evaluated, part of the specifications might be irrelevant and should be ignored.

[accessibility support base line]: https://www.w3.org/TR/WCAG-EM/#step1c 'Definition of accessibility support base line'
[actually disabled]: https://html.spec.whatwg.org/multipage/semantics-other.html#concept-element-disabled 'HTML definition of Actually Disabled'
[appropriate field name for the form control]: #appropriate-field-for-the-form-control 'Definition of Appropriate field for the form control'
[ascii case-insensitive]: https://infra.spec.whatwg.org/#ascii-case-insensitive 'definition of ASCII case-insensitive'
[ascii whitespace]: https://infra.spec.whatwg.org/#ascii-whitespace 'HTML ASCII whitespace 2020/08/12'
[assistive technology]: https://www.w3.org/TR/WCAG22/#dfn-assistive-technologies 'WCAG definition of Assistive Technologies'
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
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[programmatically hidden]: #programmatically-hidden 'Definition of Programmatically Hidden'
[pure decoration]: https://www.w3.org/TR/WCAG22/#dfn-pure-decoration 'WCAG definition of Pure Decoration'
[reflect]: https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes 'HTML specification of Reflecting Content Attributes in IDL Attributes'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[sc135]: https://www.w3.org/TR/WCAG22/#identify-input-purpose 'WCAG 2.2 success criterion 1.3.5 Identify Input Purpose'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[sequential focus navigation]: https://html.spec.whatwg.org/#sequential-focus-navigation 'HTML sequential focus navigation, 2020/08/12'
[shadow-including ancestor]: https://dom.spec.whatwg.org/#concept-shadow-including-ancestor
[space separated]: https://html.spec.whatwg.org/#set-of-space-separated-tokens 'HTML Set of space separated tokens 2020/08/12'
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[visible]: #visible 'Definition of Visible'
[wai-aria specification]: https://www.w3.org/TR/wai-aria-1.2/#propcharacteristic_value 'WAI-ARIA Specification of States and Properties Value'
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
[widget role]: https://www.w3.org/TR/wai-aria-1.2/#widget_roles 'WAI-ARIA widget roles'
