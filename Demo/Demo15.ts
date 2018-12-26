namespace iBoy{
    export class Dehua {
        public name:string = "刘德华"
        talk(){
            console.log('I`m 刘德华');
        }
    }
}

namespace iGirl{
    export class Dehua {
        public name:string = "Faker"
        talk(){
            console.log('I`m Faker');
        }
    }
}

let dehua1:iBoy.Dehua = new iBoy.Dehua()
let dehua2:iGirl.Dehua = new iGirl.Dehua()
console.log(dehua1)
console.log(dehua2)
dehua1.talk()
dehua2.talk()
