module.exports = {
    root: true,
    parserOptions: {
        parser: '@babel/eslint-parser',
        sourceType: 'module',
    },
    env: {
        browser: true,
    },
    extends: [
        'plugin:vue/recommended',
    ],
    plugins: [
        'vue',
    ],
    rules: {
        // Use 4 space indents in templates
        'vue/html-indent': ['error', 4],
        // Allow max 2 attributes on a single line element, but once the
        // element is spread across multiple, require one attribute per line
        'vue/max-attributes-per-line': ['error', {
            singleline: 3,
            multiline: {
                max: 1,
                allowFirstLine: true,
            },
        }],
    },
};
