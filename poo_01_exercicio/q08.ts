// Crie uma classe Circulo que possua um atributo raio. Crie dois métodos que
// calculam a área e o perímetro. Instancie um objeto dessa classe, atribua um valor
// ao raio e exiba a área e o perímetro chamando os dois métodos definidos.

class Circulo{
    raio: number

    calcularArea(): number {
        return (this.raio ** 2) * 3.14
    }

    calcularPerimetro(): number{
        return (this.raio * 3.14 * 2)
    }
}

var circulo : Circulo
circulo = new Circulo()

circulo.raio = 5

console.log(circulo.calcularArea(), circulo.calcularPerimetro())
