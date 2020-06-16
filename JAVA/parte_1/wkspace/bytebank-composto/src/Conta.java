public class Conta{
	
	double saldo;
	int agencia;
	int numero;
	Cliente titular;
	
	
	
	void deposita(double valor) {
		this.saldo = this.saldo + valor;
	}
	
}