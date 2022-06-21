//object literals

let user = {
    name: 'Crystal',
    age: 30,
    email: 'crystal@gmail.com',
    location: 'Berlin',
    blogs: ['why mac & cheese rules', '10 things to make with marmite']
};

//Ways to access the properties os an object

console.log(user)
console.log(user.name) //the same as console.log(user['name'])

const key = 'location'
console.log(user[key]) //the same as user['location']


//Updating a value of an object:
user.age = 35

user['name'] = 'Chun-li'


console.log(typeof user) //will return "object"
