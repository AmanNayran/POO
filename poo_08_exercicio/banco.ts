import {PoupancaInvalidaError, ContaJaCadastradaError, SaldoInsuficienteError, ContaInexistenteError, AplicacaoError, ValorInvalidoError } from "./excecoes"

export class Conta {
	private _numero: string
	private _saldo: number

	constructor(numero: string, saldoInicial: number) {
		this._numero = numero
		this._saldo = saldoInicial
	}

	get numero(): string {
		return this._numero
	}

	get saldo(): number {
		return this._saldo
	}

	sacar(valor: number) {
		this.validarValor(valor)
		if (this._saldo < valor) {
			throw new SaldoInsuficienteError('Saldo insuficiente!');
		}
		this._saldo = this._saldo - valor
	}

	depositar(valor: number) {
		this.validarValor(valor)
		this._saldo = this._saldo + valor
	}

	transferir(contaDestino: Conta, valor: number) {
		this.sacar(valor)
		contaDestino.depositar(valor)
	}

	private validarValor(valor:number) {
		if (isNaN(valor) || valor <= 0) { 
			throw new ValorInvalidoError('Valor inválido!')
		}
	}
}

export class Poupanca extends Conta {
	private _taxaJuros: number

	constructor(numero: string, saldo: number, taxaJuros: number) {
		super(numero, saldo)
		this._taxaJuros = taxaJuros
	}

	renderJuros() {
		this.depositar(this.saldo * this._taxaJuros / 100)
	}

	get taxaJuros(): number {
		return this._taxaJuros
	}
}

export class Banco {
	private _contas: Conta[] = [];

	inserir(conta: Conta) {
		try {
			this.consultar(conta.numero)
			throw new ContaJaCadastradaError('Já cadastrada!')
		} catch (e: any) {
			if (e instanceof ContaInexistenteError) {
				this._contas.push(conta)
			}
		}
	}

	consultar(numero: string): Conta {
		let contaConsultada!: Conta
		for (let conta of this._contas) {
			if (conta.numero == numero) {
				contaConsultada = conta
				break
			}
		}
		if (!contaConsultada) {
			throw new ContaInexistenteError('Conta inexistente!')
		}

		return contaConsultada
	}

	private consultarPorIndice(numero: string): number {
		let indice: number = -1
		for (let i: number = 0; i < this._contas.length; i++) {
			if (this._contas[i].numero == numero) {
				indice = i
				break
			}
		}
		if (indice == -1) {
			throw new ContaInexistenteError('Conta inexistente!')
		}
		return indice
	}

	alterar(conta: Conta) {
		let indice: number = this.consultarPorIndice(conta.numero)
		this._contas[indice] = conta;
	}

	excluir(numero: string) {
		let indice: number = this.consultarPorIndice(numero)
		for (let i: number = indice; i < this._contas.length; i++) {
			this._contas[i] = this._contas[i + 1]
		}

		this._contas.pop()
	}

	depositar(numero: string, valor: number) {
		let contaConsultada = this.consultar(numero)
		contaConsultada.depositar(valor)
	}

	sacar(numero: string, valor: number): void {
		let contaConsultada = this.consultar(numero)
		contaConsultada.sacar(valor)
	}

	transferir(numeroDebito: string, numeroCredito: string, valor: number) {
		let contaCredito: Conta = this.consultar(numeroCredito)
		let contaDebito: Conta = this.consultar(numeroDebito)
		contaDebito.transferir(contaCredito, valor)
	}

	totalContas(): number {
		return this._contas.length
	}

	totalSaldo() {
		let totalSaldo: number = 0

		for (let conta of this._contas){
			totalSaldo += conta.saldo
		}
		return totalSaldo
	}

	media() {
		let mediaSaldo = (this.totalSaldo() / this.totalContas())
        return mediaSaldo
    }

	renderJuros(numero: string) {
		let contaConsultada = this.consultar(numero)

		if (!(contaConsultada instanceof Poupanca)) {
			throw new PoupancaInvalidaError('Não é uma poupança!')
		}
		let poupanca: Poupanca = <Poupanca> contaConsultada
		poupanca.renderJuros()
	}
}