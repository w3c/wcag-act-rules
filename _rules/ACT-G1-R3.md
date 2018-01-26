---
rule_id: ACT-G1-R3
name: "Media auto-play: pausing"
tests: /rule-tests/noise-warning.html?page=ACT-G1-R3-tests.html

success_criterion:
- 1.4.2 # Audio Control (level A)

authors:
- Frank Berker
- Wilco Fiers
---

## Description

Automatically playing audio and video must be paused or stopped within the first 3 seconds, unless it passes another ACT-G3 rule.

### Background

- [G60: Playing a sound that turns off automatically within three seconds](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/G60)
- [G170: Providing a control near the beginning of the Web page that turns off sounds that play automatically](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/G170)
- [G171: Playing sounds only on user request](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/G171)
- [F23: Failure of 1.4.2 due to playing a sound longer than 3 seconds where there is no mechanism to turn it off](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/F23)
- [F93: Failure of Success Criterion 1.4.2 for absence of a way to pause or stop an HTML5 media element that autoplays](http://www.w3.org/TR/2014/NOTE-WCAG20-TECHS-20140916/F93)

## Assumptions

- This rule states that the links or buttons for the mechanism to control the sound is one of the first five links or buttons on the web page. This is more specific then the WCAG documentation.

## ACT-R3 Rule group

This rule is part of a group, consisting of:
- [ACT-G1-R1](ACT-G1-R1.html)
- [ACT-G1-R2](ACT-G1-R2.html)
- ACT-G1-R3 (current)
- [ACT-G1-R4](ACT-G1-R4.html)

Applicable elements should pass at least one of these rules.

## Applicability

Any `video` or `audio` element(s) with the `autoplay` attribute, as well as any `object` element(s) that is used for automatically playing video or audio when the web page loads.

## Expectation

The applicable item is paused or stopped within 3 seconds after it begins playing.

## Changelog

This is the first version of this rule.
