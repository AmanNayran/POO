// 2. Explique o que é necessário para que a compilação da ClasseConcreta ocorra
// sem erros:

abstract class ClasseAbstrata {
    abstract imprimaAlgo(): void ;
}

class ClasseConcreta extends ClasseAbstrata {
    imprimaAlgo(): void {}
}

// Para a compilação da ClasseConcreta acontecer sem erros, é necessário implementar os métodos da ClasseAbstrata.