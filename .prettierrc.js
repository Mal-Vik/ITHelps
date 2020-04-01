module.exports = {
    useTabs: false,
    tabWidth: 4,
    printWidth: 135,
    singleQuote: true,
    trailingComma: 'es5',
    jsxBracketSameLine: false,
    semi: false,
    commaDangle: ['error', 'never'],
    // indent: ["error", 4],
    quotes: ['error', 'double'],
    overrides: [
        {
            files: ['*.html', '*.js'],
            options: {
                tabWidth: 4
            }
        },
        {
            files: ['*.vue'],
            rules: {
                indent: 'off'
            }
        }
    ],
    vueIndentScriptAndStyle: true,
    linebreakStyle: 0
};
