using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data;
using System.Text;

namespace CIM.Models
{
    public class Country
    {
        public int ID { get; set; }
        [Column(TypeName = "NVARCHAR(50)")]
        public string CountryName { get; set; }

        public List<Customer> Customers { get; set; }
    }
}
