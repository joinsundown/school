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


    public class CourseController : ControllerBase
    {

          public static List<UserStudent> DataStudent = new List<UserStudent>
        {

            new UserStudent { UsernameStudent = "ABCD" , PasswordStudent = "1111", IdStudent = "001", NameStudent ="ดำรง หอมจัง", StatusStudent = "Student" ,EmailStudent = "dummuk_toky@hotmail.co.th" },
            new UserStudent { UsernameStudent = "ABCE" , PasswordStudent = "2222", IdStudent = "002", NameStudent ="เหล้าขาว จุบุ", StatusStudent = "Student" ,EmailStudent = "pekpek_toto@hotmail.co.th" }
        };

        public static List<Course> Data_Course = new List<Course>
     {

        new Course { IdCourse = "001", NameCourse = "Test" ,DataStudents = DataStudent.ToArray()},
        new Course { IdCourse = "002", NameCourse = "SSSS" ,DataStudents = DataStudent.ToArray()}


    };

        [HttpGet]
        public ActionResult<IEnumerable<Course>> GetAll_DataCourse()
        {
            return Data_Course.ToList();

        }

        [HttpGet("{id}")]
        public ActionResult<Course> GetById_Course(string id)
        {
            return Data_Course.FirstOrDefault(it => it.IdCourse == id.ToString());
        }


        [HttpPost]
        public Course Add_Course([FromBody] Course CourseAll)
        {

            // var _id = Guid.NewGuid().ToString();
            var item = new Course
            {
                
                IdCourse = CourseAll.IdCourse,
                NameCourse = CourseAll.NameCourse,
           
            };
            Data_Course.Add(item);
            return item;
        }


        [HttpPut  ("{id}")]
        public Course Edit_Course(string id, [FromBody] Course CourseAll)
        {

            var _id = Data_Course.FirstOrDefault(it => it.IdCourse == id.ToString());

            var item = new Course
            {
                IdCourse = id.ToString(),
                NameCourse = CourseAll.NameCourse,
                
            };
            Data_Course.Remove(_id);
            Data_Course.Add(item);

            return item;
        }

         [HttpDelete ("{id}")]
        public void Delete_Course(string id)
        {
            var data = Data_Course.FirstOrDefault(it => it.IdCourse == id.ToString());
            Data_Course.Remove(data);
         
        }


        



    }
}