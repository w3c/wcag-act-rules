---
title: "Links with identical accessible names and same context serve equivalent purpose"
permalink: /standards-guidelines/act/rules/fd3a94/proposed/
ref: /standards-guidelines/act/rules/fd3a94/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/fd3a94/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> fd3a94</p>
  <p><strong>Date:</strong> Updated 21 November 2024</p>
  <p><strong>Authors:</strong> <a href="https://github.com/carlosapaduarte">Carlos Duarte</a>, Giacomo Petri. Previous Authors: <a href="https://github.com/annethyme">Anne Thyme Nørregaard</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: fd3a94
  name: "Links with identical accessible names and same context serve equivalent purpose"
  rule_type: atomic
  original_file: links-with-identical-names-and-context-serve-equivalent-purpose-fd3a94.md
  description: |
    This rule checks that links with identical accessible names in the same context resolve to the same or equivalent resources.
  last_modified: 21 November 2024
  scs_tested:
    - handle: Link Purpose (In Context)
      num: 2.4.4
      level: A
---

## Applicability

This rule applies to any set of two or more [HTML or SVG elements][] for which all the following are true:

- the elements are [inheriting semantic][] `link` nodes; and
- the elements are in the same [web page (HTML)][]; and
- the elements are [included in the accessibility tree][included in the accessibility tree]; and
- the elements have [matching][] [accessible names][accessible name] that are not empty (`""`); and
- the elements have the same [programmatically determined link context][].

**Note:** The test target for this rule is the full set of link elements that share the same [matching][] [accessible name][] and [programmatically determined link context][].

## Expectation

For each pair of links in each target set, one of the following is true:

- both links resolve to the [same resource][]; or
- both links resolve to [equivalent resources][equivalent resource]; or
- there is no visual information within the [web page][] to let users know that both links resolve to [non-equivalent resources][equivalent resource].

**Note**: Resolving the links includes potential redirects, if the redirects happen instantly.

## Background

There is a difference between two contexts being the _same_ and being _identical_. This rule specifically targets links within the _same_ context. The same context means exactly the same set of DOM nodes. Identical (but not the same) contexts might have a different set of DOM nodes, but those DOM nodes have equivalent content - such as text content, attribute values, and so on. This difference is similar to the difference in some programming languages between pointer equivalence and deep object equivalence. Links with identical name that are in identical (but not the same) contexts also fail [2.4.4 Link Purpose (In Context)][sc244]. However, defining "identical context" unambiguously has been deemed infeasible at this time, and so has been left out of this rule.

Links that are [ambiguous to users in general](https://www.w3.org/TR/WCAG22/#dfn-ambiguous-to-users-in-general) are covered by the exception mentioned in Success Criterion 2.4.4 Link Purpose (In Context). If the links are ambiguous to users in general, users of assistive technologies are not at a disadvantage when viewing the links, which makes it more of a general user experience concern than an accessibility issue.

Pages with links that are not [ambiguous to users in general][], but are ambiguous to some users are likely to fail [success criterion 1.3.1 Info and Relationships][sc131] if the disambiguation information is conveyed through presentation, but not semantically. Moreover, when this information is non-text content, such a page is likely to fail [success criterion 1.1.1 Non-text Content][sc111].

### Assumptions

- This rule assumes that, within the context of the test subject, the description provided by the [accessible name][] of a link can only accurately describe one resource (notably, homonyms alone are not used as link names). Thus, if two or more links have the same [accessible name][] but resolve to different resources, at least one of them does not accurately describe its purpose.
- This rule assumes that assistive technologies are exposing all links on the page in the same way no matter which [document tree](https://dom.spec.whatwg.org/#document-trees) they are in. If an assistive technology requires the user to "enter" an `iframe` or a [shadow tree][] before exposing its links, then it is possible for two links to have identical name and context but resolve to different resources without failing [Success Criterion 2.4.4 Link Purpose (In Context)][sc244] (if said links are in separate [documents][document] or [shadow trees][shadow tree]).
- This rule assumes that reading the URL, such as from the status bar when the link is focused, is not considered part of the context, and therefore, it does not disambiguate links.

### Accessibility Support

There are no accessibility support issues known.

### Bibliography

- [Understanding Success Criterion 2.4.4: Link Purpose (In Context)](https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html)
- [HTML Specification - URL parsing](https://html.spec.whatwg.org/#resolving-urls)
- [Ambiguous to users in general](https://www.w3.org/TR/WCAG22/#dfn-ambiguous-to-users-in-general)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>2.4.4 Link Purpose (In Context) (Level A)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#link-purpose-in-context">Learn more about 2.4.4 Link Purpose (In Context)</a></li>
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

- [2.4.9 Link Purpose (Link Only) (Level AAA)](https://www.w3.org/TR/WCAG21/#link-purpose-link-only): This success criterion is **more strict** than this rule. This is because the rule also considers the context of the link, in addition to the link text. Some of the passed examples do not satisfy this success criterion.

## Input Aspects

The following aspects are required in using this rule.

- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)
- [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)
- [Language](https://www.w3.org/TR/act-rules-aspects/#input-aspects-text)

## Test Cases

<details class="act-inline-assets" markdown="block">
<summary><span>These HTML files are used in several examples:</span></summary>

File [`/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html`](https://w3.org/WAI/content-assets/wcag-act-rules/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html):

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>My University</title>
	</head>
	<body>
		<h1>Welcome to My University</h1>
		<p>We are currently working on getting our website up and running.</p>
	</body>
</html>
```

File [`/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/redirect.html`](https://w3.org/WAI/content-assets/wcag-act-rules/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/redirect.html):

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="refresh" content="0; URL='index.html'" />
		<title>Redirecting to another page</title>
	</head>
	<body></body>
</html>
```

File [`/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index-copy.html`](https://w3.org/WAI/content-assets/wcag-act-rules/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index-copy.html):

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>My University</title>
	</head>
	<body>
		<h1>Welcome to My University</h1>
		<p>We are currently working on getting our website up and running.</p>
	</body>
</html>
```

File [`/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html`](https://w3.org/WAI/content-assets/wcag-act-rules/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html):

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>About - Contact</title>
	</head>
	<body>
		<nav label="main menu" style="text-align: right;">
			<a href="../about.html">About</a>
			<a href="../admissions.html">Admissions</a>
			<a href="../careers.html">Careers</a>
		</nav>
		<nav label="breadcrumb">
			<p>You are here: <a href="../about.html">About</a> / Contact us</p>
		</nav>
		<nav label="submenu" style="float:left">
			<h2>About</h2>
			<ul>
				<li style="list-style-type: none;"><a href="history.html">History</a></li>
				<li style="list-style-type: none;"><a href="employees.html">Employees</a></li>
				<li style="list-style-type: none;"><a href="contact.html">Contact</a></li>
			</ul>
		</nav>
		<main style="float:left; margin-left: 50px;">
			<h1>Contact us</h1>
			<p>Phone: (541) 754-3010</p>
		</main>
	</body>
</html>
```

File [`/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/careers/contact.html`](https://w3.org/WAI/content-assets/wcag-act-rules/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/careers/contact.html):

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>About - Contact</title>
	</head>
	<body>
		<nav label="main menu" style="text-align: right;">
			<a href="../about.html">About</a>
			<a href="../admissions.html">Admissions</a>
			<a href="../careers.html">Careers</a>
		</nav>
		<nav label="breadcrumb">
			<p>You are here: <a href="../careers.html">Careers</a> / Contact</p>
		</nav>
		<nav label="submenu" style="float:left">
			<h2>Careers</h2>
			<ul>
				<li style="list-style-type: none;"><a href="positions.html">Open positions</a></li>
				<li style="list-style-type: none;"><a href="benefits.html">Benefits</a></li>
				<li style="list-style-type: none;"><a href="contact.html">Contact</a></li>
			</ul>
		</nav>
		<main style="float:left; margin-left: 50px;">
			<h1>Contact us</h1>
			<p>Phone: (541) 754-3010</p>
		</main>
	</body>
</html>
```

File [`/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page1.html`](https://w3.org/WAI/content-assets/wcag-act-rules/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page1.html):

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>Get in touch</title>
	</head>
	<body>
		<h1>Get in touch</h1>
		<p>Call us: (541) 754-3010</p>
	</body>
</html>
```

File [`/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page2.html`](https://w3.org/WAI/content-assets/wcag-act-rules/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page2.html):

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>Contact us</title>
	</head>
	<body>
		<h1>Contact us</h1>
		<p>Phone: (541) 754-3010</p>
		<p>Email: email@university.com</p>
		<p>Telefax: (541) 754-3011</p>
	</body>
</html>
```

File [`/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page3.html`](https://w3.org/WAI/content-assets/wcag-act-rules/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page3.html):

```html
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<title>Get in touch</title>
	</head>
	<body style="background-color: blue; color: yellow">
		<h1 style="border: 1px solid yellow">Get in touch</h1>
		<p>Call us: (541) 754-3010</p>
	</body>
</html>
```

File [`/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/redirect1.html`](https://w3.org/WAI/content-assets/wcag-act-rules/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/redirect1.html):

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="refresh" content="30; URL='index.html'" />
		<title>Redirecting to another page</title>
	</head>
	<body></body>
</html>
```

</details>

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/fd3a94/c6927fede2d5da439b2d346f39d2ec8980212b31.html">Open in a new tab</a>

These two HTML `a` elements have the same [accessible name][] and [context][programmatically determined link context] and link to the [same resource][].

```html
<html lang="en">
	<p>
		Learn more (<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">About us</a
		>) and get in touch (
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">About us</a>)
	</p>
</html>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/fd3a94/e0d32d9583b2b545ca76295cff78e016a44854b6.html">Open in a new tab</a>

These two HTML `a` elements have the same [accessible name][] and [context][programmatically determined link context], and resolve to the [same resource][] after an instant redirect.

```html
<html lang="en">
	<div>
		Learn more (<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">About us</a
		>) and get in touch (<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/redirect.html"
			>About us</a
		>)
	</div>
</html>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/fd3a94/91abed1247fb6c9314457a6738343493056fe3bb.html">Open in a new tab</a>

These two HTML `a` elements have the same [accessible name][] and [context][programmatically determined link context], and resolve to identical resources.

```html
<html lang="en">
	<p>
		Learn more (<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">About us</a
		>) and get in touch (<a
			href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index-copy.html"
			>About us</a
		>)
	</p>
</html>
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/fd3a94/8e6c190e0d2ba8f37707910bd1b984b6885ab548.html">Open in a new tab</a>

These two HTML `a` elements have the same [accessible name][] and [context][programmatically determined link context], and resolve to pages that serve the same purpose because the content section is the same.

```html
<html lang="en">
	<p>
		Learn more (<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html"
			>Contact us</a
		>) and get in touch (
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/careers/contact.html">Contact us</a
		>)
	</p>
</html>
```

#### Passed Example 5

<a class="example-link" title="Passed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/fd3a94/b55973d2f813b2fa7d0841202c13f65e41ca8823.html">Open in a new tab</a>

These two HTML `a` elements have the same [accessible name][] and [context][programmatically determined link context], and go to pages that fulfill the same purpose in relation to the link because they contain the same relevant information.

```html
<html lang="en">
	<p>
		Learn more (<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page1.html">Call us</a
		>) and get in touch (<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page2.html"
			>Call us</a
		>)
	</p>
</html>
```

#### Passed Example 6

<a class="example-link" title="Passed Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/fd3a94/19d5c2888e4434b3e0fb2d9ea5818808e8380422.html">Open in a new tab</a>

These two HTML `a` elements have the same [accessible name][] and [context][programmatically determined link context], and go to pages that use different layouts but have the same purpose.

```html
<html lang="en">
	<p>
		Learn more (<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page1.html"
			>Contact us</a
		>) and get in touch (<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page3.html"
			>Contact us</a
		>)
	</p>
</html>
```

#### Passed Example 7

<a class="example-link" title="Passed Example 7" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/fd3a94/fb1e5016cd1630a2839dc7d70d503babd2ccfefc.html">Open in a new tab</a>

These two HTML `span` elements have an [explicit role][] of link, the same [accessible name][], the same [context][programmatically determined link context], and link to the [same resource][].

```html
<html lang="en">
	<p>
		<span
			role="link"
			tabindex="0"
			onclick="location='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html'"
		>
			My university
		</span>

		<span
			role="link"
			tabindex="0"
			onclick="location='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html'"
		>
			My university
		</span>
	</p>
</html>
```

#### Passed Example 8

<a class="example-link" title="Passed Example 8" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/fd3a94/0c9cee5afaadc35a08ce533448f02b50d6526eda.html">Open in a new tab</a>

These two SVG `a` and HTML `a` elements have the same [accessible name][], same [context][programmatically determined link context] and link to the [same resource][].

```html
<html lang="en">
	<p>
		<a href="https://act-rules.github.io/">ACT rules</a>

		<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<a href="https://act-rules.github.io/" aria-label="ACT rules">
				<circle cx="50" cy="40" r="35" />
			</a>
		</svg>
	</p>
</html>
```

#### Passed Example 9

<a class="example-link" title="Passed Example 9" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/fd3a94/228c0a3d78557fb48a855d6733d50848a86f0d62.html">Open in a new tab</a>

These two HTML `a` elements have the same [accessible name][] and [context][programmatically determined link context], but resolve to different resources. However, the purpose of these links is [ambiguous to users in general](https://www.w3.org/TR/WCAG22/#dfn-ambiguous-to-users-in-general). Thus all readers are unsure about the destination and the person with a disability is not at any disadvantage.

```html
<html lang="en">
	<p>
		We are on social media:
		<a href="https://act-rules.github.io/">ACT rules</a>
		<a href="https://www.w3.org/community/act-r/">ACT rules</a>
	</p>
</html>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/fd3a94/9ceacbea5df44a14dc17df2089edb134f22decd3.html">Open in a new tab</a>

These two HTML `a` elements have the same [accessible name][] and are nested within the same [context][programmatically determined link context], but go to different resources.

```html
<html lang="en">
	<p>
		To get in touch with us, you can either
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/contact-us.html?page=1"
			>contact us</a
		>
		via chat or
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/contact-us.html?page=2"
			>contact us</a
		>
		by phone.
	</p>
</html>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/fd3a94/8dc58c481c594488a331cd267974a324b97c9c98.html">Open in a new tab</a>

These two HTML `a` elements have the same [accessible name][] and [context][programmatically determined link context], but go to different resources.

```html
<html lang="en">
	<p>W3C pages for ACT:</p>
	<p><a href="https://act-rules.github.io/">ACT rules</a></p>
	<p>Community group for ACT:</p>
	<p><a href="https://www.w3.org/community/act-r/">ACT rules</a></p>
</html>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/fd3a94/ef75d42424140b163d7939aacc6a80c8dbc8816a.html">Open in a new tab</a>

These two HTML `a` elements have the same [accessible name][] and [context][programmatically determined link context]. They are visually distinguishable thanks to the relationships conveyed through CSS, but go to different resources.

```html
<html lang="en">
	<p>
		<h2>Contact us:</h2>
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/contact-us.html?page=1" style="display:inline-block; background: url(/test-assets/shared/chat.png) 0 / 40px no-repeat; padding: 20px 0 20px 50px;">Contact Us</a>
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/contact-us.html?page=2" style="display:inline-block; background: url(/test-assets/shared/phone.png) 0 / 40px no-repeat; padding: 20px 0 20px 50px; margin-left: 40px;">Contact Us</a>
	</p>
</html>
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/fd3a94/f92350be3a294ad1a41de6d7202f09bdd4e5d6c0.html">Open in a new tab</a>

These two HTML `a` elements have the same [accessible name][] and [context][programmatically determined link context], but go to different resources. Their purpose is disambiguated for sighted users by the alignment of the links with the images above.

```html
<html lang="en">
	<div>
		<span style="text-align:center;">Contact us</span>
		<span style="display:flex; justify-content:space-around;">
			<img src="/test-assets/shared/chat.png" alt="Chat" style="max-width:50px;" />
			<img src="/test-assets/shared/phone.png" alt="Phone" style="max-width:50px;" />
		</span>
		<span style="display:flex; justify-content:space-around;">
			<a
				href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/contact-us.html?page=60e950cff70bf1ec60a702086748ab4dec361514"
				>Contact Us</a
			>
			<a
				href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/contact-us.html?page=c1d4e0f067462f4b28716f028d9213a25eb82f28"
				>Contact Us</a
			>
		</span>
	</div>
</html>
```

#### Failed Example 5

<a class="example-link" title="Failed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/fd3a94/0b01e772dff47d4fd971ca4cfda2a9810843c10a.html">Open in a new tab</a>

These two HTML `a` elements have the same [accessible name][] and [context][programmatically determined link context]. They link to web pages that are similar, but have different information in their content. Their purpose is disambiguated for sighted users by the alignment of the links with the images above.

```html
<html lang="en">
	<div>
		<span style="text-align:center;">Contact us</span>
		<span style="display:flex; justify-content:space-around;">
			<img src="/test-assets/shared/chat.png" alt="Chat" style="max-width:50px;" />
			<img src="/test-assets/shared/phone.png" alt="Phone" style="max-width:50px;" />
		</span>
		<span style="display:flex; justify-content:space-around;">
			<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/contact-us.html?page=3"
				>Contact Us</a
			>
			<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/contact-us.html?page=4"
				>Contact Us</a
			>
		</span>
	</div>
</html>
```

#### Failed Example 6

<a class="example-link" title="Failed Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/fd3a94/dddcd76a61f61fa6652f847b66cd77fdcf7724cf.html">Open in a new tab</a>

These two HTML `span` elements have an [explicit role][] of link, same [accessible name][] and [context][programmatically determined link context], but link to resources that offer different content. Their purpose is disambiguated for sighted users by the alignment of the links with the images above.

```html
<html lang="en">
	<div>
		<span style="text-align:center;">Contact us</span>
		<span style="display:flex; justify-content:space-around;">
			<img src="/test-assets/shared/chat.png" alt="Chat" style="max-width:50px;" />
			<img src="/test-assets/shared/phone.png" alt="Phone" style="max-width:50px;" />
		</span>
		<span style="display:flex; justify-content:space-around;">
			<span
				role="link"
				tabindex="0"
				onclick="location='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/contact-us.html?page=1'"
				>Contact Us</span
			>
			<span
				role="link"
				tabindex="0"
				onclick="location='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/contact-us.html?page=2'"
				>Contact Us</span
			>
		</span>
	</div>
</html>
```

#### Failed Example 7

<a class="example-link" title="Failed Example 7" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/fd3a94/7ebe961dbb4fb0e259fc3bc98a8f048170b063af.html">Open in a new tab</a>

These two SVG `a` elements have the same [accessible name][] and [context][programmatically determined link context] but link to different resources.

```html
<html lang="en">
	<p>
		<svg
			enable-background="new 0 0 264 120"
			viewBox="-5 -20 80 50"
			xmlns="http://www.w3.org/2000/svg"
			style="max-width: 300px"
		>
			<text>Contact us</text>
			<a
				href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/contact-us.html?page=1"
				aria-label="Contact Us"
				style="scale: 0.2"
			>
				<path
					d="m212.0806 68.0717c-10.3917 10.3852-22.4311 20.3239-27.1905 15.5646-6.8075-6.8075-11.0088-12.7418-26.0285-.6696-15.0132 12.0657-3.4792 20.1139 3.1182 26.7047 7.6149 7.6149 36.0001.407 64.0571-27.6434 28.0504-28.057 35.2386-56.4422 27.6172-64.0571-6.5974-6.604-14.6062-18.1314-26.6719-3.1182-12.0723 15.0132-6.1444 19.2145.6761 26.0285 4.7397 4.7593-5.1925 16.7988-15.5777 27.1905z"
				/>
			</a>
			<a
				href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/contact-us.html?page=2"
				aria-label="Contact Us"
				style="scale: 0.2"
			>
				<path
					d="m105 7.5h-90c-8.2576 0-15 6.7497-15 15v52.5c0 8.2498 6.7424 15 15 15h30l30 22.5v-22.5h30c8.2498 0 15-6.7502 15-15v-52.5c0-8.2503-6.7502-15-15-15zm-80.7903 52.5c-6.2132 0-11.255-5.0372-11.255-11.25 0-6.2132 5.0418-11.25 11.255-11.25 6.2128 0 11.245 5.0418 11.245 11.25 0 6.2077-5.0322 11.25-11.245 11.25zm35.7953 0c-6.2128 0-11.255-5.0372-11.255-11.25 0-6.2132 5.0423-11.25 11.255-11.25 6.2132 0 11.245 5.0368 11.245 11.25 0 6.2128-5.0317 11.25-11.245 11.25zm35.7958 0c-6.2132 0-11.2555-5.0372-11.2555-11.25 0-6.2132 5.0423-11.25 11.2555-11.25 6.2128 0 11.2445 5.0368 11.2445 11.25 0 6.2128-5.0318 11.25-11.2445 11.25z"
				/>
			</a>
		</svg>
	</p>
</html>
```

#### Failed Example 8

<a class="example-link" title="Failed Example 8" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/fd3a94/1379913f0770843f89d37ceaad3a63e36f07924e.html">Open in a new tab</a>

These two HTML `a` elements with the same [accessible name][] and [context][programmatically determined link context] resolve to the [same resource][] after redirect, but the redirect is not instant.

```html
<html lang="en">
	<p>
		<span style="text-align:center;">Contact us</span>
		<span style="display:flex; justify-content:space-around;">
			<img src="/test-assets/shared/chat.png" alt="Chat" style="max-width:50px;" />
			<img src="/test-assets/shared/phone.png" alt="Phone" style="max-width:50px;" />
		</span>
		<span style="display:flex; justify-content:space-around;">
			<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">Contact Us</a>
			<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/redirect1.html">Contact Us</a>
		</span>
	</p>
</html>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/fd3a94/547d69dca1d88658ee7036136b8cd29e05a28823.html">Open in a new tab</a>

These HTML `a` and `area` elements do not have a role of `link`.

```html
<html lang="en">
	<a>Link text</a>
	<area aria-label="Link text" />
</html>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/fd3a94/4902c330569df88302c98581dcd6c1a449e72783.html">Open in a new tab</a>

These two HTML `a` elements have different [accessible names][accessible name].

**Note:** It is a best practice for [Success Criterion 2.4.4: Link Purpose (In Context)][sc244] that identical links have identical [accessible names][accessible name]. This is however not a requirement.

```html
<html lang="en">
	<p>
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Reach out</a>
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html">Contact us</a>
	</p>
</html>
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/fd3a94/3d342b4c04e69cdfaa26d6258275ec9807903d56.html">Open in a new tab</a>

These two HTML `a` elements have the same [accessible name][] and link to the [same resource][] but different [programmatically determined link contexts][programmatically determined link context].

```html
<html lang="en">
	<ul>
		<li>
			To learn more about us:
			<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">Contact us</a>
		</li>
		<li>
			To get in touch with us:
			<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">Contact us</a>
		</li>
	</ul>
</html>
```

#### Inapplicable Example 4

<a class="example-link" title="Inapplicable Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/fd3a94/ea07736554f372e47c098f3cb946d0bbbbd22d82.html">Open in a new tab</a>

These two `span` elements do not have a [semantic role][] of link.

```html
<html lang="en">
	<p>
		Learn more (<span
			onclick="location='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page1.html'"
			>Contact Us </span
		>) and get in touch (<span
			onclick="location='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/page2.html'"
			>Contact Us </span
		>)
	</p>
</html>
```

#### Inapplicable Example 5

<a class="example-link" title="Inapplicable Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/fd3a94/a799c111fc2dd2b2e6dade9bf227790d8cb33f68.html">Open in a new tab</a>

These two HTML `a` elements have the same [accessible name][] and link to the [same resource][] but different [programmatically determined link contexts][programmatically determined link context]. Even though the two contexts in this example are _identical_, they are not the _same_. That is: even though they have equivalent content, they do not consist of the same DOM elements.

```html
<html lang="en">
	<div>
		You can learn more in the
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">Contact us</a> page.
	</div>
	<div>
		You can learn more in the
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">Contact us</a> page.
	</div>
</html>
```

#### Inapplicable Example 6

<a class="example-link" title="Inapplicable Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/fd3a94/58087cbeb108ebf723ffc232c9996123a6eb168b.html">Open in a new tab</a>

These two HTML `a` elements have the same [accessible name][] but different [programmatically determined link contexts][programmatically determined link context] because the `div` elements place them in different display blocks.

```html
<div><a href="https://www.w3.org/WAI/">Read more</a> about the W3C WAI</div>
<div><a href="https://www.w3.org/International/">Read more</a> about the W3C internationalization</div>
```

#### Inapplicable Example 7

<a class="example-link" title="Inapplicable Example 7" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/fd3a94/9abd9bcfa7c5eb5000df1bd7e72440c6233566a5.html">Open in a new tab</a>

These two HTML `a` elements have the same [accessible name][] and [context][programmatically determined link context], but the second one is not [included in the accessibility tree][included in the accessibility tree].

```html
<html lang="en">
	<p>
		We are on social media:
		<a href="https://act-rules.github.io/">ACT rules</a>
		<a aria-hidden="true" href="https://www.w3.org/community/act-r/">ACT rules</a>
	</p>
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

### Matching characters {#matching-characters}

A sequence of characters is considered to _match_ another if, after removing leading and trailing [whitespace characters][] and replacing remaining occurrences of one or more whitespace characters with a single space, the two sequences of characters are equal character-by-character, ignoring any differences in letter casing.

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

Outcomes used in ACT Rules can be expressed using the [outcome property][] of the [[EARL10-Schema]][].

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

An _HTML [web page](https://www.w3.org/TR/WCAG22/#dfn-web-page-s)_ is the set of all [fully active](https://html.spec.whatwg.org/#fully-active) [documents](https://dom.spec.whatwg.org/#concept-document) which share the same [top-level browsing context](https://html.spec.whatwg.org/#top-level-browsing-context).

**Note:** Nesting of browsing context mostly happens with `iframe` and `object`. Thus a web page will most of the time be a "top-level" document and all its `iframe` and `object` (recursively).

**Note:** [Web pages](https://www.w3.org/TR/WCAG22/#dfn-web-page-s) as defined by WCAG are not restricted to the HTML technology but can also include, _e.g._, PDF or DOCX documents.

**Note:** Although web pages as defined here are sets of [documents](https://dom.spec.whatwg.org/#concept-document) (and do not contain other kind of nodes), one can abusively write that any node is "in a web page" if it is a [shadow-including descendant](https://dom.spec.whatwg.org/#concept-shadow-including-descendant) of a [document](https://dom.spec.whatwg.org/#concept-document) that is part of that web page.

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

[abstract]: https://www.w3.org/TR/wai-aria-1.2/#isAbstract 'ARIA Definition for Abstract Roles'
[accessibility support base line]: https://www.w3.org/TR/WCAG-EM/#step1c 'Definition of accessibility support base line'
[accessible name and description computation]: https://www.w3.org/TR/accname 'Accessible Name and Description Computation'
[accessible name]: #accessible-name 'Definition of accessible name'
[ancestor]: https://dom.spec.whatwg.org/#concept-tree-ancestor 'DOM, ancestor, 2021/11/29'
[assigned]: https://html.spec.whatwg.org/multipage/tables.html#algorithm-for-assigning-header-cells 'HTML, algorithm for assigning header cells, 2021/11/29'
[block container]: https://drafts.csswg.org/css-display/#block-container 'CSS Display Module Level 3, block container, 2022/01/17'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[doc-biblioref]: https://www.w3.org/TR/dpub-aria-1.0/#doc-biblioref 'DPUB ARIA Definition of doc-biblioref'
[document]: https://dom.spec.whatwg.org/#concept-document 'Definition of document'
[earl10-schema]: https://www.w3.org/TR/act-rules-format-1.1/#biblio-earl10-schema
[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[equivalent resource]: #equivalent-resource 'Definition of Equivalent Resource'
[examples of accessible name]: https://act-rules.github.io/pages/examples/accessible-name/
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[explicit role]: #explicit-role 'Definition of explicit role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS Scoping Module Level 1, flat tree, 2021/11/29'
[focusable]: #focusable 'Definition of Focusable'
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[html or svg elements]: #namespaced-element
[implicit role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[inheriting semantic]: #inheriting-semantic 'Definition of Inheriting Semantic Role'
[link]: https://www.w3.org/TR/wai-aria/#link 'ARIA Definition of the link Role'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as Decorative'
[matching]: #matching-characters 'Definition of matching characters'
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
[outcome property]: https://www.w3.org/TR/EARL10-Schema/#outcome
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[programmatically determined link context]: #programmatically-determined-link-context 'Definition of programmatically determined link context'
[programmatically hidden]: #programmatically-hidden 'Definition of Programmatically Hidden'
[pure decoration]: https://www.w3.org/TR/WCAG22/#dfn-pure-decoration 'WCAG definition of Pure Decoration'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[same resource]: #same-resource 'Definition of same resource'
[sc244]: https://www.w3.org/TR/WCAG22/#link-purpose-in-context 'Success Criterion 2.4.4: Link Purpose (In Context)'
[semantic role]: #semantic-role 'Definition of semantic role'
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[shadow tree]: https://dom.spec.whatwg.org/#shadow-tree 'Definition of shadow tree'
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[test subject]: https://www.w3.org/TR/act-rules-format-1.1/#test-subject
[test target]: https://www.w3.org/TR/act-rules-format/#test-target
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
[web page (html)]: #web-page-html 'Definition of web page (HTML)'
[web page]: #web-page-html 'Definition of HTML web page'
[whitespace characters]: #whitespace 'Definition of Whitespace'
