//All this prototype logic happens automatically when we use the "class" keyword

function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
}

//Accessing the prototype
User.prototype.login = function(){ //we are defining this method on the prototype of the User
    this.online = true;
    console.log(this.email, 'has logged in')
}
User.prototype.logout = function(){ //we are defining this method on the prototype of the User
    this.online = false;
    console.log(this.email, 'has logged out')
}
//we can use these methods as if they were attached in the constructor

let userOne = new User('raisa@gmail.com', 'Raisa') //instances can't access the prototype property (Ex.: userOne.prototype), just the constructor
let userTwo = new User('clara@gmail.com', 'Clara')

console.log(userOne)
userTwo.login(); //Using the prototype method