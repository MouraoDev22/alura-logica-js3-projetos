let listaNomes = [];

function adicionar () {
    
    if (listaNomes.length == 5) {
        alert ('Quantidade máxima de amigos atingida.');
        return;
    }
    
    let nomeAmigo = document.getElementById ("nome-amigo").value.trim ();
    let ajusteLista = (` ${nomeAmigo}`)
    let listaAmigos = document.getElementById ("lista-amigos");

    if (nomeAmigo == '') {
        alert ('Escreva algum nome para adicionar um amigo!');
        return;
    }

    listaNomes.push (ajusteLista);
    
    listaAmigos.textContent = listaNomes;

    document.getElementById ("nome-amigo").value = '';

}

function sortear () {
    
    if (listaNomes.length !== 5) {
        alert ('Insira no total 5 nomes.');
        return;
    }

    let nome1 = listaNomes [0];
    let nome2 = listaNomes [1];
    let nome3 = listaNomes [2];
    let nome4 = listaNomes [3];
    let nome5 = listaNomes [4];
    
    let listaSorteio = document.getElementById ("lista-sorteio");

    
}

function reiniciar () {
    
    listaNomes = [];
    document.getElementById ("lista-amigos").textContent = '';

}