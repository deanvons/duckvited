import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,cjs}"], plugins: { js }, extends: ["js/recommended"], "rules": {
    "quotes": ["error", "single"],
    "no-console": "warn",
    "curly": ["error", "all"]
  },languageOptions: { globals: globals.browser } },
]);


