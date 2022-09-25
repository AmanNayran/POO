// 3. Crie uma função que receba como parâmetros um nome e um pronome de tratamento
// opcional. Caso esse último não seja fornecido, deve ser considerado o valor “Sr”. Ao final,
// imprima uma saudação semelhante a “Sra. Sávia”.

let saudação = (nome: string, pronome?: string) => {

    if (pronome == null)
    return console.log(`Olá, Sr. ${nome}!`)

    else
    return console.log(`Olá, ${pronome}. ${nome}!`)
    
}

saudação('Sávia')
saudação('Sávia', 'Sra')