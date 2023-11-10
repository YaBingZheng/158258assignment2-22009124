using System;
using System.Web.Mvc;
using a2.Models;
using System.Linq;

namespace asignment_2.Controllers
{
    public class RegistController : Controller
    {
        private a2Entities2 db = new a2Entities2();

        public ActionResult regist()
        {
            return View();
        }

        [HttpPost]
        public ActionResult regist(string username, string pwd)
        {
            if (string.IsNullOrEmpty(username))
            {
                ViewBag.error = "User name cannot be empty!";
                return View();
            }
            else if (string.IsNullOrEmpty(pwd))
            {
                ViewBag.error = "Password cannot be empty!";
                return View();
            }
            else
            {
                // Check if the username already exists in the database
                var existingUser = db.user.FirstOrDefault(u => u.username == username);

                if (existingUser != null)
                {
                    ViewBag.error = "Username already exists!";
                    return View();
                }

                var user = new user
                {
                    username = username,
                    pwd = pwd
                };

                db.user.Add(user);
                db.SaveChanges();

                return Redirect("/Login/indexback");
            }
        }

        public ActionResult Success()
        {
            return View();
        }
    }
}
