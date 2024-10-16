function didi() {
    const numeros = [10, 100, 1000, 10000]
    const novonumero = document.getElementById("numerado").value
    
    numeros.forEach(function (pegarnumeros) {
        console.log(novonumero * pegarnumeros)
    })
}