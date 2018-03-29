---
layout: default
title: ACT Review Process
---

# ACT Review Process

*Note: This is a draft proposal for discussion. It has not yet been reviewed by ACT TF, AG WG, and Auto-WCAG CG. It currently has no formal standing in W3C, and can only be considered as such. If you have feedback, please comment by filing [GitHub issues in the WCAG ACT repository](https://github.com/w3c/wcag-act/issues/), if this is not feasible, by email to [public-wcag-act-comments@w3.org](mailto:public-wcag-act-comments@w3.org).*

## Introduction

To support scalability and open participation, the review process of [ACT Rules](https://www.w3.org/WAI/GL/task-forces/conformance-testing/wiki/ACT_Overview_-_What_is_ACT) leverages [W3C Community Groups](https://www.w3.org/community/). The **[Auto-WCAG Community Group](https://auto-wcag.github.io/auto-wcag/)** is the default community for the development and review of ACT Rules. However, the review process described below can be equally applied to other open community platforms with appropriate licensing. Particularly ACT Rules for specific contexts, such as digital publishing, may benefit from development and review within a community with dedicated interest and expertise.

The ACT Rules development and review process described below relies on the [GitHub collaboration platform](https://github.com/), but could be applicable to comparable developer platforms.

## Step 1: ACT Rule Creation

ACT Rules are created in the GitHub repository by submitting pull requests. For every ACT Rule, contributors create or upload the following files as one pull request:

- One Test Rule file in the Test Rules directory;
- Multiple Test Case files the Test Cases directory.

All files must adhere to the corresponding file naming conventions. The Test Rule file must conform to the ACT Rules Format specification. Contributors are responsible for ensuring that their contributions adhere to these requirements at all times.

Pull requests with newly created ACT Rules are marked with the label "new".

## Step 2: ACT Rule Validation

Pull requests with newly created ACT Rules are validated by assigned members of the community group, who are not the contributors. This validation includes:

- All files adhere to the corresponding file naming conventions;
- The Test Rule file conforms to the ACT Rules Format specification.

The assigned reviewers and any member of the public may raise issues on these pull requests. Contributors are expected to address all issues related to the validation checks listed above. Other issues may be deferred to later stages of this development and review process. In case of disagreement, the community group Chairs and, if available, the W3C Staff Contacts are responsible for conflict resolution.

When pull requests are deemed to have passed the validation checks listed above, they are given the label "draft".

## Step 3: ACT Rule Verification

Any member of the public may raise issues on ACT Rules. This includes any proposed changes and additions to the Test Rules and Test Case files. In particular, proposing novel test cases is an effective way to highlight potential issues in the interpretation of ACT Rules. Contributors of ACT Rules are expected to actively seek such input from members of the community group, and to address all issues raised. In case of disagreement, the community group Chairs and, if available, the W3C Staff Contacts are responsible for conflict resolution.

When all issues on a pull request are deemed to have been adequately addressed, the ACT Rule is given the label "ready".

## Step 4: ACT Rule Implementation

Any member of the public may choose to implement ACT Rules during any stage of the process. Implementations of ACT Rules include (semi-)automated testing tools and manual testing methodologies. During implementation, further issues may be identified and raised. They are addressed in the same way as during the verification stage, but do not necessarily require changing the label of the pull request.

Implementers may choose to publish an implementation manifest, which identifies the Test Rules and Test Cases they implemented, in the corresponding format. Implementors may also choose to add a link to their implementation manifests to the implementors manifest of the repository by submitting a pull request.

When all issues on a pull request are deemed to have been adequately addressed, and when there are at least two independent implementations of the latest Test Rule and all associated Test Cases, then the Test Rule and Test Case files can be merged into the repository as a completed ACT Rule.

## Step 5: ACT Rule Maintenance

Implementations for ACT Rules may be added, modified, or removed at any time. Also issues and pull requests on existing Test Rule and Test Case files may be raised at any time. The community group is expected to regularly assess the status of ACT Rules, including the status of current implementations.

Should the issues raised be sufficiently grave, then an ACT Rule may be moved to the Obsolete directory thus removed from the collection of active rules. This may also be the case when there is less than two independent implementations of the latest Test Rule and all associated Test Cases.

An ACT Rule may be overhauled through a comprehensive pull request covering the Test Rule and all associated Test Cases. This pull request receives the label "new", "draft", or "ready" depending on the change, and undergoes the development and review process anew.

In case of disagreement, the community group Chairs and, if available, the W3C Staff Contacts are responsible for conflict resolution.

## Step 6: ACT Rule Acceptance

The [W3C Accessibility Guidelines Working Group (AGWG)](https://www.w3.org/WAI/GL/) may at any time choose to accept, modify, or remove ACT Rules developed through this process, as part of the authoritative set of W3C ACT Rules for the W3C Web Content Accessibility Guidelines (WCAG). AGWG may delegate this decision or coordinate with other relevant groups, such as the [W3C Accessibility Conformance Testing (ACT) Task Force](http://www.w3.org/wai/gl/task-forces/conformance-testing/) or the [W3C Publishing Working Group](https://www.w3.org/publishing/groups/publ-wg/). In this process, AGWG may adopt additional quality criteria for the test rules or community group, such as on the extent of review, consensus, and type of participation reflected in the development and review process. In case of disagreement, the AGWG Chairs and W3C Staff Contacts are responsible for conflict resolution. They may coordinate with the relevant community group Chairs and, if available, the W3C Staff Contacts.
