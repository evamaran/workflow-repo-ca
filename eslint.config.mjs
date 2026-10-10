import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import prettier from "eslint-config-prettier";

export default defineConfig([
	{
		files: ["**/*.{js,mjs,cjs}"],
		plugins: { js },
		extends: ["js/recommended"],
		languageOptions: { globals: globals.browser },
	},
	{
		files: ["tailwind.config.js", "playwright.config.js"],
		languageOptions: { globals: globals.node },
	},
	{
		files: ["**/*.{test,spec}.js"],
		languageOptions: {
			globals: {
				describe: "readonly",
				test: "readonly",
				it: "readonly",
				expect: "readonly",
			},
		},
	},
	prettier,
]);