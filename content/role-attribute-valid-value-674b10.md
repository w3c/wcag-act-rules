---
title: "role attribute has valid value"
permalink: /standards-guidelines/act/rules/role-attribute-valid-value-674b10/
ref: /standards-guidelines/act/rules/role-attribute-valid-value-674b10/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/role-attribute-valid-value-674b10.md
proposed: true
rule_meta:
  id: 674b10
  name: "`role` attribute has valid value"
  rule_type: atomic
  description: |
    This rule checks that each `role` attribute has a valid value.
  accessibility_requirements:
    'wcag20:1.3.1':
      forConformance: true
      failed: not satisfied
      passed: further testing needed
      inapplicable: further testing needed
    'wcag-technique:ARIA4':
      forConformance: false
      failed: not satisfied
      passed: further testing needed
      inapplicable: further testing needed
    'wcag-technique:G108':
      forConformance: false
      failed: not satisfied
      passed: further testing needed
      inapplicable: further testing needed
  input_aspects:
    - handle: DOM Tree
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom
    - handle: CSS Styling
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-css
  last_modified: July 16th, 2021
  scs_tested:
    - handle: Info and Relationships
      num: 1.3.1
      level: A
---

## Applicability

This rule applies to any `role` attribute for which all the following are true:

- the attribute has a value that is neither empty ("") nor only [ASCII whitespace][]; and
- the attribute is specified on an [HTML or SVG element][] whose [hidden state][] is "false".

## Expectation

Each test target has at least one token which is a valid value corresponding to a non-abstract role from [WAI-ARIA Specifications][].

## Assumptions

- This rule assumes that the `role` attribute is used to provide an ARIA [semantic role][] to the elements. If it is used for other purposes, this rule shouldn't be used.
- This rule assumes that elements with a `role` attribute have their intended structure and relationship conveyed through some sort of presentation. If it is not the case, it is possible to fail this rule while still satisfying [Success Criterion 1.3.1 Info and Relationship][sc131].
- This rule assumes that the intended role of the element is not its [implicit role][]. If no token is valid, User Agents will default to the [implicit role][] for the element; if that role is the intended one, it is possible to fail this rule but still satisfy [Success Criterion 1.3.1 Info and Relationship][sc131].

## Accessibility Support

Older browsers do not support more than one token in the value for a role attribute. If multiple values are used in the role attribute, the attribute is ignored in these browsers.

## Background

The `role` attribute is a set of [space separated tokens][]. Having a [whitespace](#whitespace) separated list of more than one token in the value of the role attribute is used for what is known as _fallback roles_. If the first token is not accessibility supported (or valid), the next one will be used for determining the [semantic role](#semantic-role) of the element, and so forth. Having the rule target attributes containing at least one non-[ASCII whitespace][] character ensures that there is at least one token in the set.

- [List of WAI-ARIA Roles][wai-aria role]
- [List of Graphics ARIA Roles](https://www.w3.org/TR/graphics-aria-1.0/#role_definitions)
- [List of DPUB ARIA Roles](https://www.w3.org/TR/dpub-aria-1.0/#role_definitions)
- [Specification of the `role` attribute][role attribute]
- [WAI-ARIA 1.1 Categorization of Roles](https://www.w3.org/TR/wai-aria-1.1/#roles_categorization)
- [WAI-ARIA Roles](https://www.w3.org/TR/wai-aria-1.1/#usage_intro)

## Test Cases

### Passed

#### Passed Example 1

This `role` attribute contains one token, and this token is a valid [WAI-ARIA role][].

```html
<label>Search: <input type="text" role="searchbox" placeholder="Enter 3 or more characters"/></label>
```

#### Passed Example 2

This `role` attribute contains two tokens, and these tokens are both valid [WAI-ARIA roles][wai-aria role].

```html
<style>
	.ref {
		color: #0000ee;
		text-decoration: underline;
		cursor: pointer;
	}
</style>
See [<span class="ref" onclick="location.href='https://act-rules.github.io/'" role="doc-biblioref link">ACT rules</span
>].
```

#### Passed Example 3

This `role` attribute contains two tokens, and one of these tokens (`searchbox`) is a valid [WAI-ARIA role][].

```html
<label>Search: <input type="text" role="searchfield searchbox" placeholder="Enter 3 or more characters"/></label>
```

### Failed

#### Failed Example 1

This `role` attribute contains one token, but this token is not a valid role in any of the [WAI-ARIA specifications][].

```html
<style>
	.link {
		color: #0000ee;
		text-decoration: underline;
		cursor: pointer;
	}
</style>
I love <span class="link" onclick="location.href='https://act-rules.github.io/'" role="lnik">ACT rules</span>.
```

#### Failed Example 2

This `role` attribute contains two tokens, but none of these tokens is a valid role in any of the [WAI-ARIA specifications][].

```html
<style>
	.ref {
		color: #0000ee;
		text-decoration: underline;
		cursor: pointer;
	}
</style>
See [<span class="ref" onclick="location.href='https://act-rules.github.io/'" role="bibliographic-reference lnik"
	>ACT rules</span
>].
```

### Inapplicable

#### Inapplicable Example 1

There is no `role` attribute.

```html
<img src="/test-assets/shared/w3c-logo.png" alt="W3C logo" />
```

#### Inapplicable Example 2

This `role` attribute has no value.

```html
<div role>Some Content</div>
```

#### Inapplicable Example 3

This `role` attribute is empty ("").

```html
<div role="">Some Content</div>
```

#### Inapplicable Example 4

This `role` attribute is only [ASCII whitespace][].

```html
<input type="text" role=" " />
```

#### Inapplicable Example 5

This `role` attribute is specified on an element whose [hidden state][] is "true".

```html
<div aria-hidden="true" role="banner">Some Content</div>
```

## Glossary

{% include_relative glossary/explicit-role.md %}
{% include_relative glossary/focusable.md %}
{% include_relative glossary/hidden-state.md %}
{% include_relative glossary/implicit-role.md %}
{% include_relative glossary/included-in-the-accessibility-tree.md %}
{% include_relative glossary/marked-as-decorative.md %}
{% include_relative glossary/namespaced-element.md %}
{% include_relative glossary/outcome.md %}
{% include_relative glossary/semantic-role.md %}
{% include_relative glossary/wai-aria-specifications.md %}
{% include_relative glossary/whitespace.md %}

{% include implementations/674b10.md %}

## Acknowledgements

This rule was written in the [ACT Rules community group](https://w3.org/community/act-r/), 
with the support of the EU-funded [WAI-Tools Project](https://www.w3.org/WAI/about/projects/wai-tools/).

### Authors

- [Jey Nandakumar](https://github.com/jkodu)

## Changelog

This is the first version of this ACT rule.

[ascii whitespace]: https://infra.spec.whatwg.org/#ascii-whitespace 'Definition of ASCII whitespace'
[hidden state]: #hidden-state 'Definition of Hidden State'
[implicit role]: #implicit-role 'Definition of Implicit Role'
[role attribute]: https://www.w3.org/TR/role-attribute/ 'Specification of the Role attribute'
[sc131]: https://www.w3.org/TR/WCAG21/#info-and-relationships 'Success Criterion 1.3.1 Info and Relationship'
[semantic role]: #semantic-role 'Definition of Semantic Role'
[space separated tokens]: https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#space-separated-tokens 'Definition of space separated tokens'
[wai-aria role]: https://www.w3.org/TR/wai-aria-1.1/#role_definitions 'List of WAI-ARIA roles'
[wai-aria specifications]: #wai-aria-specifications 'Definition of WAI-ARIA Specifications'
[html or svg element]: #namespaced-element
