/*
Primitive & Reference types: (They differ on how they are stored and used in memory)

Primitive types are stored in stack. They are:
- numbers
- strings
- Booleans
- null (Explicitly set a variable with no value)
- undefined (For variables that have not yet been defined)
- symbols

Reference types are stored in the Heap memory. They are:
- All types of objects
- Object literals
- Arrays
- Functions
- Dates
- all other objects
*/

//Creates 2 variables in the stack (separately)
let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne: ${scoreOne}`, `scoreTwo ${scoreTwo}`)
scoreOne = 100; //This won't affect the scoreTwo variable. scoreTwo still be 50 
console.log(`scoreOne: ${scoreOne}`, `scoreTwo ${scoreTwo}`)

//Reference values. 
const userOnw =  {name: 'Raisa', age: 30}
const userTwo = userOne //There is two variables that points to ONE reference on the Heap. 
console.log(userOne, userTwo)

userOne.name = 'Larissa' //When I change the value of one, automaticaly I change the value of the other.
console.log(UserOne, userTwo)