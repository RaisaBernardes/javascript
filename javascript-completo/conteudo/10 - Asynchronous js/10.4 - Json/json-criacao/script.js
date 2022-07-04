const getTodos = (callback) => {
   
    const request = new XMLHttpRequest(); 

    request.addEventListener('readystatechange',  () => {
        //console.log(request, request.readyState); 
        if(request.readyState === 4 && request.status === 200){ 
            const data = JSON.parse(request.responseText) //this method takes in a json string and then convert it into javascript objects so we can use easily in the code.
            callback(undefined, data)
            //callback(undefined, request.responseText); //instead of passing the respondeText here first of all, we're going to take all the json data and turn it into a javascript object
        } else if (request.readyState === 4){
            callback('could not fetch data', undefined); 
        }
    });

    request.open('GET', 'todos.json'); //CONTENT ATTENTION 
    request.send();
}

getTodos((err, data) => { 
    console.log('callback fired')
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
});

