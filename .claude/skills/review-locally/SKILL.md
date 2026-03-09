---
name: review-locally
description: Reviews changes locally by running git diff against a base branch and analyzing the changes.
disable-model-invocation: true
---
# Review PR Locally

Use when the user types /review-locally or asks to review changes locally.

## Description

Reviews the current branch changes against a base branch by examining the git diff and providing analysis of the modifications.

## Steps

1. **Determine base branch**: Use the first text after the command as the base branch. If none provided, use `main`.
2. **Run diff**: Execute `git diff <base-branch> .` to get the changes in the current workspace.
3. **Analyze changes**: Review the diff and provide:
   - Summary of what changed (files, areas affected)
   - Assessment of correctness and potential issues
   - Suggestions or concerns, if any
   - Any patterns, consistency, or best-practice considerations
