// 7. Refaça a questão 04 do exercício usando interfaces com os métodos propostos
// em vez de herança. Crie também uma classe de teste que instancie e teste
// diferentes formas geométricas.

interface FiguraGeometrica {
    area()
    perimetro()
}

class Quadrado implements FiguraGeometrica{
    lado: number

    constructor(lado: number){
        this.lado = lado
    }

    area() {
        console.log(this.lado**2)
    }

    perimetro() {
        console.log(this.lado*4)
    }
}

class TrianguloEquilatero implements FiguraGeometrica{
    lado: number
    h: number

    constructor(lado: number, h: number){
        this.lado = lado
        this.h = h
    }
    
    area() {
        console.log((this.lado*this.h)/2)  
    }
    
    perimetro() {
        console.log(this.lado*3)  
    }
}
