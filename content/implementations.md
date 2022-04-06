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

{% assign siteData = site.data.wcag-act-rules %}
{% assign implementations = siteData.act-implementations %}

<table>
  <thead>
    <tr>
      <th>Implementation</th>
      <th>Vendor</th>
      <th>Type</th>
      <th>Standards<th>
      <th>Consistent rules</th>
    </tr>
  </thead>
  <tbody>
    {% for implementation in implementations %}
      {% assign consistency = siteData.implementations[implementation.uniqueKey].consistency %}
      <tr>
        <td><a href="./{{ urlSlug }}">
          {{ implementation.name }}
        </a></td>
        <td>{{ implementation.vendor }}</td>
        <td>{{ implementation.type }}</td>
        <td>{{ implementation.standards | join ", " }}</td>
        <td>{{ consistency.complete }}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>
