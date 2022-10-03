// 9. Crie uma classe chamada Jogador e nela:



class Jogador {
    
    // a. Crie 3 atributos inteiros representando força, nível e pontos atuais;
    força: number
    nivel: number
    pontosAtuais: number
    
    // b. Crie um construtor no qual os 3 parâmetros são passados e inicialize os respectivos atributos;
    constructor(força,nivel,pontosAtuais) {
        this.força = força
        this.nivel = nivel
        this.pontosAtuais = pontosAtuais
    }
    
    // c. Crie um método chamado calcularAtaque. Nele, calcule e retorne o valor da
    // multiplicação de força pelo nível. Esse resultado é o dano de ataque do jogador;
    calcularAtaque(){
        let dano = this.força * this.nivel
        return dano
    }
    
    
    // d. Crie um método chamado atacar em que é passado um outro jogador
    // (atacado) como parâmetro. Nele e é feita a subtração do dano (método
    // calcularAtaque) dos pontos do atacado;
    
    // f. Altere o método atacar para usar o método está vivo e desconsiderar a
    // operação, ou seja, não atacar, caso o jogador passado por parâmetro não
    // esteja vivo.
    atacar(atacado: Jogador){
        if(atacado.estaVivo() == true)
        return atacado.pontosAtuais = atacado.pontosAtuais - this.calcularAtaque()
        else
        return false
    }
    
    // e. Crie um método chamado estaVivo que retorna true caso o atributo pontos
    // do jogador seja maior que zero e falso caso contrário.
    estaVivo(){
        if(this.pontosAtuais > 0)
        return true
        else
        return false
    }

    // g. Crie um método chamado toString() que retorna a representação textual do
    // produto concatenando todos os seus atributos.
    toString(){
        return console.log(
            '\nFicha do personagem:\n', 
            `Força: ${this.força}\n`, 
            `Nivel: ${this.nivel}\n`, 
            `Pontos Atuais: ${this.pontosAtuais}\n`)
    }
}
  

// h. Avalie em com testes dois jogadores instanciados e inicializados através do
// construtor. Utilize o método de ataque de cada jogador e ao final, verifique
// qual jogador tem mais pontos.
let player = new Jogador(10,1,8)
let player2 = new Jogador(8,1,12)
    
player.toString()
player2.toString()
    
console.log('\nAtaque player:', player.calcularAtaque())
console.log('Ataque player 2:', player2.calcularAtaque(),'\n')
    
//Round 1
//ataque player 1
console.log(player.atacar(player2))
console.log(player2.estaVivo())

//ataque player 2
console.log(player2.atacar(player))
console.log(player.estaVivo())

