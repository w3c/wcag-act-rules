---
layout: standalone_resource
title: "ACT Implementations"
permalink: /standards-guidelines/act/implementations/
ref: /standards-guidelines/act/implementations/
lang: en
type_of_guidance: false
footer: ""
github:
  repository: w3c/wcag-act-rules
  path: content/implementations.md
---

{::nomarkdown} {% include box.html type="start" title="Summary" %} {:/}

Summary text goes here

{::nomarkdown} {% include box.html type="end" %} {:/}

{% assign implementations = site.data.wcag-act-rules.implementations %}

<ul>
{% for implementation in implementations %}
  <li>{{ implementation.name }} by {{ implementation.vendor }}</li>
{% endfor %}
</ul>
