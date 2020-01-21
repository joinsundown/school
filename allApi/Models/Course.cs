namespace allApi.Models{



    public class Course {



        public string IdCourse { get; set; }

        public string NameCourse { get; set; }

        public UserStudent[] Students { get; set;}

        



    }
}