using CIM.DAL.Interfaces;
using CIM.Models;
using CIM.Repo.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace CIM.Repo.Implementation
{
    public class CustomerRepo : ICustomerRepo
    {
        private readonly IGenericRepo<Customer> _cusRepo;
        private readonly IGenericRepo<CustomerAddress> _addRepo;

        public CustomerRepo(IGenericRepo<Customer> cusRepo,IGenericRepo<CustomerAddress> addRepo)
        {
            this._cusRepo = cusRepo;
            this._addRepo = addRepo;
        }
        public void DeleteCustomer(int id)
        {
            throw new NotImplementedException();
        }

        public Customer GetCustomerById(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Customer> GetCustomers()
        {
            return _cusRepo.FindAll();
        }

        public void SaveCustomerData(Customer customer)
        {
            throw new NotImplementedException();
        }
    }
}
