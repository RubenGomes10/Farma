using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FarmaAPI.ViewModel
{
    public class SmartTableModel
    {
        public int Start { get; set; }
        public int Number { get; set; }
        public int SortField { get; set; }
        public int SortDirection { get; set; }
    }
}