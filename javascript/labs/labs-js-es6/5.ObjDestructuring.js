// ***Object Destructuring
/* 
Declare mult() function that will multiply values of the x,y,z 
fields of the passed object
*/
// var obj = {
//     x: 5,
//     y: 20,
//     z: 3
// }

// function mult(obj){
//     let { x,y,z} = obj;
//     return x*y*z;
// }

// let result = mult(obj);
// console.log(result);
//300


/*
Create shortPerson() function that will destructure each person object.
Sample result:
{n: "Mike", c: "Spain", a: 23, p:100}

If input object doesn't have postsQuantitiy field it should get default value 0.
*/


var person1 = {
    name: "Mike",
    info: {
        country: "Spain",
        age: 23
    },
    postsQuantitiy: 100
}

var person2 = {
    name: "Alice",
    info: {
        country: "Italy",
        age: 25
    }
}

const shortPerson = (obj) => {
    //let {name:n,info:i,postsQuantitiy:p} = obj;
    let {name:n,info:{country:c,age:a},postsQuantitiy:p=0} = obj;
    //console.log(name,info,postsQuantitiy);
    console.log(n,c,a,p);


}

shortPerson(person1)
shortPerson(person2)