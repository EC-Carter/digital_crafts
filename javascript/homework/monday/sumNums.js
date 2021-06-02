

function sumNumbers(numArray){
    sum = 0;
    for(var i = 0; i < numArray.length;i++){
        sum = sum + numArray[i];
    }
    return sum;
}
answer = sumNumbers([10,3,7]);
console.log(answer);
