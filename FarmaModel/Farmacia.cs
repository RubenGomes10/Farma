using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;

namespace FarmaModel
{
    [Table("Farmacia")]
    public class Farmacia
    {
        [Key]
        public int FarmaciaID { get; set; }

        [ForeignKey("TipoCliente")]
        public int? TipoClienteID { get; set; }
        public virtual TipoCliente TipoCliente { get; set; }

        [Display(Name = "Código ANF")]
        public string CodigoANF { get; set; }

        [Display(Name = "Nº Cliente SAP")]
        public string NumClienteSAP { get; set; }

        [ForeignKey("Zona")]
        public int? ZonaID { get; set; }
        public virtual Zona Zona { get; set; }

        [Display(Name = "Activo")]
        public bool? Activo { get; set; }

        [Display(Name = "NºReq Inicial")]
        public string NumReqInicial { get; set; }

        [Display(Name = "Data Inicio Contrato")]
        public DateTime? DataInicioContrato { get; set; }

        [Display(Name = "Data Rescisão")]
        public DateTime? DataRescisao { get; set; }

        [Display(Name = "Hold")]
        public bool? Hold { get; set; }

        [Display(Name = "On Hold Reason")]
        public string OnHoldReason { get; set; }

        [Display(Name = "Nome")]
        public string Nome { get; set; }

        [Display(Name = "Morada")]
        public string Morada { get; set; }

        [Display(Name = "Localidade")]
        public string Localidade { get; set; }

        [Display(Name = "Código Postal")]
        public string CodigoPostal { get; set; }

        [Display(Name = "Localidade Postal")]
        public string LocalidadePostal { get; set; }

        [Display(Name = "Distrito")]
        public string Distrito { get; set; }

        [Display(Name = "Concelho")]
        public string Concelho { get; set; }

        [Display(Name = "Proprietário / Facturação")]
        public string ProprietarioFacturacao { get; set; }

        [Display(Name = "NIF")]
        public string NIF { get; set; }

        [Display(Name = "Dir. Técnico")]
        public string DirTecnico { get; set; }

        [Display(Name = "Telefone")]
        public string Telefone { get; set; }

        [Display(Name = "Fax")]
        public string Fax { get; set; }

        [Display(Name = "Email")]
        public string Email { get; set; }

        [ForeignKey("Agente")]
        public int? AgenteID { get; set; }
        public virtual Agente Agente { get; set; }

        [Display(Name = "KIT Entregue")]
        public bool? KitEntregue { get; set; }

        [Display(Name = "Data Entrega KIT")]
        public DateTime? DataEntregaKit { get; set; }

        [Display(Name = "KIT Recolhido")]
        public bool? KitRecolhido { get; set; }

        [Display(Name = "Data Recolha KIT")]
        public DateTime? DataRecolhaKit { get; set; }

        [Display(Name = "GPS Issues")]
        public bool? GpsIssues { get; set; }

        [Display(Name = "Espaço Renovado")]
        public bool? EspacoRenovado { get; set; }

        [Display(Name = "Número Funcionários")]
        public int NumFuncionarios { get; set; }
    }
}
