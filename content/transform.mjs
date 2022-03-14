import * as fs from 'fs';
import { promisify } from 'util';

const readdir = promisify(fs.readdir);
const rename = promisify(fs.rename);
const mkdir = promisify(fs.mkdir);
const copyFile = promisify(fs.copyFile);

// const ruleIdRegex = /([0-9a-z]{6})\.md/
// const ruleDirs = (await readdir('./rules/'))
const rules = [
  '23a2a8',
  '24afc2',
  '2779a5',
  '46ca7f',
  '59796f',
  '5b7ae0',
  '73f2c2',
  '97a4e1',
  '9e45ec',
  'c487ae',
  'b5c3f8',
  'bf051a',
  'de46e4',
  'e086e5',
]

for (const ruleId of rules) {
  const filePath = `./rules/${ruleId}/index.md`
  // await rename(`rules/${ruleId}/index.md`, filePath);
  let ruleContent = fs.readFileSync(filePath, 'utf8')
  ruleContent = ruleContent.replace('_implementation-proposed.md', '_implementation-approved.md')
  // ruleContent = ruleContent.replace('proposed: false', 'proposed: true')
  // ruleContent = ruleContent.replace('/proposed/\nref: /standards-guidelines/', '/\nref: /standards-guidelines/')
  // ruleContent = ruleContent.replace('/proposed/\nlang: en', '/\nlang: en')
  fs.writeFileSync(filePath, ruleContent, 'utf8');
}
