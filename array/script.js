const futuro = ['triste rico', 'feliz rico', 'feliz pobre', 'triste pobre', 'morreu cedo']

function NumeroAleatorio(){
    const numerao = Math.floor(Math.random() * futuro.length)
    return numerao
}

function sortearFuturo(){
    let fetero = NumeroAleatorio
    alert(futuro[fetero])
}