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
        project: './tsconfig.json', // プロジェクト内の型認識に使用
    },
    plugins: [
        '@typescript-eslint', // ESLintのTypeScriptプラグインのルールを適用できる様にする（/eslint-pluginは省略可）
        'import', // インポート/エクスポート構文のリンティングをサポートし、ファイルパスやインポート名のスペルミスによる問題を防ぐ
        'jest',
        'prettier',
        'react'
    ],
    extends: [
        'eslint:recommended', // 推奨ルールセット適用 https://github.com/typescript-eslint/typescript-eslint
        'plugin:@typescript-eslint/eslint-recommended', // eslint:recommendedに含まれるルールを型チェックでカバーできるものは無効化
        'plugin:@typescript-eslint/recommended', // 型チェックが不要なルールを適用
        'plugin:import/errors', //インポート/エクスポート構文のリンティングをサポートし、ファイルパスやインポート名のスペルミスによる問題を防ぐ https://www.npmjs.com/package/eslint-plugin-import
        'plugin:import/typescript', //インポート/エクスポート構文のリンティングをサポートし、ファイルパスやインポート名のスペルミスによる問題を防ぐ https://www.npmjs.com/package/eslint-plugin-import
        'plugin:jest/recommended', // Jest設定 https://github.com/jest-community/eslint-plugin-jest
        'plugin:prettier/recommended', // Prettierのお勧めルールセットを適用(https://dev.classmethod.jp/articles/eslint-and-prettier/)
        'plugin:react/recommended', // React設定 https://github.com/yannickcr/eslint-plugin-react
        'prettier', // prettier設定はextendsの最後に記載して、Prettierと競合するルールがあってもPrettierの挙動と整合性があるようにする https://github.com/prettier/eslint-config-prettier
    ],
    settings: {
        react: {
            version: 'detect',
        },
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    },
    rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off', // エクスポートする関数の返り値の型の明記が必須となっているため、offにするルール
        '@typescript-eslint/no-empty-function': 'off', // 空の関数を許可しないルール
        '@typescript-eslint/no-empty-interface': 'off', // 空のインターフェイスを許可しないルール
        '@typescript-eslint/no-unused-vars': 'error', // 宣言されているが使用されていない変数を許可しないルールに対して、TypeScriptで意図せずエラーとなる箇所をサポートする拡張ルール
        'no-unused-vars': 'off', // 宣言されているが使用されていない変数を許可しないルールに対して、TypeScriptで意図せずエラーとなる箇所をサポートする拡張ルール https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
        'sort-imports': 'off', // import時のモジュール名ソートのルール https://eslint.org/docs/rules/sort-imports
        'import/order': [ // import時のモジュール名自動ソートルール
            'error',
            {
                alphabetize: {
                    order: 'asc',
                },
            },
        ],
    },
    overrides: [ // 設定に一致するファイルを自動でlint対象にさせる
        {
            files: ['**/*.tsx'],
            rules: {
                'react/prop-types': 'off' // JavaScriptファイルではeslintのreact/prop-typesを除外して、TypeScriptでは対象にする
            },
        },
        {
            files: ['**/__test__/*'],
            env: {
                'jest/globals': true, // __test__ディレクトリ化をJest対象にする
            },
            extends: ['plugin:jest/recommended', 'plugin:jest/style'],
        },
    ],
}
