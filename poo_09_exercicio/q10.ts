// 10. Implemente o diagrama de classes abaixo:

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