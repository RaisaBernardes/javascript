
class User{
    constructor(email, name){ 
        this.email = email;
        this.name = name; 
        this.score = 0;
    }
    login(){
        console.log(this.email, 'just logged in.')
        return this 
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

class Admin extends User{
    deleteUser(user){
        users = users.filter(u => { //the filter() allows us to cycle through each element inside the array and then filter one or more of them out of the array
            return u.email != user.email; //if u.email is not equal to user.email it'll return true, and it won't filter out
        }) 
    }
}


let userOne = new User('raisa@gmail.com', 'Raisa')
let userTwo = new User('clara@gmail.com', 'Clara')
let admin = new Admin('shaun@gmail.com','Shaun')

let users = [userOne, userTwo, admin]

admin.deleteUser(userOne)

console.log(users)



