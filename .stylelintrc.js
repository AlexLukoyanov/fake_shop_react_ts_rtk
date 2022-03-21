module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-rational-order",
    "stylelint-prettier/recommended",
  ],
  plugins: ["stylelint-order", "stylelint-scss"],
  rules: {
    "selector-class-pattern": "^([a-z][a-z0-9]*)(_[a-z0-9]+)*$",
  },
};
