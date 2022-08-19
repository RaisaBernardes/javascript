
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
