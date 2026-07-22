---
title: "Visible label is part of accessible name"
permalink: /standards-guidelines/act/rules/2ee8b8/proposed/
ref: /standards-guidelines/act/rules/2ee8b8/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/2ee8b8/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> 2ee8b8</p>
  <p><strong>Date:</strong> Updated 22 July 2026</p>
  <p><strong>Authors:</strong> <a href="https://github.com/annethyme">Anne Thyme Nørregaard</a>, <a href="https://github.com/brynanders">Bryn Anderson</a>, Dan Tripp, <a href="https://github.com/jkodu">Jey Nandakumar</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule conforms to <a href="https://www.w3.org/TR/act-rules-format-1.1/">ACT Rules Format 1.1</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: 2ee8b8
  name: "Visible label is part of accessible name"
  rule_type: atomic
  original_file: visible-label-in-accessible-name-2ee8b8.md
  description: |
    This rule checks that interactive elements labeled through content have their visible label as part of their accessible name.
  last_modified: 22 July 2026
  scs_tested:
    - handle: Label in Name
      num: 2.5.3
      level: A
---

## Applicability

This rule applies to any element for which all the following is true:

- The element has a [semantic role][] that is a [widget][widget role] that [supports name from content][]; and
- The element has [visible text content][]; and
- The element has an `aria-label` or `aria-labelledby` attribute; and
- Neither the element's accessible name nor its visible label contains any abbreviations; and
- Every word that appears in both the element's accessible name and its visible label uses the same spelling and hyphenation in both places.

## Expectation

For each target element, the [visible inner text][] is contained within the [accessible name][] according to the [label in name algorithm][].

## Background

This rule applies to elements with a [widget role][] that [support name from content][supports name from content]. This includes the following: `button`, `checkbox`, `gridcell`, `link`, `menuitem`, `menuitemcheckbox`, `menuitemradio`, `option`, `radio`, `searchbox`, `switch`, `tab`, `treeitem`.

The understanding document of [2.5.3 Label in Name][understand253] use the term "symbolic text characters" to refer to a type of [non-text content][] that uses text characters as symbols, such as using "x" to mean "close". This rule considers them as "characters expressing non-text content". Unicode emojis are another example of characters expressing non-text content, although these are not "symbolic text characters".

If the target element contains an [image of text](https://www.w3.org/TR/WCAG22/#label-in-name), it may pass this rule but fail [2.5.3 Label in Name][understand253] (because the accessible name should then match the text inside the image, which is not taken into account by this rule). So further testing is needed. This case might be handled by a different rule in the future.

### Assumptions

This rule assumes that the [visible inner text][] is equal to the [label as defined by WCAG](https://www.w3.org/wai/wcag22/understanding/label-in-name#dfn-label), even though "label" is not precisely defined at this point in history.

This rule assumes that the visible label isn't rearranged with CSS so that it appears to the user in a different order than it appears in the DOM.

This rule assumes that the visible label doesn't use CSS to add whitespace where none exists in the DOM.

This rule — specifically, the [label in name algorithm][] that this rule relies on — assumes that content within parentheses can be ignored ("Parentheses" are also known as "round brackets"). This is important because the algorithm's treatment of parentheses is to remove them and all characters within them. This assumption is almost always true in English.  Exceptions include links with names such "Dune (1984 film)" and "Dune (2021 film)". This assumption is known to be often false in languages other than English, such as German (where parentheses indicate dual states) and Arabic (where parentheses are often used as quotation marks). Violations of this assumption will, in real-world scenarios, more often result in a false negative for this rule rather than a false positive.

### Accessibility Support

Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some elements can have one of the applicable [semantic roles][semantic role] and fail this rule with some technology but users of other technologies would not experience any accessibility issue.

### Other Resources

- [Understanding Success Criterion 2.5.3: Label in Name][understand253]
- [G208: Including the text of the visible label as part of the accessible name](https://www.w3.org/WAI/WCAG22/Techniques/general/G208)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>2.5.3 Label in Name (Level A)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG22/#label-in-name">Learn more about 2.5.3 Label in Name</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.1 and later on level A and higher.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>G208: Including the text of the visible label as part of the accessible name</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG22/Techniques/general/G208">Learn more about technique G208</a></li>
      <li>Not required for conformance to any W3C accessibility recommendation.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: technique is not satisfied</li>
        <li>All <code>passed</code> outcomes: technique needs further testing</li>
        <li>An <code>inapplicable</code> outcome: technique needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
</ul>

## Input Aspects

The following aspects are required in using this rule.

- [Accessibility Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-accessibility)
- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)
- [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)

## Examples

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/326f6768ecbf60ca31149e65ab2853c138095fd7.html">Open in a new tab</a>

This link has [visible inner text][] that is equal to the [accessible name][].

```html
<a href="https://act-rules.github.io/" aria-label="ACT rules">ACT rules</a>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/02f6608c4242efccba3ceeb8b73cc6b1255e362d.html">Open in a new tab</a>

This link has [visible inner text][] that, ignoring whitespace, is equal to the [accessible name][].

```html
<a href="https://act-rules.github.io/" aria-label="  ACT   rules  ">ACT rules</a>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/d2e93952838fd20d2dc7ef7a430b8fe960bf3391.html">Open in a new tab</a>

This link has [visible inner text][] that, ignoring case, is equal to the [accessible name][].

```html
<a href="https://act-rules.github.io/" aria-label="act Rules">ACT rules</a>
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/f88ac89cc14d59302666047a0da91bbc51d27bb2.html">Open in a new tab</a>

This button has [visible inner text][] that is contained within the [accessible name][] according to the [label in name algorithm][].

```html
<button aria-label="Next Page in the list">Next Page</button>
```

#### Passed Example 5

<a class="example-link" title="Passed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/79af5d3e531aecd27961f0b9ed260d95f39440c0.html">Open in a new tab</a>

This button has [visible inner text][] that does not need to be contained within the [accessible name][], because the "X" text node is [non-text content][]; the [label in name algorithm][] therefore ignores it. Note: this would need to meet SC 1.1.1 Non text content.

```html
<button aria-label="anything">X</button>
```

#### Passed Example 6

<a class="example-link" title="Passed Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/efa9543339cdad5412c7719b266a633a29ce149e.html">Open in a new tab</a>

This `button` element has the text "search" rendered as a magnifying glass icon by the font. Because the text is rendered as [non-text content][], the text does not need to be contained within the [accessible name][]; and the [label in name algorithm][] ignores it.

```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
<style>
	button {
		font-family: 'Material Icons';
	}
</style>
<button aria-label="Find">search</button>
```

#### Passed Example 7

<a class="example-link" title="Passed Example 7" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/aa38d4aa8f070ed0d96a67dda33c040f965c24be.html">Open in a new tab</a>

This button has [visible inner text][] that, according to the [label in name algorithm][], is contained within the [accessible name][]. This example shows why the [label in name algorithm][] uses the [visible inner text][] and not the [visible text content][]: the `<p>` tags insert whitespace into the result in the former but not the latter.

```html
<button aria-label="Hello world">
	<p>Hello</p>
	<p>world</p>
</button>
```

#### Passed Example 8

<a class="example-link" title="Passed Example 8" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/537a6e1314457e7f38f7a63e961da308d976df78.html">Open in a new tab</a>

Similar to the previous example, this link has [visible inner text][] that, according to the [label in name algorithm][], is contained within the [accessible name][]. This example shows why the [label in name algorithm][] uses the [visible inner text][] and not the [visible text content][]: the `<h6>` tags insert whitespace into the result in the former but not the latter.

```html
<a href="#" aria-label="Some article by John Doe">
	<h6>Some article</h6>
	<p>by John Doe</p>
</a>
```

#### Passed Example 9

<a class="example-link" title="Passed Example 9" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/5fccc3aa980834bf0889dbd79fba656eeb208fe4.html">Open in a new tab</a>

The [visible inner text][] of this link is "ACT" (with no spaces) because of the explicit styles of `display: inline` on the `div` elements and the absence of whitespace between them. The cases of `display: inline` and `display: block` are handled by the definition of [visible inner text of an element][]. This example shows that the definition agrees with the visual rendering done by the browser.

```html
<a href="#" aria-label="ACT">
	<div style="display: inline">A</div><div style="display: inline">C</div><div style="display: inline">T</div>
</a>
```

#### Passed Example 10

<a class="example-link" title="Passed Example 10" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/6b4b31eda2d3dc72d5b5d7dc18f594336ce3de7d.html">Open in a new tab</a>

The [visible inner text][] is "Download specification". The words "the" and "gizmo" aren't part of it.

```html
<a aria-label="Download specification" href="#"
	>Download <span style="visibility: hidden">the</span> <span style="display: none">gizmo</span> specification</a
>
```

#### Passed Example 11

<a class="example-link" title="Passed Example 11" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/fab659b02c1edb4f2c8f0bda524b1076abab7df6.html">Open in a new tab</a>

The [visible inner text][] is "Download specification", which includes a space character between the two words due to the [definition of Visible inner text of a text node for text which is visible whitespace][].

```html
<a aria-label="Download specification" href="#"
	><span>Download</span><span id="space"> </span><span>specification</span></a
>
```

#### Passed Example 12

<a class="example-link" title="Passed Example 12" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/2c5fa101415fbeeb8802044427d3f8762a63f1b1.html">Open in a new tab</a>

This example shows that the [visible inner text][] isn't always the same as the [`innerText` IDL attribute](https://html.spec.whatwg.org/multipage/dom.html#the-innertext-idl-attribute). The visible inner text is "Download specification". The `innerText` is `Download \ngizmo\nspecification`. This rule uses the visible inner text — not innerText.

```html
<style>
	.visually-hidden {
		clip-path: inset(50%);
		height: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}
</style>
<a aria-label="Download specification" href="#">Download <span class="visually-hidden">gizmo</span> specification</a>
```

#### Passed Example 13

<a class="example-link" title="Passed Example 13" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/567f59f87c0a01a4446019cc77b1fd40b1fd649e.html">Open in a new tab</a>

This example shows that the [label in name algorithm][] handles many kinds of whitespace.

```html
<a aria-label="compose email" href="#">
	compose &nbsp;&nbsp;<br />
	email
</a>
```

#### Passed Example 14

<a class="example-link" title="Passed Example 14" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/94a7ce7aea9dbfaa375c459c26d3a5923de84e7a.html">Open in a new tab</a>

This example passes the rule because "YYYY-MM-DD" is in round brackets. Text in round brackets is removed by the [label in name algorithm][], because it is not normally spoken by speech-input users.

```html
<button aria-label="Search by date">Search by date (YYYY-MM-DD)</button>
```

#### Passed Example 15

<a class="example-link" title="Passed Example 15" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/c9b81bf076633f3d7c2c52b75e11ca89f921bf29.html">Open in a new tab</a>

This passes for two reasons: 1) because the ellipsis ("…") is [non-text content][], and 2) because the ellipsis is neither a letter nor a digit and so is filtered out by the [label in name algorithm][].

```html
<button aria-label="Next">Next…</button>
```

#### Passed Example 16

<a class="example-link" title="Passed Example 16" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/710e48ef6593478abfd4a367b0b3668c5f410092.html">Open in a new tab</a>

This passes because the [label in name algorithm][] effectively ignores all punctuation and emoji, in both the visible inner text and the accessible name, as long as they don't break up words.

```html
<button aria-label="💡 Submit 💡">&gt;&gt;&gt; ** Submit ** &lt;&lt;&lt;</button>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/4ee91039726503da19c9bc58e08e800464d94d82.html">Open in a new tab</a>

This link has [visible inner text][] that is very different from the [accessible name][].

```html
<a href="https://act-rules.github.io/" aria-label="WCAG">ACT rules</a>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/8db20b5fa0a59906a7b182c5698d6a9ce7e85f10.html">Open in a new tab</a>

This button has [visible inner text][] that is only partially contained within the [accessible name][].

```html
<button aria-label="the full">The full label</button>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/e117393d6711d6bdf32821005219c9d9474dfeb8.html">Open in a new tab</a>

This button has [visible inner text][] that is fully contained within the [accessible name][] when viewed as a character-by-character substring. But that does not satisfy the [label in name algorithm][], which works on full words. So this fails the rule.

```html
<a href="#" aria-label="Discover Italy">Discover It</a>
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/b6d8143aab885efb58369d4b86b2e32be5a66cfb.html">Open in a new tab</a>

This link's [accessible name][] contains two tokens (according to the[label in name algorithm][]) and the [visible inner text][] contains one token. So it fails the rule.

```html
<a aria-label="just ice" href="#">justice</a>
```

#### Failed Example 5

<a class="example-link" title="Failed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/2d84f4a814eeb0765868126ab9ff8ce678101e01.html">Open in a new tab</a>

The rule has no special handling for acronyms or initialisms.

```html
<a aria-label="WCAG" href="#">W C A G</a>
```

#### Failed Example 6

<a class="example-link" title="Failed Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/20a5e321fc6a5cb2bfcd520acb8cda21e6925254.html">Open in a new tab</a>

This link has [visible inner text][] with mathematical symbols and is not contained within the [accessible name][] because the mathematical symbols are represented as English words (not digits) in the accessible name. This is [explicitly mentioned in WCAG](https://www.w3.org/WAI/WCAG22/Understanding/label-in-name#mathematical-expressions-and-formulae).

```html
<a href="/" aria-label="Proof of two multiplied by two is four">Proof of 2&times;2=4</a>
```

#### Failed Example 7

<a class="example-link" title="Failed Example 7" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/717b92a7cf27de3490f81971e714dfb39a1656a5.html">Open in a new tab</a>

This rule has no special handling for converting mathematical symbols into words, or vice versa.

```html
<button aria-label="11 times 3 equals 33">11×3=33</button>
```

#### Failed Example 8

<a class="example-link" title="Failed Example 8" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/76f13f1f281ce75a9ec30edf1729462ac3e0ac57.html">Open in a new tab</a>

This button's accessible name contains the same tokens that are in the visible label. But they aren't in the same order, so it fails the [contiguous subsequence][] check part of the [label in name algorithm][], and so it fails the rule.

```html
<button aria-label="how are you"><span>you</span><span>how</span><span>are</span></button>
```

#### Failed Example 9

<a class="example-link" title="Failed Example 9" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/9bc0a53c1621afedb8621a4c36c01c9a5e809ea3.html">Open in a new tab</a>

This button's accessible name contains the word "the" in the middle of it, which causes the [contiguous subsequence][] check of the [label in name algorithm][] (in particular: the "contiguous" requirement) to fail. So it fails the rule.

```html
<button aria-label="Download the specification">Download specification</button>
```

#### Failed Example 10

<a class="example-link" title="Failed Example 10" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/48561a6e709e2f866c9d365f930c7055d620549f.html">Open in a new tab</a>

This link's accessible name contains the same digits that are in the visible label, and in the same order. But they have different spaces and punctuation between them, so they are considered separate tokens. So this fails the rule.

```html
<a aria-label="1 2 3. 5 5 5. 0 1 2 3" href="tel:1235550123">123.555.0123</a>
```

#### Failed Example 11

<a class="example-link" title="Failed Example 11" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/d2054fb7aaf3f6f34ec2b146add8e3cfce3409ff.html">Open in a new tab</a>

This rule has no special handling which tries to guess when numbers have the same semantic meaning. It operates on tokens only.

```html
<a href="#2021" aria-label="20 21">2021</a>
```

#### Failed Example 12

<a class="example-link" title="Failed Example 12" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/8303bfbcf99b4b105928ee3ccd2bb90225cd5361.html">Open in a new tab</a>

This rule has no special handling which tries to guess when numbers have the same semantic meaning. It operates on tokens only.

```html
<a href="#" aria-label="fibonacci: 0 1 1 2 3 5 8 13 21 34">fibonacci: 0112358132134</a>
```

#### Failed Example 13

<a class="example-link" title="Failed Example 13" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/f57e78e77994e7a47ed101960089dacefd0786be.html">Open in a new tab</a>

This rule has no special handling for converting digits into words, or vice versa.

```html
<a href="#2021" aria-label="twenty twenty-one">two thousand twenty-one</a>
```

#### Failed Example 14

<a class="example-link" title="Failed Example 14" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/dd8d7419bca332d96b15ca14b9ba46e5233ab676.html">Open in a new tab</a>

This rule has no special handling for converting digits into words, or vice versa.

```html
<a aria-label="two zero two three" href="#">2 0 2 3</a>
```

#### Failed Example 15

<a class="example-link" title="Failed Example 15" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/f5c9811c984987443476760a1c5b91b1067f7e19.html">Open in a new tab</a>

The [label in name algorithm][] works on full words. That is: it requires that each full word in the visible label ("1" in this case) is equal to a full word in the accessible name ("1a" in this case). Those two words - "1" and "1a" - are not equal, so this element fails the rule.

```html
<a aria-label="1a" href="#">1</a>
```

#### Failed Example 16

<a class="example-link" title="Failed Example 16" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/40838e577307be46e8de7e090faf04da7787f8b0.html">Open in a new tab</a>

The definition of [visible inner text][] doesn't treat text any differently if it's excluded from the accessibility tree with aria-hidden. So this rule effectively ignores aria-hidden. So this element fails the rule.

```html
<a aria-label="Download specification" href="#">Download <span aria-hidden="true">gizmo</span> specification</a>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/cf98c9678e70f160afcd5af246c0070550ad7398.html">Open in a new tab</a>

This `nav` is not a widget, so the [visible inner text][] does not need to match the [accessible name][].

```html
<nav aria-label="main nav">W3C navigation</nav>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/87e3c42fdc98d63d89a6a0d984f44f00adf02015.html">Open in a new tab</a>

This email text field has a role of `textbox` which does not [support name from content][supports name from content]; so it does not need to have its [visible inner text][] match the [accessible name][]. The content of a text field shows its value instead of its label. The label is usually adjacent to the text field instead.

```html
<div>E-mail</div>
<input type="email" aria-label="E-mail" value="Contact" />
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/f02ba15667ff1b80a269e5ce66f152e93396c029.html">Open in a new tab</a>

This `div` element does not have a widget role, so the [visible inner text][] does not need to match the [accessible name][].

```html
<div role="tooltip" aria-label="OK">Next</div>
```

#### Inapplicable Example 4

<a class="example-link" title="Inapplicable Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/8c26a3506e424766019341f3b86d2f758ca1aced.html">Open in a new tab</a>

This link has no [visible text content][].

```html
<a href="https://w3.org" aria-label="W3C homepage">
	<img src="/test-assets/shared/w3c-logo.png" alt="w3c logo" />
</a>
```

#### Inapplicable Example 5

<a class="example-link" title="Inapplicable Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/4c8c38022d15c92158ecaaa647fe8ca2c330f485.html">Open in a new tab</a>

This link's label contains an abbreviation, so it is not applicable.

```html
<a aria-label="University Avenue" href="#">University Ave.</a>
```

#### Inapplicable Example 6

<a class="example-link" title="Inapplicable Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/2ee8b8/e9bbdbec137223e2973c6d2896050770c84c26e5.html">Open in a new tab</a>

This word - non-standard / nonstandard - appears in both the element's accessible name and its visible label, using different hyphenation. So it's not applicable.

```html
<a href="#" aria-label="non-standard">nonstandard</a>
```

## Glossary

### Accessible Name {#accessible-name}

The _accessible name_ is the programmatically determined name of a user interface element that is [included in the accessibility tree](#included-in-the-accessibility-tree).

The accessible name is calculated using the [accessible name and description computation][].

For native markup languages, such as HTML and SVG, additional information on how to calculate the accessible name can be found in [HTML Accessibility API Mappings 1.0, Accessible Name and Description Computation (working draft)](https://www.w3.org/TR/html-aam/#accessible-name-and-description-computation) and [SVG Accessibility API Mappings, Name and Description (working draft)](https://www.w3.org/TR/svg-aam/#mapping_additional).

For more details, see [examples of accessible name][].

**Note:** As per the [accessible name and description computation][], each element always has an accessible name. When no accessible name is provided, the element will nonetheless be assigned an empty (`""`) one.

**Note:** As per the [accessible name and description computation][], accessible names are [flat string](https://www.w3.org/TR/accname-1.1/#terminology) trimmed of leading and trailing whitespace. Notably, it is not possible for a non-empty accessible name to be composed only of whitespace since these must be trimmed.

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

### Label in Name Algorithm {#label-in-name-algorithm}

To check whether an [element][] has <dfn>its label contained in its name</dfn>, follow this algorithm:

Let `label` be the [visible inner text][] of the target element.  Let `name` be the [accessible name][] of the target element.  Both `label` and `name` are strings.

Sub-algorithm to tokenize a string:

1. Remove parentheses (U+0028 LEFT PARENTHESIS and U+0029 RIGHT PARENTHESIS, known colloquially as round brackets) and all characters that are between a left and right parenthesis.
    - Don't do this for other kind of brackets such as square brackets and curly brackets.
1. Do Unicode [case folding][] on the string then convert it to [normalization form KD][].
1. For each character that either a) represents non-text content, or b) isn't a letter or a digit: replace that character with a space character.
    - For a) Determination of what "non-text" is often requires a judgment call.  Non-text includes, but is not limited to, emoji, and the use of the letter 'X' as a symbol which means 'close this modal dialog'.
    - For b) Use the [Unicode general categories "L" (Letter) and "N" (Number)][https://www.unicode.org/versions/Unicode17.0.0/core-spec/chapter-4/#G134153].  (This will exclude hyphens, punctuation, emoji, and more.)
1. Split the string into a list of strings, one string per word, according to the word segmentation rules for the [language of the element][https://html.spec.whatwg.org/multipage/dom.html#language].
    - This 'split' operation must:
        - Effectively remove leading and trailing [whitespace][].
        - If the input string contains nothing but [whitespace][] before this operation: return an empty list.
    - In English and most other European languages, a greedy [whitespace][] regular expression will accomplish this. In languages such as Thai, Chinese, and Japanese, it won't.
    - A consequence of using the ACT definition of [whitespace][] here is that all kinds of whitespace are covered. That includes the Unicode code point U+00A0 NO-BREAK SPACE (NBSP), which can be represented by the HTML named character reference `&nbsp;`.

Then do the check: is the tokenized `label` a contiguous subsequence of the tokenized `name`?
- This "<dfn id="label-in-name-algorithm:contiguous-subsequence">contiguous subsequence</dfn>" check has these properties:
    - Each string comparison (between a list element in the tokenized label and a list element in the tokenized name) is a simple string equality check.
    - The "contiguous" aspect means that it's crucial that the elements are consecutive in the original list. Put another way: a contiguous subsequence of X can be obtained by removing any number of tokens from the start and/or end (but not the middle) of X. For example: ["A", "B", "C"] is a contiguous subsequence of ["A", "B", "C", "D"]; but ["A", "B", "D"] is not.
    - An empty list is a contiguous subsequence of any list.

If the answer is "yes" (that is: the tokenized 'label' is a contiguous subsequence of the tokenized 'name'), then this algorithm returns "is contained".  Otherwise, it returns "is not contained".

### Marked as decorative {#marked-as-decorative}

An element is _marked as decorative_ if one or more of the following conditions is true:

- it has an [explicit role][] of `none` or `presentation`; or
- it is an `img` element with an `alt` attribute whose value is the empty string (`alt=""`), and with no [explicit role][].

Elements are marked as decorative as a way to convey the intention of the author that they are [pure decoration][]. It is different from the element actually being [pure decoration][] as authors may make mistakes. It is different from the element being effectively ignored by assistive technologies as rules such as [presentational roles conflict resolution][] may overwrite this intention.

Elements can also be ignored by assistive technologies if they are [programmatically hidden][]. This is different from marking the element as decorative and does not convey the same intention. Notably, being [programmatically hidden][] may change as users interact with the page (showing and hiding elements) while being marked as decorative should stay the same through all states of the page.

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

### Visible {#visible}

Content perceivable through sight.

Content is considered _visible_ if making it fully transparent would result in a difference in the pixels rendered for any part of the document that is currently within the viewport or can be brought into the viewport via scrolling.

[Content is defined in WCAG](https://www.w3.org/TR/WCAG22/#dfn-content).

For more details, see [examples of visible](https://www.w3.org/WAI/standards-guidelines/act/rules/terms/visible/examples/).

### Visible Inner Text {#visible-inner-text}

The "visible inner text" defined here is similar to, but not the same as, [visible text content][] and [innerText](https://html.spec.whatwg.org/multipage/dom.html#the-innertext-idl-attribute).

The <dfn>visible inner text of a node</dfn> depends on the kind of node. 

The <dfn id="visible-inner-text:for-text">visible inner text of a [text node][]</dfn> is:
1.   if the [text node][] is [visible][], its visible inner text is its [data][] with whitespace normalized by replacing contiguous [whitespace][] with `" "` (U+0020 SPACE);
1.   <dfn id="visible-inner-text:for-text-whitespace">if the [text node][] is not [visible][], is [rendered][], and contains only [whitespace][], its visible inner text is `" "` (U+0020 SPACE);</dfn>
1.   otherwise, the visible inner text of the [text node][] is `""` (the empty string).


The <dfn id="visible-inner-text:for-element">visible inner text of an [element][]</dfn> is:
1.   if the [element][] is not [rendered][], its visible inner text is `""` (the empty string);
1.   if the [element][] is [rendered][] and not [visible][] and has a [bounding box][] which has width greater than 0, its visible inner text is `" "` (U+0020 SPACE);
1.   if the [element][] is [rendered][] and not [visible][] and has a [bounding box][] which has width of 0, its visible inner text is `""` (the empty string);
1.   if the [element][] is a [`<br>`][<br>] element, its visible inner text is `"\n"` (U+000A END OF LINE).
1.   if the [computed][] [`display`][display] property of the [element][] has an [outer display type][] of `block`, or an [inner display type][] of `table-caption`, the visible inner text of the [element][] is the concatenation of `"\n"` (U+000A END OF LINE) plus the visible inner text of its children (in [tree order][] in the [flat tree][]) plus another `"\n"` (U+000A END OF LINE);
1.   if the [computed][] [`display`][display] property of the [element][] has an [inner display type][] of `table-cell` or `table-row`, the visible inner text of the [element][] is the concatenation of `" "` (U+0020 SPACE) plus the visible inner text of its children (in [tree order][] in the [flat tree][]) plus another `" "` (U+0020 SPACE);
1.   otherwise, the visible inner text of the [element][] is the concatenation of the visible inner text of its children (in [tree order][] in the [flat tree][]).


The <dfn>visible inner text</dfn> of any other node is the concatenation of the visible inner text of its children (in [tree order][] in the [flat tree][]).

### Visible Text Content {#visible-text-content}

The _visible text content_ of an [element][] is a set of all [visible][] [text nodes][] that are [descendants][] in the [flat tree][] of this element.  (This is similar to, but not the same as, [visible inner text][].)

### WAI-ARIA specifications {#wai-aria-specifications}

The _WAI ARIA Specifications_ group both the WAI ARIA W3C Recommendation and ARIA modules, namely:

- [Accessible Rich Internet Applications (WAI-ARIA) 1.2](https://www.w3.org/TR/wai-aria-1.2/)
- [WAI-ARIA Graphics Module 1.0](https://www.w3.org/TR/graphics-aria-1.0/)
- [Digital Publishing WAI-ARIA Module 1.0](https://www.w3.org/TR/dpub-aria-1.0/)

**Note:** depending on the type of content being evaluated, part of the specifications might be irrelevant and should be ignored.

### Whitespace {#whitespace}

_Whitespace_ are characters that have the Unicode "White_Space" property in the [Unicode properties list](https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt).

This includes:

- all characters in the [Unicode Separator categories](https://www.unicode.org/versions/Unicode11.0.0/ch04.pdf#G134153), and
- the following characters in the [Other, Control](https://www.unicode.org/versions/Unicode11.0.0/ch04.pdf#G134153) category:

  - Character tabulation (U+0009)
  - Line Feed (LF) (U+000A)
  - Line Tabulation (U+000B)
  - Form Feed (FF) (U+000C)
  - Carriage Return (CR) (U+000D)
  - Next Line (NEL) (U+0085)

[<br>]: https://html.spec.whatwg.org/#the-br-element
[accessibility support base line]: https://www.w3.org/TR/WCAG-EM/#step1c 'Definition of accessibility support base line'
[accessible name and description computation]: https://www.w3.org/TR/accname 'Accessible Name and Description Computation'
[accessible name]: #accessible-name 'Definition of accessible name'
[bounding box]: https://www.w3.org/TR/css-ui-3/#valdef-box-sizing-border-box
[case folding]: https://www.w3.org/TR/charmod-norm/#dfn-case-folding
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[contiguous subsequence]: #label-in-name-algorithm:contiguous-subsequence 'Definition of contiguous subsequence'
[data]: https://dom.spec.whatwg.org/#concept-cd-data
[definition of visible inner text of a text node for text which is visible whitespace]: #visible-inner-text:for-text-whitespace 'definition of Visible inner text of a text node for text which is visible whitespace'
[descendants]: https://dom.spec.whatwg.org/#concept-tree-descendant 'DOM tree descendant, 2020/08/18'
[display]: https://drafts.csswg.org/css2/#propdef-display
[earl10-schema]: https://www.w3.org/TR/act-rules-format-1.1/#biblio-earl10-schema
[element]: https://dom.spec.whatwg.org/#element
[examples of accessible name]: https://www.w3.org/WAI/standards-guidelines/act/rules/terms/accessible-name/examples/
[examples of included in the accessibility tree]: https://www.w3.org/WAI/standards-guidelines/act/rules/terms/included-in-the-accessibility-tree/examples/
[explicit role]: #explicit-role 'Definition of Explicit Role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focusable]: #focusable 'Definition of Focusable'
[implicit role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[inner display type]: https://drafts.csswg.org/css-display/#inner-display-type
[label in name algorithm]: #label-in-name-algorithm 'Definition of Label in Name Algorithm'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as Decorative'
[non-text content]: https://www.w3.org/TR/WCAG22/#dfn-non-text-content 'WCAG Definition of Non-text content'
[normalization form kd]: https://www.unicode.org/glossary/#normalization_form_kd
[outcome property]: https://www.w3.org/TR/EARL10-Schema/#outcome
[outer display type]: https://drafts.csswg.org/css-display/#outer-display-type
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[programmatically hidden]: #programmatically-hidden 'Definition of Programmatically Hidden'
[pure decoration]: https://www.w3.org/TR/WCAG22/#dfn-pure-decoration 'WCAG definition of Pure Decoration'
[rendered]: https://html.spec.whatwg.org/#being-rendered
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[semantic role]: #semantic-role 'Definition of Semantic role'
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[supports name from content]: https://www.w3.org/TR/wai-aria-1.2/#namefromcontent 'Definition of Supports name from content'
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[test subject]: https://www.w3.org/TR/act-rules-format-1.1/#test-subject
[test target]: https://www.w3.org/TR/act-rules-format/#test-target
[text node]: https://dom.spec.whatwg.org/#text
[text nodes]: https://dom.spec.whatwg.org/#text 'DOM text, 2020/08/18'
[tree order]: https://dom.spec.whatwg.org/#concept-tree-order
[understand253]: https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html
[visible inner text of an element]: #visible-inner-text:for-element 'Definition of Visible inner text of an element'
[visible inner text]: #visible-inner-text 'Definition of Visible inner text'
[visible text content]: #visible-text-content 'Definition of Visible text content'
[visible]: #visible
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
[whitespace]: #whitespace 'Definition of whitespace'
[widget role]: https://www.w3.org/TR/wai-aria-1.2/#widget_roles 'Definition of Widget role'
