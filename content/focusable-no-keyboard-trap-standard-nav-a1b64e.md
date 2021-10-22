---
title: "Focusable element has no keyboard trap via standard navigation"
permalink: /standards-guidelines/act/rules/focusable-no-keyboard-trap-standard-nav-a1b64e/
ref: /standards-guidelines/act/rules/focusable-no-keyboard-trap-standard-nav-a1b64e/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/focusable-no-keyboard-trap-standard-nav-a1b64e.md
footer: |
  <p><strong>Date:</strong> Updated 22 October 2021</p>
  <p><strong>Authors:</strong> <a href="https://github.com/annethyme">Anne Thyme Nørregaard</a>, <a href="https://github.com/carlosapaduarte">Carlos Duarte</a>, <a href="https://github.com/DagfinnRomen">Dagfinn Rømen</a>, <a href="https://github.com/geirsf">Geir Sindre Fossøy</a>, <a href="https: //github.com/MaliinO">Malin Øvrebø</a>, <a href="https://github.com/nitedog">Shadi Abou-Zahra</a>, <a href="https://github.com/skotkjerra">Stein Erik Skotkjerra</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules community group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>.</p>
proposed: true
rule_meta:
  id: a1b64e
  name: "Focusable element has no keyboard trap via standard navigation"
  rule_type: atomic
  description: |
    This rule checks if it is possible to use standard keyboard navigation to navigate through all content on a web page without becoming trapped in any element.
  accessibility_requirements:
    null
  input_aspects:
    - handle: DOM Tree
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom
    - handle: CSS Styling
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-css
  last_modified: 22 October 2021
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

This rule applies to any [HTML or SVG element][] that is [focusable][].

**Note:** This rule only applies to HTML and SVG. Thus, it is a partial check for WCAG 2.0 success criterion 2.1.2, which applies to all content.

## Expectation

For each target element focus can cycle to the browser UI by using [standard keyboard navigation](#standard-keyboard-navigation).

**Note:** Cycling back to the browser UI can be done both by moving forward through the tab order and by moving backwards. It is not possible to fulfill this expectation by using browser specific shortcuts to return to the browser UI.

## Assumptions

- The focus order in keyboard navigation is cyclical, not linear, meaning that the focus order will cycle to the first/last element when it moves away from the last/first element.
- The Browser UI is part of the focus navigation cycle of the page.

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

- [Understanding Success Criterion 2.1.2: No Keyboard Trap](https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html)
- [G21: Ensuring that users are not trapped in content](https://www.w3.org/WAI/WCAG21/Techniques/general/G21)
- [F10: Failure of Success Criterion 2.1.2 and Conformance Requirement 5 due to combining multiple content formats in a way that traps users inside one format type](https://www.w3.org/WAI/WCAG21/Techniques/failures/F10)

## Test Cases

### Passed

#### Passed Example 1

No trap for keyboard navigation.

```html
<a href="#">Link 1</a> <button>Button1</button>
```

#### Passed Example 2

Using `tabindex="1"`.

```html
<div tabindex="1">Text</div>
```

#### Passed Example 3

Using `tabindex="-1"`.

```html
<div tabindex="-1">Text</div>
```

### Failed

#### Failed Example 1

Keyboard trap one element.

```html
<a href="#">Link 1</a>
<button onblur="setTimeout(() => this.focus(), 10)">
	Button1
</button>
```

#### Failed Example 2

Keyboard trap group.

```html
<button onblur="setTimeout(() => this.nextElementSibling.focus(), 10)">
	Button1
</button>
<button onblur="setTimeout(() => this.previousElementSibling.focus(), 10)">
	Button2
</button>
<button>
	Button3
</button>
```

#### Failed Example 3

A [focusable][] element between keyboard traps.

```html
<button onblur="setTimeout(() => this.focus(), 10)">Button 1</button>
<button>Button 2</button>
<button onblur="setTimeout(() => this.focus(), 10)">Button 3</button>
```

### Inapplicable

#### Inapplicable Example 1

No [focusable][] element.

```html
<h1>Page 1</h1>
```

#### Inapplicable Example 2

Disabled element.

```html
<button type="button" disabled>Click Me!</button>
```

#### Inapplicable Example 3

Hidden element using `display:none`.

```html
<button type="button" style="display:none;">Click Me!</button>
```

#### Inapplicable Example 4

Hidden element using `visibility:hidden`.

```html
<a href="#" style="visibility:hidden;">Link 1</a> <button style="visibility:hidden;">Button1</button>
```

## Glossary

### Focusable {#focusable}

Elements that can become the target of keyboard input as described in the [HTML](https://www.w3.org/TR/html) specification of [focusable](https://html.spec.whatwg.org/#focusable-area) and [can be focused](https://html.spec.whatwg.org/#specially-focusable).

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

### Standard keyboard navigation {#standard-keyboard-navigation}

_Standard keyboard navigation_ entails using one or more of the following:

- Tab key
- Shift+Tab
- Arrow keys
- Esc key
- Enter key
- Space key

Expected behavior of standard keyboard navigation keys:

- Tab key: Skipping forward between [focusable][] elements
- Shift+Tab: Skipping backwards between [focusable][] elements
- Arrow keys: Navigate input elements, e.g. up/down drop down, between radio buttons etc.
- Esc key: Close or cancel, e.g close a modal
- Enter key: Select or activate the element in focus (same as clicking with mouse)
- Space key: Select input elements, e.g. drop downs, radio buttons etc.

{% include_relative implementations/a1b64e.md %}

## Changelog

This is the first version of this ACT rule.

[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[focusable]: #focusable 'Definition of focusable'
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[html or svg element]: #namespaced-element
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
