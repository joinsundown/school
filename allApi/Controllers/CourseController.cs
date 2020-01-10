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

        public static List<Course> Data_Course = new List<Course>
     {

        new Course { Id_Course = "001", Name_Course = "Test" },
        new Course { Id_Course = "002", Name_Course = "SSSS" }


    };

        [HttpGet]
        public ActionResult<IEnumerable<Course>> GetAll_DataCourse()
        {
            return Data_Course.ToList();

        }

        [HttpGet("{id}")]
        public ActionResult<Course> GetById_Course(string id)
        {
            return Data_Course.FirstOrDefault(it => it.Id_Course == id.ToString());
        }


        [HttpPost]
        public Course Add_Course([FromBody] Course CourseAll)
        {

            // var _id = Guid.NewGuid().ToString();
            var item = new Course
            {
                // Id_Teacher = _id.ToString(),
                Id_Course = CourseAll.Id_Course,
                Name_Course = CourseAll.Name_Course,
           
            };
            Data_Course.Add(item);
            return item;
        }


        [HttpPut  ("{id}")]
        public Course Edit_Course(string id, [FromBody] Course CourseAll)
        {

            var _id = Data_Course.FirstOrDefault(it => it.Id_Course == id.ToString());

            var item = new Course
            {
                Id_Course = id.ToString(),
                Name_Course = CourseAll.Name_Course,
                
            };
            Data_Course.Remove(_id);
            Data_Course.Add(item);

            return item;
        }

         [HttpDelete ("{id}")]
        public void Delete_Course(string id)
        {
            var data = Data_Course.FirstOrDefault(it => it.Id_Course == id.ToString());
            Data_Course.Remove(data);
         
        }


        



    }
}