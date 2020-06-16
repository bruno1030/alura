
public class TestaCaracteres {
	
	public static void main(String[] args) {
		
		char letra = 'a';
		System.out.println(letra);
		
		
		char valor = 65;
		System.out.println(valor);
		
		//char valor2 = valor + 1;   // nao é para compilar
		
		char valor3 = (char) (valor + 1);     // B é o caracter da tabela unicode para o número 66
		System.out.println(valor3);
		
	}

}
