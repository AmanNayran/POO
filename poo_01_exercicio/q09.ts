// Crie uma classe chamada SituacaoFinanceira com os atributos valorCreditos e
// valorDebitos. Crie um método chamado saldo() que retorna/calcula a diferença
// entre crédito e débito. Instancie uma classe SituacaoFinanceira, inicialize os dois
// atributos e exiba o resultado do método saldo().

class SituacaoFinanceira {
    valorCreditos: number
    valorDebitos: number
  
    saldo(): number{
        return this.valorCreditos - this.valorDebitos
    }
}
  
var sf: SituacaoFinanceira
sf = new SituacaoFinanceira()

sf.valorCreditos = 412
sf.valorDebitos = 72

console.log(sf.saldo())
