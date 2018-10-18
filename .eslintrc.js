module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/essential'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'vue/no-parsing-error': [2, {'x-invalid-end-tag': false}],
        'object-property-newline': 0,
        'no-unused-vars': 0,
        'no-unused-expressions': 0,
        'no-useless-escape': 0,
        'no-useless-return': 0,
        'handle-callback-err': 0,
        'space-unary-ops': 0,
        'indent': [0, 4],
        'no-tabs': 0,
        'no-new': 0,
        'no-plusplus': 0, // 一元运算符 -- ++
        'spread': true, // 扩展运算符 ...
        'no-eq-null': 0, // 禁止对null使用==或!=运算符
        'no-trailing-spaces': 0,
        'no-multiple-empty-lines': 0,
        'eol-last': 0,
        'no-unexpected-multiline': 0,
        'func-call-spacing': 0,
        'no-unreachable': 0,
        'no-undef': 0,
        'prefer-promise-reject-errors': 0,
        'padded-blocks': 0,
        'operator-assignment': [0, 'always'] // 赋值运算符 += -=
    },
    parserOptions: {
        parser: 'babel-eslint'
    }
}
