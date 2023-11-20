// armazenar 10 pessoas - Nome Completo e Ano de Nascimento
// apresentar as pessoas com idade maior de 30 anos
// criar uma função para calcular idade

import prompt from 'prompt-sync'
import { addAno, addNomes, anos, nomes } from './dados'
const input = prompt()

let cont: number = 0

while (cont < 5) {
    addNomes(input('Informe o nome da pessoa: '))
    addAno(parseInt(input('Informe o ano de nascimento: ')))
    cont = cont + 1
}

for (let index = 0; index < anos.length; index++) {
    let idade = 2023 - anos[index]

    if (idade > 30) {
        console.log(`${index + 1} - ${nomes[index]} - ${idade}`)
    }
}
