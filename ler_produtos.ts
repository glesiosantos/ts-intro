import prompt from 'prompt-sync'

const input = prompt()

let codigoProduto: number[] = []
let precoProduto: number[] = []
let maiorValor: number = 0
let mediaPreco: number = 0

let cont: number = 0

while (cont <= 15) {
    codigoProduto[cont] = parseInt(input('Informe o código do produto: '))
    precoProduto[cont] = parseFloat(input('Informe o valor do produto: '))
    cont++
}

for (let index = 0; index < precoProduto.length; index++) {
    if (precoProduto[index] > maiorValor) {
        maiorValor = precoProduto[index]
    }

    mediaPreco = (mediaPreco + precoProduto[0]) / precoProduto.length
}

console.log(`O maior valor de produto é R$ ${maiorValor.toFixed(2)}`)
console.log(`A media do valores é R$ ${mediaPreco.toFixed(2)}`)

