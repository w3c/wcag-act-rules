---
title: "Heading is descriptive"
permalink: /standards-guidelines/act/rules/heading-descriptive-b49b2e/
ref: /standards-guidelines/act/rules/heading-descriptive-b49b2e/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/heading-descriptive-b49b2e.md
proposed: true
rule_meta:
  id: b49b2e
  name: "Heading is descriptive"
  rule_type: atomic
  description: |
    This rule checks that headings describe the topic or purpose of the content.
  accessibility_requirements:
    'wcag20:2.4.6':
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
    - handle: Language
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-text
  last_modified: July 16th, 2021
  scs_tested:
    - handle: Headings and Labels
      num: 2.4.6
      level: AA
---

## Applicability

This rule applies to any element with the [semantic role][] of heading that is either [visible][] or [included in the accessibility tree][].

## Expectation 1

Each target element which is [visible][] describes the topic or purpose of the first [palpable content][] which is non-[decorative][], [visible][], and after the target in tree order in the [flat tree][].

## Expectation 2

Each target element which is [included in the accessibility tree][] describes the topic or purpose of the first [palpable content][] which is non-[decorative][], [included in the accessibility tree][], and after the target in tree order in the [flat tree][].

**Note:** Headings do not need to be lengthy. A word, or even a single character, may suffice.

## Assumptions

- This rule assumes that the language of each test target can be correctly determined (either programmatically or by analyzing the content), and sufficiently understood.
- This rule assumes that the [flat tree][] order is close to the reading order, as elements are rendered on the page. Due to positioning, it is possible to render a document in a order that greatly differ from the tree order, in which case the content which is visually associated with a heading might not be the content following it in tree order and this rule might fail while [Success Criterion 2.4.6 Headings and Label][sc246] is still satisfied.

## Accessibility Support

Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have a [semantic role][] of `heading` and fail this rule with some technology but users of other technologies would not experience any accessibility issue.

## Background

- [Understanding Success Criterion 2.4.6: Headings and Labels](https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html)
- [G130: Providing descriptive headings](https://www.w3.org/WAI/WCAG21/Techniques/general/G130)
- [H42: Using h1-h6 to identify headings](https://www.w3.org/WAI/WCAG21/Techniques/html/H42)
- [ARIA12: Using role=heading to identify headings](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA12)
- [HTML Specification - Heading content](https://html.spec.whatwg.org/#heading-content)

## Test Cases

### Passed

#### Passed Example 1

Heading marked up with `h1` element that describes the topic or purpose of the following [palpable content][].

```html
<html lang="en">
	<h1>Opening Hours</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Passed Example 2

Heading marked up with `role="heading"` that describes the topic or purpose of the following [palpable content][].

```html
<html lang="en">
	<span role="heading" aria-level="1">Opening Hours</span>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Passed Example 3

Heading marked up with `role="heading"` that describes the topic or purpose of the following [palpable content][], with a default aria-level assigned.

```html
<html lang="en">
	<span role="heading">Opening Hours</span>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Passed Example 4

Heading marked up with `h1` element with an image that describes the topic or purpose of the following [palpable content][].

```html
<html lang="en">
	<h1>
		<img scr="/test-assets/descriptive-heading-b49b2e/opening_hours_icon.png" alt="Opening hours" />
	</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Passed Example 5

Heading marked up with `h1` element that is a single character that describes the topic or purpose of the following [palpable content][].

```html
<html lang="en">
	<h1>A</h1>
	<dl>
		<dt>airplane</dt>
		<dd>
			a powered flying vehicle with fixed wings and a weight greater than that of the air it displaces.
		</dd>
		<dt>apple</dt>
		<dd>
			the round fruit of a tree of the rose family, which typically has thin green or red skin and crisp flesh.
		</dd>
	</dl>
</html>
```

#### Passed Example 6

Heading marked up with `role="heading"` that describes the topic or purpose of the following [palpable content][]. The heading is positioned off screen and is [included in the accessibility tree][].

```html
<html lang="en">
	<span role="heading" aria-level="1" style="position: absolute; top: -9999px; left: -9999px;">Opening Hours</span>
	<p style="position: absolute; top: -9999px; left: -9999px;">
		We are open Monday through Friday from 10 to 16
	</p>
</html>
```

#### Passed Example 7

Heading marked up with `h1` element that describes the topic or purpose of the following [palpable content][]. The heading is [visible][], but is not [included in the accessibility tree][].

```html
<html lang="en">
	<h1 aria-hidden="true">Opening Hours</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Passed Example 8

This heading describes the first [palpable content][] after it (the first `p` element). The next [palpable content][] (the second `p` element) is not considered by this rule.

```html
<html lang="en">
	<h1>Opening Hours</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
	<p>We are open Saturday from 10 to 13</p>
</html>
```

### Failed

#### Failed Example 1

Heading marked up with `h1` element that does not describe the topic or purpose of the following [palpable content][].

```html
<html lang="en">
	<h1>Weather</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Failed Example 2

Heading marked up with `role="heading"` that does not describe the topic or purpose of the following [palpable content][].

```html
<html lang="en">
	<span role="heading" aria-level="1">Weather</span>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Failed Example 3

Heading marked up with `role="heading"` that does not describe the topic or purpose of the following [palpable content][]. The heading is positioned off screen and is [included in the accessibility tree][].

```html
<html lang="en">
	<span role="heading" style="position: absolute; top: -9999px; left: -9999px;">Weather</span>
	<p style="position: absolute; top: -9999px; left: -9999px;">
		We are open Monday through Friday from 10 to 16
	</p>
</html>
```

#### Failed Example 4

Heading marked up with `h1` element that does not describe the topic or purpose of the following [palpable content][]. The heading is [visible][], but is not [included in the accessibility tree][].

```html
<html lang="en">
	<h1 aria-hidden="true">Weather</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Failed Example 5

This heading does not describe the first [palpable content][] after it (the first `p` element). The next [palpable content][] (the second `p` element) is not considered by this rule.

```html
<html lang="en">
	<h1>Weather</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
	<p>It is going to rain tomorrow</p>
</html>
```

### Inapplicable

#### Inapplicable Example 1

No heading.

```html
<html lang="en">
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Inapplicable Example 2

Heading that is neither [visible][] to users, nor [included in the accessibility tree][].

```html
<html lang="en">
	<h1 style="display: none;">Opening hours</h1>
	<p>We are open Monday through Friday from 10 to 16</p>
</html>
```

#### Inapplicable Example 3

Empty heading marked up with `h1` is not [visible][].

```html
<html lang="en">
	<h1></h1>
</html>
```

#### Inapplicable Example 4

Empty heading marked up with `role="heading"` is not [visible][].

```html
<html lang="en">
	<p role="heading" aria-level="1"></p>
</html>
```

## Glossary

{% include_relative glossary/explicit-role.md %}
{% include_relative glossary/focusable.md %}
{% include_relative glossary/hidden-state.md %}
{% include_relative glossary/implicit-role.md %}
{% include_relative glossary/included-in-the-accessibility-tree.md %}
{% include_relative glossary/marked-as-decorative.md %}
{% include_relative glossary/outcome.md %}
{% include_relative glossary/semantic-role.md %}
{% include_relative glossary/visible.md %}
{% include_relative glossary/wai-aria-specifications.md %}

{% include implementations/b49b2e.md %}

## Acknowledgements

This rule was written in the [ACT Rules community group](https://w3.org/community/act-r/), 
with the support of the EU-funded [WAI-Tools Project](https://www.w3.org/WAI/about/projects/wai-tools/).

### Authors

- [Carlos Duarte](https://github.com/carlosapaduarte)
- [Dagfinn Rømen](https://github.com/DagfinnRomen)
- [Geir Sindre Fossøy](https://github.com/geirsf)
- [Jean-Yves Moyen](https://github.com/Jym77)

## Changelog

This is the first version of this ACT rule.

[decorative]: https://www.w3.org/TR/WCAG21/#dfn-pure-decoration 'WCAG definition of Pure decoration'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[palpable content]: https://html.spec.whatwg.org/multipage/dom.html#palpable-content 'HTML definition of Palpable Content'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[sc246]: https://www.w3.org/TR/WCAG21/#headings-and-labels 'Success Criterion 2.4.6 Headings and Labels'
[semantic role]: #semantic-role 'Definition of semantic role'
[visible]: #visible 'Definition of visible'
