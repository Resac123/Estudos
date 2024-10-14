function soma(numero1,numero2){

    resultado = numero1 + numero2
    return resultado

}

console.log(soma(5, 10))
soma(8, 18)

const personagens = ['Steven', 'Ametista', 'Perola', 'Peridote']

personagens.push('Garnet')

console.log(` O nome do personagem é: ${personagens[2]} `)

function adicionar(){

    const personagens = ['Steven', 'Ametista', 'Perola', 'Peridote']
    const novoPersonagem = document.getElementById('personagem').value
    
    // //Adicionar um personagem no fim da lista
    //personagens.push(novoPersonagem)
    
    // //Adicionar um personagem no comeco da lista
    //personagens.unshift(novoPersonagem)

    // //exclui o ultimo
    //personagens.pop()

    // //exclui o primeiro
    //personagens.shift()

    // //atualizar um array
    //personagens[2] = 'garnet'

    console.log(personagens)

    personagens.forEach( function (pegaPersonagem) {
        console.log(`O nome do personagem é: ${pegaPersonagem}`)
    })

    console.log(personagens)

}

const numeros = [2,4,6,8]