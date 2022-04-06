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

<table>
  <thead>
    <tr>
      <th>Implementation</th>
      <th>Vendor</th>
      <th>Consistent</th>
      <th>Partial</th>
      <th>Minimal</th>
    </tr>
  </thead>
  <tbody>
    {% for keyValPair in implementations %}
      {% assign urlSlug = keyValPair[0] %}
      {% assign implementation = keyValPair[1] %}
      <tr>
        <td><a href="./{{ urlSlug }}">
          {{ implementation.name }}
        </a></td>
        <td>{{ implementation.vendor }}</td>
        <td>{{ implementation.consistency.complete }}</td>
        <td>{{ implementation.consistency.partial }}</td>
        <td>{{ implementation.consistency.minimal }}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>
