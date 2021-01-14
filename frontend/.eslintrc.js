module.exports = {
  extends: [
    'react-app',
    'preact',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/babel',
    'prettier/prettier',
    'prettier/react',
  ],
  plugins: ['jsx-a11y', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  overrides: [
    {
      files: ['*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      rules: {
        'no-undef': 'off',
        'no-redeclare': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'error',
      },
    },
    {
      files: ['*.d.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: ['*.@(test|spec).ts?(x)'],
      extends: ['react-app/jest'],
      rules: {
        'import/first': 'off',
        // TODO: remove before merge into master
        'jest/no-commented-out-tests': 'off',
      },
    },
  ],
};
