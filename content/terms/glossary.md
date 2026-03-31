---
layout: standalone_resource
title: "ACT Rules Glossary"
permalink: /standards-guidelines/act/rules/glossary/
ref: /standards-guidelines/act/rules/glossary/
lang: en
type_of_guidance: ""
feedbackmail: public-wcag-act@w3.org
footer: ""
github:
  repository: w3c/wcag-act-rules
  path: content/terms/glossary.md
---

{::nomarkdown}
{% include box.html type="start" title="Glossary" class="" %}
{:/}

## Accessible Name {#accessible-name}

The _accessible name_ is the programmatically determined name of a user interface element that is [included in the accessibility tree](#included-in-the-accessibility-tree).

The accessible name is calculated using the [accessible name and description computation][].

For native markup languages, such as HTML and SVG, additional information on how to calculate the accessible name can be found in [HTML Accessibility API Mappings 1.0, Accessible Name and Description Computation (working draft)](https://www.w3.org/TR/html-aam/#accessible-name-and-description-computation) and [SVG Accessibility API Mappings, Name and Description (working draft)](https://www.w3.org/TR/svg-aam/#mapping_additional).

For more details, see [examples of accessible name][].

**Note:** As per the [accessible name and description computation][], each element always has an accessible name. When no accessible name is provided, the element will nonetheless be assigned an empty (`""`) one.

**Note:** As per the [accessible name and description computation][], accessible names are [flat string](https://www.w3.org/TR/accname-1.1/#terminology) trimmed of leading and trailing whitespace. Notably, it is not possible for a non-empty accessible name to be composed only of whitespace since these must be trimmed.

#### Accessibility Support

- Because the [accessible name and description computation][] is not clear about which whitespace are considered, browsers behave differently when trimming and flattening the accessible name. For example, some browsers completely trim non-breaking spaces while some keep them in the accessible name.
- There exists a popular browser which does not perform the same trimming and flattening depending whether the accessible name comes from content, an `aria-label` attribute, or an `alt` attribute.
- There exists a popular browser which assign no accessible name (`null`) when none is provided, instead of assigned an empty accessible name (`""`).
- The [accessible name and description computation][] suggest that if an `aria-labelledby` attribute refers to an existing but empty element, the computation should stop and return an empty name without defaulting to the next steps. Several user agents and assistive technologies chose to use the next step in the computation in this case.

[accessible name and description computation]: https://www.w3.org/TR/accname 'Accessible Name and Description Computation'
[examples of accessible name]: https://www.w3.org/WAI/standards-guidelines/act/rules/terms/accessible-name/examples/

### Used in rules
- [Text has enhanced contrast](/standards-guidelines/act/rules/09o5cg/proposed/)
- [Image has non-empty accessible name](/standards-guidelines/act/rules/23a2a8/proposed/)
- [Visible label is part of accessible name](/standards-guidelines/act/rules/2ee8b8/proposed/)
- [Summary element has non-empty accessible name](/standards-guidelines/act/rules/2t702h/proposed/)
- [Element with presentational children has no focusable content](/standards-guidelines/act/rules/307n5z/proposed/)
- [Error message describes invalid form field value](/standards-guidelines/act/rules/36b590/proposed/)
- [Iframe elements with identical accessible names have equivalent purpose](/standards-guidelines/act/rules/4b1c6c/proposed/)
- [Audio or video element that plays automatically has a control mechanism](/standards-guidelines/act/rules/4c31df/proposed/)
- [Image button has non-empty accessible name](/standards-guidelines/act/rules/59796f/proposed/)
- [Link in context is descriptive](/standards-guidelines/act/rules/5effbb/proposed/)
- [SVG element with explicit role has non-empty accessible name](/standards-guidelines/act/rules/7d6734/proposed/)
- [Object element rendering non-text content has non-empty accessible name](/standards-guidelines/act/rules/8fc3b6/proposed/)
- [Button has non-empty accessible name](/standards-guidelines/act/rules/97a4e1/proposed/)
- [Content has alternative for visual reference](/standards-guidelines/act/rules/9bd38c/proposed/)
- [Image filename is accessible name for image](/standards-guidelines/act/rules/9eb3f6/proposed/)
- [Text has minimum contrast](/standards-guidelines/act/rules/afw4f7/proposed/)
- [Link is descriptive](/standards-guidelines/act/rules/aizyf1/proposed/)
- [Links with identical accessible names have equivalent purpose](/standards-guidelines/act/rules/b20e66/proposed/)
- [Heading is descriptive](/standards-guidelines/act/rules/b49b2e/proposed/)
- [Link has non-empty accessible name](/standards-guidelines/act/rules/c487ae/proposed/)
- [Iframe element has non-empty accessible name](/standards-guidelines/act/rules/cae760/proposed/)
- [Form field label is descriptive](/standards-guidelines/act/rules/cc0f0a/proposed/)
- [Element with lang attribute has valid language tag](/standards-guidelines/act/rules/de46e4/proposed/)
- [Form field has non-empty accessible name](/standards-guidelines/act/rules/e086e5/proposed/)
- [Image not in the accessibility tree is decorative](/standards-guidelines/act/rules/e88epe/proposed/)
- [Links with identical accessible names and same context serve equivalent purpose](/standards-guidelines/act/rules/fd3a94/proposed/)
- [Heading has non-empty accessible name](/standards-guidelines/act/rules/ffd0e9/proposed/)
- [Menuitem has non-empty accessible name](/standards-guidelines/act/rules/m6b1q3/proposed/)
- [HTML element language subtag matches language](/standards-guidelines/act/rules/off6ek/proposed/)
- [Image accessible name is descriptive](/standards-guidelines/act/rules/qt1vmo/proposed/)
- [HTML page language subtag matches default language](/standards-guidelines/act/rules/ucwvc8/proposed/)

## Appropriate field for the form control {#appropriate-field-for-the-form-control}

The field name of the form control is _appropriate_ if it is listed in the autocomplete fields table from the HTML 5.2 specification as applying to the specified control group. [https://html.spec.whatwg.org/#inappropriate-for-the-control](https://html.spec.whatwg.org/#inappropriate-for-the-control).

### Used in rules
- [Autocomplete attribute has valid value](/standards-guidelines/act/rules/73f2c2/proposed/)

## Attribute value {#attribute-value}

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

[boolean attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#boolean-attributes 'HTML Specification of Boolean Attribute'
[comma separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#comma-separated-tokens 'HTML Specification of Comma Separated Tokens'
[enumerated attributes]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute 'HTML Specification of Enumerated Attribute'
[idl attribute]: https://heycam.github.io/webidl/#idl-attributes "Definition of Web IDL Attribute (Editor's Draft)"
[html aam]: https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings 'Specification of HTML attributes value mapping to ARIA states and properties'
[numbers]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#numbers 'HTML Specification of Number Parsing'
[reflect]: https://html.spec.whatwg.org/multipage/common-dom-interfaces.html#reflecting-content-attributes-in-idl-attributes 'HTML specification of Reflecting Content Attributes in IDL Attributes'
[space separated]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens 'HTML Specification of Space Separated Tokens'
[wai-aria specification]: https://www.w3.org/TR/wai-aria-1.2/#propcharacteristic_value 'WAI-ARIA Specification of States and Properties Value'

### Used in rules
- [Text has enhanced contrast](/standards-guidelines/act/rules/09o5cg/proposed/)
- [Scrollable content can be reached with sequential focus navigation](/standards-guidelines/act/rules/0ssw9k/proposed/)
- [HTML images contain no text](/standards-guidelines/act/rules/0va7u6/proposed/)
- [Element with presentational children has no focusable content](/standards-guidelines/act/rules/307n5z/proposed/)
- [Audio or video element that plays automatically has a control mechanism](/standards-guidelines/act/rules/4c31df/proposed/)
- [Image button has non-empty accessible name](/standards-guidelines/act/rules/59796f/proposed/)
- [Zoomed text node is not clipped with CSS overflow](/standards-guidelines/act/rules/59br37/proposed/)
- [ARIA state or property is permitted](/standards-guidelines/act/rules/5c01ea/proposed/)
- [ARIA state or property has valid value](/standards-guidelines/act/rules/6a7281/proposed/)
- [Element with aria-hidden has no content in sequential focus navigation](/standards-guidelines/act/rules/6cfa84/proposed/)
- [Autocomplete attribute has valid value](/standards-guidelines/act/rules/73f2c2/proposed/)
- [Audio or video element avoids automatically playing audio](/standards-guidelines/act/rules/80f0bf/proposed/)
- [Button has non-empty accessible name](/standards-guidelines/act/rules/97a4e1/proposed/)
- [Headers attribute specified on a cell refers to cells in the same table element](/standards-guidelines/act/rules/a25f45/proposed/)
- [Audio or video element that plays automatically has no audio that lasts more than 3 seconds](/standards-guidelines/act/rules/aaa1bf/proposed/)
- [Video element visual-only content has description track](/standards-guidelines/act/rules/ac7dc6/proposed/)
- [Text has minimum contrast](/standards-guidelines/act/rules/afw4f7/proposed/)
- [Iframe with interactive elements is not excluded from tab-order](/standards-guidelines/act/rules/akn7bn/proposed/)
- [Meta viewport allows for zoom](/standards-guidelines/act/rules/b4f0c3/proposed/)
- [HTML page has lang attribute](/standards-guidelines/act/rules/b5c3f8/proposed/)
- [ARIA required owned elements](/standards-guidelines/act/rules/bc4a75/proposed/)
- [Meta element has no refresh delay](/standards-guidelines/act/rules/bc659a/proposed/)
- [Meta element has no refresh delay (no exception)](/standards-guidelines/act/rules/bisz58/proposed/)
- [Link has non-empty accessible name](/standards-guidelines/act/rules/c487ae/proposed/)
- [Iframe element has non-empty accessible name](/standards-guidelines/act/rules/cae760/proposed/)
- [Form field label is descriptive](/standards-guidelines/act/rules/cc0f0a/proposed/)
- [Element with lang attribute has valid language tag](/standards-guidelines/act/rules/de46e4/proposed/)
- [Form field has non-empty accessible name](/standards-guidelines/act/rules/e086e5/proposed/)
- [Audio element content has text alternative](/standards-guidelines/act/rules/e7aa44/proposed/)
- [Video element visual content has description track](/standards-guidelines/act/rules/f196ce/proposed/)
- [ARIA required ID references exist](/standards-guidelines/act/rules/in6db8/proposed/)
- [HTML element language subtag matches language](/standards-guidelines/act/rules/off6ek/proposed/)
- [HTML page language subtag matches default language](/standards-guidelines/act/rules/ucwvc8/proposed/)

## Audio output {#audio-output}

This [test aspect](https://www.w3.org/TR/act-rules-format/#input-aspects) includes all auditory data output from the web page into an audio channel.

### Used in rules
- [Video element auditory content has captions](/standards-guidelines/act/rules/f51b46/proposed/)

## Background Colors Of Text {#background-colors-of-text}

The colors of all pixels, excluding the [foreground colors](#foreground-colors-of-text) pixels, in the [bounding box](#bounding-box-around-text) around a [visible](#visible) character in a [text node](https://dom.spec.whatwg.org/#text).

### Used in rules
- [Text has enhanced contrast](/standards-guidelines/act/rules/09o5cg/proposed/)
- [Text has minimum contrast](/standards-guidelines/act/rules/afw4f7/proposed/)

## Blocked event {#blocked-event}

A _blocked event_ makes no [changes to the content][changes in content] of the [web page][].

[changes in content]: #changes-in-content 'Definition of changes in content'
[web page]: #web-page-html 'Definition of web page'

### Used in rules
- [Device motion based changes to the content can be disabled](/standards-guidelines/act/rules/c249d5/proposed/)
- [No keyboard shortcut uses only printable characters](/standards-guidelines/act/rules/ffbc54/proposed/)

## Block of content {#block-of-content}

A _block of content_ in an [HTML web page][] is a set of nodes from that page for which all the following are true:

- **content**: there is at least one node which is [perceivable content][] in the block; and
- **continuity**: if two nodes are in the block, then any node between them (in tree order) is also in the block; and
- **downward closure**: if a node is in the block, then all its descendants are also in the block; and
- **parent closure**: if all children of a node are in the block, then this node is also in the block.

#### Assumptions

This definition assumes that the rendering order of nodes on a page does not greatly differ from the DOM tree order. Otherwise, blocks of content as defined here may be different from what is visually perceived as "content in a close relationship".

[html web page]: #web-page-html 'Definition of Web Page'
[perceivable content]: #perceivable-content 'Definition of Perceivable Content'

### Used in rules
- [Document has heading for non-repeated content](/standards-guidelines/act/rules/047fe0/proposed/)
- [Block of repeated content is collapsible](/standards-guidelines/act/rules/3e12e1/proposed/)
- [Document has a landmark with non-repeated content](/standards-guidelines/act/rules/b40fd1/proposed/)
- [Bypass Blocks of Repeated Content](/standards-guidelines/act/rules/cf77f2/proposed/)
- [Document has an instrument to move focus to non-repeated content](/standards-guidelines/act/rules/ye5d6e/proposed/)

## Block of repeated content {#block-of-repeated-content}

A [block of content][] B, inside an [HTML web page][] P, is a _block of repeated content_ if both the following are true:

- **distance 1**: there exist an [instrument][] in P which leads the user to another [HTML web page][] P' whose URL has a different [host][], [port][] (including [default port][] for [special URL][]), or [path][]; and
- **repeated**: there exist a [block of content][] in P' which is [equivalent][equivalent resource] to B.

#### Background

This definition only considers pages at "distance 1" from the current page. The instrument leading there is usually a link, sometimes a button. In addition, P' can be any page and is not restricted, for example, to pages of the same website.

The blocks of repeated content are not uniquely defined. For example `<div><span id="repeated-1"></span><span id="repeated-2"></span><span id="not-repeated"></span></div>` can be considered to have two blocks of repeated content (each of the first two `span`) or one (both the first two `span` together).

[block of content]: #block-of-content 'Definition of Block of Content'
[default port]: https://url.spec.whatwg.org/#default-port 'URL specification of Default Port'
[equivalent resource]: #equivalent-resource 'Definition of Equivalent Resource'
[html web page]: #web-page-html 'Definition of Web Page'
[host]: https://url.spec.whatwg.org/#concept-url-host 'URL specification of Host'
[instrument]: #instrument-to-achieve-an-objective 'Definition of Instrument to Achieve an Objective'
[path]: https://url.spec.whatwg.org/#concept-url-path 'URL specification of Path'
[port]: https://url.spec.whatwg.org/#concept-url-port 'URL specification of Port'
[special url]: https://url.spec.whatwg.org/#is-special 'URL specification of Special URL'

### Used in rules
- [Document has heading for non-repeated content](/standards-guidelines/act/rules/047fe0/proposed/)
- [Block of repeated content is collapsible](/standards-guidelines/act/rules/3e12e1/proposed/)
- [Document has a landmark with non-repeated content](/standards-guidelines/act/rules/b40fd1/proposed/)
- [Bypass Blocks of Repeated Content](/standards-guidelines/act/rules/cf77f2/proposed/)
- [Document has an instrument to move focus to non-repeated content](/standards-guidelines/act/rules/ye5d6e/proposed/)

## Bounding Box around Text {#bounding-box-around-text}

The smallest rectangle that encloses all the [visible](#visible) pixels of a character (including anti-aliased pixels), plus one pixel on every edge (top, right, bottom, left), aligned on the horizontal and vertical axis.

### Used in rules
- [Text has enhanced contrast](/standards-guidelines/act/rules/09o5cg/proposed/)
- [Text has minimum contrast](/standards-guidelines/act/rules/afw4f7/proposed/)

## Changes in content {#changes-in-content}

A _[event][] originated change in the content_ of a [web page][] occurs when, by comparing the [web page][] before and 1 minute after the event [firing][], at least one of the following occurs:

- **visible changes:** the rendered pixels change in any part of the document that is currently within the [viewport][] or that can be brought into the [viewport][] via scrolling; or
- **accessibility tree changes:** any state, property or event of a node representing an [accessible object][] of the [accessibility tree][] changes, or any node is inserted in, or removed from the [accessibility tree][]; or
- **audible changes:** the audio rendered by the [web page][] changes.

- If the [web page][] is rendering time-based media, rendered pixels and audio will be changing as part of the playback. The comparison in this instance should compare the pixels and audio that are rendered if the event is not fired, with the ones that are rendered if the event is fired.

**Assumptions:**

- This definition assumes that there are no changes in the content of the [web page][] caused by another [event][]. If this is not the case, changes may be attributed to the wrong event.
- This definition assumes that the changes happen within a 1 minute time span after the event firing and therefore the comparison between the page before and after the event firing can be made at any time after that time span elapses. If there are changes after this time span, this definition may not detect them. The arbitrary 1 minute time span, selected so that testing this rule would not be impractical, is not included in WCAG.

[accessible object]: https://www.w3.org/TR/accname-1.1/#dfn-accessible-object 'Definition of accessible object'
[accessibility tree]: https://www.w3.org/TR/accname-1.1/#dfn-accessibility-tree 'Definition of accessibility tree'
[event]: https://dom.spec.whatwg.org/#concept-event 'Definition of event'
[firing]: https://dom.spec.whatwg.org/#concept-event-fire 'Definition of event firing'
[viewport]: https://drafts.csswg.org/css2/visuren.html#viewport 'Definition of viewport'
[web page]: #web-page-html 'Definition of web page'

### Used in rules
- [Device motion based changes to the content can also be created from the user interface](/standards-guidelines/act/rules/7677a9/proposed/)
- [Device motion based changes to the content can be disabled](/standards-guidelines/act/rules/c249d5/proposed/)
- [No keyboard shortcut uses only printable characters](/standards-guidelines/act/rules/ffbc54/proposed/)

## Clearly labeled location {#clearly-labeled-location}

Secondary information and alternative controls of functionality are often not displayed together with primary information or functionality. For example, an option to change a web page to dark mode may be placed on an options page instead of being available on every page and page state of a website. Another example is a maps application, where, instead of using GPS, an option is available in a dropdown menu to set the current location of the device. Such content should be placed in a clearly labeled location.

The location of a target is said to be _clearly labeled_ when the target can be found by activating "identifiable" [instruments][instrument] which either lead the user to find the target, or to another [page][web page] or page state from which this action can be repeated until the target is found.

Whether or not the content is "clearly labeled" depends on the starting point of the search. If page A has a link which clearly "identifies" some piece of content, then the location of the content is clearly labeled. Page B, which can be in the same website, may not have such a link or may have a link with a link text that does not "identify" target content or which can be interpreted to "identify" more than one target, and so the location of the content starting from page B is not clearly labeled.

For the purpose of this definition, an [instrument][] is _identifiable_ if any text or other content with a [text alternative][], allows any user to identify an element with a [semantic role][] that inherits from `widget`.

A [web page][] changes state when the [document's body][body] changes without a change in the [document's URL][url].

[body]: https://html.spec.whatwg.org/#dom-document-body
[url]: https://url.spec.whatwg.org/#concept-url
[instrument]: #instrument-to-achieve-an-objective 'Definition of instrument to achieve an objective'
[semantic role]: #semantic-role 'Definition of semantic role'
[text alternative]: https://www.w3.org/TR/WCAG22/#dfn-text-alternative 'Definition of text alternative'
[web page]: #web-page-html 'Definition of web page'

### Used in rules
- [Device motion based changes to the content can also be created from the user interface](/standards-guidelines/act/rules/7677a9/proposed/)
- [Device motion based changes to the content can be disabled](/standards-guidelines/act/rules/c249d5/proposed/)
- [Text content that changes automatically can be paused, stopped or hidden](/standards-guidelines/act/rules/efbfc7/proposed/)
- [No keyboard shortcut uses only printable characters](/standards-guidelines/act/rules/ffbc54/proposed/)

## Correct autocomplete field {#correct-autocomplete-field}

Any field name listed in the autocomplete fields table from the HTML 5.2 specification:
[https://html.spec.whatwg.org/#autofill-field](https://html.spec.whatwg.org/#autofill-field)

### Used in rules
- [Autocomplete attribute has valid value](/standards-guidelines/act/rules/73f2c2/proposed/)

## Default Page Language {#default-page-language}

The _default language of a [web page][]_ is the [most common language][] of its [top-level browsing context](https://html.spec.whatwg.org/#top-level-browsing-context) [document][], if it is unique. If this [document][] has either no or several [most common languages][most common language], then it has no default language.

For more details, see [examples of default language][].

[document]: https://dom.spec.whatwg.org/#document-element 'DOM document element, as of 2020/06/05'
[most common language]: #most-common-element-language 'Definition of Most Common Language of an Element'
[web page]: #web-page-html 'Definition of Web Page (HTML)'
[examples of default language]: https://www.w3.org/WAI/standards-guidelines/act/rules/terms/element-language/examples/

### Used in rules
- [HTML page language subtag matches default language](/standards-guidelines/act/rules/ucwvc8/proposed/)

## Disabled Element {#disabled-element}

An element is _disabled_ when it has been rendered [inoperable][] in one or more of the following ways:

1. The element matches the [`:disabled` pseudo-class][disabled pseudo-class]. For HTML elements this means that the element is [actually disabled][].

2. The element has a [shadow-including ancestor][] whose `aria-disabled` [attribute value][] is "true".

#### Assumptions

This definition assumes that when the `aria-disabled` attribute is specified on an element, this element has also been disabled for users that do not rely on [assistive technology][]. For example, this can be done by disabling pointer events using the `pointer-events` property and by disabling keyboard interactions using the `tabindex` attribute. If this is not the case, the definition will produce incorrect results.

[actually disabled]: https://html.spec.whatwg.org/multipage/semantics-other.html#concept-element-disabled 'HTML definition of Actually Disabled'
[assistive technology]: https://www.w3.org/TR/WCAG22/#dfn-assistive-technologies 'WCAG definition of Assistive Technologies'
[attribute value]: #attribute-value 'Definition of Attribute Value'
[disabled pseudo-class]: https://drafts.csswg.org/selectors/#disabled-pseudo "CSS Selectors Level 4 (Editor's Draft), definition of the :disabled pseudo-class"
[inoperable]: https://www.w3.org/TR/wai-aria/#dfn-operable
[shadow-including ancestor]: https://dom.spec.whatwg.org/#concept-shadow-including-ancestor

### Used in rules
- [Text has enhanced contrast](/standards-guidelines/act/rules/09o5cg/proposed/)
- [Autocomplete attribute has valid value](/standards-guidelines/act/rules/73f2c2/proposed/)
- [Text has minimum contrast](/standards-guidelines/act/rules/afw4f7/proposed/)

## Embedded Image {#embedded-image}

An element presents an _embedded image_ when any of the following is true:

- the element is an `img` element with a non-empty [source set][]; or
- the element is an `input` element with a `type` [attribute value][] of `image` and its `src` [attribute value][] is not empty; or
- the element is an `object` element with a `data` [attribute value][] referencing a resource with an [image MIME type](https://mimesniff.spec.whatwg.org/#image-mime-type); or
- the element is an `svg` element having one or more `image` [descendants][] with a non-empty `href` [attribute value][]; or
- the element has a [computed][] [`background-image`][background-image] CSS property with at least one [`image`][css-image] that is a [url reference][url-reference].

[attribute value]: #attribute-value 'Definition of Attribute Value'
[background-image]: https://drafts.csswg.org/css-backgrounds-3/#background-image
[computed]: https://www.w3.org/TR/css-cascade-4/#computed 'CSS Cascading and Inheritance Level 4 (Working draft) - Computed Values'
[css-image]: https://www.w3.org/TR/css-images-3/#typedef-image
[descendants]: https://dom.spec.whatwg.org/#concept-tree-descendant
[source set]: https://html.spec.whatwg.org/multipage/images.html#source-set
[url-reference]: https://www.w3.org/TR/css-images-3/#url-notation

### Used in rules
- [HTML images contain no text](/standards-guidelines/act/rules/0va7u6/proposed/)

## Equivalent resource {#equivalent-resource}

Non-identical resources can still be _equivalent resources_ by equally complying to the expectation formed by the user when navigating to them, thus serving an equivalent purpose. This would usually involve that the advertised key content is the same.

Web pages and documents (e.g. PDFs, office formats etc.) may be equivalent resources, even if the resources:

- are located on different URLs, including different domains
- present different navigation options, e.g. through bread crumbs or local sub menus
- contain different amounts of information and/or differently worded information
- use different layouts.

If all resources cover the user's expectations equally well, the resources are considered to be equivalent.

**Note:** The user's expectations for the resource can be formed by different things, e.g. the name of the link leading to the resource, with or without the context around the link. This depends on the accessibility requirement that is tested.

**Note:** If the same content is presented in different formats or languages, the format or language itself is often part of the purpose of the content, e.g. an article as both HTML and PDF, an image in different sizes, or an article in two different languages. If getting the same content in different formats or languages is the purpose of having separate links, the resources are not equivalent.

### Used in rules
- [Document has heading for non-repeated content](/standards-guidelines/act/rules/047fe0/proposed/)
- [Block of repeated content is collapsible](/standards-guidelines/act/rules/3e12e1/proposed/)
- [Iframe elements with identical accessible names have equivalent purpose](/standards-guidelines/act/rules/4b1c6c/proposed/)
- [Links with identical accessible names have equivalent purpose](/standards-guidelines/act/rules/b20e66/proposed/)
- [Document has a landmark with non-repeated content](/standards-guidelines/act/rules/b40fd1/proposed/)
- [Bypass Blocks of Repeated Content](/standards-guidelines/act/rules/cf77f2/proposed/)
- [Links with identical accessible names and same context serve equivalent purpose](/standards-guidelines/act/rules/fd3a94/proposed/)
- [Document has an instrument to move focus to non-repeated content](/standards-guidelines/act/rules/ye5d6e/proposed/)

## Essential text presentation {#essential-text-presentation}

The presentation of text is considered essential in one of more of the following scenarios:

1. The text and its presentation is part of a brand; or
2. The text is part of a digitized image of a physical object; or
3. The text is part of a free-form digital illustration; or
4. The text is part of an image with other graphical objects, where its relationship is informative; or
5. Changing part of the presentation would alter the meaning of content on the page.

Examples of text for which the presentation is essential include:

1. Logos, product names, or slogans
2. Image of a hand-written letter, picture of a street sign, or a scanned contract
3. A digital signature, or a note written using a stylus,
4. A bar chart, diagram, or maps with place names
5. An image showing a font, or showing the difference between font-weights

**Note:** WCAG includes a generic definition of "[essential](https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html#dfn-essential)".

### Used in rules
- [HTML images contain no text](/standards-guidelines/act/rules/0va7u6/proposed/)

## Explicit Semantic Role {#explicit-role}

The _explicit semantic role_ of an element is determined by its [role attribute][] (if any).

The [role attribute][] takes a list of tokens. The explicit semantic role is the first valid role in this list. The valid roles are all non-abstract roles from [WAI-ARIA Specifications][]. If the element has no [role attribute][], or if it has one with no valid role, then this element has no explicit semantic role.

Other roles may be added as they become available. Not all roles will be supported in all assistive technologies. Testers are encouraged to adjust which roles are allowed according to the [accessibility support base line][]. For the purposes of executing examples in all rules, it should be assumed that all roles are supported by assistive technologies so that none of the roles fail due to lack of accessibility support.

#### Accessibility Support

Some browsers and assistive technologies treat the tokens of the `role` attribute as case-sensitive. Unless lowercase letters are used for the value of the `role` attribute, not all user agents will be able to interpret the tokens correctly. [ARIA in HTML](https://www.w3.org/TR/html-aria/) also specifies that [authors must use lowercase letters for the `role` and `aria-*` attributes](https://www.w3.org/TR/html-aria/#case-sensitivity).

[accessibility support base line]: https://www.w3.org/TR/WCAG-EM/#step1c 'Definition of accessibility support base line'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the role attribute'
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA specifications'

### Used in rules
- [Document has heading for non-repeated content](/standards-guidelines/act/rules/047fe0/proposed/)
- [Text has enhanced contrast](/standards-guidelines/act/rules/09o5cg/proposed/)
- [Image has non-empty accessible name](/standards-guidelines/act/rules/23a2a8/proposed/)
- [Visible label is part of accessible name](/standards-guidelines/act/rules/2ee8b8/proposed/)
- [Summary element has non-empty accessible name](/standards-guidelines/act/rules/2t702h/proposed/)
- [Element with presentational children has no focusable content](/standards-guidelines/act/rules/307n5z/proposed/)
- [Error message describes invalid form field value](/standards-guidelines/act/rules/36b590/proposed/)
- [Block of repeated content is collapsible](/standards-guidelines/act/rules/3e12e1/proposed/)
- [Element marked as decorative is not exposed](/standards-guidelines/act/rules/46ca7f/proposed/)
- [Element with role attribute has required states and properties](/standards-guidelines/act/rules/4e8ab6/proposed/)
- [ARIA state or property is permitted](/standards-guidelines/act/rules/5c01ea/proposed/)
- [Link in context is descriptive](/standards-guidelines/act/rules/5effbb/proposed/)
- [Role attribute has valid value](/standards-guidelines/act/rules/674b10/proposed/)
- [Autocomplete attribute has valid value](/standards-guidelines/act/rules/73f2c2/proposed/)
- [Device motion based changes to the content can also be created from the user interface](/standards-guidelines/act/rules/7677a9/proposed/)
- [SVG element with explicit role has non-empty accessible name](/standards-guidelines/act/rules/7d6734/proposed/)
- [Object element rendering non-text content has non-empty accessible name](/standards-guidelines/act/rules/8fc3b6/proposed/)
- [Button has non-empty accessible name](/standards-guidelines/act/rules/97a4e1/proposed/)
- [Image filename is accessible name for image](/standards-guidelines/act/rules/9eb3f6/proposed/)
- [Headers attribute specified on a cell refers to cells in the same table element](/standards-guidelines/act/rules/a25f45/proposed/)
- [Text has minimum contrast](/standards-guidelines/act/rules/afw4f7/proposed/)
- [Link is descriptive](/standards-guidelines/act/rules/aizyf1/proposed/)
- [Links with identical accessible names have equivalent purpose](/standards-guidelines/act/rules/b20e66/proposed/)
- [Document has a landmark with non-repeated content](/standards-guidelines/act/rules/b40fd1/proposed/)
- [Heading is descriptive](/standards-guidelines/act/rules/b49b2e/proposed/)
- [ARIA required owned elements](/standards-guidelines/act/rules/bc4a75/proposed/)
- [Device motion based changes to the content can be disabled](/standards-guidelines/act/rules/c249d5/proposed/)
- [Link has non-empty accessible name](/standards-guidelines/act/rules/c487ae/proposed/)
- [Iframe element has non-empty accessible name](/standards-guidelines/act/rules/cae760/proposed/)
- [Form field label is descriptive](/standards-guidelines/act/rules/cc0f0a/proposed/)
- [Bypass Blocks of Repeated Content](/standards-guidelines/act/rules/cf77f2/proposed/)
- [Table header cell has assigned cells](/standards-guidelines/act/rules/d0f69e/proposed/)
- [Form field has non-empty accessible name](/standards-guidelines/act/rules/e086e5/proposed/)
- [Image not in the accessibility tree is decorative](/standards-guidelines/act/rules/e88epe/proposed/)
- [Text content that changes automatically can be paused, stopped or hidden](/standards-guidelines/act/rules/efbfc7/proposed/)
- [Links with identical accessible names and same context serve equivalent purpose](/standards-guidelines/act/rules/fd3a94/proposed/)
- [ARIA required context role](/standards-guidelines/act/rules/ff89c9/proposed/)
- [No keyboard shortcut uses only printable characters](/standards-guidelines/act/rules/ffbc54/proposed/)
- [Heading has non-empty accessible name](/standards-guidelines/act/rules/ffd0e9/proposed/)
- [ARIA required ID references exist](/standards-guidelines/act/rules/in6db8/proposed/)
- [ARIA global properties not used where prohibited](/standards-guidelines/act/rules/kb1m8s/proposed/)
- [Menuitem has non-empty accessible name](/standards-guidelines/act/rules/m6b1q3/proposed/)
- [Image accessible name is descriptive](/standards-guidelines/act/rules/qt1vmo/proposed/)
- [Document has an instrument to move focus to non-repeated content](/standards-guidelines/act/rules/ye5d6e/proposed/)

## Filename {#filename}

A _filename_ is a text string that identifies an electronically stored file. In a URL it is located at the end of the path, after the last slash and before any query strings. For example the `src` attribute specifies a URL path of `src="/foo/bar.jpg?baz "` which contains the filename `bar.jpg`.

### Used in rules
- [Image filename is accessible name for image](/standards-guidelines/act/rules/9eb3f6/proposed/)

## Focusable {#focusable}

An element is _focusable_ if one or both of the following are true:

- the element is part of [sequential focus navigation][]; or
- the element has a [tabindex value][] that is not null.

**Exception**: Elements that lose focus and do not regain focus during a period of up to 1 second after gaining focus, without the user interacting with the page the element is on, are not considered _focusable_.

Notes:

- The 1 second time span is an arbitrary limit which is not included in WCAG. Given that scripts can manage the focus state of elements, testing the focusability of an element consistently would be impractical without a time limit.
- The [tabindex value][] of an element is the value of the [tabindex attribute][] parsed using the [rules for parsing integers][]. For the [tabindex value][] to be different from null, it needs to be [parsed][rules for parsing integers] without errors.

[rules for parsing integers]: https://html.spec.whatwg.org/#rules-for-parsing-integers
[sequential focus navigation]: https://html.spec.whatwg.org/multipage/interaction.html#sequential-focus-navigation
[tabindex attribute]: https://html.spec.whatwg.org/#attr-tabindex
[tabindex value]: https://html.spec.whatwg.org/#tabindex-value

### Used in rules
- [Document has heading for non-repeated content](/standards-guidelines/act/rules/047fe0/proposed/)
- [Text has enhanced contrast](/standards-guidelines/act/rules/09o5cg/proposed/)
- [Audio and visuals of video element have transcript](/standards-guidelines/act/rules/1a02b0/proposed/)
- [Image has non-empty accessible name](/standards-guidelines/act/rules/23a2a8/proposed/)
- [Audio element content has transcript](/standards-guidelines/act/rules/2eb176/proposed/)
- [Visible label is part of accessible name](/standards-guidelines/act/rules/2ee8b8/proposed/)
- [Summary element has non-empty accessible name](/standards-guidelines/act/rules/2t702h/proposed/)
- [Element with presentational children has no focusable content](/standards-guidelines/act/rules/307n5z/proposed/)
- [Error message describes invalid form field value](/standards-guidelines/act/rules/36b590/proposed/)
- [Block of repeated content is collapsible](/standards-guidelines/act/rules/3e12e1/proposed/)
- [Id attribute value is unique](/standards-guidelines/act/rules/3ea0c8/proposed/)
- [Element marked as decorative is not exposed](/standards-guidelines/act/rules/46ca7f/proposed/)
- [Iframe elements with identical accessible names have equivalent purpose](/standards-guidelines/act/rules/4b1c6c/proposed/)
- [Audio or video element that plays automatically has a control mechanism](/standards-guidelines/act/rules/4c31df/proposed/)
- [Element with role attribute has required states and properties](/standards-guidelines/act/rules/4e8ab6/proposed/)
- [Image button has non-empty accessible name](/standards-guidelines/act/rules/59796f/proposed/)
- [ARIA state or property is permitted](/standards-guidelines/act/rules/5c01ea/proposed/)
- [Link in context is descriptive](/standards-guidelines/act/rules/5effbb/proposed/)
- [Role attribute has valid value](/standards-guidelines/act/rules/674b10/proposed/)
- [Element with aria-hidden has no content in sequential focus navigation](/standards-guidelines/act/rules/6cfa84/proposed/)
- [Autocomplete attribute has valid value](/standards-guidelines/act/rules/73f2c2/proposed/)
- [Device motion based changes to the content can also be created from the user interface](/standards-guidelines/act/rules/7677a9/proposed/)
- [SVG element with explicit role has non-empty accessible name](/standards-guidelines/act/rules/7d6734/proposed/)
- [Focusable element has no keyboard trap](/standards-guidelines/act/rules/80af7b/proposed/)
- [Object element rendering non-text content has non-empty accessible name](/standards-guidelines/act/rules/8fc3b6/proposed/)
- [Button has non-empty accessible name](/standards-guidelines/act/rules/97a4e1/proposed/)
- [Content has alternative for visual reference](/standards-guidelines/act/rules/9bd38c/proposed/)
- [Image filename is accessible name for image](/standards-guidelines/act/rules/9eb3f6/proposed/)
- [Focusable element has no keyboard trap via standard navigation](/standards-guidelines/act/rules/a1b64e/proposed/)
- [Headers attribute specified on a cell refers to cells in the same table element](/standards-guidelines/act/rules/a25f45/proposed/)
- [Video element content is media alternative for text](/standards-guidelines/act/rules/ab4d13/proposed/)
- [Audio element content is media alternative for text](/standards-guidelines/act/rules/afb423/proposed/)
- [Text has minimum contrast](/standards-guidelines/act/rules/afw4f7/proposed/)
- [Link is descriptive](/standards-guidelines/act/rules/aizyf1/proposed/)
- [Links with identical accessible names have equivalent purpose](/standards-guidelines/act/rules/b20e66/proposed/)
- [Document has a landmark with non-repeated content](/standards-guidelines/act/rules/b40fd1/proposed/)
- [Heading is descriptive](/standards-guidelines/act/rules/b49b2e/proposed/)
- [ARIA required owned elements](/standards-guidelines/act/rules/bc4a75/proposed/)
- [Device motion based changes to the content can be disabled](/standards-guidelines/act/rules/c249d5/proposed/)
- [Link has non-empty accessible name](/standards-guidelines/act/rules/c487ae/proposed/)
- [Iframe element has non-empty accessible name](/standards-guidelines/act/rules/cae760/proposed/)
- [Form field label is descriptive](/standards-guidelines/act/rules/cc0f0a/proposed/)
- [Bypass Blocks of Repeated Content](/standards-guidelines/act/rules/cf77f2/proposed/)
- [Table header cell has assigned cells](/standards-guidelines/act/rules/d0f69e/proposed/)
- [Element with lang attribute has valid language tag](/standards-guidelines/act/rules/de46e4/proposed/)
- [Form field has non-empty accessible name](/standards-guidelines/act/rules/e086e5/proposed/)
- [Audio element content has text alternative](/standards-guidelines/act/rules/e7aa44/proposed/)
- [Image not in the accessibility tree is decorative](/standards-guidelines/act/rules/e88epe/proposed/)
- [Focusable element has no keyboard trap via non-standard navigation](/standards-guidelines/act/rules/ebe86a/proposed/)
- [Video element visual-only content has transcript](/standards-guidelines/act/rules/ee13b5/proposed/)
- [Text content that changes automatically can be paused, stopped or hidden](/standards-guidelines/act/rules/efbfc7/proposed/)
- [Video element visual-only content is media alternative for text](/standards-guidelines/act/rules/fd26cf/proposed/)
- [Links with identical accessible names and same context serve equivalent purpose](/standards-guidelines/act/rules/fd3a94/proposed/)
- [ARIA required context role](/standards-guidelines/act/rules/ff89c9/proposed/)
- [No keyboard shortcut uses only printable characters](/standards-guidelines/act/rules/ffbc54/proposed/)
- [Heading has non-empty accessible name](/standards-guidelines/act/rules/ffd0e9/proposed/)
- [ARIA required ID references exist](/standards-guidelines/act/rules/in6db8/proposed/)
- [ARIA global properties not used where prohibited](/standards-guidelines/act/rules/kb1m8s/proposed/)
- [Menuitem has non-empty accessible name](/standards-guidelines/act/rules/m6b1q3/proposed/)
- [HTML element language subtag matches language](/standards-guidelines/act/rules/off6ek/proposed/)
- [Element in sequential focus order has visible focus](/standards-guidelines/act/rules/oj04fd/proposed/)
- [Image accessible name is descriptive](/standards-guidelines/act/rules/qt1vmo/proposed/)
- [HTML page language subtag matches default language](/standards-guidelines/act/rules/ucwvc8/proposed/)
- [Document has an instrument to move focus to non-repeated content](/standards-guidelines/act/rules/ye5d6e/proposed/)

## Focused {#focused}

An element is said to be _focused_ when the element matches the [`:focus` pseudo-class](https://drafts.csswg.org/selectors-4/#focus-pseudo) uninterruptedly for a period of 1 second after a user stopped interacting with the page.

The 1 second time span is an arbitrary limit which is not included in WCAG. Given the possibility of the focus state of elements being managed through scripts, testing the focused state of an element consistently would be impractical without a time limit.

### Used in rules
- [Element in sequential focus order has visible focus](/standards-guidelines/act/rules/oj04fd/proposed/)

## Foreground Colors Of Text {#foreground-colors-of-text}

The colors of all the pixels of a [visible](#visible) character in a [text node](https://dom.spec.whatwg.org/#text) that change color when the CSS `color` property is changed. This includes anti-aliased pixels.

**Note:** Anti-aliasing is a technique in which the foreground color and background color are blended to create smooth edges.

### Used in rules
- [Text has enhanced contrast](/standards-guidelines/act/rules/09o5cg/proposed/)
- [Text has minimum contrast](/standards-guidelines/act/rules/afw4f7/proposed/)

## Form Field Error Indicator {#form-field-error-indicator}

Any [text][], or [non-text content][], or an element that has [presentation][] indicating that an error was identified which appears to be related to some user input into, or the lack of user input into some element. These could be different types of errors, for example:

- missing input, for example a required form field that was left empty
- incorrect input, such as an invalid password
- input not in an expected format, expected range, or of an allowed value
- timing error, such as session timeouts or expiration of an allowed action
- authentication or authorization errors

**Note**: An error indicator can be a separate element in the page, but it can also be part of a form control. For example a red outline on a form control is often used to indicate an error. Not all red outlines are indicators of an error though. This depends on the presentation of the form control in relation to other elements on the page.

[non-text content]: https://www.w3.org/TR/WCAG22/#dfn-non-text-content
[presentation]: https://www.w3.org/TR/WCAG22/#dfn-presentation
[text]: https://www.w3.org/TR/WCAG22/#dfn-text

### Used in rules
- [Error message describes invalid form field value](/standards-guidelines/act/rules/36b590/proposed/)

## Highest Possible Contrast {#highest-possible-contrast}

The highest value of the [contrast ratios][contrast ratio] between two sets of colors (A and B). That is, the highest [contrast ratio][] between either the darkest color in A and the brightest color in B, or the brightest color in A and the darkest color in B.

[contrast ratio]: https://www.w3.org/TR/WCAG22/#dfn-contrast-ratio 'WCAG definition of Contrast Ratio'

### Used in rules
- [Text has enhanced contrast](/standards-guidelines/act/rules/09o5cg/proposed/)
- [Text has minimum contrast](/standards-guidelines/act/rules/afw4f7/proposed/)

## Horizontally Clipped by Overflow {#horizontally-clipped-by-overflow}

A [node][] is <dfn>Horizontally Clipped by Overflow</dfn> if it has an [ancestor][] in the [flat tree][] with a [computed][] [overflow-x][] of `hidden` or `clip`, where changing the [overflow-x][] of all such [ancestors][ancestor] to `visible` would cause more of the [node][] to become [visible][].

#### Example of Horizontally Clipped by Overflow

This `img` element has an [ancestor][] `div` element with an `overflow-x` of `hidden`. The width of the `img` is greater than that of the [ancestor][] `div`, and so is clipped by the `overflow-x` property of the `div`.

```html
<div style="width: 100px; overflow-x: hidden;">
	<img src="/test-assets/shared/w3c-logo.png" width="150" alt="Partial W3C Logo" />
</div>
```

[visible]: #visible
[node]: https://dom.spec.whatwg.org/#node 'DOM node, as of 2019/02/14'
[ancestor]: https://dom.spec.whatwg.org/#concept-tree-ancestor 'DOM ancestor, as of 2019/02/14'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS draft, flat tree, 2020/02/14'
[computed]: https://www.w3.org/TR/css-cascade-3/#computed-value
[overflow-x]: https://drafts.csswg.org/css-overflow/#overflow-properties

### Used in rules
- [Zoomed text node is not clipped with CSS overflow](/standards-guidelines/act/rules/59br37/proposed/)

## Implicit Semantic Role {#implicit-role}

The _implicit semantic role_ of an element is a pre-defined value given by the host language which depends on the element and its ancestors.

Implicit roles for HTML and SVG, are documented in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/#html-element-role-mappings) and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/#mapping_role_table).

#### Accessibility Support

- Images with an empty `alt` attribute (`alt=""`) should have an implicit role of `presentation`, according to the [HTML Accessibility API Mapping (work in progress)](https://www.w3.org/TR/html-aam-1.0/#html-element-role-mappings). However, there are several popular browsers that do not treat images with empty `alt` attribute as having a role of `presentation`. Instead, they add the `img` element to the accessibility tree with a role of either `img` or `graphic`.

### Used in rules
- [Document has heading for non-repeated content](/standards-guidelines/act/rules/047fe0/proposed/)
- [Text has enhanced contrast](/standards-guidelines/act/rules/09o5cg/proposed/)
- [Image has non-empty accessible name](/standards-guidelines/act/rules/23a2a8/proposed/)
- [Visible label is part of accessible name](/standards-guidelines/act/rules/2ee8b8/proposed/)
- [Element with presentational children has no focusable content](/standards-guidelines/act/rules/307n5z/proposed/)
- [Error message describes invalid form field value](/standards-guidelines/act/rules/36b590/proposed/)
- [Block of repeated content is collapsible](/standards-guidelines/act/rules/3e12e1/proposed/)
- [Element marked as decorative is not exposed](/standards-guidelines/act/rules/46ca7f/proposed/)
- [Element with role attribute has required states and properties](/standards-guidelines/act/rules/4e8ab6/proposed/)
- [ARIA state or property is permitted](/standards-guidelines/act/rules/5c01ea/proposed/)
- [Link in context is descriptive](/standards-guidelines/act/rules/5effbb/proposed/)
- [Role attribute has valid value](/standards-guidelines/act/rules/674b10/proposed/)
- [Autocomplete attribute has valid value](/standards-guidelines/act/rules/73f2c2/proposed/)
- [Device motion based changes to the content can also be created from the user interface](/standards-guidelines/act/rules/7677a9/proposed/)
- [Button has non-empty accessible name](/standards-guidelines/act/rules/97a4e1/proposed/)
- [Image filename is accessible name for image](/standards-guidelines/act/rules/9eb3f6/proposed/)
- [Headers attribute specified on a cell refers to cells in the same table element](/standards-guidelines/act/rules/a25f45/proposed/)
- [Text has minimum contrast](/standards-guidelines/act/rules/afw4f7/proposed/)
- [Link is descriptive](/standards-guidelines/act/rules/aizyf1/proposed/)
- [Links with identical accessible names have equivalent purpose](/standards-guidelines/act/rules/b20e66/proposed/)
- [Document has a landmark with non-repeated content](/standards-guidelines/act/rules/b40fd1/proposed/)
- [Heading is descriptive](/standards-guidelines/act/rules/b49b2e/proposed/)
- [ARIA required owned elements](/standards-guidelines/act/rules/bc4a75/proposed/)
- [Device motion based changes to the content can be disabled](/standards-guidelines/act/rules/c249d5/proposed/)
- [Link has non-empty accessible name](/standards-guidelines/act/rules/c487ae/proposed/)
- [Form field label is descriptive](/standards-guidelines/act/rules/cc0f0a/proposed/)
- [Bypass Blocks of Repeated Content](/standards-guidelines/act/rules/cf77f2/proposed/)
- [Table header cell has assigned cells](/standards-guidelines/act/rules/d0f69e/proposed/)
- [Form field has non-empty accessible name](/standards-guidelines/act/rules/e086e5/proposed/)
- [Image not in the accessibility tree is decorative](/standards-guidelines/act/rules/e88epe/proposed/)
- [Text content that changes automatically can be paused, stopped or hidden](/standards-guidelines/act/rules/efbfc7/proposed/)
- [Links with identical accessible names and same context serve equivalent purpose](/standards-guidelines/act/rules/fd3a94/proposed/)
- [ARIA required context role](/standards-guidelines/act/rules/ff89c9/proposed/)
- [No keyboard shortcut uses only printable characters](/standards-guidelines/act/rules/ffbc54/proposed/)
- [Heading has non-empty accessible name](/standards-guidelines/act/rules/ffd0e9/proposed/)
- [ARIA required ID references exist](/standards-guidelines/act/rules/in6db8/proposed/)
- [ARIA global properties not used where prohibited](/standards-guidelines/act/rules/kb1m8s/proposed/)
- [Menuitem has non-empty accessible name](/standards-guidelines/act/rules/m6b1q3/proposed/)
- [Document has an instrument to move focus to non-repeated content](/standards-guidelines/act/rules/ye5d6e/proposed/)

## Included in the accessibility tree {#included-in-the-accessibility-tree}

Elements included in the accessibility tree of platform specific accessibility APIs are exposed to assistive technologies. This allows users of assistive technology to access the elements in a way that meets the requirements of the individual user.

The general rules for when elements are included in the accessibility tree are defined in the [core accessibility API mappings](https://www.w3.org/TR/core-aam/). For native markup languages, such as HTML and SVG, additional rules for when elements are included in the accessibility tree can be found in the [HTML accessibility API mappings (working draft)](https://www.w3.org/TR/html-aam/) and the [SVG accessibility API mappings (working draft)](https://www.w3.org/TR/svg-aam/).

For more details, see [examples of included in the accessibility tree][].

[Programmatically hidden](#programmatically-hidden) elements are removed from the accessibility tree. However, some browsers will leave [focusable](#focusable) elements with an `aria-hidden` attribute set to `true` in the accessibility tree. Because they are hidden, these elements are considered **not** included in the accessibility tree. This may cause confusion for users of assistive technologies because they may still be able to interact with these focusable elements using sequential keyboard navigation, even though the element should not be included in the accessibility tree.

[examples of included in the accessibility tree]: https://www.w3.org/WAI/standards-guidelines/act/rules/terms/included-in-the-accessibility-tree/examples/

### Used in rules
- [Document has heading for non-repeated content](/standards-guidelines/act/rules/047fe0/proposed/)
- [Text has enhanced contrast](/standards-guidelines/act/rules/09o5cg/proposed/)
- [Audio and visuals of video element have transcript](/standards-guidelines/act/rules/1a02b0/proposed/)
- [Image has non-empty accessible name](/standards-guidelines/act/rules/23a2a8/proposed/)
- [Audio element content has transcript](/standards-guidelines/act/rules/2eb176/proposed/)
- [Visible label is part of accessible name](/standards-guidelines/act/rules/2ee8b8/proposed/)
- [Summary element has non-empty accessible name](/standards-guidelines/act/rules/2t702h/proposed/)
- [Element with presentational children has no focusable content](/standards-guidelines/act/rules/307n5z/proposed/)
- [Error message describes invalid form field value](/standards-guidelines/act/rules/36b590/proposed/)
- [Block of repeated content is collapsible](/standards-guidelines/act/rules/3e12e1/proposed/)
- [Id attribute value is unique](/standards-guidelines/act/rules/3ea0c8/proposed/)
- [Element marked as decorative is not exposed](/standards-guidelines/act/rules/46ca7f/proposed/)
- [Iframe elements with identical accessible names have equivalent purpose](/standards-guidelines/act/rules/4b1c6c/proposed/)
- [Audio or video element that plays automatically has a control mechanism](/standards-guidelines/act/rules/4c31df/proposed/)
- [Element with role attribute has required states and properties](/standards-guidelines/act/rules/4e8ab6/proposed/)
- [Image button has non-empty accessible name](/standards-guidelines/act/rules/59796f/proposed/)
- [ARIA state or property is permitted](/standards-guidelines/act/rules/5c01ea/proposed/)
- [Link in context is descriptive](/standards-guidelines/act/rules/5effbb/proposed/)
- [Role attribute has valid value](/standards-guidelines/act/rules/674b10/proposed/)
- [Element with aria-hidden has no content in sequential focus navigation](/standards-guidelines/act/rules/6cfa84/proposed/)
- [Autocomplete attribute has valid value](/standards-guidelines/act/rules/73f2c2/proposed/)
- [Device motion based changes to the content can also be created from the user interface](/standards-guidelines/act/rules/7677a9/proposed/)
- [SVG element with explicit role has non-empty accessible name](/standards-guidelines/act/rules/7d6734/proposed/)
- [Object element rendering non-text content has non-empty accessible name](/standards-guidelines/act/rules/8fc3b6/proposed/)
- [Button has non-empty accessible name](/standards-guidelines/act/rules/97a4e1/proposed/)
- [Content has alternative for visual reference](/standards-guidelines/act/rules/9bd38c/proposed/)
- [Image filename is accessible name for image](/standards-guidelines/act/rules/9eb3f6/proposed/)
- [Headers attribute specified on a cell refers to cells in the same table element](/standards-guidelines/act/rules/a25f45/proposed/)
- [Video element content is media alternative for text](/standards-guidelines/act/rules/ab4d13/proposed/)
- [Audio element content is media alternative for text](/standards-guidelines/act/rules/afb423/proposed/)
- [Text has minimum contrast](/standards-guidelines/act/rules/afw4f7/proposed/)
- [Link is descriptive](/standards-guidelines/act/rules/aizyf1/proposed/)
- [Links with identical accessible names have equivalent purpose](/standards-guidelines/act/rules/b20e66/proposed/)
- [Document has a landmark with non-repeated content](/standards-guidelines/act/rules/b40fd1/proposed/)
- [Heading is descriptive](/standards-guidelines/act/rules/b49b2e/proposed/)
- [ARIA required owned elements](/standards-guidelines/act/rules/bc4a75/proposed/)
- [Device motion based changes to the content can be disabled](/standards-guidelines/act/rules/c249d5/proposed/)
- [Link has non-empty accessible name](/standards-guidelines/act/rules/c487ae/proposed/)
- [Iframe element has non-empty accessible name](/standards-guidelines/act/rules/cae760/proposed/)
- [Form field label is descriptive](/standards-guidelines/act/rules/cc0f0a/proposed/)
- [Bypass Blocks of Repeated Content](/standards-guidelines/act/rules/cf77f2/proposed/)
- [Table header cell has assigned cells](/standards-guidelines/act/rules/d0f69e/proposed/)
- [Element with lang attribute has valid language tag](/standards-guidelines/act/rules/de46e4/proposed/)
- [Form field has non-empty accessible name](/standards-guidelines/act/rules/e086e5/proposed/)
- [Audio element content has text alternative](/standards-guidelines/act/rules/e7aa44/proposed/)
- [Image not in the accessibility tree is decorative](/standards-guidelines/act/rules/e88epe/proposed/)
- [Focusable element has no keyboard trap via non-standard navigation](/standards-guidelines/act/rules/ebe86a/proposed/)
- [Video element visual-only content has transcript](/standards-guidelines/act/rules/ee13b5/proposed/)
- [Text content that changes automatically can be paused, stopped or hidden](/standards-guidelines/act/rules/efbfc7/proposed/)
- [Video element visual-only content is media alternative for text](/standards-guidelines/act/rules/fd26cf/proposed/)
- [Links with identical accessible names and same context serve equivalent purpose](/standards-guidelines/act/rules/fd3a94/proposed/)
- [ARIA required context role](/standards-guidelines/act/rules/ff89c9/proposed/)
- [No keyboard shortcut uses only printable characters](/standards-guidelines/act/rules/ffbc54/proposed/)
- [Heading has non-empty accessible name](/standards-guidelines/act/rules/ffd0e9/proposed/)
- [ARIA required ID references exist](/standards-guidelines/act/rules/in6db8/proposed/)
- [ARIA global properties not used where prohibited](/standards-guidelines/act/rules/kb1m8s/proposed/)
- [Menuitem has non-empty accessible name](/standards-guidelines/act/rules/m6b1q3/proposed/)
- [HTML element language subtag matches language](/standards-guidelines/act/rules/off6ek/proposed/)
- [Image accessible name is descriptive](/standards-guidelines/act/rules/qt1vmo/proposed/)
- [HTML page language subtag matches default language](/standards-guidelines/act/rules/ucwvc8/proposed/)
- [Document has an instrument to move focus to non-repeated content](/standards-guidelines/act/rules/ye5d6e/proposed/)

## Inert {#inert}

An [HTML or SVG element][] is inert if:

- it has an `inert` [attribute value][] of true; or
- one of its ancestor elements in the [flat tree][] has an `inert` [attribute value][] of true; or
- it is [blocked by a modal][].

[html or svg element]: #namespaced-element 'Definition of HTML or SVG element'
[attribute value]: #attribute-value 'Definition of Attribute value'
[blocked by a modal]: https://html.spec.whatwg.org/multipage/interaction.html#blocked-by-a-modal-dialog
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'

### Used in rules
- [Scrollable content can be reached with sequential focus navigation](/standards-guidelines/act/rules/0ssw9k/proposed/)
- [Iframe with interactive elements is not excluded from tab-order](/standards-guidelines/act/rules/akn7bn/proposed/)

## Inheriting Semantic Role {#inheriting-semantic}

An element with an _inheriting semantic role_ of X is any element with a non-[abstract][] [semantic role][] that inherits from X, or is the same as X.

**Example**: An "inheriting semantic link" is any element that either has the [semantic role][] of [`link`][link] or a [semantic role][] that inherits from the [`link`][link] role, such as [doc-biblioref][].

[abstract]: https://www.w3.org/TR/wai-aria-1.2/#isAbstract 'ARIA Definition for Abstract Roles'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[link]: https://www.w3.org/TR/wai-aria/#link 'ARIA Definition of the link Role'
[doc-biblioref]: https://www.w3.org/TR/dpub-aria-1.0/#doc-biblioref 'DPUB ARIA Definition of doc-biblioref'

### Used in rules
- [Text has enhanced contrast](/standards-guidelines/act/rules/09o5cg/proposed/)
- [Link in context is descriptive](/standards-guidelines/act/rules/5effbb/proposed/)
- [Text has minimum contrast](/standards-guidelines/act/rules/afw4f7/proposed/)
- [Link is descriptive](/standards-guidelines/act/rules/aizyf1/proposed/)
- [Links with identical accessible names have equivalent purpose](/standards-guidelines/act/rules/b20e66/proposed/)
- [Document has a landmark with non-repeated content](/standards-guidelines/act/rules/b40fd1/proposed/)
- [Link has non-empty accessible name](/standards-guidelines/act/rules/c487ae/proposed/)
- [Table header cell has assigned cells](/standards-guidelines/act/rules/d0f69e/proposed/)
- [Links with identical accessible names and same context serve equivalent purpose](/standards-guidelines/act/rules/fd3a94/proposed/)
- [No keyboard shortcut uses only printable characters](/standards-guidelines/act/rules/ffbc54/proposed/)

## Insignificant {#insignificant}

Content that is neither [purely decorative][], nor required for understanding the purpose of certain pieces of information or functionality. Insignificant content is often used to provide context.

**Example**: A picture of New York's Time Square may include taxis, a famous pizza restaurant, and theater advertisements, etc. None of these are purely decorative. They provide clues as to where the picture was taken. But neither are any of these required to understand the picture as a whole. Even if the picture itself is significant, the taxis in the picture are not.

[purely decorative]: https://www.w3.org/TR/WCAG22/#dfn-pure-decoration 'WCAG 2.2, Purely decorative'

### Used in rules
- [HTML images contain no text](/standards-guidelines/act/rules/0va7u6/proposed/)

## Instrument to achieve an objective {#instrument-to-achieve-an-objective}

An [HTML element][] that when [activated][] allows an end-user to achieve an objective.

**Note**: Any rule that uses this definition must provide an unambiguous description of the objective the instrument is used to achieve.

#### Background About Instrument

This definition is a more restrictive version of WCAG's definition of [mechanism][], notably restricting it to the current document. WCAG has a note that "The mechanism needs to meet all success criteria for the conformance level claimed." This includes all the level A criteria such as [Success Criterion 2.1.1 Keyboard][sc211] (the mechanism must be keyboard accessible) or [Success Criterion 4.1.2 Name, Role, Value][sc412] (the mechanism must be exposed to assistive technologies and have an accessible name). This definition, and the rules using it, leaves these extra requirements out. This avoids reporting the same component twice for the same reason (e.g., missing an accessible name) under two different rules and Success Criteria, and helps pinpoint the error related to each Success Criterion. Instruments should nonetheless be fully accessible at the correct conformance level (depending on the rule using them).

[activated]: https://html.spec.whatwg.org/#activation
[html element]: https://html.spec.whatwg.org/multipage/dom.html#htmlelement
[mechanism]: https://www.w3.org/TR/WCAG22/#dfn-mechanism 'WCAG Definition of Mechanism'
[sc211]: https://www.w3.org/TR/WCAG22/#keyboard 'Success Criterion 2.1.1 Keyboard'
[sc412]: https://www.w3.org/TR/WCAG22/#name-role-value 'Success Criterion 4.1.2 Name, Role, Value'

### Used in rules
- [Document has heading for non-repeated content](/standards-guidelines/act/rules/047fe0/proposed/)
- [Audio element content has transcript](/standards-guidelines/act/rules/2eb176/proposed/)
- [Block of repeated content is collapsible](/standards-guidelines/act/rules/3e12e1/proposed/)
- [Audio or video element that plays automatically has a control mechanism](/standards-guidelines/act/rules/4c31df/proposed/)
- [Device motion based changes to the content can also be created from the user interface](/standards-guidelines/act/rules/7677a9/proposed/)
- [Audio or video element avoids automatically playing audio](/standards-guidelines/act/rules/80f0bf/proposed/)
- [Audio element content is media alternative for text](/standards-guidelines/act/rules/afb423/proposed/)
- [Document has a landmark with non-repeated content](/standards-guidelines/act/rules/b40fd1/proposed/)
- [Device motion based changes to the content can be disabled](/standards-guidelines/act/rules/c249d5/proposed/)
- [Bypass Blocks of Repeated Content](/standards-guidelines/act/rules/cf77f2/proposed/)
- [Audio element content has text alternative](/standards-guidelines/act/rules/e7aa44/proposed/)
- [Text content that changes automatically can be paused, stopped or hidden](/standards-guidelines/act/rules/efbfc7/proposed/)
- [No keyboard shortcut uses only printable characters](/standards-guidelines/act/rules/ffbc54/proposed/)
- [Document has an instrument to move focus to non-repeated content](/standards-guidelines/act/rules/ye5d6e/proposed/)

## Just before a node {#just-before}

A node N is _just before_ a node of [perceivable content][] P if one of the following is true:

- N and P are the same node; or
- N is not [perceivable content][] and there is no node of [perceivable content][] between N and P (in [tree order][] in the [flat tree][]).

Several nodes may be just before a given node, especially if there are several non-[perceivable content][] nodes next to each other.

[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS Definition of Flat Tree'
[perceivable content]: #perceivable-content 'Definition of Perceivable Content'
[tree order]: https://dom.spec.whatwg.org/#concept-tree-order 'DOM specification of Tree Order'

### Used in rules
- [Bypass Blocks of Repeated Content](/standards-guidelines/act/rules/cf77f2/proposed/)
- [Document has an instrument to move focus to non-repeated content](/standards-guidelines/act/rules/ye5d6e/proposed/)

## Large Scale Text {#large-scale-text}

A text node is large scale text if at least one of the following is true:

- the text node [computed][] [font-size][] is at least 18 [points][], or
- the text node [computed][] [font-size][] is at least 14 [points][] and has a [computed][] [font weight][] of 700 or higher.


#### Background
In the domain of languages such as Chinese, Japanese, and Korean (CJK languages), encompassing the Unicode character range from 4E00 to 9FFF ([CJK Unified Ideographs](https://unicode.org/charts/PDF/U4E00.pdf)), it becomes crucial to acknowledge the intricate nuances in their typographic requirements. Despite sharing a common Unicode spectrum, each CJK language and its corresponding country may exhibit distinct typographic preferences and standards.

Particularly noteworthy is the lack of uniformity in defining text sizes as either large or small within the following ranges:
- from 18 [points][] to 22 [points][]
- from 14 [points][] to 18 [points][] with a [computed][] [font weight][] of 700 or higher.

Whether CJK characters in these ranges should be considered as "large scale" depends on the language of the text, as well as the country for which the text is designed and whose requirements must be followed. Given that these pieces of information are not readily available, the ACT rules adhere to the large text definition outlined above. This definition is applicable across all languages under the rationale of "no false positives."


[computed]: https://www.w3.org/TR/css-cascade-3/#computed-value
[font-size]: https://www.w3.org/TR/css-fonts-3/#propdef-font-size
[points]: https://www.w3.org/TR/css-values/#pt
[font weight]: https://www.w3.org/TR/css-fonts-3/#font-weight-prop

### Used in rules
- [Text has enhanced contrast](/standards-guidelines/act/rules/09o5cg/proposed/)
- [Text has minimum contrast](/standards-guidelines/act/rules/afw4f7/proposed/)

## Marked as decorative {#marked-as-decorative}

An element is _marked as decorative_ if one or more of the following conditions is true:

- it has an [explicit role][] of `none` or `presentation`; or
- it is an `img` element with an `alt` attribute whose value is the empty string (`alt=""`), and with no [explicit role][].

Elements are marked as decorative as a way to convey the intention of the author that they are [pure decoration][]. It is different from the element actually being [pure decoration][] as authors may make mistakes. It is different from the element being effectively ignored by assistive technologies as rules such as [presentational roles conflict resolution][] may overwrite this intention.

Elements can also be ignored by assistive technologies if they are [programmatically hidden][]. This is different from marking the element as decorative and does not convey the same intention. Notably, being [programmatically hidden][] may change as users interact with the page (showing and hiding elements) while being marked as decorative should stay the same through all states of the page.

[explicit role]: #explicit-role 'Definition of Explicit Role'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[programmatically hidden]: #programmatically-hidden 'Definition of Programmatically Hidden'
[pure decoration]: https://www.w3.org/TR/WCAG22/#dfn-pure-decoration 'WCAG definition of Pure Decoration'

### Used in rules
- [Document has heading for non-repeated content](/standards-guidelines/act/rules/047fe0/proposed/)
- [Text has enhanced contrast](/standards-guidelines/act/rules/09o5cg/proposed/)
- [Image has non-empty accessible name](/standards-guidelines/act/rules/23a2a8/proposed/)
- [Visible label is part of accessible name](/standards-guidelines/act/rules/2ee8b8/proposed/)
- [Element with presentational children has no focusable content](/standards-guidelines/act/rules/307n5z/proposed/)
- [Error message describes invalid form field value](/standards-guidelines/act/rules/36b590/proposed/)
- [Block of repeated content is collapsible](/standards-guidelines/act/rules/3e12e1/proposed/)
- [Element marked as decorative is not exposed](/standards-guidelines/act/rules/46ca7f/proposed/)
- [Element with role attribute has required states and properties](/standards-guidelines/act/rules/4e8ab6/proposed/)
- [ARIA state or property is permitted](/standards-guidelines/act/rules/5c01ea/proposed/)
- [Link in context is descriptive](/standards-guidelines/act/rules/5effbb/proposed/)
- [Role attribute has valid value](/standards-guidelines/act/rules/674b10/proposed/)
- [Autocomplete attribute has valid value](/standards-guidelines/act/rules/73f2c2/proposed/)
- [Device motion based changes to the content can also be created from the user interface](/standards-guidelines/act/rules/7677a9/proposed/)
- [Object element rendering non-text content has non-empty accessible name](/standards-guidelines/act/rules/8fc3b6/proposed/)
- [Button has non-empty accessible name](/standards-guidelines/act/rules/97a4e1/proposed/)
- [Image filename is accessible name for image](/standards-guidelines/act/rules/9eb3f6/proposed/)
- [Headers attribute specified on a cell refers to cells in the same table element](/standards-guidelines/act/rules/a25f45/proposed/)
- [Text has minimum contrast](/standards-guidelines/act/rules/afw4f7/proposed/)
- [Link is descriptive](/standards-guidelines/act/rules/aizyf1/proposed/)
- [Links with identical accessible names have equivalent purpose](/standards-guidelines/act/rules/b20e66/proposed/)
- [Document has a landmark with non-repeated content](/standards-guidelines/act/rules/b40fd1/proposed/)
- [Heading is descriptive](/standards-guidelines/act/rules/b49b2e/proposed/)
- [ARIA required owned elements](/standards-guidelines/act/rules/bc4a75/proposed/)
- [Device motion based changes to the content can be disabled](/standards-guidelines/act/rules/c249d5/proposed/)
- [Link has non-empty accessible name](/standards-guidelines/act/rules/c487ae/proposed/)
- [Iframe element has non-empty accessible name](/standards-guidelines/act/rules/cae760/proposed/)
- [Form field label is descriptive](/standards-guidelines/act/rules/cc0f0a/proposed/)
- [Bypass Blocks of Repeated Content](/standards-guidelines/act/rules/cf77f2/proposed/)
- [Table header cell has assigned cells](/standards-guidelines/act/rules/d0f69e/proposed/)
- [Form field has non-empty accessible name](/standards-guidelines/act/rules/e086e5/proposed/)
- [Image not in the accessibility tree is decorative](/standards-guidelines/act/rules/e88epe/proposed/)
- [Text content that changes automatically can be paused, stopped or hidden](/standards-guidelines/act/rules/efbfc7/proposed/)
- [Links with identical accessible names and same context serve equivalent purpose](/standards-guidelines/act/rules/fd3a94/proposed/)
- [ARIA required context role](/standards-guidelines/act/rules/ff89c9/proposed/)
- [No keyboard shortcut uses only printable characters](/standards-guidelines/act/rules/ffbc54/proposed/)
- [Heading has non-empty accessible name](/standards-guidelines/act/rules/ffd0e9/proposed/)
- [ARIA required ID references exist](/standards-guidelines/act/rules/in6db8/proposed/)
- [ARIA global properties not used where prohibited](/standards-guidelines/act/rules/kb1m8s/proposed/)
- [Menuitem has non-empty accessible name](/standards-guidelines/act/rules/m6b1q3/proposed/)
- [Document has an instrument to move focus to non-repeated content](/standards-guidelines/act/rules/ye5d6e/proposed/)

## Matching characters {#matching-characters}

A sequence of characters is considered to _match_ another if, after removing leading and trailing [whitespace characters][] and replacing remaining occurrences of one or more whitespace characters with a single space, the two sequences of characters are equal character-by-character, ignoring any differences in letter casing.

[whitespace characters]: #whitespace 'Definition of Whitespace'

### Used in rules
- [Visible label is part of accessible name](/standards-guidelines/act/rules/2ee8b8/proposed/)
- [Iframe elements with identical accessible names have equivalent purpose](/standards-guidelines/act/rules/4b1c6c/proposed/)
- [Links with identical accessible names have equivalent purpose](/standards-guidelines/act/rules/b20e66/proposed/)
- [Links with identical accessible names and same context serve equivalent purpose](/standards-guidelines/act/rules/fd3a94/proposed/)

## Most Common Language of an Element {#most-common-element-language}

The _most common language of an element_ is determined by counting the number of _words_ in the [text inheriting its programmatic language][] from this element that are part of any of the languages in the [language subtag registry][]. The same word can be part of multiple languages. In case of ties, the element has several most common languages. If there are no words in the [text inheriting its programmatic language][] from the element, then it has no most common language.

For more details, see [examples of most common language][].

[language subtag registry]: http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry 'Language Subtag Registry'
[text inheriting its programmatic language]: #text-inheriting-language 'Definition of Text Inheriting its Programmatic Language from an Element'
[examples of most common language]: https://www.w3.org/WAI/standards-guidelines/act/rules/terms/element-language/examples/

### Used in rules
- [HTML element language subtag matches language](/standards-guidelines/act/rules/off6ek/proposed/)
- [HTML page language subtag matches default language](/standards-guidelines/act/rules/ucwvc8/proposed/)

## Namespaced Element {#namespaced-element}

An [element][] with a specific [namespaceURI][] value from [HTML namespaces][]. For example an "SVG element" is any element with the "SVG namespace", which is `http://www.w3.org/2000/svg`.

Namespaced elements are not limited to elements described in a specification. They also include custom elements. Elements such as `a` and `title` have a different namespace depending on where they are used. For example a `title` in an HTML page usually has the HTML namespace. When used in an `svg` element, a `title` element has the SVG namespace instead.

[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2021/05/31'
[namespaceuri]: https://dom.spec.whatwg.org/#dom-element-namespaceuri 'DOM Element namespaceURI, 2021/05/31'
[html namespaces]: https://infra.spec.whatwg.org/#namespaces 'HTML namespace, 2021/05/31'

### Used in rules
- [Text has enhanced contrast](/standards-guidelines/act/rules/09o5cg/proposed/)
- [Scrollable content can be reached with sequential focus navigation](/standards-guidelines/act/rules/0ssw9k/proposed/)
- [Image has non-empty accessible name](/standards-guidelines/act/rules/23a2a8/proposed/)
- [Important letter spacing in style attributes is wide enough](/standards-guidelines/act/rules/24afc2/proposed/)
- [HTML page has non-empty title](/standards-guidelines/act/rules/2779a5/proposed/)
- [Element with presentational children has no focusable content](/standards-guidelines/act/rules/307n5z/proposed/)
- [Error message describes invalid form field value](/standards-guidelines/act/rules/36b590/proposed/)
- [Id attribute value is unique](/standards-guidelines/act/rules/3ea0c8/proposed/)
- [Element with role attribute has required states and properties](/standards-guidelines/act/rules/4e8ab6/proposed/)
- [Zoomed text node is not clipped with CSS overflow](/standards-guidelines/act/rules/59br37/proposed/)
- [ARIA state or property is permitted](/standards-guidelines/act/rules/5c01ea/proposed/)
- [Role attribute has valid value](/standards-guidelines/act/rules/674b10/proposed/)
- [ARIA state or property has valid value](/standards-guidelines/act/rules/6a7281/proposed/)
- [Autocomplete attribute has valid value](/standards-guidelines/act/rules/73f2c2/proposed/)
- [Important line height in style attributes is wide enough](/standards-guidelines/act/rules/78fd32/proposed/)
- [SVG element with explicit role has non-empty accessible name](/standards-guidelines/act/rules/7d6734/proposed/)
- [Focusable element has no keyboard trap](/standards-guidelines/act/rules/80af7b/proposed/)
- [Important word spacing in style attributes is wide enough](/standards-guidelines/act/rules/9e45ec/proposed/)
- [Image filename is accessible name for image](/standards-guidelines/act/rules/9eb3f6/proposed/)
- [Focusable element has no keyboard trap via standard navigation](/standards-guidelines/act/rules/a1b64e/proposed/)
- [Text has minimum contrast](/standards-guidelines/act/rules/afw4f7/proposed/)
- [Iframe with interactive elements is not excluded from tab-order](/standards-guidelines/act/rules/akn7bn/proposed/)
- [Links with identical accessible names have equivalent purpose](/standards-guidelines/act/rules/b20e66/proposed/)
- [Orientation of the page is not restricted using CSS transforms](/standards-guidelines/act/rules/b33eff/proposed/)
- [ARIA required owned elements](/standards-guidelines/act/rules/bc4a75/proposed/)
- [Link has non-empty accessible name](/standards-guidelines/act/rules/c487ae/proposed/)
- [Table header cell has assigned cells](/standards-guidelines/act/rules/d0f69e/proposed/)
- [Element with lang attribute has valid language tag](/standards-guidelines/act/rules/de46e4/proposed/)
- [Focusable element has no keyboard trap via non-standard navigation](/standards-guidelines/act/rules/ebe86a/proposed/)
- [Text content that changes automatically can be paused, stopped or hidden](/standards-guidelines/act/rules/efbfc7/proposed/)
- [Links with identical accessible names and same context serve equivalent purpose](/standards-guidelines/act/rules/fd3a94/proposed/)
- [ARIA required context role](/standards-guidelines/act/rules/ff89c9/proposed/)
- [Heading has non-empty accessible name](/standards-guidelines/act/rules/ffd0e9/proposed/)
- [ARIA required ID references exist](/standards-guidelines/act/rules/in6db8/proposed/)
- [ARIA global properties not used where prohibited](/standards-guidelines/act/rules/kb1m8s/proposed/)
- [Menuitem has non-empty accessible name](/standards-guidelines/act/rules/m6b1q3/proposed/)
- [HTML element language subtag matches language](/standards-guidelines/act/rules/off6ek/proposed/)

## Non-repeated content after repeated content {#non-repeated-content}

A node is _non-repeated content after repeated content_ if all the following are true:

- the node is [perceivable content][]; and
- the node is not part of any [block of repeated content][]; and
- the node is after (in [tree order][] in the [flat tree][]) at least one [block of repeated content][].

[block of repeated content]: #block-of-repeated-content 'Definition of Block of Repeated Content'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS Definition of Flat Tree'
[perceivable content]: #perceivable-content 'Definition of Perceivable Content'
[tree order]: https://dom.spec.whatwg.org/#concept-tree-order 'DOM specification of Tree Order'

### Used in rules
- [Document has heading for non-repeated content](/standards-guidelines/act/rules/047fe0/proposed/)
- [Block of repeated content is collapsible](/standards-guidelines/act/rules/3e12e1/proposed/)
- [Document has a landmark with non-repeated content](/standards-guidelines/act/rules/b40fd1/proposed/)
- [Bypass Blocks of Repeated Content](/standards-guidelines/act/rules/cf77f2/proposed/)
- [Document has an instrument to move focus to non-repeated content](/standards-guidelines/act/rules/ye5d6e/proposed/)

## Non-streaming media element {#non-streaming-media-element}

A _non-streaming media element_ is an [HTML Media Element](https://html.spec.whatwg.org/multipage/media.html#htmlmediaelement) for which the `duration` property is not 0.

### Used in rules
- [Audio and visuals of video element have transcript](/standards-guidelines/act/rules/1a02b0/proposed/)
- [Video element visual content has audio description](/standards-guidelines/act/rules/1ea59c/proposed/)
- [Video element visual content has strict accessible alternative](/standards-guidelines/act/rules/1ec09b/proposed/)
- [Audio element content has transcript](/standards-guidelines/act/rules/2eb176/proposed/)
- [Video element content is media alternative for text](/standards-guidelines/act/rules/ab4d13/proposed/)
- [Video element visual-only content has description track](/standards-guidelines/act/rules/ac7dc6/proposed/)
- [Audio element content is media alternative for text](/standards-guidelines/act/rules/afb423/proposed/)
- [Video element visual-only content has accessible alternative](/standards-guidelines/act/rules/c3232f/proposed/)
- [Video element visual content has accessible alternative](/standards-guidelines/act/rules/c5a4ea/proposed/)
- [Video element visual-only content has audio track alternative](/standards-guidelines/act/rules/d7ba54/proposed/)
- [Audio element content has text alternative](/standards-guidelines/act/rules/e7aa44/proposed/)
- [Video element auditory content has accessible alternative](/standards-guidelines/act/rules/eac66b/proposed/)
- [Video element visual-only content has transcript](/standards-guidelines/act/rules/ee13b5/proposed/)
- [Video element visual content has description track](/standards-guidelines/act/rules/f196ce/proposed/)
- [Video element auditory content has captions](/standards-guidelines/act/rules/f51b46/proposed/)
- [Video element visual-only content is media alternative for text](/standards-guidelines/act/rules/fd26cf/proposed/)

## Outcome {#outcome}

A conclusion that comes from evaluating an ACT Rule on a [test subject][] or one of its constituent test target. An outcome can be one of the five following types:

- **Inapplicable:** No part of the test subject matches the applicability
- **Passed:** A [test target][] meets all expectations
- **Failed:** A [test target][] does not meet all expectations
- **cantTell:** Whether the rule is applicable, or not all expectations were met could not be fully determined by the tester.
- **Untested**: The tester has not attempted to evaluate the test subject.

**Note**: A rule has one `passed` or `failed` outcome for every [test target][]. When a tester evaluates a test target it can also be reported as `cantTell` if the rule cannot be tested in its entirety. For example, when applicability was automated, but the expectations have to be evaluated manually.

When there are no test targets the rule has one `inapplicable` outcome. If the tester is unable to determine whether there are test targets there will be one `cantTell` outcome. And when no evaluation has occurred the test target has one untested outcome. This means that each [test subject][] always has one or more outcomes.

Outcomes used in ACT Rules can be expressed using the [outcome property][] of the [EARL10-Schema][earl10-schema].

[test subject]: https://www.w3.org/TR/act-rules-format-1.1/#test-subject
[test target]: https://www.w3.org/TR/act-rules-format/#test-target
[outcome property]: https://www.w3.org/TR/EARL10-Schema/#outcome
[earl10-schema]: https://www.w3.org/TR/act-rules-format-1.1/#biblio-earl10-schema

### Used in rules
- [Document has heading for non-repeated content](/standards-guidelines/act/rules/047fe0/proposed/)
- [Text has enhanced contrast](/standards-guidelines/act/rules/09o5cg/proposed/)
- [Scrollable content can be reached with sequential focus navigation](/standards-guidelines/act/rules/0ssw9k/proposed/)
- [HTML images contain no text](/standards-guidelines/act/rules/0va7u6/proposed/)
- [Audio and visuals of video element have transcript](/standards-guidelines/act/rules/1a02b0/proposed/)
- [Video element visual content has audio description](/standards-guidelines/act/rules/1ea59c/proposed/)
- [Video element visual content has strict accessible alternative](/standards-guidelines/act/rules/1ec09b/proposed/)
- [Image has non-empty accessible name](/standards-guidelines/act/rules/23a2a8/proposed/)
- [Important letter spacing in style attributes is wide enough](/standards-guidelines/act/rules/24afc2/proposed/)
- [HTML page has non-empty title](/standards-guidelines/act/rules/2779a5/proposed/)
- [Audio element content has transcript](/standards-guidelines/act/rules/2eb176/proposed/)
- [Visible label is part of accessible name](/standards-guidelines/act/rules/2ee8b8/proposed/)
- [Summary element has non-empty accessible name](/standards-guidelines/act/rules/2t702h/proposed/)
- [Element with presentational children has no focusable content](/standards-guidelines/act/rules/307n5z/proposed/)
- [Error message describes invalid form field value](/standards-guidelines/act/rules/36b590/proposed/)
- [Block of repeated content is collapsible](/standards-guidelines/act/rules/3e12e1/proposed/)
- [Id attribute value is unique](/standards-guidelines/act/rules/3ea0c8/proposed/)
- [Element marked as decorative is not exposed](/standards-guidelines/act/rules/46ca7f/proposed/)
- [Iframe elements with identical accessible names have equivalent purpose](/standards-guidelines/act/rules/4b1c6c/proposed/)
- [Audio or video element that plays automatically has a control mechanism](/standards-guidelines/act/rules/4c31df/proposed/)
- [Element with role attribute has required states and properties](/standards-guidelines/act/rules/4e8ab6/proposed/)
- [Image button has non-empty accessible name](/standards-guidelines/act/rules/59796f/proposed/)
- [Zoomed text node is not clipped with CSS overflow](/standards-guidelines/act/rules/59br37/proposed/)
- [HTML page lang and xml:lang attributes have matching values](/standards-guidelines/act/rules/5b7ae0/proposed/)
- [ARIA state or property is permitted](/standards-guidelines/act/rules/5c01ea/proposed/)
- [Link in context is descriptive](/standards-guidelines/act/rules/5effbb/proposed/)
- [ARIA attribute is defined in WAI-ARIA](/standards-guidelines/act/rules/5f99a7/proposed/)
- [Role attribute has valid value](/standards-guidelines/act/rules/674b10/proposed/)
- [ARIA state or property has valid value](/standards-guidelines/act/rules/6a7281/proposed/)
- [Element with aria-hidden has no content in sequential focus navigation](/standards-guidelines/act/rules/6cfa84/proposed/)
- [Autocomplete attribute has valid value](/standards-guidelines/act/rules/73f2c2/proposed/)
- [Device motion based changes to the content can also be created from the user interface](/standards-guidelines/act/rules/7677a9/proposed/)
- [Important line height in style attributes is wide enough](/standards-guidelines/act/rules/78fd32/proposed/)
- [SVG element with explicit role has non-empty accessible name](/standards-guidelines/act/rules/7d6734/proposed/)
- [Focusable element has no keyboard trap](/standards-guidelines/act/rules/80af7b/proposed/)
- [Audio or video element avoids automatically playing audio](/standards-guidelines/act/rules/80f0bf/proposed/)
- [Object element rendering non-text content has non-empty accessible name](/standards-guidelines/act/rules/8fc3b6/proposed/)
- [Button has non-empty accessible name](/standards-guidelines/act/rules/97a4e1/proposed/)
- [Content has alternative for visual reference](/standards-guidelines/act/rules/9bd38c/proposed/)
- [Important word spacing in style attributes is wide enough](/standards-guidelines/act/rules/9e45ec/proposed/)
- [Image filename is accessible name for image](/standards-guidelines/act/rules/9eb3f6/proposed/)
- [Focusable element has no keyboard trap via standard navigation](/standards-guidelines/act/rules/a1b64e/proposed/)
- [Headers attribute specified on a cell refers to cells in the same table element](/standards-guidelines/act/rules/a25f45/proposed/)
- [Audio or video element that plays automatically has no audio that lasts more than 3 seconds](/standards-guidelines/act/rules/aaa1bf/proposed/)
- [Video element content is media alternative for text](/standards-guidelines/act/rules/ab4d13/proposed/)
- [Video element visual-only content has description track](/standards-guidelines/act/rules/ac7dc6/proposed/)
- [Audio element content is media alternative for text](/standards-guidelines/act/rules/afb423/proposed/)
- [Text has minimum contrast](/standards-guidelines/act/rules/afw4f7/proposed/)
- [Link is descriptive](/standards-guidelines/act/rules/aizyf1/proposed/)
- [Iframe with interactive elements is not excluded from tab-order](/standards-guidelines/act/rules/akn7bn/proposed/)
- [Links with identical accessible names have equivalent purpose](/standards-guidelines/act/rules/b20e66/proposed/)
- [Orientation of the page is not restricted using CSS transforms](/standards-guidelines/act/rules/b33eff/proposed/)
- [Document has a landmark with non-repeated content](/standards-guidelines/act/rules/b40fd1/proposed/)
- [Heading is descriptive](/standards-guidelines/act/rules/b49b2e/proposed/)
- [Meta viewport allows for zoom](/standards-guidelines/act/rules/b4f0c3/proposed/)
- [HTML page has lang attribute](/standards-guidelines/act/rules/b5c3f8/proposed/)
- [ARIA required owned elements](/standards-guidelines/act/rules/bc4a75/proposed/)
- [Meta element has no refresh delay](/standards-guidelines/act/rules/bc659a/proposed/)
- [HTML page lang attribute has valid language tag](/standards-guidelines/act/rules/bf051a/proposed/)
- [Meta element has no refresh delay (no exception)](/standards-guidelines/act/rules/bisz58/proposed/)
- [Device motion based changes to the content can be disabled](/standards-guidelines/act/rules/c249d5/proposed/)
- [Video element visual-only content has accessible alternative](/standards-guidelines/act/rules/c3232f/proposed/)
- [Link has non-empty accessible name](/standards-guidelines/act/rules/c487ae/proposed/)
- [HTML page title is descriptive](/standards-guidelines/act/rules/c4a8a4/proposed/)
- [Video element visual content has accessible alternative](/standards-guidelines/act/rules/c5a4ea/proposed/)
- [Iframe element has non-empty accessible name](/standards-guidelines/act/rules/cae760/proposed/)
- [Form field label is descriptive](/standards-guidelines/act/rules/cc0f0a/proposed/)
- [Bypass Blocks of Repeated Content](/standards-guidelines/act/rules/cf77f2/proposed/)
- [Table header cell has assigned cells](/standards-guidelines/act/rules/d0f69e/proposed/)
- [Video element visual-only content has audio track alternative](/standards-guidelines/act/rules/d7ba54/proposed/)
- [Element with lang attribute has valid language tag](/standards-guidelines/act/rules/de46e4/proposed/)
- [Form field has non-empty accessible name](/standards-guidelines/act/rules/e086e5/proposed/)
- [Attribute is not duplicated](/standards-guidelines/act/rules/e6952f/proposed/)
- [Audio element content has text alternative](/standards-guidelines/act/rules/e7aa44/proposed/)
- [Image not in the accessibility tree is decorative](/standards-guidelines/act/rules/e88epe/proposed/)
- [Video element auditory content has accessible alternative](/standards-guidelines/act/rules/eac66b/proposed/)
- [Focusable element has no keyboard trap via non-standard navigation](/standards-guidelines/act/rules/ebe86a/proposed/)
- [Video element visual-only content has transcript](/standards-guidelines/act/rules/ee13b5/proposed/)
- [Text content that changes automatically can be paused, stopped or hidden](/standards-guidelines/act/rules/efbfc7/proposed/)
- [Video element visual content has description track](/standards-guidelines/act/rules/f196ce/proposed/)
- [Video element auditory content has captions](/standards-guidelines/act/rules/f51b46/proposed/)
- [Video element visual-only content is media alternative for text](/standards-guidelines/act/rules/fd26cf/proposed/)
- [Links with identical accessible names and same context serve equivalent purpose](/standards-guidelines/act/rules/fd3a94/proposed/)
- [ARIA required context role](/standards-guidelines/act/rules/ff89c9/proposed/)
- [No keyboard shortcut uses only printable characters](/standards-guidelines/act/rules/ffbc54/proposed/)
- [Heading has non-empty accessible name](/standards-guidelines/act/rules/ffd0e9/proposed/)
- [ARIA required ID references exist](/standards-guidelines/act/rules/in6db8/proposed/)
- [ARIA global properties not used where prohibited](/standards-guidelines/act/rules/kb1m8s/proposed/)
- [Menuitem has non-empty accessible name](/standards-guidelines/act/rules/m6b1q3/proposed/)
- [HTML element language subtag matches language](/standards-guidelines/act/rules/off6ek/proposed/)
- [Element in sequential focus order has visible focus](/standards-guidelines/act/rules/oj04fd/proposed/)
- [Image accessible name is descriptive](/standards-guidelines/act/rules/qt1vmo/proposed/)
- [HTML page language subtag matches default language](/standards-guidelines/act/rules/ucwvc8/proposed/)
- [Document has an instrument to move focus to non-repeated content](/standards-guidelines/act/rules/ye5d6e/proposed/)

## Owned by {#owned-by}

An element A is _owned by_ element B if element A is a child of element B in the [accessibility tree][].

Being a child in the [accessibility tree][] is different from being a child in the DOM tree. Some DOM nodes have no corresponding node in the [accessibility tree][] (for example, because they are marked with `role="presentation"`). A child in the [accessibility tree][] can thus correspond to a descendant in the DOM tree. Additionally, the use of `aria-owns` attribute can change the tree structure to something which is not a subtree of the DOM tree.

This definition is different from the definition of ["owned element" in WAI-ARIA](https://www.w3.org/TR/wai-aria-1.2/#dfn-owned-element). Because browsers have different accessibility trees, which element owns which other elements can vary between browsers. Until there is a standard accessibility tree, testing with multiple accessibility trees may be necessary.

[accessibility tree]: https://www.w3.org/TR/act-rules-aspects/#input-aspects-accessibility 'Definition of accessibility tree'

### Used in rules
- [ARIA required owned elements](/standards-guidelines/act/rules/bc4a75/proposed/)

## Perceivable content {#perceivable-content}

A node is _perceivable content_ if all the following are true:

- the node is [palpable content][]; and
- the node is either [visible][] or [included in the accessibility tree][]; and
- if the node is an element, it does not have a [semantic role][] of `none` or `presentation`.

Perceivable content corresponds to nodes that contain information and are perceived by some categories of users.

#### Assumptions

This definition assumes that elements with a [semantic role][] of `none` or `presentation` are [pure decoration][] and that elements which are [pure decoration][] either are not [included in the accessibility tree][] or have a [semantic role][] of `none` or `presentation`. Note that if this is not the case, then [Success Criterion 1.3.1: Info and Relationship][sc131] is likely not satisfied.

[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[palpable content]: https://html.spec.whatwg.org/multipage/dom.html#palpable-content 'HTML specification of palpable content'
[pure decoration]: https://www.w3.org/TR/WCAG22/#dfn-pure-decoration 'WCAG definition of pure decoration'
[sc131]: https://www.w3.org/TR/WCAG22/#info-and-relationships 'Success Criterion 1.3.1: Info and Relationship'
[semantic role]: #semantic-role 'Definition of semantic role'
[visible]: #visible 'Definition of visible'

### Used in rules
- [Document has heading for non-repeated content](/standards-guidelines/act/rules/047fe0/proposed/)
- [Block of repeated content is collapsible](/standards-guidelines/act/rules/3e12e1/proposed/)
- [Document has a landmark with non-repeated content](/standards-guidelines/act/rules/b40fd1/proposed/)
- [Heading is descriptive](/standards-guidelines/act/rules/b49b2e/proposed/)
- [Bypass Blocks of Repeated Content](/standards-guidelines/act/rules/cf77f2/proposed/)
- [Document has an instrument to move focus to non-repeated content](/standards-guidelines/act/rules/ye5d6e/proposed/)

## Play button {#play-button}

A play button is an [instrument][] that when [activated][] plays a [media resource][].

[activated]: https://html.spec.whatwg.org/#activation
[instrument]: #instrument-to-achieve-an-objective
[media resource]: https://html.spec.whatwg.org/multipage/media.html#media-resource

### Used in rules
- [Audio element content has transcript](/standards-guidelines/act/rules/2eb176/proposed/)
- [Audio element content is media alternative for text](/standards-guidelines/act/rules/afb423/proposed/)
- [Audio element content has text alternative](/standards-guidelines/act/rules/e7aa44/proposed/)

## Known Primary Language Tag {#known-primary-language-tag}

A language tag has a _known primary language tag_ if its [primary language subtag][] exists in the [language subtag registry][] with a [Type field][] whose field-body value is `language`.

A "language tag" is here to be understood as in the first paragraph of the [RFC 5646 language tag syntax][language tag], i.e. a sequence of subtags separated by hyphens, where a subtag is any sequence of alphanumerical characters. [Language tag][] that are not valid according to the stricter [RFC 5646 syntax][language tag] (and ABNF grammar) definition can still have a known primary language tag. User agents and assistive technologies are more lenient in what they accept. This definition is consistent with the behavior of the `:lang()` pseudo-selector as defined by [Selectors Level 3][].

As an example, `de-hello` would be an accepted way to indicate German in current user agents and assistive technologies, despite not being valid according to [RFC 5646 grammar][language tag]. It has a known primary language tag (namely, `de`).

As a consequence of this definition, however, [grandfathered tags][] do not have a known primary language tag.

Subtags, notably the [primary language subtag][], are [case insensitive][]. Comparison with the [language subtag registry][] must be done in a case insensitive way.

[case insensitive]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.1.1
[grandfathered tags]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.2.8
[language subtag registry]: http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry
[language tag]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.1
[primary language subtag]: https://www.rfc-editor.org/rfc/rfc5646.html#section-2.2.1
[selectors level 3]: https://drafts.csswg.org/selectors-3/#lang-pseudo
[type field]: https://www.rfc-editor.org/rfc/rfc5646.html#section-3.1.3

### Used in rules
- [HTML page lang and xml:lang attributes have matching values](/standards-guidelines/act/rules/5b7ae0/proposed/)
- [HTML page lang attribute has valid language tag](/standards-guidelines/act/rules/bf051a/proposed/)
- [Element with lang attribute has valid language tag](/standards-guidelines/act/rules/de46e4/proposed/)
- [HTML element language subtag matches language](/standards-guidelines/act/rules/off6ek/proposed/)
- [HTML page language subtag matches default language](/standards-guidelines/act/rules/ucwvc8/proposed/)

## Printable characters {#printable-characters}

A _printable character_ is a character that occupies a printing position on a display.

These characters correspond to the following [Unicode categories](https://www.unicode.org/versions/Unicode12.0.0/ch04.pdf):

- Letter: 'LC', 'Ll', 'Lm', 'Lo', 'Lt', 'Lu'
- Number: 'Nd', 'Nl', 'No'
- Mark: 'Mc', 'Me', 'Mn'
- Punctuation: 'Pc', 'Pd', 'Pe', 'Pf', 'Pi', 'Po', 'Ps'
- Symbol: 'Sc', 'Sk', 'Sm', 'So'
- Space: 'Zs'

### Used in rules
- [No keyboard shortcut uses only printable characters](/standards-guidelines/act/rules/ffbc54/proposed/)

## Programmatic Label {#programmatic-label}

Element L is a _programmatic label_ of target element T if either:

- T is a [labeled control][] of L; or
- L is referenced by ID in the `aria-labelledby` attribute of T.

For more details, see [examples of programmatic label][].

**Note**: a given element may have more than one programmatic label.

[labeled control]: https://html.spec.whatwg.org/multipage/forms.html#labeled-control 'Definition of labeled control'
[examples of programmatic label]: https://www.w3.org/WAI/standards-guidelines/act/rules/terms/programmatic-label/examples/

### Used in rules
- [Id attribute value is unique](/standards-guidelines/act/rules/3ea0c8/proposed/)
- [Form field label is descriptive](/standards-guidelines/act/rules/cc0f0a/proposed/)
- [Form field has non-empty accessible name](/standards-guidelines/act/rules/e086e5/proposed/)

## Programmatically Determined Link Context {#programmatically-determined-link-context}

The _programmatically determined context_ of a link (or _programmatically determined link context_) is the set of all elements that are [included in the accessibility tree][], and have one or more of the following relationships to the link:

- being an [ancestor][] of the link in the [flat tree][] with a [semantic role][] of `listitem`; or
- being the closest [ancestor][] of the link in the [flat tree][] that generates a [block container][]; or
- being the closest [ancestor][] of the link in the [flat tree][] that has a [semantic role][] of `cell` or `gridcell`; or
- being a header cell [assigned][] to the closest [ancestor][] of the link in the [flat tree][] that has a [semantic role][] of `cell` or `gridcell`; or
- being referenced by an `aria-describedby` attribute of the link.

This definition is based on (but not equivalent to) the [WCAG definition of programmatically determined link context](https://www.w3.org/TR/WCAG22/#dfn-programmatically-determined-link-context).

This definition assumes that the HTML document with the link is a document using HTML according to the specification.

[ancestor]: https://dom.spec.whatwg.org/#concept-tree-ancestor 'DOM, ancestor, 2021/11/29'
[assigned]: https://html.spec.whatwg.org/multipage/tables.html#algorithm-for-assigning-header-cells 'HTML, algorithm for assigning header cells, 2021/11/29'
[block container]: https://drafts.csswg.org/css-display/#block-container 'CSS Display Module Level 3, block container, 2022/01/17'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS Scoping Module Level 1, flat tree, 2021/11/29'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[semantic role]: #semantic-role 'Definition of semantic role'

### Used in rules
- [Link in context is descriptive](/standards-guidelines/act/rules/5effbb/proposed/)
- [Links with identical accessible names and same context serve equivalent purpose](/standards-guidelines/act/rules/fd3a94/proposed/)

## Programmatically Hidden {#programmatically-hidden}

An HTML element is _programmatically hidden_ if either it has a [computed][] CSS property `visibility` whose value is not `visible`; or at least one of the following is true for any of its [inclusive ancestors][] in the [flat tree][]:

- has a [computed][] CSS property `display` of `none`; or
- has an `aria-hidden` attribute set to `true`

**Note**: Contrary to the other conditions, the `visibility` CSS property may be reverted by descendants.

**Note**: The [HTML standard suggests](https://html.spec.whatwg.org/multipage/rendering.html#hidden-elements) setting the CSS `display` property to `none` for elements with the `hidden` attribute. While not required by HTML, all modern browsers follow this suggestion. Because of this the `hidden` attribute is not used in this definition. In browsers that use this suggestion, overriding the CSS `display` property can reveal elements with the `hidden` attribute.

[computed]: https://www.w3.org/TR/css-cascade/#computed-value 'CSS definition of computed value'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'Definition of flat tree'
[inclusive ancestors]: https://dom.spec.whatwg.org/#concept-tree-inclusive-ancestor 'DOM Definition of Inclusive Ancestor'

### Used in rules
- [Document has heading for non-repeated content](/standards-guidelines/act/rules/047fe0/proposed/)
- [Text has enhanced contrast](/standards-guidelines/act/rules/09o5cg/proposed/)
- [Audio and visuals of video element have transcript](/standards-guidelines/act/rules/1a02b0/proposed/)
- [Image has non-empty accessible name](/standards-guidelines/act/rules/23a2a8/proposed/)
- [Audio element content has transcript](/standards-guidelines/act/rules/2eb176/proposed/)
- [Visible label is part of accessible name](/standards-guidelines/act/rules/2ee8b8/proposed/)
- [Summary element has non-empty accessible name](/standards-guidelines/act/rules/2t702h/proposed/)
- [Element with presentational children has no focusable content](/standards-guidelines/act/rules/307n5z/proposed/)
- [Error message describes invalid form field value](/standards-guidelines/act/rules/36b590/proposed/)
- [Block of repeated content is collapsible](/standards-guidelines/act/rules/3e12e1/proposed/)
- [Id attribute value is unique](/standards-guidelines/act/rules/3ea0c8/proposed/)
- [Element marked as decorative is not exposed](/standards-guidelines/act/rules/46ca7f/proposed/)
- [Iframe elements with identical accessible names have equivalent purpose](/standards-guidelines/act/rules/4b1c6c/proposed/)
- [Audio or video element that plays automatically has a control mechanism](/standards-guidelines/act/rules/4c31df/proposed/)
- [Element with role attribute has required states and properties](/standards-guidelines/act/rules/4e8ab6/proposed/)
- [Image button has non-empty accessible name](/standards-guidelines/act/rules/59796f/proposed/)
- [ARIA state or property is permitted](/standards-guidelines/act/rules/5c01ea/proposed/)
- [Link in context is descriptive](/standards-guidelines/act/rules/5effbb/proposed/)
- [Role attribute has valid value](/standards-guidelines/act/rules/674b10/proposed/)
- [Element with aria-hidden has no content in sequential focus navigation](/standards-guidelines/act/rules/6cfa84/proposed/)
- [Autocomplete attribute has valid value](/standards-guidelines/act/rules/73f2c2/proposed/)
- [Device motion based changes to the content can also be created from the user interface](/standards-guidelines/act/rules/7677a9/proposed/)
- [SVG element with explicit role has non-empty accessible name](/standards-guidelines/act/rules/7d6734/proposed/)
- [Object element rendering non-text content has non-empty accessible name](/standards-guidelines/act/rules/8fc3b6/proposed/)
- [Button has non-empty accessible name](/standards-guidelines/act/rules/97a4e1/proposed/)
- [Content has alternative for visual reference](/standards-guidelines/act/rules/9bd38c/proposed/)
- [Image filename is accessible name for image](/standards-guidelines/act/rules/9eb3f6/proposed/)
- [Headers attribute specified on a cell refers to cells in the same table element](/standards-guidelines/act/rules/a25f45/proposed/)
- [Video element content is media alternative for text](/standards-guidelines/act/rules/ab4d13/proposed/)
- [Audio element content is media alternative for text](/standards-guidelines/act/rules/afb423/proposed/)
- [Text has minimum contrast](/standards-guidelines/act/rules/afw4f7/proposed/)
- [Link is descriptive](/standards-guidelines/act/rules/aizyf1/proposed/)
- [Links with identical accessible names have equivalent purpose](/standards-guidelines/act/rules/b20e66/proposed/)
- [Document has a landmark with non-repeated content](/standards-guidelines/act/rules/b40fd1/proposed/)
- [Heading is descriptive](/standards-guidelines/act/rules/b49b2e/proposed/)
- [ARIA required owned elements](/standards-guidelines/act/rules/bc4a75/proposed/)
- [Device motion based changes to the content can be disabled](/standards-guidelines/act/rules/c249d5/proposed/)
- [Link has non-empty accessible name](/standards-guidelines/act/rules/c487ae/proposed/)
- [Iframe element has non-empty accessible name](/standards-guidelines/act/rules/cae760/proposed/)
- [Form field label is descriptive](/standards-guidelines/act/rules/cc0f0a/proposed/)
- [Bypass Blocks of Repeated Content](/standards-guidelines/act/rules/cf77f2/proposed/)
- [Table header cell has assigned cells](/standards-guidelines/act/rules/d0f69e/proposed/)
- [Element with lang attribute has valid language tag](/standards-guidelines/act/rules/de46e4/proposed/)
- [Form field has non-empty accessible name](/standards-guidelines/act/rules/e086e5/proposed/)
- [Audio element content has text alternative](/standards-guidelines/act/rules/e7aa44/proposed/)
- [Image not in the accessibility tree is decorative](/standards-guidelines/act/rules/e88epe/proposed/)
- [Focusable element has no keyboard trap via non-standard navigation](/standards-guidelines/act/rules/ebe86a/proposed/)
- [Video element visual-only content has transcript](/standards-guidelines/act/rules/ee13b5/proposed/)
- [Text content that changes automatically can be paused, stopped or hidden](/standards-guidelines/act/rules/efbfc7/proposed/)
- [Video element visual-only content is media alternative for text](/standards-guidelines/act/rules/fd26cf/proposed/)
- [Links with identical accessible names and same context serve equivalent purpose](/standards-guidelines/act/rules/fd3a94/proposed/)
- [ARIA required context role](/standards-guidelines/act/rules/ff89c9/proposed/)
- [No keyboard shortcut uses only printable characters](/standards-guidelines/act/rules/ffbc54/proposed/)
- [Heading has non-empty accessible name](/standards-guidelines/act/rules/ffd0e9/proposed/)
- [ARIA required ID references exist](/standards-guidelines/act/rules/in6db8/proposed/)
- [ARIA global properties not used where prohibited](/standards-guidelines/act/rules/kb1m8s/proposed/)
- [Menuitem has non-empty accessible name](/standards-guidelines/act/rules/m6b1q3/proposed/)
- [HTML element language subtag matches language](/standards-guidelines/act/rules/off6ek/proposed/)
- [Image accessible name is descriptive](/standards-guidelines/act/rules/qt1vmo/proposed/)
- [HTML page language subtag matches default language](/standards-guidelines/act/rules/ucwvc8/proposed/)
- [Document has an instrument to move focus to non-repeated content](/standards-guidelines/act/rules/ye5d6e/proposed/)

## Rendered Image Resource {#rendered-image-resource}

A _rendered image resource_ in a [web page][] is any resource with [visible pixels][] that has been specified in the list of [image sources][] of an [embedded image][].

[embedded image]: #embedded-image 'Definition of Embedded Image'
[image sources]: https://html.spec.whatwg.org/multipage/images.html#image-source
[visible pixels]: #visible 'Definition of visible'
[web page]: #web-page-html 'Definition of web page (HTML)'

### Used in rules
- [HTML images contain no text](/standards-guidelines/act/rules/0va7u6/proposed/)

## Same key events {#same-key-events}

Two [keyboard events][] are _same key events_ if they have the same value for all the following attributes:

- `key`
- `code`
- `location`
- `repeat`
- `isComposing`

[keyboard events]: https://www.w3.org/TR/uievents/#events-keyboardevents

### Used in rules
- [No keyboard shortcut uses only printable characters](/standards-guidelines/act/rules/ffbc54/proposed/)

## Same resource {#same-resource}

Two or more resources can be the _same resource_ even though the URLs for them are different. This can be due to URL parsing, server settings, redirects and DNS aliasing.

If the [parsed URLs](https://html.spec.whatwg.org/#resolving-urls) for two resources are identical, the resources are the same resource.

Depending on the server, URLs can either be case-sensitive or case-insensitive, meaning that `<a href="page1.html">` and `<a href="Page1.html">` lead to either the same or two different pages.

Fully parsed URLs can be different, but still lead to the same resource after making the HTTP request, due to redirects and DNS aliasing. For example, these URLs are all fully normalized: http://example.com/, http://www.example.com/, https://www.example.com/. The server can however be configured to serve the same site for http and https, and the same site for example.com and www.example.com. This is common, but not guaranteed.

Some types of redirects are also caused by user agents, e.g. ensuring that http://example.com/ and http://example.com resolve to the same resource.

On the other hand, identical relative URLs do not necessarily resolve to the same resource, even if they are in the same [web page (HTML)](#web-page-html). This happen because external content can be included through `iframe` and URLs in or out of it will resolve relatively to different base URLs.

### Used in rules
- [Iframe elements with identical accessible names have equivalent purpose](/standards-guidelines/act/rules/4b1c6c/proposed/)
- [Links with identical accessible names have equivalent purpose](/standards-guidelines/act/rules/b20e66/proposed/)
- [Links with identical accessible names and same context serve equivalent purpose](/standards-guidelines/act/rules/fd3a94/proposed/)

## Scrollable Elements {#scrollable-element}

A scrollable element is an [element][] with a _horizontal scroll distance_ or a _vertical scroll distance_ greater than 0.

- **horizontal scroll distance**: The difference between [scrollWidth][] and [clientWidth] for elements where the [computed][] [overflow-x][] is `auto` or `scroll`. Undefined for other elements.

- **vertical scroll distance**: The difference between [scrollHeight][] and [clientHeight] for elements where the [computed][] [overflow-y][] is `auto` or `scroll`. Undefined for other elements.

**note**: Elements such as `iframe` which can render a [nested browsing context][] are not _scrollable elements_. The scrollbars on some `iframe` elements come from the content inside the [nested browsing context][].

[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2020/04/03'
[computed]: https://www.w3.org/TR/css-cascade-3/#computed-value
[overflow-x]: https://www.w3.org/TR/css-overflow-3/#propdef-overflow-x 'CSS Overflow working draft, overflow-x, 2020/04/03'
[overflow-y]: https://www.w3.org/TR/css-overflow-3/#propdef-overflow-y 'CSS Overflow working draft, overflow-y, 2020/04/03'
[clientwidth]: https://www.w3.org/TR/cssom-view/#dom-element-clientwidth 'CSSOM working draft, Element.clientHeight, 2020/04/03'
[clientheight]: https://www.w3.org/TR/cssom-view/#dom-element-clientheight 'CSSOM working draft, Element.clientHeight, 2020/04/03'
[scrollwidth]: https://www.w3.org/TR/cssom-view/#dom-element-scrollwidth 'CSS working draft, Element.scrollHeight, 2020/04/03'
[scrollheight]: https://www.w3.org/TR/cssom-view/#dom-element-scrollheight 'CSS working draft, Element.clientHeight, 2020/04/03'
[nested browsing context]: https://html.spec.whatwg.org/#nested-browsing-context 'HTML nested browsing context, 2020/04/03'

### Used in rules
- [Scrollable content can be reached with sequential focus navigation](/standards-guidelines/act/rules/0ssw9k/proposed/)

## Semantic Role {#semantic-role}

The _semantic role_ of an element is determined by the first of these cases that applies:

1. **Conflict** If the element is [marked as decorative][], but the element is [included in the accessibility tree][]; or would be [included in the accessibility tree][] when it is not [programmatically hidden][], then its _semantic role_ is its **[implicit role][]**.
1. **Explicit** If the element has an [explicit role][], then its _semantic role_ is its [explicit role][].
1. **Implicit** The _semantic role_ of the element is its [implicit role][].

This definition can be used in expressions such as "semantic `button`" meaning any element with a semantic role of `button`.

#### Accessibility Support for Definition of Semantic Role

- There exist popular web browsers and assistive technologies which do not correctly implement [Presentational Roles Conflict Resolution][]. These technologies will not [include in the accessibility tree][included in the accessibility tree] elements that should be, according to Specifications. Thus, some elements that should have their _semantic role_ fixed by case **Conflict** above are instead falling into case **Explicit** and are hidden for users of assistive technologies.
- A similar conflict exists for [focusable][] elements with a `aria-hidden="true"` attribute. The WAI ARIA specification does not explain how to solve it. Some browsers give precedence to the element being focusable (and expose it in the accessibility tree) while some give precedence to the `aria-hidden` attribute (and hide the element).

[explicit role]: #explicit-role 'Definition of Explicit Role'
[focusable]: #focusable 'Definition of Focusable'
[implicit role]: #implicit-role 'Definition of Implicit Role'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as Decorative'
[presentational roles conflict resolution]: https://www.w3.org/TR/wai-aria-1.2/#conflict_resolution_presentation_none 'Presentational Roles Conflict Resolution'
[programmatically hidden]: #programmatically-hidden 'Definition of Programmatically Hidden'

### Used in rules
- [Document has heading for non-repeated content](/standards-guidelines/act/rules/047fe0/proposed/)
- [Text has enhanced contrast](/standards-guidelines/act/rules/09o5cg/proposed/)
- [Image has non-empty accessible name](/standards-guidelines/act/rules/23a2a8/proposed/)
- [Visible label is part of accessible name](/standards-guidelines/act/rules/2ee8b8/proposed/)
- [Element with presentational children has no focusable content](/standards-guidelines/act/rules/307n5z/proposed/)
- [Error message describes invalid form field value](/standards-guidelines/act/rules/36b590/proposed/)
- [Block of repeated content is collapsible](/standards-guidelines/act/rules/3e12e1/proposed/)
- [Element marked as decorative is not exposed](/standards-guidelines/act/rules/46ca7f/proposed/)
- [Element with role attribute has required states and properties](/standards-guidelines/act/rules/4e8ab6/proposed/)
- [ARIA state or property is permitted](/standards-guidelines/act/rules/5c01ea/proposed/)
- [Link in context is descriptive](/standards-guidelines/act/rules/5effbb/proposed/)
- [Role attribute has valid value](/standards-guidelines/act/rules/674b10/proposed/)
- [Autocomplete attribute has valid value](/standards-guidelines/act/rules/73f2c2/proposed/)
- [Device motion based changes to the content can also be created from the user interface](/standards-guidelines/act/rules/7677a9/proposed/)
- [Button has non-empty accessible name](/standards-guidelines/act/rules/97a4e1/proposed/)
- [Image filename is accessible name for image](/standards-guidelines/act/rules/9eb3f6/proposed/)
- [Headers attribute specified on a cell refers to cells in the same table element](/standards-guidelines/act/rules/a25f45/proposed/)
- [Text has minimum contrast](/standards-guidelines/act/rules/afw4f7/proposed/)
- [Link is descriptive](/standards-guidelines/act/rules/aizyf1/proposed/)
- [Links with identical accessible names have equivalent purpose](/standards-guidelines/act/rules/b20e66/proposed/)
- [Document has a landmark with non-repeated content](/standards-guidelines/act/rules/b40fd1/proposed/)
- [Heading is descriptive](/standards-guidelines/act/rules/b49b2e/proposed/)
- [ARIA required owned elements](/standards-guidelines/act/rules/bc4a75/proposed/)
- [Device motion based changes to the content can be disabled](/standards-guidelines/act/rules/c249d5/proposed/)
- [Link has non-empty accessible name](/standards-guidelines/act/rules/c487ae/proposed/)
- [Form field label is descriptive](/standards-guidelines/act/rules/cc0f0a/proposed/)
- [Bypass Blocks of Repeated Content](/standards-guidelines/act/rules/cf77f2/proposed/)
- [Table header cell has assigned cells](/standards-guidelines/act/rules/d0f69e/proposed/)
- [Form field has non-empty accessible name](/standards-guidelines/act/rules/e086e5/proposed/)
- [Image not in the accessibility tree is decorative](/standards-guidelines/act/rules/e88epe/proposed/)
- [Text content that changes automatically can be paused, stopped or hidden](/standards-guidelines/act/rules/efbfc7/proposed/)
- [Links with identical accessible names and same context serve equivalent purpose](/standards-guidelines/act/rules/fd3a94/proposed/)
- [ARIA required context role](/standards-guidelines/act/rules/ff89c9/proposed/)
- [No keyboard shortcut uses only printable characters](/standards-guidelines/act/rules/ffbc54/proposed/)
- [Heading has non-empty accessible name](/standards-guidelines/act/rules/ffd0e9/proposed/)
- [ARIA required ID references exist](/standards-guidelines/act/rules/in6db8/proposed/)
- [ARIA global properties not used where prohibited](/standards-guidelines/act/rules/kb1m8s/proposed/)
- [Menuitem has non-empty accessible name](/standards-guidelines/act/rules/m6b1q3/proposed/)
- [Document has an instrument to move focus to non-repeated content](/standards-guidelines/act/rules/ye5d6e/proposed/)

## Set of clearly labeled instruments {#set-of-clearly-labeled-instruments}

A _set of clearly labeled instruments_ is a set of [instruments][instrument], where each [instrument][] is in the same [web page][] as the test target or can be found in a [clearly labeled location][] from that [web page][].

[clearly labeled location]: #clearly-labeled-location 'Definition of clearly labeled location'
[web page]: #web-page-html 'Definition of web page'
[instrument]: #instrument-to-achieve-an-objective 'Definition of instrument to achieve an objective'

### Used in rules
- [Device motion based changes to the content can be disabled](/standards-guidelines/act/rules/c249d5/proposed/)
- [No keyboard shortcut uses only printable characters](/standards-guidelines/act/rules/ffbc54/proposed/)

## Standard keyboard navigation {#standard-keyboard-navigation}

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

[focusable]: #focusable 'Definition of focusable'

### Used in rules
- [Focusable element has no keyboard trap](/standards-guidelines/act/rules/80af7b/proposed/)
- [Focusable element has no keyboard trap via standard navigation](/standards-guidelines/act/rules/a1b64e/proposed/)
- [Focusable element has no keyboard trap via non-standard navigation](/standards-guidelines/act/rules/ebe86a/proposed/)

## Text Inheriting its Programmatic Language from an Element {#text-inheriting-language}

The <dfn id="text-inheriting-language:text">text inheriting its programmatic language</dfn> from an element E is composed of all the following texts:

- **text nodes**: the value of any [text nodes][] that are [visible][] or [included in the accessibility tree][] and children of an element inheriting its programmatic language from E;
- **accessible text**: the [accessible name][] and [accessible description][] of any [element inheriting its programmatic language](#text-inheriting-language:element) from E, and [included in the accessibility tree][];
- **page title**: the value of the [document title][], only if E is a [document][] in a [top-level browsing context][].

An element F is an <dfn id="text-inheriting-language:element">element inheriting its programmatic language</dfn> from an element E if at least one of the following conditions is true (recursively):

- F is E itself (an element always inherits its programmatic language from itself); or
- F does not have a non-empty `lang` attribute, and is the child in the [flat tree][] of an element inheriting its programmatic language from E; or
- F is a [fully active][] [document][] element, has no non-empty `lang` attribute, and its [browsing context container][] is an element inheriting its programmatic language from E.

[accessible description]: https://www.w3.org/TR/accname-1.1/#dfn-accessible-description 'Definition of Accessible description'
[accessible name]: #accessible-name 'Definition of Accessible Name'
[browsing context container]: https://html.spec.whatwg.org/#browsing-context-container 'HTML Definition of Browsing Context Container'
[document]: https://dom.spec.whatwg.org/#document-element 'DOM document element, as of 2020/06/05'
[document title]: https://html.spec.whatwg.org/multipage/dom.html#document.title 'HTML document title, as of 2020/06/05'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS draft, flat tree, 2020/06/05'
[fully active]: https://html.spec.whatwg.org/#fully-active 'HTML definition of Fully Active Document'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of Included in the Accessibility Tree'
[text nodes]: https://dom.spec.whatwg.org/#text 'DOM text, as of 2020/06/05'
[top-level browsing context]: https://html.spec.whatwg.org/#top-level-browsing-context 'HTML top-level browsing context, as of 2020/06/05'
[visible]: #visible 'Definition of Visible'

### Used in rules
- [Element with lang attribute has valid language tag](/standards-guidelines/act/rules/de46e4/proposed/)
- [HTML element language subtag matches language](/standards-guidelines/act/rules/off6ek/proposed/)
- [HTML page language subtag matches default language](/standards-guidelines/act/rules/ucwvc8/proposed/)

## User interaction {#user-interaction}

A user interaction is any action that causes the user agent to fire one of the following [DOM events][event]:

- auxclick
- click
- compostionend
- compositionstart
- compositionupdate
- dblclick
- keydown
- keyup
- mousedown
- mouseenter
- mouseleave
- mousemove
- mouseout
- mouseover
- mouseup
- select
- wheel

This list comprises the [User Interface event][uievents] that are generated by the user agent as a result of user interaction.

[event]: https://dom.spec.whatwg.org/#concept-event
[uievents]: https://www.w3.org/TR/uievents/

### Used in rules
- [Text content that changes automatically can be paused, stopped or hidden](/standards-guidelines/act/rules/efbfc7/proposed/)

## Vertically Clipped by Overflow {#vertically-clipped-by-overflow}

A [node][] is <dfn>Vertically Clipped by Overflow</dfn> if it has an [ancestor][] in the [flat tree][] with a [computed][] [overflow-y][] of `hidden` or `clip`, where changing the [overflow-y][] of all such [ancestors][ancestor] to `visible` would cause more of the [node][] to become [visible][].

#### Example of Vertically Clipped by Overflow

This `img` element has an [ancestor][] `div` element with an `overflow-y` of `hidden`. The height of the `img` is greater than that of the [ancestor][] `div`, and so is clipped by the `overflow-y` property of the `div`.

```html
<div style="height: 100px; overflow-y: hidden;">
	<img src="/test-assets/shared/w3c-logo.png" height="150" alt="Partial W3C Logo" />
</div>
```

[visible]: #visible
[node]: https://dom.spec.whatwg.org/#node 'DOM node, as of 2019/02/14'
[ancestor]: https://dom.spec.whatwg.org/#concept-tree-ancestor 'DOM ancestor, as of 2019/02/14'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS draft, flat tree, 2020/02/14'
[computed]: https://www.w3.org/TR/css-cascade-3/#computed-value
[overflow-y]: https://drafts.csswg.org/css-overflow/#overflow-properties

### Used in rules
- [Zoomed text node is not clipped with CSS overflow](/standards-guidelines/act/rules/59br37/proposed/)

## viewport size {#viewport-size}

The viewport size is the width and height at which a page is rendered. The viewport size is equal to the [innerWidth][] and [innerHeight][] of the [window][] of the [top-level browsing context][].

**Note**: The viewport size is not to be confused with the "resolution" of the operating system. Often a browser will be a single window in the operating system, with a width and height different from the resolution of the operating system. Often browsers also include additional user interface components, such as a URL bar, tab bar, and a bookmarks bar. None of these are included in the viewport size. In full screen mode the viewport size might be the same as the resolution of the operating system.

**Note**: The viewport size includes, if rendered, all scrollbars.

[innerwidth]: https://drafts.csswg.org/cssom-view/#dom-window-innerwidth 'CSS working draft, window.innerWidth, 2020/03/30'
[innerheight]: https://drafts.csswg.org/cssom-view/#dom-window-innerheight 'CSS working draft, window.innerHeight, 2020/03/30'
[window]: https://html.spec.whatwg.org/#window 'HTML: window object, 2020/03/30'
[top-level browsing context]: https://html.spec.whatwg.org/#top-level-browsing-context 'DOM: top-level browsing context, 2020/03/30'

### Used in rules
- [Zoomed text node is not clipped with CSS overflow](/standards-guidelines/act/rules/59br37/proposed/)

## Visible Text Content {#visible-text-content}

The _visible text content_ of an [element][] is a set of all [visible][] [text nodes][] that are [descendants][] in the [flat tree][] of this element

[descendants]: https://dom.spec.whatwg.org/#concept-tree-descendant 'DOM tree descendant, 2020/08/18'
[element]: https://dom.spec.whatwg.org/#element 'DOM element, 2020/08/18'
[flat tree]: https://drafts.csswg.org/css-scoping/#flat-tree 'CSS draft, flat tree, 2020/08/18'
[visible]: #visible
[text nodes]: https://dom.spec.whatwg.org/#text 'DOM text, 2020/08/18'

### Used in rules
- [Visible label is part of accessible name](/standards-guidelines/act/rules/2ee8b8/proposed/)
- [Content has alternative for visual reference](/standards-guidelines/act/rules/9bd38c/proposed/)
- [Text content that changes automatically can be paused, stopped or hidden](/standards-guidelines/act/rules/efbfc7/proposed/)

## Visible {#visible}

Content perceivable through sight.

Content is considered _visible_ if making it fully transparent would result in a difference in the pixels rendered for any part of the document that is currently within the viewport or can be brought into the viewport via scrolling.

[Content is defined in WCAG](https://www.w3.org/TR/WCAG22/#dfn-content).

For more details, see [examples of visible](https://www.w3.org/WAI/standards-guidelines/act/rules/terms/visible/examples/).

### Used in rules
- [Document has heading for non-repeated content](/standards-guidelines/act/rules/047fe0/proposed/)
- [Text has enhanced contrast](/standards-guidelines/act/rules/09o5cg/proposed/)
- [Scrollable content can be reached with sequential focus navigation](/standards-guidelines/act/rules/0ssw9k/proposed/)
- [HTML images contain no text](/standards-guidelines/act/rules/0va7u6/proposed/)
- [Audio and visuals of video element have transcript](/standards-guidelines/act/rules/1a02b0/proposed/)
- [Video element visual content has audio description](/standards-guidelines/act/rules/1ea59c/proposed/)
- [Video element visual content has strict accessible alternative](/standards-guidelines/act/rules/1ec09b/proposed/)
- [Important letter spacing in style attributes is wide enough](/standards-guidelines/act/rules/24afc2/proposed/)
- [Audio element content has transcript](/standards-guidelines/act/rules/2eb176/proposed/)
- [Visible label is part of accessible name](/standards-guidelines/act/rules/2ee8b8/proposed/)
- [Error message describes invalid form field value](/standards-guidelines/act/rules/36b590/proposed/)
- [Block of repeated content is collapsible](/standards-guidelines/act/rules/3e12e1/proposed/)
- [Id attribute value is unique](/standards-guidelines/act/rules/3ea0c8/proposed/)
- [Audio or video element that plays automatically has a control mechanism](/standards-guidelines/act/rules/4c31df/proposed/)
- [Zoomed text node is not clipped with CSS overflow](/standards-guidelines/act/rules/59br37/proposed/)
- [Autocomplete attribute has valid value](/standards-guidelines/act/rules/73f2c2/proposed/)
- [Important line height in style attributes is wide enough](/standards-guidelines/act/rules/78fd32/proposed/)
- [Content has alternative for visual reference](/standards-guidelines/act/rules/9bd38c/proposed/)
- [Important word spacing in style attributes is wide enough](/standards-guidelines/act/rules/9e45ec/proposed/)
- [Headers attribute specified on a cell refers to cells in the same table element](/standards-guidelines/act/rules/a25f45/proposed/)
- [Video element content is media alternative for text](/standards-guidelines/act/rules/ab4d13/proposed/)
- [Video element visual-only content has description track](/standards-guidelines/act/rules/ac7dc6/proposed/)
- [Audio element content is media alternative for text](/standards-guidelines/act/rules/afb423/proposed/)
- [Text has minimum contrast](/standards-guidelines/act/rules/afw4f7/proposed/)
- [Iframe with interactive elements is not excluded from tab-order](/standards-guidelines/act/rules/akn7bn/proposed/)
- [Orientation of the page is not restricted using CSS transforms](/standards-guidelines/act/rules/b33eff/proposed/)
- [Document has a landmark with non-repeated content](/standards-guidelines/act/rules/b40fd1/proposed/)
- [Heading is descriptive](/standards-guidelines/act/rules/b49b2e/proposed/)
- [Meta viewport allows for zoom](/standards-guidelines/act/rules/b4f0c3/proposed/)
- [Video element visual-only content has accessible alternative](/standards-guidelines/act/rules/c3232f/proposed/)
- [Video element visual content has accessible alternative](/standards-guidelines/act/rules/c5a4ea/proposed/)
- [Form field label is descriptive](/standards-guidelines/act/rules/cc0f0a/proposed/)
- [Bypass Blocks of Repeated Content](/standards-guidelines/act/rules/cf77f2/proposed/)
- [Table header cell has assigned cells](/standards-guidelines/act/rules/d0f69e/proposed/)
- [Video element visual-only content has audio track alternative](/standards-guidelines/act/rules/d7ba54/proposed/)
- [Element with lang attribute has valid language tag](/standards-guidelines/act/rules/de46e4/proposed/)
- [Form field has non-empty accessible name](/standards-guidelines/act/rules/e086e5/proposed/)
- [Audio element content has text alternative](/standards-guidelines/act/rules/e7aa44/proposed/)
- [Image not in the accessibility tree is decorative](/standards-guidelines/act/rules/e88epe/proposed/)
- [Video element auditory content has accessible alternative](/standards-guidelines/act/rules/eac66b/proposed/)
- [Focusable element has no keyboard trap via non-standard navigation](/standards-guidelines/act/rules/ebe86a/proposed/)
- [Video element visual-only content has transcript](/standards-guidelines/act/rules/ee13b5/proposed/)
- [Text content that changes automatically can be paused, stopped or hidden](/standards-guidelines/act/rules/efbfc7/proposed/)
- [Video element visual content has description track](/standards-guidelines/act/rules/f196ce/proposed/)
- [Video element auditory content has captions](/standards-guidelines/act/rules/f51b46/proposed/)
- [Video element visual-only content is media alternative for text](/standards-guidelines/act/rules/fd26cf/proposed/)
- [Heading has non-empty accessible name](/standards-guidelines/act/rules/ffd0e9/proposed/)
- [HTML element language subtag matches language](/standards-guidelines/act/rules/off6ek/proposed/)
- [Image accessible name is descriptive](/standards-guidelines/act/rules/qt1vmo/proposed/)
- [HTML page language subtag matches default language](/standards-guidelines/act/rules/ucwvc8/proposed/)
- [Document has an instrument to move focus to non-repeated content](/standards-guidelines/act/rules/ye5d6e/proposed/)

## Visual Context {#visual-context}

The _visual context_ of a node is everything that is visually or logically located near it when the [document](https://dom.spec.whatwg.org/#concept-document) containing it is rendered. Only [visible](#visible) information may be part of the visual context.

The logical distance is the distance in the structure of the document: either the tree distance within the DOM tree, or the semantic relation. For example, headings are logically near the content that follows (until the next heading of the same or higher level) even though they might be far away visually or in the DOM tree.

The visual context may include, but is not limited to, headings, text in the same sentence or paragraph.

**Note**: As a rule of thumb, visual context should be close enough to be displayed on the device at the same time as the element it relates to. Because device sizes vary wildly and content can further be zoomed and moved around, this is however not a strong requirement.

**Note**: Visual context that is located before (in reading order) the element it relates to is often more useful than visual context located after. Indeed, it is easier for users to use context that they have already read than context that is yet to be read.

### Used in rules
- [Form field label is descriptive](/standards-guidelines/act/rules/cc0f0a/proposed/)

## Visual Reference Words {#visual-reference-words}

Any word in a text node that is included in the translated version of the following lists, where the language of the translation is the programmatically determinable language of the text node. Some words can be translated in multiple ways or have plural forms. In such cases each translation or form must be included. Some words can be spelled in multiple ways (For example: sometimes the word is capitalized and sometimes it isn't). In such cases each spelling must be included.

**Note:** This list is not exhaustive. As soon as more visual reference words are found they can be added to this list.

Visual location:

- Above
- Below
- Beneath
- Beside
- Bottom
- Diagonal
- Down
- Left
- Near
- Nearby
- Parallel
- Right
- Top
- Under
- Underneath
- Up

Shape:

- Box
- Circle
- Circular
- Crescent
- Cross
- Diamond
- Disc
- Ellipse
- Heart
- Hexagon
- Hexagonal
- Kite
- Oval
- Parallelogram
- Pentagon
- Pentagonal
- Polygon
- Polygonal
- Rectangle
- Rectangular
- Round
- Square
- Squared
- Star
- Trapezoid
- Trapezoidal
- Triangle
- Triangular
- Wave

Size:

- Big
- Large
- Little
- Narrow
- Small
- Tiny
- Wide

Orientation:

- Angled
- Askew
- Atilt
- Crooked
- Listing
- Lopsided
- off-kilter
- Pitched
- Rotated
- Sideways
- Skewed
- Slanted
- Slanting
- Straight
- Tilt
- Tilted
- Tipped

Color

- Any single word color name in the [X11 standard](https://gitlab.freedesktop.org/xorg/app/rgb/raw/master/rgb.txt), omitting duplicates:
  - Almond
  - Aqua
  - Aquamarine
  - Azure
  - Beige
  - Bisque
  - Black
  - Blue
  - Brown
  - Burlywood
  - Chartreuse
  - Chiffon
  - Chocolate
  - Coral
  - Cornsilk
  - Cream
  - Crimson
  - Cyan
  - Firebrick
  - Fuchsia
  - Gold
  - Goldenrod
  - Gray
  - Green
  - Honeydew
  - Indigo
  - Ivory
  - Khaki
  - Lace
  - Lavender
  - Lemon
  - Lime
  - Linen
  - Magenta
  - Maroon
  - Mint
  - Moccasin
  - Olive
  - Orange
  - Orchid
  - Pink
  - Purple
  - Red
  - Rose
  - Salmon
  - Turquoise
  - Violet
  - White
  - Yellow

### Used in rules
- [Content has alternative for visual reference](/standards-guidelines/act/rules/9bd38c/proposed/)

## WAI-ARIA specifications {#wai-aria-specifications}

The _WAI ARIA Specifications_ group both the WAI ARIA W3C Recommendation and ARIA modules, namely:

- [Accessible Rich Internet Applications (WAI-ARIA) 1.2](https://www.w3.org/TR/wai-aria-1.2/)
- [WAI-ARIA Graphics Module 1.0](https://www.w3.org/TR/graphics-aria-1.0/)
- [Digital Publishing WAI-ARIA Module 1.0](https://www.w3.org/TR/dpub-aria-1.0/)

**Note:** depending on the type of content being evaluated, part of the specifications might be irrelevant and should be ignored.

### Used in rules
- [Document has heading for non-repeated content](/standards-guidelines/act/rules/047fe0/proposed/)
- [Text has enhanced contrast](/standards-guidelines/act/rules/09o5cg/proposed/)
- [Image has non-empty accessible name](/standards-guidelines/act/rules/23a2a8/proposed/)
- [Visible label is part of accessible name](/standards-guidelines/act/rules/2ee8b8/proposed/)
- [Summary element has non-empty accessible name](/standards-guidelines/act/rules/2t702h/proposed/)
- [Element with presentational children has no focusable content](/standards-guidelines/act/rules/307n5z/proposed/)
- [Error message describes invalid form field value](/standards-guidelines/act/rules/36b590/proposed/)
- [Block of repeated content is collapsible](/standards-guidelines/act/rules/3e12e1/proposed/)
- [Element marked as decorative is not exposed](/standards-guidelines/act/rules/46ca7f/proposed/)
- [Element with role attribute has required states and properties](/standards-guidelines/act/rules/4e8ab6/proposed/)
- [ARIA state or property is permitted](/standards-guidelines/act/rules/5c01ea/proposed/)
- [Link in context is descriptive](/standards-guidelines/act/rules/5effbb/proposed/)
- [ARIA attribute is defined in WAI-ARIA](/standards-guidelines/act/rules/5f99a7/proposed/)
- [Role attribute has valid value](/standards-guidelines/act/rules/674b10/proposed/)
- [Autocomplete attribute has valid value](/standards-guidelines/act/rules/73f2c2/proposed/)
- [Device motion based changes to the content can also be created from the user interface](/standards-guidelines/act/rules/7677a9/proposed/)
- [SVG element with explicit role has non-empty accessible name](/standards-guidelines/act/rules/7d6734/proposed/)
- [Object element rendering non-text content has non-empty accessible name](/standards-guidelines/act/rules/8fc3b6/proposed/)
- [Button has non-empty accessible name](/standards-guidelines/act/rules/97a4e1/proposed/)
- [Image filename is accessible name for image](/standards-guidelines/act/rules/9eb3f6/proposed/)
- [Headers attribute specified on a cell refers to cells in the same table element](/standards-guidelines/act/rules/a25f45/proposed/)
- [Text has minimum contrast](/standards-guidelines/act/rules/afw4f7/proposed/)
- [Link is descriptive](/standards-guidelines/act/rules/aizyf1/proposed/)
- [Links with identical accessible names have equivalent purpose](/standards-guidelines/act/rules/b20e66/proposed/)
- [Document has a landmark with non-repeated content](/standards-guidelines/act/rules/b40fd1/proposed/)
- [Heading is descriptive](/standards-guidelines/act/rules/b49b2e/proposed/)
- [ARIA required owned elements](/standards-guidelines/act/rules/bc4a75/proposed/)
- [Device motion based changes to the content can be disabled](/standards-guidelines/act/rules/c249d5/proposed/)
- [Link has non-empty accessible name](/standards-guidelines/act/rules/c487ae/proposed/)
- [Iframe element has non-empty accessible name](/standards-guidelines/act/rules/cae760/proposed/)
- [Form field label is descriptive](/standards-guidelines/act/rules/cc0f0a/proposed/)
- [Bypass Blocks of Repeated Content](/standards-guidelines/act/rules/cf77f2/proposed/)
- [Table header cell has assigned cells](/standards-guidelines/act/rules/d0f69e/proposed/)
- [Form field has non-empty accessible name](/standards-guidelines/act/rules/e086e5/proposed/)
- [Image not in the accessibility tree is decorative](/standards-guidelines/act/rules/e88epe/proposed/)
- [Text content that changes automatically can be paused, stopped or hidden](/standards-guidelines/act/rules/efbfc7/proposed/)
- [Links with identical accessible names and same context serve equivalent purpose](/standards-guidelines/act/rules/fd3a94/proposed/)
- [ARIA required context role](/standards-guidelines/act/rules/ff89c9/proposed/)
- [No keyboard shortcut uses only printable characters](/standards-guidelines/act/rules/ffbc54/proposed/)
- [Heading has non-empty accessible name](/standards-guidelines/act/rules/ffd0e9/proposed/)
- [ARIA required ID references exist](/standards-guidelines/act/rules/in6db8/proposed/)
- [ARIA global properties not used where prohibited](/standards-guidelines/act/rules/kb1m8s/proposed/)
- [Menuitem has non-empty accessible name](/standards-guidelines/act/rules/m6b1q3/proposed/)
- [Image accessible name is descriptive](/standards-guidelines/act/rules/qt1vmo/proposed/)
- [Document has an instrument to move focus to non-repeated content](/standards-guidelines/act/rules/ye5d6e/proposed/)

## Web page (HTML) {#web-page-html}

An _HTML [web page](https://www.w3.org/TR/WCAG22/#dfn-web-page-s)_ is the set of all [fully active](https://html.spec.whatwg.org/#fully-active) [documents](https://dom.spec.whatwg.org/#concept-document) which share the same [top-level browsing context](https://html.spec.whatwg.org/#top-level-browsing-context).

**Note:** Nesting of browsing context mostly happens with `iframe` and `object`. Thus a web page will most of the time be a "top-level" document and all its `iframe` and `object` (recursively).

**Note:** [Web pages](https://www.w3.org/TR/WCAG22/#dfn-web-page-s) as defined by WCAG are not restricted to the HTML technology but can also include, _e.g._, PDF or DOCX documents.

**Note:** Although web pages as defined here are sets of [documents](https://dom.spec.whatwg.org/#concept-document) (and do not contain other kind of nodes), one can abusively write that any node is "in a web page" if it is a [shadow-including descendant](https://dom.spec.whatwg.org/#concept-shadow-including-descendant) of a [document](https://dom.spec.whatwg.org/#concept-document) that is part of that web page.

### Used in rules
- [Document has heading for non-repeated content](/standards-guidelines/act/rules/047fe0/proposed/)
- [HTML images contain no text](/standards-guidelines/act/rules/0va7u6/proposed/)
- [HTML page has non-empty title](/standards-guidelines/act/rules/2779a5/proposed/)
- [Block of repeated content is collapsible](/standards-guidelines/act/rules/3e12e1/proposed/)
- [Iframe elements with identical accessible names have equivalent purpose](/standards-guidelines/act/rules/4b1c6c/proposed/)
- [Audio or video element that plays automatically has a control mechanism](/standards-guidelines/act/rules/4c31df/proposed/)
- [Device motion based changes to the content can also be created from the user interface](/standards-guidelines/act/rules/7677a9/proposed/)
- [Audio or video element avoids automatically playing audio](/standards-guidelines/act/rules/80f0bf/proposed/)
- [Links with identical accessible names have equivalent purpose](/standards-guidelines/act/rules/b20e66/proposed/)
- [Document has a landmark with non-repeated content](/standards-guidelines/act/rules/b40fd1/proposed/)
- [Device motion based changes to the content can be disabled](/standards-guidelines/act/rules/c249d5/proposed/)
- [HTML page title is descriptive](/standards-guidelines/act/rules/c4a8a4/proposed/)
- [Bypass Blocks of Repeated Content](/standards-guidelines/act/rules/cf77f2/proposed/)
- [Text content that changes automatically can be paused, stopped or hidden](/standards-guidelines/act/rules/efbfc7/proposed/)
- [Links with identical accessible names and same context serve equivalent purpose](/standards-guidelines/act/rules/fd3a94/proposed/)
- [No keyboard shortcut uses only printable characters](/standards-guidelines/act/rules/ffbc54/proposed/)
- [HTML page language subtag matches default language](/standards-guidelines/act/rules/ucwvc8/proposed/)
- [Document has an instrument to move focus to non-repeated content](/standards-guidelines/act/rules/ye5d6e/proposed/)

## Whitespace {#whitespace}

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

### Used in rules
- [HTML page has non-empty title](/standards-guidelines/act/rules/2779a5/proposed/)
- [Visible label is part of accessible name](/standards-guidelines/act/rules/2ee8b8/proposed/)
- [Iframe elements with identical accessible names have equivalent purpose](/standards-guidelines/act/rules/4b1c6c/proposed/)
- [Audio or video element that plays automatically has a control mechanism](/standards-guidelines/act/rules/4c31df/proposed/)
- [Role attribute has valid value](/standards-guidelines/act/rules/674b10/proposed/)
- [Image filename is accessible name for image](/standards-guidelines/act/rules/9eb3f6/proposed/)
- [Links with identical accessible names have equivalent purpose](/standards-guidelines/act/rules/b20e66/proposed/)
- [HTML page title is descriptive](/standards-guidelines/act/rules/c4a8a4/proposed/)
- [Iframe element has non-empty accessible name](/standards-guidelines/act/rules/cae760/proposed/)
- [Element with lang attribute has valid language tag](/standards-guidelines/act/rules/de46e4/proposed/)
- [Links with identical accessible names and same context serve equivalent purpose](/standards-guidelines/act/rules/fd3a94/proposed/)
- [HTML element language subtag matches language](/standards-guidelines/act/rules/off6ek/proposed/)

{::nomarkdown}
{% include box.html type="end" %}
{:/}