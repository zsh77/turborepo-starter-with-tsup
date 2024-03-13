const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-turbo",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project,
  },
  globals: {
    JSX: true,
  },
  plugins: ["only-warn"],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/", ".eslintrc.*", "**/*.css"],
  rules: {
    "import/no-default-export": "off",
  },
  overrides: [
    {
      files: ["./postcss.config.js", "./postcss.config.cjs"],
      env: {
        node: true,
      },
    },
  ],
};
