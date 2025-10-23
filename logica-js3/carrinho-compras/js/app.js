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
 carrinhoProdutos.innerHTML += `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeProdutos}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span>
   </section>`;

 listaPrecos.push (preco);
 
 let somaPrecos = listaPrecos.reduce ((a, b) => a + b, 0);

 let carrinhoTotal = document.getElementById ('valor-total');
 carrinhoTotal.textContent = (`R$${somaPrecos}`);

 quantidadeProdutos = document.getElementById ('quantidade').value = 0;

}

function limpar () {
 
 listaPrecos = [];
 
 carrinhoProdutos = document.getElementById ('lista-produtos');
 carrinhoProdutos.innerHTML = '';
 
 carrinhoTotal = document.getElementById ('valor-total');
 carrinhoTotal.textContent = ('R$0');

 quantidadeProdutos = document.getElementById ('quantidade').value = 0;

}