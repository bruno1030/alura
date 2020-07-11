// sera responsavel por interagir com o usuario, com as acoes do usuario, e construir uma negociacao com base nos dados do formulario
class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('#negociacoesView');
        //  aqui embaixo vamos fazer o casting (usando <>), que eh para transformar um cara mais generico (element do querySelector) para um tipo mais especifico (HTMLInputElement)
        this._inputData = document.querySelector('#data'); // dentro dos parenteses eh o id do meu HTML, e la o id esta com esse nome "data"
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this._negociacoesView.update();
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/g, ',')), // dentro do ultimo parenteses, quer dizer que vai substituir todas os hifens dentro da String do meu input data, por virgula.
        parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        this._negociacoes.adiciona(negociacao);
    }
}
