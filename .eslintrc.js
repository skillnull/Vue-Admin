module.exports = {
    'root': true,
    'env': {
        'node': true,
        'es6': true
    },
    "extends": [
        "plugin:vue/essential",
        "eslint:recommended" // 启用推荐的规则
    ],
    'parserOptions': {
        'parser': 'babel-eslint',
        'ecmaVersion': 6,
        'sourceType': 'module'
    },
    'rules': {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'object-property-newline': 0, // 强制将对象的属性放在不同的行上
        'no-unused-vars': 0, // 禁止出现未使用过的变量
        'no-unused-expressions': 0, // 禁止出现未使用过的表达式
        'no-useless-escape': 0, // 禁用不必要的转义字符
        'no-useless-return': 0, // 禁止多余的 return 语句
        'handle-callback-err': 0, // 要求回调函数中有容错处理
        'space-unary-ops': 0, // 强制在一元操作符前后使用一致的空格
        'indent': [0, 4], // 强制使用一致的缩进
        'no-tabs': 0, // 禁用 tab
        'no-new': 0, // 禁止使用 new 以避免产生副作用
        'no-plusplus': 0, // 禁用一元操作符 ++ 和 --
        'spread': true, // 扩展运算符 ...
        'no-eq-null': 0, // 禁止在没有类型检查操作符的情况下与 null 进行比较
        'no-trailing-spaces': 0, // 禁用行尾空格
        'no-multiple-empty-lines': 0, // 禁止出现多行空行
        'eol-last': 0, // 要求或禁止文件末尾存在空行
        'no-unexpected-multiline': 0, // 禁止出现令人困惑的多行表达式
        'func-call-spacing': 0, // 要求或禁止在函数标识符和其调用之间有空格
        'no-unreachable': 0, // 禁止在return、throw、continue 和 break 语句之后出现不可达代码
        'no-undef': 0, // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
        'prefer-promise-reject-errors': 0, // 要求使用 Error 对象作为 Promise 拒绝的原因
        'padded-blocks': 0, // 要求或禁止块内填充
        'comma-dangle': 2, // 要求或禁止末尾逗号
        'operator-assignment': [0, 'always'] // 要求或禁止在可能的情况下使用简化的赋值操作符(赋值运算符 += -=)
    }
}