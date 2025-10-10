---
title: "Link in context is descriptive"
permalink: /standards-guidelines/act/rules/5effbb/proposed/
ref: /standards-guidelines/act/rules/5effbb/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/5effbb/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> 5effbb</p>
  <p><strong>Date:</strong> Updated 7 October 2025</p>
  <p><strong>Authors:</strong> <a href="https://github.com/carlosapaduarte">Carlos Duarte</a>, <a href="https://github.com/marietrudelle">Marie Trudelle</a>, <a href="https://github.com/ramitgarg">Ramit Garg</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: 5effbb
  name: "Link in context is descriptive"
  rule_type: atomic
  original_file: link-in-context-descriptive-5effbb.md
  description: |
    This rule checks that the accessible name of a link together with its context describes its purpose.
  last_modified: 7 October 2025
  scs_tested:
    - handle: Link Purpose (In Context)
      num: 2.4.4
      level: A
---

## Applicability

This rule applies to any [inheriting semantic][] `link` for which all the following is true:

- the link is [included in the accessibility tree][]; and
- the link has a non-empty ("") [accessible name][].

## Expectation

The [accessible name][] of each target element together with its [programmatically determined link context][] describes the purpose of the link.

## Background

### Assumptions

- This rule assumes that the purpose of the link is not ambiguous to users in general when seen in context on the web page, which is the exception mentioned in success criteria [2.4.4 Link Purpose (In Context)][sc244] or [2.4.9 Link Purpose (Link only)][sc249]. If the link is ambiguous to users in general, users of assistive technologies are not at a disadvantage when viewing the link out of context.

- This rule assumes that all [semantic][semantic role] `link` elements are used as links. An element marked up as a link, but that does not behave as a link would not fail success criteria [2.4.4 Link Purpose (In Context)][sc244] or [2.4.9 Link Purpose (Link only)][sc249].

### Accessibility Support

- Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some [semantic][semantic role] `link` elements can fail this rule with some technology but users of other technologies would not experience any accessibility issue.

### Related rules

- [Link has non-empty accessible name](https://www.w3.org/WAI/standards-guidelines/act/rules/c487ae/)
- [Link is descriptive](https://www.w3.org/WAI/standards-guidelines/act/rules/aizyf1/)

### Other Resources

- [Understanding Success Criterion 2.4.4: Link Purpose (In Context)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html)
- [Understanding Success Criterion 2.4.9: Link Purpose (Link Only)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-link-only.html)
- [G91: Providing link text that describes the purpose of a link](https://www.w3.org/WAI/WCAG22/Techniques/general/G91)
- [H30: Providing link text that describes the purpose of a link for anchor elements](https://www.w3.org/WAI/WCAG22/Techniques/html/H30)
- [H24: Providing text alternatives for the area elements of image maps](https://www.w3.org/WAI/WCAG22/Techniques/html/H24)
- [G53: Identifying the purpose of a link using link text combined with the text of the enclosing sentence](https://www.w3.org/TR/2016/NOTE-WCAG20-TECHS-20161007/G53)
- [ARIA7: Using aria-labelledby for link purpose](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA7)
- [ARIA8: Using aria-label for link purpose](https://www.w3.org/WAI/WCAG22/Techniques/aria/ARIA8)
- [H77: Identifying the purpose of a link using link text combined with its enclosing list item](https://www.w3.org/WAI/WCAG22/Techniques/html/H77)
- [H78: Identifying the purpose of a link using link text combined with its enclosing paragraph](https://www.w3.org/WAI/WCAG22/Techniques/html/H78)
- [H79: Identifying the purpose of a link in a data table using the link text combined with its enclosing table cell and associated table header cells](https://www.w3.org/WAI/WCAG22/Techniques/html/H79)
- [H81: Identifying the purpose of a link in a nested list using link text combined with the parent list item under which the list is nested](https://www.w3.org/WAI/WCAG22/Techniques/html/H81)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>2.4.4 Link Purpose (In Context) (Level A)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG22/#link-purpose-in-context">Learn more about 2.4.4 Link Purpose (In Context)</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level A and higher.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
</ul>

### Secondary Requirements

This rule is related to the following accessibility requirements, but was 
not designed to test this requirements directly. These 
[secondary requirements](https://w3c.github.io/wcag-act/act-rules-format.html#secondary-requirements)
can either be stricter than the rule requires, or may be satisfied in ways 
not tested by the rule:

- [2.4.9 Link Purpose (Link Only) (Level AAA)](https://www.w3.org/TR/WCAG22/#link-purpose-link-only): This success criterion is **more strict** than this rule. This is because the rule also considers the context of the link, in addition to the link text. Some of the passed examples do not satisfy this success criterion.

## Input Aspects

The following aspects are required in using this rule.

- [Accessibility Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-accessibility)
- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)
- [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)
- [Language](https://www.w3.org/TR/act-rules-aspects/#input-aspects-text)

## Examples

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5effbb/c7661d61606728f898297f6e69f68af3d5b6c6d0.html">Open in a new tab</a>

The [accessible name][] (from the link's text) describes the purpose of the link.

```html
<a href="#desc">See the description of this product.</a>

<p id="desc">This product consists of several web pages.</p>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5effbb/9863e3ea603a1bdde28e5b94f8675579e33a16d7.html">Open in a new tab</a>

The [accessible name][] describes the purpose of the link.

```html
<a href="#main"><img src="/test-assets/5effbb/main.png" alt="Go to the main content"/></a>

<main>
	<p id="main">This is the main content.</p>
</main>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5effbb/771c36b9967faec9926af86041d834b4a108a52e.html">Open in a new tab</a>

The [accessible name][] (from the link's text), together with its [programmatically determined link context][] (available from the text in the closest `p` ancestor), describes the purpose of the link.

```html
<p>See the description of <a href="#desc">this product</a>.</p>

<p id="desc">This product consists of several web pages.</p>
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5effbb/2eb4856e68c4cf8b3ed55f7d34b08ad4ae8b3fdd.html">Open in a new tab</a>

The [accessible name][] (from the link's text) describes the purpose of the link.

```html
<span role="link" tabindex="0" onclick="document.location+='#desc'">See description of the product.</span>

<p id="desc">This product consists of several web pages.</p>
```

#### Passed Example 5

<a class="example-link" title="Passed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5effbb/b130285915a8ca42926a11553a5791f44b65d487.html">Open in a new tab</a>

The [programmatically determined link context][] (provided by the ancestor with a role of `listitem` and text "Ulysses") and the [accessible name][] (from the link's text) describe the purpose of the links.

```html
<ul>
	<li>
		Ulysses
		<ul>
			<li><a href="https://www.gutenberg.org/files/4300/4300-h/4300-h.htm"> HTML </a></li>
			<li>
				<a href="https://www.gutenberg.org/ebooks/4300.epub.images?session_id=04cd710372888de8d8d322215cdfe8ce5b0f8d73">
					EPUB
				</a>
			</li>
			<li><a href="https://www.gutenberg.org/files/4300/4300-0.txt"> Plain text </a></li>
		</ul>
	</li>
</ul>
```

#### Passed Example 6

<a class="example-link" title="Passed Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5effbb/a1e9ff296f0728e180aeb920beacb26bf88ddb12.html">Open in a new tab</a>

The [programmatically determined link context][] (provided by the table header [assigned](https://html.spec.whatwg.org/multipage/tables.html#algorithm-for-assigning-header-cells) to the cell containing the link) and the [accessible name][] (from the link's text) describe the purpose of the links.

```html
<table>
	<tr>
		<th colspan="3">Ulysses</th>
	</tr>
	<tr>
		<td><a href="https://www.gutenberg.org/files/4300/4300-h/4300-h.htm">HTML</a></td>
		<td>
			<a href="https://www.gutenberg.org/ebooks/4300.epub.images?session_id=04cd710372888de8d8d322215cdfe8ce5b0f8d73"
				>EPUB</a
			>
		</td>
		<td><a href="https://www.gutenberg.org/files/4300/4300-0.txt">Plain text</a></td>
	</tr>
</table>
```

#### Passed Example 7

<a class="example-link" title="Passed Example 7" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5effbb/474db50232349ade7714e41c88af801d1f1e378b.html">Open in a new tab</a>

The [accessible name][] describes the purpose of the link.

```html
<p id="instructions">Go to the main content.</p>
<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0">
	<a href="#main" aria-labelledby="instructions">
		<path
			style="fill:#1E201D;"
			d="M21.205,5.007c-0.429-0.444-1.143-0.444-1.587,0c-0.429,0.429-0.429,1.143,0,1.571l8.047,8.047H1.111
			C0.492,14.626,0,15.118,0,15.737c0,0.619,0.492,1.127,1.111,1.127h26.554l-8.047,8.032c-0.429,0.444-0.429,1.159,0,1.587
			c0.444,0.444,1.159,0.444,1.587,0l9.952-9.952c0.444-0.429,0.444-1.143,0-1.571L21.205,5.007z"
		/>
	</a>
</svg>

<main>
	<p id="main">This is the main content.</p>
</main>
```

#### Passed Example 8

<a class="example-link" title="Passed Example 8" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5effbb/e4f70ef2843c6239d0bebe46b97a682bd901e749.html">Open in a new tab</a>

The [programmatically determined link context][] (provided by the cell containing the link) and the [accessible name][] (from the link's text) describe the purpose of the links.

```html
<table>
	<tr>
		<td>
			Download Ulysses in
			<a href="https://www.gutenberg.org/files/4300/4300-h/4300-h.htm">HTML</a>
		</td>
		<td>
			Download Ulysses in
			<a href="https://www.gutenberg.org/ebooks/4300.epub.images?session_id=04cd710372888de8d8d322215cdfe8ce5b0f8d73"
				>EPUB</a
			>
		</td>
	</tr>
</table>
```

#### Passed Example 9

<a class="example-link" title="Passed Example 9" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5effbb/4e89fcc7903980482fe12350f864ca75963d6efd.html">Open in a new tab</a>

The [programmatically determined link context][] (provided by the element referenced by the `aria-describedby` attribute) and the [accessible name][] (from the link's text) describe the purpose of the links.

```html
<h2 id="rule">Button has accessible name</h2>
<ul>
	<li>
		<a href="https://www.w3.org/WAI/standards-guidelines/act/rules/97a4e1/#applicability" aria-describedby="rule"
			>Applicability</a
		>
	</li>
	<li>
		<a href="https://www.w3.org/WAI/standards-guidelines/act/rules/97a4e1/#expectation" aria-describedby="rule"
			>Expectation</a
		>
	</li>
</ul>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5effbb/b2a671d96ac510ccc6e34dd58a141d13bb196508.html">Open in a new tab</a>

The [accessible name][] (from the link's text), together with the absence of [programmatically determined link context][], does not describe the purpose of the link.

```html
<a href="#desc">More</a>

<p id="desc">This product consists of several web pages.</p>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5effbb/bf3ba787eb7a6819ea1a6adccdfd1f30842ed788.html">Open in a new tab</a>

The [accessible name][] (from the link's text), together with the absence of [programmatically determined link context][], does not describe the purpose of the link.

```html
<div role="link" tabindex="0" onclick="document.location+='#main'">More</div>

<main>
	<p id="main">This is the main content.</p>
</main>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5effbb/e6a7c924092d2351c3a5b4361ccde7917ad23c66.html">Open in a new tab</a>

The [accessible name][] (from the link's text), together with the absence of [programmatically determined link context][], does not describe the purpose of the link.

```html
<svg xmlns="http://www.w3.org/2000/svg" x="0" y="0">
	<a href="#main">
		<text x="20" y="20">
			Go
		</text>
	</a>
</svg>

<main>
	<p id="main">This is the main content.</p>
</main>
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5effbb/98f0638a038a244b0bde70ff316cde1be7ce9a3b.html">Open in a new tab</a>

The [accessible name][] (from the link's text) does not describe the purpose of the link. The other information available on the page is not [programmatically determined link context][] because it is in a different `p` element.

```html
<p>
	The W3C held a workshop on June 9-10, 2005 at DERI Innsbruck (Austria), to gather information about potential
	standardization work on Semantics in Web Services.
</p>

<p><a href="https://www.w3.org/2005/04/FSWS/workshop-report.html">Workshop</a></p>
```

#### Failed Example 5

<a class="example-link" title="Failed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5effbb/43730455b69439980b95151be477ca594e0d7556.html">Open in a new tab</a>

The [accessible name][] (from the link's text) does not describe the purpose of the link. The other information available on the page is not [programmatically determined link context][] because it is outside the list where the links are.

```html
<p style="font-weight: bold">Ulysses</p>
<ul>
	<li><a href="https://www.gutenberg.org/files/4300/4300-h/4300-h.htm"> HTML </a></li>
	<li>
		<a href="https://www.gutenberg.org/ebooks/4300.epub.images?session_id=04cd710372888de8d8d322215cdfe8ce5b0f8d73">
			EPUB
		</a>
	</li>
	<li><a href="https://www.gutenberg.org/files/4300/4300-0.txt"> Plain text </a></li>
</ul>
```

#### Failed Example 6

<a class="example-link" title="Failed Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5effbb/45d884e81c4ef8234cfbd85d259dd6a64685c9d2.html">Open in a new tab</a>

The [accessible name][] (from the link's text) does not describe the purpose of the link. The other information available on the page is not [programmatically determined link context][] because it not available on the same cell of the link or in a header cell for that cell.

```html
<table>
	<tr>
		<th colspan="3">Books</th>
	</tr>
	<tr>
		<td>Ulysses</td>
		<td><a href="https://www.gutenberg.org/files/4300/4300-h/4300-h.htm">Download</a></td>
		<td>1.61MB</td>
	</tr>
</table>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5effbb/e64416f9e9792cd76b77ee209a26269d47c3ff97.html">Open in a new tab</a>

An `a` element with its [semantic role][] changed from `link` to another role.

```html
<a href="https://www.w3.org/WAI" role="button">Web Accessibility Initiative (WAI)</a>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5effbb/afcf56e62d62b8f69b4a2881475f625a1ed7ecf9.html">Open in a new tab</a>

The `link` element is not [included in the accessibility tree][].

```html
<a href="https://www.w3.org/WAI" style="display: none;"
	><img src="/test-assets/5effbb/cart.svg" alt="Checkout" />Checkout</a
>
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/5effbb/ca563b842b32b8fc79ac872f8fc4e799fcf76072.html">Open in a new tab</a>

This `a` element is not a [semantic][semantic role] `link`, because it has no `href` attribute.

```html
<a>placeholder</a>
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

### Inheriting Semantic Role {#inheriting-semantic}

An element with an _inheriting semantic role_ of X is any element with a non-[abstract][] [semantic role][] that inherits from X, or is the same as X.

**Example**: An "inheriting semantic link" is any element that either has the [semantic role][] of [`link`][link] or a [semantic role][] that inherits from the [`link`][link] role, such as [doc-biblioref][].

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

### Programmatically Determined Link Context {#programmatically-determined-link-context}

The _programmatically determined context_ of a link (or _programmatically determined link context_) is the set of all elements that are [included in the accessibility tree][], and have one or more of the following relationships to the link:

- being an [ancestor][] of the link in the [flat tree][] with a [semantic role][] of `listitem`; or
- being the closest [ancestor][] of the link in the [flat tree][] that generates a [block container][]; or
- being the closest [ancestor][] of the link in the [flat tree][] that has a [semantic role][] of `cell` or `gridcell`; or
- being a header cell [assigned][] to the closest [ancestor][] of the link in the [flat tree][] that has a [semantic role][] of `cell` or `gridcell`; or
- being referenced by an `aria-describedby` attribute of the link.

This definition is based on (but not equivalent to) the [WCAG definition of programmatically determined link context](https://www.w3.org/TR/WCAG22/#dfn-programmatically-determined-link-context).

This definition assumes that the HTML document with the link is a document using HTML according to the specification.

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

### WAI-ARIA specifications {#wai-aria-specifications}

The _WAI ARIA Specifications_ group both the WAI ARIA W3C Recommendation and ARIA modules, namely:

- [Accessible Rich Internet Applications (WAI-ARIA) 1.2](https://www.w3.org/TR/wai-aria-1.2/)
- [WAI-ARIA Graphics Module 1.0](https://www.w3.org/TR/graphics-aria-1.0/)
- [Digital Publishing WAI-ARIA Module 1.0](https://www.w3.org/TR/dpub-aria-1.0/)

**Note:** depending on the type of content being evaluated, part of the specifications might be irrelevant and should be ignored.

[abstract]: https://www.w3.org/TR/wai-aria-1.2/#isAbstract 'ARIA Definition for Abstract Roles'
[accessibility support base line]: https://www.w3.org/TR/WCAG-EM/#step1c 'Definition of accessibility support base line'
[accessible name and description computation]: https://www.w3.org/TR/accname 'Accessible Name and Description Computation'
[accessible name]: #accessible-name 'Definition of Accessible Name'
[ancestor]: https://dom.spec.whatwg.org/#concept-tree-ancestor 'DOM, ancestor, 2021/11/29'
[assigned]: https://html.spec.whatwg.org/multipage/tables.html#algorithm-for-assigning-header-cells 'HTML, algorithm for assigning header cells, 2021/11/29'
[block container]: https://drafts.csswg.org/css-display/#block-container 'CSS Display Module Level 3, block container, 2022/01/17'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[doc-biblioref]: https://www.w3.org/TR/dpub-aria-1.0/#doc-biblioref 'DPUB ARIA Definition of doc-biblioref'
[earl10-schema]: https://www.w3.org/TR/act-rules-format-1.1/#biblio-earl10-schema
[examples of accessible name]: https://act-rules.github.io/pages/examples/accessible-name/
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[explicit role]: #explicit-role 'Definition of Explicit Role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS Scoping Module Level 1, flat tree, 2021/11/29'
[focusable]: #focusable 'Definition of Focusable'
[implicit role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[inheriting semantic]: #inheriting-semantic 'Definition of Inheriting Semantic Role'
[link]: https://www.w3.org/TR/wai-aria/#link 'ARIA Definition of the link Role'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as Decorative'
[outcome property]: https://www.w3.org/TR/EARL10-Schema/#outcome
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[programmatically determined link context]: #programmatically-determined-link-context 'Definition of Programmatically Determined Link Context'
[programmatically hidden]: #programmatically-hidden 'Definition of Programmatically Hidden'
[pure decoration]: https://www.w3.org/TR/WCAG22/#dfn-pure-decoration 'WCAG definition of Pure Decoration'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[sc244]: https://www.w3.org/TR/WCAG22/#link-purpose-in-context 'Success Criterion 2.4.4 Link Purpose (In Context)'
[sc249]: https://www.w3.org/TR/WCAG22/#link-purpose-link-only 'Success Criterion 2.4.9 Link Purpose (Link Only)'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[test subject]: https://www.w3.org/TR/act-rules-format-1.1/#test-subject
[test target]: https://www.w3.org/TR/act-rules-format/#test-target
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
