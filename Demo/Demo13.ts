class Zhaolc{
    public name:string
    public age:number
    public skill:string
    constructor(name:string,age:number,skill:string){
        this.name = name
        this.age = age
        this.skill = skill
    }

    public interest(){
        console.log('找个人')
    }
}

let zhaolcObj:Zhaolc = new Zhaolc('赵林超',18,'code')
zhaolcObj.interest()

class Liust extends Zhaolc{
    public beautiful:string = '好看'

    public interest() {
        super.interest();
        console.log('变美变美')
    }

    public doMoney(){
        console.log('赚钱')
    }
}

let beautiful = new Liust('刘双婷',18,'爱美')
beautiful.interest()
beautiful.doMoney()