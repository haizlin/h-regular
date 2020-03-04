export default {}

// 纯数字
exports.number = /^-?\d*\.?\d+$/

// n位的数字
exports.nDigitNumber = /^\d{n}$/

// 至少n位数字
exports.birth = /^\d{n,}$/

// m-n位的数字
exports.digitsRange = /^\d{m,n}$/

// 整数
exports.integer = /^-?\d+$/

// 正整数
exports.positiveInteger = /^\d+$/

// 非正整数（负整数 + 0）
exports.nonPositiveInteger = /^-[1-9]\d*|0$/

// 负整数
exports.negtiveInteger = /^-\d+$/

// 正数
exports.positive = /^\d*\.?\d+$/

// 正数、负数、和小数
exports.positiveNegative = /^(\-|\+)?\d+(\.\d+)?$/

// 负数
exports.negative = /^-\d*\.?\d+$/

// 非负整数（正整数 + 0）
exports.nonNegtiveInteger = /^[1-9]\d*|0$/

// 非零的负整数
exports.nonZeroNegativeInteger = /^\-[1-9][0-9]*$/

// 非零的正整数
exports.nonZeroPositiveInteger =/^\+?[1-9][0-9]*$/

// 浮点数
exports.floatPoint = /^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$/

// 正浮点数
exports.positiveFloatingPoint = /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/

// 非正浮点数（负浮点数 + 0）
exports.nonPositiveFloatingPoint = /^(-([1-9]\d*\.\d*|0\.\d*[1-9]\d*))|0?\.0+|0$/

// 负浮点数
exports.negativeFloatingPointNumber = /^-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)$/

// 非负浮点数（正浮点数 + 0）
exports.nonNegativeFloatingPointNumber = /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0$/

// 非零开头的最多带两位小数的数字
exports.birth = /^([1-9][0-9]*)+(.[0-9]{1,2})?$/

// 有1-4位小数的正实数
exports.positiveRealNumber = /^[0-9]+(.[0-9]{1,4})?$/
