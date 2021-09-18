using CIM.Models;
using CIM.Repo.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CIM.WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CountryController : ControllerBase
    {
        private readonly ICountryRepo _countryRepo;

        public CountryController(ICountryRepo countryRepo)
        {
            this._countryRepo = countryRepo;
        }

        [HttpGet]
        [Route("/api/Country/GetCountries")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult GetAllData()
        {
            try
            {
                return Ok(_countryRepo.GetCountries().ToList());
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }


        [HttpPost]
        [Route("/api/Country/SaveCountry")]
        public IActionResult SaveCountry([FromBody] Country country)
        {
            try
            {
                _countryRepo.SaveCountry(country);
                country.Customers = null;
                return Ok(country);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }

        }
    }
}
