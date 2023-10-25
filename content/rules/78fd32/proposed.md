---
title: "Important line height in style attributes is wide enough"
permalink: /standards-guidelines/act/rules/78fd32/proposed/
ref: /standards-guidelines/act/rules/78fd32/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/78fd32/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> 78fd32</p>
  <p><strong>Date:</strong> Updated 25 October 2023</p>
  <p><strong>Authors:</strong> <a href="https://github.com/Jym77">Jean-Yves Moyen</a>. Previous Authors: <a href="https://github.com/jkodu">Jey Nandakumar</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: 78fd32
  name: "Important line height in style attributes is wide enough"
  rule_type: atomic
  original_file: important-line-height-wide-enough-78fd32.md
  description: |
    This rule checks that the `style` attribute is not used to prevent adjusting `line-height` by using `!important`, except if it's at least 1.5 times the font size.
  last_modified: 25 October 2023
  scs_tested:
    - handle: Text Spacing
      num: 1.4.12
      level: AA
---

## Applicability

This rule applies to any [HTML element][] with one or more [visible][] [text node][] children, when the text inside the elements includes a [soft wrap break][] and all the following are true for the `line-height` property of the element:

- the [specified][] value is [declared][] in a `style` attribute; and
- the [computed][] value is [important][].

## Expectation

For each test target, the [used][] value of its `line-height` property is at least 1.5 times the [computed][] value of its `font-size` property.

## Assumptions

- There is no mechanism available on the page to adjust `line-height`. If there is such a mechanism, it is possible to fail this rule while [Success Criterion 1.4.12 Text Spacing][sc1412] is still satisfied.

- The font size is constant for all text in the element. If font-size changes (e.g., through use of the `::first-line` pseudo-element) then the required line height would also change throughout the element. This is untested by the current rule.

- No other style attributes are used to increase or decrease the distance between lines of text. For example, style attributes such as `position`, `padding`, and `margin` could be used to increase the distance between lines of text to meet [Success Criterion 1.4.12 Text Spacing][sc1412]. Oppositely, those style attributes could also be used to reduce the distance between lines of text. Thus, it is possible to pass this rule, but still fail [Success Criterion 1.4.12 Text Spacing][sc1412] due to other styling choices.

- The text in the element express something in a human language written in a script that uses the `line-height` property.

## Accessibility Support

While some assistive technologies are able to set [user origin][] or [user agent origin][] styles, others, such as browser extensions, are only able to set styles with the [author origin][]. Such assistive technologies cannot create styles "winning" the [cascade sort][] over a `style` attribute with an [important][] declaration.

## Background

Styles [declared][] in a `style` attribute have higher [cascade specificity][] than any selector; therefore, they "win" the [cascade sort] over any other style from [author origin][], i.e. it cannot be overridden by any of these. On the other hand, if such a style is [declared][] in a style sheet, it can still "lose" the [cascade sort][] to declarations with higher [specificity][] or simply coming from a later style sheet (such as ones injected by assistive technologies). This rule ensures that the element is not in the first case and that the style can be overridden by users, unless it is already at least the minimum required threshold. [Important][] styles that are declared with the [user][user origin] or [user agent][user agent origin] can win the [cascade sort][] over styles with the [author origin][].

CSS specifications define each declaration as being either [important][] (if it has the `!important` annotation) or [normal][]. Given that `normal` is also a keyword for some properties, and that `!important` is wider known than this distinction, this rule rather uses "[important][]"/"not [important][]" to avoid confusion.

This rule evaluates the [used][] value of the `line-height` property instead of its [computed][] value because the [used][] value is guaranteed to use absolute units (i.e., pixels). This streamlines comparison with the [computed][] `font-size` which is also absolute. The [computed][] `line-height` may be a unitless number that is harder to compare.

### Bibliography

- [Understanding Success Criterion 1.4.12: Text Spacing](https://www.w3.org/WAI/WCAG21/Understanding/text-spacing.html)
- [CSS Text Module Level 3 - Spacing](https://www.w3.org/TR/css-text-3/#spacing)
- [CSS Visual formatting model details](https://drafts.csswg.org/css2/visudet.html)

### About test cases

Test cases descriptions abusively refer to the CSS properties of text nodes, meaning the one of their parent.

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

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/78fd32/a4c9e1fbd1f25787a4906a79d5ab23c975120833.html">Open in a new tab</a>

This `p` element has a [used][] `line-height` of twice the font size.

```html
<p style="line-height: 2em !important; max-width: 200px;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/78fd32/203a13b314695fc2abc6163b3ac7940ab1c4a9ed.html">Open in a new tab</a>

This `p` element has a [used][] `line-height` of `30px`, which is exactly 1.5 times the `font-size` of `20px`.

```html
<style>
	p {
		font-size: 20px;
	}
</style>

<p style="line-height: 30px !important; max-width: 200px;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/78fd32/82c89e74b17e53b55a8d56f23dddbfbe04bc163e.html">Open in a new tab</a>

This `p` element has a [used][] `line-height` of `25.6px` (160% of `16px`) which is 1.6 times the `font-size`.

```html
<style>
	p {
		font-size: 16px;
	}
</style>

<p style="line-height: 160% !important; max-width: 200px;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/78fd32/844c8f6a1100db804ee5b4d335098a74ff628238.html">Open in a new tab</a>

This `p` element has a [used][] `line-height` of `1.6` times the `font-size`.

```html
<p style="line-height: 1.6 !important; max-width: 200px;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 5

<a class="example-link" title="Passed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/78fd32/639b3bdba21f19efaa8fc304a8f95e6e7105e3cb.html">Open in a new tab</a>

This `p` element has two [declared][] values for its `line-height` property. The latest wins the [cascade sort][]. It has a value of `2em`, which is large enough.

```html
<p style="line-height: 1em !important; line-height: 2em !important; max-width: 200px;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 6

<a class="example-link" title="Passed Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/78fd32/0dcc810409a65f29f559c4826afbaa71bcba6ae0.html">Open in a new tab</a>

This `p` element has two [declared][] values for its `line-height` property. The one which is [important][] wins the [cascade sort][]. It has a value of `2em`, which is large enough.

```html
<p style="line-height: 2em !important; line-height: 1em; max-width: 200px;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Passed Example 7

<a class="example-link" title="Passed Example 7" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/78fd32/78034759a1086c7ffa8037b6e6e2327ece4a19d7.html">Open in a new tab</a>

This `p` element has a [computed][] `line-height` of `15px`, 1.5 times its [computed][] `font-size` of `10px`; the `div` element has no [visible][] text node children.

```html
<div style="font-size: 16px; line-height: 15px !important">
	<p style="font-size: 10px; max-width: 200px;">
		The toy brought back fond memories of being lost in the rain forest.
	</p>
</div>
```

#### Passed Example 8

<a class="example-link" title="Passed Example 8" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/78fd32/317de3cc2f864ebdae6e325c9fbc0dbf4947c5c9.html">Open in a new tab</a>

This `p` element has a [computed][] `line-height` of 1.5 times its `font-size`; the `div` element has no [visible][] text node children.

```html
<div style="letter-spacing: 1em !important">
	<p style="letter-spacing: 1.5em !important; max-width: 200px;">
		The toy brought back fond memories of being lost in the rain forest.
	</p>
</div>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/78fd32/c8c447e4e9065a1f8676c78dd937486e074026f7.html">Open in a new tab</a>

This `p` element has a [used][] `line-height` equal to the font size, which is below the required minimum.

```html
<p style="line-height: 1em !important; max-width: 200px;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/78fd32/67159173d21bc9cf00d1bb5a7ec817696ccee05c.html">Open in a new tab</a>

This `p` element node has a [used][] `line-height` of `20px`, which is below the required minimum given the specified font size is 20 pixels.

```html
<style>
	p {
		font-size: 20px;
	}
</style>

<p style="line-height: 20px !important; max-width: 200px;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/78fd32/53e5a389ebf46db82a931674636809b95d2de74c.html">Open in a new tab</a>

This `p` element has a [used][] `line-height` of `19.2px` (120% of `16px`) which is below the required minimum.

```html
<style>
	p {
		font-size: 16px;
	}
</style>

<p style="line-height: 120% !important; max-width: 200px;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/78fd32/38a347130bce99ee98d09fbefa18adb372f4563f.html">Open in a new tab</a>

This `p` element has a [used][] `line-height` of `1.2` which is below the required minimum.

```html
<p style="line-height: 1.2 !important; max-width: 200px;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Failed Example 5

<a class="example-link" title="Failed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/78fd32/712289cbcfbee5cd51a332265f44369f568712d3.html">Open in a new tab</a>

This `p` element has a [computed][] `line-height` of `normal` which is below the required minimum ([used][] value for `normal` is generally around 1.2).

```html
<p style="line-height: normal !important; max-width: 200px;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Failed Example 6

<a class="example-link" title="Failed Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/78fd32/bed4bc29cbcd1f681c4e0f0d7ff7e05c579fefec.html">Open in a new tab</a>

This `p` element has a [computed][] `line-height` of `normal` which is below the required minimum ([used][] value for `normal` is generally around 1.2).

```html
<p style="line-height: initial !important; max-width: 200px;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/78fd32/e998ec72eef90b46574b39d2657ef278b61b51eb.svg">Open in a new tab</a>

There is no HTML element.

```svg
<svg xmlns="http://www.w3.org/2000/svg">
    <text y="20" style="line-height: 1.2em">ACT rules</text>
</svg>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/78fd32/0128de1beb7862298366680f6920bd3b3874d752.html">Open in a new tab</a>

There is no text node.

```html
<div style="line-height: 0.1em !important;"></div>
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/78fd32/6e034188bb709c8e0011612448b6244427bd8d4f.html">Open in a new tab</a>

There is no [visible][] text node because of `display: none`.

```html
<p style="display: none; line-height: 1em !important; max-width: 200px;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Inapplicable Example 4

<a class="example-link" title="Inapplicable Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/78fd32/81be0f6c00496f3c2d70071c8f73b292ba282bfc.html">Open in a new tab</a>

There is no [visible][] text node because it is positioned off-screen.

```html
<p style="position: absolute; top: -999em; line-height: 1em !important; max-width: 200px;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Inapplicable Example 5

<a class="example-link" title="Inapplicable Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/78fd32/bc3e59c1292a265135ed7043d2cdcaa62cdfac66.html">Open in a new tab</a>

This `p` element will never have a [soft wrap break][] due to the use of an overflow container. In this case, even changing the view port size will not cause a [soft wrap break][]; the `div` element has no [visible][] text node children.

```html
<div style="overflow-x: scroll;">
	<p style="line-height: 1em !important; width: 1000px;">
		The toy brought back fond memories of being lost in the rain forest.
	</p>
</div>
```

#### Inapplicable Example 6

<a class="example-link" title="Inapplicable Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/78fd32/7f23d5ee7e2a51c9d0922493c542953680972bb6.html">Open in a new tab</a>

This `p` element's `line-height` property is not [declared][] in a `style` attribute.

```html
<p style="width: 60%; max-width: 200px;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Inapplicable Example 7

<a class="example-link" title="Inapplicable Example 7" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/78fd32/a2bfcb630ad36d8f8e49fb02aa5b3d8db2aec2fc.html">Open in a new tab</a>

The [specified][] value of the `line-height` property of this `p` element is [declared][] in the style sheet, not in the `style` attribute (it wins the [cascade sort][] because it is [important][]).

```html
<style>
	p {
		line-height: 1.2em !important;
	}
</style>

<p style="line-height: 2em; max-width: 200px;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Inapplicable Example 8

<a class="example-link" title="Inapplicable Example 8" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/78fd32/f6c53855436de3898c29ee685d5c1cf02be24c72.html">Open in a new tab</a>

This `p` element does not have an [important][] [computed][] `line-height`.

```html
<p style="line-height: 1.2em; max-width: 200px;">
	The toy brought back fond memories of being lost in the rain forest.
</p>
```

#### Inapplicable Example 9

<a class="example-link" title="Inapplicable Example 9" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/78fd32/b3ba5eaa37846b4b01ca04ae6e5f2d54c4813c1d.html">Open in a new tab</a>

The [computed][] value of the `line-height` property of this `span` element is the [inherited][] value, that is the [computed][] value of the `p` element and therefore not [important][]; the `p` element has no [visible][] text node children.

```html
<p style="line-height: 1.2em">
	<span style="line-height: inherit !important; display: block; max-width: 200px;">
		The toy brought back fond memories of being lost in the rain forest.
	</span>
</p>
```

#### Inapplicable Example 10

<a class="example-link" title="Inapplicable Example 10" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/78fd32/0f8063a09807c4bf8d5f7c796cbf0f2aa20e7e57.html">Open in a new tab</a>

The [computed][] value of the `line-height` property of this `span` element is the [inherited][] value, that is the [computed][] value of the `p` element and therefore not [important][]; the `p` element has no [visible][] text node children.

```html
<p style="line-height: 1.2em">
	<span style="line-height: unset !important; display: block; max-width: 200px;">
		The toy brought back fond memories of being lost in the rain forest.
	</span>
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
[cascade specificity]: https://www.w3.org/TR/css-cascade-3/#cascade-specificity 'CSS Cascading and Inheritance Level 4 (Candidate Recommendation) - Cascade specificity'
[computed]: https://www.w3.org/TR/css-cascade-4/#computed 'CSS Cascading and Inheritance Level 4 (Working draft) - Computed Values'
[declared]: https://www.w3.org/TR/css-cascade-4/#declared 'CSS Cascading and Inheritance Level 4 (Working draft) - Declared Values'
[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[html element]: #namespaced-element
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[important]: https://www.w3.org/TR/css-cascade-4/#importance 'CSS Cascading and Inheritance Level 4 (Working draft) - Importance'
[inherited]: https://www.w3.org/TR/css-cascade-4/#inheriting 'CSS Cascading and Inheritance Level 4 (Working draft) - Inherited Values'
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
[normal]: https://www.w3.org/TR/css-cascade-4/#normal 'CSS Cascading and Inheritance Level 4 (Working draft) - Normal declarations'
[sc1412]: https://www.w3.org/TR/WCAG21/#text-spacing 'Success Criterion 1.4.12 Text Spacing'
[soft wrap break]: https://www.w3.org/TR/css-text-3/#soft-wrap-break
[specificity]: https://www.w3.org/TR/selectors/#specificity 'CSS Selectors Level 4 (Working draft) - Specificity'
[specified]: https://www.w3.org/TR/css-cascade-4/#specified 'CSS Cascading and Inheritance Level 4 (Working draft) - Specified Values'
[text node]: https://dom.spec.whatwg.org/#text
[used]: https://www.w3.org/TR/css-cascade-4/#used 'CSS Cascading and Inheritance Level 4 (Working draft) - Used Values'
[user agent origin]: https://www.w3.org/TR/css-cascade-4/#cascade-origin-ua 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascading Origins - User Agent Origin'
[user origin]: https://www.w3.org/TR/css-cascade-4/#cascade-origin-user 'CSS Cascading and Inheritance Level 4 (Working draft) - Cascading Origins - User Origin'
[visible]: #visible 'Definition of visible'
