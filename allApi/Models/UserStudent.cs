namespace allApi.Models
{
    public class UserStudent
    {


        public string IdStudent { get; set; }

        public string UsernameStudent { get; set; }

        public string PasswordStudent { get; set; }


        public string NameStudent { get; set; }

        public string StatusStudent { get; set; }

        public string EmailStudent { get; set; }

          public Course[] Course { get; set; }



    }
}
