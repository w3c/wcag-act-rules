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
<ul>
  {% for rule in related_rules %}
  {% assign rule_id = rule.frontmatter.id %}
  
  {% comment %}Determine if rule is a composite rule{% endcomment %}
  {% assign is_composite = false %}
  {% if rule.frontmatter.rule_type == "composite" %}
    {% assign is_composite = true %}
  {% endif %}
  
  {% comment %}Determine if this is a secondary criterion for the rule{% endcomment %}
  {% assign is_secondary = false %}
  {% if rule.frontmatter.accessibility_requirements[current_sc_key].secondary or rule.frontmatter.accessibility_requirements[current_sc_key21].secondary %}
    {% assign is_secondary = true %}
  {% endif %}
  
  <li>
    <a href="/standards-guidelines/act/rules/{{ rule_id }}/proposed/">{{ rule.title }}</a>
    {% if rule.proposed == true %} <span class="act-pill proposed">proposed</span>{% endif %}
    {% if is_secondary %} <span class="act-pill secondary">secondary</span>{% endif %}
    {% if is_composite %} <span class="act-pill composite">composite</span>{% endif %}
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

<script src="/content-assets/wcag-act-rules/filter-scripts.js"></script>
