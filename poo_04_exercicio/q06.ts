// 6. Crie uma classe chamada Triangulo que:

class Triangulo {
    
    // a. Possua 3 atributos inteiros representando os lados;
    a : number
    b : number
    c : number
    
    constructor(a, b, c) {
        this.a = a
        this.b = b
        this.c = c
    }
    
    // b. Crie um método que retorna true se os lados formarem um triângulo de acordo com a regra: |b-c| < a < b+c;
    verifica(){
        if((this.b - this.c) < this.a && this.a < (this.b + this.c))
        return true;
        else
        return false;
        
        
    }

    // c. Crie 3 métodos: ehIsoceles(), ehEquilatero() e ehEscaleto() que retorne
    // verdadeiro caso o triângulo seja um dos tipos relacionados ao nome do
    // método. Eles devem chamar antes de tudo, o método da questão b. e
    // retornar false se esse método já retornar false também;
    ehIsoceles() {
        if(this.verifica() == true) {
            if((this.a == this.b) && (this.a != this.c) 
            || (this.a == this.c) && (this.a != this.b) 
            || (this.b == this.c) && (this.b != this.a))
            return true
            else 
            return false
        }
        else
        return false  
    }

    ehEquilatero() {
        if(this.verifica() == true) {
            if(this.a == this.b && this.b == this.c)
            return true
            else
            return false
        }
        else
        return false 
   }

   ehEscaleno() {
    if(this.verifica() == true) {
        if(this.a != this.b && this.a != this.c && this.b != this.c)
        return true
        else
        return false
    }
    else
    return false
}
}

// d. Instancie classes Triangulo de diferentes lados e seus métodos.
let iso = new Triangulo(1, 1, 2);
console.log(iso.ehIsoceles());
console.log(iso.ehEquilatero());
console.log(iso.ehEscaleno());
console.log("=-=-=-=");

let eql = new Triangulo(2, 2, 2);
console.log(eql.ehIsoceles());
console.log(eql.ehEquilatero());
console.log(eql.ehEscaleno());
console.log("=-=-=-=");

let esc = new Triangulo(2, 3, 4);
console.log(esc.ehIsoceles());
console.log(esc.ehEquilatero());
console.log(esc.ehEscaleno());