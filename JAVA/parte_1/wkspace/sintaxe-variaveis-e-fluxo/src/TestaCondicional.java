import java.util.Scanner;

import javax.swing.JOptionPane;

public class TestaCondicional {
	
	public static void main(String[] args) {
		
		Scanner nome = new Scanner(System.in);
		System.out.println("Digite seu nome");
		
		String name = nome.next();
		
		String idade = JOptionPane.showInputDialog(name + " ,digite sua idade");
		
		int age = Integer.parseInt(idade);
		
		if(age >= 18) {
			System.out.println("Ok, vc pode entrar");
		}else {
			System.out.println("Idade não permitida.");
		}
		
		
		boolean brasileiro = false;
		
		if(brasileiro) {
			System.out.println(name + " é Brasileiro");
		}else {
			System.out.println("é gringo");
		}
		
	}

}
