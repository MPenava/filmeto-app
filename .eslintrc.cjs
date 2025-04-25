module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: ["eslint-plugin-import-helpers", "@typescript-eslint", "react"],
  rules: {
    curly: ["error", "all"],
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-no-useless-fragment": [2, { allowExpressions: true }],
    "import/prefer-default-export": "off",
    "react/require-default-props": "off",
    "import/no-extraneous-dependencies": "off",
    "no-restricted-exports": "off",
    "max-classes-per-file": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
      },
    ],
    "import-helpers/order-imports": [
      "error",
      {
        alphabetize: {
          ignoreCase: true,
          order: "asc",
        },
        groups: [
          "/^react/",
          "/^@assets/",
          "/^@app/",
          "/^@api/",
          "/^@features/",
          "/^@tanstack/",
          "/^@shared/",
          "/^xml2js/",
          "/^lodash-es/",
          "/^@expo/",
          "/^expo/",
          "/^axios/",
          "/^i18next/",
          [("parent", "sibling", "index")],
        ],
        newlinesBetween: "always",
      },
    ],
  },
};
