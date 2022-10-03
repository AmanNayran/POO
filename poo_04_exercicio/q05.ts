// 5. Crie uma classe chamada Saudacao que:

class Saudacao {
    
    // a. Contenha um atributo chamado texto e outro chamado destinatario, ambos String;
    texto : string
    destinatario : string
    
    // b. Crie um construtor que inicializa os dois atributos;
    constructor(texto, destinatario){
        this.texto = texto
        this.destinatario = destinatario
    }
    
    // c. Crie um método obterSaudacao() que retorne a concatenação dos dois atributos.
    obterSaudacao(){
        console.log(this.texto, this.destinatario)
    }
}

// d. Instancie uma classe Saudacao e teste seu método obterSaudacao().
let saudacao = new Saudacao("Bom dia", "João")
saudacao.obterSaudacao()