class Negociacao{

    //  declaracao das propriedades de classe
    private _data;
    private _quantidade;
    private _valor;

    constructor(data, quantidade, valor){
        this._data = data;
        this._quantidade = quantidade;              // esse underline eh uma js, que essas propriedades nao podem ser alteradas fora de metodos da propria classe. Por isso vou criar os gets, os metodos ali embaixo para que eu possa utilizar e alterar essas propriedades
        this._valor = valor;                        // o valor depois do igual eh o valor que vou receber da tela
    }

    get data(){
        return this._data;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }

    get volume(){
        return this._quantidade * this._valor;
    }
}