---
title: "Focusable element has no keyboard trap via standard navigation"
permalink: /standards-guidelines/act/rules/a1b64e/proposed/
ref: /standards-guidelines/act/rules/a1b64e/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/a1b64e/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> a1b64e</p>
  <p><strong>Date:</strong> Updated 7 October 2025</p>
  <p><strong>Authors:</strong> <a href="https://github.com/annethyme">Anne Thyme Nørregaard</a>, <a href="https://github.com/carlosapaduarte">Carlos Duarte</a>, <a href="https://github.com/DagfinnRomen">Dagfinn Rømen</a>, <a href="https://github.com/geirsf">Geir Sindre Fossøy</a>, <a href="https: //github.com/MaliinO">Malin Øvrebø</a>, <a href="https://github.com/nitedog">Shadi Abou-Zahra</a>, <a href="https://github.com/skotkjerra">Stein Erik Skotkjerra</a>, Tom Brunet. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: a1b64e
  name: "Focusable element has no keyboard trap via standard navigation"
  rule_type: atomic
  original_file: focusable-no-keyboard-trap-standard-nav-a1b64e.md
  description: |
    This rule checks if it is possible to use standard keyboard navigation to navigate through all content on a web page without becoming trapped in any element.
  last_modified: 7 October 2025
---

## Applicability

This rule applies to any [HTML or SVG element][] that is [focusable][].

## Expectation

For each target element, focus can cycle to the browser UI by using [standard keyboard navigation](#standard-keyboard-navigation).

**Note:** It is not possible to fulfill this expectation by using browser specific shortcuts to return to the browser UI.

## Background

This rule only requires navigation in one direction (either forward or backward), not both, and not a specific one. It is clear that not being able to escape a focus trap in any direction is a failure of [Success Criterion 2.1.2 No keyboard trap][sc212]. However, it is less clear that being able to escape in only one direction is enough to satisfy it. If [Success Criterion 2.1.2 No keyboard trap][sc212] requires the possibility to escape the trap in a specific way (e.g. forward [standard keyboard navigation](#standard-keyboard-navigation)) or in both directions, this rule may pass while the criterion is not satisfied.

### Assumptions

- The focus order in keyboard navigation is cyclical, not linear, meaning that the focus order will cycle to the first/last element when it moves away from the last/first element.
- The Browser UI is part of the focus navigation cycle of the page.

### Accessibility Support

Some browsers have settings that will immediately cycle focus back to the web document. This fulfills the expectation because focus can cycle to the browser UI and the browser UI cycles focus back to the web document.

### Other Resources

- [Understanding Success Criterion 2.1.2: No Keyboard Trap](https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html)
- [G21: Ensuring that users are not trapped in content](https://www.w3.org/WAI/WCAG22/Techniques/general/G21)
- [F10: Failure of Success Criterion 2.1.2 and Conformance Requirement 5 due to combining multiple content formats in a way that traps users inside one format type](https://www.w3.org/WAI/WCAG22/Techniques/failures/F10)

## Accessibility Requirements Mapping

This rule is not required for conformance.

## Input Aspects

The following aspects are required in using this rule.

- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)
- [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)

## Examples

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/a1b64e/96eb4b26010e8c598cb659108dbc34ca0abd82f9.html">Open in a new tab</a>

These [focusable][] elements do not create a trap for keyboard navigation.

```html
<a href="#">Link 1</a> <button>Button1</button>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/a1b64e/d26e3cbd39acb781e77c93ea99cc37b4c886c0c5.html">Open in a new tab</a>

This element is made [focusable][] by the `tabindex` attribute. It does not create a trap for keyboard navigation.

```html
<div role="button" tabindex="1">Text</div>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/a1b64e/4b93a866e14ad4c9ed8efa13c080a1e05350fa2f.html">Open in a new tab</a>

This element is made [focusable][] by the `tabindex` attribute, even if it is not part of the sequential focus navigation. It does not create a trap for keyboard navigation.

```html
<div tabindex="-1">Text</div>
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/a1b64e/dcf917e0b17ba9ddbd9fe01239a94519b5bc0458.html">Open in a new tab</a>

While the elements with id "sentinelBefore" and "sentinelAfter" contain focus to the contents of the div with name "Sample Modal", focus is not trapped since the user can
use [standard keyboard navigation](#standard-keyboard-navigation) using the Escape key or by activating the "Close button" to dismiss the modal

```html
<div>Main page content with <a href="#">some link</a></div>
<div aria-hidden="true">
	<a href="#" id="sentinelBefore" style="position:absolute; top:-999em"
		>Upon receiving focus, this focus sentinel should wrap focus to the bottom of the modal</a
	>
</div>
<div
	id="sampleModal"
	role="dialog"
	aria-label="Sample Modal"
	aria-modal="true"
	style="border: solid black 1px; padding: 1rem;"
>
	<label>First and last name <input id="dialogFirst"/></label><br />
	<button id="closeButton">Close button</button>
</div>
<div aria-hidden="true">
	<a href="#" id="sentinelAfter" style="position:absolute; top:-999em"
		>Upon receiving focus, this focus sentinel should wrap focus to the top of the modal</a
	>
</div>
<script>
	window.addEventListener('load', () => {
		document.getElementById('dialogFirst').focus()
	})
	document.getElementById('sentinelBefore').addEventListener('focus', () => {
		document.getElementById('closeButton').focus()
	})
	document.getElementById('sentinelAfter').addEventListener('focus', () => {
		document.getElementById('dialogFirst').focus()
	})
	document.getElementById('closeButton').addEventListener('click', () => {
		document.getElementById('sampleModal').style.display = 'none'
	})
	document.getElementById('sampleModal').addEventListener('keydown', evt => {
		if (evt.key === 'Escape') {
			document.getElementById('sampleModal').style.display = 'none'
		}
	})
</script>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/a1b64e/f5ea9fd3b681971b2af4953fae9bb2d319a203c6.html">Open in a new tab</a>

This [focusable][] element creates a keyboard trap bringing focus to the `button`. Note that if one of the links is removed, the focus may jump to the browser UI before the timeout expires, at which point the `this.focus()` trap cannot trigger anymore.

```html
<a href="#">Link 1</a>
<button onblur="setTimeout(() => this.focus(), 10)">
	Button1
</button>
<a href="#">Link 2</a>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/a1b64e/d2f5325f3fd5ddde38cd677a5ca36ba0d762fb84.html">Open in a new tab</a>

These [focusable][] `button` elements create a keyboard trap preventing the last `button` to be reached using the keyboard.

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

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/a1b64e/0ec0e93e7f8ffca39e1eb58a4a8503f1bd4cb145.html">Open in a new tab</a>

This `button` element is between other `button` elements creating keyboard traps.

```html
<button onblur="setTimeout(() => this.focus(), 10)">Button 1</button>
<button>Button 2</button>
<button onblur="setTimeout(() => this.focus(), 10)">Button 3</button>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/a1b64e/16dddd8ac5c419caba2c709b1b1f49cc5759e63c.html">Open in a new tab</a>

There is no [focusable][] element.

```html
<h1>Page 1</h1>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/a1b64e/6e3dcc2f3612826dd3d8589c4e2951ad7a3e4dd7.html">Open in a new tab</a>

There is no [focusable][] element.

```html
<button type="button" disabled>Click Me!</button>
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/a1b64e/9d47dcc67abbcb177876ce082ae073947cc7135d.html">Open in a new tab</a>

There is no [focusable][] element.

```html
<button type="button" style="display:none;">Click Me!</button>
```

#### Inapplicable Example 4

<a class="example-link" title="Inapplicable Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/a1b64e/30ffb2991af4d1727223409c9f1235e44acc1c13.html">Open in a new tab</a>

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
