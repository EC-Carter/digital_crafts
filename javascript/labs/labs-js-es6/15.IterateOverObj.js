
/*
Create a function sumObjectValues() that will sum all values of the fields that contain
number.  
Ensure that iteration is done only over own properties of the object
*/

var nums = {
    a: 10,
    b: 20,
    c: "string",
    d: 12
}

// Write code here 
for (num in nums){
    console.log(num);
}

for (key in nums){
    console.log(key,nums[key]);
}

//console.log(sumObjectValues(nums));
// 42
