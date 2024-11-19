import criptografa from "./cesar.js"

let mensagem = criptografa.criptografia("oi bom dia", 3, criptografa.cifraLetra)

console.log("" + mensagem)

let mensagemDescriptografada = criptografa.criptografia(mensagem, 3, criptografa.decifraLetra)

console.log("" + mensagemDescriptografada)