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

namespace OnlineShopping.Controllers
{
    public class RetailerLogin1Controller : ApiController
    {
        private Online_ShoppingEntities5 db = new Online_ShoppingEntities5();

        // GET: api/RetailerLogin1
        public IQueryable<Retailer> GetRetailers()
        {
            return db.Retailers;
        }

        // GET: api/RetailerLogin1/5
        [ResponseType(typeof(Retailer))]
        public IHttpActionResult GetRetailer(int id)
        {
            Retailer retailer = db.Retailers.Find(id);
            if (retailer == null)
            {
                return NotFound();
            }


            return Ok(retailer);
        }

        // PUT: api/RetailerLogin1/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutRetailer(int id, Retailer retailer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != retailer.Retailer_Id)
            {
                return BadRequest();
            }

            db.Entry(retailer).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RetailerExists(id))
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

        // POST: api/RetailerLogin1
        [ResponseType(typeof(Retailer))]
        public IHttpActionResult PostRetailer(Retailer retailer)
        {
            db.LoginRetailer(retailer.Retailer_EMail);
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            

            //db.Retailers.Add(retailer);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = retailer.Retailer_Id }, retailer);
        }

        // DELETE: api/RetailerLogin1/5
        [ResponseType(typeof(Retailer))]
        public IHttpActionResult DeleteRetailer(int id)
        {
            Retailer retailer = db.Retailers.Find(id);
            if (retailer == null)
            {
                return NotFound();
            }

            db.Retailers.Remove(retailer);
            db.SaveChanges();

            return Ok(retailer);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool RetailerExists(int id)
        {
            return db.Retailers.Count(e => e.Retailer_Id == id) > 0;
        }
    }
}