


// var firstName = "Carol";
// var lastName = " Carter";
// var wholeName = firstName + lastName;
// console.log(wholeName);

// var a = 2;
// var b = 3;
// var x = a + b;
// console.log(x);

// var myBool = true;

// console.log(typeof(myBool))

// var name2 = "Carol Carter";
// name2.indexOf("o");
// console.log(name2.indexOf("Carter"));


// var age = 17;

// if (age >= 21){
//     console.log('you can drink');
// }
// else if ( age < 18){
//     console.log('you are not old enough to drink');
// }
// else{
//     console.log('legal in some states')
// }

// var day = "wednesday";

// if (day == "monday"){

// }
// else if (day == "tuesday"){
    
// }
// else if (day == "wednesday"){

// }
// else if (day == "thursday"){

// }
// else if (day == "friday"){

// }
// else if (day == "saturday"){

// }
// else if (day == "sunday"){

// }

// switch(day){
//     case "monday":
//         break;
//     case "tuesday":
//         break;
//     case "wednesday":
//         break;
//     case "thursday":
//         break;
//     case "friday":
//         break;
//     case "saturday":
//         break;
//     case "sunday":
//         break;
//     default:
//         break;
// }

// var expr = "Grapes";
// switch(expr){
//     case "Oranges":
//         console.log('Oranges are  $0.59 a pound');
//         break;
//     case "Mangos":
//     case "Papayas":
//         console.log('Mangos and Papayas are  $2.79 a pound');
//         break;
//     default:
//         console.log('Sorry, we are out of ' + expr + '!')
// }


// var count = 0

// while (count < 10){
//     count++;
//     console.log(count);
// }

// for(var count = 1; count <= 10; count++){
//     for(var count2 = 1; count2 <= 10; count2++){
//         var result = count * count2
//         // console.log(count + " x " + count2 + " = " + result)
//         console.log(`${count} x ${count2} = ${result}`)
//     }
//     console.log()
// }


// var array = [1,2,3,4,5,6];

// array[1];

// array.push( 'seven')//adds to end- mutates
//  var lastVal = array.pop()//removes last element- mutates

// array.shift()//removes the element at front
// array.unshift("new start")// puts an element at the front of array

var words = "This is a great day!";
// var myArray = words.split(' ')
// console.log(myArray);
// var newString =myArray.join(' ')
// console.log(newString)

// for(var index = 0;index < words.length; index++){

//     var character = words[index];
//     console.log(character)
// }
//  var reverse = "";

// for(var index = 0;index < words.length; index++){
    
//     var character = words[index];
//     reverse = character + reverse
    
// }
// console.log(reverse);

// var lottoNums = [23, 11, 43, 19, 37, 16];
// var arrayOfSplicedValues = lottoNums.splice(2, 3);//mutates original array
// console.log(arrayOfSplicedValues);
// console.log(lottoNums);

// var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(2,4));//does NOT mutate the array
// console.log(animals)
// // 
// var phonebook = { key:value,};//key name doen't have to be in quotes like in python

// var characterSheet = {
//     name: 'tim berners-lee',
//     title: 'sir',
//     powers: 'invent the web'
// }

// // delete characterSheet.name;
// // or 
// // delete characterSheet['name']

// //for in allows us to loop through an object
// for( var keyName in characterSheet){
//     console.log(`${keyName} ${characterSheet[keyName]}`);
// }

// function add(num1,num2){
//     return num1 + num2;
// }

// var result = add(3 ,7);
// console.log(result);