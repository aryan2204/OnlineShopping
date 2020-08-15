﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace OnlineShoppingProject.Models
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class Online_ShoppingEntities : DbContext
    {
        public Online_ShoppingEntities()
            : base("name=Online_ShoppingEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<AdminInfo> AdminInfoes { get; set; }
        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<OrderDetail> OrderDetails { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<Payment> Payments { get; set; }
        public virtual DbSet<ProductDetail> ProductDetails { get; set; }
        public virtual DbSet<Retailer> Retailers { get; set; }
        public virtual DbSet<Wishlist> Wishlists { get; set; }
    
        public virtual int DeleteProductDetails(Nullable<int> id)
        {
            var idParameter = id.HasValue ?
                new ObjectParameter("id", id) :
                new ObjectParameter("id", typeof(int));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("DeleteProductDetails", idParameter);
        }
    
        public virtual int InsertProductDetails(Nullable<int> id, string name, Nullable<int> quan, Nullable<double> price, string prodDescription, string brand, string size, string col, string pic)
        {
            var idParameter = id.HasValue ?
                new ObjectParameter("id", id) :
                new ObjectParameter("id", typeof(int));
    
            var nameParameter = name != null ?
                new ObjectParameter("name", name) :
                new ObjectParameter("name", typeof(string));
    
            var quanParameter = quan.HasValue ?
                new ObjectParameter("quan", quan) :
                new ObjectParameter("quan", typeof(int));
    
            var priceParameter = price.HasValue ?
                new ObjectParameter("price", price) :
                new ObjectParameter("price", typeof(double));
    
            var prodDescriptionParameter = prodDescription != null ?
                new ObjectParameter("prodDescription", prodDescription) :
                new ObjectParameter("prodDescription", typeof(string));
    
            var brandParameter = brand != null ?
                new ObjectParameter("brand", brand) :
                new ObjectParameter("brand", typeof(string));
    
            var sizeParameter = size != null ?
                new ObjectParameter("size", size) :
                new ObjectParameter("size", typeof(string));
    
            var colParameter = col != null ?
                new ObjectParameter("col", col) :
                new ObjectParameter("col", typeof(string));
    
            var picParameter = pic != null ?
                new ObjectParameter("pic", pic) :
                new ObjectParameter("pic", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("InsertProductDetails", idParameter, nameParameter, quanParameter, priceParameter, prodDescriptionParameter, brandParameter, sizeParameter, colParameter, picParameter);
        }
    
        public virtual int UpdateProductDetails(Nullable<int> id, string name, Nullable<int> quan, Nullable<double> price, string prodDescription, string brand, string size, string col, string pic)
        {
            var idParameter = id.HasValue ?
                new ObjectParameter("id", id) :
                new ObjectParameter("id", typeof(int));
    
            var nameParameter = name != null ?
                new ObjectParameter("name", name) :
                new ObjectParameter("name", typeof(string));
    
            var quanParameter = quan.HasValue ?
                new ObjectParameter("quan", quan) :
                new ObjectParameter("quan", typeof(int));
    
            var priceParameter = price.HasValue ?
                new ObjectParameter("price", price) :
                new ObjectParameter("price", typeof(double));
    
            var prodDescriptionParameter = prodDescription != null ?
                new ObjectParameter("prodDescription", prodDescription) :
                new ObjectParameter("prodDescription", typeof(string));
    
            var brandParameter = brand != null ?
                new ObjectParameter("brand", brand) :
                new ObjectParameter("brand", typeof(string));
    
            var sizeParameter = size != null ?
                new ObjectParameter("size", size) :
                new ObjectParameter("size", typeof(string));
    
            var colParameter = col != null ?
                new ObjectParameter("col", col) :
                new ObjectParameter("col", typeof(string));
    
            var picParameter = pic != null ?
                new ObjectParameter("pic", pic) :
                new ObjectParameter("pic", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("UpdateProductDetails", idParameter, nameParameter, quanParameter, priceParameter, prodDescriptionParameter, brandParameter, sizeParameter, colParameter, picParameter);
        }
    
        public virtual ObjectResult<ViewProductDetails_Result> ViewProductDetails()
        {
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<ViewProductDetails_Result>("ViewProductDetails");
        }
    
        public virtual int DeleteProductForRetailer(string name)
        {
            var nameParameter = name != null ?
                new ObjectParameter("name", name) :
                new ObjectParameter("name", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("DeleteProductForRetailer", nameParameter);
        }
    
        public virtual ObjectResult<string> LoginAdmin(string pass)
        {
            var passParameter = pass != null ?
                new ObjectParameter("pass", pass) :
                new ObjectParameter("pass", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<string>("LoginAdmin", passParameter);
        }
    
        public virtual int LoginRetailer(string pass)
        {
            var passParameter = pass != null ?
                new ObjectParameter("pass", pass) :
                new ObjectParameter("pass", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("LoginRetailer", passParameter);
        }
    
        public virtual int UpdateAdminPassword(string pass, string name)
        {
            var passParameter = pass != null ?
                new ObjectParameter("pass", pass) :
                new ObjectParameter("pass", typeof(string));
    
            var nameParameter = name != null ?
                new ObjectParameter("name", name) :
                new ObjectParameter("name", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("UpdateAdminPassword", passParameter, nameParameter);
        }
    
        public virtual int UpdateCustomerPassword(string pass, string email)
        {
            var passParameter = pass != null ?
                new ObjectParameter("pass", pass) :
                new ObjectParameter("pass", typeof(string));
    
            var emailParameter = email != null ?
                new ObjectParameter("email", email) :
                new ObjectParameter("email", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("UpdateCustomerPassword", passParameter, emailParameter);
        }
    
        public virtual int UpdateProductForRetailer(Nullable<int> id, string name, Nullable<int> quan, Nullable<double> price)
        {
            var idParameter = id.HasValue ?
                new ObjectParameter("id", id) :
                new ObjectParameter("id", typeof(int));
    
            var nameParameter = name != null ?
                new ObjectParameter("name", name) :
                new ObjectParameter("name", typeof(string));
    
            var quanParameter = quan.HasValue ?
                new ObjectParameter("quan", quan) :
                new ObjectParameter("quan", typeof(int));
    
            var priceParameter = price.HasValue ?
                new ObjectParameter("price", price) :
                new ObjectParameter("price", typeof(double));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("UpdateProductForRetailer", idParameter, nameParameter, quanParameter, priceParameter);
        }
    
        public virtual int UpdateRetailerPassword(string pass, string name)
        {
            var passParameter = pass != null ?
                new ObjectParameter("pass", pass) :
                new ObjectParameter("pass", typeof(string));
    
            var nameParameter = name != null ?
                new ObjectParameter("name", name) :
                new ObjectParameter("name", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("UpdateRetailerPassword", passParameter, nameParameter);
        }
    
        public virtual int InsertRetailer(string name, string email, string num)
        {
            var nameParameter = name != null ?
                new ObjectParameter("name", name) :
                new ObjectParameter("name", typeof(string));
    
            var emailParameter = email != null ?
                new ObjectParameter("email", email) :
                new ObjectParameter("email", typeof(string));
    
            var numParameter = num != null ?
                new ObjectParameter("num", num) :
                new ObjectParameter("num", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction("InsertRetailer", nameParameter, emailParameter, numParameter);
        }
    }
}
