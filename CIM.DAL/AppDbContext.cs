using CIM.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace CIM.DAL
{
    public class AppDbContext:DbContext
    {
        public AppDbContext(DbContextOptions options):base(options)
        {

        }

        public DbSet<Country> Country { get; set; }
        public DbSet<Customer> Customer { get; set; }
        public DbSet<CustomerAddress> CustomerAddress { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Country>()
            .HasData(
                new Country
                {
                    ID = 1,
                    CountryName = "Bangladesh",
                },
                new Country
                {
                    ID = 2,
                    CountryName = "UK",
                }
            );
        }
    }
}
