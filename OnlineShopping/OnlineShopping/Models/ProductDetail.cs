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
    using System.Runtime.Serialization;

    [DataContract]
    
    public partial class ProductDetail
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public ProductDetail()
        {
            this.OrderDetails = new HashSet<OrderDetail>();
            this.Wishlists = new HashSet<Wishlist>();
        }
    
        [DataMember]
        public string Product_Id { get; set; }
        [DataMember]
        public string Product_Name { get; set; }
        [DataMember]
        public int Quantity { get; set; }
        [DataMember]
        public double Unit_Price { get; set; }
        [DataMember]
        public string Product_Description { get; set; }
        [DataMember]
        public string Pictures { get; set; }
        [DataMember]
        public string Color { get; set; }
        [DataMember]
        public string Size { get; set; }
        [DataMember]
        public Nullable<int> Retailer_Id { get; set; }
        [DataMember]
        public string Category_Id { get; set; }
        [DataMember]
        public string BrandName { get; set; }
    
        public virtual Category Category { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<OrderDetail> OrderDetails { get; set; }
        public virtual Retailer Retailer { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Wishlist> Wishlists { get; set; }
    }
}
