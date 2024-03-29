﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace CIM.Models
{
    public class Customer
    {
        
        public int ID { get; set; }
        [ForeignKey("Country")]
        public int CountryID { get; set; }
        [Column(TypeName = "NVARCHAR(100)")]
        public string CustomerName { get; set; }
        [Column(TypeName = "NVARCHAR(100)")]
        public string FatherName { get; set; }
        [Column(TypeName = "NVARCHAR(100)")]
        [StringLength(100)]
        public string MotherName { get; set; }
        public int MaritalStatus { get; set; }
        [Column(TypeName = "VARBINARY(MAX)")]
        public byte[] CustomerPhoto { get; set; }


        public Country Country { get; set; }

        public List<CustomerAddress> CustomerAddresses { get; set; }
    }
}
