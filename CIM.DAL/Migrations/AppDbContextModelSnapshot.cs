﻿// <auto-generated />
using System;
using CIM.DAL;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace CIM.DAL.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.19")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("CIM.Models.Country", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CountryName")
                        .HasColumnType("NVARCHAR(50)");

                    b.HasKey("ID");

                    b.ToTable("Country");

                    b.HasData(
                        new
                        {
                            ID = 1,
                            CountryName = "Bangladesh"
                        },
                        new
                        {
                            ID = 2,
                            CountryName = "UK"
                        });
                });

            modelBuilder.Entity("CIM.Models.Customer", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("CountryID")
                        .HasColumnType("int");

                    b.Property<string>("CustomerName")
                        .HasColumnType("NVARCHAR(100)");

                    b.Property<byte[]>("CustomerPhoto")
                        .HasColumnType("VARBINARY(MAX)");

                    b.Property<string>("FatherName")
                        .HasColumnType("NVARCHAR(100)");

                    b.Property<int>("MaritalStatus")
                        .HasColumnType("int");

                    b.Property<string>("MotherName")
                        .HasColumnType("NVARCHAR(100)")
                        .HasMaxLength(100);

                    b.HasKey("ID");

                    b.HasIndex("CountryID");

                    b.ToTable("Customer");
                });

            modelBuilder.Entity("CIM.Models.CustomerAddress", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Address")
                        .HasColumnName("CustomerAddress")
                        .HasColumnType("NVARCHAR(500)");

                    b.Property<int>("CustomerID")
                        .HasColumnType("int");

                    b.HasKey("ID");

                    b.HasIndex("CustomerID");

                    b.ToTable("CustomerAddress");
                });

            modelBuilder.Entity("CIM.Models.Customer", b =>
                {
                    b.HasOne("CIM.Models.Country", "Country")
                        .WithMany("Customers")
                        .HasForeignKey("CountryID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("CIM.Models.CustomerAddress", b =>
                {
                    b.HasOne("CIM.Models.Customer", "Customer")
                        .WithMany("CustomerAddresses")
                        .HasForeignKey("CustomerID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
