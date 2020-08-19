using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using OnlineShopping.Models;
using System.Web.Http.Cors;
namespace OnlineShopping.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class ProductDetailsController : ApiController
    {
        private Online_ShoppingEntities4 db = new Online_ShoppingEntities4();

        // GET: api/ProductDetails
        public IQueryable<ProductDetail> GetProductDetails()
        {
            return db.ProductDetails;
        }

        // GET: api/ProductDetails/5
        [ResponseType(typeof(ProductDetail))]
        public IHttpActionResult GetProductDetail(string id)
        {
            ProductDetail productDetail = db.ProductDetails.Find(id);
            if (productDetail == null)
            {
                return NotFound();
            }

            return Ok(productDetail);
        }

        // PUT: api/ProductDetails/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutProductDetail(string id, ProductDetail productDetail)
        {
            db.UpdateProductDetails(productDetail.Product_Id, productDetail.Product_Name, productDetail.Quantity, productDetail.Unit_Price,
                  productDetail.Product_Description, productDetail.Pictures, productDetail.Color, productDetail.Size, productDetail.Retailer_Id, productDetail.Category_Id, productDetail.BrandName);
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            //if (id != productDetail.Product_Id)
            //{
            //    return BadRequest();
            //}

            //db.Entry(productDetail).State = EntityState.Modified;

            //try
            //{
            db.SaveChanges();
            //}
            //catch (DbUpdateConcurrencyException)
            //{
            //    if (!ProductDetailExists(id))
            //    {
            //        return NotFound();
            //    }
            //    else
            //    {
            //        throw;
            //    }
            //}

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/ProductDetails
        [ResponseType(typeof(ProductDetail))]
        public IHttpActionResult PostProductDetail(ProductDetail productDetail)
        {
            db.InsertProductDetails(productDetail.Product_Id, productDetail.Product_Name, productDetail.Quantity, productDetail.Unit_Price,
                  productDetail.Product_Description, productDetail.Pictures, productDetail.Color, productDetail.Size, productDetail.Retailer_Id, productDetail.Category_Id,productDetail.BrandName);
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            //db.ProductDetails.Add(productDetail);
            db.SaveChanges();


            return CreatedAtRoute("DefaultApi", new { id = productDetail.Product_Id }, productDetail);
            

            
        }

        // DELETE: api/ProductDetails/5
        [ResponseType(typeof(ProductDetail))]
        public IHttpActionResult DeleteProductDetail(string id)
        {
            //ProductDetail productDetail = db.ProductDetails.Find(id);
            db.DeleteProductDetails(id);
            //if (productDetail == null)
            //{
            //    return NotFound();
            //}

            //db.ProductDetails.Remove(productDetail);
            db.SaveChanges();

            return Ok(id);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ProductDetailExists(string id)
        {
            return db.ProductDetails.Count(e => e.Product_Id == id) > 0;
        }
    }
}