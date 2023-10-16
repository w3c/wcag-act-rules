---
title: "Word spacing in style attributes is not !important"
permalink: /standards-guidelines/act/rules/9e45ec/proposed/
ref: /standards-guidelines/act/rules/9e45ec/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/9e45ec/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> 9e45ec</p>
  <p><strong>Date:</strong> Updated 16 October 2023</p>
  <p><strong>Authors:</strong> <a href="https://github.com/Jym77">Jean-Yves Moyen</a>, <a href="https://github.com/jkodu">Jey Nandakumar</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
deprecated: |
  This rule has been deprecated and superseded by Rule [Important word spacing in style attributes is wide enough](https://act-rules.github.io/rules/nt4zgr). This rule is not maintained anymore and should not be used.
  
rule_meta:
  id: 9e45ec
  name: "DEPRECATED - Word spacing in style attributes is not !important"
  rule_type: atomic
  original_file: word-spacing-not-important-9e45ec.md
  description: |
    This rule checks that the `style` attribute is not used to prevent adjusting `word-spacing` by using `!important`, except if it's at least `0.16` times the font size.
  last_modified: 16 October 2023
  scs_tested:
    - handle: Text Spacing
      num: 1.4.12
      level: AA
---

## Applicability

This rule applies to any [HTML element][] that is [visible][] and for which the `style` attribute [declares][declared] the [word-spacing][] CSS property.

## Expectation

For each test target, at least one of the following is true:

- **not important**: the [computed][] value of its [word-spacing][] property is not [important][]; or
- **wide enough**: the [computed][] value of its [word-spacing][] property is at least 0.16 times the [computed][] value of its [font-size][] property; or
- **cascade**: the [cascaded][] value of its [word-spacing][] property is not a value [declared][] in its `style` attribute.

## Assumptions

- There is no mechanism available on the page to adjust [word-spacing][]. If there is such a mechanism, it is possible to fail this rule while [Success Criterion 1.4.12 Text Spacing][sc1412] is still satisfied.

- This rule assumes that WCAG's meaning for the "Word spacing style property" is the value of the CSS `word-spacing` property rather than the actual space between words. The value of the CSS property is _added_ to whichever spacing already exist (for example, the size of the space character). Thus, the actual space between words is larger than the value of the `word-spacing` property. If [Success Criterion 1.4.12 Text Spacing][sc1412] is concerned by the actual space between words, then this rule may fail (with the `word-spacing` property being too small) while the Success Criterion is still satisfied (with the actual space being enough).

- This rule assumes that when inter-words space is changed because of justification, the `word-spacing` property is not changed (the change occurs on the width of the space character between the words). Therefore, whether a text is justified or not doesn't change the result of this rule. Note that justifying text is a failure of [Success Criterion 1.4.8 Visual Presentation][sc148].

## Accessibility Support

While some assistive technologies are able to set [user origin][] or [user agent origin][] styles, others, such as browser extensions, are only able to set styles with the [author origin][]. Such assistive technologies cannot create styles "winning" the [cascade sort][] over a `style` attribute with an [important][] declaration.

## Background

When a style is [declared][] in the `style` attribute with an [important][] declaration, it "wins" the [cascade sort] over any other style from [author origin][], i.e. it cannot be overridden by any of these. On the other hand, if such a style is [declared][] in a style sheet, it can still "lose" the [cascade sort][] to declarations with higher [specificity][] or simply coming from a later style sheet (such as ones injected by assistive technologies). This rule ensures that the element is not in the first case and that the style can be overridden by users, unless it is already at least the minimum required threshold. [Important][] styles that are declared with the [user][user origin] or [user agent][user agent origin] origin can win the [cascade sort][] over styles with the [author origin][].

CSS specifications define each declaration as being either [important][] (if is as the `!important` annotation) or [normal][]. Given that `normal` is also a keyword for this property, and that `!important` is wider known that this distinction, this rule rather uses "[important][]"/"not [important][]" to avoid confusion.

### Bibliography

- [Understanding Success Criterion 1.4.12: Text Spacing](https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html)
- [CSS Text Module Level 3 - Spacing](https://www.w3.org/TR/css-text-3/#spacing)
- [CSS Visual formatting model details](https://drafts.csswg.org/css2/visudet.html)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>1.4.12 Text Spacing (Level AA)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#text-spacing">Learn more about 1.4.12 Text Spacing</a></li>
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

- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)
- [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)

## Test Cases

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9e45ec/d32bae2609b7c0c66a1df8dbfc182fb10c16805d.html">Open in a new tab</a>

This `p` element has a **not [important][]** [computed][] `word-spacing`.

```html
<p style="word-spacing: 0.1em">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9e45ec/45e5a588c3e8977fa0e83074d7f7c89738e8ec42.html">Open in a new tab</a>

This `p` element has a [computed][] `word-spacing` of 0.2 times the font size, which is **wide enough**.

```html
<p style="word-spacing: 0.2em !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9e45ec/2a2a14cc9bcb3fa7983e22f160ce9eeb6b832a8c.html">Open in a new tab</a>

This `p` element has a [computed][] `word-spacing` of `4px`, which is **wide enough** (the threshold is `4px`).

```html
<style>
	p {
		font-size: 25px;
	}
</style>

<p style="word-spacing: 4px !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9e45ec/6d5dde208ef91b6afceca022c7a2a12b99f042b7.html">Open in a new tab</a>

This `p` element has two [declared][] values for its `word-spacing` property. The latest wins the [cascade sort][]. It has a value of `0.2em`, which is **wide enough**.

```html
<p style="word-spacing: 0.1em !important; word-spacing: 0.2em !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 5

<a class="example-link" title="Passed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9e45ec/2d9b8cf0906f0e05e4d487c9682db7a7e022fab0.html">Open in a new tab</a>

This `p` element has two [declared][] values for its `word-spacing` property. The one which is [important][] wins the [cascade sort][]. It has a value of `0.2em`, which is **wide enough**.

```html
<p style="word-spacing: 0.2em !important; word-spacing: 0.1em">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 6

<a class="example-link" title="Passed Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9e45ec/51faee765656c7bfe86b959373e1df8679726779.html">Open in a new tab</a>

The [cascaded][] value of the `word-spacing` property of this `p` element is [declared][] in the style sheet, not in the `style` attribute (it wins the [cascade sort][] because it is [important][]). Thus, the `p` element matches the **cascade** condition.

```html
<style>
	p {
		word-spacing: 0.1em !important;
	}
</style>

<p style="word-spacing: 0.2em">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 7

<a class="example-link" title="Passed Example 7" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9e45ec/fa119442cf663c73bf332488f3965b427b024009.html">Open in a new tab</a>

The [computed][] value of the `word-spacing` property of this `p` element is **not [important][]**. The [computed][] value of the `word-spacing` property of this `span` element is the [inherited][] value, that is the [computed][] value of its parent and therefore also **not [important][]**.

```html
<p style="word-spacing: 0.1em">
	<span style="word-spacing: inherit !important;">
		The toy brought back fond memories of being lost in the rain forest.
	</span>
</p>
```

#### Passed Example 8

<a class="example-link" title="Passed Example 8" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9e45ec/edaf06132468eccf5fd90551151252a364b44b7b.html">Open in a new tab</a>

The [computed][] value of the `word-spacing` property of this `p` element is **not [important][]**. The [computed][] value of the `word-spacing` property of this `span` element is the [inherited][] value, that is the [computed][] value of its parent and therefore also **not [important][]**.

```html
<p style="word-spacing: 0.1em">
	<span style="word-spacing: unset !important;">
		The toy brought back fond memories of being lost in the rain forest.
	</span>
</p>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9e45ec/31d185e51a8be241f8a75d09deae69d3937f0329.html">Open in a new tab</a>

This `p` element has a [computed][] `word-spacing` of only 0.1 times the font size, which is below the required minimum.

```html
<p style="word-spacing: 0.1em !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9e45ec/1134eadf72b2a40c03b8bbf486ebfd3bb34cf986.html">Open in a new tab</a>

This `p` element has a [computed][] `word-spacing` of `2px` which is only 0.1 times the font size (`20px`), thus below the required minimum.

```html
<style>
	p {
		font-size: 20px;
	}
</style>

<p style="word-spacing: 2px !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9e45ec/830c047a178145d69fb7dd3fb21abae5a84f1830.html">Open in a new tab</a>

This `p` element has a [computed][] `word-spacing` of 0.

```html
<p style="word-spacing: normal !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9e45ec/d9fe2bdf199d96c133830ded7907a28c4c33efcc.html">Open in a new tab</a>

This `p` element has a [computed][] `word-spacing` of 0.

```html
<p style="word-spacing: initial !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9e45ec/cc484992ddeab663aa5e490f3fd71806c9bd8528.svg">Open in a new tab</a>

There is no HTML element.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
    <text y="20" style="word-spacing: 0.1em">ACT rules</text>
</svg>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9e45ec/32f0d32619e3d22a8988256e0f3ebae3e0f801c9.html">Open in a new tab</a>

This `p` element is not [visible][] because of `display: none`.

```html
<p style="display: none; word-spacing: 0.1em !important;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9e45ec/a8f0c6682763e4ca7db824dc145a23067a3eb889.html">Open in a new tab</a>

This `p` element is not [visible][] because it is positioned off-screen.

```html
<p style="position: absolute; top: -999em; word-spacing: 0.1em !important;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Inapplicable Example 4

<a class="example-link" title="Inapplicable Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/9e45ec/92e706402d8f8cb13d73ffb759ce35ec910d272c.html">Open in a new tab</a>

The `style` attribute of this `p` element does not [declare][declared] the `word-spacing` property.

```html
<p style="width: 60%">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

## Glossary

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

### Visible {#visible}

Content perceivable through sight.

Content is considered _visible_ if making it fully transparent would result in a difference in the pixels rendered for any part of the document that is currently within the viewport or can be brought into the viewport via scrolling.

[Content is defined in WCAG](https://www.w3.org/TR/WCAG21/#dfn-content).

For more details, see [examples of visible](https://act-rules.github.io/pages/examples/visible/).

[author origin]: https://www.w3.org/TR/css-cascade-4/#cascade-origin-author 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascading Origins - Author Origin'
[cascade sort]: https://www.w3.org/TR/css-cascade-4/#cascade-sort 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascade Sort'
[cascaded]: https://www.w3.org/TR/css-cascade-4/#cascaded 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascaded Values'
[computed]: https://www.w3.org/TR/css-cascade-4/#computed 'CSS Cascading and Inheritance Level 4 (Working draft) - Computed Values'
[declared]: https://www.w3.org/TR/css-cascade-4/#declared 'CSS Cascading and Inheritance Level 4 (Working draft) - Declared Values'
[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[font-size]: https://www.w3.org/TR/css-fonts-4/#propdef-font-size 'CSS Fonts Module Level 4 (Working draft) - Font size: the font-size property'
[html element]: #namespaced-element
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[important]: https://www.w3.org/TR/css-cascade-4/#importance 'CSS Cascading and Inheritance Level 4 (Working draft) - Importance'
[inherited]: https://www.w3.org/TR/css-cascade-4/#inheriting 'CSS Cascading and Inheritance Level 4 (Working draft) - Inherited Values'
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
[normal]: https://www.w3.org/TR/css-cascade-4/#normal 'CSS Cascading and Inheritance Level 4 (Working draft) - Normal declarations'
[sc1412]: https://www.w3.org/TR/WCAG21/#text-spacing 'Success Criterion 1.4.12 Text Spacing'
[sc148]: https://www.w3.org/TR/WCAG21/#visual-presentation 'Success Criterion 1.4.8 Visual Presentation'
[specificity]: https://www.w3.org/TR/selectors/#specificity 'CSS Selectors Level 4 (Working draft) - Specificity'
[user agent origin]: https://www.w3.org/TR/css-cascade-4/#cascade-origin-ua 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascading Origins - User Agent Origin'
[user origin]: https://www.w3.org/TR/css-cascade-4/#cascade-origin-user 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascading Origins - User Origin'
[visible]: #visible 'Definition of visible'
[word-spacing]: https://www.w3.org/TR/css-text-3/#word-spacing-property 'CSS Text Module Level 3 - Word Spacing: the word-spacing property'
ra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[important]: https://www.w3.org/TR/css-cascade-4/#importance 'CSS Cascading and Inheritance Level 4 (Working draft) - Importance'
[inherited]: https://www.w3.org/TR/css-cascade-4/#inheriting 'CSS Cascading and Inheritance Level 4 (Working draft) - Inherited Values'
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
[normal]: https://www.w3.org/TR/css-cascade-4/#normal 'CSS Cascading and Inheritance Level 4 (Working draft) - Normal declarations'
[sc1412]: https://www.w3.org/TR/WCAG21/#text-spacing 'Success Criterion 1.4.12 Text Spacing'
[sc148]: https://www.w3.org/TR/WCAG21/#visual-presentation 'Success Criterion 1.4.8 Visual Presentation'
[specificity]: https://www.w3.org/TR/selectors/#specificity 'CSS Selectors Level 4 (Working draft) - Specificity'
[specified]: https://www.w3.org/TR/css-cascade-4/#specified 'CSS Cascading and Inheritance Level 4 (Working draft) - Specified Values'
[text node]: https://dom.spec.whatwg.org/#text
[user agent origin]: https://www.w3.org/TR/css-cascade-4/#cascade-origin-ua 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascading Origins - User Agent Origin'
[user origin]: https://www.w3.org/TR/css-cascade-4/#cascade-origin-user 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascading Origins - User Origin'
[visible]: #visible 'Definition of visible'
