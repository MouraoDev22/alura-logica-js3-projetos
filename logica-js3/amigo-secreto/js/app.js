let listaNomes = [];

function adicionar () {
    
    if (listaNomes.length == 4) {
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
    
    if (listaNomes.length !== 4) {
        alert ('Insira no total 4 nomes.');
        return;
    }

    let par1 = listaNomes [0];
    let par2 = listaNomes [1];
    let par3 = listaNomes [2];
    let par4 = listaNomes [3];
    
    let listaSorteio = document.getElementById ("lista-sorteio");

    
}

function reiniciar () {
    
    listaNomes = [];
    document.getElementById ("lista-amigos").textContent = '';

}