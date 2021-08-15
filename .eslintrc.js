module.exports = {
    root: true,
    env: {
        es6: true, //ECMAScript 2015 (ES6) で書かれたコードを静的検証する
        browser: true, // ブラウザで実行されるコードを静的検証する
        node: true, // Node.js で実行されるコードを静的検証する
    },
    parser: '@typescript-eslint/parser', // ESLintにTypeScriptを理解させる
    parserOptions: {
        ecmaVersion: 2020, // es6設定有効するためにこちらでも設定 https://qiita.com/mysticatea/items/f523dab04a25f617c87d
        ecmaFeatures: {
            jsx: true,
        },
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint', // ESLintのTypeScriptプラグインのルールを適用できる様にする（/eslint-pluginは省略可）
        'import',
        'jest',
        'prettier',
        'react'
    ],
    extends: [
        'eslint:recommended', // 推奨ルールセット適用
        'plugin:@typescript-eslint/recommended', // 型チェックが不要なルールを適用
        'plugin:import/errors',
        'plugin:import/typescript',
        'plugin:react/recommended',
        'plugin:prettier/recommended', // Prettierのお勧めルールセットを適用(https://dev.classmethod.jp/articles/eslint-and-prettier/)
        'prettier',
    ],
    settings: {
        react: {
            version: 'detect',
        },
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    },
    rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'no-unused-vars': 'off',
        'sort-imports': 'off',
        'import/order': [
            'error',
            {
                alphabetize: {
                    order: 'asc',
                },
            },
        ],
    },
    overrides: [
        {
            files: ['**/*.tsx'],
            rules: {
                'react/prop-types': 'off'
            },
        },
        {
            files: ['**/__test__/*'],
            env: {
                'jest/globals': true,
            },
            extends: ['plugin:jest/recommended', 'plugin:jest/style'],
        },
    ],
}
