//essa classe vai encapsular o array que vai guardar todas as negociacoes que eu cadastrar
// e todo acesso a esse array sera entao feito por essa classe aqui
class Negociacoes {
    constructor() {
        this._negociacoes = []; // aqui eu criei um array que ira receber objetos do tipo Negociacao. A vantagem eh que o TypeScript nao vai deixar eu incluir objetos de outros tipos dentro dessa lista, dentro desse array
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    paraArray() {
        return [].concat(this._negociacoes);
    }
}
