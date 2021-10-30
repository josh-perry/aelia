namespace Aelia.Api.Models.Db
{
    public class Ticket
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public Project Project { get; set; }
    }
}
