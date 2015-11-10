using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;

namespace FarmaModel
{
    [Table("Distrito")]
    public class Distrito
    {
        [Key]
        public int DistritoID { get; set; }
        public string Nome { get; set; }
        public virtual ICollection<Farmacia> Farmacias { get; set; }
    }
}
