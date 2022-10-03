// 3. Considere a classe Radio e as instruções que fazem seu uso abaixo:

class Radio {

    volume : number;
    
    constructor(volume : number) {
        this.volume = volume;
    }
}

let r : Radio = new Radio(10);
console.log(r.volume)

// Justifique o erro de compilação e proponha uma solução.

// Acontece o erro de compilação, pois em "new Radio" ele não está recebendo o valor da variável "volume". 
// A solução seria passar o valor de "volume" e fazer a chamada com um "console.log"
