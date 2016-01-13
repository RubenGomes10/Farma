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

        [Display(Name="Farmácia")]
        public string Nome { get; set; }

        [Display(Name = "Distrito")]
        public string Distrito { get; set; }
    }
}
