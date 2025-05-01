---
layout: standalone_resource
title: "WCAG 2.2 Success Criteria"
permalink: /standards-guidelines/act/rules/wcag/
ref: /standards-guidelines/act/rules/wcag/
lang: en
github:
  repository: w3c/wcag-act-rules
  path: content/wcag.md
footer: |
  <p>WCAG 2.2 Success Criteria as defined by the Web Content Accessibility Guidelines (WCAG) 2.2, a W3C Recommendation.</p>
---

{% comment %}Build a list of automated rule IDs{% endcomment %}
{% assign automated_rule_ids = "" | split: "," %}

{% comment %}Look through implementations for automated tools{% endcomment %}
{% for implementation in site.data.wcag-act-rules.act-implementations %}
  {% if implementation.type contains "Automated" or implementation.type contains "Linter" %}
    {% assign impl_key = implementation.uniqueKey %}
    {% assign impl_mapping_file = site.data.wcag-act-rules.implementations[impl_key] %}
    
    {% if impl_mapping_file.actRuleMapping %}
      {% for rule_mapping in impl_mapping_file.actRuleMapping %}
        {% if rule_mapping.ruleId and rule_mapping.consistency == "complete" %}
          {% assign automated_rule_ids = automated_rule_ids | push: rule_mapping.ruleId %}
        {% endif %}
      {% endfor %}
    {% endif %}
  {% endif %}
{% endfor %}

{% comment %}Remove duplicates from the rule IDs{% endcomment %}
{% assign automated_rule_ids = automated_rule_ids | uniq %}

{::nomarkdown}
{% include box.html type="start" title="Summary" class="" %}
{:/}

This page contains all success criteria from the Web Content Accessibility Guidelines (WCAG) 2.2, organized by guidelines.

{::nomarkdown}
{% include box.html type="end" %}
{:/}

{% include filter-controls.html %}

{% for principle in site.data.wcag-complete.principles %}
{% for guideline in principle.guidelines %}
<h2>Guideline {{ guideline.num }} - {{ guideline.handle }}</h2>

{% for sc in guideline.successcriteria %}
{% if sc.versions contains "2.2" %}
<div class="sc-item level-{{sc.level | downcase}}{% if forloop.first %} first{% endif %}">
<p><strong>{{ sc.num }} {{ sc.handle }}</strong>: {{ sc.title }} (Level {{ sc.level }})</p>

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
      
      {% comment %}Add matched rule that isn't deprecated{% endcomment %}
      {% if matches and rule.deprecated != true %}
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
<ul>
  {% for rule in related_rules %}
  {% assign rule_id = rule.frontmatter.id %}
  
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
  
  <li>
    <a href="/standards-guidelines/act/rules/{{ rule_id }}/proposed/">{{ rule.title }}</a>
    {% if rule.proposed == true %} <span class="act-pill proposed">proposed</span>{% endif %}
    
    {% if is_automated %} <span class="act-pill automated">automated</span>{% endif %}

    {% comment %} Display atomic rules if this is a composite rule {% endcomment %}
    {% if is_composite %}
      {% assign atomic_rule_ids = rule.frontmatter.input_rules %}
      {% if atomic_rule_ids and atomic_rule_ids.size > 0 %}
        <ul class="atomic-rules-list">
          {% for atomic_id in atomic_rule_ids %}
            {% assign atomic_rule = site.data.wcag-act-rules.rules["act-rules"] | where: "frontmatter.id", atomic_id | first %}
            {% if atomic_rule %}
              <li>
                <a href="/standards-guidelines/act/rules/{{ atomic_id }}/proposed/">{{ atomic_rule.title }}</a>
                
                {% assign is_atomic_proposed = atomic_rule.proposed %}
                {% assign is_atomic_automated = false %}
                {% if automated_rule_ids contains atomic_id %}
                  {% assign is_atomic_automated = true %}
                {% endif %}
                
                {% if is_atomic_proposed == true %} <span class="act-pill proposed">proposed</span>{% endif %}
                {% if is_atomic_automated %} <span class="act-pill automated">automated</span>{% endif %}
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
{% endfor %}
{% endfor %}
{% endfor %}

<h2>WAI-ARIA Related Rules</h2>

{% assign found_aria_rule = false %}
<ul class="aria-rules-list-container">
  {% for rule in site.data.wcag-act-rules.rules["act-rules"] %}
    {% assign is_aria_related = false %}
    {% if rule.frontmatter.accessibility_requirements and rule.frontmatter.accessibility_requirements != empty %}
      {% for req in rule.frontmatter.accessibility_requirements %}
        {% assign req_key = req[0] %}
        {% assign prefix = req_key | slice: 0, 7 %}
        {% if prefix == "aria12:" %}
          {% assign is_aria_related = true %}
          {% break %}
        {% endif %}
      {% endfor %}
    {% endif %}

    {% if is_aria_related and rule.deprecated != true %}
      {% assign found_aria_rule = true %}
      {% assign rule_id = rule.frontmatter.id %}
      <li>
        <a href="/standards-guidelines/act/rules/{{ rule_id }}/proposed/">{{ rule.title }}</a>
        {% if rule.proposed == true %} <span class="act-pill proposed">proposed</span>{% endif %}
        {% if automated_rule_ids contains rule_id %} <span class="act-pill automated">automated</span>{% endif %}
      </li>
    {% endif %}
  {% endfor %}
</ul>

{% comment %} Message shown when no ARIA rules match the initial query {% endcomment %}
<p class="no-aria-rules-message" {% if found_aria_rule %}hidden{% endif %}>
  <em>No rules found with WAI-ARIA 1.2 accessibility requirements.</em>
</p>

{% comment %} Message shown when ARIA rules exist but are all filtered out {% endcomment %}
<p class="filtered-aria-rules-message" hidden>
  <em>All WAI-ARIA related rules are currently hidden by filters.</em>
</p>

<script src="/content-assets/wcag-act-rules/filter-scripts.js"></script>
