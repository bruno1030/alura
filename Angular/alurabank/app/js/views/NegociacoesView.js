//essa classe eh que vai ter a apresentacao da minha lista de Negociacoes
// ou seja, vai ter o template, a forma como quero apresentar a lista das minhas Negociacoes
// e isso vai ser atraves do metodo "template"
class NegociacoesView {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    update() {
        this._elemento.innerHTML = this.template();
    }
    template() {
        return `        
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>

                <tbody>
                </tbody>

                <tfoot>
                </tfoot>
            </table> 
        `;
    }
}
