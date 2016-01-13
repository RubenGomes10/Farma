using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;

namespace FarmaModel
{
    [Table("Agente")]
    public class Agente
    {
        [Key]
        public int AgenteID { get; set; }

        [Display(Name = "Agente")]
        public string Nome { get; set; }
    }
}
