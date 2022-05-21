---
layout: standalone_resource
title: "ACT Rules for WCAG 2"
permalink: /standards-guidelines/act/wcag2/
ref: /standards-guidelines/act/wcag2/
lang: en
type_of_guidance: false
footer: ""
github:
  repository: w3c/wcag-act-rules
  path: content/wcag2.md
---

{% for requirement in site.data.wcag-act-rules.requirements %}
{%- assign scKey = requirement[0] %}
{%- assign criterion = requirement[1] %}
<h2>{{ criterion.num }} {{ criterion.handle }}</h2>

{% endfor %}