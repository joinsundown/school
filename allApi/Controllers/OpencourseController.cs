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



    public class OpencourseController : ControllerBase
    {
        public static List<UserStudent> Students = new List<UserStudent>
     {

        new UserStudent { IdStudent = "IdStudent1", NameStudent = "Student1"  },

        new UserStudent { IdStudent = "IdStudent2", NameStudent = "Student2" }


    };

        public static List<UserTeacher> Teachers = new List<UserTeacher>
     {

        new UserTeacher { IdTeacher = "Name01", NameTeacher = "Test1" , StatusTeacher ="ST1" , EmailTeacher = "AAA@mail.com"},

        new UserTeacher { IdTeacher = "Name02", NameTeacher = "Tee2" , StatusTeacher =" ST2" , EmailTeacher = "BBB@mail.com"}


    };

        public static List<Course> CourseData = new List<Course>
     {

        new Course { IdCourse = "0101", NameCourse = "course1" },

        new Course { IdCourse = "0202", NameCourse = "course2" }


    };

        public static List<Opencourse> DataOpenCourse = new List<Opencourse>
     {

        new Opencourse {IdCourse = "010111", NameCourse = "courses", Student = Students.ToArray() , Teacher = Teachers.ToArray() },
        

    };

        [HttpGet]
        public ActionResult<IEnumerable<Opencourse>> GetAll_DataOpencourse()
        {
            return DataOpenCourse.ToList();

        }

       


        // [HttpGet("{id}")]
        // public ActionResult<Opencourse> GetById_Opencourse(string id)
        // {
        //     return Data_Course_Id.FirstOrDefault(it => it.Course_Id == id.ToString());
        // }
        [HttpPut("{id}")]
        public Opencourse AddStudentInOpenCourse(string id, [FromBody] UserStudent Studentx)
        {
            var data = DataOpenCourse.FirstOrDefault(it => it.IdCourse == id.ToString());
             var sss = data.Student.ToList();
             Console.WriteLine(data.Student.ToList());
            
            // var ss = data.Student.ToArray();
            var item = new UserStudent
            {
                IdStudent = Studentx.IdStudent,
                UsernameStudent = Studentx.UsernameStudent,
                PasswordStudent = Studentx.PasswordStudent,
                NameStudent = Studentx.NameStudent,
                StatusStudent = Studentx.StatusStudent,
                EmailStudent = Studentx.EmailStudent,
             
            };
            sss.Add(item);
            Console.WriteLine(sss.ToList());

            var item2 = new Opencourse
            {
                IdCourse = id.ToString(),
                NameCourse = data.NameCourse,
                Teacher = data.Teacher,
                Student = sss.ToArray()
            };

            DataOpenCourse.Remove(data);
            DataOpenCourse.Add(item2);
        //    data.Student.ToList().Add(item);
        // var len = ss.Length;
        // Array.Resize(ref ss, ss.Length + 1);
            // var len = data.Student.Length;
            // Array arr = new Array [len];
            // Console.WriteLine(arr.Length);
            // for (int i = 0; i < len; i++)
            // {
               
            //      Console.WriteLine(i);
            // }
            return item2;
            // var item = new Opencourse
            // {
            //     IdCourse = id.ToString(),
            //     NameCourse = data.NameCourse,
            //     Student = data.Student,
            // };
        }



        [HttpPost]
        public Opencourse AddOpencourse([FromBody] Course Coursex)
        {


            var item = new Opencourse
            {

                IdCourse = Coursex.IdCourse,
                NameCourse = Coursex.NameCourse,

            };
            DataOpenCourse.Add(item);
            return item;
        }


        [HttpPost]
        public UserStudent AddStudent([FromBody] UserStudent Coursex)
        {


            var item = new UserStudent
            {

                IdStudent = Coursex.IdStudent,
                UsernameStudent = Coursex.UsernameStudent,
                PasswordStudent = Coursex.PasswordStudent,
                NameStudent = Coursex.NameStudent,
                StatusStudent = Coursex.StatusStudent,
                EmailStudent = Coursex.EmailStudent

            };
            Students.Add(item);
            return item;
        }


        // [HttpPut("{id}")]
        // public Opencourse Edit_Opencourse(string id, [FromBody] Opencourse OpencourseSS)
        // {

        //     var _id = Data_Course_Id.FirstOrDefault(it => it.Course_Id == id.ToString());

        //     var item = new Opencourse
        //     {


        //         Course_Id = id.ToString(),
        //         Course_Name = OpencourseSS.Course_Name,

        //         Student = OpencourseSS.Student,

        //         Teacher_Name = OpencourseSS.Teacher_Name

        //     };
        //     Data_Course_Id.Remove(_id);
        //     Data_Course_Id.Add(item);

        //     return item;
        // }



        // [HttpDelete("{id}")]
        // public void Delete_Opencourse(string id)
        // {
        //     var data = Data_Course_Id.FirstOrDefault(it => it.Course_Id == id.ToString());
        //     Data_Course_Id.Remove(data);

        // }

    }
}


