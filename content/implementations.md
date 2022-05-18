---
doc-note-type: draft
layout: standalone_resource
title: "Accessibility Tool & Methodology Matrix"
permalink: /standards-guidelines/act/implementations/
ref: /standards-guidelines/act/implementations/
lang: en
footer: ""
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
The tables on these pages show how many ACT Rules different accessibility test tools and methodologies have consistently implemented. Each implementation links to a report with more details on how rules are implemented.
{::nomarkdown} {% include box.html type="end" %} {:/}

## Test Methodologies

Test methodologies provide step by step instructions on how to test accessibility standards.
See [understanding ACT consistency](#understandingactconsistency).

{% assign methodologies = implementations | where: "type", "Test methodology" %}
{% include_relative _implementations-table.html implementations=methodologies %}

## Semi-automated Test Tools

Tools that combine user input and automated testing to test accessibility standards.
See [understanding ACT consistency](#understandingactconsistency).

{% assign semiAutoTools = implementations | where: "type", "Semi-automated tool" %}
{% include_relative _implementations-table.html implementations=semiAutoTools %}

## Automated Test Tools

Tools that fully automatically test accessibility standards.
See [understanding ACT consistency](#understandingactconsistency).

{% assign automatedTools = implementations | where: "type", "Automated tool" %}
{% include_relative _implementations-table.html implementations=automatedTools %}

## Understanding ACT Consistency

Each ACT rule has examples. Vendors of test tools and methodologies run their implementations against the examples and report the outcome in a standard format. Reports are based on publicly available data.

A test tool or methodology is considered **consistent** when all the following are true:

- All success criteria that should fail are reported as such, and
- all examples have the expected outcome. (I.e. a failed example should not be passed or vise versa.), and
- there are outcomes for all examples.

Automated implementations may report a "cannot tell" on some, but not all examples and still be considered consistent.

A test tool or methodology is **partially consistent** when it meets some, but not all requirements. A partially consistent implementation can not include false positives; i.e. it failing any passed or inapplicable examples.

Some ACT rules are "proposed". These rules are agreed on by the ACT Rules Task Force, and are awaiting implementation and approval by the Accessibility Guidelines Working Group. For details, see [about ACT Rules](../rules/about/).

## Add a Tool or Methodology

For information on how to add your accessibility test tool or methodology to the list of ACT implementations, visit the [ACT-Rules community group website](https://act-rules.github.io/pages/implementations/reporting/).

## Disclaimer & Feedback

The W3C does not endorse any particular accessibility tool or methodology. Information in these pages is derived from data published by the vendors behind these tools and methodologies. Only tools and methodologies for which public data is available can be listed on this page. Tools and methodologies often have test procedures not yet described using ACT Rules. These are not included in the implementation reports.

The data is taken as-is, and is not verified by the W3C. If there are any questions or concerns about the information on these pages, [open an issue on GitHub](https://github.com/w3c/wcag-act-rules/issues/new) or e-mail [wai@w3.org](mailto:wai@w3.org?subject=[en]%20Accessibility%20Test%20Tools%20&%20Methodologies).

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
