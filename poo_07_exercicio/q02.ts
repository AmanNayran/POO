// 2. Crie uma classe Calculadora com:

class Calculadora{
    // a. Dois tributos privados chamados representando dois operandos;
    private operador: number
    private operador1: number

    // b. Crie um construtor que inicializa os atributos;
    constructor(operador: number, operador1: number){
        this.operador = operador
        this.operador1 = operador1
    }

    // c. Crie um método que retorna a soma dos dois atributos;
    soma(){
        return console.log(this.operador + this.operador1)
    }
}

// d. Teste a classe.
let numeros: Calculadora = new Calculadora(1,2)

numeros.soma()