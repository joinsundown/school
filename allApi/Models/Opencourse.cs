namespace allApi.Models
{


    public class Opencourse
    {
        public string IdCourse { get; set; }
        public string NameCourse { get; set; }
        public UserStudent[] Student { get; set; }
        public UserTeacher[] Teacher { get; set; }

       
    }
}