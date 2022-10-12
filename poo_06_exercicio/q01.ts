// 1. Crie uma classe Calculadora que tenha:
class Calculadora {
    
    // a. Dois atributos privados (operando1 e 2) do tipo number;
    private operando1: number
    private operando2: number
    
    // c. Um construtor onde são passados os operandos e que esses inicializam os atributos;
    constructor(operando1, operador2) {
        this.operando1 = operando1
        this.operando2 = operador2
    }
    
    // b. Dois métodos públicos, cada um representando uma operação básica;
    soma(){
        console.log(this.operando1 + this.operando2)
    }
    subtração(){
        console.log(this.operando1 - this.operando2)
    }

}

// Teste a classe calculadora e seus métodos. Tente acessar os atributos diretamente e verifique o que acontece.
const operacao = new Calculadora(1,2)

// operacao.operando1 = 3
// operacao.operando2 = 4

operacao.soma()
operacao.subtração()