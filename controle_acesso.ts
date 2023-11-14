import prompt from 'prompt-sync'

const input = prompt()
const usuarioSistema: number = 1234
const senhaUsuarioSistema: string = '9999'

let usuario: number
let senha: string

usuario = parseInt(input('Informe seu código de acesso:'))
senha = input('Informe a sua senha de acesso')

if (usuarioSistema !== usuario) {
    console.log('Usuário inválido!')
} else {
    if (senhaUsuarioSistema !== senha) {
        console.log('Senha Incorreta')
    } else {
        console.log('Acesso permitido')
    }
}

// if (usuarioSistema === usuario && senhaUsuarioSistema === senha) {
//     console.log('Acesso permitido')
// } else {
//     console.log('Usuário ou senha invalidas')
// }


