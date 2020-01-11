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

            new UserStudent { UsernameStudent = "ABCD" , PasswordStudent = "1111", IdStudent = "001", NameStudent ="ดำรง หอมจัง", StatusStudent = "Student" ,EmailStudent = "dummuk_toky@hotmail.co.th" },
            new UserStudent { UsernameStudent = "ABCE" , PasswordStudent = "2222", IdStudent = "002", NameStudent ="เหล้าขาว จุบุ", StatusStudent = "Student" ,EmailStudent = "pekpek_toto@hotmail.co.th" }
        };


        [HttpGet]
        public ActionResult<IEnumerable<UserStudent>> GetAllData_Student()
        {
            return Data_Student.ToList();

        }


        [HttpGet("{id}")]
        public ActionResult<UserStudent> GetById_Student(string id)
        {
            return Data_Student.FirstOrDefault(it => it.IdStudent == id.ToString());
        }


        [HttpPost]
        public UserStudent AddUser_Student([FromBody] UserStudent Student)
        {

            // var _id = Guid.NewGuid().ToString();
            var item = new UserStudent
            {
                // Id_Teacher = _id.ToString(),

                UsernameStudent = Student.UsernameStudent,
                PasswordStudent = Student.PasswordStudent,


                IdStudent = Student.IdStudent,
                NameStudent = Student.NameStudent,
                StatusStudent = Student.StatusStudent,
                EmailStudent = Student.EmailStudent
            };
            Data_Student.Add(item);
            return item;
        }


        [HttpPut("{id}")]
        public UserStudent Edit_Student(string id, [FromBody] UserStudent Student)
        {

            var _id = Data_Student.FirstOrDefault(it => it.IdStudent == id.ToString());

            var item = new UserStudent
            {
                UsernameStudent = Student.UsernameStudent,
                PasswordStudent = Student.PasswordStudent,


                IdStudent = id.ToString(),
                NameStudent = Student.NameStudent,
                StatusStudent = Student.StatusStudent,
                EmailStudent = Student.EmailStudent
            };
            Data_Student.Remove(_id);
            Data_Student.Add(item);

            return item;
        }


        [HttpDelete("{id}")]
        public void Delete_Student(string id)
        {
            var data = Data_Student.FirstOrDefault(it => it.IdStudent == id.ToString());
            Data_Student.Remove(data);

        }


    }


}