/*
Functions: 
    push -> placing data on to a stack
    pop -> removing the top element of the stack
    peek -> displaying the top element from the stack
    length -> determining how many elements are on the stack
*/

let letters = []; //this is the stack

let word = "racecar";

let reverseWord = "";

//put letters of the word into a stack
for(let i=0; i<word.length; i++){
    letters.push(word[i]);
}

//pop off the stack in reverse order
for(let i=0; i<word.length; i++){
    reverseWord = letters.pop()
}
