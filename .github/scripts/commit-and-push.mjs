#!/usr/bin/env zx
import 'zx/globals';

const diff = (await $`git diff --name-status`).stdout;
if (diff.trim().length === 0) {
  console.log('No changes detected, skipping git commit')
} else {
  await $`git add .`;
  await $`git commit -m "Implementation data update"`;
  await $`git push`;
}
