//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace OnlineShopping.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Wishlist
    {
        public int Id { get; set; }
        public string Product_Id { get; set; }
        public Nullable<int> Customer_Id { get; set; }
        public Nullable<int> Qunatity { get; set; }
        public string Description { get; set; }
    
        public virtual Customer Customer { get; set; }
        public virtual ProductDetail ProductDetail { get; set; }
    }
}
