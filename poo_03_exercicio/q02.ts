// 2. Crie uma função que recebe como parâmetro um número 
// e retorna true se o número for primo e false caso contrário.

let i = 0
let ehPrimo = (num) => {

    for (i = 2; i < num; i++) {
        if (num % i == 0)
        return console.log(false)
    }  
    return console.log(true)
    
}

ehPrimo(8)
ehPrimo(11)
