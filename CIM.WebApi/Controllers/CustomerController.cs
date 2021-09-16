using CIM.Models;
using CIM.Repo.Interfaces;
using CIM.WebApi.Helpers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.IO;

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

        [HttpPost]
        [Route("/api/Customer/SaveCustomer")]
        public IActionResult SaveCustomer([FromForm] CustomerHelper customer)
        {
            try
            {
                if ((customer.CustomerPhoto != null && customer.ID==0) || customer.ID > 0)
                {
                    Customer customerToSave = customer.GetCustomer();
                    _cusRepo.SaveCustomerData(customerToSave);
                    customerToSave.CustomerAddresses = new List<CustomerAddress>();
                    return Ok(customerToSave);
                }
                else
                {
                    return BadRequest("Please Provide Image");

                }

            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }

        }

        [HttpGet]
        [Route("/api/Customer/GetCustomerById")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult GetCustomerById(int id)
        {
            try
            {
                Customer customer = _cusRepo.GetCustomerById(id);
                return Ok(customer);
            }
            catch (Exception ex)
            {

                return BadRequest(ex);
            }
        }

        [HttpPost]
        [Route("/api/Customer/DeleteCustomer")]
        public IActionResult DeleteCustomer([FromForm] Customer customer)
        {
            try
            {
                if (customer.ID > 0)
                {
                    _cusRepo.DeleteCustomer((int)customer.ID);
                    return Ok(HttpStatusCode.OK);
                }
                else
                {
                    return BadRequest("Not Valid Request");
                }

            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }

        }


    }
}
