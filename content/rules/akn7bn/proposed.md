---
title: "Iframe with interactive elements is not excluded from tab-order"
permalink: /standards-guidelines/act/rules/akn7bn/proposed/
ref: /standards-guidelines/act/rules/akn7bn/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/akn7bn/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> akn7bn</p>
  <p><strong>Date:</strong> Updated 3 November 2022</p>
  <p><strong>Authors:</strong> <a href="https://www.linkedin.com/in/brianbors/">Brian Bors</a>, <a href="https://github.com/wilcofiers">Wilco Fiers</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: akn7bn
  name: "Iframe with interactive elements is not excluded from tab-order"
  rule_type: atomic
  description: |
    This rule checks that `iframe` elements which contain an interactive (tabbable) element are not excluded from sequential focus navigation.
  last_modified: 3 November 2022
  scs_tested:
    - handle: Keyboard
      num: 2.1.1
      level: A
---

## Applicability

This rule applies to any `iframe` element that [contains](#akn7bn:contain) at least one element for which all the following are true:

- the element is [visible][]; and
- the element is part of the [sequential focus navigation order][] of the `iframe`'s [document][].

An element is <dfn id="akn7bn:contain">contained</dfn> in a [nested browsing context][] if its [owner document][] is the [container document][] of the [nested browsing context][].

## Expectation

The test target does not have a negative number as a `tabindex` [attribute value][].

## Assumptions

This rule assumes that interactive content inside `iframe` elements is used to provide functionality. If the interactive content does not provide functionality, for example a button that does nothing when clicked, [success criterion 2.1.1][sc211] may be satisfied, even if the rule is failed.

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

Setting the `tabindex` attribute of an `iframe` element to a negative value effectively excludes its content from the tab-order of the page. A `button` may be in the tab-order of an `iframe`, but if the `iframe` itself is taken from the tab-order, the `button` is effectively keyboard inaccessible.

Each document, including documents inside an `iframe`, has its own [sequential focus navigation order][]. These focus orders are combined to get the page's global tab-order (called the [flattened tabindex-ordered focus navigation scope][]). For an `iframe` with a negative tabindex, its sequential focus navigation order is not included in the page's global tab-order (as a consequence for the rules to build the [tabindex-ordered focus navigation scope][]).

### Bibliography

- [Understanding Success Criterion 2.1.1: Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard)
- [WCAG Technique G202: Ensuring keyboard control for all functionality](https://www.w3.org/WAI/WCAG21/Techniques/general/G202)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>2.1.1 Keyboard (Level A)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#keyboard">Learn more about 2.1.1 Keyboard</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level A and higher.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>G202: Ensuring keyboard control for all functionality</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G202">Learn more about technique G202</a></li>
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

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/akn7bn/1e3939d9f8e0f78f9c564ec6feb12cc5635c0acb.html">Open in a new tab</a>

This `iframe` element does not have a `tabindex` [attribute value][] that is a negative number

```html
<iframe srcdoc="<a href='/'>Home</a>"></iframe>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/akn7bn/a16be608639d0976b9d044360695d853384f56f0.html">Open in a new tab</a>

This `iframe` element does not have a `tabindex` [attribute value][] that is a negative number

```html
<iframe tabindex="0" srcdoc="<a href='/'>Home</a>"></iframe>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/akn7bn/62673162e22ee1e95e962522b1d1c3b549dbfc49.html">Open in a new tab</a>

This `iframe` element contains a [visible][] link that is part of its [sequential focus navigation order][], and has a negative `tabindex`.

```html
<iframe tabindex="-1" srcdoc="<a href='/'>Home</a>"></iframe>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/akn7bn/c90de6661c91b4449b96fb31e487c70d1e3350df.html">Open in a new tab</a>

This `iframe` element contains no content that is part of its [sequential focus navigation order][].

```html
<iframe tabindex="-1" srcdoc="<h1>Hello world</h1>"></iframe>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/akn7bn/033e04cced5973596d9aa724feacb027d23b4c53.html">Open in a new tab</a>

This `iframe` element contains no [visible][] content because the iframe is hidden.

```html
<iframe tabindex="-1" hidden srcdoc="<a href='/'>Home</a>"></iframe>
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/akn7bn/63cd20ec8886f4c59ff54f406a0e5933847bce75.html">Open in a new tab</a>

This `iframe` element contains no [visible][] content because of the small size of the iframe.

```html
<iframe tabindex="-1" width="1" height="1" srcdoc="<a href='/'>Home</a>"></iframe>
```

#### Inapplicable Example 4

<a class="example-link" title="Inapplicable Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/akn7bn/aa153f6799d28563054ce66bcf7dfcedf9b75288.html">Open in a new tab</a>

This `iframe` element contains a link that is not part of its [sequential focus navigation order][] because of its own `tabindex`.

```html
<iframe tabindex="-1" srcdoc="<a href='/' tabindex='-1'>Home</a>"></iframe>
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

### Outcome {#outcome}

An _outcome_ is a conclusion that comes from evaluating an ACT Rule on a [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) or one of its constituent [test target](https://www.w3.org/TR/act-rules-format/#test-target). An outcome can be one of the three following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) meets all expectations
- **Failed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) does not meet all expectations

**Note:** A rule has one `passed` or `failed` outcome for every [test target](https://www.w3.org/TR/act-rules-format/#test-target). When there are no test targets the rule has one `inapplicable` outcome. This means that each [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) will have one or more outcomes.

**Note:** Implementations using the [EARL10-Schema](https://www.w3.org/TR/EARL10-Schema/) can express the outcome with the [outcome property](https://www.w3.org/TR/EARL10-Schema/#outcome). In addition to `passed`, `failed` and `inapplicable`, EARL 1.0 also defined an `incomplete` outcome. While this cannot be the outcome of an ACT Rule when applied in its entirety, it often happens that rules are only partially evaluated. For example, when applicability was automated, but the expectations have to be evaluated manually. Such "interim" results can be expressed with the `incomplete` outcome.

### Visible {#visible}

Content perceivable through sight.

Content is considered _visible_ if making it fully transparent would result in a difference in the pixels rendered for any part of the document that is currently within the viewport or can be brought into the viewport via scrolling.

[Content is defined in WCAG](https://www.w3.org/TR/WCAG21/#dfn-content).

For more details, see [examples of visible](https://act-rules.github.io/pages/examples/visible/).

[attribute value]: #attribute-value 'Definition of Attribute Value'
[boolean attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes 'HTML Specification of Boolean Attribute'
[comma separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#comma-separated-tokens 'HTML Specification of Comma Separated Tokens'
[container document]: https://html.spec.whatwg.org/#bc-container-document 'HTML browsing context container document, 2020/12/18'
[document]: https://html.spec.whatwg.org/multipage/dom.html#document 'HTML definition of document'
[enumerated attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute 'HTML Specification of Enumerated Attribute'
[flattened tabindex-ordered focus navigation scope]: https://html.spec.whatwg.org/multipage/interaction.html#flattened-tabindex-ordered-focus-navigation-scope 'HTML - Living Standard, 2022/07/08'
[html aam]: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings 'Specification of HTML attributes value mapping to ARIA states and properties'
[idl attribute]: https://heycam.github.io/webidl/#idl-attributes "Definition of Web IDL Attribute (Editor's Draft)"
[nested browsing context]: https://html.spec.whatwg.org/#nested-browsing-context 'HTML nested browsing context, 2020/12/18'
[numbers]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#numbers 'HTML Specification of Number Parsing'
[owner document]: https://dom.spec.whatwg.org/#dom-node-ownerdocument 'DOM node owner document property, 2020/12/18'
[reflect]: https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes 'HTML specification of Reflecting Content Attributes in IDL Attributes'
[sc211]: https://www.w3.org/TR/WCAG21/#keyboard 'WCAG 2.1 Success criterion 2.1.1 Keyboard'
[sequential focus navigation order]: https://html.spec.whatwg.org/multipage/#sequential-focus-navigation 'HTML sequential focus navigation, 2020/12/18'
[space separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens 'HTML Specification of Space Separated Tokens'
[tabindex-ordered focus navigation scope]: https://html.spec.whatwg.org/multipage/interaction.html#tabindex-ordered-focus-navigation-scope
[visible]: #visible 'Definition of visible'
[wai-aria specification]: https://www.w3.org/TR/wai-aria-1.1/#propcharacteristic_value 'WAI-ARIA Specification of States and Properties Value'
