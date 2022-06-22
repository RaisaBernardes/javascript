function Circle(radius){
    //this. referers to the new circle object
    this.radius = radius;

    let defaultLocation = { x:0, y:0 }

    this.getDefaultLocation = function() {
        return defaultLocation;
    }
    
    
    this.draw = function(){
        console.log('draw')
    }
    
    Object.defineProperty(this, 'defaultLocation', {
        get: function(){ //when we call circle.defaultLocation, this function will be called
            return defaultLocation; //defaultLocation is part of the closure of the inner function
        },
        set: function(value){
            if(!value.x || !value.y){ //validation
                throw new Error('Invalid Location.')
            }
            defaultLocation = value;
        }
    })

}


const circle = new Circle(10);

circle.defaultLocation = 1;