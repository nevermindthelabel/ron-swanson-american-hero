module.exports = {
  "extends": [
    "airbnb-base",
    "prettier"
  ],
  "rules": {
    "no-console": 0,
    "no-use-before-define": 0,
    "no-plusplus": 0,
    "no-undef": 0,
    "eslint quotes": ["error", "single"]
  },
  "env": {
    "node": true,
    "browser": true
  },
  "plugins": [
    "prettier",
    "html"
  ],
  "settings": {
    "html/indent": "+2"
  }

}