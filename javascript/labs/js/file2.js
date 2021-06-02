function addNums(...args){
    return args.reduce((a,c)=> a + c);
}

export {addNums};
// let mySum = addNums(2,7,8,15);
// console.log(mySum);