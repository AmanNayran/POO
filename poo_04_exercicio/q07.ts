// 7. Uma classe Equipamento com:
class Equipamento {
    
    // a. um atributo ligado (tipo boolean)
    ligado : boolean
    
    constructor(ligado){
        this.ligado = ligado
    }
    
    // b. dois métodos liga() e desliga(). O método liga torna o atributo ligado true e
    // o método desliga torna o atributo ligado false.
    liga(){
        return this.ligado = true
    }
    desliga(){
        return this.ligado = false
    }

    // c. Crie um método chamado inverte(), que muda o status atual (se ligado,
    // desliga...se desligado, liga)
    inverte(){
        if(this.ligado == true)
        return this.ligado = false
        else
        return this.ligado = true
    }
    
    // d. Crie um método que estaLigado() que retorna o valor do atributo ligado
    estaLigado(){
        return this.ligado
    }
    
    // e. Altere o comportamento dos métodos liga para caso o equipamento já
    // esteja ligado, não ligue novamente. Faça o mesmo com o método desligar.
    altera(){
        if(this.ligado == true)
        return this.ligado = true
        else
        return this.ligado = false
    }
}

// f. Instancie uma classe Equipamento e teste todos os seus métodos.
let equipamento= new Equipamento(false)

console.log(equipamento.liga())
console.log(equipamento.desliga())
console.log(equipamento.estaLigado())
console.log(equipamento.inverte())
console.log(equipamento.altera())