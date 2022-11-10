/**
  npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser \
    eslint eslint-config-prettier eslint-config-typescript eslint-plugin-import \
    prettier typescript eslint-plugin-testing-library
 */

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:solid/recommended",
    "prettier",
  ],
  plugins: ["import"],
  settings: {
    react: {
      version: "18.1.0",
    },
  },
  rules: {
    "no-console": "error",
    "max-classes-per-file": "error",
    "use-isnan": "error",
    "no-new-wrappers": "error",
    "no-continue": "error",
    "no-cond-assign": ["error", "always"],
    radix: ["error", "always"],
    curly: "error",
    eqeqeq: ["error", "always"],
    "no-restricted-globals": [
      "error",
      { name: "isNaN", message: "Use `Number.isNaN` instead." },
      { name: "isFinite", message: "Use `Number.isFinite` instead." },
      {
        name: "fdescribe",
        message: "Do not commit `fdescribe`. Use `describe` instead.",
      },
      { name: "fit", message: "Do not commit `fit`. Use `it` instead." },
    ],
    "no-restricted-properties": [
      "error",
      {
        object: "arguments",
        property: "callee",
        message: "arguments.callee is deprecated",
      },
      {
        property: "__defineGetter__",
        message: "Please use Object.defineProperty instead.",
      },
      {
        property: "__defineSetter__",
        message: "Please use Object.defineProperty instead.",
      },
      {
        object: "describe",
        property: "only",
        message: "Do not commit `describe.only`. Use `describe` instead.",
      },
      {
        object: "it",
        property: "only",
        message: "Do not commit `it.only`. Use `it` instead.",
      },
      {
        object: "test",
        property: "only",
        message: "Do not commit `test.only`. Use `test` instead.",
      },
    ],
    "import/no-unresolved": "error",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
    "import/newline-after-import": "error",
    "sort-imports": [
      "error",
      {
        ignoreDeclarationSort: true,
        ignoreCase: false,
        ignoreMemberSort: false,
      },
    ], // Everything else done by `import` plugin
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:import/typescript",
        "plugin:solid/typescript",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: [
          "./tsconfig.json",
          "./tsconfig.node.json",
          "./tsconfig.eslint.json",
        ],
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: "module",
      },
      settings: {
        "import/resolver": {
          typescript: {
            alwaysTryTypes: true,
            project: [
              "./tsconfig.eslint.json",
              "./packages/*/tsconfig.json",
              "./packages/*/tsconfig.node.json",
              "./packages/*/tsconfig.eslint.json",
            ],
          },
        },
      },
      rules: {
        "@typescript-eslint/array-type": [
          "error",
          {
            default: "array",
            readonly: "array",
          },
        ],
        "@typescript-eslint/no-unsafe-member-access": "error",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-misused-new": "error",
        "@typescript-eslint/member-ordering": [
          "error",
          {
            default: [
              // Index signature
              "signature",
              // Fields
              "public-static-field",
              "protected-static-field",
              "private-static-field",
              "public-decorated-field",
              "protected-decorated-field",
              "private-decorated-field",
              "public-instance-field",
              "protected-instance-field",
              "private-instance-field",
              "public-abstract-field",
              "protected-abstract-field",
              "private-abstract-field",
              // Constructors
              "public-constructor",
              "protected-constructor",
              "private-constructor",
              // Methods
              "public-static-method",
              "protected-static-method",
              "private-static-method",
              "public-decorated-method",
              "protected-decorated-method",
              "private-decorated-method",
              "public-instance-method",
              "protected-instance-method",
              "private-instance-method",
              "public-abstract-method",
              "protected-abstract-method",
              "private-abstract-method",
            ],
          },
        ],
        // We must disable the base rule as it can report incorrect errors
        "lines-between-class-members": "off",
        "@typescript-eslint/lines-between-class-members": [
          "error",
          "always",
          {
            exceptAfterOverload: true,
            exceptAfterSingleLine: true,
          },
        ],
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/consistent-type-definitions": [
          "error",
          "interface",
        ],
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/member-delimiter-style": [
          "error",
          {
            multiline: { delimiter: "semi", requireLast: true },
            singleline: { delimiter: "semi", requireLast: false },
          },
        ],
        "@typescript-eslint/no-empty-interface": [
          "error",
          {
            allowSingleExtends: true,
          },
        ],
        "@typescript-eslint/naming-convention": [
          "error",
          {
            selector: "default",
            format: ["camelCase"],
            leadingUnderscore: "allow",
            trailingUnderscore: "allow",
          },
          {
            selector: "variable",
            format: ["camelCase", "UPPER_CASE", "PascalCase"],
            leadingUnderscore: "allow",
            trailingUnderscore: "allow",
          },
          {
            selector: "function",
            format: ["camelCase", "PascalCase"],
            leadingUnderscore: "allow",
            trailingUnderscore: "allow",
          },
          {
            selector: "typeLike",
            format: ["PascalCase"],
          },
          {
            selector: "enumMember",
            format: ["PascalCase"],
          },
          {
            selector: "property",
            modifiers: ["static"],
            format: ["UPPER_CASE"],
            leadingUnderscore: "allow",
            trailingUnderscore: "allow",
          },
          {
            selector: "property",
            modifiers: ["static"],
            types: ["function"],
            format: ["camelCase"],
            leadingUnderscore: "allow",
            trailingUnderscore: "allow",
          },
        ],
      },
    },
    {
      files: ["**/*.spec.ts", "**/*.spec.tsx", "**/*.test.ts", "**/*.test.tsx"],
      extends: ["plugin:testing-library/react"],
    },
  ],
};
