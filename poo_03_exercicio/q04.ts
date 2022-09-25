// 4. Crie uma função que retorne os números de um array passados por parâmetro separados
// por traço (-) no formato string. Para isso, use o método forEach dos arrays.

let foreach = (str: string) => {
    let strSeparada = str.split('')
    
    let arrayStr = []
    
    strSeparada.forEach(function(item) {
    
        if (item != '-')
        return arrayStr.push(item)
    
    })
    
    let arrayNum = arrayStr.map(Number)
    
    console.log(arrayNum)

}

foreach("1-2-3-4-5")
