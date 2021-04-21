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
    public partial class Frm_Principal : Form
    {
        public Frm_Principal()
        {
            InitializeComponent();
        }

        private void Btn_DemonstracaoKey_Click(object sender, EventArgs e)
        {
            Frm_DemonstracaoKeys frm_DemonstracaoKeys = new Frm_DemonstracaoKeys();
            frm_DemonstracaoKeys.ShowDialog();
        }


        private void Btn_Mascara_Click(object sender, EventArgs e)
        {
            Frm_Mascara frm_Mascara = new Frm_Mascara();
            frm_Mascara.ShowDialog();
        }

        private void Btn_ValidaCPF_Click(object sender, EventArgs e)
        {
            Frm_ValidaCPF frm_Valida = new Frm_ValidaCPF();
            frm_Valida.ShowDialog();
        }

        private void Btn_ValidaCPF2_Click(object sender, EventArgs e)
        {
            Frm_ValidaCPF2 frm_ValidaCPF2 = new Frm_ValidaCPF2();
            frm_ValidaCPF2.ShowDialog();
        }

        private void Btn_ValidaSenha_Click(object sender, EventArgs e)
        {
            Frm_ValidaSenha frm_ValidaSenha = new Frm_ValidaSenha();
            frm_ValidaSenha.ShowDialog();
        }
    }
}
