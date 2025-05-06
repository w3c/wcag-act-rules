---
title: "Iframe elements with identical accessible names have equivalent purpose"
permalink: /standards-guidelines/act/rules/4b1c6c/proposed/
ref: /standards-guidelines/act/rules/4b1c6c/proposed/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/4b1c6c/proposed.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> 4b1c6c</p>
  <p><strong>Date:</strong> Updated 2 December 2024</p>
  <p><strong>Authors:</strong> <a href="https://github.com/audreymaniez">Audrey Maniez</a>, <a href="https://github.com/Jym77">Jean-Yves Moyen</a>, <a href="https://github.com/jkodu">Jey Nandakumar</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules Community Group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: 4b1c6c
  name: "Iframe elements with identical accessible names have equivalent purpose"
  rule_type: atomic
  original_file: iframe-identical-name-equivalent-purpose-4b1c6c.md
  description: |
    This rule checks that `iframe` elements with identical accessible names embed the same resource or equivalent resources.
  last_modified: 2 December 2024
  scs_tested:
    - handle: Name, Role, Value
      num: 4.1.2
      level: A
---

## Applicability

This rule applies to any set of any two or more `iframe` elements which:

- are in the same [web page (HTML)][]; and
- are [included in an accessibility tree][included in the accessibility tree]; and
- that have [matching][] [accessible names][accessible name] that are not empty (`""`).

## Expectation

The `iframe` elements in each set of target elements embed the [same resource][] or [equivalent resources](#equivalent-resource).

## Background

When determining if target elements embed the same resource, resolving the embedded resource includes any redirects that are instant.

### Assumptions

This rule assumes that, within the context of the test subject, the description provided by the [accessible name][] of an `iframe` can only accurately describe one resource (notably, homonyms alone are not used as `iframe` names). Thus, if two or more `iframe` elements have the same [accessible name][] but embed different resources, at least one of them does not describe its purpose.

### Accessibility Support

This rule assumes that assistive technologies are exposing all `iframe` elements on the page in the same way no matter which [document tree](https://dom.spec.whatwg.org/#document-trees) they are in. If an assistive technology requires the user to "enter" an `iframe` or a [shadow tree][] before exposing its content (notably nested `iframe`), then it is possible for two `iframe` to have identical name but embed different resources without failing [Success Criterion 4.1.2: Name, Role, Value][sc412] (if said `iframe` are in separate [documents][document] or [shadow trees][shadow tree])

### Bibliography

- [CSS Scoping Module Level 1 (editor's draft)](https://drafts.csswg.org/css-scoping/)
- [H64: Using the title attribute of the frame and iframe elements](https://www.w3.org/WAI/WCAG22/Techniques/html/H64)
- [Understanding Success Criterion 4.1.2: Name, Role, Value][usc412]

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>4.1.2 Name, Role, Value (Level A)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG22/#name-role-value">Learn more about 4.1.2 Name, Role, Value</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level A and higher.</li>
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

- [DOM Tree](https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom)
- [CSS Styling](https://www.w3.org/TR/act-rules-aspects/#input-aspects-css)
- [Language](https://www.w3.org/TR/act-rules-aspects/#input-aspects-text)

## Test Cases

<details class="act-inline-assets" markdown="block">
<summary><span>These HTML files are used in several examples:</span></summary>

File [`/test-assets/iframe-unique-name-4b1c6c/page-one.html`](https://w3.org/WAI/content-assets/wcag-act-rules/test-assets/iframe-unique-name-4b1c6c/page-one.html):

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<title>Page One</title>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body>
		<!-- Breadcrumb -->
		Root > Page One
		<nav>
			<ul>
				<li>Home</li>
				<li>Contact</li>
			</ul>
		</nav>
	</body>
</html>
```

File [`/test-assets/iframe-unique-name-4b1c6c/sub-dir/page-one.html`](https://w3.org/WAI/content-assets/wcag-act-rules/test-assets/iframe-unique-name-4b1c6c/sub-dir/page-one.html):

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<title>Page One</title>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body>
		<!-- Breadcrumb -->
		Root > Sub Dir > Page One
		<nav>
			<ul>
				<li>Home</li>
				<li>Contact</li>
			</ul>
		</nav>
	</body>
</html>
```

File [`/test-assets/iframe-unique-name-4b1c6c/page-one-copy.html`](https://w3.org/WAI/content-assets/wcag-act-rules/test-assets/iframe-unique-name-4b1c6c/page-one-copy.html):

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<title>Page One</title>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body>
		<!-- Breadcrumb -->
		Root > Page One
		<nav>
			<ul>
				<li>Home</li>
				<li>Contact</li>
			</ul>
		</nav>
	</body>
</html>
```

File [`/test-assets/iframe-unique-name-4b1c6c/page-three-same-as-page-one.html`](https://w3.org/WAI/content-assets/wcag-act-rules/test-assets/iframe-unique-name-4b1c6c/page-three-same-as-page-one.html):

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<title>Page One</title>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body>
		<nav>
			<ul>
				<li>Home</li>
				<li>Contact</li>
			</ul>
		</nav>
	</body>
</html>
```

File [`/test-assets/iframe-unique-name-4b1c6c/advertising-one.html`](https://w3.org/WAI/content-assets/wcag-act-rules/test-assets/iframe-unique-name-4b1c6c/advertising-one.html):

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<title>Advertising One</title>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body>
		<h1>This is my random advertising</h1>
		<p>Please, buy things!</p>
	</body>
</html>
```

File [`/test-assets/iframe-unique-name-4b1c6c/advertising-two.html`](https://w3.org/WAI/content-assets/wcag-act-rules/test-assets/iframe-unique-name-4b1c6c/advertising-two.html):

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<title>Advertising Two</title>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body>
		<h1>This is an other random advertising</h1>
		<p>Never know which content will appear because advertising are managed bu a third party.</p>
		<p>But please, buy more things!</p>
	</body>
</html>
```

File [`/test-assets/iframe-unique-name-4b1c6c/page-two.html`](https://w3.org/WAI/content-assets/wcag-act-rules/test-assets/iframe-unique-name-4b1c6c/page-two.html):

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<title>Page Two</title>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
	</head>
	<body>
		<article>
			Lorem Ipsum...
		</article>
	</body>
</html>
```

</details>

### Passed

#### Passed Example 1

<a class="example-link" title="Passed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4b1c6c/08c5575023e8bf16caabcf01a1c8d40fe6ecaf94.html">Open in a new tab</a>

Two `iframe` elements within the same [document tree][] have the same [accessible name][] (given by the `title` attribute) and embed the same resource.

```html
<html lang="en">
	<iframe title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>

	<iframe title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>
</html>
```

#### Passed Example 2

<a class="example-link" title="Passed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4b1c6c/40e3400d782be79d036ea5119ff231acb7884f21.html">Open in a new tab</a>

Two `iframe` elements within the same [document tree][] have the same [accessible name][] (given by the `title` and `aria-label` attributes) and embed the same resource.

```html
<html lang="en">
	<iframe title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>

	<iframe aria-label="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>
</html>
```

#### Passed Example 3

<a class="example-link" title="Passed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4b1c6c/f8d3c1afa946cf4fc97ef799aad6d9d090de6e8f.html">Open in a new tab</a>

Two `iframe` elements within the same [document tree][] have the same [accessible name][] (given by the `aria-labelledby` attribute and corresponding elements) and embed the same resource.

```html
<html lang="en">
	<div id="desc-for-title">List of Contributors</div>
	<iframe aria-labelledby="desc-for-title" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>

	<div id="desc-for-title1">List of Contributors</div>
	<iframe aria-labelledby="desc-for-title1" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>
</html>
```

#### Passed Example 4

<a class="example-link" title="Passed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4b1c6c/380a799833429075d0e99667d1e0021008aab386.html">Open in a new tab</a>

Two `iframe` elements within the same [document tree][] have the same [accessible name][] (given by the `title` attribute) and embed equivalent resources. Only the navigation options (bread crumbs and local sub menus) differ due to different placement in navigation hierarchy.

```html
<html lang="en">
	<iframe title="Contact us" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>

	<iframe title="Contact us" src="/test-assets/iframe-unique-name-4b1c6c/sub-dir/page-one.html"> </iframe>
</html>
```

#### Passed Example 5

<a class="example-link" title="Passed Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4b1c6c/72d5c95606c82e7570f3496c4cc02512b639aaf3.html">Open in a new tab</a>

Two `iframe` elements within the same [document tree][] have the same [accessible name][] (given by the `title` attribute) and embed equivalent resources.

```html
<html lang="en">
	<iframe title="Contact us" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>

	<iframe title="Contact us" src="/test-assets/iframe-unique-name-4b1c6c/page-one-copy.html"> </iframe>
</html>
```

#### Passed Example 6

<a class="example-link" title="Passed Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4b1c6c/5741786806bd13c329e3681a0e16f4ed326d7fee.html">Open in a new tab</a>

Two `iframe` elements within the same [document tree][] have the same [accessible name][] (given by the `title` attribute) and embed the same resource. `src` attributes only differ due to trailing slashes, but resolves to the same resource after redirects caused by user agent.

```html
<html lang="en">
	<iframe title="Contact us" src="/test-assets/iframe-unique-name-4b1c6c/sub-dir-2/"> </iframe>

	<iframe title="Contact us" src="/test-assets/iframe-unique-name-4b1c6c/sub-dir-2"> </iframe>
</html>
```

#### Passed Example 7

<a class="example-link" title="Passed Example 7" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4b1c6c/1fe7e9b43510e6e25007a67611a5a0ace14c1fd0.html">Open in a new tab</a>

Two `iframe` elements within the same [document tree][] have the same [accessible name][] (given by the `title` attribute) and embed equivalent resources. Resources differ by the amount of information available and/or a differently worded information.

```html
<html lang="en">
	<iframe title="Contact us" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>

	<iframe title="Contact us" src="/test-assets/iframe-unique-name-4b1c6c/page-three-same-as-page-one.html"> </iframe>
</html>
```

#### Passed Example 8

<a class="example-link" title="Passed Example 8" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4b1c6c/0b43ded650d5794255c23f97f2f1a39d9a19be4b.html">Open in a new tab</a>

Two `iframe` elements within the same [document tree][] have the same [accessible name][] (given by the `title` attribute) and embed equivalent resources. Each `iframe` refers to a different url that referenced different advertising content (giving by a third party) but embed resources has equivalent purpose: showing an advertising.

```html
<html lang="en">
	<iframe title="advertising" src="/test-assets/iframe-unique-name-4b1c6c/advertising-one.html"> </iframe>

	<iframe title="advertising" src="/test-assets/iframe-unique-name-4b1c6c/advertising-two.html"> </iframe>
</html>
```

#### Passed Example 9

<a class="example-link" title="Passed Example 9" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4b1c6c/96600720258c71d467d82fda5d6d0037b7780ec3.html">Open in a new tab</a>

All three `iframe` elements have the same [accessible name][]. The second `iframe` (with `id` `"light"` ) is only part of the [light tree][]. When the [shadow tree][] is attached to `host` and flattened, this `iframe` is overwritten and therefore not part of the [flat tree][]. Hence, only the first and third `iframe` are considered by this rule and they both point to the [same resource][].

```html
<iframe id="always" title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>

<div id="host">
	<iframe id="light" title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-two.html"> </iframe>
</div>

<script>
	const host = document.getElementById('host')
	const shadowRoot = host.attachShadow({ mode: 'open' })
	shadowRoot.innerHTML =
		'<iframe id="shadow" title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>'
</script>
```

#### Passed Example 10

<a class="example-link" title="Passed Example 10" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4b1c6c/21d4d4b931e9f06b5c4a008cb1989aa195c107b6.html">Open in a new tab</a>

The [browsing context][] of the `iframe` with `id` `"container"` has the [browsing context][] of the main [document][] as an [ancestor browsing context][]. Hence, they share the same [top-level browsing context][] (namely, the [browsing context][] of the main [document][]) and are part of the same [web page (HTML)][]. Therefore, both `iframe` with `id` `"top-level"` and `"nested"` are considered and, since they embed the same document, the rule passes.

```html
<iframe id="top-level" title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html">
</iframe>

<iframe
	id="container"
	srcdoc="<iframe id='nested' title='List of Contributors' src='/test-assets/iframe-unique-name-4b1c6c/page-one.html'> </iframe>"
></iframe>
```

### Failed

#### Failed Example 1

<a class="example-link" title="Failed Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4b1c6c/c1cc2a71e88c5fec2bc41175d63339404747bf00.html">Open in a new tab</a>

Two `iframe` elements within the same [document tree][] have the same [accessible name][] (given by the `title` attribute) but don't embed equivalent resources.

```html
<html lang="en">
	<iframe title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>

	<iframe title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-two.html"> </iframe>
</html>
```

#### Failed Example 2

<a class="example-link" title="Failed Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4b1c6c/ac65ce86f38bce79d12b797567bb8d85875aab88.html">Open in a new tab</a>

Two `iframe` elements within the same [document tree][] have the same [accessible name][] (given by the `aria-label` attribute) but don't embed equivalent resources.

```html
<html lang="en">
	<iframe aria-label="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>

	<iframe aria-label="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-two.html"> </iframe>
</html>
```

#### Failed Example 3

<a class="example-link" title="Failed Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4b1c6c/4d33680e81b31e47fc46d3b6543cc050e369525b.html">Open in a new tab</a>

Two `iframe` elements within the same [document tree][] have the same [accessible name][] (given by the `title` and `aria-label` attributes) but don't embed equivalent resources.

```html
<html lang="en">
	<iframe title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>

	<iframe aria-label="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-two.html"> </iframe>
</html>
```

#### Failed Example 4

<a class="example-link" title="Failed Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4b1c6c/486f868f7a1f41507a2bc214eb94087a8e906b4c.html">Open in a new tab</a>

The [browsing context][] of the `iframe` with `id` `"container"` has the [browsing context][] of the main [document][] as an [ancestor browsing context][]. Hence, they share the same [top-level browsing context][] (namely, the [browsing context][] of the main [document][]) and are part of the same [web page (HTML)][]. Therefore, both `iframe` with `id` `"top-level"` and `"nested"` are considered and the rule fails.

```html
<iframe id="top-level" title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html">
</iframe>

<iframe
	id="container"
	srcdoc="<iframe id='nested' title='List of Contributors' src='/test-assets/iframe-unique-name-4b1c6c/page-two.html'> </iframe>"
></iframe>
```

### Inapplicable

#### Inapplicable Example 1

<a class="example-link" title="Inapplicable Example 1" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4b1c6c/3482a8bfa5017d02f2fc3d8a01560837b23ee9dd.html">Open in a new tab</a>

There is only one `iframe` element within the [document tree][]. Therefore, there is no set of two or more `iframe` elements with the same [accessible name][] and the rule is inapplicable.

```html
<html lang="en">
	<iframe title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>
</html>
```

#### Inapplicable Example 2

<a class="example-link" title="Inapplicable Example 2" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4b1c6c/bca9ffacff48445c9e4439b0611b4470c370e6ee.html">Open in a new tab</a>

Each of the two `iframe` elements within the [document tree][] has a different [accessible name][] (given by the `title` attribute). Therefore, there is no set of two or more `iframe` elements with the same [accessible name][] and the rule is inapplicable.

```html
<html lang="en">
	<iframe title="List of Contributors to Repository 1" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html">
	</iframe>

	<iframe title="List of Contributors to Repository 2" src="/test-assets/iframe-unique-name-4b1c6c/page-two.html">
	</iframe>
</html>
```

#### Inapplicable Example 3

<a class="example-link" title="Inapplicable Example 3" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4b1c6c/5aae37ddb5b9d51a41f090581101c1e6a4ee1763.html">Open in a new tab</a>

Each of the two `iframe` elements within the [document tree][] has a different [accessible name][] (given by the `aria-label` attribute). Therefore, there is no set of two or more `iframe` elements with the same [accessible name][] and the rule is inapplicable.

```html
<html lang="en">
	<iframe aria-label="List of Contributors to Repository 1" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html">
	</iframe>

	<iframe aria-label="List of Contributors to Repository 2" src="/test-assets/iframe-unique-name-4b1c6c/page-two.html">
	</iframe>
</html>
```

#### Inapplicable Example 4

<a class="example-link" title="Inapplicable Example 4" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4b1c6c/2c65e532caf63bbf142e3bb8310f282366343ebb.html">Open in a new tab</a>

Each of the two `iframe` elements within the [document tree][] has a different [accessible name][] (given by the `aria-labelledby` attribute and matching elements). Therefore, there is no set of two or more `iframe` elements with the same [accessible name][] and the rule is inapplicable.

```html
<html lang="en">
	<div id="desc-for-title">List of Contributors</div>
	<iframe aria-labelledby="desc-for-title" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>

	<div id="desc-for-title1">List of Reviewers</div>
	<iframe aria-labelledby="desc-for-title1" src="/test-assets/iframe-unique-name-4b1c6c/page-two.html"> </iframe>
</html>
```

#### Inapplicable Example 5

<a class="example-link" title="Inapplicable Example 5" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4b1c6c/8d7d93263c8a22831292a0ac15ed4734d6c63b3b.html">Open in a new tab</a>

Both `iframe` elements have the same [accessible name][] (given by the `title` attribute) within the same [document tree][], but one of them is not [included in the accessibility tree][]. Therefore, there is no set of two or more `iframe` elements that are [included in the accessibility tree][] and have the same [accessible name][], and the rule is inapplicable.

```html
<html lang="en">
	<iframe aria-hidden="true" title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html">
	</iframe>

	<iframe title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-two.html"> </iframe>
</html>
```

#### Inapplicable Example 6

<a class="example-link" title="Inapplicable Example 6" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4b1c6c/497ad0044eedbb3a36326f153147a271f1619c71.html">Open in a new tab</a>

The `alt` attribute does not provide an [accessible name][] for `iframe` elements. Therefore, these `iframe` elements do not have an [accessible name][] and the rule is inapplicable.

```html
<html lang="en">
	<iframe alt="Some" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>

	<iframe alt="Some" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>
</html>
```

#### Inapplicable Example 7

<a class="example-link" title="Inapplicable Example 7" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4b1c6c/f686e5e01a34866c49dabed05e5a840873c3c708.html">Open in a new tab</a>

The rule does not apply to `object` elements.

```html
<html lang="en">
	<object title="List of Contributors" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </object>

	<object aria-label="List of Contributors Clone" src="/test-assets/iframe-unique-name-4b1c6c/page-two.html"> </object>
</html>
```

#### Inapplicable Example 8

<a class="example-link" title="Inapplicable Example 8" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4b1c6c/8f35b76114d0dd59fcd78d46c7af113838cc99ea.html">Open in a new tab</a>

These `iframe` elements do not have [accessible names][accessible name].

```html
<html lang="en">
	<iframe src="/test-assets/iframe-unique-name-4b1c6c/page-two.html"> </iframe>

	<iframe src="/test-assets/iframe-unique-name-4b1c6c/page-one.html"> </iframe>
</html>
```

#### Inapplicable Example 9

<a class="example-link" title="Inapplicable Example 9" target="_blank" href="https://w3.org/WAI/content-assets/wcag-act-rules/testcases/4b1c6c/ab3046bbe77ef23bb7b5ce9f79f53230e0a6a7d0.html">Open in a new tab</a>

These `iframe` elements are not [included in the accessibility tree][], because of the `display:none` styling.

```html
<html lang="en">
	<iframe style="display:none;" title="Document One" src="/test-assets/iframe-unique-name-4b1c6c/page-one.html">
	</iframe>

	<iframe style="display:none;" aria-label="Document One" src="/test-assets/iframe-unique-name-4b1c6c/page-two.html">
	</iframe>
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

### Focusable {#focusable}

An element is _focusable_ if one or both of the following are true:

- the element is part of [sequential focus navigation][]; or
- the element has a [tabindex value][] that is not null.

**Exception**: Elements that lose focus and do not regain focus during a period of up to 1 second after gaining focus, without the user interacting with the page the element is on, are not considered _focusable_.

Notes:

- The 1 second time span is an arbitrary limit which is not included in WCAG. Given that scripts can manage the focus state of elements, testing the focusability of an element consistently would be impractical without a time limit.
- The [tabindex value][] of an element is the value of the [tabindex attribute][] parsed using the [rules for parsing integers][]. For the [tabindex value][] to be different from null, it needs to be [parsed][rules for parsing integers] without errors.

### Included in the accessibility tree {#included-in-the-accessibility-tree}

Elements included in the accessibility tree of platform specific accessibility APIs are exposed to assistive technologies. This allows users of assistive technology to access the elements in a way that meets the requirements of the individual user.

The general rules for when elements are included in the accessibility tree are defined in the [core accessibility API mappings](https://www.w3.org/TR/core-aam/). For native markup languages, such as HTML and SVG, additional rules for when elements are included in the accessibility tree can be found in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/) and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/).

For more details, see [examples of included in the accessibility tree][].

[Programmatically hidden](#programmatically-hidden) elements are removed from the accessibility tree. However, some browsers will leave [focusable](#focusable) elements with an `aria-hidden` attribute set to `true` in the accessibility tree. Because they are hidden, these elements are considered **not** included in the accessibility tree. This may cause confusion for users of assistive technologies because they may still be able to interact with these focusable elements using sequential keyboard navigation, even though the element should not be included in the accessibility tree.

### Matching characters {#matching-characters}

A sequence of characters is considered to _match_ another if, after removing leading and trailing [whitespace characters][] and replacing remaining occurrences of one or more whitespace characters with a single space, the two sequences of characters are equal character-by-character, ignoring any differences in letter casing.

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

[accessible name and description computation]: https://www.w3.org/TR/accname 'Accessible Name and Description Computation'
[accessible name]: #accessible-name 'Definition of accessible name'
[ancestor browsing context]: https://html.spec.whatwg.org/#ancestor-browsing-context 'Definition of ancestor browsing context'
[browsing context]: https://html.spec.whatwg.org/#browsing-context 'Definition of browsing context'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[document tree]: https://dom.spec.whatwg.org/#document-trees 'Definition of document tree'
[document]: https://dom.spec.whatwg.org/#concept-document 'Definition of document'
[earl10-schema]: https://www.w3.org/TR/act-rules-format-1.1/#biblio-earl10-schema
[examples of accessible name]: https://act-rules.github.io/pages/examples/accessible-name/
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[light tree]: https://dom.spec.whatwg.org/#concept-light-tree 'Definition of light tree'
[matching]: #matching-characters 'Definition of matching characters'
[outcome property]: https://www.w3.org/TR/EARL10-Schema/#outcome
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[same resource]: #same-resource 'Definition of same resource'
[sc412]: https://www.w3.org/TR/WCAG22/#name-role-value 'Success Criterion 4.1.2: Name, Role, Value'
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[shadow tree]: https://dom.spec.whatwg.org/#shadow-tree 'Definition of shadow tree'
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[test subject]: https://www.w3.org/TR/act-rules-format-1.1/#test-subject
[test target]: https://www.w3.org/TR/act-rules-format/#test-target
[top-level browsing context]: https://html.spec.whatwg.org/#top-level-browsing-context 'Definition of top level browsing context'
[usc412]: https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html 'Understanding Success Criterion 4.1.2: Name, Role, Value'
[web page (html)]: #web-page-html 'Definition of web page (HTML)'
[whitespace characters]: #whitespace 'Definition of Whitespace'
