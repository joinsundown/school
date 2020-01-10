using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using allApi.Models;


namespace allApi.Controllers
{


    [ApiController]
    [Route("api/[controller]/[action]")]


    public class TeacherController : ControllerBase
    {

        public static List<UserTeacher> Data_Teacher = new List<UserTeacher>
     {

        new UserTeacher {  Username_Teacher = "Teacher", Password_Teacher = "1111", Id_Teacher = "001", FirstName_Teacher ="Supterman", LaseName_Teacher = "Deecee" ,Email_Teacher = "Dee@hotmail.com" },
        new UserTeacher {  Username_Teacher = "SSer", Password_Teacher = "2222", Id_Teacher = "002", FirstName_Teacher ="Spitderman", LaseName_Teacher = "Marvel" ,Email_Teacher = "Marr@hotmail.com" }

    };

        [HttpGet]
        public ActionResult<IEnumerable<UserTeacher>> GetAll_DataTeacher()
        {
            return Data_Teacher.ToList();

        }


        [HttpGet("{id}")]
        public ActionResult<UserTeacher> GetById_Teacher(string id)
        {
            return Data_Teacher.FirstOrDefault(it => it.Id_Teacher == id.ToString());
        }


        [HttpPost]
        public UserTeacher AddUser_Teacher([FromBody] UserTeacher Teacher)
        {

            // var _id = Guid.NewGuid().ToString();
            var item = new UserTeacher
            {
                // Id_Teacher = _id.ToString(),
                Username_Teacher = Teacher.Username_Teacher,
                Password_Teacher = Teacher.Password_Teacher,

                Id_Teacher = Teacher.Id_Teacher,
                FirstName_Teacher = Teacher.FirstName_Teacher,
                LaseName_Teacher = Teacher.LaseName_Teacher,
                Email_Teacher = Teacher.Email_Teacher
            };
            Data_Teacher.Add(item);
            return item;
        }

        [HttpPut("{id}")]
        public UserTeacher Eidit_Teacher(string id, [FromBody] UserTeacher Teacher)
        {

            var _id = Data_Teacher.FirstOrDefault(it => it.Id_Teacher == id.ToString());

            var item = new UserTeacher
            {

                Username_Teacher = Teacher.Username_Teacher,
                Password_Teacher = Teacher.Password_Teacher,

                Id_Teacher = id.ToString(),
                FirstName_Teacher = Teacher.FirstName_Teacher,
                LaseName_Teacher = Teacher.LaseName_Teacher,
                Email_Teacher = Teacher.Email_Teacher
            };
            Data_Teacher.Remove(_id);
            Data_Teacher.Add(item);

            return item;
        }

        [HttpDelete("{id}")]
        public void Delete_Teacher(string id)
        {
            var data = Data_Teacher.FirstOrDefault(it => it.Id_Teacher == id.ToString());
            Data_Teacher.Remove(data);

        }



    }

}

