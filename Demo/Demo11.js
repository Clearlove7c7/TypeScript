"use strict";
//类是对象具体事务的一个抽象,对象是类的具体表现
var XiaoJieJie = /** @class */ (function () {
    function XiaoJieJie(name, age) {
        this.name = name;
        this.age = age;
    }
    XiaoJieJie.prototype.say = function () {
        console.log('你好啊');
    };
    return XiaoJieJie;
}());
var sister = new XiaoJieJie('Virgo', 18);
console.log(sister);
sister.say();
