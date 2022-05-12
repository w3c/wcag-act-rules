---
doc-note-type: draft
layout: standalone_resource
title: "Accessibility Test Tools & Methodologies"
permalink: /standards-guidelines/act/implementations/
ref: /standards-guidelines/act/implementations/
lang: en
type_of_guidance: false
github:
  repository: w3c/wcag-act-rules
  path: content/implementations.md
---

{%- assign siteData = site.data.wcag-act-rules %}
{%- assign implementations = siteData.act-implementations | sort: "name" %}

<section class="doc-note-box act-sticky">
  <p>This page is <strong>under development</strong> and has not been approved by the working group.</p>
</section>

{::nomarkdown} {% include box.html type="start" title="Summary" %} {:/}
ACT Rules provide a standard way to compare how accessibility test tools and methodologies cover accessibility standards. The tables on these pages show how many ACT Rules different tools and methodologies have accurately implemented. Consistency of an implementation relates to how its outcomes match the expected result of each of the ACT Rules examples.
{::nomarkdown} {% include box.html type="end" %} {:/}

## Test Methodologies

Test methodologies provide step by step instructions on how to test accessibility standards.
See [understanding ACT consistency](#understandingactconsistency).

{% assign methodologies = implementations | where: "type", "Test methodology" %}
{% include_relative _implementations-table.html implementations=methodologies %}

## Semi-automatic Test Tools

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

Each ACT rule has examples. Vendors of test tools and methodologies run their implementations against the examples and report the outcome in a standard format. Scores are based on publicly available data

A test tool or methodology is considered **consistent** when all the following are true:

- all success criteria that should fail are reported as such; and
- all examples have the expected outcome. (I.e. a failed example should not be passed or vise versa.); and
- there are outcomes for all examples; and

Automated implementations may report a "cannot tell" on some, but not all examples and still be considered consistent.

A test tool or methodology is **partially consistent** when it meets some, but not all requirements. A partially consistent implementation can not include false positives; i.e. it failing any passed or inapplicable examples.

Some ACT rules are "proposed". These rules are agreed on by the ACT Rules Task Force, and are awaiting implementation and approval by the Accessibility Guidelines Working Group. For details, see [about ACT Rules](../rules/about/).

## Add a Tool or Methodology

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
        div.innerHTML += '<div class="progress-bar">' +
          '<div style="width:' + percentage + '%" class="progress-bar__progress"></div>' +
          '</div>'
      }
    })
  });
</script>
