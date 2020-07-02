// sera responsavel por interagir com o usuario, com as acoes do usuario, e construir uma negociacao com base nos dados do formulario
class NegociacaoController {
    constructor() {
        this._inputData = document.querySelector('#data'); // dentro dos parenteses eh o id do meu HTML, e la o id esta com esse nome "data"
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(this._inputData.value, this._inputQuantidade.value, this._inputValor.value);
        console.log(negociacao);
    }
}
