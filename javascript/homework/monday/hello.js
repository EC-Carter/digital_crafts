function hello(name = "world"){
    console.log(`Hello, ${name} !`)
}

//when I run like this I get a weird undefined printed after the greetng??
// greeting = hello();
// console.log(greeting);

hello("friend")