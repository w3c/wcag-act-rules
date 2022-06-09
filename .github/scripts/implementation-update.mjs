#!/usr/bin/env zx
import { readFileSync, existsSync, writeFileSync } from 'fs';
import * as YAML from 'yaml';
import fetch from 'node-fetch';
import { getActImplementationReport } from 'act-tools'
import moment from 'moment';

const dataDir = `./_data/wcag-act-rules`
const assetsDir = `./content-assets/wcag-act-rules`
const implementationYml = readFileSync(`${dataDir}/act-implementations.yml`, 'utf8');
const implementations = YAML.parse(implementationYml);

const testCaseJsonText = readFileSync(`${assetsDir}/testcases.json`, 'utf8');
const { testcases } = JSON.parse(testCaseJsonText);

for (const implementation of implementations) {
  await updateImplementation(implementation);
}

async function updateImplementation(implementation) {
  const { jsonReport: jsonReportUrl, uniqueKey, name, vendor, version } = implementation;
  const earlReportPath = `${assetsDir}/earl/${uniqueKey}.json`;
  const actReportPath = `${dataDir}/implementations/${uniqueKey}.json`;
  const response = await fetch(jsonReportUrl);
  if (!response.ok) {
    console.log(`Failed to load ${uniqueKey} report from ${jsonReportUrl}`);
    return;
  }

  let reportText, earlReport;
  try {
    reportText = await response.text();
    earlReport = JSON.parse(reportText);
  } catch {
    console.log(`Unable to load ${uniqueKey} EARL report as JSON`);
    return;
  }

  let lastModified = moment().format("D MMMM YYYY");
  if (
    !existsSync(earlReportPath) ||
    readFileSync(earlReportPath, 'utf8') !== reportText
  ) {
    writeFileSync(earlReportPath, reportText, 'utf8');
  
  } else if (existsSync(actReportPath)) {
    // If the report hasn't changed, grab the lastModified date from the current report
    const actReport = JSON.parse(readFileSync(actReportPath), 'utf8');
    if (typeof actReport.lastModified === 'string') {
      lastModified = actReport.lastModified;
    }
  }

  console.log(`Updating ${uniqueKey} implementation report`);
  const metaData = { vendor, name, version, lastModified };
  const actReport = await getActImplementationReport(earlReport, testcases, metaData);
  
  const actReportText = JSON.stringify(actReport, null, 2);
  writeFileSync(actReportPath, actReportText, 'utf8');
}
