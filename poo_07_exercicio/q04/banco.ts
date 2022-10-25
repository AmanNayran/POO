export class Conta {
    private numero: string
	private saldo: number
    
	constructor(numero: string, saldoInicial: number) {
		this.numero = numero
		this.saldo = saldoInicial
	}
    
	sacar(valor: number) {
		if (this.saldo < valor)
        return false
		else
        this.saldo = this.saldo - valor
	}
    
    depositar(valor: number) {
		this.saldo = this.saldo + valor
    }
    
    consultarSaldo() {
		return this.saldo
    }
    
    transfeir(contaDestino: Conta, valor: number) {
        if(this.sacar(valor) == false)
        console.log('Saldo insuficiente')
        else
        contaDestino.depositar(valor)
    }
}

class Poupanca extends Conta {
	private _taxaJuros: number

	constructor(numero: string, saldo: number, taxaJuros: number ) {
		super(numero, saldo)
		this._taxaJuros = taxaJuros
	}
	
	get taxaJuros(): number {
		return this._taxaJuros
	}

	public renderJuros(): void {
		this.depositar(this.saldo * this._taxaJuros/100)
	}
}

export class Banco {
	private contas: Conta[] = []

	inserir(conta: Conta) {
		this.contas.push(conta)
	}
	
	consultar(numero: string): Conta {
		let contaConsultada!: Conta

		for (let conta of this.contas){
			if (conta.numero == numero){
				contaConsultada = conta
				break
			}
		}
		return contaConsultada
	}

	private consultarPorIndice(numero: string) {
		let indice = -1

		for (let i = 0; i < this.contas.length; i++){
			if (this.contas[i].numero == numero){
				indice = i
				break
			}
		}
		return indice
	}
	
	alterar(conta: Conta) {
		let indice: number = this.consultarPorIndice(conta.numero)
		
		if (indice != -1){
			this.contas[indice] = conta
		}
	}
	
	excluir(numero: string) {
		let indice = this.consultarPorIndice(numero)
		
		if (indice != -1){
			for (let i = indice; i < this.contas.length; i++){
				this.contas[i] = this.contas[i+1]
			}
			this.contas.pop()
		} 
	}
	
	depositar(numero: string, valor: number) {
		let contaConsultada = this.consultar(numero)
		
		if (contaConsultada != null){
			contaConsultada.depositar(valor)
		}
	}
	
	sacar(numero: string, valor: number) {
		let contaConsultada = this.consultar(numero)
		
		if (contaConsultada != null){
			contaConsultada.sacar(valor)
		}
	}
	
	transferir(numeroCredito: string, numeroDebito: string, valor: number) {
		let contaCredito = this.consultar(numeroCredito)
		let contaDebito = this.consultar(numeroDebito)
		
		if (contaCredito != null && contaDebito != null){
			contaCredito.sacar(valor)
			contaDebito.depositar(valor)
		}

	}

	totalContas() {
		return this.contas.length
	}
 
    totalSaldo() {
		let totalSaldo: number = 0

		for (let conta of this.contas){
			totalSaldo += conta.saldo
		}
		return totalSaldo
	}

    media() {
		let mediaSaldo = (this.totalSaldo() / this.totalContas())

        return mediaSaldo
    }

	renderJuros(numero: String){
		let contaConsultada = this.consultar(numero)
		
		if (contaConsultada instanceof Poupanca){
			let poupanca: Poupanca = <Poupanca> contaConsultada
			poupanca.renderJuros()
		}
	}
}
