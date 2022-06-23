
function User(email, name){
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function(){  //this prototypes points to Object
    this.online = true;
    console.log(this.email, 'has logged in')
}
User.prototype.logout = function(){ 
    this.online = false;
    console.log(this.email, 'has logged out')
}

function Admin(...args){
    User.apply(this, args); //This line is what makes the inheritance of User constructor. Args = [email, name]
    this.role = 'super admin';
}

Admin.prototype = Object.create(User.prototype); //Inheriting the prototypes functions (longin and logout) of User constructor.
//The Admins objects will point to the User.prototypes (inheritance). 

Admin.prototype.deleteUser = function(u){ //adding an additional functionality to Admin. (Only Admin objects can use it)
    users = users.filter(user => {
        return user.email != user.email
    })
}

let userOne = new User('raisa@gmail.com', 'Raisa') 
let userTwo = new User('clara@gmail.com', 'Clara')
let admin = new Admin('shaun@gmail.com', 'Shaun')

let users = [userOne, userTwo, admin]

console.log(userOne)
userTwo.login(); 