/*
One of the best things about promoses is that we can chain them together so we can perform one asynchronous 
task after another in order we've seen how to do that using callbacks hell but chaining promises
gives us a much cleaner and easier way to do it.
*/
const getTodos = (resource) => {
   
    return new Promise((resolve, reject) => {
        
        const request = new XMLHttpRequest(); 

        request.addEventListener('readystatechange',  () => {
            if(request.readyState === 4 && request.status === 200){ 
                const data = JSON.parse(request.responseText) 
                resolve(data)
            } else if (request.readyState === 4){
                reject('error getting resource')
            }
        });

        request.open('GET', resource); 
        request.send();
    })
}

//Chaining promises

getTodos('todos/raisa.json').then(data => {
    console.log('Promise 1 resolved:', data);
    return getTodos('todos/mirella.json');
}).then(data => {
    console.log('Promise 2 resolved.', data)
    return getTodos('todos/joao.json');
}).then(data => {
    console.log('Promise 3 resolved.', data)
}).catch(err => { //this catch at the end catches any error. we don't have to rewrite it after every "then"
    console.log('promise rejected:', err)
})



