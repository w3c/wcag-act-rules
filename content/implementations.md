---
doc-note-type: draft
layout: standalone_resource
title: "Implementations"
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
ACT Rules implementations provide obtained test outcomes based on the Test Rules expected results. Scores are based on public test data submitted by evaluation tool vendors and test methodology developers. These data is for informational purposes. W3C does not endorse a specific evaluation tool or test methodology.
{::nomarkdown} {% include box.html type="end" %} {:/}

## Add a Tool or Methodology

The ACT Rules Task Force is working on a user interface for submitting implementations (to be added soon). For current information on how to add your accessibility evaluation tool or test methodology to the list of ACT implementations, visit the [ACT-Rules community group website](https://act-rules.github.io/pages/implementations/reporting/).

## Test Methodologies

Test methodologies provide step by step instructions on how to test accessibility requirements.
For details, see [understanding ACT consistency](#understandingactconsistency).

{% assign methodologies = implementations | where: "type", "Test methodology" %}
{% include_relative _implementations-table.html implementations=methodologies %}

## Semi-automated Test Tools

Semi-automated tools combine user input and automated testing to test accessibility requirements.
For details, see [understanding ACT consistency](#understandingactconsistency).

{% assign semiAutoTools = implementations | where: "type", "Semi-automated tool" %}
{% include_relative _implementations-table.html implementations=semiAutoTools %}

## Automated Test Tools

Automated test tools test accessibility requirements without user input.
For details, see [understanding ACT consistency](#understandingactconsistency).

{% assign automatedTools = implementations | where: "type", "Automated tool" %}
{% include_relative _implementations-table.html implementations=automatedTools %}

## Understanding ACT Consistency

Each Test Rule has examples, known as test cases. Evaluation tool vendors and test methodology developers run their implementations against the examples. Then they report the outcome in a standard format.

Consistency of an ACT implementation relates to how the outcomes of an implementation match the expected result of each of the Test Rules examples.

* An ACT implementation is **fully consistent** when all the following are true:
  - all success criteria that should fail are reported as such
  - all examples have the expected outcome. (I.e. a failed example should not be passed or vise versa.)
  - there are outcomes for all examples

  Automated implementations may report a "cannot tell" on some but not all examples, and still be considered consistent.
* An ACT implementation is **partially consistent** when it meets some but not all requirements. A partially consistent implementation can not include false positives; i.e. it failing any passed or inapplicable examples.

Some Test Rules are "proposed". These rules are agreed on by the ACT Rules Task Force, and are awaiting implementation and approval by the Accessibility Guidelines Working Group. For details, see [about ACT Rules](../rules/about/).

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
