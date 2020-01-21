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
        public static List<UserStudent> DataStudent = new List<UserStudent>
        {

            new UserStudent { UsernameStudent = "ABCD" , PasswordStudent = "1111", IdStudent = "001", NameStudent ="ดำรง หอมจัง", StatusStudent = "Student" ,EmailStudent = "dummuk_toky@hotmail.co.th"},
            new UserStudent { UsernameStudent = "ABCE" , PasswordStudent = "2222", IdStudent = "002", NameStudent ="เหล้าขาว จุบุ", StatusStudent = "Student" ,EmailStudent = "pekpek_toto@hotmail.co.th" }
        };

        public static List<Course> CourseData = new List<Course>
     {

        new Course { IdCourse = "001", NameCourse = "coursese1" , Students = DataStudent.ToArray()},
        new Course { IdCourse = "002", NameCourse = "coursese2" , Students = DataStudent.ToArray()}


    };

        public static List<UserTeacher> DataTeacher = new List<UserTeacher>
     {

        new UserTeacher {  UsernameTeacher = "teacher1", PasswordTeacher = "1111", IdTeacher = "0001", NameTeacher ="Nameteacher1", StatusTeacher = "Teacher" ,EmailTeacher = "Timber_Comfort@hotmail.co.th",Course = CourseData.ToArray() },
        new UserTeacher {  UsernameTeacher = "teacher2", PasswordTeacher = "2222", IdTeacher = "0002", NameTeacher ="Nameteacher2", StatusTeacher = "Teacher" ,EmailTeacher = "Timber_xxxxxxx@hotmail.co.th",Course = CourseData.ToArray() },
        new UserTeacher {  UsernameTeacher = "teacher3", PasswordTeacher = "3333", IdTeacher = "0003", NameTeacher ="Nameteacher3", StatusTeacher = "Teacher" ,EmailTeacher = "Timmy_Commfort@hotmail.co.th",Course = CourseData.ToArray() }

    };



        [HttpGet]
        public ActionResult<IEnumerable<UserTeacher>> GetAllDataTeacher()
        {
            return DataTeacher.ToList();

        }


        [HttpGet("{id}")]
        public ActionResult<UserTeacher> GetById_Teacher(string id)
        {
            return DataTeacher.FirstOrDefault(it => it.IdTeacher == id.ToString());
        }


        [HttpPost]
        public UserTeacher AddUser_Teacher([FromBody] UserTeacher Teacher)
        {

            var item = new UserTeacher
            {
            
                UsernameTeacher = Teacher.UsernameTeacher,
                PasswordTeacher = Teacher.PasswordTeacher,

                IdTeacher = Teacher.IdTeacher,
                NameTeacher = Teacher.NameTeacher,
                StatusTeacher = Teacher.StatusTeacher,
                EmailTeacher = Teacher.EmailTeacher,
                Course = CourseData.ToArray()
            };
            DataTeacher.Add(item);
            return item;
        }


        [HttpPut("{id}")]
        public UserTeacher AddCourseToTeacher(string id, [FromBody] Course coure)
        {

            var data = DataTeacher.FirstOrDefault(it => it.IdTeacher == id.ToString());
            var sss = data.Course.ToList();

         
            var item = new Course
            {
   
                IdCourse = coure.IdCourse,
                NameCourse = coure.NameCourse

            };
            sss.Add(item);
            Console.WriteLine(sss.ToList());

            var item2 = new UserTeacher
            {
                IdTeacher = id.ToString(),
                UsernameTeacher = data.UsernameTeacher,
                PasswordTeacher = data.PasswordTeacher,
                NameTeacher = data.NameTeacher,
                StatusTeacher = data.StatusTeacher,
                EmailTeacher = data.EmailTeacher,
                Course = sss.ToArray()

            };

            DataTeacher.Remove(data);
            DataTeacher.Add(item2);
        
       
            return item2;

        }
    

        

        }

       


    }



