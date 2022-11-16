// 8. Crie uma interface chamada IComparavel com um método chamado comparar que
// receba uma forma geométrica como parâmetro e retorna um inteiro como
// resultado. Implemente em cada uma das classes do exemplo anterior a interface
// retornando -1, 0 e 1 caso a área da forma seja menor, igual ou maior que a
// passada via parâmetro.

interface FiguraGeometrica {
    area()
}

interface IComparavel{
    comparar(figura: FiguraGeometrica)
}

class Quadrado implements FiguraGeometrica, IComparavel{
    lado: number
    
    constructor(lado: number){
        this.lado = lado
    }

    area() {
        return this.lado**2
    }

    comparar(q: Quadrado){
        if(this.area() < q.area())
        console.log(-1)
        else if(this.area() == q.area())
        console.log(0)
        else
        console.log(1)
    }
}

let q1 = new Quadrado(2)
let q2 = new Quadrado(1)

q1.comparar(q2)

class TrianguloEquilatero implements FiguraGeometrica, IComparavel{
    lado: number
    h: number

    constructor(lado: number, h: number){
        this.lado = lado
        this.h = h
    }
    
    area() {
        return (this.lado*this.h)/2 
    }

    comparar(t: TrianguloEquilatero){
        if(this.area() < t.area())
        console.log(-1)
        else if(this.area() == t.area())
        console.log(0)
        else
        console.log(1)
    }
}

let t1 = new TrianguloEquilatero(2,4)
let t2 = new TrianguloEquilatero(4,6)

t1.comparar(t2)