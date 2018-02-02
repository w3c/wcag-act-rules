---
rule_id: ACT-R2
name: Proper use of aria-describedby

success_criterion:
- 1.1.1 # Non-text Content (Level A)
---

## Description

This rule checks the sufficient provision of a long text description for images that are using the `aria-describedby` attribute.

Elements are not checked for references to long text descriptions within short text alternatives such as "The image is described in text below".

### Background

This rule maps to WCAG 2.0 success criterion 1.1.1 and checks the following techniques and failures:

- [ARIA15: Using aria-describedby to provide descriptions of images](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/ARIA15)
- [G73: Providing a long description in another location with a link to it that is immediately adjacent to the non-text content](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/G73)
- [G74: Providing a long description in text near the non-text content, with a reference to the location of the long description in the short description](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/G74)
- [G92: Providing long description for non-text content that serves the same purpose and presents the same information](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/G92)
- [F67: Failure of Success Criterion 1.1.1 and 1.2.1 due to providing long descriptions for non-text content that does not serve the same purpose or does not present the same information](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/F67)
- The proper provision of a short text alternative is checked in [SC1-1-1-text-alternative](SC1-1-1-text-alternative.html).

## Assumptions

- If the `aria-describedby` attribute is provided, a long description was intended and is needed for the element.
- This test assumes that `role="img"` is used exclusively on elements that represent graphical content.

## Aspects Under Test

- [DOM Tree](https://www.w3.org/TR/act-rules-format/#input-aspects-dom)
- [CSS Styling](https://www.w3.org/TR/act-rules-format/#input-aspects-css)

## Test Procedure

### Applicability

This rule applies to any element with a [semantic role](#definitions) of `img` that has a [non-empty](#definitions) `aria-describedby` attribute and is [perceivable by assistive technologies](#definitions).

### Expectation 1 

For each *target element*, at least one of the identifiers in the `aria-describedby` attribute is a [valid identifier](#definitions).

### Expectation 2

For each *target element* that fulfills Expectation 1, at least one of the elements referenced by the `aria-describedby` attribute exists.

### Expectation 3

For each *target element* that fulfills Expectation 2, the [accessible description](#definitions) provides an extended description of the image complementing the [accessible name](#definitions).

## Definitions

*This rule is an example, precise definitions will be added before publication.*

## Changelog

Changes since the [previous version](https://github.com/w3c/wcag-act-rules/blob/9f0b0b5b357db67e09faa85fd7a54bb4a957d95d/_rules/ACT-R2.md)

- Rule is updated to applicability / expectations format

## Acknowledgment

This ACT rule was created by Frank Berker and Kasper Isager.