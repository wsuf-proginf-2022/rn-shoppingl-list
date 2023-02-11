module.exports = {
  env: {
    es2021: true,
    node: true,
    "react-native/react-native": true,
  },
  extends: ["universe", "plugin:react/recommended", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "react-native"],
  rules: {
    // allow .js files to contain JSX code
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],

    // prevent eslint to complain about the "styles" variable being used before it was defined
    "no-use-before-define": ["error", { variables: false }],

    // ignore errors for the react-navigation package
    "react/prop-types": 0,
    "react/react-in-jsx-scope": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  ignorePatterns: ["babel.config.js", "node_modules/", ".git/"],
};
