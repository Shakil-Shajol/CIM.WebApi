using CIM.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace CIM.Repo.Interfaces
{
    public interface ICustomerRepo
    {
        void SaveCustomerData(Customer customer);
        Customer GetCustomerById(int id);
        List<Customer> GetCustomers();
        void DeleteCustomer(int id);
    }
}
