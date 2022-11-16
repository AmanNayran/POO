// 6. Implemente as classes Funcionario, Gerente e Diretor conforme o diagrama exposto em sala:

// a. A classe funcionário deve ser abstrata e o método getBonificacao() abstrato;
abstract class Funcionario{
    salario: number

    constructor(salario: number){
        this.salario = salario
    }

    abstract getBonificacao()
}

// b. Na classe gerente o método bonificação deve retornar 40% do salário;
class Gerente extends Funcionario{
    getBonificacao(){
        console.log(this.salario * 0.4)
    }
}

// c. Em Diretor a bonificação deve ser 60% do salário.
class Diretor extends Funcionario{
    getBonificacao(){
        console.log(this.salario * 0.6)
    }
}

// d. Por fim, na classe presidente o método deve retornar 100% do salário + R$ 1.000,00.
class Presidente extends Funcionario{
    getBonificacao(){
        console.log(this.salario + 1000)
    }
}

let g: Gerente = new Gerente(100)
g.getBonificacao()
let d: Diretor = new Diretor(100)
d.getBonificacao()
let p: Presidente = new Presidente(100)
p.getBonificacao()