/*
To practice, we'll use the JSONPlaceholder API endpoints to get back json data. 

Steps:
1 - Make a request object

*/

const request = new XMLHttpRequest(); //this creates a request object.
//this object comes loades with different properties and methods.


//we track the progress of a request using a eventListener and a specific event called 'readystatechange', then we attach this to the object itself.
//this fires every time there's a state change in the request. "State change" means that the request is going through different phases and there's 4 in total.
request.addEventListener('readystatechange',  () => {
    //console.log(request, request.readyState); //I'm logging those out in the console. "request.readyState" gets us the state that the current request is in.
                                                //Check this out: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
    if(request.readyState === 4){ //the phase 4 means that it's ready to use it
        console.log(request.responseText);
    }
});


//setting up the request
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/'); //the open method takes 2 strings arguments: "the type of request we want to make", "the endpoint we want to get data from"

//actually send the request
request.send();