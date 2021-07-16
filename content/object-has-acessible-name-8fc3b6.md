---
title: "Object element rendering non-text content has non-empty accessible name"
permalink: /standards-guidelines/act/rules/object-has-acessible-name-8fc3b6/
ref: /standards-guidelines/act/rules/object-has-acessible-name-8fc3b6/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/object-has-acessible-name-8fc3b6.md
proposed: true
rule_meta:
  id: 8fc3b6
  name: "Object element rendering non-text content has non-empty accessible name"
  rule_type: atomic
  description: |
    This rule checks that each `object` element rendering non-text content has a non-empty accessible name.
  accessibility_requirements:
    'wcag20:1.1.1':
      forConformance: true
      failed: not satisfied
      passed: further testing needed
      inapplicable: further testing needed
  input_aspects:
    - handle: DOM Tree
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-dom
    - handle: CSS Styling
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-css
    - handle: Accessibility Tree
      url: https://www.w3.org/TR/act-rules-aspects/#input-aspects-accessibility
  last_modified: July 16th, 2021
  scs_tested:
    - handle: Non-text Content
      num: 1.1.1
      level: A
---

## Applicability

This rule applies to any `object` element that is [included in the accessibility tree][] and embeds a resource with an [image MIME type](https://mimesniff.spec.whatwg.org/#image-mime-type) or an [audio or video MIME type](https://mimesniff.spec.whatwg.org/#audio-or-video-mime-type).

## Expectation

Each target element has an [accessible name][] that is not empty (`""`).

## Assumptions

The `object` element is not rendered for presentational purposes. If the `object` is decorative and not [marked as decorative][] then the rule might fail but the success criterion might still be satisfied.

## Accessibility Support

Non-supported media formats make screen readers render the text content of the element instead of other attributes.

## Background

Testing that the [accessible name][] describes the purpose of the `object` element is not part of this rule and must be tested separately.

- [Understanding Success Criterion 1.1.1: Non-text Content](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html)

## Test Cases

### Passed

#### Passed Example 1

This `object` element which embeds an audio resource has a non-empty [accessible name][] through its `aria-label` attribute.

```html
<object aria-label="Moon speech" data="/test-assets/moon-audio/moon-speech.mp3"></object>
```

#### Passed Example 2

This `object` element which embeds a video resource has a non-empty [accessible name][] through its `title` attribute.

```html
<object title="Rabbit animated short" data="/test-assets/rabbit-video/video.mp4"></object>
```

#### Passed Example 3

This `object` element which embeds an image resource has a non-empty [accessible name][] through its `aria-labelledby` attribute.

```html
<span id="label">W3C</span> <object aria-labelledby="label" data="/test-assets/shared/w3c-logo.png"></object>
```

#### Passed Example 4

This `object` element placed off screen, which embeds an audio resource, has a non-empty [accessible name][] through its `title` attribute.

```html
<html>
	<style>
		.offScreen {
			position: absolute;
			left: -9999px;
			top: -9999px;
		}
	</style>
	<body>
		<object title="Moon speech" data="/test-assets/moon-audio/moon-speech.mp3" class="offScreen"></object>
	</body>
</html>
```

### Failed

#### Failed Example 1

This `object` element which embeds a video resource has an empty [accessible name][] because the `title` attribute is empty.

```html
<object title="" data="/test-assets/rabbit-video/video.mp4"></object>
```

#### Failed Example 2

This `object` element which embeds an image resource has an empty [accessible name][] because the `span` element with `id="label"` is empty.

```html
<span id="label"></span> <object aria-labelledby="label" data="/test-assets/shared/w3c-logo.png"></object>
```

#### Failed Example 3

This `object` element which embeds an audio resource has an empty [accessible name][] because the `aria-labelledby` attribute references a non-existing id.

```html
<object aria-labelledby="download" data="/test-assets/moon-audio/moon-speech.mp3"></object>
```

#### Failed Example 4

This `object` element which embeds an audio resource has an empty [accessible name][] because it does not provide an accessible name through one of `title`, `aria-label` or `aria-labelledby` attributes.

```html
<object data="/test-assets/moon-audio/moon-speech.mp3"></object>
```

### Inapplicable

#### Inapplicable Example 1

This `object` element is not [included in the accessibility tree][] due to `display:none`.

```html
<object data="/test-assets/rabbit-video/video.mp4" style="display: none;"></object>
```

#### Inapplicable Example 2

This `object` element is not [included in the accessibility tree][] due to `visibility:hidden`.

```html
<object data="/test-assets/moon-audio/moon-speech.mp3" style="visibility: hidden;"></object>
```

#### Inapplicable Example 3

This `object` element is not [included in the accessibility tree][] due to `aria-hidden="true"`.

```html
<object data="/test-assets/shared/w3c-logo.png" aria-hidden="true"></object>
```

#### Inapplicable Example 4

This `object` element is not [included in the accessibility tree][] because it is marked as decorative through `role="presentation"`.

```html
<object type="image/png" role="presentation" data="/test-assets/contrast/example.png"></object>
```

#### Inapplicable Example 5

This `object` element embeds an HTML resource.

```html
<object title="My University" data="/test-assets/shared/index.html"></object>
```

#### Inapplicable Example 6

There is no `object` element.

```html
<audio title="Moon speech" src="/test-assets/moon-audio/moon-speech.mp3"></audio>
```

## Glossary

{% include_relative glossary/accessible-name.md %}
{% include_relative glossary/explicit-role.md %}
{% include_relative glossary/focusable.md %}
{% include_relative glossary/hidden-state.md %}
{% include_relative glossary/included-in-the-accessibility-tree.md %}
{% include_relative glossary/marked-as-decorative.md %}
{% include_relative glossary/outcome.md %}
{% include_relative glossary/wai-aria-specifications.md %}

{% include implementations/8fc3b6.md %}

## Acknowledgements

This rule was written in the [ACT Rules community group](https://w3.org/community/act-r/), 
with the support of the EU-funded [WAI-Tools Project](https://www.w3.org/WAI/about/projects/wai-tools/).

### Authors

- [António Estriga](https://github.com/AntonioEstriga)

### Audio file

- audio is an excerpt from JFK's 'Moon Speech'

## Changelog

This is the first version of this ACT rule.

[accessible name]: #accessible-name 'Definition of accessible name'
[included in the accessibility tree]: #included-in-the-accessibility-tree 'Definition of included in the accessibility tree'
[marked as decorative]: #marked-as-decorative 'Definition of Marked as decorative'
