var num1 = 7
var num2 = 9
var num3 = 5

var maior = num1;
var menor = num1;

if(num2 > maior)
    maior = num2;
else
    menor = num2;
if(num3 > maior)
    maior = num3;
else
    menor = num3;

console.log("Maior: "+maior);
console.log("Menor: "+menor);
