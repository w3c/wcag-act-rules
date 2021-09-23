---
title: "Links with identical accessible names and context serve equivalent purpose"
permalink: /standards-guidelines/act/rules/links-with-identical-names-and-context-serve-equivalent-purpose-fd3a94/
ref: /standards-guidelines/act/rules/links-with-identical-names-and-context-serve-equivalent-purpose-fd3a94/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/links-with-identical-names-and-context-serve-equivalent-purpose-fd3a94.md
footer: |
  <p><strong>Date:</strong> Updated August 24th, 2021</p>
  <p><strong>Authors:</strong> <a href="https://github.com/carlosapaduarte">Carlos Duarte</a>. <em>Previous Authors:</em> <a href="https://github.com/annethyme">Anne Thyme Nørregaard</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules community group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>.</p>
proposed: true
rule_meta:
  id: fd3a94
  name: "Links with identical accessible names and context serve equivalent purpose"
  rule_type: atomic
  description: |
    This rule checks that links with identical accessible names and context resolve to the same or equivalent resources.
  accessibility_requirements:
    'wcag20:2.4.4':
      forConformance: true
      failed: not satisfied
      passed: further testing needed
      inapplicable: further testing needed
    'wcag20:2.4.9':
      forConformance: true
      failed: not satisfied
      passed: further testing needed
      inapplicable: further testing needed
  input_aspects:
    - handle: DOM Tree
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom
    - handle: CSS Styling
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-css
    - handle: Language
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-text
  last_modified: August 24th, 2021
  scs_tested:
    - handle: Link Purpose (In Context)
      num: 2.4.4
      level: A
    - handle: Link Purpose (Link Only)
      num: 2.4.9
      level: AAA
---

## Applicability

This rule applies to any set of two or more [HTML or SVG elements][] which

- have the [semantic role][] of `link`, or a role that inherits from the `link` role; and
- are in the same [web page (HTML)][]; and
- are [included in the accessibility tree][included in the accessibility tree]; and
- have [matching][] [accessible names][accessible name] that are not empty (`""`); and
- have the same [programmatically determined link context][].

**Note:** The test target for this rule is the full set of link elements that share the same [matching][] [accessible name][] and [programmatically determined link context][].

## Expectation

When followed, the links in each set of target elements resolve to the [same resource][] or to [equivalent resources](#equivalent-resource).

**Note**: Resolving the links includes potential redirects, if the redirects happen instantly.

## Assumptions

- This rule assumes that the purpose of the links with identical [accessible names][accessible name] and [context][programmatically determined link context] would not be ambiguous to users in general, which is the exception mentioned in [Success Criterion 2.4.4 Link Purpose (In Context)][sc244]. If the links are ambiguous to users in general, users of assistive technologies are not at a disadvantage when viewing the links, which makes it more of a general user experience concern than an accessibility issue.
- This rule assumes that, within the context of the test subject, the description provided by the [accessible name][] of a link can only accurately describe one resource (notably, homonyms alone are not used as link names). Thus, if two or more links have the same [accessible name][] but resolve to different resources, at least one of them does not describe its purpose.
- This rule assumes that the language of each test target can be correctly determined (either programmatically or by analyzing the content), and sufficiently understood.
- This rule assumes that assistive technologies are exposing all links on the page in the same way no matter which [document tree](https://dom.spec.whatwg.org/#document-trees) they are in. If an assistive technology requires the user to "enter" an `iframe` or a [shadow tree][] before exposing its links, then it is possible for two links to have identical name and context but resolve to different resources without failing [Success Criterion 2.4.4 Link Purpose (In Context)][sc244] (if said links are in separate [documents][document] or [shadow trees][shadow tree])

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

This rule is designed specifically for [2.4.4 Link Purpose (In Context)][sc244], which requires the purpose to be clear within the context of a link. Because links that do not have this, also are not clear without that context, this rule maps to [2.4.9 Link Purpose (Link only)][sc249] as well. In order to adequately test the [expectation](#expectation), some of the passed examples do not satisfy [2.4.9 Link Purpose (Link only)][sc249].

- [Understanding Success Criterion 2.4.4: Link Purpose (In Context)](https://www.w3.org/WAI/WCAG21/Understanding/link-purpose-in-context.html)
- [HTML Specification - URL parsing](https://html.spec.whatwg.org/#resolving-urls)

## Test Cases

### Passed

#### Passed Example 1

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

These two HTML `a` elements have the same [accessible name][] and [context][programmatically determined link context], and resolve to the [same resource][] after an instant redirect.

```html
<html lang="en">
	<p>
		Learn more (<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html">About us</a
		>) and get in touch (<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/redirect.html"
			>About us</a
		>)
	</p>
</html>
```

#### Passed Example 3

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

### Failed

#### Failed Example 1

These two HTML `a` elements have the same [accessible name][] and [context][programmatically determined link context] but go to different resources.

```html
<html lang="en">
	<p>
		We are on social media:
		<a href="https://act-rules.github.io/">ACT rules</a>
		<a href="https://www.w3.org/community/act-r/">ACT rules</a>
	</p>
</html>
```

#### Failed Example 2

These two HTML `a` elements have the same [accessible name][] and [context][programmatically determined link context]. They link to web pages that are similar, but have different information in their content.

```html
<html lang="en">
	<p>
		Learn more (<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html"
			>Contact us</a
		>) and get in touch (
		<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/admissions/contact.html"
			>Contact us</a
		>)
	</p>
</html>
```

#### Failed Example 3

These two HTML `span` elements have an [explicit role][] of link, same [accessible name][] and [context][programmatically determined link context], but link to resources that offer different content.

```html
<html lang="en">
	<p>
		Learn more (<span
			role="link"
			tabindex="0"
			onclick="location='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/about/contact.html'"
			>Contact us</span
		>) and get in touch (<span
			role="link"
			tabindex="0"
			onclick="location='/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/admissions/contact.html'"
			>Contact us</span
		>)
	</p>
</html>
```

#### Failed Example 4

These two SVG `a` elements have the same [accessible name][] and [context][programmatically determined link context] but link to different resources.

```html
<html lang="en">
	<p>
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
	</p>
</html>
```

#### Failed Example 5

These two HTML `a` elements with the same [accessible name][] and [context][programmatically determined link context] resolve to the [same resource][] after redirect, but the redirect is not instant.

```html
<html lang="en">
	<p>
		Learn more (<a href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/index.html"
			>Contact us</a
		>) and get in touch (<a
			href="/test-assets/links-with-identical-names-serve-equivalent-purpose-b20e66/redirect1.html"
			>Contact us</a
		>)
	</p>
</html>
```

### Inapplicable

#### Inapplicable Example 1

These HTML `a` and `area` elements do not have a role of `link`.

```html
<html lang="en">
	<a>Link text</a>
	<area aria-label="Link text" />
</html>
```

#### Inapplicable Example 2

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

Elements that can become the target of keyboard input as described in the [HTML](https://www.w3.org/TR/html) specification of [focusable](https://html.spec.whatwg.org/#focusable-area) and [can be focused](https://html.spec.whatwg.org/#specially-focusable).

### Hidden State {#hidden-state}

An HTML element's _hidden state_ is "true" if at least one of the following is true for itself or any of its [ancestors][] in the [flat tree][]:

- has a `hidden` attribute; or
- has a [computed][] CSS property `display` of `none`; or
- has a [computed][] CSS property `visibility` of `hidden`; or
- has an `aria-hidden` attribute set to `true`

In any other case, the element's _hidden state_ is "false".

### Implicit Semantic Role {#implicit-role}

The _implicit semantic role_ of an element is a pre-defined value given by the host language which depends on the element and its ancestors.

Implicit roles for HTML and SVG, are documented in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/#html-element-role-mappings) and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/#mapping_role_table).

### Included in the accessibility tree {#included-in-the-accessibility-tree}

Elements included in the accessibility tree of platform specific accessibility APIs. Elements in the accessibility tree are exposed to assistive technologies, allowing users to interact with the elements in a way that meet the requirements of the individual user.

The general rules for when elements are included in the accessibility tree are defined in the [core accessibility API mappings](https://www.w3.org/TR/core-aam/). For native markup languages, such as HTML and SVG, additional rules for when elements are included in the accessibility tree can be found in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/) and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/).

For more details, see [examples of included in the accessibility tree][].

**Note:** Users of assistive technologies might still be able to interact with elements that are not included in the accessibility tree. An example of this is a [focusable](#focusable) element with an `aria-hidden` attribute with a value of `true`. Such an element could still be interacted using sequential keyboard navigation regardless of the assistive technologies used, even though the element would not be included in the accessibility tree.
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/

### Marked as decorative {#marked-as-decorative}

An element is _marked as decorative_ if one or more of the following conditions is true:

- it has an [explicit role][] of `none` or `presentation`; or
- it is an `img` element with an `alt` attribute whose value is the empty string (`alt=""`), and with no [explicit role][].

Elements are marked as decorative as a way to convey the intention of the author that they are [pure decoration][]. It is different from the element actually being [pure decoration][] as authors may make mistakes. It is different from the element being effectively ignored by assistive technologies as rules such as [presentational roles conflict resolution][] may overwrite this intention.

Elements can also be ignored by assistive technologies if their [hidden state][] is true. This is different from marking the element as decorative and does not convey the same intention. Notably, the [hidden state][] of an element may change as users interact with the page (showing and hiding elements) while being marked as decorative should stay the same through all states of the page.

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

### Programmatically Determined Link Context {#programmatically-determined-link-context}

The _programmatically determined context_ of a link (or _programmatically determined link context_) is the set of all elements that are [included in the accessibility tree][], and have one or more of the following relationships to the link:

- being an [ancestor][] of the link in the [flat tree][] with a [semantic role][] of `listitem`; or
- being the closest [ancestor][] of the link in the [flat tree][] that is a `p` element; or
- being the closest [ancestor][] of the link in the [flat tree][] that has a [semantic role][] of `cell` or `gridcell`; or
- being a header cell [assigned][] to the closest [ancestor][] of the link in the [flat tree][] that has a [semantic role][] of `cell` or `gridcell`; or
- being referenced by an `aria-describedby` attribute of the link.

This definition is based on the [WCAG definition of programmatically determined link context](https://www.w3.org/TR/WCAG21/#dfn-programmatically-determined-link-context).

This definition assumes that the HTML document with the link is a document using HTML according to the specification.

### Same resource {#same-resource}

Two or more resources can be the _same resource_ even though the URLs for them are different. This can be due to URL parsing, server settings, redirects and DNS aliasing.

If the [parsed URLs](https://html.spec.whatwg.org/#resolving-urls) for two resources are identical, the resources are the same resource.

Depending on the server, URLs can either be case-sensitive or case-insensitive, meaning that `<a href="page1.html">` and `<a href="Page1.html">` lead to either the same or two different pages.

Fully parsed URLs can be different, but still lead to the same resource after making the HTTP request, due to redirects and DNS aliasing. For example, these URLs are all fully normalized: http://example.com/, http://www.example.com/, https://www.example.com/. The server can however be configured to serve the same site for http and https, and the same site for example.com and www.example.com. This is common, but not guaranteed.

Some types of redirects are also caused by user agents, e.g. ensuring that http://example.com/ and http://example.com resolve to the same resource.

On the other hand, identical relative URLs do not necessarily resolve to the same resource, even if they are in the same [web page (HTML)](#web-page-html). This happen because external content can be included through `iframe` and URLs in or out of it will resolve relatively to different base URLs.

### Semantic Role {#semantic-role}

The _semantic role_ of an element is determined by the first of these cases that applies:

1. **Conflict** If the element is [marked as decorative][], but the element is [included in the accessibility tree][]; or would be [included in the accessibility tree][] when its [hidden state][] is false, then its _semantic role_ is its **[implicit role][]**.
1. **Explicit** If the element has an [explicit role][], then its _semantic role_ is its [explicit role][].
1. **Implicit** The _semantic role_ of the element is its [implicit role][].

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

{% include_relative implementations/fd3a94.md %}

## Changelog

This is the first version of this ACT rule.

[accessibility support base line]: https://www.w3.org/TR/WCAG-EM/#step1c 'Definition of accessibility support base line'
[accessible name and description computation]: https://www.w3.org/TR/accname 'Accessible Name and Description Computation'
[accessible name]: #accessible-name 'Definition of accessible name'
[ancestor]: https://dom.spec.whatwg.org/#concept-tree-ancestor
[ancestors]: https://dom.spec.whatwg.org/#concept-tree-ancestor 'Definition Ancestor'
[assigned]: https://html.spec.whatwg.org/multipage/tables.html#algorithm-for-assigning-header-cells
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[document]: https://dom.spec.whatwg.org/#concept-document 'Definition of document'
[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[examples of accessible name]: https://act-rules.github.io/pages/examples/accessible-name/
[explicit role]: #explicit-role 'Definition of explicit role'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focusable]: #focusable 'Definition of Focusable'
[hidden state]: #hidden-state 'Definition of Hidden State'
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[html or svg elements]: #namespaced-element
[implicit role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as Decorative'
[matching]: #matching-characters 'Definition of matching characters'
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[programmatically determined link context]: #programmatically-determined-link-context 'Definition of programmatically determined link context'
[pure decoration]: https://www.w3.org/TR/WCAG21/#dfn-pure-decoration 'WCAG definition of Pure Decoration'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[same resource]: #same-resource 'Definition of same resource'
[sc244]: https://www.w3.org/TR/WCAG21/#link-purpose-in-context 'Success Criterion 2.4.4
[sc249]: https://www.w3.org/TR/WCAG21/#link-purpose-link-only 'Success Criterion 2.4.9
[semantic role]: #semantic-role 'Definition of semantic role'
[shadow tree]: https://dom.spec.whatwg.org/#shadow-tree 'Definition of shadow tree'
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
[web page (html)]: #web-page-html 'Definition of web page (HTML)'
