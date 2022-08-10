var v = 1000
var t = 0.01
var jcomposto = []

for (var i = 1; i <= 12; i++) {
    var montante = v * Math.pow((1 + t), i)
    var adicionar = jcomposto.push(montante.toFixed(2))
}

console.log(jcomposto)
