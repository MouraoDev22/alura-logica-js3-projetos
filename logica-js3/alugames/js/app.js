function alterarStatus (numero) {
   let statusAlugado;
   let statusImagem;
   
   statusAlugado = document.getElementById (`btn-alugar${numero}`);
   statusImagem = document.getElementById (`img${numero}`);

   if (statusAlugado.classList.contains ("dashboard__item__button")) {
    statusAlugado.classList.remove ("dashboard__item__button");
    statusAlugado.classList.add ("dashboard__item__button--return");
    statusAlugado.textContent = "Devolver";
    statusImagem.classList.remove ("dashboard__item__img");
    statusImagem.classList.add ("dashboard__item__img--rented"); 
   } else {
    statusAlugado.classList.remove ("dashboard__item__button--return");
    statusAlugado.classList.add ("dashboard__item__button");
    statusAlugado.textContent = "Alugar";
    statusImagem.classList.remove ("dashboard__item__img--rented");
    statusImagem.classList.add ("dashboard__item__img");  
   }  

}