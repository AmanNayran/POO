import prompt from "prompt-sync"
import { Conta, Banco, Poupanca } from "./banco"
import { ValorInvalidoError, SaldoInsuficienteError, ContaInexistenteError, AplicacaoError } from "./excecoes"


let input = prompt()
let b: Banco = new Banco()
let opcao: String = ''

do {
    console.log('\nBem vindo\nDigite uma opção:')
    console.log(
        '1 - Cadastrar       2 - Consultar saldo       3 - Sacar\n' +
        '4 - Depositar       5 - Excluir               6 - Transferir\n' +
        '7 - Totalizações    8 - render juros          0 - Sair\n')

    try {
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
    } catch (e: any) {
        if (e instanceof AplicacaoError) {
            console.log(e.message)
        } else {
            if (e instanceof Error) {
                console.log("Ocorreu um erro no sistema!")
            }
        }
    } finally {
        input("Operação finalizada. Digite <enter>")

    }
} while (opcao != "0")
console.log("Aplicação encerrada!")


function inserir(): void {
    console.log("\nCadastrar conta:\n");
    let numero: string = input('Digite o número da conta: ')

    let isPoupanca: string = input('A conta é poupança (s/n): ')
    let conta!: Conta

    if (isPoupanca == 'n') {
        conta = new Conta(numero, 0)
    } else if (isPoupanca == 's') {
        conta = new Poupanca(numero, 0, 1)
    } else {
        throw new ValorInvalidoError('Valor inválido!')
    }

    b.inserir(conta)
}

function consultar() {
    console.log("\nConsultar conta:\n")
    let numero: string = input('Digite o número da conta: ')
    let conta: Conta = b.consultar(numero)
    exibirConta(numero)
}

function sacar() {
    console.log("\nSacar:\n");
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
    console.log("\nExcluir conta:\n")
    let numero: string = input('Digite o número da conta: ')
    b.excluir(numero)
}

function transferir() {
    console.log("\nTransferir:\n");
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
	return this.contas.length()
}

function exibirConta(numero: string) {
	console.log(`Conta: ${b.consultar(numero)}`)
}

function renderJuros() {
    console.log("\nRender juros:\n")
    let numero: string = input('Digite o número da conta: ')
    b.renderJuros(numero)
    exibirConta(numero)
}
