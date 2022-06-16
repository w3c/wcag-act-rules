---
doc-note-type: draft
layout: standalone_resource
title: "About ACT Rules"
permalink: /standards-guidelines/act/rules/about/
ref: /standards-guidelines/act/rules/about/
lang: en
type_of_guidance: false
footer: ""
github:
  repository: w3c/wcag-act-rules
  path: content/about.md
---

<section class="doc-note-box act-sticky">
  <p>This page is <strong>under development</strong> and has not been approved by the working group.</p>
</section>

{::nomarkdown}
{% include box.html type="start" title="Summary" class="" %}
{:/}

ACT Rules describe how to test conformance of accessibility standards such as [Web Content Accessibility Guidelines (WCAG) {% include_cached icon.html name="different-view" %}](https://www.w3.org/WAI/standards-guidelines/wcag/) and [WAI-ARIA {% include_cached icon.html name="different-view" %}](https://www.w3.org/WAI/ARIA/). ACT Rules inform accessibility testers on how to evaluate edge cases in way that is consistent with other accessibility testers, test tools, and methodologies. ACT Rules are informative — that means they are not required for determining conformance to WCAG or ARIA. 

{::nomarkdown}
{% include box.html type="end" %}
{:/}

## What are ACT Rules

ACT Rules are designed to harmonize how edge cases for WCAG and other accessibility guidance are tested. Each ACT Rule describes in technology specific language how to test one particular aspect of a WCAG success criterion or other requirement. Rules have passed, failed, and inapplicable examples which can be used as test cases to determine the consistency of [test tools and methodologies](../implementations/).

### ACT Rules are Informative

*ACT Rules are informative — that means they are not required for determining conformance. The basis for determining conformance to WCAG is the success criteria from the WCAG standard — not the ACT Rules.*

While W3C's [List of ACT Rules for WCAG 2](https://www.w3.org/WAI/standards-guidelines/act/rules/) are reviewed by the W3C Accessibility Guidelines Working Group (AGWG), they are not vetted to the same degree as the W3C Web Content Accessibility Guidelines (WCAG) standard (called *W3C Recommendation*). The WCAG standard is the normative reference on determining conformance.

### ACT Rules are Partial Checks

ACT Rules typically check specific accessibility requirement such as the WCAG 2 success criteria. For example, an ACT Rule might test that a table cell has a header, rather than testing success criterion 1.3.1 "Info and Relationships" in its entirety. In fact, this example rule would not even check the validity of the table header, only if the header exists for a given table cell.

ACT Rules are also technology-specific. For example, the aforementioned table header example would be specific to HTML, possibly enriched with WAI-ARIA roles and properties, but not to other technologies with tables. WCAG 2 success criteria are designed to be technology-agnostic and applicable to all web technologies.

### ACT Rules Check for Failures

ACT Rules are designed to check failures in satisfying WCAG 2 success criteria and other accessibility requirements. That is, when content fails ACT Rules, it means that the content does not satisfy the corresponding requirement. However, when content passes ACT Rules, it means that no corresponding failures were detected — it does not necessarily mean that the content satisfies all aspects of the corresponding accessibility requirement.

WCAG success criteria typically cover several aspects and technologies, while ACT Rules only check specific aspects. Checking that content satisfies all aspects of WCAG success criteria typically requires further verification by human testers. Requirements for WAI-ARIA are often more atomic than the WCAG 2 success criteria, and can therefore often be fully covered with ACT Rules.

**Note**: [WCAG 2 Conformance Requirement 1](https://www.w3.org/WAI/WCAG22/Understanding/conformance#cc1) allows for "conforming alternate versions". That means that content may still conform to WCAG 2, even when content fails ACT Rules.

## Implementation of ACT Rules

ACT Rules can be implemented by accessibility test tools and methodologies. Each rule comes with a number of passed, failed, and inapplicable examples. By running the tool or methodology against the examples its consistency with the rule can be determined. Vendors who publish such test results are included in the [ACT Test Tools and Methodology Matrix](../implementations/).

## Related Pages

- [Accessibility Conformance Testing (ACT) Rules Format 1.0 {% include_cached icon.html name="different-view" %}](https://www.w3.org/WAI/standards-guidelines/act/)
- [The WCAG 2 Documents {% include_cached icon.html name="different-view" %}](https://www.w3.org/WAI/standards-guidelines/wcag/docs/)
- [Understanding WCAG 2 Conformance](https://www.w3.org/WAI/WCAG22/Understanding/conformance)
- [understanding accessibility support](https://www.w3.org/WAI/WCAG22/Understanding/conformance#accessibility-support)
- [ARIA Authoring Practices {% include_cached icon.html name="different-view" %}](https://www.w3.org/WAI/ARIA/apg/)
- [Web Accessibility Evaluation Tools List](https://www.w3.org/WAI/ER/tools/)

## Structure of ACT Rules

ACT Rules conform to the [Accessibility Conformance Testing (ACT) Rules Format 1.0](https://www.w3.org/WAI/standards-guidelines/act/) standard. They include the following parts:

- **Descriptive Title** – title for the ACT Rule, which should describe the rule
- **Rule Identifier** – identifier for the ACT Rule; the rules use alphanumeric strings
- **Rule Type** – there are two basic types of ACT Rules, depending on what is being tested:
  - **Atomic Rule** – test one specific situation, which may be part of a composite rule
  - **Composite Rule** – combine outcome from multiple atomic rules to one outcome
- **Accessibility Requirements Mapping** – maps the ACT Rule to particular accessibility requirements; in this suite of rules we use Web Content Accessibility Guidelines (WCAG) 2 Success Criteria
- **Rule Input** – describes the scope of input into ACT Rules, which is one of the following:
  - **Input Aspects** – input into atomic rules, for example DOM Tree and CSS Styling etc.
  - **Input Rules** – input into the composite rules, which are the atomic rules in scope
- **Applicability** – description of the specific parts of the content, for which the rule applies
- **Expectations** – description of the expected characteristics of the applicable rule content
- **Assumptions** – assumptions made, for example specific interpretations of the requirements
- **Accessibility Support** – known limitations regarding browsers and assistive technology
- **Examples (Test Cases)** – sample code demonstrating passed, failed, and inapplicable rule conditions
- **Change Log** – history of changes for the ACT Rules, to support backward compatibility
- **Glossary** – list of key terms defined by the ACT Rule or used by the specific ACT Rule
- **Issues List (Optional)** – list of known issues or bugs for the particular ACT Rule, if any
- **Background (Optional)** – relevant background, for example additional documentation, if any
- **Acknowledgements (Optional)** – for example rule writers, reviewers, and other contributors
