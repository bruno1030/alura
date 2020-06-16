import javax.swing.JOptionPane;

public class Aliquotas {
	
	public static void main(String[] args) {
		

		
		String salario = JOptionPane.showInputDialog("Digite seu salario");
		double valor = Double.parseDouble(salario);
		
		if(valor < 1900) {
			System.out.println("Vc nao precisa pagar IR");
		}else if(valor >= 1900 && valor <= 2800)
		{
			System.out.println("Sua aliquota é de 7.5%");
		}else {
			System.out.println("Sua alíquota é 15%");
		}
	}

}
