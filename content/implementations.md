---
layout: standalone_resource
title: "Accessibility Test Tools & Methodologies"
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
  table {
    width: 100%;
  }
  table ul {
    list-style: none;
    padding: 0;
    margin-bottom: 0;
  }
  .act-small {
    padding-top: .25em;
    font-size: 80%;
  }
  .act-bar {
    background: #CCC;
  }
  .act-bar > :first-child {
    background: var(--wai-green);
    height: 3px;
  }
  .act-small .act-bar > :first-child {
    height: 2px;
  }
</style>

{::nomarkdown} {% include box.html type="start" title="Summary" %} {:/}

ACT rules provide a standard way to compare the coverage of accessibility test tools and methodologies. This pages shows how many rules different tools and methodologies have accurately implemented. Scores are based on public test data.

{::nomarkdown} {% include box.html type="end" %} {:/}

{% assign siteData = site.data.wcag-act-rules %}
{% assign implementations = siteData.act-implementations | sort: "name" %}
{% assign methodologies = implementations | where: "type", "Test methodology" %}

## Test Methodologies

Methodologies provide step by step instructions on how to test accessibility standards.

{% assign methodologies = implementations | where: "type", "Test methodology" %}
{% include_relative _implementations-table.html implementations=methodologies %}

## Semi-automated Test Tools

Tools that combine user input and automated testing to test accessibility standards.

{% assign semiAutoTools = implementations | where: "type", "Semi-automated tool" %}
{% include_relative _implementations-table.html implementations=semiAutoTools %}

## Automatic Test Tools

Tools that fully automatically test accessibility standards.

{% assign automatedTools = implementations | where: "type", "Automated tool" %}
{% include_relative _implementations-table.html implementations=automatedTools %}
