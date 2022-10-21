---
layout: standalone_resource
title: "All ACT Rules"
permalink: /standards-guidelines/act/rules/
ref: /standards-guidelines/act/rules/
lang: en
type_of_guidance: ""
footer: ""
github:
  repository: w3c/wcag-act-rules
  path: content/index.md
---

{::nomarkdown}
{% include box.html type="start" title="Summary" class="" %}
{:/}

This page contains list of ACT Rules to test conformance [Web Content Accessibility Guidelines (WCAG) {% include_cached icon.html name="different-view" %}](https://www.w3.org/WAI/standards-guidelines/wcag/), [WAI-ARIA {% include_cached icon.html name="different-view" %}](https://www.w3.org/WAI/ARIA/) and other accessibility practices.  ACT Rules for WCAG 2 are formally approved by the Accessibility Guidelines Working Group. Proposed rules have not yet completed the approval process. ACT Rules are informative — that means they are not required for determining conformance to WCAG or ARIA. Learn more from [About ACT Rules](/standards-guidelines/act/rules/about/).

{::nomarkdown}
{% include box.html type="end" %}
{:/}

## Rules for WCAG 2

The ACT Rules in this section directly relate to WCAG 2 success criteria. These rules have been approved by the Accessibility Guidelines Working Group. They are fully implemented in at least one [test tool or methodology](../implementations/).

<ul>
{%- for rule in site.data.wcag-act-rules.rules["act-rules"] %}
  {%- if rule.proposed == false %}
    <li><a href="{{ rule.permalink | relative_url }}">{{ rule.title }}</a></li>
  {%- endif %}
{%- endfor %}
</ul>

## Proposed Rules for WCAG 2

The ACT Rules in this section directly relate to WCAG 2 success criteria. These rules will be considered for approval once they are fully implemented in at least one test tool or methodology.

<ul>
{%- for rule in site.data.wcag-act-rules.rules["act-rules"] %}
  {%- if rule.proposed == true and rule.successCriteria.size > 0 %}
    <li><a href="{{ rule.permalink | relative_url }}">{{ rule.title }}</a></li>
  {%- endif %}
{%- endfor %}
</ul>

## Rules beyond WCAG

The ACT Rules below do not directly relate to WCAG success criteria. They relate to other accessibility guidance such as [WAI-ARIA {% include_cached icon.html name="different-view" %}](https://www.w3.org/TR/wai-aria/) or [Techniques for WCAG 2 {% include_cached icon.html name="different-view" %}](https://www.w3.org/WAI/WCAG21/Techniques/). These rules will be considered for approval once they are fully implemented in at least one test tool or methodology.

<ul>
{%- for rule in site.data.wcag-act-rules.rules["act-rules"] %}
  {%- if rule.successCriteria.size == 0 %}
    <li><a href="{{ rule.permalink | relative_url }}">{{ rule.title }}</a></li>
  {%- endif %}
{%- endfor %}
</ul>
