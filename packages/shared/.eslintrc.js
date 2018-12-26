module.exports = {
  extends: "airbnb",
  parser: "babel-eslint",
  env: { jest: true },
  globals: { fetch: false },
  rules: {
    "react/jsx-wrap-multilines": 0,
    "react/jsx-filename-extension": 0,
    "no-use-before-define": 0,
    "react/prop-types": 0,
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
  }
};
