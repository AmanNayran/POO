// Considerando o exemplo da classe Retangulo dos slides, implemente um método
// adicional chamado que calcule o perímetro do retângulo e altere a classe
// TestaRetangulo para exibir o cálculo do perímetro.

class Retangulo{
    l1: number
    l2: number

    calcularPerimetro(): number {
        return (this.l1 * 2) + (this.l2 * 2)
    }
}

var TestaRetangulo : Retangulo
TestaRetangulo = new Retangulo()

TestaRetangulo.l1 = 10
TestaRetangulo.l2 = 20

console.log(TestaRetangulo.calcularPerimetro())
