---
rule_id: ACT-G1-R1
name: "Media auto-play: pause mechanism"
group: ACT-G1
tests: /rule-tests/noise-warning.html?page=ACT-G1-R1-tests.html

success_criterion:
- 1.4.2 # Audio Control (level A)

authors:
- Frank Berker
- Wilco Fiers
---

## Description

Automatically playing audio and video can be paused, stopped or muted with a mechanism that's easily available, unless it passes another ACT-G3 rule.

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
- ACT-G1-R1 (current)
- [ACT-G1-R2](ACT-G1-R2.html)
- [ACT-G1-R3](ACT-G1-R3.html)
- [ACT-G1-R4](ACT-G1-R4.html)

Applicable elements should pass at least one of these rules.

## Applicability

Any `video` or `audio` element(s) with the `autoplay` attribute, as well as any `object` element(s) that is used for automatically playing video or audio when the web page loads.

## Expectation 1

There should be a mechanism on the web page that pauses, mutes or otherwise stops the sound of the applicable item.

## Expectation 2

This mechanism must be one of the first five focusable items on the page.

## Expectation 3

The mechanism must be in a media player in the main section of the page, which is visible without any additional action from the user.

## Changelog

Changes since the [previous version](https://github.com/w3c/wcag-act-rules/blob/73ed1156e84b44b97f383d214da7791e5c11b76c/_rules/ACT-R3.md)

- Rule ACT-R3 is broken up into a rule group ACT-G1

## Acknowledgment

This ACT rule was created by Frank Berker and [Wilco Fiers](https://github.com/WilcoFiers).