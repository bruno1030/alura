
public class TestaConta {

	public static void main(String[] args) {
		
		Cliente cliente1 = new Cliente();
		cliente1.nome = "Bruno Martins";
		cliente1.cpf = "123.456.789-00";
		cliente1.profissao = "Desenvolvedor";
	
		
		Conta conta1 = new Conta();
		conta1.agencia = 238;
		conta1.numero = 9182-3;
		conta1.saldo = 250.49;
		conta1.titular = cliente1;
		
		System.out.println(conta1.titular.nome);

	}

}
