/* eslint-env node */

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.js', '.vue'],
      },
    },
    // 告訴 ESLint 這些套件是安裝在 devDependencies
    'import/core-modules': [
      'vite',
      '@vitejs/plugin-vue',
      'unocss',
    ],
  },
  rules: {
    'vue/no-deprecated-v-on-native-modifier': 'off',
    radix: 'off',
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'vue/multi-word-component-names': 'off',
    'max-len': [0], // warn, maximum length of 80, tab width 4  max-len: [1, 80, 4]
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: '@/config',
            group: 'internal',
            position: 'before',
          },
        ],
      },
    ],
    // 新加入的規則
    camelcase: 0,
  },
};
