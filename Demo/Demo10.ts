//RegExp 正则表达式 string

// 构造函数声明法
// let reg1:RegExp = new RegExp('zhaolc')
// console.log(reg1);
// let reg2:RegExp = new RegExp('zhaolc','gi');
// console.log(reg2);

//字面量声明
// let reg3:RegExp = /zhaolc/
// let reg4:RegExp = /zhaolc/gi

//test(string) exec(string)
let reg1:RegExp = /zhaolc/i
let website:string = 'zhaolc.com'
// let result1:boolean = reg1.test(website)
// console.log(reg1.exec(website))

let reg2:RegExp =/fg/;
let conString:string = 'fenfa';
console.log(reg2.test(conString));



