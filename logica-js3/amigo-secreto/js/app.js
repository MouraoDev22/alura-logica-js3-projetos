let listaNomes = [];
let verificarSorteio = 1;

function adicionar () {
    
    if (listaNomes.length == 4) {
        alert ('Quantidade máxima de amigos atingida.');
        return;
    }
    
    let nomeAmigo = document.getElementById ("nome-amigo").value.trim ();
    let listaAmigos = document.getElementById ("lista-amigos");

    if (nomeAmigo == '') {
        alert ('Escreva algum nome para adicionar um amigo!');
        return;
    }

    listaNomes.push (nomeAmigo);
    
    listaAmigos.textContent = listaNomes.join (', ');

    document.getElementById ("nome-amigo").value = '';

}

function sortear () {
    
    if (listaNomes.length !== 4) {
        alert ('Insira no total 4 nomes.');
        return;
    }

    embaralha (listaNomes);
    
    let listaSorteio = document.getElementById ("lista-sorteio");
        
    listaSorteio.innerHTML = '';
        
    for (let i = 0; i < listaNomes.length; i++) {
    if (i == listaNomes.length - 1) {
    listaSorteio.innerHTML = listaSorteio.innerHTML + listaNomes [i] + ' --> ' + listaNomes [0] + '<br>';
    } else {
    listaSorteio.innerHTML = listaSorteio.innerHTML + listaNomes [i] + ' --> ' + listaNomes [i + 1] + '<br>';
    }
        
    }
    
}

function reiniciar () {
    
    listaNomes = [];
    
    document.getElementById ("lista-amigos").textContent = '';
    document.getElementById ("lista-sorteio").textContent = '';
    

}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }

}