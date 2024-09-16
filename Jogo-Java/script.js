function numerasledas(){
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1
    return numeroAleatorio
}

function adede() {
    let palpite = ""
    let tentativas = 3
    const numero = numerasledas()

    do{
        const palpite = parseInt(prompt('Adivinhe o numero')) 
        if(palpite != numero){
            tentativas--
            alert(`Errou, voce ainda tem ${tentativas}`)
        }
    }
    while(palpite != numero)
 }

