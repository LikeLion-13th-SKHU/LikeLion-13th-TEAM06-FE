import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parser: tseslint.parser,
      parserOptions: {
        // project: true,
        tsconfigRootDir: process.cwd(),
        // ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      prettier: pluginPrettier,
      react: pluginReact,
    },
    rules: {
      'prettier/prettier': 'error',

      'no-unused-vars': 'warn',
      'no-console': 'warn',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs['flat'].recommended,
  pluginReact.configs['flat']['jsx-runtime'],
]);
