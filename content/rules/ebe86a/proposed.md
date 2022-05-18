---
title: "Focusable element has no keyboard trap via non-standard navigation"
permalink: /standards-guidelines/act/rules/ebe86a/proposed/
ref: /standards-guidelines/act/rules/ebe86a/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/ebe86a/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> ebe86a</p>
  <p><strong>Date:</strong> Updated 18 May 2022</p>
  <p><strong>Authors:</strong> <a href="https://github.com/annethyme">Anne Thyme Nørregaard</a>, <a href="https://github.com/carlosapaduarte">Carlos Duarte</a>, <a href="https://github.com/DagfinnRomen">Dagfinn Rømen</a>, <a href="https://github.com/geirsf">Geir Sindre Fossøy</a>, <a href="https: //github.com/MaliinO">Malin Øvrebø</a>, <a href="https://github.com/nitedog">Shadi Abou-Zahra</a>, <a href="https://github.com/skotkjerra">Stein Erik Skotkjerra</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: ebe86a
  name: "Focusable element has no keyboard trap via non-standard navigation"
  rule_type: atomic
  description: |
    This rule checks if it is possible to use non-standard keyboard navigation to navigate through content where focus is trapped when using standard ways of keyboard navigation.
  last_modified: 18 May 2022
---

## Applicability

This rule applies to any [HTML or SVG element][] that is [focusable](#focusable) where focus cannot cycle to the browser UI by using [standard keyboard navigation](#standard-keyboard-navigation).

## Expectation 1

For each target element help information is [visible](#visible) and [included in the accessibility tree](#included-in-the-accessibility-tree) or can be accessed from within the keyboard trap.

**Note:** As per WCAG 2.0 Success Criterion 2.1.1 Keyboard the help information should be accessible through a keyboard interface.

## Expectation 2

The help information explains how to cycle to the browser UI, or on how to get to a point from where it is possible to cycle to the browser UI, using [standard keyboard navigation](#standard-keyboard-navigation).

## Expectation 3

For each target element focus can cycle to the browser UI by using the method advised in the help information.

**Note:** Cycling back to the browser UI can be done both by moving forward through the tab order and by moving backwards. It is not possible to fulfill this expectation by using browser specific shortcuts to return to the browser UI.

## Assumptions

- It is not possible to use unmodified arrow or tab keys, or other standard exit methods to move focus away.
- The focus order in keyboard navigation is cyclical, not linear, meaning that the focus order will cycle to the first/last element when it moves away from the last/first element.

## Accessibility Support

There are no major accessibility support issues known for this rule.

## Background

### Bibliography

- [Understanding Success Criterion 2.1.2: No Keyboard Trap](https://www.w3.org/WAI/WCAG21/Understanding/no-keyboard-trap.html)
- [G21: Ensuring that users are not trapped in content](https://www.w3.org/WAI/WCAG21/Techniques/general/G21)
- [F10: Failure of Success Criterion 2.1.2 and Conformance Requirement 5 due to combining multiple content formats in a way that traps users inside one format type](https://www.w3.org/WAI/WCAG21/Techniques/failures/F10)

## Accessibility Requirements Mapping

This rule is not required for conformance.

## Input Aspects

The following aspects are required in using this rule.

- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)
- [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)

## Test Cases

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/ebe86a/ab24c77ed9daefc8fa1650aedf0d1c6438460243.html">Open in a new tab</a>

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

#### Passed Example 2

<a class="example-link" title="Passed Example 2" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/ebe86a/e3902f01b8589702925be6d97f9542895ef3c76d.html">Open in a new tab</a>

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

#### Passed Example 3

<a class="example-link" title="Passed Example 3" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/ebe86a/b92b5214d2b2214b89fb9812b389536759701790.html">Open in a new tab</a>

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

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/ebe86a/7dcc4ae00712889d448ecbcba200e032dca59bf0.html">Open in a new tab</a>

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

#### Failed Example 2

<a class="example-link" title="Failed Example 2" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/ebe86a/8fba3918b361f251dab4c19bec8eddc5624218ee.html">Open in a new tab</a>

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

#### Failed Example 3

<a class="example-link" title="Failed Example 3" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/ebe86a/62fd24e73ea55f55ad45de392128a816a6f03526.html">Open in a new tab</a>

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

<a class="example-link" title="Inapplicable Example 1" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/ebe86a/b20beca9dd7d487092cafcabce8c2b194896bc47.html">Open in a new tab</a>

This focusable `button` elements do not create a keyboard trap.

```html
<a id="link1" href="#">Link 1</a>
<button id="btn1">Button 1</button>
<button id="btn2">Button 2</button>
<a id="link2" href="#">Link 2</a>
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

### Included in the accessibility tree {#included-in-the-accessibility-tree}

Elements included in the accessibility tree of platform specific accessibility APIs are exposed to assistive technologies. This allows users of assistive technology to access the elements in a way that meets the requirements of the individual user.

The general rules for when elements are included in the accessibility tree are defined in the [core accessibility API mappings](https://www.w3.org/TR/core-aam/). For native markup languages, such as HTML and SVG, additional rules for when elements are included in the accessibility tree can be found in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/) and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/).

For more details, see [examples of included in the accessibility tree][].

[Programmatically hidden](#programmatically-hidden) elements are removed from the accessibility tree. However, some browsers will leave [focusable](#focusable) elements with an `aria-hidden` attribute set to `true` in the accessibility tree. Because they are hidden, these elements are considered **not** included in the accessibility tree. This may cause confusion for users of assistive technologies because they may still be able to interact with these focusable elements using sequential keyboard navigation, even though the element should not be included in the accessibility tree.

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

### Programmatically Hidden {#programmatically-hidden}

An HTML element is _programmatically hidden_ if either it has a [computed][] CSS property `visibility` whose value is not `visible`; or at least one of the following is true for any of its [inclusive ancestors][] in the [flat tree][]:

- has a [computed][] CSS property `display` of `none`; or
- has an `aria-hidden` attribute set to `true`

**Note**: Contrarily to the other conditions, the `visibility` CSS property may be reverted by descendants.

**Note**: The [HTML standard suggests](https://html.spec.whatwg.org/multipage/rendering.html#hidden-elements) rendering elements with the `hidden` attribute with a CSS rule that applies the value `none` to the CSS property `display` of the element. Although the suggestion is not normative, known user agents render it according to the suggestion (unless the content specifies another CSS rule that sets the value of the `display` property). If a user agent does not follow the suggestion, this definition may produce incorrect results for this user agent.

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

### Visible {#visible}

Content perceivable through sight.

Content is considered _visible_ if making it fully transparent would result in a difference in the pixels rendered for any part of the document that is currently within the viewport or can be brought into the viewport via scrolling.

[Content is defined in WCAG](https://www.w3.org/TR/WCAG21/#dfn-content).

For more details, see [examples of visible](https://act-rules.github.io/pages/examples/visible/).

{% include_relative _implementation-proposed.md %}

## Changelog

This is the first version of this ACT rule.

[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focusable]: #focusable 'Definition of focusable'
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[html or svg element]: #namespaced-element
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
