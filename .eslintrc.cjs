// Import the ESLint plugin
"use strict";

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:tailwindcss/recommended",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "!src/**/*"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "custom-eslint-rules"],
  settings: {
    tailwindcss: {
      callees: ["twMerge", "createTheme"],
      classRegex: "^(class(Name)|theme)?$",
    },
  },
  rules: {
    // Warn on console.log usage
    "no-console": ["warn", { allow: ["warn", "error"] }],

    // Warn if file exceeds 200 lines, excluding blank lines and comments
    "max-lines": [
      "warn",
      { max: 200, skipBlankLines: true, skipComments: true },
    ],

    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "tailwindcss/no-custom-classname": "off",

    "custom-eslint-rules/no-incomplete-todo-comments": "warn",
  },
};
