using CIM.Models;
using CIM.Repo.Interfaces;
using CIM.WebApi.Controllers;
using Microsoft.AspNetCore.Mvc;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Xunit;

namespace CIM.WebApi.Test.Controllers
{
    public class CustomerControllerTest
    {
        private readonly Mock<ICustomerRepo> cusRepo;
        public CustomerControllerTest()
        {
            cusRepo = new Mock<ICustomerRepo>();
        }
        [Fact]
        public void GetCustomerList_ListOfCustomers_CustomersExistsInRepo()
        {
            //arrange
            var expected = GetSampleCustomer();
            cusRepo.Setup(x => x.GetCustomers())
                .Returns(GetSampleCustomer);
            var controller = new CustomerController(cusRepo.Object);

            //act
            IActionResult actionResult = controller.GetCustomerList();
            var result = actionResult as OkObjectResult;
            var actual = result.Value as IEnumerable<Customer>;

            //assert
            Assert.IsType<OkObjectResult>(result);
            Assert.Equal(expected.Count(), actual.Count()); 
            Assert.Equal(200, result.StatusCode);
            
        }

        private static IQueryable<Customer> GetSampleCustomer()
        {
            var r = new List<Customer>();
            r.Add(new Customer()
            {
                ID = 1,
                CustomerName = "Test One",
                FatherName = "SL1",
                MotherName = "EL1",
                CountryID = 1,
                MaritalStatus = 1,
                CustomerPhoto = null,
                CustomerAddresses = new List<CustomerAddress>()
            }); 
            r.Add(new Customer()
            {
                ID = 2,
                CustomerName = "Test Two",
                FatherName = "SL2",
                MotherName = "EL2",
                CountryID = 1,
                MaritalStatus = 1,
                 CustomerPhoto = null,
                CustomerAddresses = new List<CustomerAddress>()
            });
            r.Add(new Customer()
            {
                ID = 3,
                CustomerName = "Test Three",
                FatherName = "SL3",
                MotherName = "EL3",
                CountryID = 1,
                MaritalStatus = 1,
                CustomerPhoto=null,
                CustomerAddresses = new List<CustomerAddress>()
            });
            return r.AsQueryable();
        }
        private static IQueryable<CustomerAddress> GetSampleCustomerAddress()
        {
            var r = new List<CustomerAddress>();
            r.Add(new CustomerAddress()
            {
                ID = 1,
                CustomerID = 1,
                Address = "Address One"
            });
            r.Add(new CustomerAddress()
            {
                ID = 2,
                CustomerID = 2,
                Address = "Address Two"
            });
            r.Add(new CustomerAddress()
            {
                ID = 3,
                CustomerID = 3,
                Address = "Address Three"
            });
            return r.AsQueryable();
        }
    }
}
