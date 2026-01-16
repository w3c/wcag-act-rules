---
layout: standalone_resource
title: Examples of Common and Default Language of an Element
permalink: /standards-guidelines/act/rules/terms/element-language/examples/
ref: /standards-guidelines/act/rules/terms/element-language/examples/
lang: en
type_of_guidance: ""
footer: ""
github:
  repository: w3c/wcag-act-rules
  path: content/terms/element-language/examples-of-element-language.md
footer:
  <p>ACT Rules are developed by the <a href="https://www.w3.org/community/act-r/">ACT Rules Community Group</a> and the <a href="https://www.w3.org/groups/tf/wcag-act">Accessibility Conformance Testing (ACT) Task Force</a> of the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>). ACT Rules work was part of the <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>, <a href="https://www.w3.org/WAI/about/projects/wai-guide/">WAI-Guide Project</a>, and <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>, co-funded by the European Commission.</p>  
---

These are examples of the definitions for [most common language][] of an element and [default language][] of a page. The examples presented here are non-normative and not testable. They serve to illustrate some common pitfalls about the definition and to help implementers of ACT rules understand it.

## One Language

This `p` element has a most common language of English because all words in it are English words.

```html
<p>
	The Accessibility Conformance Testing (ACT) Rules Format 1.0 defines a format for writing accessibility test rules.
</p>
```

## Two Languages

This `p` element has a most common language of English because only one word is not English.

```html
<p>The Dutch word "gelukkig" has no equivalent in English.</p>
```

## Ignored Ancestors

This `span` element has a most common language of Dutch because the text in the parent `p` element is not part of the [text inheriting its programmatic language][] from it.

```html
<p>The Dutch word "<span>gelukkig</span>" has no equivalent in English.</p>
```

## Ignored Descendants

This `div` element has a most common language of Dutch because the second `p` element is not one of the [elements inheriting their programmatic language][] from it due to its own `lang` attribute. Hence the English words are ignored when looking for the language of the `div` element.

```html
<div>
	<p>"Hij ging met de kippen op stok"</p>
	<p lang="en">
		This Dutch phrase literally translates into "He went to roost with the chickens", but it means that he went to bed
		early.
	</p>
</div>
```

## Title

This `html` element has a most common language of English. Since it is a [document element][], its `title` attribute is taken into account. Therefore, this page also has a default language of English.

```html
<html title="I love ACT rules"></html>
```

## Referenced Elements

This `div` element has a most common language of English. The only [element inheriting its programmatic language][] from it is the `img` (because the `p` element has a `lang` attribute of its own), but the full accessible name of it is taken into account. Assistive Technologies usually ignore `lang` attributes on elements that are used to compute accessible names.

```html
<div>
	<img src="/test-assets/shared/fireworks.jpg" aria-labelledby="caption" />
	<p lang="en" id="caption" hidden>
		Fireworks over Paris!
	</p>
</div>
```

## No Words

This `div` element has no most common language because it has no words in it. The only [element inheriting its programmatic language][] from it is the `img` which has no text node children and no accessible name.

```html
<div>
	<img src="/test-assets/shared/fireworks.jpg" alt="" />
	<p lang="en">
		I have seen fireworks over Paris!
	</p>
</div>
```

## Ambiguous Words

This `p` element has two most common languages because its words (and the sentence) are both English and French. Therefore, this page has no default language since there is no unique most common language.

```html
<html>
	<p>Paul put dire comment on tape</p>
</html>
```

## Nested Browsing Contexts

This `div` element has a most common language of English. The content of the `iframe` element is taken into account because the `iframe` will be rendered as if it's part of the same page. Note that `iframe` are intended to provide a layer of isolation (for privacy and security reasons), so it is not clear whether the outer `lang` attribute is inherited inside it or not. It is clear, however, that the `span` element will not inherit it and therefore it is not considered when figuring out the most common language of the `div` element.

```html
<div lang="en">
	<iframe srcdoc="
	<p>This is an English paragraph. <span lang="fr">Il contient une phrase française.</span></p>
	"
</div>
```

## Glossary

### Accessible name {#accessible-name}

The _accessible name_ is the programmatically determined name of a user interface element that is [included in the accessibility tree](#included-in-the-accessibility-tree).

The accessible name is calculated using the [accessible name and description computation][].

For native markup languages, such as HTML and SVG, additional information on how to calculate the accessible name can be found in [HTML Accessibility API Mappings 1.0, Accessible Name and Description Computation (working draft)](https://www.w3.org/TR/html-aam/#accessible-name-and-description-computation) and [SVG Accessibility API Mappings, Name and Description (working draft)](https://www.w3.org/TR/svg-aam/#mapping_additional).

For more details, see [examples of accessible name][].

**Note:** As per the [accessible name and description computation][], each element always has an accessible name. When no accessible name is provided, the element will nonetheless be assigned an empty (`""`) one.

**Note:** As per the [accessible name and description computation][], accessible names are [flat string](https://www.w3.org/TR/accname-1.1/#terminology) trimmed of leading and trailing whitespace. Notably, it is not possible for a non-empty accessible name to be composed only of whitespace since these must be trimmed.

### Attribute value {#attribute-value}

The <dfn id="attribute-value:attribute">attribute value</dfn> of a content attribute set on an HTML element is the value that the attribute gets after being parsed and computed according to specifications. It may differ from the value that is actually written in the HTML code due to trimming whitespace or non-digits characters, default values, or case-insensitivity.

Some notable case of attribute value, among others:

- For [enumerated attributes][], the <dfn id="attribute-value:enumerated">attribute value</dfn> is either the state of the attribute, or the keyword that maps to it; even for the default states. Thus `<input type="image" />` has an attribute value of either `Image Button` (the state) or `image` (the keyword mapping to it), both formulations having the same meaning; similarly, "an input element with a `type` _attribute value_ of `Text`" can be either `<input type="text" />`, `<input />` (missing value default), or `<input type="invalid" />` (invalid value default).
- For [boolean attributes][], the <dfn id="attribute-value:boolean">attribute value</dfn> is `true` when the attribute is present and `false` otherwise. Thus `<button disabled>`, `<button disabled="disabled">` and `<button disabled="">` all have a `disabled` _attribute value_ of `true`.
- For attributes whose value is used in a case-insensitive context, the <dfn id="attribute-value:case-insensitive">attribute value</dfn> is the lowercase version of the value written in the HTML code.
- For attributes that accept [numbers][], the <dfn id="attribute-value:number">attribute value</dfn> is the result of parsing the value written in the HTML code according to the rules for parsing this kind of number.
- For attributes that accept sets of tokens, whether [space separated][] or [comma separated][], the <dfn id="attribute-value:tokens-list">attribute value</dfn> is the set of tokens obtained after parsing the set and, depending on the case, converting its items to lowercase (if the set is used in a case-insensitive context).
- For `aria-*` attributes, the <dfn id="attribute-value:aria">attribute value</dfn> is computed as indicated in the [WAI-ARIA specification][] and the [HTML Accessibility API Mappings][html aam].

This list is not exhaustive, and only serves as an illustration for some of the most common cases.

The <dfn id="attribute-value:idl">attribute value</dfn> of an [IDL attribute][] is the value returned on getting it. Note that when an [IDL attribute][] [reflects][reflect] a content attribute, they have the same attribute value.

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

### Known Primary Language Tag {#known-primary-language-tag}

A language tag has a _known primary language tag_ if its [primary language subtag][] exists in the [language subtag registry][] with a [Type field][] whose field-body value is `language`.

A "language tag" is here to be understood as in the first paragraph of the [RFC 5646 language tag syntax][language tag], i.e. a sequence of subtags separated by hyphens, where a subtag is any sequence of alphanumerical characters. [Language tag][] that are not valid according to the stricter [RFC 5646 syntax][language tag] (and ABNF grammar) definition can still have a known primary language tag. User agents and assistive technologies are more lenient in what they accept. This definition is consistent with the behavior of the `:lang()` pseudo-selector as defined by [Selectors Level 3][].

As an example, `de-hello` would be an accepted way to indicate German in current user agents and assistive technologies, despite not being valid according to [RFC 5646 grammar][language tag]. It has a known primary language tag (namely, `de`).

As a consequence of this definition, however, [grandfathered tags][] do not have a known primary language tag.

Subtags, notably the [primary language subtag][], are [case insensitive][]. Comparison with the [language subtag registry][] must be done in a case insensitive way.

### Most Common Language of an Element {#most-common-element-language}

The _most common language of an element_ is determined by counting the number of _words_ in the [text inheriting its programmatic language][] from this element that are part of any of the languages in the [language subtag registry][]. The same word can be part of multiple languages. In case of ties, the element has several most common languages. If there are no words in the [text inheriting its programmatic language][] from the element, then it has no most common language.

For more details, see [examples of most common language][].

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

### Text Inheriting its Programmatic Language from an Element {#text-inheriting-language}

The <dfn id="text-inheriting-language:text">text inheriting its programmatic language</dfn> from an element E is composed of all the following texts:

- **text nodes**: the value of any [text nodes][] that are [visible][] or [included in the accessibility tree][] and children of an element inheriting its programmatic language from E;
- **accessible text**: the [accessible name][] and [accessible description][] of any [element inheriting its programmatic language](#text-inheriting-language:element) from E, and [included in the accessibility tree][];
- **page title**: the value of the [document title][], only if E is a [document][] in a [top-level browsing context][].

An element F is an <dfn id="text-inheriting-language:element">element inheriting its programmatic language</dfn> from an element E if at least one of the following conditions is true (recursively):

- F is E itself (an element always inherits its programmatic language from itself); or
- F does not have a non-empty `lang` attribute, and is the child in the [flat tree][] of an element inheriting its programmatic language from E; or
- F is a [fully active][] [document][] element, has no non-empty `lang` attribute, and its [browsing context container][] is an element inheriting its programmatic language from E.

### Visible {#visible}

Content perceivable through sight.

Content is considered _visible_ if making it fully transparent would result in a difference in the pixels rendered for any part of the document that is currently within the viewport or can be brought into the viewport via scrolling.

[Content is defined in WCAG](https://www.w3.org/TR/WCAG22/#dfn-content).

For more details, see [examples of visible](https://act-rules.github.io/pages/examples/visible/).


[accessible description]: https://www.w3.org/TR/accname-1.1/#dfn-accessible-description 'Definition of Accessible description'
[accessible name and description computation]: https://www.w3.org/TR/accname 'Accessible Name and Description Computation'
[accessible name]: #accessible-name 'Definition of Accessible Name'
[attribute value]: #attribute-value 'Definition of Attribute Value'
[boolean attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes 'HTML Specification of Boolean Attribute'
[browsing context container]: https://html.spec.whatwg.org/#browsing-context-container 'HTML Definition of Browsing Context Container'
[case insensitive]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.1.1
[comma separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#comma-separated-tokens 'HTML Specification of Comma Separated Tokens'
[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[content type]: https://dom.spec.whatwg.org/#concept-document-content-type 'DOM definition of Content Type'
[document title]: https://html.spec.whatwg.org/multipage/dom.html#document.title 'HTML document title, as of 2020/06/05'
[document]: https://dom.spec.whatwg.org/#document-element 'DOM definition of Document Element'
[earl10-schema]: https://www.w3.org/TR/act-rules-format-1.1/#biblio-earl10-schema
[element inheriting its programmatic language]: #text-inheriting-language:element 'Definition of Element Inheriting its Programmatic Language from an Element'
[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[enumerated attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute 'HTML Specification of Enumerated Attribute'
[examples of accessible name]: https://act-rules.github.io/pages/examples/accessible-name/
[examples of included in the accessibility tree]: https://act-rules.github.io/pages/examples/included-in-the-accessibility-tree/
[examples of most common language]: https://act-rules.github.io/pages/examples/element-language/
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS Scoping definition of Flat tree, working draft'
[fully active]: https://html.spec.whatwg.org/#fully-active 'HTML definition of Fully Active Document'
[grandfathered tags]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.2.8
[html aam]: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings 'Specification of HTML attributes value mapping to ARIA states and properties'
[html element]: #namespaced-element
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'
[human language]: https://www.w3.org/TR/WCAG22/#dfn-human-language-s 'WCAG definition of Human Language'
[idl attribute]: https://heycam.github.io/webidl/#idl-attributes "Definition of Web IDL Attribute (Editor's Draft)"
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'
[inclusive descendant]: https://dom.spec.whatwg.org/#concept-tree-inclusive-descendant 'DOM definition of Inclusive Descendant'
[iso 639.2]: https://www.loc.gov/standards/iso639-2/php/code_list.php 'ISO 639.2: Codes for the Representation of Names of Languages'
[known primary language tag]: #known-primary-language-tag 'Definition of Known Primary Language Tag'
[language subtag registry]: http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
[language tag]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.1
[most common language]: #most-common-element-language 'Definition of Common Language of an Element'
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
[numbers]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#numbers 'HTML Specification of Number Parsing'
[outcome property]: https://www.w3.org/TR/EARL10-Schema/#outcome
[primary language subtag]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.2.1
[primary language]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.2.1 'Definition of primary language subtag'
[reflect]: https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes 'HTML specification of Reflecting Content Attributes in IDL Attributes'
[rfc 5646]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.1
[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[sc312]: https://www.w3.org/TR/WCAG22/#language-of-parts 'Success Criterion 3.1.2 Language of Parts'
[selectors level 3]: https://drafts.csswg.org/selectors-3/#lang-pseudo
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[space separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens 'HTML Specification of Space Separated Tokens'
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value
[test subject]: https://www.w3.org/TR/act-rules-format-1.1/#test-subject
[test target]: https://www.w3.org/TR/act-rules-format/#test-target
[text inheriting its programmatic language]: #text-inheriting-language 'Definition of Text Inheriting its Programmatic Language from an Element'
[text nodes]: https://dom.spec.whatwg.org/#text 'DOM text, as of 2020/06/05'
[top-level browsing context]: https://html.spec.whatwg.org/#top-level-browsing-context 'HTML top-level browsing context, as of 2020/06/05'
[type field]: https://www.rfc-editor.org/rfc/rfc5646.html#section-3.1.3
[usc312]: https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html 'Understanding Success Criterion 3.1.2: Language of Parts'
[visible]: #visible 'Definition of Visible'
[wai-aria specification]: https://www.w3.org/TR/wai-aria-1.2/#propcharacteristic_value 'WAI-ARIA Specification of States and Properties Value'
[default language]: https://act-rules.github.io/glossary/#default-page-language 'Definition of Default Page Language'
[document element]: https://dom.spec.whatwg.org/#document-element 'DOM definition of Document Element'
[element inheriting its programmatic language]: #text-inheriting-language 'Definition of Element Inheriting its Programmatic Language From an Element'
[elements inheriting their programmatic language]: #text-inheriting-language 'Definition of Elements Inheriting their Programmatic Language from an Element'
[text inheriting its programmatic language]: #text-inheriting-language 'Definition of Text Inheriting its Programmatic Language from an Element'
