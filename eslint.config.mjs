
import js from "@eslint/js";
import globals from "globals";
import html from "eslint-plugin-html";

export default [
  {
    ignores: ["node_modules/**"]
  },
  {
    files: ["**/*.js", "**/*.html"],
    languageOptions: {
        globals: {
        ...globals.browser,
        readCookie: "readonly"
  }
},
    rules: js.configs.recommended.rules
  },
  {
    files: ["**/*.html"],
    plugins: { html }
  }
];
