




// // function expression vs function declaration vs annonynous function
// // how weve been writing it
// function area(height,width){
//     return height * width
// }

// //arrow functions - all valid
// var area = (height,width)=>{
//     return height * width
// }
// //on one line
// var area = (height,width)=> height * width
// // on one line with only one paramater
// var area = height => height * height
// //with no parameters

// function lvl4exercise1 () {
//     // Return the boolean value "true"
// }
// var truth = ()=> true;

// function lvl4exercise2 () {
//     // Return the boolean value "false"
// }
// var lie = ()=> false;

// function lvl4exercise3 (bool) {
//     // Return the opposite of the input boolean value
// }
// var lvl4exercise3 = bool => !bool;

// function lvl4exercise4 (bool1, bool2) {
//     // Return the logical "and" of the input boolean values
// }

// var lvl4exercise4 = (bool1, bool2) => bool1 && bool2;

// function lvl4exercise5 (bool1, bool2) {
//     // Return the logical "or" of the input boolean values
// }
// var lvl4exercise5 = (bool1, bool2)=> bool1 || bool2;

// function lvl4exercise6 (bool1, bool2) {
//     // Return the logical "equivalence" of the input boolean values
// }
// var lvl4exercise6 = (bool1, bool2) => bool1 == bool2;


//self invoking functions IIFE

// (function(){
//     console.log("I was immediately invoked")
// })();

// let add = (num1,num2) => num1 + num2;

// let subtract = (num1,num2)=> num1 - num2;

// let calc = function( num1,num2,operationFn){
//     return operationFn(num1,num2)
// }

// console.log(calc(5,9,subtract))

//from homework
    //9 sort an array 3
    //understanding the reduce method
    // let arrTest = arr[0].reduce((a,b)=> a + b )
    // console.log(arrTest)
        //this doesn't work. The brackets on the return line surrounding a + b indicate something I think it is looking for an explicit return statement
        // let arrSorted = arr.sort((a,b)=>{
        //     return a.reduce((a,b)=> {a + b} ) - b.reduce((a,b)=> {a + b});

        // })

    //let arrSorted = arr.sort((a,b)=> a.reduce((a,b)=> a + b ) - b.reduce((a,b)=> a + b ))
    // console.log(arrSorted)