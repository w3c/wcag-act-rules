---
title: "Letter spacing in style attributes is not !important"
permalink: /standards-guidelines/act/rules/24afc2/proposed/
ref: /standards-guidelines/act/rules/24afc2/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/24afc2/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> 24afc2</p>
  <p><strong>Date:</strong> Updated 16 March 2022</p>
  <p><strong>Authors:</strong> <a href="https://github.com/Jym77">Jean-Yves Moyen</a>, <a href="https://github.com/jkodu">Jey Nandakumar</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: 24afc2
  name: "Letter spacing in `style` attributes is not `!important`"
  rule_type: atomic
  description: |
    This rule checks that the `style` attribute is not used to prevent adjusting `letter-spacing` by using `!important`, except if it's at least 0.12 times the font size.
  last_modified: 16 March 2022
  scs_tested:
    - handle: Text Spacing
      num: 1.4.12
      level: AA
---

## Applicability

This rule applies to any [HTML element][] that is [visible][] and for which the `style` attribute [declares][declared] the [letter-spacing][] CSS property.

## Expectation

For each test target, at least one of the following is true:

- **not important**: the [computed][] value of its [letter-spacing][] property is not [important][]; or
- **wide enough**: the [computed][] value of its [letter-spacing][] property is at least 0.12 times the [computed][] value of its [font-size][] property; or
- **cascade**: the [cascaded][] value of its [letter-spacing][] property is not a value [declared][] in its `style` attribute.

## Assumptions

- There is no mechanism available on the page to adjust [letter-spacing][]. If there is such a mechanism, it is possible to fail this rule while [Success Criterion 1.4.12 Text Spacing][sc1412] is still satisfied.

- This rule assumes that WCAG's meaning for the "Letter spacing style property" is the value of the CSS `letter-spacing` property rather than the actual space between letters. The value of the CSS property is _added_ to whichever spacing already exist (for example, due to kerning). Thus, the actual space between letters can be larger than the value of the `letter-spacing` property. If [Success Criterion 1.4.12 Text Spacing][sc1412] is concerned by the actual space between letters, then this rule may fail (with the `letter-spacing` property being too small) while the Success Criterion is still satisfied (with the actual space being enough).

- This rule assumes that when inter-letters space is changed because of justification, the `letter-spacing` property is not changed. Therefore, whether a text is justified or not doesn't change the result of this rule. Note that justifying text is a failure of [Success Criterion 1.4.8 Visual Presentation][sc148].

## Accessibility Support

While some assistive technologies are able to set [user origin][] or [user agent origin][] styles, others, such as browser extensions, are only able to set styles with the [author origin][]. Such assistive technologies cannot create styles "winning" the [cascade sort][] over a `style` attribute with an [important][] declaration.

## Background

When a style is [declared][] in the `style` attribute with an [important][] declaration, it "wins" the [cascade sort] over any other style from [author origin][], i.e. it cannot be overridden by any of these. On the other hand, if such a style is [declared][] in a style sheet, it can still "lose" the [cascade sort][] to declarations with higher [specificity][] or simply coming from a later style sheet (such as ones injected by assistive technologies). This rule ensures that the element is not in the first case and that the style can be overridden by users, unless it is already at least the minimum required threshold. [Important][] styles that are declared with the [user][user origin] or [user agent][user agent origin] origin can win the [cascade sort][] over styles with the [author origin][].

CSS specifications define each declaration as being either [important][] (if it has the `!important` annotation) or [normal][]. Given that `normal` is also a keyword for this property, and that `!important` is wider known that this distinction, this rule rather uses "[important][]"/"not [important][]" to avoid confusion.

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

<a class="example-link" title="Passed Example 1" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/24afc2/1877242970bb7a92b5c8ee7bc5c5e5ec87877890.html">Open in a new tab</a>

This `p` element has a **not [important][]** [computed][] `letter-spacing`.

```html
<p style="letter-spacing: 0.1em">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/24afc2/9e9382901f59c7dd476717a55bf5c5a37ed76bbc.html">Open in a new tab</a>

This `p` element has a [computed][] `letter-spacing` of 0.15 time the font size, which is **wide enough**.

```html
<p style="letter-spacing: 0.15em !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/24afc2/43f8fe88b8e7365db7aa251b263b5d00c7a47ae9.html">Open in a new tab</a>

This `p` element has a [computed][] [letter-spacing][] of `3px`, which is **wide enough** (the threshold is `3px`).

```html
<style>
	p {
		font-size: 25px;
	}
</style>

<p style="letter-spacing: 3px !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/24afc2/787f24a573fa422e24ab72312f7306253bb83a4f.html">Open in a new tab</a>

This `p` element has two [declared][] values for its `letter-spacing` property. The latest wins the [cascade sort][]. It has a value of `0.15em`, and is **wide enough**.

```html
<p style="letter-spacing: 0.1em !important; letter-spacing: 0.15em !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 5

<a class="example-link" title="Passed Example 5" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/24afc2/f000a9c495f11a4a11a4314871b91f4173e4589a.html">Open in a new tab</a>

This `p` element has two [declared][] values for its `letter-spacing` property. The one which is [important][] wins the [cascade sort][]. It has a value of `0.15em`, and is **wide enough**.

```html
<p style="letter-spacing: 0.15em !important; letter-spacing: 0.1em">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 6

<a class="example-link" title="Passed Example 6" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/24afc2/9608b535262c655f523314958f8ca3019a0968fe.html">Open in a new tab</a>

The [cascaded][] value of the `letter-spacing` property of this `p` element is [declared][] in the style sheet, not in the `style` attribute (it wins the [cascade sort][] because it is [important][]). Thus, the `p` element matches the **cascade** condition.

```html
<style>
	p {
		letter-spacing: 0.1em !important;
	}
</style>

<p style="letter-spacing: 0.15em">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 7

<a class="example-link" title="Passed Example 7" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/24afc2/6aa2034507dc16e6ae0d16f1b6f2a14d3dfadc18.html">Open in a new tab</a>

The [computed][] value of the `letter-spacing` property of this `p` element is **not [important][]**. The [computed][] value of the `letter-spacing` property of this `span` element is the [inherited][] value, that is the [computed][] value of its parent and therefore also **not [important][]**.

```html
<p style="letter-spacing: 0.1em">
	<span style="letter-spacing: inherit !important;">
		The toy brought back fond memories of being lost in the rain forest.
	</span>
</p>
```

#### Passed Example 8

<a class="example-link" title="Passed Example 8" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/24afc2/64b25817b3d3909ab7f4acaee061875ebac1cee3.html">Open in a new tab</a>

The [computed][] value of the `letter-spacing` property of this `p` element is **not [important][]**. The [computed][] value of the `letter-spacing` property of this `span` element is the [inherited][] value, that is the [computed][] value of its parent and therefore also **not [important][]**.

```html
<p style="letter-spacing: 0.1em">
	<span style="letter-spacing: unset !important;">
		The toy brought back fond memories of being lost in the rain forest.
	</span>
</p>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/24afc2/8383685465c6a417cb86e192d1e9157bd5feee99.html">Open in a new tab</a>

This `p` element has a [computed][] `letter-spacing` of only 0.1 times the font size, which is below the required minimum.

```html
<p style="letter-spacing: 0.1em !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/24afc2/b5a8fe74fbbea40e8bbee407f167ae808e14ea49.html">Open in a new tab</a>

This `p` element has a [computed][] `letter-spacing` of `2px` which is only 0.1 times the font size (`20px`), thus below the required minimum.

```html
<style>
	p {
		font-size: 20px;
	}
</style>

<p style="letter-spacing: 2px !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/24afc2/d8e379c210cdb651d28985c883fea21a4529ed59.html">Open in a new tab</a>

This `p` element has a [computed][] `letter-spacing` of 0.

```html
<p style="letter-spacing: normal !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/24afc2/9788de86b8a4e7a685d356347cc4059874ae6a38.html">Open in a new tab</a>

This `p` element has a [computed][] `letter-spacing` of 0.

```html
<p style="letter-spacing: initial !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/24afc2/eeca04eb6d00ab0aca01d460f0861f3328d4992d.svg">Open in a new tab</a>

There is no HTML element.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
    <text y="20" style="letter-spacing: 0.1em">ACT rules</text>
</svg>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/24afc2/be174e053a61ece650873a6a44f8e4be356e4193.html">Open in a new tab</a>

This `p` element is not [visible][] because of `display: none`.

```html
<p style="display: none; letter-spacing: 0.1em !important;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/24afc2/88d6ea5706ed8ae188caa166879c381e64e5077a.html">Open in a new tab</a>

This `p` element is not [visible][] because it is positioned off-screen.

```html
<p style="position: absolute; top: -999em; letter-spacing: 0.1em !important;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Inapplicable Example 4

<a class="example-link" title="Inapplicable Example 4" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/24afc2/92e706402d8f8cb13d73ffb759ce35ec910d272c.html">Open in a new tab</a>

The `style` attribute of this `p` element does not [declare][declared] the `letter-spacing` property.

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

{% include_relative _implementation-proposed.md %}

## Changelog

This is the first version of this ACT rule.

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
[letter-spacing]: https://www.w3.org/TR/css-text-3/#propdef-letter-spacing 'CSS Text Module Level 3 - Tracking: the letter-spacing property'
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
[normal]: https://www.w3.org/TR/css-cascade-4/#normal 'CSS Cascading and Inheritance Level 4 (Working draft) - Normal declarations'
[sc1412]: https://www.w3.org/TR/WCAG21/#text-spacing 'Success Criterion 1.4.12 Text Spacing'
[sc148]: https://www.w3.org/TR/WCAG21/#visual-presentation 'Success Criterion 1.4.8 Visual Presentation'
[specificity]: https://www.w3.org/TR/selectors/#specificity 'CSS Selectors Level 4 (Working draft) - Specificity'
[user agent origin]: https://www.w3.org/TR/css-cascade-4/#cascade-origin-ua 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascading Origins - User Agent Origin'
[user origin]: https://www.w3.org/TR/css-cascade-4/#cascade-origin-user 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascading Origins - User Origin'
[visible]: #visible 'Definition of visible'
