---
title: "Links with identical accessible names have equivalent purpose"
permalink: /standards-guidelines/act/rules/b20e66/proposed/
ref: /standards-guidelines/act/rules/b20e66/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/b20e66/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> b20e66</p>
  <p><strong>Date:</strong> Updated 30 August 2023</p>
  <p><strong>Authors:</strong> <a href="https://github.com/annethyme">Anne Thyme Nørregaard</a>, <a href="https://github.com/Jym77">Jean-Yves Moyen</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: b20e66
  name: "Links with identical accessible names have equivalent purpose"
  rule_type: atomic
  description: |
    This rule checks that links with identical accessible names resolve to the same resource or equivalent resources.
  last_modified: 30 August 2023
  scs_tested:
    - handle: Link Purpose (Link Only)
      num: 2.4.9
      level: AAA
---

## Applicability

This rule applies to any set of any two or more [HTML or SVG elements][] for which all the following are true:

- the elements are [inheriting semantic][] `link` nodes; and
- the elements are in the same [web page (HTML)][]; and
- the elements are [included in an accessibility tree][included in the accessibility tree]; and
- the elements have [matching][] [accessible names][accessible name] that are not empty (`""`).

**Note:** The test target for this rule is the full set of link elements that share the same [matching][] [accessible name][].

## Expectation

When followed, the links in each set of target elements resolve to the [same resource][] or to [equivalent resources](#equivalent-resource). Resolving the links includes potential redirects, if the redirects happen instantly.

## Assumptions

- This rule assumes that the purpose of the links with identical [accessible names][accessible name] would not be ambiguous to users in general when seen in context on the web page, which is the exception mentioned in [Success Criterion 2.4.9 Link Purpose (Link Only)][sc249]. If the links are ambiguous to users in general, users of assistive technologies are not at a disadvantage when viewing the links out of context, e.g. on a list of links in a screen reader, which makes it more of a general user experience concern than an accessibility issue.
- This rule assumes that, within the context of the test subject, the description provided by the [accessible name][] of a link can only accurately describe one resource (notably, homonyms alone are not used as link names). Thus, if two or more links have the same [accessible name][] but resolve to different resources, at least one of them does not describe its purpose.

## Accessibility Support

- This rule assumes that assistive technologies are exposing all links on the page in the same way no matter which [document tree](https://dom.spec.whatwg.org/#document-trees) they are in. If an assistive technology requires the user to "enter" an `iframe` or a [shadow tree][] before exposing its links, then it is possible for two links to have identical name but resolve to different resources without failing [Success Criterion 2.4.9 Link Purpose (Link Only)][sc249] (if said links are in separate [documents][document] or [shadow trees][shadow tree]).
- Implementation of [Presentational Roles Conflict Resolution][] varies from one browser or assistive technology to another. Depending on this, some [inheriting semantic][] `link` elements can fail this rule with some technology but users of other technologies would not experience any accessibility issue.

## Background

### Bibliography

- [CSS Scoping Module Level 1 (editor's draft)](https://drafts.csswg.org/css-scoping/)
- [Understanding Success Criterion 2.4.9: Link Purpose (Link Only)](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only.html)
- [HTML Specification - URL parsing](https://html.spec.whatwg.org/#resolving-urls)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>2.4.9 Link Purpose (Link Only) (Level AAA)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#link-purpose-link-only">Learn more about 2.4.9 Link Purpose (Link Only)</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level AAA.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
</ul>

## Input Aspects

The following aspects are required in using this rule.

- [Accessibility Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-accessibility)
- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)
- [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)
- [Language](https://www.w3.org/TR/act-rules-aspects/#input-aspects-text)

## Test Cases

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b20e66/9ccf7853c269dfcc3832333ee3785257fa7b9018.html">Open in a new tab</a>

A set of two HTML `a` elements have the same [accessible name][] and link to the [same resource][].

```html
<html lang="en">
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">Contact us</a>
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">Contact us</a>
</html>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b20e66/3a84bd09a817b707c44e3b8af1f710e5a5f41f98.html">Open in a new tab</a>

These two HTML `a` elements resolve to the [same resource][] after instant redirect. The redirect means that the URLs look different but load the same page.

```html
<html lang="en">
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">Contact us</a>
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/redirect.html">Contact us</a>
</html>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b20e66/2594532c9868b1b639214e54380a2e9b2f91243b.html">Open in a new tab</a>

These two links resolve to resources that are not the same (different URLs), but the resources are completely identical, in this case the contact details being the same in two locations, thus serving the same purpose.

```html
<html lang="en">
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">Contact us</a>
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index-copy.html">Contact us</a>
</html>
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b20e66/6f97807f5525832037d676099a26cde32e519776.html">Open in a new tab</a>

These two links go to pages where the content section is the same, but where the navigation options (bread crumbs and local sub menus) differ due to different placement in navigation hierarchy. In the example, the contact details are the same format but in different locations.

```html
<html lang="en">
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a>
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/careers/contact.html">Contact us</a>
</html>
```

#### Passed Example 5

<a class="example-link" title="Passed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b20e66/d6b244548c375ed83a8f3fb60193ed66442e7c68.html">Open in a new tab</a>

These two HTML `a` elements link to URLs that differ due to trailing slashes, but resolve to the [same resource][] after redirects caused by user agent. The redirect means the URLs look different but load the same page.

```html
<html lang="en">
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/">Contact us</a>
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66">Contact us</a>
</html>
```

#### Passed Example 6

<a class="example-link" title="Passed Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b20e66/11e8780590560ae2acdf79d708b541ca0666def5.html">Open in a new tab</a>

These two links go to pages that contain different amounts of information and/or differently worded information, but fulfill the same purpose in relation to the link. In the example, the phone number is in the same format but in different locations.

```html
<html lang="en">
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page1.html">Call us</a>
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page2.html">Call us</a>
</html>
```

#### Passed Example 7

<a class="example-link" title="Passed Example 7" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b20e66/4b5fcfab90a85fabcfffb143e0c886236f360d6c.html">Open in a new tab</a>

These two links go to pages that have the same advertised key content but use different layouts. In the example, the contact details are the same format but in different locations.

```html
<html lang="en">
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page1.html">Contact us</a>
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page3.html">Contact us</a>
</html>
```

#### Passed Example 8

<a class="example-link" title="Passed Example 8" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b20e66/39078d73e0c274100c3518259a3e30fe52ecd3b3.html">Open in a new tab</a>

These two HTML `span` element have an [explicit role][] of link, and lead to the [same resource][]. This example is showing ARIA markup for a link compared to the other HTML examples.

```html
<html lang="en">
	<span
		role="link"
		tabindex="0"
		onclick="location='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html'"
	>
		Link text
	</span>

	<span
		role="link"
		tabindex="0"
		onclick="location='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html'"
	>
		Link text
	</span>
</html>
```

#### Passed Example 9

<a class="example-link" title="Passed Example 9" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b20e66/1e657a8e23e1ec1f52032bc68d5403cea50bc003.html">Open in a new tab</a>

These two SVG `a` elements have the same [accessible name][] and link to the [same resource][]. The example is one SVG area but with 2 formats of links. One uses an image and the other uses text.

```html
<html lang="en">
	<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
		<a href="https://act-rules.github.io/" aria-label="ACT rules">
			<circle cx="50" cy="40" r="35" />
		</a>

		<a href="https://act-rules.github.io/">
			<text x="50" y="90" text-anchor="middle">
				ACT rules
			</text>
		</a>
	</svg>
</html>
```

#### Passed Example 10

<a class="example-link" title="Passed Example 10" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b20e66/b9f1dad8a8d15e046de4628e8d4e29d31b950048.html">Open in a new tab</a>

A set of one SVG `a` element and one HTML `a` element that have the same [accessible name][] and link to the [same resource][].

```html
<a href="https://act-rules.github.io/">ACT rules</a>

<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	<a href="https://act-rules.github.io/" aria-label="ACT rules">
		<circle cx="50" cy="40" r="35" />
	</a>
</svg>
```

#### Passed Example 11

<a class="example-link" title="Passed Example 11" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b20e66/2283add5996728d458e4b6a7376071b354744a19.html">Open in a new tab</a>

All three links have the same [accessible name][]. The second link ("from the light") is only part of the [light tree][]. When the [shadow tree][] is attached to `host` and flattened, this link is overwritten and therefore not part of the [flat tree][] (and thus not rendered). Hence, only the first and third link are considered by this rule and they both point to the [same resource][].

```html
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a>
all the time.

<div id="host">
	<span
		><a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/admissions/contact.html"
			>Contact us</a
		>
		from the light.</span
	>
</div>

<script>
	const host = document.getElementById('host')
	const shadowRoot = host.attachShadow({ mode: 'open' })

	shadowRoot.innerHTML =
		'<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a> from the shadow.'
</script>
```

#### Passed Example 12

<a class="example-link" title="Passed Example 12" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b20e66/e339e9e7b77f88ce8041dba8e672a618f515df84.html">Open in a new tab</a>

The [browsing context][] of the `iframe` has the [browsing context][] of the main [document][] as an [ancestor browsing context](https://html.spec.whatwg.org/#ancestor-browsing-context). Hence, they share the same [top-level browsing context](https://html.spec.whatwg.org/#top-level-browsing-context) (namely, the [browsing context][] of the main [document][]) and are part of the same [web page (HTML)][]. Therefore, both links are considered and, since they refer to the same document, the rule passes.

```html
<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a>
from the top level.

<iframe
	srcdoc="<a href='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html'>Contact us</a> from the iframe"
></iframe>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b20e66/f34241fb3e5b4e23fa3813f2f29ddb7227a79c65.html">Open in a new tab</a>

These two links have the same [accessible name][] but go to different resources. They open completely different pages.

```html
<html lang="en">
	<a href="https://act-rules.github.io/">ACT rules</a>
	<a href="https://www.w3.org/community/act-r/">ACT rules</a>
</html>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b20e66/2bb9bd2d4cc0781427cb9ebaed949695a016afc0.html">Open in a new tab</a>

The same [accessible name][] is used for two links going to web pages that are similar, but have different information in their content. The example given contains different contact details for each page. They have a similar purpose but do not match.

```html
<html lang="en">
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a>
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/admissions/contact.html"
		>Contact us</a
	>
</html>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b20e66/578b693f3a1818b17b0bd678b75750e2824dff09.html">Open in a new tab</a>

These two HTML `span` elements have an [explicit role][] of link, but lead to resources that offer different content. The example given contains different contact details for each page. They have a similar purpose but do not match.

```html
<html lang="en">
	<span
		role="link"
		tabindex="0"
		onclick="location='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html'"
	>
		Link text
	</span>

	<span
		role="link"
		tabindex="0"
		onclick="location='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/admissions/contact.html'"
	>
		Link text
	</span>
</html>
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b20e66/71d6745fb37e3348784179c751be9af0b997fa5b.html">Open in a new tab</a>

The same [accessible name][] is used for image links going to different resources. They open completely different pages.

```html
<html lang="en">
	<a href="https://act-rules.github.io/"><img src="/test-assets/shared/act-logo.png" alt="ACT rules"/></a>
	<a href="https://www.w3.org/community/act-r/"><img src="/test-assets/shared/act-logo.png" alt="ACT rules"/></a>
</html>
```

#### Failed Example 5

<a class="example-link" title="Failed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b20e66/a9c292b40ed314545cf73b58a2496f47a268592e.html">Open in a new tab</a>

These two SVG `a` elements have the same [accessible name][] but link to different resources. They open completely different pages.

```html
<html lang="en">
	<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
		<a href="https://act-rules.github.io/" aria-label="ACT rules">
			<circle cx="50" cy="40" r="35" />
		</a>

		<a href="https://www.w3.org/community/act-r/">
			<text x="50" y="90" text-anchor="middle">
				ACT rules
			</text>
		</a>
	</svg>
</html>
```

#### Failed Example 6

<a class="example-link" title="Failed Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b20e66/a67cf3bac5c43ae2c280736f9c86f57457c35537.html">Open in a new tab</a>

These two links resolve to [same resource][] after redirect, but the redirect is not instant. The user will notice the redirect due to a pause.

```html
<html lang="en">
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">Contact us</a>
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/redirect1.html">Contact us</a>
</html>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b20e66/547d69dca1d88658ee7036136b8cd29e05a28823.html">Open in a new tab</a>

These `a` and `area` elements have no `href` attribute. Thus they are not links and do not have a role of `link`.

```html
<html lang="en">
	<a>Link text</a>
	<area aria-label="Link text" />
</html>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b20e66/45ef0c588326ff9dc7efc883da3b651163384032.html">Open in a new tab</a>

These links have different [accessible names][accessible name]. The rule only applies to identical [accessible names][accessible name], not to identical link destinations.

**Note:** It is a best practice for [Success Criterion 2.4.9: Link Purpose (Link Only)](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-link-only.html) that identical links have identical [accessible names][accessible name]. This is however not a requirement.

```html
<html lang="en">
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Reach out</a>
	<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a>
</html>
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/b20e66/bf3cbb86a637d04ffea4fd63bb2430b639ebcdca.html">Open in a new tab</a>

These `span` elements do not have a [semantic role][] of `link`. They are not valid links.

```html
<html lang="en">
	<span onclick="location='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page1.html'">
		Contact Us
	</span>

	<span onclick="location='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page2.html'">
		Contact Us
	</span>
</html>
```

## Glossary

### Accessible Name {#accessible-name}

The _accessible name_ is the programmatically determined name of a user interface element that is [included in the accessibility tree](#included-in-the-accessibility-tree).

The accessible name is calculated using the [accessible name and description computation][].

For native markup languages, such as HTML and SVG, additional information on how to calculate the accessible name can be found in [HTML Accessibility API Mappings 1.0, Accessible Name and Description Computation (working draft)](https://www.w3.org/TR/html-aam/#accessible-name-and-description-computation) and [SVG Accessibility API Mappings, Name and Description (working draft)](https://www.w3.org/TR/svg-aam/#mapping_additional).

For more details, see [examples of accessible name][].

**Note:** As per the [accessible name and description computation][], each element always has an accessible name. When no accessible name is provided, the element will nonetheless be assigned an empty (`""`) one.

**Note:** As per the [accessible name and description computation][], accessible names are [flat string](https://www.w3.org/TR/accname-1.1/#terminology) trimmed of leading and trailing whitespace. Notably, it is not possible for a non-empty accessible name to be composed only of whitespace since these must be trimmed.

### Equivalent resource {#equivalent-resource}

Non-identical resources can still be _equivalent resources_ by equally complying to the expectation formed by the user when navigating to them, thus serving an equivalent purpose. This would usually involve that the advertised key content is the same.

Web pages and documents (e.g. PDFs, office formats etc.) may be equivalent resources, even if the resources:

- are located on different URLs, including different domains
- present different navigation options, e.g. through bread crumbs or local sub menus
- contain different amounts of information and/or differently worded information
- use different layouts.

If all resources cover the user's expectations equally well, the resources are considered to be equivalent.

**Note:** The user's expectations for the resource can be formed by different things, e.g. the name of the link leading to the resource, with or without the context around the link. This depends on the accessibility requirement that is tested.

**Note:** If the same content is presented in different formats or languages, the format or language itself is often part of the purpose of the content, e.g. an article as both HTML and PDF, an image in different sizes, or an article in two different languages. If getting the same content in different formats or languages is the purpose of having separate links, the resources are not equivalent.

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

### Marked as decorative {#marked-as-decorative}

An element is _marked as decorative_ if one or more of the following conditions is true:

- it has an [explicit role][] of `none` or `presentation`; or
- it is an `img` element with an `alt` attribute whose value is the empty string (`alt=""`), and with no [explicit role][].

Elements are marked as decorative as a way to convey the intention of the author that they are [pure decoration][]. It is different from the element actually being [pure decoration][] as authors may make mistakes. It is different from the element being effectively ignored by assistive technologies as rules such as [presentational roles conflict resolution][] may overwrite this intention.

Elements can also be ignored by assistive technologies if they are [programmatically hidden][]. This is different from marking the element as decorative and does not convey the same intention. Notably, being [programmatically hidden][] may change as users interact with the page (showing and hiding elements) while being marked as decorative should stay the same through all states of the page.

### Matching characters {#matching-characters}

A sequence of characters is considered to _match_ another if, after removing leading and trailing [space characters](https://html.spec.whatwg.org/#white_space) and replacing remaining occurrences of one or more space characters with a single space, the two sequences of characters are equal character-by-character, ignoring any differences in letter casing.

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

**Note**: Contrary to the other conditions, the `visibility` CSS property may be reverted by descendants.

**Note**: The [HTML standard suggests](https://html.spec.whatwg.org/multipage/rendering.html#hidden-elements) setting the CSS `display` property to `none` for elements with the `hidden` attribute. While not required by HTML, all modern browsers follow this suggestion. Because of this the `hidden` attribute is not used in this definition. In browsers that use this suggestion, overriding the CSS `display` property can reveal elements with the `hidden` attribute.

### Same resource {#same-resource}

Two or more resources can be the _same resource_ even though the URLs for them are different. This can be due to URL parsing, server settings, redirects and DNS aliasing.

If the [parsed URLs](https://html.spec.whatwg.org/#resolving-urls) for two resources are identical, the resources are the same resource.

Depending on the server, URLs can either be case-sensitive or case-insensitive, meaning that `<a href="page1.html">` and `<a href="Page1.html">` lead to either the same or two different pages.

Fully parsed URLs can be different, but still lead to the same resource after making the HTTP request, due to redirects and DNS aliasing. For example, these URLs are all fully normalized: http://example.com/, http://www.example.com/, https://www.example.com/. The server can however be configured to serve the same site for http and https, and the same site for example.com and www.example.com. This is common, but not guaranteed.

Some types of redirects are also caused by user agents, e.g. ensuring that http://example.com/ and http://example.com resolve to the same resource.

On the other hand, identical relative URLs do not necessarily resolve to the same resource, even if they are in the same [web page (HTML)](#web-page-html). This happen because external content can be included through `iframe` and URLs in or out of it will resolve relatively to different base URLs.

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

### Web page (HTML) {#web-page-html}

An _HTML [web page](https://www.w3.org/TR/WCAG21/#dfn-web-page-s)_ is the set of all [fully active](https://html.spec.whatwg.org/#fully-active) [documents](https://dom.spec.whatwg.org/#concept-document) which share the same [top-level browsing context](https://html.spec.whatwg.org/#top-level-browsing-context).

**Note:** Nesting of browsing context mostly happens with `iframe` and `object`. Thus a web page will most of the time be a "top-level" document and all its `iframe` and `object` (recursively).

**Note:** [Web pages](https://www.w3.org/TR/WCAG21/#dfn-web-page-s) as defined by WCAG are not restricted to the HTML technology but can also include, _e.g._, PDF or DOCX documents.

**Note:** Although web pages as defined here are sets of [documents](https://dom.spec.whatwg.org/#concept-document) (and do not contain other kind of nodes), one can abusively write that any node is "in a web page" if it is a [shadow-including descendant](https://dom.spec.whatwg.org/#concept-shadow-including-descendant) of a [document](https://dom.spec.whatwg.org/#concept-document) that is part of that web page.

[abstract]: https://www.w3.org/TR/wai-aria-1.1/#isAbstract 'ARIA Definition for Abstract Roles'
[accessibility support base line]: https://www.w3.org/TR/WCAG-EM/#step1c 'Definition of accessibility support base line'
[accessible name and description computation]: https://www.w3.org/TR/accname 'Accessible Name and Description Computation'
[accessible name]: #accessible-name 'Definition of accessible name'
[browsing context]: https://html.spec.whatwg.org/#browsing-context 'Definition of browsing context'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[doc-biblioref]: https://www.w3.org/TR/dpub-aria-1.0/#doc-biblioref 'DPUB ARIA Definition of doc-biblioref'
[document]: https://dom.spec.whatwg.org/#concept-document 'Definition of document'
[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[examples of accessible name]: https://act-rules.github.io/pages/examples/accessible-name/
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[explicit role]: #explicit-role 'Definition of explicit role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focusable]: #focusable 'Definition of Focusable'
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[html or svg elements]: #namespaced-element
[implicit role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[inheriting semantic]: #inheriting-semantic 'Definition of Inheriting Semantic Role'
[light tree]: https://dom.spec.whatwg.org/#concept-light-tree 'Definition of light tree'
[link]: https://www.w3.org/TR/wai-aria/#link 'ARIA Definition of the link Role'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as Decorative'
[matching]: #matching-characters 'Definition of matching characters'
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[programmatically hidden]: #programmatically-hidden 'Definition of Programmatically Hidden'
[pure decoration]: https://www.w3.org/TR/WCAG21/#dfn-pure-decoration 'WCAG definition of Pure Decoration'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[same resource]: #same-resource 'Definition of same resource'
[sc249]: https://www.w3.org/TR/WCAG21/#link-purpose-link-only 'Success Criterion 2.4.9: Link Purpose (Link Only)'
[semantic role]: #semantic-role 'Definition of semantic role'
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[shadow tree]: https://dom.spec.whatwg.org/#shadow-tree 'Definition of shadow tree'
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
[web page (html)]: #web-page-html 'Definition of web page (HTML)'
