
function factors(num){
    factorArray = [];
    for(var i = 0; i <= num ; i++){
          if( num % i == 0){
            factorArray.push(i)
            }
    }
    return factorArray;
}

var factorsOf = factors(1000);
console.log(factorsOf)
