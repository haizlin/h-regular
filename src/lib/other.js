export default {}

// 5-11位的腾讯QQ号，腾讯QQ号从10000开始
exports.qq = /^[1-9][0-9]{4,11}$/

// 邮箱
exports.email = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

// 银行卡
exports.bankCard = /^([1-9]{1})(\d{15}|\d{18})$/

// IE版本
// exports.ieVervison = /^.*MSIE [5-8](?:\\.[0-9]+)?(?!.*Trident\\/[5-9]\\.0).*$/

// 微信号：6至20位，以字母开头，字母，数字，减号，下划线
exports.weChat = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/

// 文件的扩展名
exports.fileExt = /^.*?\.(html|css|jpg)$/

// 根据工信部2019年最新公布的手机号段
exports.birth = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/

// 中国移动
exports.phoneYidong = /^1(34[0-8]|3[5-9\d]|440|4[78]\d|5[0-27-9]\d|70[356]|78\d|8[2-478]\d|98\d)\d{7}$/

// 中国联通
exports.phoneLiantong = /^1(3[0-2]\d|4[56]\d|5[56]\d|66\d|70[4789]|71|7[56]\d|8[56]\d)\d{7}$/

// 中国电信
exports.phoneDianxin = /^1(3[3]\d|349|410|49\d|53\d|70[0-2]|7[37]\d|740|8[019]\d|99\d)\d{7}$/

// 16进制颜色
exports.hexColor = /#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})/

// 10进制值
exports.decimal = /^d+.d+$/

// JSON
exports.json = /^\w+\(({[^()]+})\)$/

// 中文名2到10位（字母，数字，下划线，减号）
exports.chinaName = /^[\u4E00-\u9FA5]{2,10}(·[\u4E00-\u9FA5]{2,10}){0,2}$/

// 中英验证码
exports.verificationCode = /^([a-zA-Z0-9]{4}|[a-zA-Z0-9]{6})$/

// html标签
exports.htmlTag = /<(.*)>.*<\/\1>|<(.*) \/>/

// html注释
exports.htmlNotes = /^!--[\s\S]*?-->$/

// html片段
// exports.htmlFragment = /^<([a-z]+)([^<]+)*(?:>(.*)<\\/\\\\\\1>|\\s+\\/>)$/

// CSS属性
exports.css = /^\\s*[a-zA-Z\\-]+\\s*[:]{1}\\s[a-zA-Z0-9\\s.#]+[;]{1}/

// 提取页面的url
// exports.htmlUrl = /(a\\s*(?!.*\\brel=)[^>]*)(href="https?:\\/\\/)((?!(?:(?:www\\.)?'.implode('|(?:www\\.)?', $follow_list).'))[^" rel="external nofollow" ]+)"((?!.*\\brel=)[^>]*)(?:[^>]*)>

// 普通电话、传真号码：可以"+"开头，除数字外，可含有"-"
exports.fax = /^[+]{0,1}(d){1,3}[ ]?([-]?((d)|[ ]){1,12})+$/

// 座机号，固定电话
exports.telephone = /\d{3}-\d{8}|\d{4}-\d{7}/

// 电话号码，正确格式：XXXX-XXXXXXX，XXXX-XXXXXXXX，XXX-XXXXXXX，XXX-XXXXXXXX，XXXXXXX，XXXXXXXX
exports.tel = /^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$/

// 用户名正则，4到16位（字母，数字，下划线，减号）
exports.userName = /^[a-zA-Z0-9_-]{4,16}$/

// 密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
exports.birth = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/

// 6-16位字符，区分大小写（不能是9位以下的纯数字，不含空格），必须包含大写字母
exports.birth = /^(?!\d{6,8}$)(?! )(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9_]{6,16}$/

// 6-16个字符，区分大小写（不能是9位以下的纯数字，不含空格）
exports.birth = /^(?!\d{6,8}$)(?! )(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9_]{6,16}$/

// 6-20个字符，同时包含大、小写字母及数字，不可包含特殊字符
exports.birth = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/

// 中国邮政编码（六位数）
exports.postalCode = /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/

// 18位身份证
exports.idCard = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/

// 18位的新版身份证
exports.birth = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/

// 全角标点符(可以有中文)
exports.mark = /[\uFF00-\uFFFF]/

// 中文、英文、数字包括下划线
exports.zhEnNumber = /^[\\u4E00-\\u9FA5A-Za-z0-9_]+$/

// 以字母开头，长度在6-18之间，只能包含字符、数字和下划线
exports.beginLetter = /^[a-zA-Z]\w{5,17}$/

// 是否含有 ^%&',;=?$\" 等字符
exports.specialChar = /[^%&',;=?$\x22]+/

// base64
exports.base64 = /^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)\s*$/i

// 64位md5
exports.md5 = /^[a-f0-9]{64}$/

// window下"文件夹"路径
exports.windowFolder = /^[a-zA-Z]:\\(?:\w+\\?)*$/

// window下"文件"路径
exports.windowFile = /^[a-zA-Z]:\\(?:\w+\\)*\w+\.\w+$/

// 视频链接地址
exports.videoUrl = /^https?:\/\/.*?(?:swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4)$/i

// 图片链接地址
exports.imgUrl = /^https?:\/\/.*?(?:gif|png|jpg|jpeg|webp|svg|psd|bmp|tif)$/i

// 统一社会信用代码
exports.creditCode = /^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/

// 车牌号(新能源+非新能源)
exports.licensePlate = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/

// 新能源车牌号
exports.newEnergy = /[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))$/

// 非新能源车牌号
exports.nonNewEnergy = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/

// 护照（包含香港、澳门）
exports.passportId = /(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/