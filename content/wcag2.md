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

## {{ requirement.num }} {{ requirement.handle }}

{% endfor %}