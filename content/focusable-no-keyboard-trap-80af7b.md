---
title: "Focusable element has no keyboard trap"
permalink: /standards-guidelines/act/rules/focusable-no-keyboard-trap-80af7b/
ref: /standards-guidelines/act/rules/focusable-no-keyboard-trap-80af7b/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/focusable-no-keyboard-trap-80af7b.md
footer: |
  <p><strong>Date:</strong> Updated August 24th, 2021</p>
  <p><strong>Authors:</strong> <a href="https://github.com/annethyme">Anne Thyme Nørregaard</a>, <a href="https://github.com/DagfinnRomen">Dagfinn Rømen</a>, <a href="https://github.com/geirsf">Geir Sindre Fossøy</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules community group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>.</p>
proposed: true
rule_meta:
  id: 80af7b
  name: "Focusable element has no keyboard trap"
  rule_type: composite
  description: |
    This rule checks for keyboard traps. This includes use of both standard and non-standard keyboard navigation to navigate through all content without becoming trapped.
  accessibility_requirements:
    'wcag20:2.1.2':
      forConformance: true
      failed: not satisfied
      passed: further testing needed
      inapplicable: further testing needed
    'wcag-text:cc5':
      title: WCAG Non-Interference
      forConformance: true
      failed: not satisfied
      passed: further testing needed
      inapplicable: further testing needed
    'wcag-technique:G21':
      forConformance: false
      failed: not satisfied
      passed: further testing needed
      inapplicable: further testing needed
  input_aspects:
    - a1b64e
    - ebe86a
  last_modified: August 24th, 2021
  scs_tested:
    - handle: No Keyboard Trap
      num: 2.1.2
      level: A
---

## Applicability

This rule only applies to any [HTML or SVG element][] that is [focusable][].

**Note:** This rule only applies to HTML and SVG. Thus, it is a partial check for WCAG 2.0 success criterion 2.1.2, which applies to all content.

## Expectation

For each test target, the [outcome](#outcome) of at least one of the following rules is "passed":

- [Focusable Element Has No Keyboard Trap Via Standard Navigation](https://act-rules.github.io/rules/a1b64e)
- [Focusable Element Has No Keyboard Trap Via Non-Standard Navigation](https://act-rules.github.io/rules/ebe86a)

## Assumptions

_There are currently no assumptions._

## Accessibility Support

_There are no major accessibility support issues known for this rule._

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

#### Passed Example 4

Keyboard trap with help information in a paragraph before, and where the method advised works.

```html
<script>
	var trapOn = false
</script>

<p>Press the M-key to Exit</p>
<a id="link1" href="#">Link 1</a>
<button id="btn1" onblur="(function(e){trapOn=true; document.getElementById('btn2').focus();})(event)">
	Button 1
</button>
<button
	id="btn2"
	onkeydown="(function(e){ if (e.keyCode === 77){trapOn=false;document.getElementById('link2').focus();}})(event)"
	onblur="(function(e){ if(trapOn){document.getElementById('btn1').focus();}})(event)"
>
	Button 2
</button>
<a id="link2" href="#">Link 2</a>
```

#### Passed Example 5

Keyboard trap with help information within the trap, and where the method advised works.

```html
<script>
	var trapOn = false
</script>

<a id="link1" href="#">Link 1</a>
<button id="btn1" onblur="(function(e){trapOn=true; document.getElementById('btn2').focus();})(event)">
	Button 1
</button>
<p>Press the M-key to Exit</p>
<button
	id="btn2"
	onkeydown="(function(e){ if (e.keyCode === 77){trapOn=false;document.getElementById('link2').focus();}})(event)"
	onblur="(function(e){ if(trapOn){document.getElementById('btn1').focus();}})(event)"
>
	Button 2
</button>
<a id="link2" href="#">Link 2</a>
```

#### Passed Example 6

Keyboard trap with "help" link that once clicked exposes the instructions.

```html
<script>
	var trapOn = false

	function showHelpText() {
		document.getElementById('helptext').innerHTML = '<p>Press the M-key to Exit</p>'
	}
</script>

<div onkeydown="(function(e){ if (e.keyCode === 77){trapOn=false;document.getElementById('link2').focus();}})(event)">
	<a id="link1" href="#">Link 1</a>
	<button id="btn1" onblur="(function(e){trapOn=true; document.getElementById('helpLink').focus();})(event)">
		Button 1
	</button>
	<a id="helpLink" href="#" onclick="showHelpText()">How to go the next element</a>
	<div id="helptext"></div>
	<button id="btn2" onblur="(function(e){ if(trapOn){document.getElementById('btn1').focus();}})(event)">
		Button 2
	</button>
</div>
<a id="link2" href="#">Link 2</a>
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

#### Failed Example 4

Keyboard trap with no instructions.

```html
<script>
	var trapOn = false
</script>

<a id="link1" href="#">Link 1</a>
<button id="btn1" onblur="(function(e){trapOn=true; document.getElementById('btn2').focus();})(event)">
	Button 1
</button>
<button
	id="btn2"
	onkeydown="(function(e){ if (e.keyCode === 77){trapOn=false;document.getElementById('link2').focus();}})(event)"
	onblur="(function(e){ if(trapOn){document.getElementById('btn1').focus();}})(event)"
>
	Button 2
</button>
<a id="link2" href="#">Link 2</a>
```

#### Failed Example 5

Keyboard trap with instructions that doesn't give advise on the method for proceeding.

```html
<script>
	var trapOn = false
</script>

<p>Go to the next element</p>
<a id="link1" href="#">Link 1</a>
<button id="btn1" onblur="(function(e){trapOn=true; document.getElementById('btn2').focus();})(event)">
	Button 1
</button>
<button
	id="btn2"
	onkeydown="(function(e){ if (e.keyCode === 77){trapOn=false;document.getElementById('link2').focus();}})(event)"
	onblur="(function(e){ if(trapOn){document.getElementById('btn1').focus();}})(event)"
>
	Button 2
</button>
<a id="link2" href="#">Link 2</a>
```

#### Failed Example 6

Keyboard trap with help text, where the method advised doesn't work.

```html
<script>
	var trapOn = false
</script>

<a id="link1" href="#">Link 1</a>
<button id="btn1" onblur="(function(e){trapOn=true; document.getElementById('btn2').focus();})(event)">
	Button 1
</button>
<p>Press the M-key to Exit</p>
<button id="btn2" onblur="(function(e){ if(trapOn){document.getElementById('btn1').focus();}})(event)">
	Button 2
</button>
<a id="link2" href="#">Link 2</a>
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

{% include_relative implementations/80af7b.md %}

## Changelog

This is the first version of this ACT rule.

[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[focusable]: #focusable 'Definition of focusable'
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[html or svg element]: #namespaced-element
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
