using System.Collections.Generic;

namespace Aelia.Api.Models.Responses
{
    public class ListTicketsResponse
    {
        public IEnumerable<TicketListing> Tickets { get; set; }
    }

    public class TicketListing
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Project { get; set; }
    }
}
