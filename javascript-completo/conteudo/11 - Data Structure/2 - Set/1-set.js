function mySet(){

    //the collection will hold the set
    let collection = [];

    //this method will check the presence of an element and return true or false
    this.has = function(element){
        return(collection.indexOf(element) !== -1); //if is not -1 is true
    };

    //this method will return all values in the set
    this.values = function(){
        return collection;
    };

    //this method will add an element to the set, but first it'll check if the set hasn't or has the element already
    this.add = function(element){
        if(!this.has(element)){ //checking
            collection.push(element);
            return true
        }
        return false
    };

    //this method will remove an element from a set
    this.remove = function(element){
        if(this.has(element)){
            index = collection.indexOf(element) //finding the index
            collection.splice(index, 1) //removing the element according to the index
            return true;
        }
        return false;
    };

    //this method will return the size of the collection
    this.size = function(){
        return collection.length;
    };

    //this method will return the union of two sets but will leave out any duplicates in the combination of the sets
    this.union = function(otherSet){
        var unionSet = new mySet();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){ // "e" represents the elements from "firstSet"
            unionSet.add(e); //the function "add" checks for duplicates itself
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    };

    //this method will return the intersection of two sets as a new set
    this.intersection = function(otherSet){
       var intersectionSet = new mySet();
       var  firstSet = this.values();
        
       firstSet.forEach(function(element){
            if(otherSet.has(element)){
                intersectionSet.add(element);
            }
        })
        return intersectionSet;
    }

    //this method will return the difference of two sets as a new set
    this.difference = function(otherSet){
       var firstSet = this.values();
       var differenceSet = new mySet();

        firstSet.forEach(function(element){
            if(!otherSet.has(element)){
                differenceSet.add(element)
            }
        })
        return differenceSet;
    }

    //this method will test if the set is a subset of a different set. I'll return true or false
    this.subset = function(otherSet){
        var firstSet = this.values();
        return firstSet.every(function(value){ //every = test whether all elements in the array pass the test implemented by the provided function
            return otherSet.has(value)
        })
    }

};

var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());

var setC = new Set();  
var setD = new Set();  
setC.add("a");  
setD.add("b");  
setD.add("c");  
setD.add("a");  
setD.add("d");  
console.log(setD.values())
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("d"));