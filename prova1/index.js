import criptografa from "./cesar.js"


let chave = 19
let mensagem = criptografa.criptografia("oi bom dia", chave, criptografa.cifraLetra)

console.log("" + mensagem)

let mensagemDescriptografada = criptografa.criptografia(mensagem, chave, criptografa.decifraLetra)

console.log("" + mensagemDescriptografada)