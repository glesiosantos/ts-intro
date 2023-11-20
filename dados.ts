let nomes: Array<string> = []
let anos: Array<number> = []

function addNomes(nome: string): void {
    nomes.push(nome)
}

function addAno(ano: number): void {
    anos.push(ano)
}

export { nomes, anos, addNomes, addAno }