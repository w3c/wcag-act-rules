---
title: "Text content that changes automatically can be paused, stopped or hidden"
permalink: /standards-guidelines/act/rules/efbfc7/proposed/
ref: /standards-guidelines/act/rules/efbfc7/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/efbfc7/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> efbfc7</p>
  <p><strong>Date:</strong> Updated 19 January 2026</p>
  <p><strong>Authors:</strong> <a href="https://github.com/carlosapaduarte">Carlos Duarte</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule conforms to <a href="https://www.w3.org/TR/act-rules-format-1.1/">ACT Rules Format 1.1</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: efbfc7
  name: "Text content that changes automatically can be paused, stopped or hidden"
  rule_type: atomic
  original_file: auto-update-text-efbfc7.md
  description: |
    This rule checks that for any text content that regularly changes automatically, there are instruments to pause, stop, or hide it or to control its changing frequency.
  last_modified: 19 January 2026
  scs_tested:
    - handle: Pause, Stop, Hide
      num: 2.2.2
      level: A
---

## Applicability

This rule applies to any [HTML element][] that has a [visible][] [text node][] as a [descendant][] in the [flat tree][], for which all the following is true:

- **changed:** the `innerText` property of the element changes multiple times within a 10 minute time span where there is no [user interaction][]; and
- **no child changed:** the element does not have [children][child] in the [flat tree][] whose `innerText` property also changes; and
- **not alone:** the element has an [ancestor][] element in the [flat tree][] with a non-empty `innerText` property whose value is different from the `innerText` of the test target.

## Expectation

For each test target there is at least one set of [instruments][instrument], where each [instrument][] is in the same [web page][] as the test target or can be found in a [clearly labeled location][] from that [web page][], to achieve at least one of the following objectives:

- pause and resume the change of the [visible text content][]; or
- stop the change of the [visible text content][]; or
- hide the changing [visible text content][]; or
- control the frequency of the changes of the [visible text content][].

**Note:** If there is more than one test target, the same [instrument][] may be used to pause (or stop, or hide or alter the frequency) of several or even all test targets.

## Background

The 10 minute time span in the applicability is arbitrary. It is selected so that testing this rule would not become impractical. This 10 minute constraint is not included in WCAG. Content that changes less frequently may fail success criteria 2.2.2 without failing this rule.

The [instruments][instrument] used to pass this rule (if any), must meet all level A Success Criteria in order to fully satisfy [Success Criterion 2.2.2: Pause, Stop, Hide][sc 2.2.2]. These extra requirements are left out of this rule, and should be tested separately.

### Assumptions

- The auto-updating of the content is not [essential][], which is listed as valid exception to [Success Criterion 2.2.2: Pause, Stop, Hide][sc 2.2.2]. When the auto-updating of content is [essential][] this rule may produce incorrect results.
- The content being changed automatically is information. If the automatically changing content is not information (for example, an ASCII rendered spinning icon that does not provide information on what time is left for a process to end or how much progress has been made) the rule might fail but the success criterion might still be satisfied.
- Any [content][] changes are enabled by the content of the [HTML document][] the test target belongs to. Changes originating from any other sources (e.g. browser shortcuts, browser extensions, browser settings, user agents, external browser applications) are not considered.
- All user actions are transmitted by the user agent to the [HTML document][]. If there are other event sources that result from a user action this rule might fail but the success criterion might still be satisfied.
- Available [instruments][instrument] for controlling the content changes rely on [activation][]. If there are other [instruments][instrument] that do not rely on [activation][] then the rule might fail but the success criterion might still be satisfied.
- If there are other ways to control the automatically changing content that do not require the user to interact with the web page, failing this rule might not be a failure of the success criterion.
- This rule does not check that the pausing instrument does not tie up the user focus. If that happens, then this rule might pass but the success criterion would not be satisfied.

### Accessibility Support

There are no accessibility support issues known.

### Other Resources

- [Understanding Success Criterion 2.2.2: Pause, Stop, Hide][sc 2.2.2]
- [G186: Using a control in the Web page that stops moving, blinking, or auto-updating content][g186]
- [F16: Failure of Success Criterion 2.2.2 due to including scrolling content where movement is not essential to the activity without also including a mechanism to pause and restart the content][f16]

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>2.2.2 Pause, Stop, Hide (Level A)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG22/#pause-stop-hide">Learn more about 2.2.2 Pause, Stop, Hide</a></li>
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
</ul>

## Input Aspects

The following aspects are required in using this rule.

- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)
- [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)

## Examples

<details class="act-inline-assets" markdown="block">
<summary><span>This Javascript file is used in several examples:</span></summary>

File [`/test-assets/efbfc7/script.js`](https://w3.org/WAI/content-assets/wcag-act-rules/test-assets/efbfc7/script.js):

```javascript
function change() {
	var target = document.getElementById('target')
	var number = Math.floor(Math.random() * 1000)
	target.innerText = number
}

var updates
var updating = false

function startUpdates(interval = 1000) {
	updating = true
	updates = setInterval(change, interval)
}

function stopUpdates() {
	updating = false
	clearInterval(updates)
}

function changeFrequency(interval = 1) {
	clearInterval(updates)
	updates = startUpdates(interval * 1000)
}

function toggleUpdates() {
	var control = document.getElementById('control')
	if (updating) {
		control.value = 'Resume changes'
		updating = false
		clearInterval(updates)
	} else {
		control.value = 'Pause changes'
		updating = true
		updates = setInterval(change, 1000)
	}
}

function hide() {
	var target = document.getElementById('target')
	target.style.visibility = 'hidden'
}
```

</details>

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/efbfc7/fd32eba89caf3d650173b950eca075414f205494.html">Open in a new tab</a>

This `span` element contains text content that is automatically **changed** multiple times without user intervention and there is a button available to stop the automatic changes. The rule is not applicable to the second `p` element because it has a **child changed** (the `span` element).

```html
<body onload="startUpdates()">
	<p>
		The W3C Web Accessibility Initiative (WAI) develops standards and support materials to help you understand and
		implement accessibility.
	</p>

	<p>Random number: <span id="target">1</span></p>
	<input type="button" onclick="stopUpdates()" value="Stop changes" />

	<script type="text/javascript" src="/test-assets/efbfc7/script.js"></script>
</body>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/efbfc7/18adb94ce561c2d1f29dec32d91f3dd39a8e45b2.html">Open in a new tab</a>

This `span` element contains text content that is automatically **changed** multiple times without user intervention and there is a button available to pause and resume the automatic changes. The rule is not applicable to the second `p` element because it has a **child changed** (the `span` element).

```html
<body onload="startUpdates()">
	<p>
		The W3C Web Accessibility Initiative (WAI) develops standards and support materials to help you understand and
		implement accessibility.
	</p>

	<p>Random number: <span id="target">1</span></p>
	<input type="button" id="control" onclick="toggleUpdates()" value="Pause changes" />

	<script type="text/javascript" src="/test-assets/efbfc7/script.js"></script>
</body>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/efbfc7/337477ac8e969c4d134079babf891b0f1fd33eba.html">Open in a new tab</a>

This `span` element contains text content that is automatically **changed** multiple times without user intervention and there is a button available to hide the automatically updating content. The rule is not applicable to the second `p` element because it has a **child changed** (the `span` element).

```html
<body onload="startUpdates()">
	<p>
		The W3C Web Accessibility Initiative (WAI) develops standards and support materials to help you understand and
		implement accessibility.
	</p>

	<p>Random number: <span id="target">1</span></p>
	<input type="button" onclick="hide()" value="Hide changing content" />

	<script type="text/javascript" src="/test-assets/efbfc7/script.js"></script>
</body>
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/efbfc7/a17f7d747d85f4a7e1f071b6278e7234e445ac13.html">Open in a new tab</a>

This `span` element contains text content that is automatically **changed** multiple times without user intervention and there is an [instrument][] available to modify the frequency of the changes. The rule is not applicable to the second `p` element because it has a **child changed** (the `span` element).

```html
<body onload="startUpdates()">
	<p>
		The W3C Web Accessibility Initiative (WAI) develops standards and support materials to help you understand and
		implement accessibility.
	</p>

	<p>Random number: <span id="target">1</span></p>
	<label for="interval">Content change frequency (seconds):</label>
	<input type="text" id="interval" />
	<input type="button" onclick="changeFrequency(document.getElementById('interval').value)" value="Change frequency" />

	<script type="text/javascript" src="/test-assets/efbfc7/script.js"></script>
</body>
```

#### Passed Example 5

<a class="example-link" title="Passed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/efbfc7/9f538bf383d5cffaacb52ef47102b7b00ac9b5f4.html">Open in a new tab</a>

This `span` element contains text content that is automatically **changed** multiple times without user intervention and the location of an [instrument][] to control the changes is clearly available.

```html
<body onload="startUpdates()">
	<p>
		The W3C Web Accessibility Initiative (WAI) develops standards and support materials to help you understand and
		implement accessibility.
	</p>

	<p>Random number: <span id="target">1</span></p>
	<p>To control the random number updates activate the "Control changes" button.</p>
	<input type="button" onclick="openModal()" value="Control changes" />

	<div
		style="
      display: none;
      position: fixed;
      top: 2em;
      left: 10em;
      background-color: #505050;
      color: white;
      padding: 1em;
      padding-top: 0em;
    "
		id="overlay"
	>
		<p>Control changes</p>
		<input type="button" id="control" onclick="toggleUpdates()" value="Pause changes" />
		<input type="button" onclick="hide()" value="Hide changes" />
		<button onclick="closeModal();">Dismiss</button>
	</div>

	<script type="text/javascript">
		function openModal() {
			document.getElementById('overlay').style.display = 'block'
		}
		function closeModal() {
			document.getElementById('overlay').style.display = 'none'
		}
	</script>
	<script type="text/javascript" src="/test-assets/efbfc7/script.js"></script>
</body>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/efbfc7/8f0a05348afb0a218f3934157dad1b4d1673ea6a.html">Open in a new tab</a>

This `span` element contains text content that is automatically **changed** multiple times without user intervention and there is no [instrument][] available to stop, pause, hide or alter the frequency of the automatic changes.

```html
<body onload="startUpdates()">
	<p>
		The W3C Web Accessibility Initiative (WAI) develops standards and support materials to help you understand and
		implement accessibility.
	</p>

	<p>Random number: <span id="target">1</span></p>

	<script type="text/javascript" src="/test-assets/efbfc7/script.js"></script>
</body>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/efbfc7/37668beb45f00408309f73569e36e63dc9327620.html">Open in a new tab</a>

This document does not have any visible text node.

```html
<img src="/test-assets/shared/w3c-logo.png" alt="W3C logo" />
<p style="display: none">
	The W3C Web Accessibility Initiative (WAI) develops standards and support materials to help you understand and
	implement accessibility.
</p>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/efbfc7/7e37318b6f7708dd98b0a86e72c501eeaf6ef721.html">Open in a new tab</a>

This document does not have text content that is automatically **changed**.

```html
<p>
	The W3C Web Accessibility Initiative (WAI) develops standards and support materials to help you understand and
	implement accessibility.
</p>
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/efbfc7/49cc7da7458fa7eb1033fc6e0f12e4a6a6d70803.html">Open in a new tab</a>

This `span` element changes color but not its `innerText` property.

```html
<body onload="startColorUpdates()">
	<p>
		The W3C Web Accessibility Initiative (WAI) develops standards and support materials to help you understand and
		implement accessibility.
	</p>

	<p>Number: <span id="target">1</span></p>
	<input type="button" onclick="stop()" value="Stop color changes" />

	<script>
		const myColors = ['red', 'green', 'blue', 'black']
		let updates

		function startColorUpdates() {
			updates = setInterval(change, 1000)
		}

		function change() {
			let randomColor = myColors[Math.floor(Math.random() * myColors.length)]
			var target = document.getElementById('target')
			target.style.color = randomColor
		}

		function stop() {
			clearInterval(updates)
		}
	</script>
</body>
```

#### Inapplicable Example 4

<a class="example-link" title="Inapplicable Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/efbfc7/5345dc33f3218e816b0ef0ce8fd62985ef2a71ce.html">Open in a new tab</a>

This `span` element contains text content that is automatically **changed** but only as a result of the user activating a button on the page.

```html
<body>
	<p>
		The W3C Web Accessibility Initiative (WAI) develops standards and support materials to help you understand and
		implement accessibility.
	</p>

	<p>Random number: <span id="target">1</span></p>
	<input type="button" id="control" onclick="toggleUpdates()" value="Start changes" />

	<script type="text/javascript" src="/test-assets/efbfc7/script.js"></script>
</body>
```

#### Inapplicable Example 5

<a class="example-link" title="Inapplicable Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/efbfc7/0d1564a1311c77d8693a9f839e1d752df501d441.html">Open in a new tab</a>

This `span` element with text content that automatically changes multiple times is **alone** in the document.

```html
<body onload="startUpdates()">
	<span id="target">1</span>

	<script type="text/javascript" src="/test-assets/efbfc7/script.js"></script>
</body>
```

## Glossary

### Clearly labeled location {#clearly-labeled-location}

Secondary information and alternative controls of functionality are often not displayed together with primary information or functionality. For example, an option to change a web page to dark mode may be placed on an options page instead of being available on every page and page state of a website. Another example is a maps application, where, instead of using GPS, an option is available in a dropdown menu to set the current location of the device. Such content should be placed in a clearly labeled location.

The location of a target is said to be _clearly labeled_ when the target can be found by activating "identifiable" [instruments][instrument] which either lead the user to find the target, or to another [page][web page] or page state from which this action can be repeated until the target is found.

Whether or not the content is "clearly labeled" depends on the starting point of the search. If page A has a link which clearly "identifies" some piece of content, then the location of the content is clearly labeled. Page B, which can be in the same website, may not have such a link or may have a link with a link text that does not "identify" target content or which can be interpreted to "identify" more than one target, and so the location of the content starting from page B is not clearly labeled.

For the purpose of this definition, an [instrument][] is _identifiable_ if any text or other content with a [text alternative][], allows any user to identify an element with a [semantic role][] that inherits from `widget`.

A [web page][] changes state when the [document's body][body] changes without a change in the [document's URL][url].

### Explicit Semantic Role {#explicit-role}

The _explicit semantic role_ of an element is determined by its [role attribute][] (if any).

The [role attribute][] takes a list of tokens. The explicit semantic role is the first valid role in this list. The valid roles are all non-abstract roles from [WAI-ARIA Specifications][]. If the element has no [role attribute][], or if it has one with no valid role, then this element has no explicit semantic role.

Other roles may be added as they become available. Not all roles will be supported in all assistive technologies. Testers are encouraged to adjust which roles are allowed according to the [accessibility support base line][]. For the purposes of executing examples in all rules, it should be assumed that all roles are supported by assistive technologies so that none of the roles fail due to lack of accessibility support.

### Focusable {#focusable}

An element is _focusable_ if one or both of the following are true:

- the element is part of [sequential focus navigation][]; or
- the element has a [tabindex value][] that is not null.

**Exception**: Elements that lose focus and do not regain focus during a period of up to 1 second after gaining focus, without the user interacting with the page the element is on, are not considered _focusable_.

Notes:

- The 1 second time span is an arbitrary limit which is not included in WCAG. Given that scripts can manage the focus state of elements, testing the focusability of an element consistently would be impractical without a time limit.
- The [tabindex value][] of an element is the value of the [tabindex attribute][] parsed using the [rules for parsing integers][]. For the [tabindex value][] to be different from null, it needs to be [parsed][rules for parsing integers] without errors.

### Implicit Semantic Role {#implicit-role}

The _implicit semantic role_ of an element is a pre-defined value given by the host language which depends on the element and its ancestors.

Implicit roles for HTML and SVG, are documented in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/#html-element-role-mappings) and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/#mapping_role_table).

### Included in the accessibility tree {#included-in-the-accessibility-tree}

Elements included in the accessibility tree of platform specific accessibility APIs are exposed to assistive technologies. This allows users of assistive technology to access the elements in a way that meets the requirements of the individual user.

The general rules for when elements are included in the accessibility tree are defined in the [core accessibility API mappings](https://www.w3.org/TR/core-aam/). For native markup languages, such as HTML and SVG, additional rules for when elements are included in the accessibility tree can be found in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/) and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/).

For more details, see [examples of included in the accessibility tree][].

[Programmatically hidden](#programmatically-hidden) elements are removed from the accessibility tree. However, some browsers will leave [focusable](#focusable) elements with an `aria-hidden` attribute set to `true` in the accessibility tree. Because they are hidden, these elements are considered **not** included in the accessibility tree. This may cause confusion for users of assistive technologies because they may still be able to interact with these focusable elements using sequential keyboard navigation, even though the element should not be included in the accessibility tree.

### Instrument to achieve an objective {#instrument-to-achieve-an-objective}

An [HTML element][] that when [activated][] allows an end-user to achieve an objective.

**Note**: Any rule that uses this definition must provide an unambiguous description of the objective the instrument is used to achieve.

### Marked as decorative {#marked-as-decorative}

An element is _marked as decorative_ if one or more of the following conditions is true:

- it has an [explicit role][] of `none` or `presentation`; or
- it is an `img` element with an `alt` attribute whose value is the empty string (`alt=""`), and with no [explicit role][].

Elements are marked as decorative as a way to convey the intention of the author that they are [pure decoration][]. It is different from the element actually being [pure decoration][] as authors may make mistakes. It is different from the element being effectively ignored by assistive technologies as rules such as [presentational roles conflict resolution][] may overwrite this intention.

Elements can also be ignored by assistive technologies if they are [programmatically hidden][]. This is different from marking the element as decorative and does not convey the same intention. Notably, being [programmatically hidden][] may change as users interact with the page (showing and hiding elements) while being marked as decorative should stay the same through all states of the page.

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

### Programmatically Hidden {#programmatically-hidden}

An HTML element is _programmatically hidden_ if either it has a [computed][] CSS property `visibility` whose value is not `visible`; or at least one of the following is true for any of its [inclusive ancestors][] in the [flat tree][]:

- has a [computed][] CSS property `display` of `none`; or
- has an `aria-hidden` attribute set to `true`

**Note**: Contrary to the other conditions, the `visibility` CSS property may be reverted by descendants.

**Note**: The [HTML standard suggests](https://html.spec.whatwg.org/multipage/rendering.html#hidden-elements) setting the CSS `display` property to `none` for elements with the `hidden` attribute. While not required by HTML, all modern browsers follow this suggestion. Because of this the `hidden` attribute is not used in this definition. In browsers that use this suggestion, overriding the CSS `display` property can reveal elements with the `hidden` attribute.

### Semantic Role {#semantic-role}

The _semantic role_ of an element is determined by the first of these cases that applies:

1. **Conflict** If the element is [marked as decorative][], but the element is [included in the accessibility tree][]; or would be [included in the accessibility tree][] when it is not [programmatically hidden][], then its _semantic role_ is its **[implicit role][]**.
1. **Explicit** If the element has an [explicit role][], then its _semantic role_ is its [explicit role][].
1. **Implicit** The _semantic role_ of the element is its [implicit role][].

This definition can be used in expressions such as "semantic `button`" meaning any element with a semantic role of `button`.

### User interaction {#user-interaction}

A user interaction is any action that causes the user agent to fire one of the following [DOM events][event]:

- auxclick
- click
- compostionend
- compositionstart
- compositionupdate
- dblclick
- keydown
- keyup
- mousedown
- mouseenter
- mouseleave
- mousemove
- mouseout
- mouseover
- mouseup
- select
- wheel

This list comprises the [User Interface event][uievents] that are generated by the user agent as a result of user interaction.

### Visible {#visible}

Content perceivable through sight.

Content is considered _visible_ if making it fully transparent would result in a difference in the pixels rendered for any part of the document that is currently within the viewport or can be brought into the viewport via scrolling.

[Content is defined in WCAG](https://www.w3.org/TR/WCAG22/#dfn-content).

For more details, see [examples of visible](https://www.w3.org/WAI/standards-guidelines/act/rules/terms/visible/examples/).

### Visible Text Content {#visible-text-content}

The _visible text content_ of an [element][] is a set of all [visible][] [text nodes][] that are [descendants][] in the [flat tree][] of this element

### WAI-ARIA specifications {#wai-aria-specifications}

The _WAI ARIA Specifications_ group both the WAI ARIA W3C Recommendation and ARIA modules, namely:

- [Accessible Rich Internet Applications (WAI-ARIA) 1.2](https://www.w3.org/TR/wai-aria-1.2/)
- [WAI-ARIA Graphics Module 1.0](https://www.w3.org/TR/graphics-aria-1.0/)
- [Digital Publishing WAI-ARIA Module 1.0](https://www.w3.org/TR/dpub-aria-1.0/)

**Note:** depending on the type of content being evaluated, part of the specifications might be irrelevant and should be ignored.

### Web page (HTML) {#web-page-html}

An _HTML [web page](https://www.w3.org/TR/WCAG22/#dfn-web-page-s)_ is the set of all [fully active](https://html.spec.whatwg.org/#fully-active) [documents](https://dom.spec.whatwg.org/#concept-document) which share the same [top-level browsing context](https://html.spec.whatwg.org/#top-level-browsing-context).

**Note:** Nesting of browsing context mostly happens with `iframe` and `object`. Thus a web page will most of the time be a "top-level" document and all its `iframe` and `object` (recursively).

**Note:** [Web pages](https://www.w3.org/TR/WCAG22/#dfn-web-page-s) as defined by WCAG are not restricted to the HTML technology but can also include, _e.g._, PDF or DOCX documents.

**Note:** Although web pages as defined here are sets of [documents](https://dom.spec.whatwg.org/#concept-document) (and do not contain other kind of nodes), one can abusively write that any node is "in a web page" if it is a [shadow-including descendant](https://dom.spec.whatwg.org/#concept-shadow-including-descendant) of a [document](https://dom.spec.whatwg.org/#concept-document) that is part of that web page.

[accessibility support base line]: https://www.w3.org/TR/WCAG-EM/#step1c 'Definition of accessibility support base line'
[activated]: https://html.spec.whatwg.org/#activation
[activation]: https://html.spec.whatwg.org/#activation
[ancestor]: https://dom.spec.whatwg.org/#concept-tree-ancestor
[body]: https://html.spec.whatwg.org/#dom-document-body
[child]: https://dom.spec.whatwg.org/#concept-tree-child
[clearly labeled location]: #clearly-labeled-location 'Definition of clearly labeled location'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[content]: https://www.w3.org/TR/WCAG22/#dfn-content
[descendant]: https://dom.spec.whatwg.org/#concept-tree-descendant
[descendants]: https://dom.spec.whatwg.org/#concept-tree-descendant 'DOM tree descendant, 2020/08/18'
[earl10-schema]: https://www.w3.org/TR/act-rules-format-1.1/#biblio-earl10-schema
[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[essential]: https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html#dfn-essential
[event]: https://dom.spec.whatwg.org/#concept-event
[examples of included in the accessibility tree]: https://www.w3.org/WAI/standards-guidelines/act/rules/terms/included-in-the-accesibility-tree/examples/
[explicit role]: #explicit-role 'Definition of Explicit Role'
[f16]: https://www.w3.org/WAI/WCAG22/Techniques/failures/F16
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focusable]: #focusable 'Definition of Focusable'
[g186]: https://www.w3.org/WAI/WCAG22/Techniques/general/G186
[html document]: https://dom.spec.whatwg.org/#html-document
[html element]: #namespaced-element
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[implicit role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[instrument]: #instrument-to-achieve-an-objective 'Definition of instrument to achieve an objective'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as Decorative'
[mechanism]: https://www.w3.org/TR/WCAG22/#dfn-mechanism 'WCAG Definition of Mechanism'
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
[outcome property]: https://www.w3.org/TR/EARL10-Schema/#outcome
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[programmatically hidden]: #programmatically-hidden 'Definition of Programmatically Hidden'
[pure decoration]: https://www.w3.org/TR/WCAG22/#dfn-pure-decoration 'WCAG definition of Pure Decoration'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[sc 2.2.2]: https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide
[sc211]: https://www.w3.org/TR/WCAG22/#keyboard 'Success Criterion 2.1.1 Keyboard'
[sc412]: https://www.w3.org/TR/WCAG22/#name-role-value 'Success Criterion 4.1.2 Name, Role, Value'
[semantic role]: #semantic-role 'Definition of semantic role'
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[test subject]: https://www.w3.org/TR/act-rules-format-1.1/#test-subject
[test target]: https://www.w3.org/TR/act-rules-format/#test-target
[text alternative]: https://www.w3.org/TR/WCAG22/#dfn-text-alternative 'Definition of text alternative'
[text node]: https://dom.spec.whatwg.org/#text
[text nodes]: https://dom.spec.whatwg.org/#text 'DOM text, 2020/08/18'
[uievents]: https://www.w3.org/TR/uievents/
[url]: https://url.spec.whatwg.org/#concept-url
[user interaction]: #user-interaction 'Definition of user interaction'
[visible text content]: #visible-text-content 'Definition of visible text content'
[visible]: #visible 'Definition of visible'
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
[web page]: #web-page-html 'Definition of web page'
