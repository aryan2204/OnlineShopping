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
        private Online_ShoppingEntities db = new Online_ShoppingEntities();

        // GET: api/ProductDetails
        public IHttpActionResult GetProductDetails()
        {
            List<ViewProductDetails_Result> viewProductDetails = new List<ViewProductDetails_Result>();
            foreach (var item in db.ViewProductDetails())
            {
                viewProductDetails.Add(item);
            }
            return Ok(viewProductDetails);
        }

        // GET: api/ProductDetails/5
        [ResponseType(typeof(ProductDetail))]
        public IHttpActionResult GetProductDetail(int id)
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
        public IHttpActionResult PutProductDetail(int id, ProductDetail productDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != productDetail.Product_Id)
            {
                return BadRequest();
            }

            db.Entry(productDetail).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/ProductDetails
        [ResponseType(typeof(ProductDetail))]
        public IHttpActionResult PostProductDetail(ProductDetail productDetail)
        {

            db.InsertProductDetails(productDetail.Product_Id, productDetail.Product_Name, productDetail.Quantity, productDetail.Unit_Price,
                productDetail.Product_Description, productDetail.BrandName, productDetail.Size, productDetail.Color, productDetail.Pictures);
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
        public IHttpActionResult DeleteProductDetail(int id)
        {
            ProductDetail productDetail = db.ProductDetails.Find(id);
            if (productDetail == null)
            {
                return NotFound();
            }

            db.ProductDetails.Remove(productDetail);
            db.SaveChanges();

            return Ok(productDetail);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ProductDetailExists(int id)
        {
            return db.ProductDetails.Count(e => e.Product_Id == id) > 0;
        }
    }
}