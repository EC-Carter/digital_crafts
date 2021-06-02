// let firstName = require('./mod1')//the .js is implied 
// let someLog = require('./mod2')//importing in a local module


// someLog.info('learning node today');
// someLog.warning('Do not get stressed');
// someLog.error('Use : not =');

// console.log(someLog.firstName);
// console.log(someLog.lastName);

let Stack = require('../stack');
let stack1 = new Stack();

// let callStack = new Stack();

// let brackets = new Stack();  

stack1.push(2);
stack1.push(2);
stack1.push(2);

let stack2 =  new Stack();
stack2.push(35);
