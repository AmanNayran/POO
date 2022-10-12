// 2. Crie uma classe Hora que tenha:
class Hora {
    
    // a. Três atributos privados e definidos no construtor chamados hora, minutos e segundos;
    private hora: number
    private minutos: number
    private segundos: number
    
    constructor(hora, minutos, segundos) {
        this.hora = hora
        this.minutos = minutos
        this.segundos = segundos
    }
    
    // b. Métodos públicos para ler hora, minuto e segundo de forma individual;
    lerHora(){
        return this.hora
    }
    lerMinuto(){
        return this.minutos
    }
    lerSegundo(){
        return this.segundos
    }
    
    
    // c. Um método público para retorne a hora no formato “hh:mm:ss”.
    horario(){
        console.log(`${this.hora}:${this.minutos}:${this.segundos}`)
    }
    
}

const horasEh = new Hora(19,18,31);

horasEh.horario()
