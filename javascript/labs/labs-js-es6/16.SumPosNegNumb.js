
/*
Create a function sumPlusMinus() that takes an array and sums 
separately positive and negative numbers

it should return an object like this:

{
    plus: 74, // sum of all positive numbers
    minus: -54 // sum of all negative numbers
}

*/


var nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

function sumPlusMinus(arr){
    // let pos = 0;
    // let neg = 0;

    // let numbers = {
    //     pos:0,
    //     neg:0
    // }
    // let{p,n} = numbers;

    // arr.forEach(num => {
    //     if(num > 0){
    //         p += num;
    //     } else {
    //         n += num;
    //     }
    // })
    return arr.reduce((a,b)=>{
        return (
            {
                plus: b > 0 ? a.plus + b: a.plus,
                minus: b < 0 ? a.minus + b: a.minus
            }
        )
    },{plus:0,minus:0})
}

// Write code here

console.log(sumPlusMinus(nums));
// {plus: 74, minus: -54}

