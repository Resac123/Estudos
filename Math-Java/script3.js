//pegar o maior numero de uma lista de numeros
function calcular(){
    const numero1 = parseInt(document.getElementById("numero1").value);
    const numero2 = parseInt(document.getElementById("numero2").value);
    const numero3 = parseInt(document.getElementById("numero3").value);
    const numero4 = parseInt(document.getElementById("numero4").value);
    const resultado = document.getElementById("resultado")

    let maximo = Math.max(numero1,numero2,numero3,numero4)

    resultado.innerText = `O maximo é ${maximo}`

}