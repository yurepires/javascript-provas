function criptografia(mensagem, chave, converter){
    let mensagemCriptografada = []
    for(let i = 0; i < mensagem.length; i++){
        if(mensagem[i] != " "){
            mensagemCriptografada[i] = converter(mensagem[i], chave)
        }else{
            mensagemCriptografada[i] = " "
        }
    }
    return mensagemCriptografada
}

function cifraLetra(letra, chave){
    let alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    for(let i=0; i < alfabeto.length; i++){
        if(letra===alfabeto[i]){
            if(chave + i < alfabeto.length){
                let letraCriptografada = alfabeto[i + chave]
                return letraCriptografada
            }else{
                let letraCriptografada = alfabeto[(i + chave) - alfabeto.length]
                return letraCriptografada
            }
        }
    }
}

function decifraLetra(letra, chave){
    let alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    for(let i=0; i < alfabeto.length; i++){
        if(letra===alfabeto[i]){
            if(i + chave < alfabeto.length){
                let letraDescriptografada = alfabeto[i - chave]
                return letraDescriptografada
            }else{
                let letraDescriptografada = alfabeto[alfabeto.length - (i + chave)]
                return letraDescriptografada
            }
        }
    }
}

export default {criptografia, cifraLetra, decifraLetra}