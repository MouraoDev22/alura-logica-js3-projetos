function comprar () {
    
    let tipoIngresso = document.getElementById ("tipo-ingresso").value;
    let quantidadeIngresso = Number (document.getElementById ("qtd").value);
    let quantidadePista = Number (document.getElementById ("qtd-pista").textContent);
    let quantidadeSuperior = Number (document.getElementById ("qtd-superior").textContent);
    let quantidadeInferior = Number (document.getElementById ("qtd-inferior").textContent);

    if (quantidadeIngresso == 0) {
        alert ('Compre pelo menos 1 ingresso.');
        return;
    }

    if (tipoIngresso == "pista") {
       if (quantidadeIngresso > quantidadePista) {
        alert ('Quantidade de ingressos encontra-se indisponível')
        limparCampos ();
        return;
       } else { 
         quantidadePista = quantidadePista - quantidadeIngresso;
         quantidadePista = document.getElementById ("qtd-pista").textContent = quantidadePista;
       }
    } else if (tipoIngresso == "inferior") {
       if (quantidadeIngresso > quantidadeInferior) {
        alert ('Quantidade de ingressos encontra-se indisponível')
        limparCampos ();
        return;
       } else {
         quantidadeInferior = quantidadeInferior - quantidadeIngresso;
         quantidadeInferior = document.getElementById ("qtd-inferior").textContent = quantidadeInferior;
       }
    } else {
     if (quantidadeIngresso > quantidadeSuperior) {
        alert ('Quantidade de ingressos encontra-se indisponível')
        limparCampos ();
        return;
       } else {
         quantidadeSuperior = quantidadeSuperior - quantidadeIngresso;
         quantidadeSuperior = document.getElementById ("qtd-superior").textContent = quantidadeSuperior;
     }
     
    }

    limparCampos ();

}

function limparCampos () {
    
    tipoIngresso = document.getElementById ("tipo-ingresso").value = "inferior";
    quantidadeIngresso = document.getElementById ("qtd").value = 0;

}