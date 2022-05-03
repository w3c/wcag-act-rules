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

## About These Cores

Scores on this page are based on publicly available test results. Each ACT rule has examples. Vendors of test tools and methodologies run their implementation against the examples and report the outcome. By comparing the outcome to the expected outcome, the consistency of these implementations can be worked out.

Implementations are consistent when all the test cases have the expected outcome. (I.e. a failed example should not be passed or vise versa.) They must also accurately report what success criteria were failed for each example. Automated implementations may report a "cannot tell" on some, but not all examples and still be considered consistent. A partially consistent implementation is one that meets some, but not all requirements, provided it does not fail any of the passed or inapplicable examples.

### Add a tool or methodology

For information on how to add your accessibility test tool or methodology to the list of ACT implementations, visit the [ACT-Rules community group website](https://act-rules.github.io/pages/implementations/reporting/).
