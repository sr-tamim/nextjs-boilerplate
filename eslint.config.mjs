import { defineConfig } from "eslint/config";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    extends: [
        ...nextCoreWebVitals,
        ...nextTypescript,
        ...compat.extends("plugin:prettier/recommended")
    ],

    rules: {
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "no-undef": "off",
        "no-console": "warn",
        "no-unused-vars": "warn",

        "prettier/prettier": ["error", {
            endOfLine: "auto",
        }],
    },
}]);