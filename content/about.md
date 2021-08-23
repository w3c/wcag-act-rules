---
title: "About WCAG 2 Test Rules"
permalink: /standards-guidelines/act/rules/about/
ref: /standards-guidelines/act/rules/about/
lang: en
# translators: # Uncomment (remove #) for translations, one - name line per translator.
# - name: Translator 1
# - name: Translator 2
# contributors:
# - name: Contributor 1
# - name: Contributor 2
type_of_guidance: false
github:
  repository: w3c/wcag-act-rules
  path: content/index.md
---

WCAG 2 Test Rules describe how to test conformance to Web Content Accessibility Guideline (WCAG) success criteria. They are primarily for developers of evaluation tools and test methodologies. Guidance for others is in Understanding WCAG and WCAG Techniques. To learn more, see: [WCAG Overview](https://www.w3.org/WAI/standards-guidelines/wcag/), [All WCAG 2 Guidance](https://www.w3.org/WAI/standards-guidelines/wcag/docs/).

The [List of Test Rules for WCAG 2](https://www.w3.org/WAI/standards-guidelines/act/rules/) is updated periodically. They are developed according to the [Accessibility Conformance Testing (ACT) Rules Format 1.0](https://www.w3.org/WAI/standards-guidelines/act/) standard.

[Understanding Conformance](https://www.w3.org/WAI/WCAG22/Understanding/conformance) provides related information, including on [understanding accessibility support](https://www.w3.org/WAI/WCAG22/Understanding/conformance#accessibility-support).

## Test Rules are Informative

*WCAG 2 Test Rules are informative — that means they are not required for determining conformance. The basis for determining conformance to WCAG is the success criteria from the WCAG standard — not the Test Rules.*

While W3C's [List of Test Rules for WCAG 2](https://www.w3.org/WAI/standards-guidelines/act/rules/) are reviewed by the W3C Accessibility Guidelines Working Group (AGWG), they are not vetted to the same degree as the W3C Web Content Accessibility Guidelines (WCAG) standard (called *W3C Recommendation*). The WCAG standard is the normative reference on determining conformance.

## Test Rules are Partial Checks

Test Rules typically check specific aspects of WCAG success criteria. For example, that a table cell has a header rather than the entire WCAG 2.2 success criterion 1.3.1 "Info and Relationships", which applies to many more information structures on a web page. In fact, this example rule would not even check the validity of the table header, only if the header exists for a given table cell.

Test Rules are also technology-specific. For example, the aforementioned table header example would be specific to HTML, possibly enriched with WAI-ARIA roles and properties, but not to other formats with tables. WCAG 2.2 success criteria are designed to be technology-agnostic and applicable to all web technologies.

## Test Rules Check for Failures

Test Rules are designed to check failures in satisfying WCAG success criteria. That is, when content fails Test Rules, it means that the content does not satisfy the corresponding success criteria. However, when content passes Test Rules, it means that no corresponding failures were detected — it does not necessarily mean that the content satisfies all aspects of the corresponding success criteria.

The reason for this is because WCAG success criteria typically cover several aspects and technologies, while Test Rules only check specific aspects. Checking that content satisfies all aspects of WCAG success criteria typically requires further verification by human testers.

**Note**: [WCAG 2 Conformance Requirement 1](https://www.w3.org/WAI/WCAG22/Understanding/conformance#cc1) allows for "conforming alternate versions". That means that content may still conform to WCAG 2, even when content fails Test Rules.

## Test Rule Implementations

Implementation of an Test Rule can be any automated testing tool, manual testing methodology, or other procedure that provides the same expected results for the test cases defined by the Test Rule. Specifically, when the expected result for a test case is:

- **Passed**, the test result generated from the implementation is *passed*, *cantTell*, or *inapplicable*
- **Failed**, the test result generated from the implementation is *failed* or *cantTell*
- **Inapplicable**, the test result generated from the implementation is *inapplicable*, *cantTell*, or *passed*

## Structure of Test Rules

Test Rules conform to the [Accessibility Conformance Testing (ACT) Rules Format 1.0](https://www.w3.org/WAI/standards-guidelines/act/) standard. They include the following parts:

- **Descriptive Title** – title for the Test Rule, which should describe the rule
- **Rule Identifier** – identifier for the Test Rule; the W3C rules use alphanumeric strings
- **Rule Type** – there are two basic types of Test Rules, depending on what is being tested:
  - **Atomic Rule** – test one specific situation, which may be part of a composite rule
  - **Composite Rule** – combine outcome from multiple atomic rules to one outcome
- **Accessibility Requirements Mapping** – maps the Test Rule to particular accessibility requirements; in this suite of rules we use Web Content Accessibility Guidelines (WCAG) 2 Success Criteria
- **Rule Input** – describes the scope of input into Test Rules, which is one of the following:
  - **Input Aspects** – input into atomic rules, such as DOM Tree and CSS Styling etc.
  - **Input Rules** – input into the composite rules, which are the atomic rules in scope
- **Applicability** – description of the specific parts of the content, for which the rule applies
- **Expectations** – description of the expected characteristics of the applicable rule content
- **Assumptions** – assumptions made, such as specific interpretations of the requirements
- **Accessibility Support** – known limitations regarding browsers and assistive technology
- **Test Cases** – sample code demonstrating passed, failed, and inapplicable rule conditions
- **Change Log** – history of changes for the Test Rules, to support backward compatibility
- **Glossary** – list of key terms defined by the Test Rule or used by the specific Test Rule
- **Issues List (Optional)** – list of known issues or bugs for the particular Test Rule, if any
- **Background (Optional)** – relevant background, such as additional documentation, if any
- **Acknowledgements (Optional)** – such as rule writers, reviewers, and other contributors
