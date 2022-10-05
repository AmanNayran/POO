// 1. Atualize a implementação da classe Banco apresentada em sala de acordo com as seguintes instruções:

class Conta {
    numero: String;
	saldo: number;
    
	constructor(numero, saldoInicial) {
		this.numero = numero
		this.saldo = saldoInicial
	}
    
	sacar(valor) {
		if (this.saldo < valor)
        return false
		else
        this.saldo = this.saldo - valor
	}
    
    depositar(valor) {
		this.saldo = this.saldo + valor
    }
    
    consultarSaldo() {
		return this.saldo
    }
    
    transfeir(contaDestino, valor) {
        if(this.sacar(valor) == false)
        console.log('Saldo insuficiente')
        else
        contaDestino.depositar(valor)
    }
}

class Banco {
	contas: Conta[] = []
	
    // a. Altere o método inserir para que não seja possível contas com mesmo número;
	inserir(conta) {
		this.contas.push(conta)
	}
	
	consultar(numero) {
		let contaConsultada
		for (let conta of this.contas) {
			if (conta.numero == numero) {
				contaConsultada = conta
				break;
			}
		}
		return contaConsultada
	}

	consultarPorIndice(numero) {
		let indice = -1
		for (let i = 0; i < this.contas.length; i++) {
			if (this.contas[i].numero == numero) {
				indice = i
				break
			}
		}
		return indice
	}
	
	alterar(conta) {
		let indice = this.consultarPorIndice(conta.numero)
		if (indice != -1) {
			this.contas[indice] = conta
		}
	}
	
	excluir(numero) {
		let indice = this.consultarPorIndice(numero)
		
		if (indice != -1) {
			for (let i = indice; i < this.contas.length; i++) {
				this.contas[i] = this.contas[i+1]
			}
			this.contas.pop()
		} 
	}
	
	depositar(numero, valor) {
		let contaConsultada = this.consultar(numero)
		
		if (contaConsultada != null) {
			contaConsultada.depositar(valor)
		}
	}
	
	// b. sacar(numero: string, valor: number): pesquisa uma conta e realiza uma
	// operação de crédito com o valor passado.
	sacar(numero, valor) {
		let contaConsultada = this.consultar(numero)
		
		if (contaConsultada != null) {
			contaConsultada.sacar(valor)
		}
	}
	
	// c. transferir(numeroCredito: string, numeroDebito: string, valor: number):
	// realiza uma procura por ambas as contas e chama o método transferir de
	// uma delas passando a conta de débito e o valor como parâmetros;
	transferir(numeroCredito, numeroDebito, valor) {
		let contaCredito = this.consultar(numeroCredito)
		let contaDebito = this.consultar(numeroDebito)
		
		if (contaCredito != null && contaDebito != null) {
			contaCredito.sacar(valor)
			contaDebito.depositar(valor)
		}

	}

	// d. Crie 3 métodos: um que retorne a quantidade de contas, 
	totalContas() {
		return this.contas.length
	}

	// outro que retorne o total de dinheiro depositado em todas as contas. 
    totalSaldo() {
		let totalSaldo: number = 0;
		for (let conta of this.contas) {
			totalSaldo += conta.saldo;
		}
		return totalSaldo;
	}

	// Por fim, crie um métodoque retorne a média do saldo das contas chamando os dois métodos anteriores;
    media() {
		var mediaSaldo = (this.totalSaldo() / this.totalContas())
        return mediaSaldo
    }
}

let c1 = new Conta("1",12)
console.log(c1.saldo)

let c2 = new Conta("2",23)
console.log(c2.saldo)

let c3 = new Conta("3",34)
console.log(c3.saldo)

let banco: Banco = new Banco()

banco.inserir(c1)
banco.inserir(c2)
banco.inserir(c3)

banco.alterar(new Conta("1", 100))
banco.depositar("1", 1)
banco.sacar("1", 100)
console.log(banco.consultar("1").saldo)

banco.alterar(new Conta("2", 200))
banco.depositar("2", 2)
banco.sacar("2", 200)
console.log(banco.consultar("2").saldo)

banco.alterar(new Conta("3", 300))
banco.depositar("3", 3)
banco.sacar("3", 300)
console.log(banco.consultar("3").saldo)

banco.excluir("3")
console.log(banco.totalContas())

console.log(banco.media())