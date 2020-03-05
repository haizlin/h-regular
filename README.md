## 常用正则表达式

> 在日常js开发中积累的一些正则表达式，适用于浏览器和Node环境，欢迎大家提PR补充

* 交流讨论：维护了一个正则交流微信群（只讨论正则相关），欢迎加入讨论，微信关注公众号：**前端剑解**，点击公众号的菜单：进群交流，并备注“正则”即可入群

### 安装
```javascript

// npm安装
npm i h-regular --save

// yarn安装
yarn add h-regular

```

### 引用
```javascript

import hRegular from 'h-regular' // 全部引入
import { email, phone } from 'h-regular' // 部分引入
const hRegular = require('h-regular') // ES5模块引入

```

### 使用
```javascript

// 返回的是所有正则表达式的对象
console.log(hRegular)

// 返回的是单个正则表达式
console.log(email)

```
### 目录
[字符](#character) | [日期](#date)  | [数字](#number)  | [金额](#money)  | [网络](#network)  | [其它](#other) 

### 正则表达式列表

<p id="character"></p>

#### 字符
<details>
<summary>全角字符(fullAngle)</summary>
<p>举例：</p>
<pre><code>
1. /[^\uFF00-\uFFFF]/g
2. /[^\x00-\xff]/g
</code></pre>
</details>

<details>
<summary>半角字符(halfAngle)</summary>
<p>举例：这是半角字符</p>
<pre><code>
/[\x00-\xff]/g
</code></pre>
</details>

<details>
<summary>空白行(blank)</summary>
<p>举例：第一行\n第三行（中间第二行为空）</p>
<pre><code>
/\n\s*\r/
</code></pre>
</details>

<details>
<summary>首尾空白字符(包括空格、制表符、换页符等等)(blankSpace)</summary>
<p>举例：  测试首尾空白字符  </p>
<pre><code>
1. /^\s*|\s*$/
2. /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
</code></pre>
</details>

<details>
<summary>带有~的字符(wave)</summary>
<p>举例：我带有~符号哦！</p>
<pre><code>
/[^~\x22]+/i
</code></pre>
</details>

<details>
<summary>xml文件(xml)</summary>
<p>举例：</p>
<pre><code>
/^([a-zA-Z]+-?)+[a-zA-Z0-9]+\\.[x|X][m|M][l|L]$/
</code></pre>
</details>

<details>
<summary>由26个英文字母组成的字符串(english)</summary>
<p>举例：test</p>
<pre><code>
/^[A-Za-z]+$/
</code></pre>
</details>

<details>
<summary>由数字和26个英文字母组成的字符串(englishNumber)</summary>
<p>举例：0123test456</p>
<pre><code>
/^[A-Za-z0-9]+$/
</code></pre>
</details>

<details>
<summary>由数字、26个英文字母或者下划线组成的字符串(englishNumberSymbol)</summary>
<p>举例：</p>
<pre><code>
/^\w+$/
</code></pre>
</details>

<details>
<summary>URL(url)</summary>
<p>举例：</p>
<pre><code>
1. /^https?:\/\/(([a-zA-Z0-9_-])+(\.)?)*(:\d+)?(\/((\.)?(\?)?=?&?[a-zA-Z0-9_-](\?)?)*)*$/i
2. /^(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\/\\w \\.-]*)*\/?$/$1
3. /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i
4. /https?:\/\/[^\s]*/
5. /^(f|ht){1}(tp|tps):\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?/
</code></pre>
</details>

<details>
<summary>URI(uri)</summary>
<p>举例：</p>
<pre><code>
/[a-zA-z]+:\/\/[^\s]*/
</code></pre>
</details>

<details>
<summary>匹配双字节字符(包括汉字在内, 一个双字节字符长度计2，ASCII字符计1)(doubleCharacter)</summary>
<p>举例：</p>
<pre><code>
/[^\x00-\xff]/g
</code></pre>
</details>

<details>
<summary>ASCII(ascii)</summary>
<p>举例：</p>
<pre><code>
/\x20-\x7f/
</code></pre>
</details>

<details>
<summary>GBK下的中文(gbkChina)</summary>
<p>举例：</p>
<pre><code>
/\xa1-\xff/
</code></pre>
</details>

<details>
<summary>中文(china)</summary>
<p>举例：</p>
<pre><code>
1. /[\u4E00-\u9FA5]/
2. /^[\u4e00-\u9fa5],{0,}$/
3. /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/
</code></pre>
</details>

<details>
<summary>Unicode编码中的汉字范围(chinaChar)</summary>
<p>举例：</p>
<pre><code>
/^[\u2E80-\u9FFF]+$/
</code></pre>
</details>

<details>
<summary>韩文(korean)</summary>
<p>举例：</p>
<pre><code>
/^\x3130-\x318F$/
</code></pre>
</details>

<details>
<summary>日文(japanese)</summary>
<p>举例：</p>
<pre><code>
/^\u0800-\u4e00$/
</code></pre>
</details>

<p id="date"></p>

#### 日期
<details>
<summary>出生年月日(birth)</summary>
<p>举例：</p>
<pre><code>
/^(19|20)\d{2}\-((0?[1-9])|(1[0-2]))\-((0?[1-9])|([1-2]\d)|3[01])$/
</code></pre>
</details>

<details>
<summary>日期格式，已考虑平闰年：yyyy-mm-dd(yyyymmdd)</summary>
<p>举例：</p>
<pre><code>
1. /^[1-2][0-9][0-9][0-9]-[0-1]{0,1}[0-9]-[0-3]{0,1}[0-9]$/
2. /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/
</code></pre>
</details>

<details>
<summary>日期格式，已考虑平闰年：yyyyMMdd(yyyyMMdd)</summary>
<p>举例：</p>
<pre><code>
/^(?:(?!0000)[0-9]{4}(?:(?:0[1-9]|1[0-2])(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])(?:29|30)|(?:0[13578]|1[02])31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)0229)$/
</code></pre>
</details>

<details>
<summary>日期正则，简单判定，未做月份及日期的判定(simpleDate)</summary>
<p>举例：</p>
<pre><code>
/^\d{4}(\-)\d{1,2}\1\d{1,2}$/
</code></pre>
</details>

<details>
<summary>日期正则，复杂判定(complexDate)</summary>
<p>举例：</p>
<pre><code>
/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/
</code></pre>
</details>

<details>
<summary>月份，格式："01"-"09"和"1"-"12"(month)</summary>
<p>举例：05</p>
<pre><code>
/^(0?[1-9]|1[0-2])$/
</code></pre>
</details>

<details>
<summary>一个月的31天，格式：01、09和1、31(day)</summary>
<p>举例：31</p>
<pre><code>
/^((0?[1-9])|((1|2)[0-9])|30|31)$/
</code></pre>
</details>

<details>
<summary>12小时制，hh:mm:ss(hours12)</summary>
<p>举例：11:32:23</p>
<pre><code>
/^(?:1[0-2]|0?[1-9]):[0-5]\d:[0-5]\d$/
</code></pre>
</details>

<details>
<summary>24小时制，hh:mm:ss(hours24)</summary>
<p>举例：17:32:23</p>
<pre><code>
/^(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d$/
</code></pre>
</details>

<p id="money"></p>

#### 金额
<details>
<summary>只能有一位小数(onlyOneDecimal )</summary>
<p>举例：</p>
<pre><code>
/^[0-9]{1,3}(,[0-9]{3})*(.[0-9]{1,2})?$/
</code></pre>
</details>

<details>
<summary>小数点后只能有最多两位数字（可以有正负号）(twoDigitNumber)</summary>
<p>举例：-36.58</p>
<pre><code>
/^[+-]*(\d)*(\.\d{0,2})*$/
</code></pre>
</details>

<details>
<summary>格式："10000.00" 和 "10,000.00", 和没有 "分" 的 "10000" 和 "10,000"()</summary>
<p>举例：</p>
<pre><code>
/^[1-9][0-9]*$/
</code></pre>
</details>

<details>
<summary>任意一个不以0开头的数字，但是，这也意味着一个字符"0"不通过(anyNumber)</summary>
<p>举例：</p>
<pre><code>
/^(0|[1-9][0-9]*)$/
</code></pre>
</details>

<details>
<summary>一个0或者一个不以0开头的数字，还可以允许开头有一个负号()</summary>
<p>举例：</p>
<pre><code>
/^(0|-?[1-9][0-9]*)$/
</code></pre>
</details>

<details>
<summary>以0或者一个可能为负的开头不为0的数字()</summary>
<p>举例：</p>
<pre><code>
/^[0-9]+(.[0-9]+)?$/
</code></pre>
</details>

<details>
<summary>小数点后面至少应该有1位数，所以"10."是不通过的，但是 "10" 和 "10.2" 是通过的()</summary>
<p>举例：</p>
<pre><code>
/^[0-9]+(.[0-9]{2})?$/
</code></pre>
</details>

<details>
<summary>这样我们规定小数点后面必须有两位，如果你认为太苛刻了，可以这样()</summary>
<p>举例：</p>
<pre><code>
/^[0-9]+(.[0-9]{1,2})?$/
</code></pre>
</details>

<details>
<summary>1到3个数字，后面跟着任意个逗号+3个数字，逗号成为可选，而不是必须(commaSeparation)</summary>
<p>举例：</p>
<pre><code>
/^([0-9]+|[0-9]{1,3}(,[0-9]{3})*)(.[0-9]{1,2})?$/
</code></pre>
</details>

<p id="number"></p>

#### 数字
<details>
<summary>纯数字(number)</summary>
<p>举例：</p>
<pre><code>
1. /^-?\d*\.?\d+$/
2. /^[0-9]*$/
</code></pre>
</details>

<details>
<summary>n位的数字(nDigitNumber)</summary>
<p>举例：</p>
<pre><code>
/^\d{n}$/
</code></pre>
</details>

<details>
<summary>至少n位数字()</summary>
<p>举例：</p>
<pre><code>
/^\d{n,}$/
</code></pre>
</details>

<details>
<summary>m-n位的数字(digitsRange)</summary>
<p>举例：58</p>
<pre><code>
/^\d{m,n}$
</code></pre>
</details>

<details>
<summary>整数(integer)</summary>
<p>举例：</p>
<pre><code>
1. /^-?\d+$/
2. /^-?[1-9]\d*$/
</code></pre>
</details>

<details>
<summary>正整数(positiveInteger)</summary>
<p>举例：</p>
<pre><code>
1. /^\d+$/
2. /^[1-9]\d*$/
</code></pre>
</details>

<details>
<summary>非正整数（负整数 + 0）(nonPositiveInteger)</summary>
<p>举例：</p>
<pre><code>
1. /^-[1-9]\d*|0$/
2. /^((-\d+)|(0+))$/
</code></pre>
</details>

<details>
<summary>负整数(negtiveInteger)</summary>
<p>举例：</p>
<pre><code>
1. /^-\d+$/
2. /^-[1-9]\d*$/
</code></pre>
</details>

<details>
<summary>正数(positive)</summary>
<p>举例：</p>
<pre><code>
/^\d*\.?\d+$/
</code></pre>
</details>

<details>
<summary>正数、负数、和小数(positiveNegative)</summary>
<p>举例：</p>
<pre><code>
/^(\-|\+)?\d+(\.\d+)?$/
</code></pre>
</details>

<details>
<summary>负数(negative)</summary>
<p>举例：</p>
<pre><code>
/^-\d*\.?\d+$/
</code></pre>
</details>

<details>
<summary>非负整数（正整数 + 0）(nonNegtiveInteger)</summary>
<p>举例：</p>
<pre><code>
1. /^[1-9]\d*|0$/
2. /^\d+$/
</code></pre>
</details>

<details>
<summary>非零的负整数(nonZeroNegativeInteger)</summary>
<p>举例：</p>
<pre><code>
1. /^\-[1-9][0-9]*$/
2. /^-[1-9]\d*$/
</code></pre>
</details>

<details>
<summary>非零的正整数(nonZeroPositiveInteger)</summary>
<p>举例：</p>
<pre><code>
1. /^\+?[1-9][0-9]*$/
2. /^([1-9][0-9]*){1,3}$ 或 ^\+?[1-9][0-9]*$/
</code></pre>
</details>

<details>
<summary>浮点数(floatPoint)</summary>
<p>举例：</p>
<pre><code>
1. /^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$/
2. /^(-?\d+)(\.\d+)?$/
</code></pre>
</details>

<details>
<summary>正浮点数(positiveFloatingPoint)</summary>
<p>举例：</p>
<pre><code>
1. /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/
2. /^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/
</code></pre>
</details>

<details>
<summary>非正浮点数（负浮点数 + 0）(nonPositiveFloatingPoint)</summary>
<p>举例：</p>
<pre><code>
1. /^(-([1-9]\d*\.\d*|0\.\d*[1-9]\d*))|0?\.0+|0$/
2. /^((-\d+(\.\d+)?)|(0+(\.0+)?))$ /
</code></pre>
</details>

<details>
<summary>负浮点数(negativeFloatingPointNumber)</summary>
<p>举例：</p>
<pre><code>
1. /^-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)$/
2. /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/
</code></pre>
</details>

<details>
<summary>非负浮点数（正浮点数 + 0）(nonNegativeFloatingPointNumber)</summary>
<p>举例：</p>
<pre><code>
1. /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0$/
2. /^\d+(\.\d+)?$/
</code></pre>
</details>

<details>
<summary>非零开头的最多带两位小数的数字()</summary>
<p>举例：</p>
<pre><code>
/^([1-9][0-9]*)+(.[0-9]{1,2})?$/
</code></pre>
</details>

<details>
<summary>有1-4位小数的正实数(positiveRealNumber)</summary>
<p>举例：1234</p>
<pre><code>
/^[0-9]+(.[0-9]{1,4})?$/
</code></pre>
</details>

<p id="network"></p>

#### 网络
<details>
<summary>ipv4(ipv4)</summary>
<p>举例：127.0.0.1</p>
<pre><code>
/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
</code></pre>
</details>

<details>
<summary>ipv6(ipv6)</summary>
<p>举例：</p>
<pre><code>
/^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i
</code></pre>
</details>

<details>
<summary>网址(website)</summary>
<p>举例：http://www.haizlin.com</p>
<pre><code>
/^(?=^.{3,255}$)(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:\d+)*(\/\w+\.\w+)*([\?&]\w+=\w*)*$/
</code></pre>
</details>

<details>
<summary>域名(domain)</summary>
<p>举例：http://www.baidu.com:8081?a=1&b=c</p>
<pre><code>
/^(?=^.{3,255}$)[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+$/
</code></pre>
</details>

<details>
<summary>端口号(port)</summary>
<p>举例：65535</p>
<pre><code>
/^[1-9]$|(^[1-9][0-9]$)|(^[1-9][0-9][0-9]$)|(^[1-9][0-9][0-9][0-9]$)|(^[1-6][0-5][0-5][0-3][0-5]$)/
</code></pre>
</details>

<details>
<summary>子网掩码(subnetMask)</summary>
<p>举例：255.255.255.0</p>
<pre><code>
/^(254|252|248|240|224|192|128|0)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(254|252|248|240|224|192|128|0)$/
</code></pre>
</details>

<details>
<summary>http/https(http)</summary>
<p>举例：</p>
<pre><code>
1. /(http|https):\/\/([\w.]+\/?)\S*/
2. /http[s]{0,1}:\/\/([\w.]+\/?)\S*/
</code></pre>
</details>

<p id="other"></p>

#### 其它
<details>
<summary>5-11位的腾讯QQ号，腾讯QQ号从10000开始(qq)</summary>
<p>举例：80285586</p>
<pre><code>
/^[1-9][0-9]{4,11}$/
</code></pre>
</details>

<details>
<summary>邮箱(email)</summary>
<p>举例：</p>
<pre><code>
1. /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
2. /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
3. /[\w!#$%&'*+/=?^_{|}~-]+(?:.[\w!#$%&'*+/=?^_{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/
4. /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
5. /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+@(([a-zA-Z0-9]+)\.){1,2}[a-z]{2,3}$/
</code></pre>
</details>

<details>
<summary>银行卡(bankCard)</summary>
<p>举例：</p>
<pre><code>
/^([1-9]{1})(\d{15}|\d{18})$/
</code></pre>
</details>

<details>
<summary>IE版本(ieVervison)</summary>
<p>举例：</p>
<pre><code>
/^.*MSIE [5-8](?:\\.[0-9]+)?(?!.*Trident\\/[5-9]\\.0).*$/
</code></pre>
</details>

<details>
<summary>微信号：6至20位，以字母开头，字母，数字，减号，下划线(weChat)</summary>
<p>举例：aya002002</p>
<pre><code>
/^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/
</code></pre>
</details>

<details>
<summary>文件的扩展名(fileExt)</summary>
<p>举例：</p>
<pre><code>
1. /^.*?\.(html|css|jpg)$/
2. /^([a-zA-Z]\\:|\\\\)\\\\([^\\\\]+\\\\)*[^\\/:*?"<>|]+\\.txt(l)?$$/
</code></pre>
</details>

<details>
<summary>根据工信部2019年最新公布的手机号段()</summary>
<p>举例：</p>
<pre><code>
1. /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/
2. /^1[34578]\d{9}$/
3. /^[+]{0,1}(d){1,3}[ ]?([-]?((d)|[ ]){1,12})+$/
</code></pre>
</details>

<details>
<summary>中国移动(phoneYidong)</summary>
<p>举例：13456555555</p>
<pre><code>
/^1(34[0-8]|3[5-9\d]|440|4[78]\d|5[0-27-9]\d|70[356]|78\d|8[2-478]\d|98\d)\d{7}$/
</code></pre>
</details>

<details>
<summary>中国联通(phoneLiantong)</summary>
<p>举例：18689888888</p>
<pre><code>
/^1(3[0-2]\d|4[56]\d|5[56]\d|66\d|70[4789]|71|7[56]\d|8[56]\d)\d{7}$/
</code></pre>
</details>

<details>
<summary>中国电信(phoneDianxin)</summary>
<p>举例：13388888888</p>
<pre><code>
/^1(3[3]\d|349|410|49\d|53\d|70[0-2]|7[37]\d|740|8[019]\d|99\d)\d{7}$/
</code></pre>
</details>

<details>
<summary>16进制颜色(hexColor)</summary>
<p>举例：测试提取16进制的颜色#ff0012值</p>
<pre><code>
/#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})/
</code></pre>
</details>

<details>
<summary>10进制值(decimal)</summary>
<p>举例：15</p>
<pre><code>
/^d+.d+$/
</code></pre>
</details>

<details>
<summary>JSON(json)</summary>
<p>举例：</p>
<pre><code>
/^\w+\(({[^()]+})\)$/
</code></pre>
</details>

<details>
<summary>中文名2到10位（字母，数字，下划线，减号）(chinaName)</summary>
<p>举例：</p>
<pre><code>
/^[\u4E00-\u9FA5]{2,10}(·[\u4E00-\u9FA5]{2,10}){0,2}$/
</code></pre>
</details>

<details>
<summary>中英验证码(verificationCode)</summary>
<p>举例：</p>
<pre><code>
/^([a-zA-Z0-9]{4}|[a-zA-Z0-9]{6})$/
</code></pre>
</details>

<details>
<summary>html标签(htmlTag)</summary>
<p>举例：</p>
<pre><code>
1. /<(.*)>.*<\/\1>|<(.*) \/>/
2. /^<([a-z]+)([^<]+)(?:>(.)</\1>|\s+/>)$/
3. /<\/?\w+((\s+\w+(\s*=\s*(?:".*?"|'.*?'|[\^'">\s]+))?)+\s*|\s*)\/?>/
</code></pre>
</details>

<details>
<summary>html注释(htmlNotes)</summary>
<p>举例：</p>
<pre><code>
1. /^&lt;!--[\s\S]*?-->$/
2. /&lt;!--(.*?)-->/
</code></pre>
</details>

<details>
<summary>html片段(htmlFragment)</summary>
<p>举例：</p>
<pre><code>
/^<([a-z]+)([^<]+)*(?:>(.*)<\\/\\\\\\1>|\\s+\\/>)$/
</code></pre>
</details>

<details>
<summary>CSS属性(css)</summary>
<p>举例：</p>
<pre><code>
/^\\s*[a-zA-Z\\-]+\\s*[:]{1}\\s[a-zA-Z0-9\\s.#]+[;]{1}/
</code></pre>
</details>

<details>
<summary>提取页面的url(htmlUrl)</summary>
<p>举例：<a href="http://www.baidu.com">百度</a></p>
<pre><code>
/(&lt;a\\s*(?!.*\\brel=)[^>]*)(href="https?:\\/\\/)((?!(?:(?:www\\.)?'.implode('|(?:www\\.)?', $follow_list).'))[^" rel="external nofollow" ]+)"((?!.*\\brel=)[^>]*)(?:[^>]*)>
</code></pre>
</details>

<details>
<summary>英文名(enName)</summary>
<p>举例：</p>
<pre><code>
1. /^[a-zA-Z0-9_-]{2,10}$/
2. /^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$/
</code></pre>
</details>

<details>
<summary>座机号，固定电话(telephone)</summary>
<p>举例：</p>
<pre><code>
1. /\d{3}-\d{8}|\d{4}-\d{7}/
2. /^(0[0-9]{2})\d{8}$|^(0[0-9]{3}(\d{7,8}))$/
</code></pre>
</details>

<details>
<summary>普通电话、传真号码：可以"+"开头，除数字外，可含有"-"(fax)</summary>
<p>举例：</p>
<pre><code>
/^[+]{0,1}(d){1,3}[ ]?([-]?((d)|[ ]){1,12})+$/
</code></pre>
</details>

<details>
<summary>电话号码，正确格式：XXXX-XXXXXXX，XXXX-XXXXXXXX，XXX-XXXXXXX，XXX-XXXXXXXX，XXXXXXX，XXXXXXXX(tel)</summary>
<p>举例：010-88888888</p>
<pre><code>
/^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$/
</code></pre>
</details>

<details>
<summary>用户名正则，4到16位（字母，数字，下划线，减号）(userName)</summary>
<p>举例：</p>
<pre><code>
1. /^[a-zA-Z0-9_-]{4,16}$/
2. /^[a-zA-Z][a-zA-Z0-9_]{4,16}$/
</code></pre>
</details>

<details>
<summary>密码强度正则，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符()</summary>
<p>举例：</p>
<pre><code>
/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/
</code></pre>
</details>

<details>
<summary>6-16位字符，区分大小写（不能是9位以下的纯数字，不含空格），必须包含大写字母()</summary>
<p>举例：</p>
<pre><code>
/^(?!\d{6,8}$)(?! )(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9_]{6,16}$/
</code></pre>
</details>

<details>
<summary>6-16个字符，区分大小写（不能是9位以下的纯数字，不含空格）()</summary>
<p>举例：</p>
<pre><code>
/^(?!\d{6,8}$)(?! )(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9_]{6,16}$/
</code></pre>
</details>

<details>
<summary>6-20个字符，同时包含大、小写字母及数字，不可包含特殊字符()</summary>
<p>举例：</p>
<pre><code>
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/
</code></pre>
</details>

<details>
<summary>中国邮政编码（六位数）(postalCode)</summary>
<p>举例：</p>
<pre><code>
1. /^\d{6}$/
2. /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/
3. [1-9]\d{5}(?!\d)
</code></pre>
</details>

<details>
<summary>15~18位身份证(idCard)</summary>
<p>举例：</p>
<pre><code>
1. /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/
2. /^[1-9]{1}\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
3. /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/
</code></pre>
</details>

<details>
<summary>18位的新版身份证()</summary>
<p>举例：</p>
<pre><code>
1. /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
2. ^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X|x)$
3. /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
</code></pre>
</details>

<details>
<summary>全角标点符(可以有中文)(mark)</summary>
<p>举例：</p>
<pre><code>
/[\uFF00-\uFFFF]/g
</code></pre>
</details>

<details>
<summary>中文、英文、数字包括下划线(zhEnNumber)</summary>
<p>举例：</p>
<pre><code>
/^[\\u4E00-\\u9FA5A-Za-z0-9_]+$/$1
</code></pre>
</details>

<details>
<summary>以字母开头，长度在6-18之间，只能包含字符、数字和下划线(beginLetter)</summary>
<p>举例：</p>
<pre><code>
/^[a-zA-Z]\w{5,17}$/
</code></pre>
</details>

<details>
<summary>是否含有 ^%&',;=?$\" 等字符(specialChar)</summary>
<p>举例：</p>
<pre><code>
/[^%&',;=?$\x22]+/
</code></pre>
</details>

<details>
<summary>base64(base64)</summary>
<p>举例：</p>
<pre><code>
/^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s]*?)\s*$/i
</code></pre>
</details>

<details>
<summary>64位md5(md5)</summary>
<p>举例：</p>
<pre><code>
/^[a-f0-9]{64}$/
</code></pre>
</details>

<details>
<summary>IMEI(imei)</summary>
<p>举例：</p>
<pre><code>
/^\d{15,17}$/
</code></pre>
</details>

<details>
<summary>window下"文件夹"路径(windowFolder)</summary>
<p>举例：</p>
<pre><code>
/^[a-zA-Z]:\\(?:\w+\\?)*$/
</code></pre>
</details>

<details>
<summary>window下"文件"路径(windowFile)</summary>
<p>举例：</p>
<pre><code>
/^[a-zA-Z]:\\(?:\w+\\)*\w+\.\w+$/
</code></pre>
</details>

<details>
<summary>视频链接地址(videoUrl)</summary>
<p>举例：</p>
<pre><code>
/^https?:\/\/.*?(?:swf|avi|flv|mpg|rm|mov|wav|asf|3gp|mkv|rmvb|mp4)$/i
</code></pre>
</details>

<details>
<summary>图片链接地址(imgUrl)</summary>
<p>举例：</p>
<pre><code>
/^https?:\/\/.*?(?:gif|png|jpg|jpeg|webp|svg|psd|bmp|tif)$/i
</code></pre>
</details>

<details>
<summary>统一社会信用代码(creditCode)</summary>
<p>举例：12540300G347861750</p>
<pre><code>
/^[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}$/
</code></pre>
</details>

<details>
<summary>车牌号(新能源+非新能源)(licensePlate)</summary>
<p>举例：</p>
<pre><code>
/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/
</code></pre>
</details>

<details>
<summary>新能源车牌号(newEnergy)</summary>
<p>举例：</p>
<pre><code>
/[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领 A-Z]{1}[A-HJ-NP-Z]{1}(([0-9]{5}[DF])|([DF][A-HJ-NP-Z0-9][0-9]{4}))$/
</code></pre>
</details>

<details>
<summary>非新能源车牌号(nonNewEnergy)</summary>
<p>举例：</p>
<pre><code>
/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/
</code></pre>
</details>

<details>
<summary>护照（包含香港、澳门）(passportId)</summary>
<p>举例：</p>
<pre><code>
/(^[EeKkGgDdSsPpHh]\d{8}$)|(^(([Ee][a-fA-F])|([DdSsPp][Ee])|([Kk][Jj])|([Mm][Aa])|(1[45]))\d{7}$)/
</code></pre>
</details>

### 版本
* v1.0.0: 初始化项目，添加了112个常用正则，js版本调用模块，有些正则是网上找到的，未找到出处，在此感谢那些作者

## 项目骨干
- [qq674785876](https://github.com/qq674785876)
- [undefinedYu](https://github.com/undefinedYu)
- [qingleizhang123](https://github.com/qingleizhang123)
- [yxkhaha](https://github.com/yxkhaha)
- [zhaoqian0901](https://github.com/zhaoqian0901)

## 贡献
欢迎大家到**Issues**交流或通过提交**PR**的形式对本项目进行贡献

## License
[![MIT](http://api.haizlin.cn/api?mod=interview&ctr=issues&act=generateSVG&type=regular)](https://github.com/haizlin/h-regular/LICENSE)