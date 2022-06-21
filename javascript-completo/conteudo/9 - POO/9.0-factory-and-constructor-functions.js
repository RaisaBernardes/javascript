/*
Creating 2 objects with the same literal syntax is not a problem, but ONLY if it hasn't a function in it.
The solution to this issue is to use a factory function or a constrution.
*/

//Factory function
function createCircle(radius){
    return {
        radius,
        draw: function(){
            console.log('draw')
        }
    }
}

const circle = createCircle(1);
circle.draw()


// Constructor function
function Circle(radius){ //It's convention the name of the constructor start with an Uppercase letter
    this.radius = radius; //"this" is a reference to a object that is executing this peace of code
    this.draw = function(){
        console.log('draw')
    }
    //return this //This behavior (return this) will happen automaticaly because of the "new" keyword below.
}

const another = new Circle(1) 
//The keyword "new" will create an empty object, and the word "this" in the constructor function will point to that object.
//If I remove the "new", the "this" keyword in the constructor function will point to Window object

/*
To sum up:

If it returns a object, we refer to the function as a factory function.
If it uses "this" keyword along with the "new" operator we refer to that function as a constructor function

*/