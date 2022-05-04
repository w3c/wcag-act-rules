---
doc-note-type: draft
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

{%- assign siteData = site.data.wcag-act-rules %}
{%- assign implementations = siteData.act-implementations | sort: "name" %}

{::nomarkdown} {% include box.html type="start" title="Summary" %} {:/}
ACT rules provide a standard way to compare the coverage of accessibility test tools and methodologies. This pages shows how many rules different tools and methodologies have accurately implemented. Scores are based on public test data.
{::nomarkdown} {% include box.html type="end" %} {:/}

## Test Methodologies

Methodologies provide step by step instructions on how to test accessibility standards.
See [understanding ACT consistency](#understandingactconsistency).

{% assign methodologies = implementations | where: "type", "Test methodology" %}
{% include_relative _implementations-table.html implementations=methodologies %}

## Semi-automated Test Tools

Tools that combine user input and automated testing to test accessibility standards.
See [understanding ACT consistency](#understandingactconsistency).

{% assign semiAutoTools = implementations | where: "type", "Semi-automated tool" %}
{% include_relative _implementations-table.html implementations=semiAutoTools %}

## Automatic Test Tools

Tools that fully automatically test accessibility standards.
See [understanding ACT consistency](#understandingactconsistency).

{% assign automatedTools = implementations | where: "type", "Automated tool" %}
{% include_relative _implementations-table.html implementations=automatedTools %}

## Understanding ACT Consistency

Scores on this page are based on publicly available test results. Each ACT rule has examples. Vendors of test tools and methodologies run their implementation against the examples and report the outcome in a standard format. By comparing the outcome to the expected result, the consistency of these implementations can be worked out.

A test tool or methodology is considered **fully consistent** when all the following are true:

- all the test cases have the expected outcome. (I.e. a failed example should not be passed or vise versa.); and
- all failing success criteria are reported; and
- there are outcomes for all examples; and
- automated implementations may report a "cannot tell" on some, but not all examples and still be considered consistent.

A test tool or methodology is **partially consistent** when it meets some, but not all requirements. A partially consistent implementation can not include false positives; i.e. it failing any passed or inapplicable examples.

Some ACT rules are "proposed". These rules are agreed on by the ACT Rules Task Force, but is not yet approved by the Accessibility Guidelines Working Group. See [about ACT Rules](../about/) for details.

## Add a tool or methodology

For information on how to add your accessibility test tool or methodology to the list of ACT implementations, visit the [ACT-Rules community group website](https://act-rules.github.io/pages/implementations/reporting/).

<script>
  var actTables = document.querySelectorAll('table.act-implementations')
  actTables.forEach(function (actTable) {
    var divs = actTable.querySelectorAll('.act-approved, .act-proposed');
    var maxValue = 1;
    divs.forEach(function (div) {
      maxValue = Math.max(maxValue, parseInt(div.innerText));
    });
    divs.forEach(function (div) {
      var currentValue = parseInt(div.innerText);
      var percentage = Math.ceil(currentValue / maxValue * 100);
      if (isNaN(percentage) === false) {
        div.innerHTML += '<div class="act-bar"><div style="width: ' + percentage + '%"></div></div>'
      }
    })
  });
</script>
