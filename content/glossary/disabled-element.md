### Disabled Element {#disabled-element}

An element is _disabled_ when it has been rendered [inoperable][] in one or more of the following ways:

1. The element matches the [`:disabled` pseudo-class][disabled pseudo-class]. For HTML elements this means that the element is [actually disabled][].

2. The element has a [shadow-including ancestor][] whose `aria-disabled` [attribute value][] is "true".

[actually disabled]: https://html.spec.whatwg.org/multipage/semantics-other.html#concept-element-disabled 'HTML definition of Actually Disabled'
[assistive technology]: https://www.w3.org/TR/WCAG21/#dfn-assistive-technologies 'WCAG definition of Assistive Technologies'
[attribute value]: #attribute-value 'Definition of Attribute Value'
[disabled pseudo-class]: https://drafts.csswg.org/selectors/#disabled-pseudo "CSS Selectors Level 4 (Editor's Draft), definition of the :disabled pseudo-class"
[inoperable]: https://www.w3.org/TR/wai-aria/#dfn-operable
[shadow-including ancestor]: https://dom.spec.whatwg.org/#concept-shadow-including-ancestor
