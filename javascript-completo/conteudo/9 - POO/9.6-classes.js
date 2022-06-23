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
        this.score = 0;
    }
    login(){
        console.log(this.email, 'just logged in.')
        return this //returns the object (for example, returns the object userOne down below)
    }
    logout(){
        console.log(this.email, 'just logged out.')
        return this
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'score is now ', this.score)
        return this
    }
}

//The "new" keyword:
// - creates a new empty object {}
// - sets the value of "this" to refer the new empty object
// - calls the constructor method

let userOne = new User('raisa@gmail.com', 'Raisa')
let userTwo = new User('clara@gmail.com', 'Clara')
let userThree = new User('anderson@hotmail.com', 'Anderson')

userOne.login();
userTwo.logout();


//Method chaining: execute a sequence of methods in one line.
// Steps:
// - Every method in the class should return "this"
// - reproduce the following logic:

userThree.login().updateScore().updateScore().logout();
