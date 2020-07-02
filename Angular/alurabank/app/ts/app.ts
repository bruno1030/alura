//esse arquivo eh o ponto de entrada da minha aplicacao.
//e nesse caso, o que ele vai fazer eh criar uma instancia e NegociacaoController
const controller = new NegociacaoController();  

document
    .querySelector('.form')
    .addEventListener('submit', controller.adiciona.bind(controller));