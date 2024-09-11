function numerasledas(){
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1
    return numeroAleatorio
}

function adede() { 
    const numero = parseInt(document.getElementById("numero").value);
    const pegaNumeroAleatorio = numerasledas()

    if (numero == pegaNumeroAleatorio)
        alert("Você acertou")

    else alert("Você errou")
}