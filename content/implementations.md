---
layout: standalone_resource
title: "ACT Tools & Methodologies"
permalink: /standards-guidelines/act/implementations/
ref: /standards-guidelines/act/implementations/
lang: en
type_of_guidance: false
footer: ""
github:
  repository: w3c/wcag-act-rules
  path: content/implementations.md
---

<style>
  table ul {
    list-style: none;
    padding: 0;
  }
</style>

{::nomarkdown} {% include box.html type="start" title="Summary" %} {:/}

Summary text goes here

{::nomarkdown} {% include box.html type="end" %} {:/}

{% assign siteData = site.data.wcag-act-rules %}
{% assign implementations = siteData.act-implementations | sort: "name" %}

<table>
  <thead>
    <tr>
      <th>Implementation</th>
      <th width="200">Vendor</th>
      <th>Standards</th>
      <th>Consistent rules</th>
    </tr>
  </thead>
  <tbody>
    {% for implementation in implementations %}
      {% assign consistency = siteData.implementations[implementation.uniqueKey].consistency %}
      <tr>
        <td><a href="./{{ implementation.uniqueKey }}">
          {{ implementation.name }}
        </a></td>
        <td>{{ implementation.vendor }}</td>
        <td><ul>
          {% for standard in implementation.standards %}
           <li>{{ standard }}</li>
          {% endfor %}
        </ul></td>
        <td><ul>
          <li>{{ consistency.complete }} WCAG 2 rules</li>
          <li>{{ consistency.complete }} proposed</li>
        </ul></td>
      </tr>
    {% endfor %}
  </tbody>
</table>
