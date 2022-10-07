---
doc-note-type: draft
layout: standalone_resource
title: "Submit an Implementation"
permalink: /standards-guidelines/act/report/submit/
ref: /standards-guidelines/act/report/submit/
lang: en
type_of_guidance: false
footer: ""
github:
  repository: w3c/wcag-act-rules
  path: content/report/submit.md
---

## Prerequisites

Before submitting an accessibility test tool or methodology as an ACT implementation, the implementor needs to run the tool or methodology against ACT test cases. The results need to be collected in an ACT implementation report.

This report is used to determine the [consistency]() of the implementation with one or more ACT rules. This report can be generated using the [ACT Implementation Generator](https://act-implementor.netlify.app/) tool, or it can be created automatically using the [JSON-LD Format](../earl/).

## Submit An Implementation

[Open an issue](https://github.com/w3c/wcag-act-rules/issues/new), proposing the new implementation. Please include the name of the implementation, and a URL to the EARL report.

> Note: Refer to the [available tools](/pages/implementations/tools/) section, to see if any of them can be used to generate the report in the EARL format.

## Updating An Report

Each implementation provides a permanent URL from which its implementation report is downloaded. The report is downloaded daily to check for any updates.

To update metadata information such as the tool name and vendor homepage, submit a [new issue][issue] or [pull request](https://github.com/w3c/wcag-act-rules/pulls) on GitHub.

## Third Party Submissions

Submitting an implementation requires permission from the owner of the test tool or methodology that is proposed. If you wish to submit an implementation on behalf of an implementer, we will require written permission from the owner of the implementation sent to [group-act-rules@w3.org][].

## Support & Help

If there are any questions about submitting an ACT implementation, open an [issue on GitHub](issue) or e-mail [group-act-rules@w3.org].

[group-act-rules@w3.org]: mailto:group-act-rules@w3.org
[issue]: https://github.com/w3c/wcag-act-rules/issues/new
