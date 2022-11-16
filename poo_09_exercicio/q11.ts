// 11. Crie uma classe chamada AuditoriaInterna que tenha dois métodos que tenha uma
// List de Tributaveis e os métodos:
// a. adicionar(Tributável);
// b. calcularTributos(): retorna um double que representa a soma de todos os
// cálculos dos tributos de todos os tributáveis;
// c. Crie uma classe de testes que instancie várias classes ContaCorrente e
// SeguroDeVida, adicione-as na classe AuditoriaInterna e exiba o resultado
// do método calculaTributos. Perceba que a classe de auditoria não se
// preocupa que tipo de classe está sendo passada.

interface Tributavel {
    calculaTributos()
}

class Conta {
    private _nome: string
    private _saldo: number

    constructor(nome: string, saldo: number) {
        this._nome = nome
        this._saldo = saldo
    }

    get nome() {
        return this._nome
    }

    set nome(nome: string) {
        this._nome = nome
    }

    get saldo() {
        return this._saldo
    }

    set saldo(saldo: number) {
        this._saldo = saldo
    }
}

class ContaCorrente extends Conta implements Tributavel {
    calculaTributos() {
        return this.saldo * 0.1
    }
}

class SeguroDeVida implements Tributavel {
    calculaTributos() {
        return 50
    }
}

class AuditoriaInterna {
    lista: number[] = []

    adicionar(Tributavel: number) {
        this.lista.push(Tributavel)
    }

    calcularTributos() {
        let soma = 0

        for(let i = 0; i < this.lista.length; i++)
        { 
            soma += this.lista[i];
        }

        console.log(soma)
    }
}
