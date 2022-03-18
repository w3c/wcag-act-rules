---
title: "All WCAG 2 Test Rules"
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

WCAG 2 Test Rules describe how to test conformance to Web Content Accessibility Guidelines (WCAG) success criteria. They are primarily for developers of evaluation tools and test methodologies. Learn more from [About WCAG 2 Test Rules](/standards-guidelines/act/rules/about/).

This page lists Test Rules formally published by the W3C Accessibility Guidelines Working Group (AG WG), and Proposed Test Rules. Additional Rules are in development and will be listed on this page when published.

{::nomarkdown}
{% include box.html type="end" %}
{:/}
## Test Rules

These Test Rules have been approved by the Accessibility Guidelines Working Group. They are fully implemented in at least one evaluation tool or methodology.

<ul>
{% for rule in site.data.wcag-act-rules.rules["act-rules"] %}
  {% if rule.proposed == false %}
    <li><a href="{{ rule.permalink | relative_url }}">{{ rule.title }}</a></li>
  {% endif %}
{% endfor %}
</ul>

## Proposed Test Rules

Proposed test rules will be published when they have at least one implementation and are approved by the AGWG.

<ul>
{% for rule in site.data.wcag-act-rules.rules["act-rules"] %}
  {% if rule.proposed == true %}
    <li><a href="{{ rule.permalink | relative_url }}">{{ rule.title }}</a></li>
  {% endif %}
{% endfor %}
</ul>
