class Stack{
    constuctor(){
        this.data = [4,6,7,8,9];
    }

    pop(){
        //return data[this.data.length];
        return this.data.pop();
    }
    push(val){
        this.data.push(val);
    }

    peek(){
        return this.data[this.data.length-1];
    }
}

module.exports = Stack;