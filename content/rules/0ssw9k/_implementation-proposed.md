## Implementations

This section is not part of the official rule. It is populated dynamically and 
not accounted for in the change history or the last modified date.

{%- assign siteData = site.data.wcag-act-rules %}
{%- assign implementations = siteData.act-implementations | sort: "name" %}
{%- assign ruleId = page.rule_meta.id %}

ID: {{ ruleId }}

<table>
  <thead>
    <tr>
     <th>Implementation</th>
     <th>Test Mode</th>
     <th>Consistency</th>
     <th>Report</th>
    </tr>
  </thead>
  <tbody>
    {%- for implementation in implementations %}
      {%- assign report = siteData.implementations[implementation.uniqueKey] %}
      {%- assign ruleMapping = report.actRuleMapping | where: "ruleId", ruleId | first %}
      <tr>
        <td>{{ implementation.name }}</td>
        <td>{{ implementation.type }}</td>
        <td>{{ ruleMapping.consistency }}</td>
        <td><a href="#">Report</a></td>
      </tr>
    {%- endfor %}
  </tbody>
</table>
