---
title: "Focusable element has no keyboard trap"
permalink: /standards-guidelines/act/rules/80af7b/proposed/
ref: /standards-guidelines/act/rules/80af7b/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/80af7b/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> 80af7b</p>
  <p><strong>Date:</strong> Updated 16 March 2022</p>
  <p><strong>Authors:</strong> <a href="https://github.com/annethyme">Anne Thyme Nørregaard</a>, <a href="https://github.com/DagfinnRomen">Dagfinn Rømen</a>, <a href="https://github.com/geirsf">Geir Sindre Fossøy</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: 80af7b
  name: "Focusable element has no keyboard trap"
  rule_type: composite
  description: |
    This rule checks for keyboard traps. This includes use of both standard and non-standard keyboard navigation to navigate through all content without becoming trapped.
  last_modified: 16 March 2022
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

### Bibliography

- [Understanding Success Criterion 2.1.2: No Keyboard Trap](https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html)
- [G21: Ensuring that users are not trapped in content](https://www.w3.org/WAI/WCAG21/Techniques/general/G21)
- [F10: Failure of Success Criterion 2.1.2 and Conformance Requirement 5 due to combining multiple content formats in a way that traps users inside one format type](https://www.w3.org/WAI/WCAG21/Techniques/failures/F10)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>2.1.2 No Keyboard Trap (Level A)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#no-keyboard-trap">Learn more about 2.1.2 No Keyboard Trap</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level A and higher.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>WCAG Non-Interference</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#cc5">Learn more about WCAG Non-Interference</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.1.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: WCAG 2 conformance requirement is not satisfied</li>
        <li>All <code>passed</code> outcomes: WCAG 2 conformance requirement needs further testing</li>
        <li>An <code>inapplicable</code> outcome: WCAG 2 conformance requirement needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>G21: Ensuring that users are not trapped in content</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G21">Learn more about technique G21</a></li>
      <li>Not required for conformance to any W3C accessibility recommendation.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: technique is not satisfied</li>
        <li>All <code>passed</code> outcomes: technique needs further testing</li>
        <li>An <code>inapplicable</code> outcome: technique needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
</ul>

## Input Rules

Outcomes of the following rules are required as input for this rule.

- [Focusable element has no keyboard trap via standard navigation](/standards-guidelines/act/rules/focusable-no-keyboard-trap-standard-nav-a1b64e/)
- [Focusable element has no keyboard trap via non-standard navigation](/standards-guidelines/act/rules/focusable-no-keyboard-trap-non-standard-nav-ebe86a/)

## Test Cases

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80af7b/96eb4b26010e8c598cb659108dbc34ca0abd82f9.html">Open in a new tab</a>

No trap for keyboard navigation.

```html
<a href="#">Link 1</a> <button>Button1</button>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80af7b/fb76f71a94bf95f5cfef22f3db6655e7b0a57b0c.html">Open in a new tab</a>

Using `tabindex="1"`.

```html
<div tabindex="1">Text</div>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80af7b/4b93a866e14ad4c9ed8efa13c080a1e05350fa2f.html">Open in a new tab</a>

Using `tabindex="-1"`.

```html
<div tabindex="-1">Text</div>
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80af7b/2e5b21696d8d78553aef73c00c2c4118a123ce53.html">Open in a new tab</a>

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

<a class="example-link" title="Passed Example 5" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80af7b/7aa9d83ec176f011c1646a8977070c2b1c5209b6.html">Open in a new tab</a>

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

<a class="example-link" title="Passed Example 6" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80af7b/3432e1dfefcc17bea67a25de3c42a9a4bec73d7c.html">Open in a new tab</a>

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

<a class="example-link" title="Failed Example 1" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80af7b/780388a837915960bca7651bd80743fb2cafdbcb.html">Open in a new tab</a>

Keyboard trap one element.

```html
<a href="#">Link 1</a>
<button onblur="setTimeout(() => this.focus(), 10)">
	Button1
</button>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80af7b/d2f5325f3fd5ddde38cd677a5ca36ba0d762fb84.html">Open in a new tab</a>

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

<a class="example-link" title="Failed Example 3" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80af7b/0ec0e93e7f8ffca39e1eb58a4a8503f1bd4cb145.html">Open in a new tab</a>

A [focusable][] element between keyboard traps.

```html
<button onblur="setTimeout(() => this.focus(), 10)">Button 1</button>
<button>Button 2</button>
<button onblur="setTimeout(() => this.focus(), 10)">Button 3</button>
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80af7b/5e4c0baac1de5da1325348d49892a01b92f8fb0c.html">Open in a new tab</a>

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

<a class="example-link" title="Failed Example 5" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80af7b/e9885e3c626b0f50853075e86e0b2f82d723bd24.html">Open in a new tab</a>

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

<a class="example-link" title="Failed Example 6" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80af7b/5cbf445372b50a5ff8e428c6b8b00506b1decddb.html">Open in a new tab</a>

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

<a class="example-link" title="Inapplicable Example 1" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80af7b/16dddd8ac5c419caba2c709b1b1f49cc5759e63c.html">Open in a new tab</a>

No [focusable][] element.

```html
<h1>Page 1</h1>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80af7b/6e3dcc2f3612826dd3d8589c4e2951ad7a3e4dd7.html">Open in a new tab</a>

Disabled element.

```html
<button type="button" disabled>Click Me!</button>
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80af7b/9d47dcc67abbcb177876ce082ae073947cc7135d.html">Open in a new tab</a>

Hidden element using `display:none`.

```html
<button type="button" style="display:none;">Click Me!</button>
```

#### Inapplicable Example 4

<a class="example-link" title="Inapplicable Example 4" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80af7b/30ffb2991af4d1727223409c9f1235e44acc1c13.html">Open in a new tab</a>

Hidden element using `visibility:hidden`.

```html
<a href="#" style="visibility:hidden;">Link 1</a> <button style="visibility:hidden;">Button1</button>
```

## Glossary

### Focusable {#focusable}

An element is _focusable_ if one or both of the following are true:

- the element is part of [sequential focus navigation][]; or
- the element has a [tabindex value][] that is not null.

**Exception**: Elements that lose focus during a period of up to 1 second after gaining focus, without the user interacting with the page the element is on, are not considered _focusable_.

Notes:

- The 1 second time span is an arbitrary limit which is not included in WCAG. Given that scripts can manage the focus state of elements, testing the focusability of an element consistently would be impractical without a time limit.
- The [tabindex value][] of an element is the value of the [tabindex attribute][] parsed using the [rules for parsing integers][]. For the [tabindex value][] to be different from null, it needs to be [parsed][rules for parsing integers] without errors.

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

{% include_relative _implementation-proposed.md %}

## Changelog

This is the first version of this ACT rule.

[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[focusable]: #focusable 'Definition of focusable'
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[html or svg element]: #namespaced-element
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
