module.exports = {
    root: true,
    parserOptions: {
        parser: '@babel/eslint-parser',
        sourceType: 'module',
    },
    extends: [
        'airbnb-base',
    ],
    rules: {
        // 4 space indent
        indent: ['error', 4],
        // Don't enforce newlines on function parens
        'function-paren-newline': 'off',
        // Max length of 100 characters in source code
        'max-len': ['error', { code: 100, ignoreUrls: true }],
        // allow wearn ande rror consoles
        'no-console': ['error', { allow: ['warn', 'error'] }],
        // Allow dangling underscores
        'no-underscore-dangle': ['off'],
        // Allow ++ and --
        'no-plusplus': 'off',
        // Don't enforce one-var for now
        'one-var': 'off',
        // Put operators at the end of the lint (?, :, &&, ||)
        'operator-linebreak': ['error', 'after'],
        // Don't enforce a blank line or not at the beginning of a block
        'padded-blocks': 'off',
        // Don't enforce promises being rejected with Error objects
        'prefer-promise-reject-errors': 'off',
    },
};
