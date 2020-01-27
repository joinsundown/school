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

            new UserStudent { UsernameStudent = "ABCD" , PasswordStudent = "1111", IdStudent = "001", NameStudent ="ดำรง หอมจัง", StatusStudent = "Student" ,EmailStudent = "dummuk_toky@hotmail.co.th",Score_Mid ="30", Score_Final = "50", Grade ="B"},
            new UserStudent { UsernameStudent = "ABCE" , PasswordStudent = "2222", IdStudent = "002", NameStudent ="เหล้าขาว จุบุ", StatusStudent = "Student" ,EmailStudent = "pekpek_toto@hotmail.co.th" ,Score_Mid ="50", Score_Final = "50", Grade ="A" }
        };

        public static List<Course> CourseData = new List<Course>
     {

        new Course { IdCourse = "111001", NameCourse = "coursese1" , Students = DataStudent.ToArray()},
        // new Course { IdCourse = "111002", NameCourse = "coursese2" , Students = DataStudent.ToArray()}


    };

        public static List<UserTeacher> DataTeacher = new List<UserTeacher>
     {

        new UserTeacher {  UsernameTeacher = "teacher1", PasswordTeacher = "1111", IdTeacher = "1111", NameTeacher ="Nameteacher1", StatusTeacher = "Teacher" ,EmailTeacher = "Timber_Comfort@hotmail.co.th",Course = CourseData.ToArray() },
        new UserTeacher {  UsernameTeacher = "teacher2", PasswordTeacher = "2222", IdTeacher = "2222", NameTeacher ="Nameteacher2", StatusTeacher = "Teacher" ,EmailTeacher = "Timber_Comfort@hotmail.co.th",Course = CourseData.ToArray() }
        // new UserTeacher {  UsernameTeacher = "teacher3", PasswordTeacher = "3333", IdTeacher = "3333", NameTeacher ="Nameteacher3", StatusTeacher = "Teacher" ,EmailTeacher = "Timber_Comfort@hotmail.co.th",Course = CourseData.ToArray() },
        // new UserTeacher {  UsernameTeacher = "teacher4", PasswordTeacher = "4444", IdTeacher = "4444", NameTeacher ="Nameteacher4", StatusTeacher = "Teacher" ,EmailTeacher = "Timber_Comfort@hotmail.co.th",Course = CourseData.ToArray() }


    };

        [HttpGet]
        public ActionResult<IEnumerable<Course>> GetAll_DataCourse()
        {
            return CourseData.ToList();

        }

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
        public Course Add_Course([FromBody] Course CourseAll)
        {

            // var _id = Guid.NewGuid().ToString();
            var item5 = new Course
            {

                IdCourse = CourseAll.IdCourse,
                NameCourse = CourseAll.NameCourse,
                Students = DataStudent.ToArray()

            };
            CourseData.Add(item5);
            return item5;
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
                // Course = Course.te ToArray()
            };
            DataTeacher.Add(item);
            return item;
        }


        [HttpPut("{id}")]
        public UserTeacher Edit_Teacher(string id, [FromBody] UserTeacher Teacher)
        {

            var _id = DataTeacher.FirstOrDefault(it => it.IdTeacher == id.ToString());

            var item = new UserTeacher
            {

                UsernameTeacher = Teacher.UsernameTeacher,
                PasswordTeacher = Teacher.PasswordTeacher,

                IdTeacher = id.ToString(),
                NameTeacher = Teacher.NameTeacher,
                StatusTeacher = Teacher.StatusTeacher,
                EmailTeacher = Teacher.EmailTeacher
            };
            DataTeacher.Remove(_id);
            DataTeacher.Add(item);
            return item;
        }


        [HttpDelete("{id}")]
        public void Delete_Teacher(string id)
        {
            var data = DataTeacher.FirstOrDefault(it => it.IdTeacher == id.ToString());
            DataTeacher.Remove(data);

        }

        [HttpPut("{id}")]
        public UserTeacher AddCourseToTeacher(string id, [FromBody] Course couresx)
        {
            var data = DataTeacher.FirstOrDefault(it => it.IdTeacher == id.ToString());
            var ssss = data.Course.ToList();

    

            var item = new Course
            {
                IdCourse = couresx.IdCourse,
                NameCourse = couresx.NameCourse,
               

            };
            ssss.Add(item);
            // Console.WriteLine(ssss.ToList());
            // Console.WriteLine(sss.ToList());


            var item2 = new UserTeacher
            {
                IdTeacher = id.ToString(),
                UsernameTeacher = data.UsernameTeacher,
                PasswordTeacher = data.PasswordTeacher,
                NameTeacher = data.NameTeacher,
                StatusTeacher = data.StatusTeacher,
                EmailTeacher = data.EmailTeacher,
                Course = CourseData.ToArray()

            };
            DataTeacher.Remove(data);
            DataTeacher.Add(item2);
            return item2;
        }



        [HttpPut("{id}/{id2}")]
        public UserTeacher AddStudentToCourse(string id, string id2, [FromBody] UserStudent Student)
        {
            var data = DataTeacher.FirstOrDefault(it => it.IdTeacher == id.ToString());
            var data2 = CourseData.FirstOrDefault(it => it.IdCourse == id2.ToString());
            var ssss = data2.Students.ToList();

            var item0 = new UserStudent
            {
                IdStudent = Student.IdStudent,
                UsernameStudent = Student.UsernameStudent,
                PasswordStudent = Student.PasswordStudent,
                NameStudent = Student.NameStudent,
                StatusStudent = Student.StatusStudent,
                EmailStudent = Student.EmailStudent,
                Score_Mid = Student.Score_Mid,
                Score_Final = Student.Score_Final,
                Grade = Student.Grade
            };

            ssss.Add(item0);
            Console.WriteLine(ssss.ToList());

            var item = new Course
            {
                IdCourse = data2.IdCourse,
                NameCourse = data2.NameCourse,
                Students = ssss.ToArray()

            };
            CourseData.Remove(data2);
            CourseData.Add(item);
            // Console.WriteLine(sss.ToList());


            var item2 = new UserTeacher
            {
                IdTeacher = id.ToString(),
                UsernameTeacher = data.UsernameTeacher,
                PasswordTeacher = data.PasswordTeacher,
                NameTeacher = data.NameTeacher,
                StatusTeacher = data.StatusTeacher,
                EmailTeacher = data.EmailTeacher,
                Course = CourseData.ToArray()

            };
            DataTeacher.Remove(data);
            DataTeacher.Add(item2);
            return item2;
        }
    }
}


