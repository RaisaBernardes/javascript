const $buttons = document.querySelectorAll("button")

$buttons.forEach((item) => {
    item.addEventListener('mousedown', function(event){
        //event.preventDefault()
        const value = item.innerText.trim()
        const $result = document.querySelector('.display') //the $ means I'm grabbing something from the DOM
        const resultText = $result.innerText.trim() 

        if(resultText == '0' || resultText == 'undefined' || resultText == 'Infinity'){
            $result.innerText = ''
        }

        if(value == '='){
            let solution = eval(resultText) //does the math
            $result.innerText = solution
            return true
        }

        if(value.toLowerCase() == "c"){
            $result.innerText = ''
            return true
        }

        $result.append(value) //O método append() permite adicionar conteúdo ao final de um elemento HTML. (concatenação)
    })
})