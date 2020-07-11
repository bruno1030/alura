// sera responsavel por interagir com o usuario, com as acoes do usuario, e construir uma negociacao com base nos dados do formulario

class NegociacaoController{

    private _inputData: HTMLInputElement;  // eh o elemento do DOM que corresponde ao input da data
    private _inputQuantidade: HTMLInputElement; // eh o elemento do DOM que corresponde ao input da quantidade
    private _inputValor: HTMLInputElement;   // tanto o private como o underline me ajudam para que sejam atributos privados, ninguem tenha acesso fora da classe. Pode ser soh o private ou o underline, mas eh bom sim usar os dois, seguir a convencao que fala do underline. Mas em tese soh o private ja seria suficiente
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');

    constructor(){
        //  aqui embaixo vamos fazer o casting (usando <>), que eh para transformar um cara mais generico (element do querySelector) para um tipo mais especifico (HTMLInputElement)
        this._inputData = <HTMLInputElement>document.querySelector('#data');      // dentro dos parenteses eh o id do meu HTML, e la o id esta com esse nome "data"
        this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement>document.querySelector('#valor');
        this._negociacoesView.update();
    }

    adiciona(event: Event){

        event.preventDefault();

        const negociacao = new Negociacao(
            new Date(this._inputData.value.replace(/-/g, ',')),   // dentro do ultimo parenteses, quer dizer que vai substituir todas os hifens dentro da String do meu input data, por virgula.
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );

        this._negociacoes.adiciona(negociacao);

    }

}