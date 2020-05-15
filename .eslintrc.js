module.exports = {
    extends: ['plugin:vue/essential', 'eslint:recommended'],
    // extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
    // plugins: ['prettier'],
    root: true,

    env: {
        node: true
    },

    parserOptions: {
        ecmaVersion: 2018,
        parser: 'babel-eslint'
    },

    rules: {
        'no-unused-vars': 1,
        'no-console': 'off',
        // 'prettier/prettier': 'error',
        'func-names': 'off',
        'object-shorthand': 'off',
        'vue/html-quotes': 'warn',
        // 'vue/html-indent': ['error', 4, {baseIndent: 1}],
        'vue/script-indent': [
            'error',
            4,
            {
                baseIndent: 1,
                switchCase: 0,
                ignores: []
            }
        ],
        'vue/valid-v-on': 0
    }
}
