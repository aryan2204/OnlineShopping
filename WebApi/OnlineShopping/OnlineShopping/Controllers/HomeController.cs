using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using OnlineShopping.Models;

namespace OnlineShopping.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class HomeController : ApiController
    {

        private Online_ShoppingEntities db = new Online_ShoppingEntities();


        // GET: api/Home
        public IHttpActionResult GetProductDetails()
        {
            List<ViewProductDetails_Result> viewProductDetails = new List<ViewProductDetails_Result>();
            foreach(var item in db.ViewProductDetails())
            {
                viewProductDetails.Add(item);
            }
            return Ok(viewProductDetails);
        }

        // GET: api/Home/5
        [ResponseType(typeof(ProductDetail))]
        public IHttpActionResult GetProductDetail(int id)
        {
            List<ProductView_Result> productViewbyID = new List<ProductView_Result>();
            foreach (var item in db.ProductView(id))
            {
                productViewbyID.Add(item);
            }
            if (productViewbyID == null)
            {
                return NotFound();
            }

            return Ok(productViewbyID);
        }

        // PUT: api/Home/5
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

        // POST: api/Home
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

        // DELETE: api/Home/5
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