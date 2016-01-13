using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;

namespace FarmaModel
{
    [Table("Zona")]
    public class Zona
    {
        [Key]
        public int ZonaID { get; set; }

        [Display(Name = "Zona")]
        public string Nome { get; set; }
    }
}
