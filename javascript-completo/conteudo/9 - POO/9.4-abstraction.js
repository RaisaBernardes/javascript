//Abstraction means: Hide the details and show the essentials
//When we set a property (this.color = color) inside of a function, we're turning it accessible to the world (outside the function). 
//To hide it, we can set it to a local variable (let color = 'red').

//Closure: determines what variables will be accessible to a inner function. "Scope" is temporary, but closure stays there. 

function Circle(radius){
    let color = 'red'; 
    
    this.radius = radius;

    let defaultLocation = {x:0, y:0}
    let computeOptimumLocation = function(){
        //...
    }
    
    this.draw = function(){
        computeOptimumLocation(); //computeOptimumLocation() is in the scope of the parent function, but in the closure of this inner function
        console.log('draw')
    }
}

//Accurately, color, defaultLocation and computeOptimumLocation aren't private members of the circle object, 
//but from a OOP point of view we can refer to them as private members of the circle object.

const circle = new Circle(10);

