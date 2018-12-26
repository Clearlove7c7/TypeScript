// interface HusBand {
//     sex: string,
//     interest: string
//     buyPackage?:Boolean
// }
//
// let myhusband:HusBand = {
//     sex:'男',
//     interest:'电脑',
//     buyPackage:true
// }
//
// console.log(myhusband)
interface SearchMan {
    (source:string,subString:string):boolean
}

let mySearch:SearchMan

mySearch=function (source:string,subString:string):boolean {
    let flag = source.search(subString)
    return (flag!=-1)
}

console.log(mySearch('高、富、帅、白、美','pang'))