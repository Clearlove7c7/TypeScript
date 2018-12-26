"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Zhaolc = /** @class */ (function () {
    function Zhaolc(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    Zhaolc.prototype.interest = function () {
        console.log('找个人');
    };
    return Zhaolc;
}());
var zhaolcObj = new Zhaolc('赵林超', 18, 'code');
zhaolcObj.interest();
var Liust = /** @class */ (function (_super) {
    __extends(Liust, _super);
    function Liust() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.beautiful = '好看';
        return _this;
    }
    Liust.prototype.interest = function () {
        _super.prototype.interest.call(this);
        console.log('变美变美');
    };
    Liust.prototype.doMoney = function () {
        console.log('赚钱');
    };
    return Liust;
}(Zhaolc));
var beautiful = new Liust('刘双婷', 18, '爱美');
beautiful.interest();
beautiful.doMoney();
