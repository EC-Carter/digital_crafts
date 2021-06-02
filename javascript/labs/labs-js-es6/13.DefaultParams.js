/*

Check the presence of the function parameters 

Throw Error when function square() is called without arguments.

Create new function and use it as a default parameter. 

*/

// function square(a=1) {
//     console.log(a * a);
// }

// square(10)
// // 100 

// square();
//BEFORE: NaN
//AFTER: Uncaught Error: Function square requrires an agrument

// const add = (...args) => {
//     let sum = 0;
//     args.forEach(el=>{
//         sum += el;
//         //return sum;
//     })
//     return sum;
// }

// const add = (...args) => {
//     return args.reduce((a , b)=>{
//         return a + b;
//     },0)

// const add = (...args) => {
//     return args.reduce((a , b)=> a + b,0)
// }

// let result = add(2,2,6,10);
// console.log(result);