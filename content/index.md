---
layout: standalone_resource
title: "All ACT Rules"
permalink: /standards-guidelines/act/rules/
ref: /standards-guidelines/act/rules/
lang: en
type_of_guidance: false
footer: ""
github:
  repository: w3c/wcag-act-rules
  path: content/index.md
---

{::nomarkdown}
{% include box.html type="start" title="Summary" class="" %}
{:/}

ACT Rules describe how to test conformance of accessibility standards such as Web Content Accessibility Guidelines (WCAG). They are primarily for accessibility testers, and for developers of test tools and methodologies. 

ACT Rules for WCAG 2 are formally approved by the Accessibility Guidelines Working Group (AG WG). Proposed rules are have not yet gone through the complete approval process. Learn more from [About ACT Rules](/standards-guidelines/act/rules/about/).

{::nomarkdown}
{% include box.html type="end" %}
{:/}

## Rules for WCAG 2

These ACT Rules are used to test conformance issues of Web Content Accessibility Guidelines (WCAG) version 2.0 and 2.1. These rules have been approved by the Accessibility Guidelines Working Group. They are fully implemented in at least one evaluation tool or methodology.

<ul>
{%- for rule in site.data.wcag-act-rules.rules["act-rules"] %}
  {%- if rule.proposed == false and rule.successCriteria.size > 0 %}
    <li><a href="{{ rule.permalink | relative_url }}">{{ rule.title }}</a></li>
  {%- endif %}
{%- endfor %}
</ul>

## Proposed Rules for WCAG 2

These ACT Rules are used to test conformance issues of Web Content Accessibility Guidelines (WCAG) version 2.0 and 2.1. These rules will be considered for approval once they are fully implemented in at least one evaluation tool or methodology.

<ul>
{%- for rule in site.data.wcag-act-rules.rules["act-rules"] %}
  {%- if rule.proposed == true and rule.successCriteria.size > 0 %}
    <li><a href="{{ rule.permalink | relative_url }}">{{ rule.title }}</a></li>
  {%- endif %}
{%- endfor %}
</ul>

## Other Proposed ACT Rules

These ACT Rules are **not** required for conformance to WCAG. They are part of various other accessibility standards and best practices, such as [WAI-ARIA](https://www.w3.org/TR/wai-aria/) and [Techniques for WCAG 2](https://www.w3.org/WAI/WCAG21/Techniques/). These rules will be considered for approval once they are fully implemented in at least one evaluation tool or methodology.

<ul>
{%- for rule in site.data.wcag-act-rules.rules["act-rules"] %}
  {%- if rule.successCriteria.size == 0 %}
    <li><a href="{{ rule.permalink | relative_url }}">{{ rule.title }}</a></li>
  {%- endif %}
{%- endfor %}
</ul>
