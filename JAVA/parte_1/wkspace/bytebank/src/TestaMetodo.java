
public class TestaMetodo {

	public static void main(String[] args) {
		
		Conta contaDoAntonio = new Conta();
		
		contaDoAntonio.saldo = 300;
		
		contaDoAntonio.deposita(500.44);
		
		System.out.println(contaDoAntonio.saldo);

	}

}
