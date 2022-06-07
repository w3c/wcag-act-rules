---
doc-note-type: draft
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

<section class="doc-note-box act-sticky">
  <p>This page is <strong>under development</strong> and has not been approved by the working group.</p>
</section>

{::nomarkdown}
{% include box.html type="start" title="Summary" class="" %}
{:/}

This page contains list of ACT Rules for determining conformance to [Web Content Accessibility Guidelines (WCAG) {% include_cached icon.html name="different-view" %}](https://www.w3.org/WAI/standards-guidelines/wcag/), [WAI-ARIA {% include_cached icon.html name="different-view" %}](https://www.w3.org/WAI/ARIA/) and other accessibility practices.  ACT Rules for WCAG 2 are formally approved by the Accessibility Guidelines Working Group. Proposed rules have not yet completed the approval process. ACT Rules are informative — that means they are not required for determining conformance to WCAG or ARIA. Learn more from [About ACT Rules](/standards-guidelines/act/rules/about/).

{::nomarkdown}
{% include box.html type="end" %}
{:/}

## Rules for WCAG 2

These ACT Rules are used to test conformance to WCAG 2.0 or 2.1. These rules have been approved by the Accessibility Guidelines Working Group. They are fully implemented in at least one [test tool or methodology](../implementations/).

<ul>
{%- for rule in site.data.wcag-act-rules.rules["act-rules"] %}
  {%- if rule.proposed == false %}
    <li><a href="{{ rule.permalink | relative_url }}">{{ rule.title }}</a></li>
  {%- endif %}
{%- endfor %}
</ul>

## Proposed Rules for WCAG 2

These ACT Rules are used to test conformance issues of WCAG 2.0 or 2.1. These rules will be considered for approval once they are fully implemented in at least one test tool or methodology.

<ul>
{%- for rule in site.data.wcag-act-rules.rules["act-rules"] %}
  {%- if rule.proposed == true and rule.successCriteria.size > 0 %}
    <li><a href="{{ rule.permalink | relative_url }}">{{ rule.title }}</a></li>
  {%- endif %}
{%- endfor %}
</ul>

## Other Proposed ACT Rules

These ACT Rules are **not** required for conformance to WCAG. They are part of various other accessibility standards and best practices, such as [WAI-ARIA {% include_cached icon.html name="different-view" %}](https://www.w3.org/TR/wai-aria/) and [Techniques for WCAG 2 {% include_cached icon.html name="different-view" %}](https://www.w3.org/WAI/WCAG21/Techniques/). These rules will be considered for approval once they are fully implemented in at least one test tool or methodology.

<ul>
{%- for rule in site.data.wcag-act-rules.rules["act-rules"] %}
  {%- if rule.successCriteria.size == 0 %}
    <li><a href="{{ rule.permalink | relative_url }}">{{ rule.title }}</a></li>
  {%- endif %}
{%- endfor %}
</ul>
