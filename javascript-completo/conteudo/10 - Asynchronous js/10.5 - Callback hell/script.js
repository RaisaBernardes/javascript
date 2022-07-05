/*

We have those three JSON files and what if we want to go out and get each one in turn, that is, we want to
request the first one and we want to wait until we get the data back for that first one so that we
can output it in the browser console before we start to go and get the second one, so once we've got the 
first one then we can start to make the request for the second one and we can output those to the browser
and then when that's done we can go out and make the request for the third one.

This context of waiting is quite common when you're making request to different APIs. Often you might need
to make a request to one API to get some data, and then use that data to make a request to another API, so 
we have to do it in turn.
*/


const getTodos = (resource, callback) => { //adding the "resource" parameter
   
    const request = new XMLHttpRequest(); 

    request.addEventListener('readystatechange',  () => {
        if(request.readyState === 4 && request.status === 200){ 
            const data = JSON.parse(request.responseText) 
            callback(undefined, data)
        } else if (request.readyState === 4){
            callback('could not fetch data', undefined); 
        }
    });

    request.open('GET', resource); //adding the "resource" argument
    request.send();
}

//This nesting context below is called callback hell (one callback inside of other callback).
//This is hard to maintain and read. A nice methodology to do instead of doing callback hell is PROMISES.
getTodos('todos/raisa.json', (err, data) => { //adding 'todos/raisa.json'
     console.log(data)
     getTodos('todos/mirella.json', (err, data) => {
        console.log(data)
            getTodos('todos/joao.json', (err, data) => {
                console.log(data)
       });
   });
});

