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
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerRepo _cusRepo;

        public CustomerController(ICustomerRepo customerRepo)
        {
            this._cusRepo = customerRepo;
        }

        [HttpGet]
        [Route("/api/Customer/GetCustomerList")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult GetCustomerList()
        {
            try
            {
                return Ok(_cusRepo.GetCustomers().ToList());
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }
    }
}
