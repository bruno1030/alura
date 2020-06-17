const negociacao = new Negociacao(new Date(), 1, 100); //ali nos parametros eu passei uma nova data, passei 1 como quantidade e 100 como valor
negociacao._quantidade = 3; // aqui eu consegui alterar a quantidade de 1 para 3, e pra isso foi necessario utilizar o underline
console.log(negociacao.volume);
