// 3. Crie uma classe chamada CalculadoraCientifica que herda da classe Calculadora do exercício passado e:
class Calculadora{
    private operador: number
    private operador1: number

    constructor(operador: number, operador1: number){
        this.operador = operador
        this.operador1 = operador1
    }
    
    soma(){
        return this.operador + this.operador1
    }
}

class CalculadoraCientifica extends Calculadora{
    constructor(operador: number, operador1: number){
        super(operador,operador1)
    }

    // a. Implemente um método chamado exponenciar que retorne o primeiro operando elevado ao segundo;
    exponenciar(operador: number, operador1: number){
        return console.log(operador ** operador1)
    }
}

// b. Teste a classe;

let numeros: CalculadoraCientifica = new CalculadoraCientifica(1,2)

numeros.exponenciar(1,2)

// c. Foi necessária alguma modificação em Calculadora para o acesso aos atributos?
// Não