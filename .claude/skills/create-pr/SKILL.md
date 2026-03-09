---
name: create-pr
description: Create a PR for the current branch
disable-model-invocation: true
---
# Create PR

## Description

This command creates a PR for the current branch.

## Steps

- If there are changes in the current branch, abort and ask the user to commit them.
- If there is already a PR opened for the current branch, abort.
- Use the first text after the command as an argument for the base branch. If no argument is provided, use `git symbolic-ref refs/remotes/origin/HEAD | sed "s@^refs/remotes/origin/@@"` to detect the default branch.
- Check if the current branch is up to date with the base branch.
- If not, pull the base branch and merge it into the current branch.
- If the merge has conflicts, abort.
- Generate a PR title and description for the current git diff against the base branch.
- The PR title must follow the conventional commit message format.
- If `.github/pull_request_template.md` exists, keep its structure and put a brief explanation about the changes inside the `## Why is this PR necessary, what does it do?` section. If the template does not exist, create a `## Summary` section instead.
- Save the PR title to `/tmp/pr-title-$(basename "$(git rev-parse --show-toplevel)").txt` and the description to `/tmp/pr-description-$(basename "$(git rev-parse --show-toplevel)").txt`.
- Execute `gh pr create --title $(cat /tmp/pr-title-$(basename "$(git rev-parse --show-toplevel)").txt) --body-file /tmp/pr-description-$(basename "$(git rev-parse --show-toplevel)").txt --base <BASE_BRANCH> --web` to create the PR.
- Do not call `gh pr view` after creating the PR because `gh pr create` already opens the PR in the browser.
