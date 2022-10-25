class Produto{

    private identificador: string
    private descrição: string
    private quantidadeEstoque: number
    private valor: number

    constructor(identificador: string, descrição: string, quantidadeEstoque: number, valor: number){
        this.identificador = identificador
        this.descrição = descrição
        this.quantidadeEstoque = quantidadeEstoque
        this.valor = valor
    }

    repor(value: number){
        return this.quantidadeEstoque = this.quantidadeEstoque + value
    }

    daBaixa(value: number){
        return this.quantidadeEstoque = this.quantidadeEstoque - value
    }

    get QuantidadeEstoque(){
        return this.quantidadeEstoque
    }
}

class ProdutoPerecivel extends Produto{

    dataValidade: Date 

    constructor(identificador: string, descrição: string, quantidadeEstoque: number, valor: number, dataValidade: Date){
        super(identificador, descrição, quantidadeEstoque, valor)
        this.dataValidade = dataValidade
    }
    validade(){
        let dataAtual: Date = new Date()
        if(dataAtual<this.dataValidade){
            console.log("ta na validade")
        }else{
            console.log("passou da validade")
        }
    }

}

class Estoque{
    private estoque: Estoque[] = []

    inserir(p: Produto){
        this.estoque.push(p)
    }

    consultarID(id: string){
        let indice: number = -1;
        for (let i = 0; i < this.estoque.length; i++) {
            if (this.estoque[i].id == id){
                indice = i
            }
        }
        return indice
    }

    excluir(id: string){
        let indice: number = consultarID(id)
        if (indice != -1){
            for (let i = indice; i < this.estoque.length; i++) {
                this.estoque[i] = this.estoque[i + 1]
            }
            this.estoque.pop()
        }
    }

	repor(id: string, value: number) {
		let produtoConsultado = this.consultarID(id)
		
		if (produtoConsultado != null) {
			produtoConsultado.repor(value)
		}
	}

	daBaixa(id: string, value: number) {
		let produtoConsultado = this.consultarID(id)
		
		if (produtoConsultado != null) {
			produtoConsultado.daBaixa(value)
		}
	}


}
