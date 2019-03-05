//类型转换
// true = 1
console.log(true==1)
console.log(true + 1)  //2
console.log(1+'true') //1true
console.log(1+undefined) //NAN
console.log(1+null)  //1
//Symbol  防止命名冲突 
const a  ={
    user:'1',
    [Symbol.toPrimitive](hint){
        console.log('hint->',hint)
    }
}
console.log(1+a)
console.log('1'+a)
console.log('1'+a.toString())


// console.log(Object.is(NaN,NaN))  //无歧义全等

