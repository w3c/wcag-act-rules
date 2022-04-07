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

<style>
  table ul {
    list-style: none;
    padding: 0;
    margin-bottom: 0;
  }
</style>

{::nomarkdown} {% include box.html type="start" title="Summary" %} {:/}

Summary text goes here

{::nomarkdown} {% include box.html type="end" %} {:/}

{% assign siteData = site.data.wcag-act-rules %}
{% assign implementations = siteData.act-implementations | sort: "name" %}
{% assign methodologies = implementations | where: "type", "Test methodology" %}
{% assign automatedTools = implementations | where: "type", "Automated tool" %}

<h2>Test Methodologies</h2>
<p>... text ...</p>

<table>
  <thead>
    <tr>
      <th>Implementation</th>
      <th>Standards</th>
      <th>Completed rules</th>
    </tr>
  </thead>
  <tbody>
    {% for implementation in methodologies %}
      {% assign consistency = siteData.implementations[implementation.uniqueKey].consistency %}
      <tr>
        <td><a href="./{{ implementation.uniqueKey }}">
          {{ implementation.name }}
        </a></td>
        <td><ul>
          {% for standard in implementation.standards %}
           <li>{{ standard }}</li>
          {% endfor %}
        </ul></td>
        <td>{{ consistency.complete }}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>


<h2>Automatic Tools</h2>
<p>... text ...</p>

<table>
  <thead>
    <tr>
      <th>Implementation</th>
      <!-- <th width="200">Vendor</th> -->
      <th>Standards</th>
      <th>Completed rules</th>
    </tr>
  </thead>
  <tbody>
    {% for implementation in automatedTools %}
      {% assign consistency = siteData.implementations[implementation.uniqueKey].consistency %}
      <tr>
        <td><a href="./{{ implementation.uniqueKey }}">
          {{ implementation.name }}
        </a></td>
        <!-- <td>{{ implementation.vendor }}</td> -->
        <td><ul>
          {% for standard in implementation.standards %}
           <li>{{ standard }}</li>
          {% endfor %}
        </ul></td>
        <td>{{ consistency.complete }}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>
