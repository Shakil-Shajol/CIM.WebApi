using CIM.DAL.Interfaces;
using CIM.Models;
using CIM.Repo.Implementation;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Xunit;

namespace CIM.WebApi.Test.Repo
{
    public class CustomerRepoTest
    {
        private readonly Mock<IGenericRepo<Customer>> cusRepo;
        private readonly Mock<IGenericRepo<CustomerAddress>> addRepo;
        public CustomerRepoTest()
        {
            cusRepo = new Mock<IGenericRepo<Customer>>();
            addRepo = new Mock<IGenericRepo<CustomerAddress>>();
        }
        [Fact]
        //naming convention MethodName_expectedBehavior_StateUnderTest
        public void GetCustomers_ListOfCustomers_CustomersExistsInRepo()
        {
            //arrange
            var expected = GetSampleCustomer();
            cusRepo.Setup(x => x.FindAll())
                .Returns(GetSampleCustomer);
            addRepo.Setup(x => x.FindAll())
                .Returns(GetSampleCustomerAddress);
            var repo = new CustomerRepo(cusRepo.Object, addRepo.Object);

            //act
           
            var actual = repo.GetCustomers();

            //assert
            Assert.True(actual != null);
            Assert.Equal(expected.Count(), actual.Count());
            for (int i = 0; i < actual.ToList().Count; i++)
            {
                Assert.Equal(expected.ToList()[i].MotherName, actual.ToList()[i].MotherName);
            }
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
                MaritalStatus = 1
            });
            r.Add(new Customer()
            {
                ID = 2,
                CustomerName = "Test Two",
                FatherName = "SL2",
                MotherName = "EL2",
                CountryID = 1,
                MaritalStatus = 1
            });
            r.Add(new Customer()
            {
                ID = 3,
                CustomerName = "Test Three",
                FatherName = "SL3",
                MotherName = "EL3",
                CountryID = 1,
                MaritalStatus = 1
            });
            return r.AsQueryable();
        }
        private static IQueryable<CustomerAddress> GetSampleCustomerAddress()
        {
            var r = new List<CustomerAddress>();
            r.Add(new CustomerAddress()
            {
                ID = 1,
                CustomerID=1,
                Address="Address One"
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
