using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace FarmaAPI.ViewModel
{

    public class FarmaciaViewModel
    {
        public int ID { get; set; }
        public string Nome { get; set; }
        [Display(Name="Distrito")]
        public string NomeDistrito { get; set; }
    }

    public class FarmaciaListViewModel
    {
        public IEnumerable<FarmaciaViewModel> FarmaciaList{ get; set; }
        public int TotalRecords { get; set; }
    }
}