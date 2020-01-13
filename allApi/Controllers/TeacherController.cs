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

        new UserTeacher {  UsernameTeacher = "123456", PasswordTeacher = "1111", IdTeacher = "001", NameTeacher ="Timber Comfort", StatusTeacher = "Teacher" ,EmailTeacher = "Timber_Comfort@hotmail.co.th" },
        new UserTeacher {  UsernameTeacher = "123457", PasswordTeacher = "2222", IdTeacher = "002", NameTeacher ="Timmy Comfort", StatusTeacher = "Teacher" ,EmailTeacher = "Timmy_Comfort@hotmail.co.th" }

    };

        [HttpGet]
        public ActionResult<IEnumerable<UserTeacher>> GetAllData_Teacher()
        {
            return Data_Teacher.ToList();

        }


        [HttpGet("{id}")]
        public ActionResult<UserTeacher> GetById_Teacher(string id)
        {
            return Data_Teacher.FirstOrDefault(it => it.IdTeacher == id.ToString());
        }


        [HttpPost]
        public UserTeacher AddUser_Teacher([FromBody] UserTeacher Teacher)
        {

            // var _id = Guid.NewGuid().ToString();
            var item = new UserTeacher
            {
                // Id_Teacher = _id.ToString(),
                UsernameTeacher = Teacher.UsernameTeacher,
                PasswordTeacher = Teacher.PasswordTeacher,

                IdTeacher = Teacher.IdTeacher,
                NameTeacher = Teacher.NameTeacher,
                StatusTeacher = Teacher.StatusTeacher,
                EmailTeacher = Teacher.EmailTeacher
            };
            Data_Teacher.Add(item);
            return item;
        }

        [HttpPut("{id}")]
        public UserTeacher Edit_Teacher(string id, [FromBody] UserTeacher Teacher)
        {

            var _id = Data_Teacher.FirstOrDefault(it => it.IdTeacher == id.ToString());

            var item = new UserTeacher
            {

                UsernameTeacher = Teacher.UsernameTeacher,
                PasswordTeacher = Teacher.PasswordTeacher,

                IdTeacher = id.ToString(),
                NameTeacher = Teacher.NameTeacher,
                StatusTeacher = Teacher.StatusTeacher,
                EmailTeacher = Teacher.EmailTeacher
            };
            Data_Teacher.Remove(_id);
            Data_Teacher.Add(item);

            return item;
        }

        [HttpDelete("{id}")]
        public void Delete_Teacher(string id)
        {
            var data = Data_Teacher.FirstOrDefault(it => it.IdTeacher == id.ToString());
            Data_Teacher.Remove(data);

        }



    }

}

