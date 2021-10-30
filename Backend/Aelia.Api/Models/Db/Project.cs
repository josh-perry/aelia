using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Aelia.Api.Models.Db
{
    public class Project
    {
        public int Id { get; set; }

        [Required]
        [MinLength(1)]
        [MaxLength(5)]
        public string Name { get; set; }

        public ICollection<Ticket> Tickets { get; set; }
    }
}
