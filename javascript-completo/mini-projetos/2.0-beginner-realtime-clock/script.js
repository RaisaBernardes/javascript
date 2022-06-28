function displayTime() {
    let date = new Date();
    let hourBR = date.getHours().toLocaleString('pt-BR');;
    let hour = date.getHours().toLocaleString('en-US');
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let session = document.querySelector('span#session')

    if(hourBR > 12 && hourBR < 23){
        session.textContent = 'PM'
    }else{
        session.textContent = 'AM'
    }
    
    document.querySelector('span#hours').innerHTML = hour;
    document.querySelector('span#minutes').innerHTML = min;
    document.querySelector('span#seconds').textContent = sec;
}

setInterval(displayTime, 10);