function Queue(){
    collection = []

    this.print= function(){
        console.log(collection);
    }

    //Inserting element
    this.enqueue = function(element){
        collection.push(element);
    }

    //Removing element (FIFO)
    this.dequeue = function(){
        return collection.shift(); /*The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array*/
    }

    //Returns the element in the front of the array without removing it
    this.front = function(){
        return collection[0];
    }

    //Returns the size of the element
    this.size = function(){
        return collection.length;
    }

    //Check if is empty
    this.isEmpty = function(){
        return (collection.length === 0);
    }

}

var q = new Queue();

q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
q.front();
q.print();

//In the priority queue you pass the element into the queue, but also the priority of the element. If the element is the same number, it will behave like a normal queue
function PriorityQueue(){
    var collection = [];
   
    this.printCollection = function(){
        (console.log(collection));
    }

    this.enqueue = function(element){
        if(this.isEmpty()){
            collection.push(element);
        } else { //check the priorities of the elements
            var added = false;
            for(var i=0; i< collection.length; i++){
                if(element[1] < collection[i][1]){ //checking priorities
                    collection.splice(i,0,element); /*splice() lets you change the content of your array by removing or replacing existing elements with new ones.*/
                    added = true;
                    break;
                }
            }
            if(!added){
                collection.push(element);
            }
        }
    };

    this.dequeue = function(){
        var value = collection.shift();
        return value[0];
    };
    this.front = function(){
        return collection[0];
    };
    this.size = function(){
        return collection.length;
    };
    this.isEmpty = function(){
        return (collection.length === 0);
    };
};

var pq = new PriorityQueue(); 
pq.enqueue(['Beau Carnes', 2]); 
pq.enqueue(['Quincy Larson', 3]);
pq.enqueue(['Ewa Mitulska-Wójcik', 1])
pq.enqueue(['Briana Swift', 2])
pq.printCollection();
pq.dequeue();
console.log(pq.front());
pq.printCollection();
