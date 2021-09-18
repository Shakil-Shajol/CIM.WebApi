using CIM.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace CIM.Repo.Interfaces
{
    public interface ICountryRepo
    {
        IEnumerable<Country> GetCountries();
        void SaveCountry(Country country);
    }
}
