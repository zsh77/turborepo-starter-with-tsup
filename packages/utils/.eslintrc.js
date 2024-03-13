/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@repo/eslint-config/index.js"],
  parserOptions: {
    project: true,
  },
  env: {
    jest: true,
  },
};
