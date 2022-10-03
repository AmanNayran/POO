// 8. Altere a classe conta dos slides conforme as instruções abaixo:

class Conta {
    numero: string;
    saldo: number;

    constructor(numero: string, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
    }
    
    // a. Altere o método sacar de forma que ele retorne verdadeiro ou falso. Caso o
    // saque deixe saldo negativo, o mesmo não será realizado, retornando falso;
    sacar(valor: number) {
        if (this.saldo < valor)
        return false
		else
            this.saldo = this.saldo - valor;
	}
    depositar(valor: number): void {
        this.saldo = this.saldo + valor;
    }
    consultarSaldo(): number {
        return this.saldo;
    }
    
    // b. Altere o método transferir() para que retorne também um valor lógico e que
    // não seja feita a transferência caso o sacar() na conta origem não seja satisfeito;
    transfeir(contaDestino: Conta, valor: number) {
        if(this.sacar(valor) == false)
        console.log('Saldo insuficiente')
        else
        contaDestino.depositar(valor);
    }

}

// c. Verifique as diferentes operações implementadas.
let c1: Conta = new Conta("1",100);
let c2: Conta = new Conta("2",100);

console.log(c1.sacar(110));

c1.transfeir(c2, 200);
console.log(c1.consultarSaldo());
console.log(c2.consultarSaldo());