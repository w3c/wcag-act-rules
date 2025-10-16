---
layout: standalone_resource
title: "All ACT Rules"
permalink: /standards-guidelines/act/rules/
ref: /standards-guidelines/act/rules/
lang: en
type_of_guidance: ""
footer: ""
github:
  repository: w3c/wcag-act-rules
  path: content/index.md
footer:
  <p>ACT Rules are developed by the <a href="https://www.w3.org/community/act-r/">ACT Rules Community Group</a> and the <a href="https://www.w3.org/groups/tf/wcag-act">Accessibility Conformance Testing (ACT) Task Force</a> of the Accessibility Guidelines Working Group (<a href="https://www.w3.org/groups/wg/ag">AG WG</a>). ACT Rules work was part of the <a href="https://www.w3.org/WAI/about/projects/wai-tools/">WAI-Tools Project</a>, <a href="https://www.w3.org/WAI/about/projects/wai-guide/">WAI-Guide Project</a>, and <a href="https://www.w3.org/WAI/about/projects/wai-coop/">WAI-CooP Project</a>, co-funded by the European Commission.</p>
---

{::nomarkdown}
{% include box.html type="start" title="Summary" class="" %}
{:/}

This page contains Accessibility Conformance Testing (ACT) Rules to test conformance with [Web Content Accessibility Guidelines (WCAG) 2.2 {% include_cached icon.html name="different-view" %}](https://www.w3.org/WAI/standards-guidelines/wcag/), [Accessible Rich Internet Applications (ARIA) {% include_cached icon.html name="different-view" %}](https://www.w3.org/WAI/ARIA/) and other accessibility practices. ACT Rules are formally approved by the relevant Working Group. Proposed rules have been consensed by the ACT Task Force participants but have not yet been approved by the relevant Working Groups. ACT Rules are informative — that means they are not required for determining conformance to WCAG or ARIA. Learn more from [About ACT Rules](/standards-guidelines/act/rules/about/).

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{% comment %}Build lists of rule IDs by test type{% endcomment %}
{% assign automated_rule_ids = "" | split: "," %}
{% assign manual_rule_ids = "" | split: "," %}
{% assign semiauto_rule_ids = "" | split: "," %}
{% assign linter_rule_ids = "" | split: "," %}
{% assign all_implemented_ids = "" | split: "," %}

{% comment %}Look through implementations for tools and their types{% endcomment %}
{% for implementation in site.data.wcag-act-rules.act-implementations %}
  {% assign impl_key = implementation.uniqueKey %}
  {% assign impl_mapping_file = site.data.wcag-act-rules.implementations[impl_key] %}
  
  {% if impl_mapping_file.actRuleMapping %}
    {% for rule_mapping in impl_mapping_file.actRuleMapping %}
      {% if rule_mapping.ruleId and rule_mapping.consistency == "complete" %}
        {% assign current_rule_id = rule_mapping.ruleId %}
        {% assign all_implemented_ids = all_implemented_ids | push: current_rule_id %}
        
        {% if implementation.type == "Automated tool" %}
          {% assign automated_rule_ids = automated_rule_ids | push: current_rule_id %}
        {% endif %}
        {% if implementation.type == "Test methodology" %}
          {% assign manual_rule_ids = manual_rule_ids | push: current_rule_id %}
        {% endif %}
        {% if implementation.type == "Semi-automated tool" %}
          {% assign semiauto_rule_ids = semiauto_rule_ids | push: current_rule_id %}
        {% endif %}
        {% if implementation.type == "Linter" %}
          {% assign linter_rule_ids = linter_rule_ids | push: current_rule_id %}
        {% endif %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% comment %}Remove duplicates from the rule IDs{% endcomment %}
{% assign automated_rule_ids = automated_rule_ids | uniq %}
{% assign manual_rule_ids = manual_rule_ids | uniq %}
{% assign semiauto_rule_ids = semiauto_rule_ids | uniq %}
{% assign linter_rule_ids = linter_rule_ids | uniq %}
{% assign all_implemented_ids = all_implemented_ids | uniq %}


<p class="sneaky-skiplink"><a href="#guidelines-start">Skip to guidelines</a></p>

{% include filter-controls.html %}

<div id="guidelines-start" tabindex="-1"></div>
{% for principle in site.data.wcag-complete.principles %}
{% for guideline in principle.guidelines %}
<section class="guideline-section">
<h2>Guideline {{ guideline.num }} - {{ guideline.handle }}</h2>

{% for sc in guideline.successcriteria %}
{% if sc.versions contains "2.2" %}
<div class="sc-item level-{{sc.level | downcase}}{% if forloop.first %} first{% endif %}">
<div class="sc-text">
  {% assign understanding_url = "https://www.w3.org/WAI/WCAG22/Understanding/" | append: sc.id | append: ".html" %}
  <h3 class="sc-handle"><a href="{{ understanding_url }}">{{ sc.num }} {{ sc.handle }}:</a></h3>
  <p class="sc-title">
    {{ sc.title }}
    {% if sc.details.size > 0 %}[...]{% endif %} 
    (Level {{ sc.level }})
  </p>
</div>

{% comment %}Find related ACT rules for this criterion{% endcomment %}
{% assign related_rules = "" | split: "," %}
{% assign current_sc_num = sc.num %}
{% assign current_sc_key = "wcag20:" | append: current_sc_num %}
{% assign current_sc_key21 = "wcag21:" | append: current_sc_num %}
{% assign current_sc_id = current_sc_num | downcase | replace: ".", "-" %}

{% comment %}First, try to find the requirement entry for this criterion{% endcomment %}
{% for req in site.data.wcag-act-rules.requirements %}
  {% assign req_key = req[0] %}
  {% assign req_data = req[1] %}
  {% if req_data.num == sc.num %}
    {% comment %}Find all rules that reference this SC by any of its altIds{% endcomment %}
    {% assign sc_slug = req_key | remove: "WCAG2:" | slugify %}
    {% for rule in site.data.wcag-act-rules.rules["act-rules"] %}
      {% assign matches = false %}
      
      {% comment %}Check for match by the main slug (e.g., "info-and-relationships"){% endcomment %}
      {% if rule.successCriteria contains sc_slug %}
        {% assign matches = true %}
      {% endif %}
      
      {% comment %}Also check for matches by alternative IDs{% endcomment %}
      {% if req_data.scAltId %}
        {% for alt_id in req_data.scAltId %}
          {% if rule.successCriteria contains alt_id %}
            {% assign matches = true %}
            {% break %}
          {% endif %}
        {% endfor %}
      {% endif %}
      
      {% comment %}Add matched rule{% endcomment %}
      {% if matches %}
        {% assign related_rules = related_rules | push: rule %}
      {% endif %}
    {% endfor %}
    
    {% break %}
  {% endif %}
{% endfor %}

{% if related_rules.size > 0 %}
<p>Related ACT Rules:</p>
{% comment %} Add placeholder for filtered message {% endcomment %}
<p class="filtered-rules-message" hidden><em>All related ACT Rules are currently hidden by filters.</em></p>
<ul class="act-rule-list">
  {% for rule in related_rules %}
  {% assign rule_id = rule.frontmatter.id %}
  
  {% comment %}Determine rule types{% endcomment %}
  {% assign test_types = "" | split: "," %}
  {% if automated_rule_ids contains rule_id %}{% assign test_types = test_types | push: "automated" %}{% endif %}
  {% if manual_rule_ids contains rule_id %}{% assign test_types = test_types | push: "manual" %}{% endif %}
  {% if semiauto_rule_ids contains rule_id %}{% assign test_types = test_types | push: "semiauto" %}{% endif %}
  {% if linter_rule_ids contains rule_id %}{% assign test_types = test_types | push: "linter" %}{% endif %}
  {% unless all_implemented_ids contains rule_id %}{% assign test_types = test_types | push: "unimplemented" %}{% endunless %}
  {% assign test_types_str = test_types | join: " " %}

  {% comment %}Determine if rule is a composite rule{% endcomment %}
  {% assign is_composite = false %}
  {% if rule.frontmatter.rule_type == "composite" %}
    {% assign is_composite = true %}
  {% endif %}
  
  {% comment %}Determine if this rule has been automated{% endcomment %}
  {% assign is_automated = false %}
  {% if automated_rule_ids contains rule_id %}
    {% assign is_automated = true %}
  {% endif %}
  
  <li data-status="{% if rule.deprecated == true %}deprecated{% elsif rule.proposed == true %}proposed{% else %}approved{% endif %}" data-test-types="{{ test_types_str }}">
    <a href="/standards-guidelines/act/rules/{{ rule_id }}/proposed/">
      {{ rule.title }}
      {% if rule.deprecated == true %}
        <span class="act-pill deprecated">deprecated</span>
      {% elsif rule.proposed == true %} 
        <span class="act-pill proposed">proposed</span>
      {% endif %}
    </a>

    {% comment %} Display atomic rules if this is a composite rule {% endcomment %}
    {% if is_composite %}
      {% assign atomic_rule_ids = rule.frontmatter.input_rules %}
      {% if atomic_rule_ids and atomic_rule_ids.size > 0 %}
        <ul class="atomic-rules-list act-rule-list">
          {% for atomic_id in atomic_rule_ids %}
            {% assign atomic_rule = site.data.wcag-act-rules.rules["act-rules"] | where: "frontmatter.id", atomic_id | first %}
            {% if atomic_rule %}
              {% assign atomic_id = atomic_rule.frontmatter.id %}
              {% comment %}Determine atomic rule types{% endcomment %}
              {% assign atomic_test_types = "" | split: "," %}
              {% if automated_rule_ids contains atomic_id %}{% assign atomic_test_types = atomic_test_types | push: "automated" %}{% endif %}
              {% if manual_rule_ids contains atomic_id %}{% assign atomic_test_types = atomic_test_types | push: "manual" %}{% endif %}
              {% if semiauto_rule_ids contains atomic_id %}{% assign atomic_test_types = atomic_test_types | push: "semiauto" %}{% endif %}
              {% if linter_rule_ids contains atomic_id %}{% assign atomic_test_types = atomic_test_types | push: "linter" %}{% endif %}
              {% unless all_implemented_ids contains atomic_id %}{% assign atomic_test_types = atomic_test_types | push: "unimplemented" %}{% endunless %}
              {% assign atomic_test_types_str = atomic_test_types | join: " " %}

              <li data-status="{% if atomic_rule.deprecated == true %}deprecated{% elsif atomic_rule.proposed == true %}proposed{% else %}approved{% endif %}" data-test-types="{{ atomic_test_types_str }}">
                <a href="/standards-guidelines/act/rules/{{ atomic_id }}/proposed/">
                  {{ atomic_rule.title }}
                  {% if atomic_rule.deprecated == true %}
                    <span class="act-pill deprecated">deprecated</span>
                  {% elsif atomic_rule.proposed == true %}
                    <span class="act-pill proposed">proposed</span>
                  {% endif %}
                </a>
              </li>
            {% endif %}
          {% endfor %}
        </ul>
      {% endif %}
    {% endif %}
  </li>
  {% endfor %}
</ul>
{% else %}
<p><em>No ACT Rules available for this criterion yet.</em></p>
{% endif %}
</div>
{% endif %}
{% comment %}End Principles, guidelines, and criteria{% endcomment %}
    {% endfor %}
<p class="sneaky-skiplink"><a href="#top">Back to top</a></p>
</section>
  {% endfor %}
{% endfor %}


{%- comment -%}
  Collect all unique non-WCAG requirement titles and keys, and sort by title
{%- endcomment -%}
{% assign aria_req_objs = "" | split: "," %}
{% for rule in site.data.wcag-act-rules.rules["act-rules"] %}
  {% if rule.frontmatter.accessibility_requirements %}
    {% for req in rule.frontmatter.accessibility_requirements %}
      {% assign req_key = req[0] %}
      {% assign req_title = req[1].title | default: req_key %}
      {% assign req_key_prefix = req_key | slice: 0, 4 %}
      {% unless req_key_prefix == "wcag" %}
        {% assign obj = req_title | append: '|||' | append: req_key %}
        {% unless aria_req_objs contains obj %}
          {% assign aria_req_objs = aria_req_objs | push: obj %}
        {% endunless %}
      {% endunless %}
    {% endfor %}
  {% endif %}
{% endfor %}
{% assign aria_req_objs = aria_req_objs | sort %}

<h2 data-aria-section="true">ARIA Rules</h2>
<div class="aria-rules-list-container">
{% assign found_aria_rule = false %}
{% for aria_req_obj in aria_req_objs %}
  {% assign pair = aria_req_obj | split: '|||' %}
  {% assign req_title = pair[0] %}
  {% assign req_key = pair[1] %}
  {%- comment -%} Now, list all rules for this requirement key {%- endcomment -%}
  {% assign rules_for_req = "" | split: "," %}
  {% for rule in site.data.wcag-act-rules.rules["act-rules"] %}
    {% assign has_req = false %}
    {% if rule.frontmatter.accessibility_requirements %}
      {% for req in rule.frontmatter.accessibility_requirements %}
        {% if req[0] == req_key %}
          {% assign has_req = true %}
        {% endif %}
      {% endfor %}
    {% endif %}
    {% if has_req %}
      {% assign rules_for_req = rules_for_req | push: rule %}
    {% endif %}
  {% endfor %}
  {% assign comma_index = req_title | split: ',' %}
  {% if comma_index.size > 1 %}
    <h3 class="aria-req"><strong>{{ comma_index[0] }}</strong>{{ req_title | remove_first: comma_index[0] }}</h3>
  {% else %}
    <h3 class="aria-req"><strong>{{ req_title }}</strong></h3>
  {% endif %}
  {% if rules_for_req.size > 0 %}
    <ul class="act-rule-list">
      {% for rule in rules_for_req %}
        {% assign found_aria_rule = true %}
        {% assign rule_id = rule.frontmatter.id %}
        {% assign test_types = "" | split: "," %}
        {% if automated_rule_ids contains rule_id %}{% assign test_types = test_types | push: "automated" %}{% endif %}
        {% if manual_rule_ids contains rule_id %}{% assign test_types = test_types | push: "manual" %}{% endif %}
        {% if semiauto_rule_ids contains rule_id %}{% assign test_types = test_types | push: "semiauto" %}{% endif %}
        {% if linter_rule_ids contains rule_id %}{% assign test_types = test_types | push: "linter" %}{% endif %}
        {% unless all_implemented_ids contains rule_id %}{% assign test_types = test_types | push: "unimplemented" %}{% endunless %}
        {% assign test_types_str = test_types | join: " " %}
        <li data-status="{% if rule.deprecated == true %}deprecated{% elsif rule.proposed == true %}proposed{% else %}approved{% endif %}" data-test-types="{{ test_types_str }}">
          <a href="/standards-guidelines/act/rules/{{ rule_id }}/proposed/">
            {{ rule.title }}
            {% if rule.deprecated == true %}
              <span class="act-pill deprecated">deprecated</span>
            {% elsif rule.proposed == true %}
              <span class="act-pill proposed">proposed</span>
            {% endif %}
          </a>
        </li>
      {% endfor %}
    </ul>
    <p class="no-act-rules-message"{% if rules_for_req.size > 0 %} hidden{% endif %}><em>No ACT Rules available for this requirement yet.</em></p>
  {% else %}
    <p class="no-act-rules-message"><em>No ACT Rules available for this requirement yet.</em></p>
  {% endif %}
{% endfor %}
</div>
<p class="no-aria-rules-message" {% if found_aria_rule %}hidden{% endif %}>
  <em>No rules found with ARIA accessibility requirements.</em>
</p>
<p class="filtered-aria-rules-message" hidden>
  <em>All ARIA related rules are currently hidden by filters.</em>
</p>

## About Rule Status

The ACT Rules are **proposed** by the ACT Task Force and Community Group. Once a fule is fully implemented by at least one test tool or methodology, the rule is **approved** by a W3C working group. The Accessibility Guidelines Working Group approves rules for WCAG, the ARIA Working Group approves rules for ARIA. A rule can be **deprecated** if it is no longer necessary, or superseded by other rules.

## About implementations

Filter this page to show rules with specific types of implementations. ACT implementations demonstrate how tools or methodologies rely on ACT rules for testing accessibility. Implementation types can be manual, semi-automated, automated, or linter. For more details and a list of all implementations, see [implementations page](../implementations/).

<script src="/content-assets/wcag-act-rules/filter-scripts.js"></script>
