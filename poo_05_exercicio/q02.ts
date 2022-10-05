// 2. Crie uma implementação que simule um migroblog:

// a. Crie uma classe Postagem e nela:
class Postagem {
    
    // a. Crie os atributos:
    // 1. id do tipo number, representando o identificador da postagem;
    id: number
    // 2. texto do tipo string, representando um texto da postagem;
    texto: string
    // 3. quantidadeCurtidas do tipo number.
    quantidadeCurtidas: number
    
    constructor(id, texto, quantidadeCurtidas){
        this.id = id
        this.texto = texto
        this.quantidadeCurtidas = quantidadeCurtidas
    }
    
    // b. Crie um método chamado curtir que incrementa a quantidade curtidas;
    curtir(){
        this.quantidadeCurtidas++
    }
    
    // c. Crie um método chamado toString que retorna a concatenação da postagem com a quantidade de curtidas;
    toString(){
        return (this.texto + this.quantidadeCurtidas)
    }
}

// b. Crie uma classe Microblog e nela:
class Microblog {
    
    // a. Crie um array de classes Postagem;
    postagens : Postagem[] = []
    
    // b. Crie um método que inclua uma postagem passada como parâmetro no array de postagens;
    incluir(postagem){
        this.postagens.push(postagem)
    }
    
    busca(numero){
        let validaPostagem
        
        for (let postagem of this.postagens) {
            if (postagem.id == numero) {
                validaPostagem = postagem
                break
            }
        }
        return validaPostagem
    }

    buscaId(numero){
        let indice = -1

        for (let i = 0; i < this.postagens.length; i++){
            if(this.postagens[i].id == numero){
                indice = i
                break
            }
        }
        return indice
    }

    // c. Crie um método de excluir uma postagem que recebe um id
    // passado por parâmetro. Para isso, efetue uma busca pelo id nas
    // postagens do array e faça a exclusão de forma análoga à feita na classe Banco;
    excluir(id){
        let indice = this.buscaId(id)

        if (indice != -1){
            for (let i = indice; i < this.postagens.length; i++){
                this.postagens[i] = this.postagens[i+1]
            }
            this.postagens.pop()
        }
    } 
    
    // d. Crie um método que retorna um array com a postagem mais curtida.
    maisCurtidas(){
        let maisCurtidas = this.postagens[0].quantidadeCurtidas
        let maisCurtidas2 = this.postagens[0]

        for (let i :number = 0; i < this.postagens.length; i++){
            if (this.postagens[i].quantidadeCurtidas > maisCurtidas){
                maisCurtidas = this.postagens[i].quantidadeCurtidas
                maisCurtidas2 = this.postagens[i]
            }
        }
        return maisCurtidas2
    }
    
    // f. Crie um método toString que retorna a concatenação do “toString”
    // de todas as postagens.
    toString2(){
        let stringFinal = this.postagens[0].texto

        for(let i :number = 1; i < this.postagens.length; i++){
            stringFinal += this.postagens[i].texto 
        }
        return stringFinal
    }
    
    // e. Crie um método curtir em que se passa um id como parâmetro e a
    // classe microblog pesquisa a postagem e chama seu método curtir da própria postagem;
    curtir(id){
        let postagemConsulta = this.busca(id)

        if(postagemConsulta != null) {
            postagemConsulta.curtir()
        }
    }
}

let postagem = new Postagem(1,"\nPrimeiro Post!\n", 1)

console.log(postagem.toString())

postagem.curtir()
console.log(postagem.toString())

postagem.curtir()
console.log(postagem.toString())
