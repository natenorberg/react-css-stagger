module.exports = {
  "rules": {
    "indent": [
      2,
      2
    ],
    "linebreak-style": [
      2,
      "unix"
    ],
    "semi": [
      2,
      "always"
    ],
    'comma-dangle': [
      0,
      'never'
    ],
    "react/jsx-uses-react": 1
  },
  "env": {
    "es6": true,
    "browser": true,
    "jasmine": true,
    "node": true,
  },
  "extends": "eslint:recommended",
  "ecmaFeatures": {
    "jsx": true,
    "experimentalObjectRestSpread": true,
    "modules": true
  },
  "plugins": [
    "react"
  ]
};

