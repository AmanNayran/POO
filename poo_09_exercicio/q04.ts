// 4. Imagine que você deve modelar várias figuras geométricas em TypeScript e que
// cada uma tem sua forma específica de calcular área e perímetro. Proponha e
// implemente uma hierarquia de classes usando uma classe abstrata chamada
// FiguraGeometrica e outras concretas: Quadrado, Triangulo, etc.

abstract class FiguraGeometrica {
    abstract area()
    abstract perimetro()
}

class Quadrado extends FiguraGeometrica{
    lado: number

    constructor(lado: number){
        super()
        this.lado = lado
    }

    area() {
        console.log(this.lado**2)
    }

    perimetro() {
        console.log(this.lado*4)
    }
}

class TrianguloEquilatero extends FiguraGeometrica{
    lado: number
    h: number

    constructor(lado: number, h: number){
        super()
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

let q: Quadrado = new Quadrado(5)
q.area()
q.perimetro()

let t: TrianguloEquilatero = new TrianguloEquilatero(4,4)
t.area()
t.perimetro()

