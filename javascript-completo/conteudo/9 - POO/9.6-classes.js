/*
- We use class to create multiple objects of the same type.
- Class is just a syntax that emulates the IDEA of classes. Under the hood, classes do the same thing as 
  the prototypes model. 
- Classes in JS are like blueprints.
*/

class User{
    constructor(email, name){ //A constructor function is the function that actually constructs our objects or create them.
        this.email = email;
        this.name = name; 
    }
    login(){
        console.log(this.email, 'just logged in.')
    }
    logout(){
        console.log(this.email, 'just logged out.')
    }
}

//The "new" keyword:
// - creates a new empty object {}
// - sets the value of "this" to refer the new empty object
// - calls the constructor method

let userOne = new User('raisa@gmail.com', 'Raisa')
let userTwo = new User('clara@gmail.com', 'Clara')

userOne.login();
userTwo.logout();

