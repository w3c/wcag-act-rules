## Rule Versions

<p>{{ page.url }}</p>

<ol>
  <li><a {% unless page.github.path contains '/proposed.md' %}
    href="{{'/standards-guidelines/act/rules/de46e4/proposed/' | relative_url }}"
  {% endunless %}>Proposed version (22 June 2022)</a> (<a href="{{
      'https://services.w3.org/htmldiff?doc1='
        | append: 'https%3A%2F%2Fwww.w3.org%2FWAI%2Fstandards-guidelines%2Fact%2Frules%2Fde46e4%2F'
        | append: '&doc2='
        | append: 'https%3A%2F%2Fwww.w3.org%2FWAI%2Fstandards-guidelines%2Fact%2Frules%2Fde46e4%2Fproposed%2F'
    }}">Compare</a>)
  </li>
  <li><a {% unless page.github.path contains '/index.md' %}
        href="{{"/standards-guidelines/act/rules/de46e4/" | relative_url}}"
      {% endunless %}>Latest version (22 June 2022)</a> (<a href="{{
      'https://services.w3.org/htmldiff?doc1='
        | append: 'https%3A%2F%2Fwww.w3.org%2FWAI%2Fstandards-guidelines%2Fact%2Frules%2Fde46e4%2F2022-01-28%2F'
        | append: '&doc2='
        | append: 'https%3A%2F%2Fwww.w3.org%2FWAI%2Fstandards-guidelines%2Fact%2Frules%2Fde46e4%2F'
    }}">Compare</a>) This revision contains the following changes:
    <ul>
      <li>Account for whitespace in the applicability</li>
      <li>Add assumption about text containing human language</li>
      <li>Update definition of "focusable" to better handle the hidden attribute</li>
    </ul>
  </li>
  <li><a {% unless page.github.path contains '/2022-01-28.md' %}
      href="{{'/standards-guidelines/act/rules/de46e4/2022-01-28/' | relative_url}}"
    {% endunless %}>28 January 2022 version</a>
  </li>
</ol>
