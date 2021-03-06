---
title: "WCAG ACT Rules"
permalink: /standards-guidelines/act/rules/
ref: /standards-guidelines/act/rules/
lang: en
# translators: # Uncomment (remove #) for translations, one - name line per translator.
# - name: Translator 1
# - name: Translator 2
# contributors:
# - name: Contributor 1
# - name: Contributor 2
github:
  repository: w3c/wcag-act-rules
  path: content/index.md
footer: > # Text in footer in HTML
  <p> This is the text in the footer </p>
---

{::nomarkdown}
{% include box.html type="start" title="Summary" class="" %}
{:/}

This page lists [Accessibility Conformance Testing (ACT) Rules](https://www.w3.org/WAI/standards-guidelines/act/) formally published by the W3C Accessibility Guidelines Working Group (AGWG). Further rules are in development and will be published on this page once completed.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

## List of WCAG ACT Rules

* [HTML page has non-empty title](/standards-guidelines/act/rules/html-page-non-empty-title-2779a5/)
* [Image has non-empty accessible name](/standards-guidelines/act/rules/image-non-empty-accessible-name-23a2a8/)
* [Image button has accessible name](/standards-guidelines/act/rules/image-button-accessible-name-59796f/)
* [Link has non-empty accessible name](/standards-guidelines/act/rules/link-non-empty-accessible-name-c487ae/)
* [Button has non-empty accessible name](/standards-guidelines/act/rules/button-non-empty-accessible-name-97a4e1/)
* [Form field has non-empty accessible name](/standards-guidelines/act/rules/form-field-non-empty-accessible-name-e086e5/)
* [meta viewport allows for zoom](/standards-guidelines/act/rules/meta-viewport-b4f0c3/)
* [SVG element with explicit role has non-empty accessible name](/standards-guidelines/act/rules/explicit-SVG-image-non-empty-accessible-name-7d6734/)
* [HTML page has `lang` attribute](/standards-guidelines/act/rules/html-page-lang-b5c3f8/)
* [HTML page language is valid](/standards-guidelines/act/rules/html-page-lang-valid-bf051a/)
* [HTML page lang and xml:lang attributes have matching values](/standards-guidelines/act/rules/html-page-lang-xml-lang-match-5b7ae0/)

## List of Proposed WCAG ACT Rules

* [`aria-*` attribute is defined in WAI-ARIA](/standards-guidelines/act/rules/aria-attr-defined-5f99a7/)
* [Element with `aria-hidden` has no focusable content](/standards-guidelines/act/rules/aria-hidden-no-focusable-content-6cfa84/)
* [ARIA required context role](/standards-guidelines/act/rules/aria-required-context-role-ff89c9/)
* [ARIA required owned elements](/standards-guidelines/act/rules/aria-required-owned-element-bc4a75/)
* [ARIA state or property is permitted](/standards-guidelines/act/rules/aria-state-or-property-permitted-5c01ea/)
* [ARIA state or property has valid value](/standards-guidelines/act/rules/aria-state-or-property-valid-value-6a7281/)
* [Attribute is not duplicated](/standards-guidelines/act/rules/attr-not-duplicated-e6952f/)
* [`audio` or `video` avoids automatically playing audio](/standards-guidelines/act/rules/audio-or-video-avoids-automatically-playing-audio-80f0bf/)
* [`audio` element content has text alternative](/standards-guidelines/act/rules/audio-text-alternative-e7aa44/)
* [`audio` element content has transcript](/standards-guidelines/act/rules/audio-transcript-2eb176/)
* [`Audio` or `video` that plays automatically has no audio that lasts more than 3 seconds](/standards-guidelines/act/rules/auto-play-audio-does-not-exceed-3-seconds-aaa1bf/)
* [`audio` or `video` that plays automatically has a control mechanism](/standards-guidelines/act/rules/auto-play-audio-has-control-mechanism-4c31df/)
* [Text content that changes automatically can be paused, stopped or hidden](/standards-guidelines/act/rules/auto-update-text-efbfc7/)
* [`autocomplete` attribute has valid value](/standards-guidelines/act/rules/autocomplete-valid-value-73f2c2/)
* [Block of repeated content is collapsible](/standards-guidelines/act/rules/block-collapsible-3e12e1/)
* [Orientation of the page is not restricted using CSS transform property](/standards-guidelines/act/rules/css-restrict-orientation-b33eff/)
* [Device motion based changes to the content can be disabled](/standards-guidelines/act/rules/device-motion-disabled-c249d5/)
* [Device motion based changes to the content can also be created from the user interface](/standards-guidelines/act/rules/device-motion-user-interface-7677a9/)
* [Document has an instrument to move focus to non-repeated content](/standards-guidelines/act/rules/document-has-instrument-to-non-repeated-content-ye5d6e/)
* [Document has a landmark with non-repeated content](/standards-guidelines/act/rules/document-has-landmark-with-non-repeated-content-b40fd1/)
* [Element with `lang` attribute has valid language tag](/standards-guidelines/act/rules/element-lang-valid-de46e4/)
* [Element marked as decorative is not exposed](/standards-guidelines/act/rules/element-marked-decorative-is-not-exposed-46ca7f/)
* [`svg` element with explicit role has non-empty accessible name](/standards-guidelines/act/rules/explicit-SVG-image-non-empty-accessible-name-7d6734/)
* [Focusable element has no keyboard trap](/standards-guidelines/act/rules/focusable-no-keyboard-trap-80af7b/)
* [Focusable element has no keyboard trap via non-standard navigation](/standards-guidelines/act/rules/focusable-no-keyboard-trap-non-standard-nav-ebe86a/)
* [Focusable element has no keyboard trap via standard navigation](/standards-guidelines/act/rules/focusable-no-keyboard-trap-standard-nav-a1b64e/)
* [Form field label is descriptive](/standards-guidelines/act/rules/form-field-label-descriptive-cc0f0a/)
* [Form field has non-empty accessible name](/standards-guidelines/act/rules/form-field-non-empty-accessible-name-e086e5/)
* [Heading is descriptive](/standards-guidelines/act/rules/heading-descriptive-b49b2e/)
* [HTML page language subtag matches default language](/standards-guidelines/act/rules/html-page-lang-matches-default-ucwvc8/)
* [HTML page title is descriptive](/standards-guidelines/act/rules/html-page-title-descriptive-c4a8a4/)
* [`id` attribute value is unique](/standards-guidelines/act/rules/id-value-unique-3ea0c8/)
* [`iframe` elements with identical accessible names have equivalent purpose](/standards-guidelines/act/rules/iframe-identical-name-equivalent-purpose-4b1c6c/)
* [`iframe` element has non-empty accessible name](/standards-guidelines/act/rules/iframe-non-empty-accessible-name-cae760/)
* [iframe with negative tabindex has no interactive elements](/standards-guidelines/act/rules/iframe-not-focusable-has-no-interactive-content-akn7bn/)
* [Image accessible name is descriptive](/standards-guidelines/act/rules/image-accessible-name-descriptive-qt1vmo/)
* [HTML graphics contain no text](/standards-guidelines/act/rules/image-no-text-0va7u6/)
* [Image not in the accessibility tree is decorative](/standards-guidelines/act/rules/image-not-in-acc-tree-is-decorative-e88epe/)
* [Error message describes invalid form field value](/standards-guidelines/act/rules/invalid-form-field-value-36b590/)
* [Letter spacing in `style` attributes is not `!important`](/standards-guidelines/act/rules/letter-spacing-not-important-24afc2/)
* [Line height in `style` attributes is not `!important`](/standards-guidelines/act/rules/line-height-not-important-78fd32/)
* [Link is descriptive](/standards-guidelines/act/rules/link-alone-descriptive-aizyf1/)
* [Link in context is descriptive](/standards-guidelines/act/rules/link-in-context-descriptive-5effbb/)
* [Link has non-empty accessible name](/standards-guidelines/act/rules/link-non-empty-accessible-name-c487ae/)
* [Links with identical accessible names have equivalent purpose](/standards-guidelines/act/rules/links-identical-name-equivalent-purpose-b20e66/)
* [Links with identical accessible names and context serve equivalent purpose](/standards-guidelines/act/rules/links-with-identical-names-and-context-serve-equivalent-purpose-fd3a94/)
* [Menuitem has non-empty accessible name](/standards-guidelines/act/rules/menuitem-non-empty-name-m6b1q3/)
* [`meta` element has no refresh delay](/standards-guidelines/act/rules/meta-refresh-no-delay-bc659a/)
* [`meta` element has no refresh delay (no exception)](/standards-guidelines/act/rules/meta-refresh-no-delay-no-exception-bisz58/)
* [`meta` `viewport` allows for zoom](/standards-guidelines/act/rules/meta-viewport-b4f0c3/)
* [Content has alternative for visual reference](/standards-guidelines/act/rules/non-visual-reference-alternative-9bd38c/)
* [Object element rendering non-text content has non-empty accessible name](/standards-guidelines/act/rules/object-has-acessible-name-8fc3b6/)
* [Element with presentational children has no focusable content](/standards-guidelines/act/rules/presentational-children-no-focusable-content-307n5z/)
* [`role` attribute has valid value](/standards-guidelines/act/rules/role-attribute-valid-value-674b10/)
* [Element with `role` attribute has required states and properties](/standards-guidelines/act/rules/role-required-states-and-properties-4e8ab6/)
* [Scrollable element is keyboard accessible](/standards-guidelines/act/rules/scrollable-element-keyboard-accessible-0ssw9k/)
* [Table header cell has assigned cells](/standards-guidelines/act/rules/table-header-cell-has-assigned-cells-d0f69e/)
* [`headers` attribute specified on a cell refers to cells in the same `table` element](/standards-guidelines/act/rules/table-headers-attribute-refer-to-data-cells-a25f45/)
* [Text has minimum contrast](/standards-guidelines/act/rules/text-contrast-afw4f7/)
* [Text has enhanced contrast](/standards-guidelines/act/rules/text-contrast-enhanced-09o5cg/)
* [`video` element auditory content has accessible alternative](/standards-guidelines/act/rules/video-alternative-for-auditory-eac66b/)
* [`video` element content is media alternative for text](/standards-guidelines/act/rules/video-as-media-alternative-ab4d13/)
* [`video` element visual content has description track](/standards-guidelines/act/rules/video-description-track-f196ce/)
* [`video` element visual-only content is media alternative for text](/standards-guidelines/act/rules/video-only-as-media-alternative-fd26cf/)
* [`video` element visual-only content has audio track alternative](/standards-guidelines/act/rules/video-only-audio-track-d7ba54/)
* [`video` element visual-only content has transcript](/standards-guidelines/act/rules/video-only-transcript-ee13b5/)
* [Visible label is part of accessible name](/standards-guidelines/act/rules/visible-label-in-accessible-name-2ee8b8/)
* [Word spacing in `style` attributes is not `!important`](/standards-guidelines/act/rules/word-spacing-not-important-9e45ec/)