// ***Ternary Operator 

//Change the contents of the isNumber function using ternary operator

// function isNumber(a) {
//     // if (typeof a === "number") {
//     //     return "that's a number";
//     // }
//     // else {
//     //     return "That's not a number";

//     // }

//     //let result = typeof a === "number"? "Thats a number":"Thats not a number";
//     return  typeof a === "number"? "Thats a number":"Thats not a number";
// }
// // console.log(isNumber(10));
// // console.log(isNumber('hey there'));
// // console.log(isNumber(true));

// let isValid = true;
// let print = `Valid is ${isValid ? "this is valid":"this is not valid"}`
// console.log(print)

let hand = 18;

let result = hand <= 10 ? hand + 11: hand + 1;
console.log(result);
