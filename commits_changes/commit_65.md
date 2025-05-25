## 📅 Updated to Commit #65 | Date: 24/05/2025

## 🛠️ In Progress

- Working on the base search functionality, currently focusing on the home page.

## 🎯 Todo

> See the [Todo List](./todo-list.md) for the full list of tasks.

## ✅ Completed

> - Added custom ESLint rule to warn on incomplete TODO comments ([eslint-rules/no-incomplete-todo-comments.cjs](eslint-rules/no-incomplete-todo-comments.cjs)).
> - Integrated the rule via plugin ([eslint-rules/eslint-plugin-custom-eslint-rules.cjs](eslint-rules/eslint-plugin-custom-eslint-rules.cjs)).
> - Updated [`.eslintrc.cjs`](.eslintrc.cjs) to enable the rule.

## 🔄 Changes

### → <u>Added</u>

- [`eslint-rules/no-incomplete-todo-comments.cjs`](eslint-rules/no-incomplete-todo-comments.cjs): Custom ESLint rule to warn on incomplete TODO comments.
- [`eslint-rules/eslint-plugin-custom-eslint-rules.cjs`](eslint-rules/eslint-plugin-custom-eslint-rules.cjs): Plugin exposing the custom rule.
- [`eslint-rules/custom-eslint-rules-plugin.cjs`](eslint-rules/custom-eslint-rules-plugin.cjs): (Empty, reserved for future custom rules.)

### → <u>Changed</u>

- Updated [`.eslintrc.cjs`](.eslintrc.cjs) to integrate and enable the custom ESLint rule for TODO comments.

### → <u>Removed</u>

> `Nothing has been removed.`
