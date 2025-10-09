function alterarStatus (id) {
   
   let statusAlugado = document.getElementById (`game-${id}`);
   let statusImagem = statusAlugado.querySelector (".dashboard__item__img");
   let statusBotao = statusAlugado.querySelector (".dashboard__item__button");
   let confirmarDevolucao;

   if (statusImagem.classList.contains ("dashboard__item__img--rented")) {
    
    confirmarDevolucao = prompt ('Deseja realmente devolver o jogo? Digite "Sim".');
    
    if (confirmarDevolucao !== "Sim") {
      return;
    }
    
    statusImagem.classList.remove ("dashboard__item__img--rented");
    statusBotao.classList.remove ("dashboard__item__button--return");
    statusBotao.textContent = "Alugar";  
   } else {
    statusImagem.classList.add ("dashboard__item__img--rented");
    statusBotao.classList.add ("dashboard__item__button--return");
    statusBotao.textContent = "Devolver";
   }

} 