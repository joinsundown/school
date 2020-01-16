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

        new UserStudent { IdStudent = "NameNa", NameStudent = "Test" , Score_Mid =" 49" , Score_Final = "34", Coruse_Grade = "D"},

        new UserStudent { IdStudent = "Name222", NameStudent = "Tee214554684684" , Score_Mid =" 33" , Score_Final = "68", Coruse_Grade = "C"}


    };

        public static List<UserTeacher> Teachers = new List<UserTeacher>
     {

        new UserTeacher { IdTeacher = "NameNa", NameTeacher = "Test" , StatusTeacher ="XXX" , EmailTeacher = "XXX@mail.com"},

        new UserTeacher { IdTeacher = "Name222", NameTeacher = "Tee214554684684" , StatusTeacher =" XXXXX" , EmailTeacher = "XXXXXX@mail.com"}


    };

        public static List<Course> CourseData = new List<Course>
     {

        new Course { IdCourse = "12345", NameCourse = "Test" },

        new Course { IdCourse = "Name222", NameCourse = "Tee214554684684" }


    };

        public static List<Opencourse> DataOpenCourse = new List<Opencourse>
     {

        new Opencourse {IdCourse = "12345", NameCourse = "Test", Student = Students.ToArray() , Teacher = Teachers.ToArray() },
        

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
                Score_Mid = "0",
                Score_Final = "0",
                Coruse_Grade = "0",
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


