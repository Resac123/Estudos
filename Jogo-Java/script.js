function numerasledas(){
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1
    return numeroAleatorio
}

function adede() { 
    const pegaNumeroAleatorio = numerasledas()

    do{
        const achue = prompt("Adivinhe o numero")
    }
    while(achue != pegaNumeroAleatorio)
}