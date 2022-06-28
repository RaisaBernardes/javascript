'use strict';

function displayTime() {
    let date = new Date();
    let hourBR = date.getHours();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let session = document.querySelector('span#session')

    if(hourBR > 12 && hourBR < 23){
        session.textContent = 'PM'
    }else{
        session.textContent = 'AM'
    }

    let hourFormat = ("00" + hour).slice(-2);
    let minFormat = ("00" + min).slice(-2);
    let secFormat = ("00" + sec).slice(-2);
    
    document.querySelector('span#hours').innerHTML = hourFormat;
    document.querySelector('span#minutes').innerHTML = minFormat;
    document.querySelector('span#seconds').textContent = secFormat;
}

setInterval(displayTime, 10);