//类是对象具体事务的一个抽象,对象是类的具体表现
class XiaoJieJie {
    name:string,
    age:number,
    constructor(name:string,age:number){
        this.name = name
        this.age = age
    }
    say(){
        console.log('你好啊')
    }
}

let sister:XiaoJieJie = new XiaoJieJie('Virgo',18)
console.log(sister)
sister.say()