const prompt = require("prompt-sync")()
console.clear()

// A ideia deste projeto é criar um programa que simule uma votação com todo o conteúdo visto no módulo até este momento.
// O programa deve:
// Receber votos até que o usuário diga que não tem mais ninguém para votar;
// Ter uma função chamada autorizaVoto(anoNascimento) retornando: "Negado`, "Opcional" ou "Obrigatório";
// Ter uma função chamada votacao(autorizacao, voto) que valida e contabiliza o voto (número entre 1 e 5) ou retorna a mensagem: "Você não pode votar", caso o voto não possa ser contabilizado;
// Contabilizar os votos de acordo com os significados:
// 1 = Candidato 1
// 2 = Candidato 2
// 3 = Candidato 3
// 4 = Voto Nulo
// 5 = Voto em Branco
// Ter uma função chamada exibirResultados() que deve mostrar:
// O total de votos para cada candidato
// O total de votos nulos
// O total de votos em branco

let candidato1 = 0
let candidato2 = 0
let candidato3 = 0
let votobranco = 0
let votonulo = 0
let resultados = 0



while (true) {


let nome = prompt('Digite seu nome: ')
let idade = +prompt('Digite o ano que você nasceu: ').trim()
let anoNascimento = 2022 - idade






function autorizaVoto (id) {

if (id >= 18) {

    console.log(`Seu VOTO é obrigatório!`)
    console.log()
    return true
    
}


else if (id > 16) {

    console.log(`Seu VOTO é OPICIONAL!`)
    return true
   

    
}

else
{console.log (`VOCÊ NÃO PODE VOTAR!`)
return false
}

}

let a = autorizaVoto(anoNascimento)
if (a == false){
break

}

console.log('Em quem você deseja votar?\n1 = Candidato 1\n2 = Candidato 2\n3 = Candidato 3\n4 = VOTO NULO\n5 = VOTO EM BRANCO')
let votacao = +prompt()

function voto (vot){
 

 if (vot == 1 )
{console.log(`VOTO EFETIVADO`)
candidato1++
}

if (vot == 2) {
candidato2++
console.log(`VOTO EFETIVADO`)

}

if (vot == 3) {
    candidato3++
    console.log(`VOTO EFETIVADO`)
    
    }

if (vot == 4) {
votonulo++
console.log(`VOTO EFETIVADO`)

}

if (vot == 5) {
    votobranco++
    console.log(`VOTO EFETIVADO`)
    
    }

else if (vot != 1 && vot != 2 && vot != 3 && vot != 4 && vot != 5) {
    console.log('voto invalido')
}



}
                                                                                        

voto(votacao)

function exibirresultado () {

console.log(`Candidato 1: ${candidato1}\nCandidato 2: ${candidato2}\nCandidato 3: ${candidato3} \nVoto Nulo: ${votonulo}\nVoto Branco: ${votobranco}`)

}

console.clear()
exibirresultado()



let votarnovamente = prompt('Deseja votar novamente? ')

if (votarnovamente == "sim" || votarnovamente == "s") {
    continue
}

else {
break
}


}