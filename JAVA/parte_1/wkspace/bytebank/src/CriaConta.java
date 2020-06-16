
public class CriaConta {

	public static void main(String[] args) {
		
		Conta conta1 = new Conta();
		conta1.saldo = 1000.80;
		conta1.agencia = 238;
		conta1.numero = 9182-3;
		conta1.titular = "Bruno Martins";
		
		conta1.saldo += 200;
		
		System.out.println(conta1.saldo);
		
		Conta conta2 = new Conta();
		conta2.saldo = 600;
		
		System.out.println(conta2.saldo);
		
	}

}
