//变量的作用域,函数划分
// var yangzi:string = '刘德华'
// function zhengXing():void {
//     var yangzi:string
//     console.log('四大天王'+yangzi);
//     let yangzi:string = '刘帝娃'
//     console.log('四大天王'+yangzi);
// }
//
// zhengXing();
// console.log(yangzi)


//全局变量  //局部变量
//let

function zhengXing():void {
    let yangzia:string = '刘德华'
    {
        let yangzib:string='周星驰'
        console.log('四大天王'+yangzib);
    }
    console.log('四大天王'+yangzia);
    console.log('四大天王'+yangzib);
}

zhengXing();
