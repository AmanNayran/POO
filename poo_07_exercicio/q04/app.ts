// 3. Crie um arquivo chamado app.ts que tenha leitura de dados e um loop semelhante
// ao demonstrado abaixo e implemente todas as funcionalidades da classe banco:

import { Conta, Banco } from "./banco";

const input = require('prompt-sync')({sinint: true})

let b: Banco = new Banco();
let opcao: String = ''
do {
	console.log('\nBem vindo\nDigite uma opção:');
	console.log(
		'1 - Cadastrar 2 - Consultar 3 - Sacar\n' +
		'4 - Depositar 5 - Excluir 6 - Transferir\n' +
		'7 – Totalizações 8 - Render Juros' +
		'0 - Sair\n')

	opcao = input("Opção:")
	switch (opcao) {
		case "1":
			inserir()
			break
		case "2":
			consultar()
			break
		case "3":
			sacar()
			break
		case "4":
			depositar()
			break
		case "5":
			excluir()
			break
		case "6":
			transferir()
			break
		case "7":
			totalizacoes()
			break
		case "8":
			renderJuros()
			break
	}
	input("Operação finalizada. Digite <enter>")
} while (opcao != "0")
console.log("Aplicação encerrada")

function inserir() {
	console.log("\nCadastrar conta\n")
	let numero: string = input('Digite o número da conta: ')
	let conta: Conta
	conta = new Conta(numero, 0)
	b.inserir(conta)
}

function consultar() {
	console.log("\nConsultar conta\n")
    let numero = input('Digite o número da conta: ')
    let conta = b.consultar(numero)
    exibirConta(numero)
}

function sacar() {
    console.log("\nSacar:\n")
    let numero: string = input('Digite o número da conta: ')
    let valorStr: string = input('Digite o valor do saque: ')
    let valor: number = parseFloat(valorStr)
    b.sacar(numero, valor)
    exibirConta(numero)
}

function depositar() {
    console.log("\nDepositar:\n");
    let numero: string = input('Digite o número da conta: ')
    let valorStr: string = input('Digite o valor do depósito: ')
    let valor: number = parseFloat(valorStr)
    b.depositar(numero, valor)
    exibirConta(numero)
}

function excluir() {
    console.log("\nExcluir:\n")
    let numero: string = input('Digite o número da conta: ')
    b.excluir(numero)
}

function transferir() {
	console.log("\nTransferir:\n")
    let numeroDebito: string = input('Digite o número da conta de origem: ')
    let numeroCredito: string = input('Digite o número da conta de destino: ')
    let valorStr: string = input('Digite o valor da transferencia: ')
    let valor: number = parseFloat(valorStr)
    b.transferir(numeroDebito, numeroCredito, valor)
    exibirConta(numeroDebito)
    exibirConta(numeroCredito)
}

function totalizacoes() {
	console.log("\nTotalizações:\n")
	return this.contas.length
}

function exibirConta(numero: string) {
	console.log(`Conta: ${b.consultar(numero)}`)
}

function renderJuros() {
	console.log("\nRender Juros:\n")
	let numero: string = input('Digite o número da conta: ')
	b.renderJuros(numero)
}