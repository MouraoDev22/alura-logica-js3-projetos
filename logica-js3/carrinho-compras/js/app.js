let listaPrecos = [];

function adicionar () {
 
 let produto = document.getElementById ('produto').value;
 let nomeProduto = produto.split ('-') [0];
 let valorProduto = produto.split ('R$') [1];
 let quantidadeProdutos = document.getElementById ('quantidade').value;

 while ( quantidadeProdutos < 1) {
    alert ('Selecione pelo menos um item para cada produto desejado.');
    return;
 }

 let preco = quantidadeProdutos * valorProduto;
 
 let carrinhoProdutos = document.getElementById ('lista-produtos');
 carrinhoProdutos.innerHTML += (`<span class="texto-azul">${quantidadeProdutos}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>`);
 listaPrecos.push (preco);
 
 let somaPrecos = listaPrecos.reduce ((a, b) => a + b, 0);

 let carrinhoTotal = document.getElementById ('valor-total');
 carrinhoTotal.textContent = (`R$${somaPrecos}`);

}

function limpar () {
 
 listaPrecos = [];
 
 carrinhoProdutos = document.getElementById ('lista-produtos');
 carrinhoProdutos.innerHTML = (`<span class="texto-azul"> </span> <span class="texto-azul"> </span>`);
 
 carrinhoTotal = document.getElementById ('valor-total');
 carrinhoTotal.textContent = ('R$0');

}