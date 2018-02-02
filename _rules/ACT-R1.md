---
rule_id: ACT-R1
name: Meta refresh and redirect is not used
environment: DOM Structure

success_criterion:
- 2.2.1 # Timing Adjustable (Level A)
- 3.2.5 # Change on Request (Level AAA)

author:
- Wilco Fiers
---

## Description

This test checks if meta element is not used for delayed redirecting or refreshing.

### Background

- [H76: Using meta refresh to create an instant client-side redirect](http://www.w3.org/TR/WCAG20-TECHS/H76.html)
- [F40: Failure of Success Criterion 2.2.1 and 2.2.4 due to using meta redirect with a time limit](http://www.w3.org/TR/WCAG20-TECHS/F40.html)
- [F41: Failure of Success Criterion 2.2.1, 2.2.4, and 3.2.5 due to using meta refresh with a time-out](http://www.w3.org/TR/WCAG20-TECHS/F41.html)

## Assumptions

- This test assumes no functionality was provided by the website for the user to adjust the timer.

## Aspects Under Test

- [DOM Tree](https://www.w3.org/TR/act-rules-format/#input-aspects-dom)

## Test procedure

### Applicability

The rule applies to any `meta` element with the value of the `http-equiv` attribute set to `refresh`. This can be found using the following CSS selector: `meta[http-equiv="refresh"]`.

### Expectation

The text before the first comma or semicolon is either `0` or not a number (ignore any whitespace characters).

## Changelog

Changes since the [previous version](https://github.com/w3c/wcag-act-rules/blob/73ed1156e84b44b97f383d214da7791e5c11b76c/_rules/ACT-R1.md)

- Rule is updated to applicability / expectations format

## Acknowledgment

This ACT rule was created by [Wilco Fiers](https://github.com/WilcoFiers).