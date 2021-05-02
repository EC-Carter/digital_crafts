
let numbers = [-1,0,9,54,34,-4,-34,546,6,89,4,23,9,-35,12,25,-90,64]

// //1 positive numbers
// let numbersPos = numbers.filter(num =>{
//     return num >= 0;
// })
// console.log(numbersPos)

// //2 even numbers
// let numbersEven = numbers.filter(num=>{
//     return num % 2 == 0;
// })
// console.log(numbersEven)

// //3 square the numbers
// let numsSqu = numbers.map(num=>{
//     return num * num;
// })
// console.log(numsSqu)

var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 } ];

// //4 cities 1
// let coolCities = cities.filter(city=>{
//     return city.temperature < 70.0;
// })
// console.log(coolCities)

// //5 cities2
// let cityNames = cities.map(city=>{
//     return city.name
// })
// console.log(cityNames)

var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];
// //6 Good Job!
// people.forEach(person=>{
//     console.log(`Good Job, ${person}!`)
// })

// //7 Sort an array
// let peopleAlpha = people.sort();
// console.log(peopleAlpha);

// //8 Sort an array 2
// let peopleLength = people.sort((n1,n2)=>{
//     return n1.length - n2.length;
// })
// console.log(peopleLength)

var arr = [
    [1, 3, 4],
    [2, 4, 6, 8],
    [3, 6] ];

//9 sort an array 

let arrSorted = arr.sort((a,b)=>{
    return a.reduce((a,b)=> a + b) - b.reduce((a,b)=> a + b);

})
//can also be written like this
//let arrSorted = arr.sort((a,b)=> a.reduce((a,b)=> a + b ) - b.reduce((a,b)=> a + b ))
console.log(arrSorted)

//10 3 times
//let fun = () => console.log("Hello World!");

// function call3Times(message){
//     message();message();message();
// }

// call3Times(fun)

// // 11 n times
// function callNTimes(times,message){
//     for(let i=0;i<times;i++){
//         message();
//     }
// }
// callNTimes(10,fun)

// //12 sum an array
// let test = [2,4,6,8,10,12,14,16]
// function sumOfarray(array){
//     return array.reduce((a,b)=> a+b);
// }
// console.log(sumOfarray(test))

//13.Acronym
function acronym(wordArr){
    
    let wordArr2 = wordArr.reduce(function(accum,current){
        accum += current[0];
        return accum;    
    },"");

return wordArr2;
}

let abbrev = ['very', 'important', 'person'];
let result = acronym(abbrev);
console.log(result);




