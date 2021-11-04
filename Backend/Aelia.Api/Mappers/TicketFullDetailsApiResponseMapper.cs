using System.Collections.Generic;
using System.Linq;
using Aelia.Api.Models.Db;
using Aelia.Api.Models.Responses;

namespace Aelia.Api.Mappers
{
    public class TicketFullDetailsResponseMapper : IApiResponseMapper<Ticket, TicketFullDetailsApiResponse>
    {
        public TicketFullDetailsApiResponse MapDbToApiResponse(Ticket db)
        {
            return new()
            {
                Id = db.Id,
                Project = db.Project.Name,
                Title = db.Title,
                Description = db.Description
            };
        }

        public IEnumerable<TicketFullDetailsApiResponse> MapDbToApiResponseEnumerable(IEnumerable<Ticket> db)
        {
            return db.ToList().Select(MapDbToApiResponse).ToList();
        }
    }
}