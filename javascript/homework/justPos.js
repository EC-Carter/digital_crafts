function positiveNums(originalArray){
    var newArray = [];
    for(var i = 0; i < originalArray.length; i++){
        if(originalArray[i] >= 0){
            newArray.unshift(originalArray[i]);

        }
    }
    return newArray
}

positives = positiveNums([-1, -2, -3])
console.log(positives);