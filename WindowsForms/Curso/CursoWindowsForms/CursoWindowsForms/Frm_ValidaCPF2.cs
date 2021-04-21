using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace CursoWindowsForms
{
    public partial class Frm_ValidaCPF2 : Form
    {
        public Frm_ValidaCPF2()
        {
            InitializeComponent();
        }

        private void Btn_Reset_Click(object sender, EventArgs e)
        {
            Msk_CPF.Text = "";
        }

        private void Btn_Valida_Click(object sender, EventArgs e)
        {


            if(MessageBox.Show("Voce deseja realmente validar o CPF?", "Mensagem de validacao", MessageBoxButtons.YesNo, MessageBoxIcon.Question) == DialogResult.Yes)
            {
                string conteudoCPF;
                conteudoCPF = Msk_CPF.Text;
                conteudoCPF = conteudoCPF.Replace(".", "").Replace(".", "");
                conteudoCPF = conteudoCPF.Trim();

                if(conteudoCPF == "")
                {
                    MessageBox.Show("Voce deve digitar um CPF", "Mensagem de validacao", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                }
                else
                {

                    if(conteudoCPF.Length != 11)
                    {
                        MessageBox.Show("O CPF deve ter 11 digitos", "Mensagem de validacao", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                    }
                    else
                    {
                        bool validaCPF = false;
                        validaCPF = Classes_uteis.Valida(Msk_CPF.Text);

                        if (validaCPF)
                        {

                            MessageBox.Show("CPF valido !", "Mensagem de validacao", MessageBoxButtons.OK, MessageBoxIcon.Information);
                        }
                        else
                        {
                            MessageBox.Show("CPF invalido !", "Mensagem de validacao", MessageBoxButtons.OK, MessageBoxIcon.Warning);
                        }
                    }                    
                }            
            }            
        }
    }
}
