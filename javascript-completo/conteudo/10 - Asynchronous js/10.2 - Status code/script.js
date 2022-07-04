/*
Check this out for verify each response status code: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
*/

const request = new XMLHttpRequest(); 


request.addEventListener('readystatechange',  () => {
    //console.log(request, request.readyState); 
    if(request.readyState === 4 && request.status === 200){ //200 code means everything is ok with the response
        console.log(request.responseText);
    } else if (request.readyState === 4){
        //if the ready state is still equal to 4 but the status isn't 200 so something's maybe not okay, then we can fire this code block over here. This means the request is finished but there's been some kind of problem along the way and we probably don't have any kind of response text.
        console.log('could not fetch the data')
    }
});


request.open('GET', 'https://jsonplaceholder.typicode.com/todos/'); 
request.send();