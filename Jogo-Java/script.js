function numerasledas(){
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1
    return numeroAleatorio
}

function adede() {
    const palpite = ""
    const numero = numerasledas()

    do{
        const palpite = parseInt(prompt('Adivinhe o numero')) 
        if(palpite != numero)
            alert('Errou')
    }
    while(palpite != numero)
 }

