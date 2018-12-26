"use strict";
var iBoy;
(function (iBoy) {
    var Dehua = /** @class */ (function () {
        function Dehua() {
            this.name = "刘德华";
        }
        Dehua.prototype.talk = function () {
            console.log('I`m 刘德华');
        };
        return Dehua;
    }());
    iBoy.Dehua = Dehua;
})(iBoy || (iBoy = {}));
var iGirl;
(function (iGirl) {
    var Dehua = /** @class */ (function () {
        function Dehua() {
            this.name = "Faker";
        }
        Dehua.prototype.talk = function () {
            console.log('I`m Faker');
        };
        return Dehua;
    }());
    iGirl.Dehua = Dehua;
})(iGirl || (iGirl = {}));
var dehua1 = new iBoy.Dehua();
var dehua2 = new iGirl.Dehua();
console.log(dehua1);
console.log(dehua2);
dehua1.talk();
dehua2.talk();
