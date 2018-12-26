"use strict";
var age = 18;
var stature = 178.5;
var sex = NaN;
console.log(age);
console.log(stature);
console.log(sex);
console.log('--------------------------------------------------------');
var status = '学习';
console.log(status);
console.log('--------------------------------------------------------');
// boolean true false
var a = true;
var b = false;
//enum 类型 枚举    人:{男人,女人,中性}
var REN;
(function (REN) {
    REN["man"] = "\u7537\u4EBA";
    REN["women"] = "\u5973\u4EBA";
    REN["yao"] = "\u4E2D\u6027";
})(REN || (REN = {}));
console.log(REN.yao);
// any 类型
var t = 10;
t = 'zhaolc';
t = true;
console.log(t);
