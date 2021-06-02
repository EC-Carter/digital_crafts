class Stack{

    constructor(){
        this.data = []; //instance var, is an empty array
    }

    push(item){
        this.data.push(item);
    }
    pop(item){
        return this.data.pop(item);

    }
    peek(){
        return this.data[this.data.length - 1];
    }
    length(){
        return this.data.length;
    }
}

let callStack = new Stack();

callStack.push(4)
callStack.push(45)

console.log(callStack.data);

let bracketSet1 = "{{{{(( )}}}}";
let bracketSet2 = "{{{{(( })}}}}";

let bracketTester = new Stack();

bracketTester.push("{");
bracketTester.push("{");
bracketTester.push("{");
bracketTester.push("{");
bracketTester.push("(");
bracketTester.push("(");

console.log(bracketTester.data)

//solution
const balancedBrackets = (string) => {

    let opening = {
        "(":true,
        "{":true,
        "[":true,
    }

    let closing = {
        ")":"(",
        "}":"{",
        "]":"["
    }

    let stack = new Stack();

    for( let i = 0; i <= string.length; i++){
        let char = string[i];
        if(opening[char]){
            stack.push(char);
        }

        if(char in closing){
            let lastChar = stack.pop();
                if(lastChar != closing[char]){
                    return false;
                }
        }

    }
    return stack.length()
}

