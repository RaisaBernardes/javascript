function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw')
    }
}

const Circle1 = new Function('radius', `
    this.radius = radius;
    this.draw = function(){
    console.log('draw')
    }
`);

const circle = new Circle1(1); //Te same as: Circle.call({}, 1) 

//----------Adding properties

circle.location = { x: 1 };//We can add properties do object dynamically, without declaring (because classes doesn't exist)
//the same as: circle['location'] = { x:1 } 



//----------Deleting properties
//A real world use case for this is when you a user object from a database and you want to return it to thee client
//but maybe that user object has certain properties you don't wanna send to the client, like passowrds, or credit card
//info. In that case, you'll dynamicaly delete one or more properties from an object.

delete circle.location;

