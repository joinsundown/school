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

            new UserStudent { UsernameStudent = "test1" , PasswordStudent = "1111", IdStudent = "001", NameStudent ="ดำรง หอมจัง", StatusStudent = "Student" ,EmailStudent = "dummuk_toky@hotmail.co.th" },
            new UserStudent { UsernameStudent = "test2" , PasswordStudent = "2222", IdStudent = "002", NameStudent ="เหล้าขาว จุบุ", StatusStudent = "Student" ,EmailStudent = "pekpek_toto@hotmail.co.th" }
        };

        public static List<Course> DataCourse = new List<Course>
     {

        new Course { IdCourse = "1001", NameCourse = "วิชาภาษาไทย" ,Students = DataStudent.ToArray()},
        new Course { IdCourse = "2002", NameCourse = "วิชาภาษาอะไร" ,Students = DataStudent.ToArray()}


    };

        [HttpGet]
        public ActionResult<IEnumerable<Course>> GetAll_DataCourse()
        {
            return DataCourse.ToList();

        }

        [HttpGet("{id}")]
        public ActionResult<Course> GetById_Course(string id)
        {
            return DataCourse.FirstOrDefault(it => it.IdCourse == id.ToString());
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
            DataCourse.Add(item);
            return item;
        }


        [HttpPut  ("{id}")]
        public Course Edit_Course(string id, [FromBody] Course CourseAll)
        {

            var _id = DataCourse.FirstOrDefault(it => it.IdCourse == id.ToString());

            var item = new Course
            {
                IdCourse = id.ToString(),
                NameCourse = CourseAll.NameCourse,
                
            };
            DataCourse.Remove(_id);
            DataCourse.Add(item);

            return item;
        }

         [HttpDelete ("{id}")]
        public void Delete_Course(string id)
        {
            var data = DataCourse.FirstOrDefault(it => it.IdCourse == id.ToString());
            DataCourse.Remove(data);
         
        }


         [HttpPut("{id}")]
        public Course CourseInStudent(string id, [FromBody] UserStudent Student)
        {

            var data = DataCourse.FirstOrDefault(it => it.IdCourse == id.ToString());
            var sss = data.Students.ToList();

         
            var item = new UserStudent
            {
   
                IdStudent = id.ToString(),
                UsernameStudent = Student.UsernameStudent,
                PasswordStudent = Student.PasswordStudent,
                NameStudent= Student.NameStudent,
                StatusStudent = Student.StatusStudent,
                EmailStudent= Student.EmailStudent,
                

            };
            sss.Add(item);
            Console.WriteLine(sss.ToList());

            var item2 = new Course
            {
                
                IdCourse = data.IdCourse,
                NameCourse = data.NameCourse,
                Students = sss.ToArray()
            };

            DataCourse.Remove(data);
            DataCourse.Add(item2);
            return item2;
        }

    }
}