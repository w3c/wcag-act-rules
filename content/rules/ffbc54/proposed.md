---
title: "No keyboard shortcut uses only printable characters"
permalink: /standards-guidelines/act/rules/ffbc54/proposed/
ref: /standards-guidelines/act/rules/ffbc54/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/ffbc54/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> ffbc54</p>
  <p><strong>Date:</strong> Updated 21 June 2022</p>
  <p><strong>Authors:</strong> <a href="https://github.com/carlosapaduarte">Carlos Duarte</a>, <a href="https://github.com/joao-vicente">João Vicente</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: ffbc54
  name: "No keyboard shortcut uses only printable characters"
  rule_type: atomic
  description: |
    This rule checks that if keyboard shortcuts are implemented using only printable characters, then there is a mechanism to disable the shortcut, or to remap the shortcut to use one or more non-printable character keys, or the shortcut for a user interface component is only available when that component has focus.
  last_modified: 21 June 2022
  scs_tested:
    - handle: Character Key Shortcuts
      num: 2.1.4
      level: A
---

## Applicability

This rule applies to any [keyboard event][] for which all of the following is true:

- the event's attribute `key` is a [printable character][] key; and
- the event's method `getModifierState` returns `false` for each of the [valid modifier keys][]; and
- the event causes [changes in the content][changes in content] of the [HTML document][].

## Expectation

For each test target at least one of the following is true:

- **disable/remap**: there is at least one [set of clearly labeled instruments][] to [block events][blocked event] that use the [same key][same key events] as the test target and whose `getModifierState` method returns `false` for each of the [valid modifier keys][]; or
- **focus**: the [event target][] is an [inheriting semantic][] `widget`.

## Assumptions

- If there are ways to disable the result of [keyboard events][keyboard event] that do not require the user to interact with the web page (e.g. a setting at the operating system level), failing this rule might not be a failure of the success criterion.
- After being disabled, the event remains disabled until being re-enabled again. If the event is re-enabled through other non-user controlled means (e.g. a timeout) then this rule may pass while [Success Criterion 2.1.4: Character Key Shortcuts][sc2.1.4] is not satisfied.

## Accessibility Support

Currently [keyboard events][keyboard event] only support the types `keydown` and `keyup`. [Keyboard events][keyboard event] of type `keypressed` are considered [legacy keyboard events][] and are thus ignored by this rule.

## Background

The [instruments][instrument] used to pass this rule (if any), must meet all level A Success Criteria in order to fully satisfy [Success Criterion 2.1.4: Character Key Shortcuts][sc2.1.4]. These extra requirements are left out of this rule, and should be tested separately.
This rule allows [changes to the content][changes in content] when a [user interface component](https://www.w3.org/TR/WCAG21/#dfn-user-interface-components) has focus to meet the "Active only on focus" requirement from [Success Criterion 2.1.4][sc2.1.4]. As explained in the [Event dispatch and DOM event flow section](https://www.w3.org/TR/uievents/#event-flow) of the [UI Events Working Draft](https://www.w3.org/TR/uievents/), each [keyboard event][] is dispatched to an [event target][]. The [event target][] is the element that has focus. As such, the "Active only on focus" requirement from [Success Criterion 2.1.4][sc2.1.4] is implied by saying that the [event target][] is an [inheriting semantic][] `widget`.

The "Turn off" and "Remap" requirements from [Success Criterion 2.1.4][sc2.1.4] are combined in the **disable/remap** item of the Expectation section. For the disable requirement, [changes in content][] that are made through [keyboard events][keyboard event] with a [printable character][] value for the `key` attribute and a `getModifierState` return value of `false` for each of the [valid modifier keys][] effectively need to be [blocked][blocked event] (in other words, turned off or disabled). The remap requirement unblocks the events if the `getModifierState` query returns `true` for at least one of the [valid modifier keys][]. Once the `getModifierState` returns `true` for at least one of the [valid modifier keys][] of a [keyboard event][], such [keyboard event][] is no longer applicable for the rule and it passes the "Remap" requirement from [Success Criterion 2.1.4][sc2.1.4].

### Bibliography

- [Understanding Success Criterion 2.1.4: Character Key Shortcuts][sc2.1.4]
- [G217 Providing a mechanism to allow users to remap or turn off character key shortcuts](https://www.w3.org/WAI/WCAG21/Techniques/general/G217)
- [F99 Failure of Success Criterion 2.1.4 due to implementing character key shortcuts that cannot be turned off or remapped](https://www.w3.org/WAI/WCAG21/Techniques/failures/F99)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>2.1.4 Character Key Shortcuts (Level A)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#character-key-shortcuts">Learn more about 2.1.4 Character Key Shortcuts</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.1 on level A and higher.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion is satisfied</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
</ul>

## Input Aspects

The following aspects are required in using this rule.

- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)

## Test Cases

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/ffbc54/42e3322c82511e8b5df7ced0de580da73d48cee3.html">Open in a new tab</a>

This [HTML document][] is listening to [keyboard events][keyboard event] for which the attribute `key` is a [printable character][] and the method `getModifierState` returns `false`, and which cause [changes in content][]. There exists an [instrument][] to disable the [keyboard event][] so that [same key][same key events] events are [blocked][blocked event] unless `getModifierState("Control")` returns `true`, therefore meeting the **disable/remap** expectation.

```html
<html>
	<head>
		<title>Passed Example 1</title>
		<script src="/test-assets/ffbc54/shortcut.js"></script>
	</head>
	<body onload="registerShortcut({id: 'singleShortcut', shortcutKey: '+'}); activateShortcuts();">
		<label for="target">Add to list (press "+" to add):</label>
		<input type="text" id="target" />
		<div>
			<div>Remap shortcut</div>
			<div>
				<label>
					<input id="remap" type="checkbox" onclick="toggleModifier('singleShortcut', this.checked)" />
					Use "ctrl" key together with the "+" key
				</label>
			</div>
		</div>
		<br />
		<div>
			To do list
		</div>
		<ul id="list"></ul>
	</body>
</html>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/ffbc54/5eb51f191548caa164fc474a272f511493bd7b9c.html">Open in a new tab</a>

This [HTML document][] is listening to [keyboard events][keyboard event] for which the attribute `key` is a [printable character][] and the method `getModifierState` returns `false`, and which cause [changes in content][]. There exists an [instrument][] to **disable** the [keyboard event][]. A disabled event implies that the event is disabled when the `getModifierState` method returns `false`.

```html
<html>
	<head>
		<title>Passed Example 2</title>
		<script src="/test-assets/ffbc54/shortcut.js"></script>
	</head>
	<body onload="registerShortcut({id: 'singleShortcut', shortcutKey: '+'}); activateShortcuts();">
		<label for="target">Add to list (press "+" to add):</label>
		<input type="text" id="target" />
		<label>
			<input type="checkbox" onclick="toggleDisabled('singleShortcut', !this.checked)" checked />
			Toggle single character keyboard shortcut
		</label>
		<br />
		<div>
			To do list
		</div>
		<ul id="list"></ul>
	</body>
</html>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/ffbc54/8b11ae88e8b977839b56670eed8f1ff3ebae0fef.html">Open in a new tab</a>

This [HTML document][] is listening to [keyboard events][keyboard event] for which the attribute `key` is a [printable character][] and the method `getModifierState` returns `false`, and which cause [changes in content][]. For each [keyboard event][] causing [changes in content][], there exists an [instrument][] to disable it so that [same key][same key events] events are [blocked][blocked event] unless `getModifierState("Control")` returns `true`, therefore meeting the **disable/remap** expectation.

```html
<html>
	<head>
		<title>Passed Example 3</title>
		<script src="/test-assets/ffbc54/shortcut.js"></script>
	</head>
	<body
		onload="registerShortcut({id: 'firstShortcut', shortcutKey: '+'}); registerShortcut({id: 'secondShortcut', shortcutKey: 'a'}); activateShortcuts();"
	>
		<label for="target">Add to list (press "+" or "a" to add):</label>
		<input type="text" id="target" />
		<div>
			<div>Remap shortcut</div>
			<div>
				<label>
					<input id="remap1" type="checkbox" onclick="toggleModifier('firstShortcut', this.checked)" />
					Use "ctrl" key together with the "+" key
				</label>
				<label>
					<input id="remap2" type="checkbox" onclick="toggleModifier('secondShortcut', this.checked)" />
					Use "ctrl" key together with the "a" key
				</label>
			</div>
		</div>
		<br />
		<div>
			To do list
		</div>
		<ul id="list"></ul>
	</body>
</html>
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/ffbc54/1370e47918de81be8896117540364bc18930eef4.html">Open in a new tab</a>

This [HTML document][] is listening to [keyboard events][keyboard event] for which the attribute `key` is a [printable character][] and the method `getModifierState` returns `false`, and which cause [changes in content][]. There exists an [instrument][] to **disable** those [keyboard events][keyboard event] that cause [changes in content][] so that [same key][same key events] events are [blocked][blocked event] unless `getModifierState("Control")` returns `true`. In this example, the same [instrument][] is used to **remap** all [keyboard events][keyboard event].

```html
<html>
	<head>
		<title>Passed Example 4</title>
		<script src="/test-assets/ffbc54/shortcut.js"></script>
	</head>
	<body
		onload="registerShortcut({id: 'firstShortcut', shortcutKey: '+'}); registerShortcut({id: 'secondShortcut', shortcutKey: 'a'}); activateShortcuts();"
	>
		<label for="target">Add to list (press "+" or "a" to add):</label>
		<input type="text" id="target" />
		<div>
			<div>Remap shortcut</div>
			<div>
				<label>
					<input
						id="remap"
						type="checkbox"
						onclick="toggleModifier('firstShortcut', this.checked); toggleModifier('secondShortcut', this.checked);"
					/>
					Use "ctrl" key together with the "+" or "a" key
				</label>
			</div>
		</div>
		<br />
		<div>
			To do list
		</div>
		<ul id="list"></ul>
	</body>
</html>
```

#### Passed Example 5

<a class="example-link" title="Passed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/ffbc54/c1666b2c31c9d1744fc630a19ffb78bdff741fcb.html">Open in a new tab</a>

This [HTML document][] is listening to [keyboard events][keyboard event] for which the attribute `key` is a [printable character][] and the method `getModifierState` returns `false`, and which cause [changes in content][], but the [events are blocked][blocked event] when no `widget` has [focus][].

```html
<html>
	<head>
		<title>Passed Example 5</title>
		<script src="/test-assets/ffbc54/shortcut.js"></script>
	</head>

	<body onload="registerShortcut({shortcutKey: '+', focusOnly: true}); activateShortcuts();">
		<label for="target">Add to list (press "+" to add):</label>
		<input type="text" id="target" />
		<br />
		<div>
			To do list
		</div>
		<ul id="list"></ul>
	</body>
</html>
```

#### Passed Example 6

<a class="example-link" title="Passed Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/ffbc54/73674bac916a769bcaeea593a84559a4559d5b9e.html">Open in a new tab</a>

This [HTML document][] is listening to [keyboard events][keyboard event] for which the attribute `key` is a [printable character][] and the method `getModifierState` returns `false`, and which cause [changes in content][]. There exists a [set of clearly labeled instruments][] to **disable** or to **remap** the [keyboard event][] so that [same key][same key events] events are [blocked][blocked event] unless `getModifierState("Control")` returns `true`.

```html
<html>
	<head>
		<title>Passed Example 6</title>
		<link rel="stylesheet" type="text/css" href="/test-assets/ffbc54/styles.css" />
		<script src="/test-assets/ffbc54/shortcut.js"></script>
	</head>
	<body onload="registerShortcut({id: 'singleShortcut', shortcutKey: '+'}); activateShortcuts();">
		<div id="overlay">
			<p>Disable/remap shortcut</p>
			<label>
				<input type="checkbox" onclick="toggleDisabled('singleShortcut', !this.checked)" checked />
				Toggle single character keyboard shortcut
			</label>
			<br />
			<label>
				<input id="remap" type="checkbox" onclick="toggleModifier('singleShortcut', this.checked)" />
				Use "ctrl" key together with the "+" key
			</label>
			<br />
			<button onclick="closeModal();">Dismiss</button>
		</div>
		<p>To control the shortcuts activate the "Control shortcuts" button.</p>
		<input type="button" onclick="openModal()" value="Control shortcuts" />

		<label for="target">Add to list (press "+" to add):</label>
		<input type="text" id="target" />
		<div>
			To do list
		</div>
		<ul id="list"></ul>
	</body>
</html>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/ffbc54/5824a1b3c92824e9ac93f1ca91e743deb6ca795e.html">Open in a new tab</a>

This [HTML document][] is listening to [keyboard events][keyboard event] for which the attribute `key` is a [printable character][] and the method `getModifierState` returns `false`, and which cause [changes in content][]. There is no [instrument][] to **disable** or **remap** the [keyboard event][] and the [keyboard events][keyboard event] are not [blocked][blocked event] when no `widget` has [focus][].

```html
<html>
	<head>
		<title>Failed Example 1</title>
		<script src="/test-assets/ffbc54/shortcut.js"></script>
	</head>
	<body onload="registerShortcut({shortcutKey: '+', disabled: false}); activateShortcuts();">
		<label for="target">Add to list (press "+" to add):</label>
		<input type="text" id="target" />
		<br />
		<div>
			To do list
		</div>
		<ul id="list"></ul>
	</body>
</html>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/ffbc54/bd5c8ee943fe77cf5cd46ce0e810bd949b537050.html">Open in a new tab</a>

This [HTML document][] is listening to [keyboard events][keyboard event] for which the attribute `key` is a [printable character][] and the method `getModifierState` returns `false`, and which cause [changes in content][]. There is an [instrument][] to **disable** or **remap** the [keyboard event][] so that [same key][same key events] events are [blocked][blocked event] unless `getModifierState("Control")` returns `true`, but the [instrument][] is not in a [clearly labeled location][].

```html
<html>
	<head>
		<title>Failed Example 2</title>
		<link rel="stylesheet" type="text/css" href="/test-assets/ffbc54/styles.css" />
		<script src="/test-assets/ffbc54/shortcut.js"></script>
	</head>
	<body onload="registerShortcut({id: 'singleShortcut', shortcutKey: '+'}); activateShortcuts();">
		<div id="overlay">
			<p>Disable/remap shortcut</p>
			<label>
				<input type="checkbox" onclick="toggleDisabled('singleShortcut', !this.checked)" checked />
				Toggle single character keyboard shortcut
			</label>
			<br />
			<label>
				<input id="remap" type="checkbox" onclick="toggleModifier('singleShortcut', this.checked)" />
				Use "ctrl" key together with the "+" key
			</label>
			<br />
			<button onclick="closeModal();">Dismiss</button>
		</div>

		<input type="button" onclick="openModal()" value="Open modal" />

		<label for="target">Add to list (press "+" to add):</label>
		<input type="text" id="target" />
		<div>
			To do list
		</div>
		<ul id="list"></ul>
	</body>
</html>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/ffbc54/7310b8cc841e92ccd85c6cf2899a460290da881f.html">Open in a new tab</a>

This [HTML document][] has a [keyboard event][] [dispatched][] to an [event target][] but it only causes [changes in content][] if the event's attribute `key` is not a [printable character][] (in this example, the Escape key).

```html
<html>
	<head>
		<title>Inapplicable Example 1</title>
		<script src="/test-assets/ffbc54/shortcut.js"></script>
	</head>

	<body onload="registerShortcut({shortcutKey: 'Escape'}); activateShortcuts();">
		<label for="target">Add to list (press "esc" to add):</label>
		<input type="text" id="target" />
		<br />
		<div>
			To do list
		</div>
		<ul id="list"></ul>
	</body>
</html>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/ffbc54/25d6f835f76fe661574145391bb1286b063a5c84.html">Open in a new tab</a>

This [HTML document][] has a [keyboard event][] [dispatched][] to an [event target][] with the attribute `key` being a [printable character][] but it does not cause [changes in content][] unless the `getModifierState` returns `true`.

```html
<html>
	<head>
		<title>Inapplicable Example 2</title>
		<script src="/test-assets/ffbc54/shortcut.js"></script>
	</head>

	<body onload="registerShortcut({shortcutKey: '+', ctrlKey: true}); activateShortcuts();">
		<label for="target">Add to list (press "ctrl" and "+" to add):</label>
		<input type="text" id="target" />
		<br />
		<div>
			To do list
		</div>
		<ul id="list"></ul>
	</body>
</html>
```

## Glossary

### Blocked event {#blocked-event}

A _blocked event_ makes no [changes to the content][changes in content] of the [web page][].

### Changes in content {#changes-in-content}

A _[event][] originated change in the content_ of a [web page][] occurs when, by comparing the [web page][] before and 1 minute after the event [firing][], at least one of the following occurs:

- **visible changes:** the rendered pixels change in any part of the document that is currently within the [viewport][] or that can be brought into the [viewport][] via scrolling; or
- **accessibility tree changes:** any state, property or event of a node representing an [accessible object][] of the [accessibility tree][] changes, or any node is inserted in, or removed from the [accessibility tree][]; or
- **audible changes:** the audio rendered by the [web page][] changes.

- If the [web page][] is rendering time-based media, rendered pixels and audio will be changing as part of the playback. The comparison in this instance should compare the pixels and audio that are rendered if the event is not fired, with the ones that are rendered if the event is fired.

**Assumptions:**

- This definition assumes that there are no changes in the content of the [web page][] caused by another [event][]. If this is not the case, changes may be attributed to the wrong event.
- This definition assumes that the changes happen within a 1 minute time span after the event firing and therefore the comparison between the page before and after the event firing can be made at any time after that time span elapses. If there are changes after this time span, this definition may not detect them. The arbitrary 1 minute time span, selected so that testing this rule would not be impractical, is not included in WCAG.

### Clearly labeled location {#clearly-labeled-location}

Secondary information and alternative controls of functionality are often not displayed together with primary information or functionality. For example, an option to change a web page to dark mode may be placed on an options page instead of being available on every page and page state of a website. Another example is a maps application, where, instead of using GPS, an option is available in a dropdown menu to set the current location of the device. Such content should be placed in a clearly labeled location.

The location of a target is said to be _clearly labeled_ when the target can be found by activating "identifiable" [instruments][instrument] which either lead the user to find the target, or to another [page][web page] or page state from which this action can be repeated until the target is found.

Whether or not the content is "clearly labeled" depends on the starting point of the search. If page A has a link which clearly "identifies" some piece of content, then the location of the content is clearly labeled. Page B, which can be in the same website, may not have such a link or may have a link with a link text that does not "identify" target content or which can be interpreted to "identify" more than one target, and so the location of the content starting from page B is not clearly labeled.

For the purpose of this definition, an [instrument][] is _identifiable_ if any text or other content with a [text alternative][], allows any user to identify an element with a [semantic role][] that inherits from `widget`.

A [web page][] changes state when the [document's body][body] changes without a change in the [document's URL][url].

### Explicit Semantic Role {#explicit-role}

The _explicit semantic role_ of an element is determined by its [role attribute][] (if any).

The [role attribute][] takes a list of tokens. The explicit semantic role is the first valid role in this list. The valid roles are all non-abstract roles from [WAI-ARIA Specifications][]. If the element has no [role attribute][], or if it has one with no valid role, then this element has no explicit semantic role.

Other roles may be added as they become available. Not all roles will be supported in all assistive technologies. Testers are encouraged to adjust which roles are allowed according to the [accessibility support base line][]. For the purposes of executing test cases in all rules, it should be assumed that all roles are supported by assistive technologies so that none of the roles fail due to lack of accessibility support.

### Focusable {#focusable}

An element is _focusable_ if one or both of the following are true:

- the element is part of [sequential focus navigation][]; or
- the element has a [tabindex value][] that is not null.

**Exception**: Elements that lose focus during a period of up to 1 second after gaining focus, without the user interacting with the page the element is on, are not considered _focusable_.

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

### Inheriting Semantic Role {#inheriting-semantic}

An element with an _inheriting semantic role_ of X is any element with a non-[abstract][] [semantic role][] that inherits from X, or is the same as X.

**Example**: An "inheriting semantic link" is any element that either has the [semantic role][] of [`link`][link] or a [semantic role][] that inherits from the [`link`][link] role, such as [doc-biblioref][].

### Instrument to achieve an objective {#instrument-to-achieve-an-objective}

An [HTML element][] that when [activated][] allows an end-user to achieve an objective.

**Note**: Any rule that uses this definition must provide an unambiguous description of the objective the instrument is used to achieve.

### Marked as decorative {#marked-as-decorative}

An element is _marked as decorative_ if one or more of the following conditions is true:

- it has an [explicit role][] of `none` or `presentation`; or
- it is an `img` element with an `alt` attribute whose value is the empty string (`alt=""`), and with no [explicit role][].

Elements are marked as decorative as a way to convey the intention of the author that they are [pure decoration][]. It is different from the element actually being [pure decoration][] as authors may make mistakes. It is different from the element being effectively ignored by assistive technologies as rules such as [presentational roles conflict resolution][] may overwrite this intention.

Elements can also be ignored by assistive technologies if they are [programmatically hidden][]. This is different from marking the element as decorative and does not convey the same intention. Notably, being [programmatically hidden][] may change as users interact with the page (showing and hiding elements) while being marked as decorative should stay the same through all states of the page.

### Outcome {#outcome}

An _outcome_ is a conclusion that comes from evaluating an ACT Rule on a [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) or one of its constituent [test target](https://www.w3.org/TR/act-rules-format/#test-target). An outcome can be one of the three following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) meets all expectations
- **Failed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) does not meet all expectations

**Note:** A rule has one `passed` or `failed` outcome for every [test target](https://www.w3.org/TR/act-rules-format/#test-target). When there are no test targets the rule has one `inapplicable` outcome. This means that each [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) will have one or more outcomes.

**Note:** Implementations using the [EARL10-Schema](https://www.w3.org/TR/EARL10-Schema/) can express the outcome with the [outcome property](https://www.w3.org/TR/EARL10-Schema/#outcome). In addition to `passed`, `failed` and `inapplicable`, EARL 1.0 also defined an `incomplete` outcome. While this cannot be the outcome of an ACT Rule when applied in its entirety, it often happens that rules are only partially evaluated. For example, when applicability was automated, but the expectations have to be evaluated manually. Such "interim" results can be expressed with the `incomplete` outcome.

### Printable characters {#printable-characters}

A _printable character_ is a character that occupies a printing position on a display.

These characters correspond to the following [Unicode categories](https://www.unicode.org/versions/Unicode12.0.0/ch04.pdf):

- Letter: 'LC', 'Ll', 'Lm', 'Lo', 'Lt', 'Lu'
- Number: 'Nd', 'Nl', 'No'
- Mark: 'Mc', 'Me', 'Mn'
- Punctuation: 'Pc', 'Pd', 'Pe', 'Pf', 'Pi', 'Po', 'Ps'
- Symbol: 'Sc', 'Sk', 'Sm', 'So'
- Space: 'Zs'

### Programmatically Hidden {#programmatically-hidden}

An HTML element is _programmatically hidden_ if either it has a [computed][] CSS property `visibility` whose value is not `visible`; or at least one of the following is true for any of its [inclusive ancestors][] in the [flat tree][]:

- has a [computed][] CSS property `display` of `none`; or
- has an `aria-hidden` attribute set to `true`

**Note**: Contrary to the other conditions, the `visibility` CSS property may be reverted by descendants.

**Note**: The [HTML standard suggests](https://html.spec.whatwg.org/multipage/rendering.html#hidden-elements) setting the CSS `display` property to `none` for elements with the `hidden` attribute. While not required by HTML, all modern browsers follow this suggestion. Because of this the `hidden` attribute is not used in this definition. In browsers that use this suggestion, overriding the CSS `display` property can reveal elements with the `hidden` attribute.

### Same key events {#same-key-events}

Two [keyboard events][] are _same key events_ if they have the same value for all the following attributes:

- `key`
- `code`
- `location`
- `repeat`
- `isComposing`

### Semantic Role {#semantic-role}

The _semantic role_ of an element is determined by the first of these cases that applies:

1. **Conflict** If the element is [marked as decorative][], but the element is [included in the accessibility tree][]; or would be [included in the accessibility tree][] when it is not [programmatically hidden][], then its _semantic role_ is its **[implicit role][]**.
1. **Explicit** If the element has an [explicit role][], then its _semantic role_ is its [explicit role][].
1. **Implicit** The _semantic role_ of the element is its [implicit role][].

This definition can be used in expressions such as "semantic `button`" meaning any element with a semantic role of `button`.

### Set of clearly labeled instruments {#set-of-clearly-labeled-instruments}

A _set of clearly labeled instruments_ is a set of [instruments][instrument], where each [instrument][] is in the same [web page][] as the test target or can be found in a [clearly labeled location][] from that [web page][].

### WAI-ARIA specifications {#wai-aria-specifications}

The _WAI ARIA Specifications_ group both the WAI ARIA W3C Recommendation and ARIA modules, namely:

- [Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria-1.1/)
- [WAI-ARIA Graphics Module 1.0](https://www.w3.org/TR/graphics-aria-1.0/)
- [Digital Publishing WAI-ARIA Module 1.0](https://www.w3.org/TR/dpub-aria-1.0/)

**Note:** depending on the type of content being evaluated, part of the specifications might be irrelevant and should be ignored.

### Web page (HTML) {#web-page-html}

An _HTML [web page](https://www.w3.org/TR/WCAG21/#dfn-web-page-s)_ is the set of all [fully active](https://html.spec.whatwg.org/#fully-active) [documents](https://dom.spec.whatwg.org/#concept-document) which share the same [top-level browsing context](https://html.spec.whatwg.org/#top-level-browsing-context).

**Note:** Nesting of browsing context mostly happens with `iframe` and `object`. Thus a web page will most of the time be a "top-level" document and all its `iframe` and `object` (recursively).

**Note:** [Web pages](https://www.w3.org/TR/WCAG21/#dfn-web-page-s) as defined by WCAG are not restricted to the HTML technology but can also include, _e.g._, PDF or DOCX documents.

**Note:** Although web pages as defined here are sets of [documents](https://dom.spec.whatwg.org/#concept-document) (and do not contain other kind of nodes), one can abusively write that any node is "in a web page" if it is a [shadow-including descendant](https://dom.spec.whatwg.org/#concept-shadow-including-descendant) of a [document](https://dom.spec.whatwg.org/#concept-document) that is part of that web page.

{% include_relative _versions.md %}

[abstract]: https://www.w3.org/TR/wai-aria-1.1/#isAbstract 'ARIA Definition for Abstract Roles'
[accessibility support base line]: https://www.w3.org/TR/WCAG-EM/#step1c 'Definition of accessibility support base line'
[accessibility tree]: https://www.w3.org/TR/accname-1.1/#dfn-accessibility-tree 'Definition of accessibility tree'
[accessible object]: https://www.w3.org/TR/accname-1.1/#dfn-accessible-object 'Definition of accessible object'
[activated]: https://html.spec.whatwg.org/#activation
[blocked event]: #blocked-event 'Definition of blocked event'
[body]: https://html.spec.whatwg.org/#dom-document-body
[changes in content]: #changes-in-content 'Definition of changes in content'
[clearly labeled location]: #clearly-labeled-location 'Definition of clearly labeled location'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[dispatched]: https://dom.spec.whatwg.org/#dispatching-events
[doc-biblioref]: https://www.w3.org/TR/dpub-aria-1.0/#doc-biblioref 'DPUB ARIA Definition of doc-biblioref'
[event target]: https://dom.spec.whatwg.org/#eventtarget
[event]: https://dom.spec.whatwg.org/#concept-event 'Definition of event'
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[explicit role]: #explicit-role 'Definition of Explicit Role'
[firing]: https://dom.spec.whatwg.org/#concept-event-fire 'Definition of event firing'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focus]: https://html.spec.whatwg.org/#focusable-area
[focusable]: #focusable 'Definition of Focusable'
[html document]: https://dom.spec.whatwg.org/#concept-document
[html element]: https://html.spec.whatwg.org/multipage/dom.html#htmlelement
[implicit role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[inheriting semantic]: #inheriting-semantic 'Definition of Inheriting Semantic Role'
[instrument]: #instrument-to-achieve-an-objective 'Definition of instrument to achieve an objective'
[keyboard event]: https://www.w3.org/TR/uievents/#events-keyboardevents
[keyboard events]: https://www.w3.org/TR/uievents/#events-keyboardevents
[legacy keyboard events]: https://www.w3.org/TR/uievents/#legacy-keyboardevent-events
[link]: https://www.w3.org/TR/wai-aria/#link 'ARIA Definition of the link Role'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as Decorative'
[mechanism]: https://www.w3.org/TR/WCAG21/#dfn-mechanism 'WCAG Definition of Mechanism'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[printable character]: #printable-characters 'Definition of printable characters'
[programmatically hidden]: #programmatically-hidden 'Definition of Programmatically Hidden'
[pure decoration]: https://www.w3.org/TR/WCAG21/#dfn-pure-decoration 'WCAG definition of Pure Decoration'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[same key events]: #same-key-events 'Definition of same key events'
[sc2.1.4]: https://www.w3.org/WAI/WCAG21/Understanding/character-key-shortcuts.html
[sc211]: https://www.w3.org/TR/WCAG21/#keyboard 'Success Criterion 2.1.1 Keyboard'
[sc412]: https://www.w3.org/TR/WCAG21/#name-role-value 'Success Criterion 4.1.2 Name, Role, Value'
[semantic role]: #semantic-role 'Definition of semantic role'
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[set of clearly labeled instruments]: #set-of-clearly-labeled-instruments 'Definition of set of clearly labeled instruments'
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[text alternative]: https://www.w3.org/TR/WCAG21/#dfn-text-alternative 'Definition of text alternative'
[url]: https://url.spec.whatwg.org/#concept-url
[valid modifier keys]: https://www.w3.org/TR/uievents-key/#keys-modifier 'Definition of modifier keys'
[viewport]: https://drafts.csswg.org/css2/visuren.html#viewport 'Definition of viewport'
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
[web page]: #web-page-html 'Definition of web page'
