var milissegundos = 90061001

const dias = parseInt(milissegundos / 86400000)
milissegundos = milissegundos % 86400000

const horas = parseInt(milissegundos / 3600000)
milissegundos = milissegundos % 3600000

const minutos = parseInt(milissegundos / 60000)
milissegundos = milissegundos % 60000

const segundos = parseInt(milissegundos / 1000)
milissegundos = milissegundos % 1000

console.log(`${dias}:${horas}:${minutos}:${segundos}:${milissegundos}`)
