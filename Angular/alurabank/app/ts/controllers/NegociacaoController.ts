// sera responsavel por interagir com o usuario, com as acoes do usuario, e construir uma negociacao com base nos dados do formulario

class NegociacaoController{

    private _inputData;  // eh o elemento do DOM que corresponde ao input da data
    private _inputQuantidade; // eh o elemento do DOM que corresponde ao input da quantidade
    private _inputValor;   // tanto o private como o underline me ajudam para que sejam atributos privados, ninguem tenha acesso fora da classe. Pode ser soh o private ou o underline, mas eh bom sim usar os dois, seguir a convencao que fala do underline. Mas em tese soh o private ja seria suficiente

    constructor(){

        this._inputData = document.querySelector('#data');      // dentro dos parenteses eh o id do meu HTML, e la o id esta com esse nome "data"
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
    }

    adiciona(event){
        event.preventDefault();
        const negociacao = new Negociacao(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value
        );

        console.log(negociacao);
    }

}