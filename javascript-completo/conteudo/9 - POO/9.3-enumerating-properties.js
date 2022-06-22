function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw')
    }
}

const circle = new Circle(10);

//Sometimes you need to iterate over or enumerate the properties in a object. We can to this using 
//for in loop.

for (let key in circle){ //It stores in "key" every property and method of circle. 
    console.log(key)
}


for (let key in circle){
    console.log(key, circle[key]) //accesses the value, not only the property
}

for (let key in circle){
    if(typeof circle[key] !== "function") //It'll return only properties, not functions
        console.log(key, circle[key]); 
}


const keys = Object.keys(circle); //It'll return all properties in an array
console.log(keys)


//To check if an object has a given property, we use the "in" operator.
if('radius' in circle){
    console.log('Circle has radius!')
}