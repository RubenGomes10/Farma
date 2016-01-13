using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;

namespace FarmaModel
{
    [Table("TipoCliente")]
    public class TipoCliente
    {
        [Key]
        public int TipoClienteID { get; set; }

        [Display(Name = "Tipo Cliente")]
        public string Nome { get; set; }
    }
}
