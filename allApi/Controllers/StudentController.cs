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

    public class StudentController : ControllerBase
    {

        public static List<UserStudent> Data_Student = new List<UserStudent>
        {

            new UserStudent { Username_Student = "sitti" , Password_Student = "111", Id_Student = "001", FirstName_Student ="AAAAA", LaseName_Student = "BBBB" ,Email_Student = "EEEEE@hotmail.com" },
            new UserStudent { Username_Student = "Tes" , Password_Student = "222", Id_Student = "002", FirstName_Student ="BBB", LaseName_Student = "DDD" ,Email_Student = "CCCCC@hotmail.com" }
        };


        [HttpGet]
        public ActionResult<IEnumerable<UserStudent>> GetAllData_Student()
        {
            return Data_Student.ToList();

        }


        [HttpGet("{id}")]
        public ActionResult<UserStudent> GetById_Student(string id)
        {
            return Data_Student.FirstOrDefault(it => it.Id_Student == id.ToString());
        }


        [HttpPost]
        public UserStudent AddUser_Student([FromBody] UserStudent Student)
        {

            // var _id = Guid.NewGuid().ToString();
            var item = new UserStudent
            {
                // Id_Teacher = _id.ToString(),

                Username_Student = Student.Username_Student,
                Password_Student = Student.Password_Student,


                Id_Student = Student.Id_Student,
                FirstName_Student = Student.FirstName_Student,
                LaseName_Student = Student.LaseName_Student,
                Email_Student = Student.Email_Student
            };
            Data_Student.Add(item);
            return item;
        }


        [HttpPut("{id}")]
        public UserStudent Eidit_Student(string id, [FromBody] UserStudent Student)
        {

            var _id = Data_Student.FirstOrDefault(it => it.Id_Student == id.ToString());

            var item = new UserStudent
            {
                Username_Student = Student.Username_Student,
                Password_Student = Student.Password_Student,


                Id_Student = id.ToString(),
                FirstName_Student = Student.FirstName_Student,
                LaseName_Student = Student.LaseName_Student,
                Email_Student = Student.Email_Student
            };
            Data_Student.Remove(_id);
            Data_Student.Add(item);

            return item;
        }


        [HttpDelete("{id}")]
        public void Delete_Student(string id)
        {
            var data = Data_Student.FirstOrDefault(it => it.Id_Student == id.ToString());
            Data_Student.Remove(data);

        }


    }


}