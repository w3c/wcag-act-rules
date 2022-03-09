---
title: "DEPRECATED — Image filename is accessible name for image"
permalink: /standards-guidelines/act/rules/9eb3f6/
ref: /standards-guidelines/act/rules/9eb3f6/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/rules/9eb3f6/index.md
feedbackmail: public-wcag-act@w3.org
footer: |
  <p><strong>Rule Identifier:</strong> 9eb3f6</p>
  <p><strong>Date:</strong> Updated 28 January 2022</p>
  <p><strong>Authors:</strong> <a href="https://github.com/Jym77">Jean-Yves Moyen</a>. Previous Authors: <a href="https://github.com/brynanders">Bryn Anderson</a>. Contributors: <a href="https://www.w3.org/community/act-r/participants">Participants of the ACT Rules Community Group (CG)</a>.</p>
  <p>This rule was written in the <a href="https://w3.org/community/act-r/">ACT Rules community group</a>. It is written as part of the EU-funded <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>. Implementations are part of the EU funded <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>. It will be reviewed by the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>).</p>
proposed: true
rule_meta:
  id: 9eb3f6
  name: "DEPRECATED — Image filename is accessible name for image"
  rule_type: atomic
  description: |
    This rule checks that image elements that use their source filename as their accessible name do so without loss of information to the user.
  last_modified: 28 January 2022
  scs_tested:
    - handle: Non-text Content
      num: 1.1.1
      level: A
---

## Applicability

This rule applies to any [HTML element][] that is [included in the accessibility tree][] and has a non-empty (`""`) [accessible name][], for which one of the following is true:

- **img**: the element is an `img` with an [accessible name][] that is equivalent to the [filename][] of at least one of the [image sources][] in its [source set][]; or
- **input image**: the element is an `input` element in the [Image Button][] state with an [accessible name][] that is equivalent to the [filename][] specified in its `src` attribute.

When comparing [accessible name][] and [filename][], difference in letter casing, leading and trailing [whitespace][] should be ignored.

## Expectation

Each test target has an [accessible name][] that serves an equivalent purpose to the [non-text content][]. If there are several [image sources][], then the [accessible name][] must accurately describe all of them.

## Assumptions

This rule assumes that the language of each test target can be correctly determined (either programmatically or by analyzing the content).

## Accessibility Support

_There are no major accessibility support issues known for this rule._

## Background

It is fairly common for content management systems (CMS) or other tools to default the alt-text of an image to its filename if no alt-text is provided. However, these names are usually not descriptive (often due to the presence of the file extension). This rule uses this heuristic to pinpoint cases where the [accessible name][] should be looked at by human testers. This rule does not automatically decide in which case a filename is correct (notably, it does not automatically decide whether adding the file extension is acceptable).

### Bibliography

- [Understanding Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html)
- [F30: Failure of Success Criterion 1.1.1 and 1.2.1 due to using text alternatives that are not alternatives (e.g., filenames or placeholder text)](https://www.w3.org/WAI/WCAG21/Techniques/failures/F30)
- [G94: Providing short text alternative for non-text content that serves the same purpose and presents the same information as the non-text content](https://www.w3.org/WAI/WCAG21/Techniques/general/G94)
- [G95: Providing short text alternatives that provide a brief description of the non-text content](https://www.w3.org/WAI/WCAG21/Techniques/general/G95)

## Accessibility Requirements Mapping

<ul class="act-requirements-list">
  <li><details>
    <summary><span>1.1.1 Non-text Content (Level A)</span></summary>
    <ul>
      <li><a href="https://www.w3.org/TR/WCAG21/#non-text-content">Learn more about 1.1.1 Non-text Content</a></li>
      <li><strong>Required for conformance</strong> to WCAG 2.0 and later on level A and higher.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: success criterion is not satisfied</li>
        <li>All <code>passed</code> outcomes: success criterion needs further testing</li>
        <li>An <code>inapplicable</code> outcome: success criterion needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>G94: Providing short text alternative for non-text content that serves the same purpose and presents the same information as the non-text content</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G94">Learn more about technique G94</a></li>
      <li>Not required for conformance to any W3C accessibility recommendation.</li>
      <li>Outcome mapping: <ul>
        <li>Any <code>failed</code> outcomes: technique is not satisfied</li>
        <li>All <code>passed</code> outcomes: technique needs further testing</li>
        <li>An <code>inapplicable</code> outcome: technique needs further testing</li>
      </ul></li>
    </ul>
  </details></li>
  <li><details>
    <summary><span>G95: Providing short text alternatives that provide a brief description of the non-text content</span></summary>
    <ul>
      <li><a href="https://www.w3.org/WAI/WCAG21/Techniques/general/G95">Learn more about technique G95</a></li>
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
- [Language](https://www.w3.org/TR/act-rules-aspects/#input-aspects-text)

## Test Cases

### Passed

#### Passed Example 1

This `img` element has an [accessible name][] equivalent to the filename (ignoring letter casing). The [accessible name][] accurately describes the image.

```html
<html lang="en">
	<img src="/test-assets/image-filename-as-accessible-name-9eb3f6/nyhavn" alt="Nyhavn" />
</html>
```

#### Passed Example 2

This `img` element has an [accessible name][] equivalent to the filename. Because the image is used in a download link, the presence of the file extension is a relevant part of its description.

```html
<html lang="en">
	<a href="/test-assets/image-filename-as-accessible-name-9eb3f6/nyhavn.jpeg" download
		>Download <img src="/test-assets/image-filename-as-accessible-name-9eb3f6/nyhavn.jpeg" alt="nyhavn.jpeg"
	/></a>
</html>
```

#### Passed Example 3

This image button has an [accessible name][] equivalent to the filename. The [accessible name][] accurately describes the purpose of the button.

```html
<html lang="en">
	<input type="image" src="/test-assets/image-filename-as-accessible-name-9eb3f6/login" alt="login" />
</html>
```

#### Passed Example 4

This `img` element has an [accessible name][] equivalent to the filename. The [accessible name][] accurately describes the image in the language of the element (French, same as the language of the page).

```html
<html lang="fr">
	<img src="/test-assets/image-filename-as-accessible-name-9eb3f6/pain" alt="pain" />
</html>
```

#### Passed Example 5

This `img` element has 3 [image sources][] for [device-pixel-ratio][]-based selection, through its `src` and `srcset` attributes. Its [accessible name][] is equivalent to the [filename][] of one of its [image sources][] and accurately describes each of them.

```html
<html lang="en">
	<img
		src="/test-assets/image-filename-as-accessible-name-9eb3f6/nyhavn.jpeg"
		srcset="
			/test-assets/image-filename-as-accessible-name-9eb3f6/nyhavn 1.5x,
			/test-assets/image-filename-as-accessible-name-9eb3f6/paris  2x
		"
		alt="Nyhavn"
	/>
</html>
```

#### Passed Example 6

This `img` element has 3 [image sources][] for [Art direction][]-based selection, through its `src` attribute and its siblings `source` elements with the same `picture` parent. Its [accessible name][] is equivalent to the [filename][] of one of its [image sources][] and accurately describes each of them.

```html
<html lang="en">
	<picture>
		<source media="(min-width: 1000px)" srcset="/test-assets/image-filename-as-accessible-name-9eb3f6/nyhavn" />
		<source media="(min-width: 320px)" srcset="/test-assets/image-filename-as-accessible-name-9eb3f6/paris" />
		<img src="/test-assets/image-filename-as-accessible-name-9eb3f6/nyhavn.jpeg" alt="Nyhavn" />
	</picture>
</html>
```

### Failed

#### Failed Example 1

This `img` element has [accessible name][] matching the image filename (ignoring letter casing). The name does not describe the image.

```html
<html lang="en">
	<img src="/test-assets/image-filename-as-accessible-name-9eb3f6/paris" alt="Paris" />
</html>
```

#### Failed Example 2

This `img` element has [accessible name][] matching the image filename. The name is just a checksum and does not describe the image.

```html
<html lang="en">
	<img
		src="/test-assets/image-filename-as-accessible-name-9eb3f6/94251e110d24a4c2b6e6ce76e7203374"
		alt="94251e110d24a4c2b6e6ce76e7203374"
	/>
</html>
```

#### Failed Example 3

This `img` element has [accessible name][] matching the image filename. The presence of the file extension in the [accessible name][] is confusing and results in the [accessible name][] not accurately describing the image.

```html
<html lang="en">
	<img src="/test-assets/image-filename-as-accessible-name-9eb3f6/nyhavn.jpeg" alt="nyhavn.jpeg" />
</html>
```

#### Failed Example 4

This image button has an [accessible name][] matching the filename. The presence of the file extension in the [accessible name][] is confusing and results in the [accessible name][] not accurately describing the image.

```html
<html lang="en">
	<input type="image" src="/test-assets/image-filename-as-accessible-name-9eb3f6/login.png" alt="login.png" />
</html>
```

#### Failed Example 5

This `img` element has 3 [image sources][] for [Art direction][]-based selection, through its `src` attribute and its siblings `source` elements with the same `picture` parent. Its [accessible name][] is equivalent to the [filename][] of one of its [image sources][] but does not describe the second one (`pain`).

```html
<html lang="en">
	<picture>
		<source media="(min-width: 1000px)" srcset="/test-assets/image-filename-as-accessible-name-9eb3f6/nyhavn" />
		<source media="(min-width: 320px)" srcset="/test-assets/image-filename-as-accessible-name-9eb3f6/pain" />
		<img src="/test-assets/image-filename-as-accessible-name-9eb3f6/nyhavn.jpeg" alt="Nyhavn" />
	</picture>
</html>
```

### Inapplicable

#### Inapplicable Example 1

This `img` element has a [semantic role][] of `presentation`, not `img`.

```html
<html lang="en">
	<img role="presentation" alt="" />
</html>
```

#### Inapplicable Example 2

This `img` element is not [included in the accessibility tree][].

```html
<html lang="en">
	<img style="display:none;" alt="" />
</html>
```

#### Inapplicable Example 3

This `img` element has an [accessible name][] which is not equivalent to the filename.

```html
<html lang="en">
	<img src="/test-assets/image-filename-as-accessible-name-9eb3f6/94251e110d24a4c2b6e6ce76e7203374" alt="Nyhavn" />
</html>
```

#### Inapplicable Example 4

This `img` element has an [accessible name][] which is not equivalent to the filename because the `aria-label` value takes precedence over the `alt` value in the [accessible name][] calculation.

```html
<html lang="en">
	<img
		src="/test-assets/image-filename-as-accessible-name-9eb3f6/94251e110d24a4c2b6e6ce76e7203374"
		alt="94251e110d24a4c2b6e6ce76e7203374"
		aria-label="Nyhavn"
	/>
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

### Explicit Semantic Role {#explicit-role}

The _explicit semantic role_ of an element is determined by its [role attribute][] (if any).

The [role attribute][] takes a list of tokens. The explicit semantic role is the first valid role in this list. The valid roles are all non-abstract roles from [WAI-ARIA Specifications][]. If the element has no [role attribute][], or if it has one with no valid role, then this element has no explicit semantic role.

Other roles may be added as they become available. Not all roles will be supported in all assistive technologies. Testers are encouraged to adjust which roles are allowed according to the [accessibility support base line][]. For the purposes of executing test cases in all rules, it should be assumed that all roles are supported by assistive technologies so that none of the roles fail due to lack of accessibility support.

### Filename {#filename}

A _filename_ is a text string that identifies an electronically stored file. In a URL it is located at the end of the path, after the last slash and before any query strings. For example the `src` attribute specifies a URL path of `src="/foo/bar.jpg?baz "` which contains the filename `bar.jpg`.

### Focusable {#focusable}

Elements that can become the target of keyboard input as described in the [HTML](https://www.w3.org/TR/html) specification of [focusable](https://html.spec.whatwg.org/#focusable-area) and [can be focused](https://html.spec.whatwg.org/#specially-focusable).

### Implicit Semantic Role {#implicit-role}

The _implicit semantic role_ of an element is a pre-defined value given by the host language which depends on the element and its ancestors.

Implicit roles for HTML and SVG, are documented in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/#html-element-role-mappings) and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/#mapping_role_table).

### Included in the accessibility tree {#included-in-the-accessibility-tree}

Elements included in the accessibility tree of platform specific accessibility APIs are exposed to assistive technologies. This allows users of assistive technology to access the elements in a way that meets the requirements of the individual user.

The general rules for when elements are included in the accessibility tree are defined in the [core accessibility API mappings](https://www.w3.org/TR/core-aam/). For native markup languages, such as HTML and SVG, additional rules for when elements are included in the accessibility tree can be found in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/) and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/).

For more details, see [examples of included in the accessibility tree][].

[Programmatically hidden](#programmatically-hidden) elements are removed from the accessibility tree. However, some browsers will leave [focusable](#focusable) elements with an `aria-hidden` attribute set to `true` in the accessibility tree. Because they are hidden, these elements are considered **not** included in the accessibility tree. This may cause confusion for users of assistive technologies because they may still be able to interact with these focusable elements using sequential keyboard navigation, even though the element should not be included in the accessibility tree.

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

An _outcome_ is a conclusion that comes from evaluating an ACT Rule on a [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) or one of its constituent [test target](https://www.w3.org/TR/act-rules-format/#test-target). An outcome can be one of the three following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) meets all expectations
- **Failed:** A [test target](https://www.w3.org/TR/act-rules-format/#test-target) does not meet all expectations

**Note:** A rule has one `passed` or `failed` outcome for every [test target](https://www.w3.org/TR/act-rules-format/#test-target). When there are no test targets the rule has one `inapplicable` outcome. This means that each [test subject](https://www.w3.org/TR/act-rules-format/#test-subject) will have one or more outcomes.

**Note:** Implementations using the [EARL10-Schema](https://www.w3.org/TR/EARL10-Schema/) can express the outcome with the [outcome property](https://www.w3.org/TR/EARL10-Schema/#outcome). In addition to `passed`, `failed` and `inapplicable`, EARL 1.0 also defined an `incomplete` outcome. While this cannot be the outcome of an ACT Rule when applied in its entirety, it often happens that rules are only partially evaluated. For example, when applicability was automated, but the expectations have to be evaluated manually. Such "interim" results can be expressed with the `incomplete` outcome.

### Programmatically Hidden {#programmatically-hidden}

An HTML element is _programmatically hidden_ if either it has a [computed][] CSS property `visibility` whose value is not `visible`; or at least one of the following is true for any of its [inclusive ancestors][] in the [flat tree][]:

- has a `hidden` attribute; or
- has a [computed][] CSS property `display` of `none`; or
- has an `aria-hidden` attribute set to `true`

**Note**: Contrarily to the other conditions, the `visibility` CSS property may be reverted by descendants.

### Semantic Role {#semantic-role}

The _semantic role_ of an element is determined by the first of these cases that applies:

1. **Conflict** If the element is [marked as decorative][], but the element is [included in the accessibility tree][]; or would be [included in the accessibility tree][] when it is not [programmatically hidden][], then its _semantic role_ is its **[implicit role][]**.
1. **Explicit** If the element has an [explicit role][], then its _semantic role_ is its [explicit role][].
1. **Implicit** The _semantic role_ of the element is its [implicit role][].

This definition can be used in expressions such as "semantic `button`" meaning any element with a semantic role of `button`.

### WAI-ARIA specifications {#wai-aria-specifications}

The _WAI ARIA Specifications_ group both the WAI ARIA W3C Recommendation and ARIA modules, namely:

- [Accessible Rich Internet Applications (WAI-ARIA) 1.1](https://www.w3.org/TR/wai-aria-1.1/)
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

{% include_relative _implementation-proposed.md %}

## Changelog

This is the first version of this ACT rule.

[accessibility support base line]: https://www.w3.org/TR/WCAG-EM/#step1c 'Definition of accessibility support base line'
[accessible name and description computation]: https://www.w3.org/TR/accname 'Accessible Name and Description Computation'
[accessible name]: #accessible-name 'Definition of accessible name'
[art direction]: https://html.spec.whatwg.org/multipage/images.html#art-direction 'Illustration of art direction'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[device-pixel-ratio]: https://html.spec.whatwg.org/multipage/images.html#device-pixel-ratio 'Illustration of device-pixel-ratio'
[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[examples of accessible name]: https://act-rules.github.io/pages/examples/accessible-name/
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[explicit role]: #explicit-role 'Definition of Explicit Role'
[filename]: #filename 'Definition of filename'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[focusable]: #focusable 'Definition of Focusable'
[html element]: #namespaced-element
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[image button]: https://html.spec.whatwg.org/multipage/input.html#image-button-state-(type=image) 'Definition of the Image Button state'
[image sources]: https://html.spec.whatwg.org/multipage/images.html#image-source 'Definition of image source'
[implicit role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as Decorative'
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
[non-text content]: https://www.w3.org/TR/WCAG21/#dfn-non-text-content
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.1/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[programmatically hidden]: #programmatically-hidden 'Definition of Programmatically Hidden'
[pure decoration]: https://www.w3.org/TR/WCAG21/#dfn-pure-decoration 'WCAG definition of Pure Decoration'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[semantic role]: #semantic-role 'Definition of semantic role'
[source set]: https://html.spec.whatwg.org/multipage/images.html#source-set 'Definition of source set'
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'
[whitespace]: #whitespace 'Definition of whitespace'
