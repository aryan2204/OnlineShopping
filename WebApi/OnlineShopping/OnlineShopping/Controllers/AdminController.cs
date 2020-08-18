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
    public class AdminController : ApiController
    {
        private Online_ShoppingEntities db = new Online_ShoppingEntities();

        // GET: api/Admin
        public IQueryable<AdminInfo> GetAdminInfoes()
        {
            return db.AdminInfoes;
        }

        // GET: api/Admin/5
        [ResponseType(typeof(AdminInfo))]
        public IHttpActionResult GetAdminInfo(int id)
        {
            AdminInfo adminInfo = db.AdminInfoes.Find(id);
            if (adminInfo == null)
            {
                return NotFound();
            }

            return Ok(adminInfo);
        }

        // PUT: api/Admin/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutAdminInfo(int id, AdminInfo adminInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != adminInfo.AdminID)
            {
                return BadRequest();
            }

            db.Entry(adminInfo).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AdminInfoExists(id))
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

        // POST: api/Admin
        [ResponseType(typeof(AdminInfo))]
        public IHttpActionResult PostAdminInfo(AdminInfo adminInfo)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.AdminInfoes.Add(adminInfo);

            try
            {
                string email = adminInfo.admin_email;
                int myUser = db.AdminInfoes.Where(u => u.admin_email == adminInfo.admin_email && u.password == adminInfo.password).Count();


                AdminInfo tbl_User2 = db.AdminInfoes.ToList().Find(u => u.admin_email == adminInfo.admin_email && u.password == adminInfo.password);


                if (myUser == 0)
                {
                    return NotFound();
                }

                if (myUser == 1)
                {
                    //tbl_User tbl_User1 = db.tbl_User.Find(email);
                    return Ok(tbl_User2.admin_email);

                }

                else
                {
                    return NotFound();
                }

            }

            //  db.tbl_Admin.Add(tbl_Admin);


            catch (DbUpdateException)
            {
                if (AdminInfoExists(adminInfo.admin_email))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            //return CreatedAtRoute("DefaultApi", new { id = adminInfo.AdminID }, adminInfo);
        }

        private bool AdminInfoExists(string admin_email)
        {
            throw new NotImplementedException();
        }

        // DELETE: api/Admin/5
        [ResponseType(typeof(AdminInfo))]
        public IHttpActionResult DeleteAdminInfo(int id)
        {
            AdminInfo adminInfo = db.AdminInfoes.Find(id);
            if (adminInfo == null)
            {
                return NotFound();
            }

            db.AdminInfoes.Remove(adminInfo);
            db.SaveChanges();

            return Ok(adminInfo);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool AdminInfoExists(int id)
        {
            return db.AdminInfoes.Count(e => e.AdminID == id) > 0;
        }
    }
}