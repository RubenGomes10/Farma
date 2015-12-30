using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace FarmaTest.ViewModel
{
    public class FarmaciaViewModel
    {
        public int ID { get; set; }
        public string Nome { get; set; }
        [Display(Name="Distrito")]
        public string NomeDistrito { get; set; }
    }
}