var inicio = 10
var soma = 0

for (let i=inicio; i>-1; i--)  {
    soma += i
}

var media = soma / (inicio+1)

console.log(soma)
console.log(media)

var desvio = 0
for (let i=inicio; i>-1; i--) {
    desvio += (media - i) * (media - i);
}
desvio = desvio/(inicio+1);
desvioPadrao = Math.sqrt(desvio);
console.log(desvioPadrao.toFixed(4))