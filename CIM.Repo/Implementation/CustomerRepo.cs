using CIM.DAL.Interfaces;
using CIM.Models;
using CIM.Repo.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
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
            _cusRepo.Delete(id);
            _cusRepo.Commit();
        }

        public Customer GetCustomerById(int id)
        {
            try
            {
                Customer customer = _cusRepo.FindByCondition(x => x.ID == id).FirstOrDefault();
                List<CustomerAddress> customerAddresses = _addRepo.FindByCondition(x => x.CustomerID == customer.ID).ToList();
                customer.CustomerAddresses = customerAddresses;
                return customer;
            }
            catch (Exception ex)
            {
                throw ex;
            }
            
        }

        public IEnumerable<Customer> GetCustomers()
        {
            try
            {
                return _cusRepo.FindAll();
            }
            catch (Exception ex)
            {

                throw ex;
            }
            
        }

        public void SaveCustomerData(Customer customer)
        {
            try
            {
                if (customer.ID > 0)
                {
                    List<CustomerAddress> needUpdated = new List<CustomerAddress>();
                    foreach (var item in customer.CustomerAddresses)
                    {
                        needUpdated.Add(item);
                    }
                    
                    List<CustomerAddress> fr = CustomerAddressesToDelete(customer.CustomerAddresses, customer.ID);
                    foreach (var item in fr)
                    {
                        try
                        {
                            _addRepo.Delete(item.ID);
                        }
                        catch (Exception ex)
                        {
                            throw ex;
                        }
                    }
                    foreach (CustomerAddress item in needUpdated)
                    {
                        try
                        {
                            if (item.ID > 0)
                            {
                                _addRepo.Update(item);
                            }
                            else
                            {
                                item.CustomerID = customer.ID;
                                _addRepo.Create(item);
                            }
                        }
                        catch (Exception ex)
                        {
                            throw ex;
                        }
                    }
                    _addRepo.Commit();
                    if (customer.CustomerPhoto == null)
                    {
                        Customer c1 = _cusRepo.FindByCondition(x => x.ID == customer.ID).FirstOrDefault();
                        customer.CustomerPhoto = c1.CustomerPhoto;
                    }
                    customer.CustomerAddresses = null;
                    _cusRepo.Update(customer);
                }
                else
                {
                    _cusRepo.Create(customer);
                }
                _cusRepo.Commit();
            }
            catch (Exception ex)
            {

                throw ex;
            }

        }

        private List<CustomerAddress> CustomerAddressesToDelete(List<CustomerAddress> param,int cusId)
        {
            try
            {
                List<CustomerAddress> customerAddressesInDb = _addRepo.FindByCondition(y => y.CustomerID == cusId).ToList();

                var ids = customerAddressesInDb.Select(x => x.ID);
                var pIds = param.Select(x => x.ID);
                var dIds = ids.Except(pIds);
                var result = customerAddressesInDb.Where(x => dIds.Contains(x.ID));
                //var res2= customerAddressesInDb.Except(param);
                return result.ToList();
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
    }
}
