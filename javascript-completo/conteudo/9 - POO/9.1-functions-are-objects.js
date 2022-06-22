//Every object in JS has a property called constructor, and that references the function 
//that was used to create the object

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
