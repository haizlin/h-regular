
export default {}

// 全角:每个全角字符占用两字节空间
exports.fullAngle = /[^\uFF00-\uFFFF]/g
exports.fullAngle_1 = /[^\x00-\xff]/g

// 半角:每个半角字符占用一字节空间(一字节有8位)，共256个编码空间
exports.halfAngle = /[\x00-\xff]/g

// 空白行
exports.blank = /\n\s*\r/

// 首尾空白字符
exports.blankSpace = /^\s*|\s*$/

// 带有~的字符
exports.wave = /[^~\x22]+/i

// xml文件
exports.xml = /^([a-zA-Z]+-?)+[a-zA-Z0-9]+\\.[x|X][m|M][l|L]$/

// 由26个英文字母组成的字符串
exports.english = /^[A-Za-z]+$/

// 由数字和26个英文字母组成的字符串
exports.englishNumber = /^[A-Za-z0-9]+$/

// 由数字、26个英文字母或者下划线组成的字符串
exports.englishNumberSymbol = /^\w+$/

// URL
exports.url = /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i

// URI
exports.uri = /[a-zA-z]+:\/\/[^\s]*/

// 匹配双字节字符(包括汉字在内, 一个双字节字符长度计2，ASCII字符计1)
exports.doubleCharacter = /[^\x00-\xff]/

// ASCII
exports.ascii = /\x20-\x7f/

// GBK下的中文
exports.gbkChina = /\xa1-\xff/

// 中文
exports.china = /[\u4E00-\u9FA5]/

// Unicode编码中的汉字范围
exports.chinaChar = /^[\u2E80-\u9FFF]+$/

// 韩文
exports.korean = /^\x3130-\x318F$/

// 日文
exports.japanese = /^\u0800-\u4e00$/