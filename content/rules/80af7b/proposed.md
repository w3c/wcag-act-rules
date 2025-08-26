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
  <p><strong>Date:</strong> Updated 21 August 2025</p>
  <p><strong>Authors:</strong> <a href="https://github.com/annethyme">Anne Thyme Nørregaard</a>, <a href="https://github.com/DagfinnRomen">Dagfinn Rømen</a>, <a href="https://github.com/geirsf">Geir Sindre Fossøy</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: 80af7b
  name: "Focusable element has no keyboard trap"
  rule_type: composite
  original_file: focusable-no-keyboard-trap-80af7b.md
  description: |
    This rule checks for keyboard traps. This includes use of both standard and non-standard keyboard navigation to navigate through all content without becoming trapped.
  last_modified: 21 August 2025
  scs_tested:
    - handle: No Keyboard Trap
      num: 2.1.2
      level: A
---

## Applicability

This rule applies to any [HTML or SVG element][] that is [focusable][].

## Expectation

For each test target, the [outcome](#outcome) of at least one of the following rules is "passed":

- [Focusable Element Has No Keyboard Trap Via Standard Navigation](https://www.w3.org/WAI/standards-guidelines/act/rules/a1b64e/)
- [Focusable Element Has No Keyboard Trap Via Non-Standard Navigation](https://www.w3.org/WAI/standards-guidelines/act/rules/ebe86a/)

## Background

This rule only requires navigation in one direction (either forward or backward), not both, and not a specific one. It is clear that not being able to escape a focus trap in any direction is a failure of [Success Criterion 2.1.2 No keyboard trap][sc212]. However, it is less clear that being able to escape in only one direction is enough to satisfy it. If [Success Criterion 2.1.2 No keyboard trap][sc212] requires the possibility to escape the trap in a specific way (e.g. forward [standard keyboard navigation](#standard-keyboard-navigation)) or in both directions, this rule may pass while the criterion is not satisfied.

### Assumptions

There are no assumptions.

### Accessibility Support

There are no accessibility support issues known.

### Bibliography

- [Understanding Success Criterion 2.1.2: No Keyboard Trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html)
- [G21: Ensuring that users are not trapped in content](https://www.w3.org/WAI/WCAG22/Techniques/general/G21)
- [F10: Failure of Success Criterion 2.1.2 and Conformance Requirement 5 due to combining multiple content formats in a way that traps users inside one format type](https://www.w3.org/WAI/WCAG22/Techniques/failures/F10)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>2.1.2 No Keyboard Trap (Level A)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG22/#no-keyboard-trap">Learn more about 2.1.2 No Keyboard Trap</a></li>
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
      <li><a href="https://www.w3.org/TR/WCAG22/#cc5">Learn more about WCAG Non-Interference</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.2.</li>
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
      <li><a href="https://www.w3.org/WAI/WCAG22/Techniques/general/G21">Learn more about technique G21</a></li>
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

<details class="act-inline-assets" markdown="block">
<summary><span>This Javascript file is used in several examples:</span></summary>

File [`/test-assets/focusable-no-keyboard-trap/keyboard.js`](https://w3.org/WAI/content-assets/wcag-act-rules/test-assets/focusable-no-keyboard-trap/keyboard.js):

```javascript
var trapOn = false

function moveFocusToButton(btn) {
	if (trapOn) {
		document.getElementById(btn).focus()
	}
}

function escapeTrapOnCtrlM(e) {
	if (e.keyCode === 77 && e.ctrlKey) {
		trapOn = false
		document.getElementById('link2').focus()
	}
}

function moveFocusTo(elm) {
	if (trapOn) {
		document.getElementById(elm).focus()
	}
}

function showHelpText() {
	document.getElementById('helptext').innerHTML = '<p>Press Ctrl+M to Exit</p>'
}
```

</details>

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80af7b/96eb4b26010e8c598cb659108dbc34ca0abd82f9.html">Open in a new tab</a>

These [focusable][] elements do not create a trap for keyboard navigation.

```html
<a href="#">Link 1</a> <button>Button1</button>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80af7b/fb76f71a94bf95f5cfef22f3db6655e7b0a57b0c.html">Open in a new tab</a>

This element is made [focusable][] by the `tabindex` attribute. It does not create a trap for keyboard navigation.

```html
<div tabindex="1">Text</div>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80af7b/4b93a866e14ad4c9ed8efa13c080a1e05350fa2f.html">Open in a new tab</a>

This element is made [focusable][] by the `tabindex` attribute, even if it is not part of the sequential focus navigation. It does not create a trap for keyboard navigation.

```html
<div tabindex="-1">Text</div>
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80af7b/ab24c77ed9daefc8fa1650aedf0d1c6438460243.html">Open in a new tab</a>

These focusable `button` elements have scripts that create a keyboard trap. The document includes help information in a paragraph before the `button` elements and the method advised works to escape the keyboard trap.

```html
<script src="/test-assets/focusable-no-keyboard-trap/keyboard.js"></script>

<p>Press Ctrl+M to Exit</p>
<a id="link1" href="#">Link 1</a>
<button id="btn1" onfocus="trapOn = true" onblur="moveFocusToButton('btn2')" onkeydown="escapeTrapOnCtrlM(event)">
	Button 1
</button>
<button id="btn2" onfocus="trapOn = true" onblur="moveFocusToButton('btn1')" onkeydown="escapeTrapOnCtrlM(event)">
	Button 2
</button>
<a id="link2" href="#">Link 2</a>
```

#### Passed Example 5

<a class="example-link" title="Passed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80af7b/e3902f01b8589702925be6d97f9542895ef3c76d.html">Open in a new tab</a>

These focusable `button` elements have scripts that create a keyboard trap. The document includes help information within the trap and the method advised works to escape the keyboard trap.

```html
<script src="/test-assets/focusable-no-keyboard-trap/keyboard.js"></script>

<a id="link1" href="#">Link 1</a>
<button id="btn1" onfocus="trapOn = true" onblur="moveFocusToButton('btn2')" onkeydown="escapeTrapOnCtrlM(event)">
	Button 1
</button>
<p>Press Ctrl+M to Exit</p>
<button id="btn2" onfocus="trapOn = true" onblur="moveFocusToButton('btn1')" onkeydown="escapeTrapOnCtrlM(event)">
	Button 2
</button>
<a id="link2" href="#">Link 2</a>
```

#### Passed Example 6

<a class="example-link" title="Passed Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80af7b/b92b5214d2b2214b89fb9812b389536759701790.html">Open in a new tab</a>

These focusable `button` elements have scripts that create a keyboard trap. The document includes help information in a "help" link that once clicked exposes the instructions to escape the keyboard trap.

```html
<script src="/test-assets/focusable-no-keyboard-trap/keyboard.js"></script>

<div onkeydown="escapeTrapOnCtrlM(event)">
	<a id="link1" href="#">Link 1</a>
	<button id="btn1" onfocus="trapOn = true" onblur="moveFocusTo('helpLink')">
		Button 1
	</button>
	<a id="helpLink" href="#" onclick="showHelpText()">How to go the next element</a>
	<div id="helptext"></div>
	<button id="btn2" onblur="moveFocusTo('btn1')">
		Button 2
	</button>
</div>
<a id="link2" href="#">Link 2</a>
```

#### Passed Example 7

<a class="example-link" title="Passed Example 7" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80af7b/d2f5325f3fd5ddde38cd677a5ca36ba0d762fb84.html">Open in a new tab</a>

The [focusable][] `button` labeled "Button3" creates a keyboard trap when navigating forward, as it moves focus back to "Button1" preventing users to focus "Button3". However, when navigating backward, all focusable elements receive focus as expected. Therefore, according to the background notes, this behavior is considered compliant with the rule, despite being recognized as a poor practice in terms of keyboard accessibility.

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

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80af7b/f5ea9fd3b681971b2af4953fae9bb2d319a203c6.html">Open in a new tab</a>

This [focusable][] element creates a keyboard trap bringing focus to the `button`. Note that if one of the links is removed, the focus may jump to the browser UI before the timeout expires, at which point the `this.focus()` trap cannot trigger anymore.

```html
<a href="#">Link 1</a>
<button onblur="setTimeout(() => this.focus(), 10)">
	Button1
</button>
<a href="#">Link 2</a>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80af7b/0ec0e93e7f8ffca39e1eb58a4a8503f1bd4cb145.html">Open in a new tab</a>

This `button` element is between other `button` elements creating a keyboard trap.

```html
<button onblur="setTimeout(() => this.focus(), 10)">Button 1</button>
<button>Button 2</button>
<button onblur="setTimeout(() => this.focus(), 10)">Button 3</button>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80af7b/7dcc4ae00712889d448ecbcba200e032dca59bf0.html">Open in a new tab</a>

These focusable `button` elements create a keyboard trap with no instructions.

```html
<script src="/test-assets/focusable-no-keyboard-trap/keyboard.js"></script>

<a id="link1" href="#">Link 1</a>
<button id="btn1" onfocus="trapOn = true" onblur="moveFocusToButton('btn2')" onkeydown="escapeTrapOnCtrlM(event)">
	Button 1
</button>
<button id="btn2" onfocus="trapOn = true" onblur="moveFocusToButton('btn1')" onkeydown="escapeTrapOnCtrlM(event)">
	Button 2
</button>
<a id="link2" href="#">Link 2</a>
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80af7b/8fba3918b361f251dab4c19bec8eddc5624218ee.html">Open in a new tab</a>

These focusable `button` elements create a keyboard trap with instructions that don't give advice on the method for proceeding.

```html
<script src="/test-assets/focusable-no-keyboard-trap/keyboard.js"></script>

<p>Go to the next element</p>
<a id="link1" href="#">Link 1</a>
<button id="btn1" onfocus="trapOn = true" onblur="moveFocusToButton('btn2')" onkeydown="escapeTrapOnCtrlM(event)">
	Button 1
</button>
<button id="btn2" onfocus="trapOn = true" onblur="moveFocusToButton('btn1')" onkeydown="escapeTrapOnCtrlM(event)">
	Button 2
</button>
<a id="link2" href="#">Link 2</a>
```

#### Failed Example 5

<a class="example-link" title="Failed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80af7b/62fd24e73ea55f55ad45de392128a816a6f03526.html">Open in a new tab</a>

These focusable `button` elements create a keyboard trap with help text, where the method advised doesn't work.

```html
<script src="/test-assets/focusable-no-keyboard-trap/keyboard.js"></script>

<a id="link1" href="#">Link 1</a>
<button id="btn1" onfocus="trapOn = true" onblur="moveFocusToButton('btn2')">
	Button 1
</button>
<p>Press Ctrl+M to Exit</p>
<button id="btn2" onfocus="trapOn = true" onblur="moveFocusToButton('btn1')">
	Button 2
</button>
<a id="link2" href="#">Link 2</a>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80af7b/16dddd8ac5c419caba2c709b1b1f49cc5759e63c.html">Open in a new tab</a>

There is no [focusable][] element.

```html
<h1>Page 1</h1>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80af7b/6e3dcc2f3612826dd3d8589c4e2951ad7a3e4dd7.html">Open in a new tab</a>

There is no [focusable][] element.

```html
<button type="button" disabled>Click Me!</button>
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80af7b/9d47dcc67abbcb177876ce082ae073947cc7135d.html">Open in a new tab</a>

There is no [focusable][] element.

```html
<button type="button" style="display:none;">Click Me!</button>
```

#### Inapplicable Example 4

<a class="example-link" title="Inapplicable Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/80af7b/30ffb2991af4d1727223409c9f1235e44acc1c13.html">Open in a new tab</a>

There is no [focusable][] element.

```html
<a href="#" style="visibility:hidden;">Link 1</a> <button style="visibility:hidden;">Button1</button>
```

## Glossary

### Focusable {#focusable}

An element is _focusable_ if one or both of the following are true:

- the element is part of [sequential focus navigation][]; or
- the element has a [tabindex value][] that is not null.

**Exception**: Elements that lose focus and do not regain focus during a period of up to 1 second after gaining focus, without the user interacting with the page the element is on, are not considered _focusable_.

Notes:

- The 1 second time span is an arbitrary limit which is not included in WCAG. Given that scripts can manage the focus state of elements, testing the focusability of an element consistently would be impractical without a time limit.
- The [tabindex value][] of an element is the value of the [tabindex attribute][] parsed using the [rules for parsing integers][]. For the [tabindex value][] to be different from null, it needs to be [parsed][rules for parsing integers] without errors.

### Namespaced Element {#namespaced-element}

An [element][] with a specific [namespaceURI][] value from [HTML namespaces][]. For example an "SVG element" is any element with the "SVG namespace", which is `http://www.w3.org/2000/svg`.

Namespaced elements are not limited to elements described in a specification. They also include custom elements. Elements such as `a` and `title` have a different namespace depending on where they are used. For example a `title` in an HTML page usually has the HTML namespace. When used in an `svg` element, a `title` element has the SVG namespace instead.

### Outcome {#outcome}

A conclusion that comes from evaluating an ACT Rule on a [test subject][] or one of its constituent test target. An outcome can be one of the five following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target][] meets all expectations
- **Failed:** A [test target][] does not meet all expectations
- **cantTell:** Whether the rule is applicable, or not all expectations were met could not be fully determined by the tester.
- **Untested**: The tester has not attempted to evaluate the test subject.

**Note**: A rule has one `passed` or `failed` outcome for every [test target][]. When a tester evaluates a test target it can also be reported as `cantTell` if the rule cannot be tested in its entirety. For example, when applicability was automated, but the expectations have to be evaluated manually.

When there are no test targets the rule has one `inapplicable` outcome. If the tester is unable to determine whether there are test targets there will be one `cantTell` outcome. And when no evaluation has occurred the test target has one untested outcome. This means that each [test subject][] always has one or more outcomes.

Outcomes used in ACT Rules can be expressed using the [outcome property][] of the [EARL10-Schema][earl10-schema].

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

[earl10-schema]: https://www.w3.org/TR/act-rules-format-1.1/#biblio-earl10-schema
[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[focusable]: #focusable 'Definition of focusable'
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[html or svg element]: #namespaced-element
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
[outcome property]: https://www.w3.org/TR/EARL10-Schema/#outcome
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[sc212]: https://www.w3.org/TR/WCAG22/#no-keyboard-trap 'Success Criterion 2.1.2 No Keyboard Trap'
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[test subject]: https://www.w3.org/TR/act-rules-format-1.1/#test-subject
[test target]: https://www.w3.org/TR/act-rules-format/#test-target
