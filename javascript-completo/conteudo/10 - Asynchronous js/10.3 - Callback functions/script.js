const getTodos = (callback) => {
   
    const request = new XMLHttpRequest(); 

    request.addEventListener('readystatechange',  () => {
        //console.log(request, request.readyState); 
        if(request.readyState === 4 && request.status === 200){ 
            callback(undefined, request.responseText); //undefined for the error
        } else if (request.readyState === 4){
            callback('could not fetch data', undefined); //undefined for the data
        }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/'); 
    request.send();
}

getTodos((err, data) => { //when we do callbacks like this, is a convention do to the error first and then the data
    console.log('callback fired')
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
});

