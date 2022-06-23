
function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
}


User.prototype.login = function(){ 
    this.online = true;
    console.log(this.email, 'has logged in')
}
User.prototype.logout = function(){ 
    this.online = false;
    console.log(this.email, 'has logged out')
}


let userOne = new User('raisa@gmail.com', 'Raisa') 
let userTwo = new User('clara@gmail.com', 'Clara')

console.log(userOne)
userTwo.login(); 