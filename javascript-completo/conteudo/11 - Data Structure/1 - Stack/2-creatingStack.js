//creates a stack   
let Stack = function(){
    this.count = 0;
    this.storage = {}; //empty object

    //Adds value onto the end of the stack
    this.push = function(value){
        this.storage[this.count] = value;
        this.count++;
    }

    //Removes and returns the value at the end of the stack
    this.pop = function(){
        if(this.count==0){
            return undefined;
        }
        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    } 

    //Returns the size/length of the stack
    this.size = function(){
        return this.count;
    }

    //Returns the value at the end of the stack
    this.peek = function(){
        return this.storage[this.count-1]
    }
}

    //testing
    let myStack = new Stack();

    myStack.push(1);
    myStack.push(2);
    console.log(myStack.peek());
    console.log(myStack.pop());
    console.log(myStack.peek());
    myStack.push("Testing a new element");
    console.log(myStack.size());
    console.log(myStack.peek());
    console.log(myStack.pop());
    console.log(myStack.peek());

