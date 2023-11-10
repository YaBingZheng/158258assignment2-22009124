
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using a2.Models;

namespace asignment_2.Controllers

{
    public class LoginController : Controller
    {   //数据库访问对象
        private a2Entities2 db = new a2Entities2();
        public ActionResult Indexback()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Indexback(string username, string pwd)
        {
            //1.数据校验
            if (string.IsNullOrEmpty(username))
            {
                ViewBag.error = "User name cannot be empty！";
            }
            else if (string.IsNullOrEmpty(pwd))
            {
                ViewBag.error = "Password cannot be empty！";
            }
            //2.查询数据库
            else
            {
                user u = db.user.FirstOrDefault(p => p.username == username && p.pwd == pwd);
                if (u == null)
                {
                    ViewBag.error = "Incorrect username or password！";
                    ViewBag.username = username;
                }
                else
                {
                    return Redirect("/Home/Index");
                }
            }
            ViewBag.username = username;

            return View();
        }
    }
}