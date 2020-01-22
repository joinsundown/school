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


        public static List<UserStudent> DataStudent = new List<UserStudent>
        {

            new UserStudent { UsernameStudent = "ABCD" , PasswordStudent = "1111", IdStudent = "001", NameStudent ="ดำรง หอมจัง", StatusStudent = "Student" ,EmailStudent = "dummuk_toky@hotmail.co.th",Score_Mid ="30", Score_Final = "50", Grade ="B" },
            new UserStudent { UsernameStudent = "ABCE" , PasswordStudent = "2222", IdStudent = "002", NameStudent ="เหล้าขาว จุบุ", StatusStudent = "Student" ,EmailStudent = "pekpek_toto@hotmail.co.th",Score_Mid ="50", Score_Final = "50", Grade ="A" }
        };
        public static List<Course> CourseData = new List<Course>
     {

        new Course { IdCourse = "001", NameCourse = "Abc" , Students = DataStudent.ToArray()},
        new Course { IdCourse = "002", NameCourse = "ssssss" , Students = DataStudent.ToArray()}


    };




        [HttpGet]
        public ActionResult<IEnumerable<UserStudent>> GetAllData_Student()
        {
            return DataStudent.ToList();

        }


        [HttpGet("{id}")]
        public ActionResult<UserStudent> GetById_Student(string id)
        {
            return DataStudent.FirstOrDefault(it => it.IdStudent == id.ToString());
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
                EmailStudent = Student.EmailStudent,

                Course = CourseData.ToArray()
            };
            DataStudent.Add(item);
            return item;
        }


        [HttpPut("{id}")]
        public UserStudent Edit_Student(string id, [FromBody] UserStudent Student)
        {

            var _id = DataStudent.FirstOrDefault(it => it.IdStudent == id.ToString());

            var item = new UserStudent
            {
                UsernameStudent = Student.UsernameStudent,
                PasswordStudent = Student.PasswordStudent,


                IdStudent = id.ToString(),
                NameStudent = Student.NameStudent,
                StatusStudent = Student.StatusStudent,
                EmailStudent = Student.EmailStudent
            };
            DataStudent.Remove(_id);
            DataStudent.Add(item);

            return item;
        }


        [HttpDelete("{id}")]
        public void Delete_Student(string id)
        {
            var data = DataStudent.FirstOrDefault(it => it.IdStudent == id.ToString());
            DataStudent.Remove(data);

        }



        //     //    data.Student.ToList().Add(item);
        //     // var len = ss.Length;
        //     // Array.Resize(ref ss, ss.Length + 1);
        //     // var len = data.Student.Length;
        //     // Array arr = new Array [len];
        //     // Console.WriteLine(arr.Length);
        //     // for (int i = 0; i < len; i++)
        //     // {

        //     //      Console.WriteLine(i);
        //     // }
        //     return item2;

        // }

    }





}