module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:vue/recommended', 'airbnb-base'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'import/no-unresolved': [2, { ignore: ['^@/'] }],
    'no-cond-assign': ['error', 'except-parens'],
    'linebreak-style': 'off',
    'vue/no-v-html': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
    'max-len': 'off',
    'operator-linebreak': 'off',
    'comma-dangle': 'off',
    'no-confusing-arrow': 'off',
    'implicit-arrow-linebreak': 'off',
    'consistent-return': 'off',
  },
  parser: 'vue-eslint-parser',
};
