/*
This code explains how to use promises to manage our network requests and our functions that fire when the
requests are complete either resolved or rejected.
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

//Since the function "getTodos" returns a Promise, I can use the "then" function for data, and then the "catch" function for error
getTodos('todos/raisa.json').then(data => {
    console.log('promise resolved:', data)
}).catch(err => {
    console.log('promise rejected:', err)
})





//promise example

//A promise, basically, is something which is gonna take some time to do.
//There is 2 outcomes of a promise: 
// - The promise is gonna be resolved (we get the data we want)
// - Or the promise is gonna be rejected (we get an error some point and we reject the promise)


// const getSomething = () => {

//     return new Promise((resolve, reject) => { //the promise takes a function as a parameter. These two parameters are functions and they are built into the promis api in javascript
//         //here we do the network request, for example, fetch something
//         resolve('some data') //in the real world the argument would've be a real data.
//         //reject('some error') //in the real world we pass the error through
//     })
// }



//the promise is gonna fire the function inside of "then", when she resolve or reject the promise
//There are 2 functions parameters. 1st is for resolve, and 2nd is for reject.

// getSomething().then((data) => {
//     console.log(data)
// }, (err) => {
//     console.log(err)
// })


//----another way----

// getSomething().then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })

