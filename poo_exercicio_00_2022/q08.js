function removeAcento (texto)
{       
    texto = texto.toLowerCase();                                                         
    texto = texto.replace(new RegExp('[ÁÀÂÃ]','gi'), '');
    texto = texto.replace(new RegExp('[ÉÈÊ]','gi'), '');
    texto = texto.replace(new RegExp('[ÍÌÎ]','gi'), '');
    texto = texto.replace(new RegExp('[ÓÒÔÕ]','gi'), '');
    texto = texto.replace(new RegExp('[ÚÙÛ]','gi'), '');
    texto = texto.replace(new RegExp('[Ç]','gi'), '');
    return texto;                 
}
console.log(removeAcento("Você"))
