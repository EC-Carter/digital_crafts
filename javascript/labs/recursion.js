// function callMe(){
//     if(){
//         //base case
//     }
//     //recursive case
//     callMe()//something happens that changes 
// }
//base case

//recusive case

//return data


// Write a function called power which accepts a base and an exponent.  The function should return the power of the base to the exponent.

// const power = (base,exponent) => {

//     //base case
//     if (exponent == 0) return 1;


//     //recursive
//     return base * power(base, exponent -1);
    
// }

// const reverse = (str) => {
//     let revStr = ""

//     if(str.length === 0) return '';
//     return reverse(str.slice(1)) + str[0];
    
// }

// reverse('Carol')

//Write a function factorial which accepts a number and returns the factorial of that number.  A factorial is the product of an interger and all the integers below it; eg. , factorial four( 4!) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.


// const fractorial = (n) => {
//     if(n===0) return 1;
//     return n * fractorial(n-1);
    
// }
// fractorial(4)


//Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

const recursiveRange = (n) => {
    if(n === 0) return 0;
    return n + recursiveRange(n - 1);  
}

let result = recursiveRange(4)
console.log(result);
