//public  公开的
//protected   受保护的
//private  私有的
// class WoMen{
//     public sex:string
//     private name:string
//     private age:number
//     public constructor(sex:string,name:string,age:number){
//         this.sex = sex
//         this.name = name
//         this.age = age
//     }
//     public sayHi(){
//         console.log('你好啊')
//     }
//
//     protected sayLove(){
//         console.log('我爱你')
//     }
//
//     private sayBye(){
//         console.log('拜拜')
//     }
// }
//
// var women:WoMen = new WoMen('女','Li',18)
//
// console.log(women.sex)
// console.log(women.name)
// console.log(women.age)
// women.sayHi()

class Man {
    public readonly sex:string='男'
}

var man:Man = new Man();

man.sex = '女'

console.log(man.sex)