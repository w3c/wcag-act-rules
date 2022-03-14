---
title: "Line height in style attributes is not !important"
permalink: /standards-guidelines/act/rules/78fd32/proposed/
ref: /standards-guidelines/act/rules/78fd32/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/78fd32/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> 78fd32</p>
  <p><strong>Date:</strong> Updated 28 January 2022</p>
  <p><strong>Authors:</strong> <a href="https://github.com/Jym77">Jean-Yves Moyen</a>, <a href="https://github.com/jkodu">Jey Nandakumar</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules community group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: 78fd32
  name: "Line height in `style` attributes is not `!important`"
  rule_type: atomic
  description: |
    This rule checks that the `style` attribute is not used to prevent adjusting `line-height` by using `!important`, except if it's at least 1.5 times the font size.
  last_modified: 28 January 2022
  scs_tested:
    - handle: Text Spacing
      num: 1.4.12
      level: AA
---

## Applicability

This rule applies to any [HTML element][] that is [visible][] and for which the `style` attribute [declares][declared] the [line-height][] CSS property.

## Expectation

For each test target, at least one of the following is true:

- **not important**: the [computed][] value of its [line-height][] property is not [important][]; or
- **large enough**: the [computed][] value of its [line-height][] property is not `normal`, and is at least `1.5` or 1.5 times the [computed][] value of its [font-size][] property; or
- **cascade**: the [cascaded][] value of its [line-height][] property is not a value [declared][] in its `style` attribute.

## Assumptions

- There is no mechanism available on the page to adjust [line-height][]. If there is such a mechanism, it is possible to fail this rule while [Success Criterion 1.4.12 Text Spacing][sc1412] is still satisfied.

- This rule assumes that when the [computed][] value of the [line-height][] property is `normal`, user agents chose a [used][] value below 1.5. [CSS recommendation][line-height normal] is to have a [used][] value between 1.0 and 1.2, thus too small to satisfy [Success Criterion 1.4.12 Text Spacing][sc1412].

## Accessibility Support

While some assistive technologies are able to set [user origin][] or [user agent origin][] styles, others, such as browser extensions, are only able to set styles with the [author origin][]. Such assistive technologies cannot create styles "winning" the [cascade sort][] over a `style` attribute with an [important][] declaration. If accessibility support does not include assistive technologies that override [line-height][] through [author origin][], this rule should not be used.

## Background

When a style is [declared][] in the `style` attribute with an [important][] declaration, it "wins" the [cascade sort] over any other style from [author origin][], i.e. it cannot be overridden by any of these. On the other hand, if such a style is [declared][] in a style sheet, it can still "lose" the [cascade sort][] to declarations with higher [specificity][] or simply coming from a later style sheet (such as ones injected by assistive technologies). This rule ensures that the element is not in the first case and that the style can be overridden by users, unless it is already at least the minimum recommended threshold. [Important][] styles that are declared with the [user][user origin] or [user agent][user agent origin] origin can win the [cascade sort][] over styles with the [author origin][].

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

This `p` element has a **not [important][]** [computed][] `line-height`.

```html
<p style="line-height: 1.2em">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 2

This `p` element has a [computed][] `line-height` of twice the font size, which is **large enough**.

```html
<p style="line-height: 2em !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 3

This `p` element has a [computed][] `line-height` of `30px`, which is **large enough** (the threshold is `30px`).

```html
<style>
	p {
		font-size: 20px;
	}
</style>

<p style="line-height: 30px !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 4

This `p` element has a [computed][] `line-height` of `25.6px` (160% of `16px`) which is **large enough**.

```html
<style>
	p {
		font-size: 16px;
	}
</style>

<p style="line-height: 160% !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 5

This `p` element has a [computed][] `line-height` of `1.6` which is **large enough**.

```html
<p style="line-height: 1.6 !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 6

This `p` element has two [declared][] values for its `line-height` property. The latest wins the [cascade sort][]. It has a value of `2em`, which is **large enough**.

```html
<p style="line-height: 1em !important; line-height: 2em !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 7

This `p` element has two [declared][] values for its `line-height` property. The one which is [important][] wins the [cascade sort][]. It has a value of `2em`, which is **large enough**.

```html
<p style="line-height: 2em !important; line-height: 1em">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 8

The [cascaded][] value of the `line-height` property of this `p` element is [declared][] in the style sheet, not in the `style` attribute (it wins the [cascade sort][] because it is [important][]). Thus, the `p` element matches the **cascade** condition.

```html
<style>
	p {
		line-height: 1.2em !important;
	}
</style>

<p style="line-height: 2em">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 9

The [computed][] value of the `line-height` property of this `p` element is **not [important][]**. The [computed][] value of the `line-height` property of this `span` element is the [inherited][] value, that is the [computed][] value of its parent and therefore also **not [important][]**.

```html
<p style="line-height: 1.2em">
	<span style="line-height: inherit !important;">
		The toy brought back fond memories of being lost in the rain forest.
	</span>
</p>
```

#### Passed Example 10

The [computed][] value of the `line-height` property of this `p` element is **not [important][]**. The [computed][] value of the `line-height` property of this `span` element is the [inherited][] value, that is the [computed][] value of its parent and therefore also **not [important][]**.

```html
<p style="line-height: 1.2em">
	<span style="line-height: unset !important;">
		The toy brought back fond memories of being lost in the rain forest.
	</span>
</p>
```

### Failed

#### Failed Example 1

This `p` element has a [computed][] `line-height` equal to the font size, which is below the recommended minimum.

```html
<p style="line-height: 1em !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Failed Example 2

This `p` element has a [computed][] `line-height` of `20px`, which is below the recommended minimum given the specified font size is 20 pixels.

```html
<style>
	p {
		font-size: 20px;
	}
</style>

<p style="line-height: 20px !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Failed Example 3

This `p` element has a [computed][] `line-height` of `19.2px` (120% of `16px`) which is below the recommended minimum.

```html
<style>
	p {
		font-size: 16px;
	}
</style>

<p style="line-height: 120% !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Failed Example 4

This `p` element has a [computed][] `line-height` of `1.2` which is below the recommended minimum.

```html
<p style="line-height: 1.2 !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Failed Example 5

This `p` element has a [computed][] `line-height` of `normal` which is below the recommended minimum ([used][] value is generally around 1.2).

```html
<p style="line-height: normal !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Failed Example 6

This `p` element has a [computed][] `line-height` of `normal` which is below the recommended minimum ([used][] value is generally around 1.2).

```html
<p style="line-height: initial !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

### Inapplicable

#### Inapplicable Example 1

There is no HTML element.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
    <text y="20" style="line-height: 1.2em">ACT rules</text>
</svg>
```

#### Inapplicable Example 2

This `p` element is not [visible][] because of `display: none`.

```html
<p style="display: none; line-height: 1em !important">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Inapplicable Example 3

This `p` element is not [visible][] because it is positioned off-screen.

```html
<p style="position: absolute; top: -999em; line-height: 1em !important;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Inapplicable Example 4

The `style` attribute of this `p` element does not [declare][declared] the `line-height` property.

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
[line-height normal]: https://drafts.csswg.org/css2/#valdef-line-height-normal "CSS 2.2 (Editor's draft) - normal line-height"
[line-height]: https://drafts.csswg.org/css2/visudet.html#propdef-line-height 'CSS Visual formatting model details - line-height property'
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
[normal]: https://www.w3.org/TR/css-cascade-4/#normal 'CSS Cascading and Inheritance Level 4 (Working draft) - Normal declarations'
[sc1412]: https://www.w3.org/TR/WCAG21/#text-spacing 'Success Criterion 1.4.12 Text Spacing'
[specificity]: https://www.w3.org/TR/selectors/#specificity 'CSS Selectors Level 4 (Working draft) - Specificity'
[used]: https://www.w3.org/TR/css-cascade-4/#used 'CSS Cascading and Inheritance Level 4 (Working draft) - Used Values'
[user agent origin]: https://www.w3.org/TR/css-cascade-4/#cascade-origin-ua 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascading Origins - User Agent Origin'
[user origin]: https://www.w3.org/TR/css-cascade-4/#cascade-origin-user 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascading Origins - User Origin'
[visible]: #visible 'Definition of visible'
