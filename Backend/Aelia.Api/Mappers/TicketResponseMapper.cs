using System.Collections.Generic;
using System.Linq;
using Aelia.Api.Models.Db;
using Aelia.Api.Models.Responses;

namespace Aelia.Api.Mappers
{
    public class TicketResponseMapper : IApiResponseMapper<Ticket, TicketApiResponse>
    {
        public TicketApiResponse MapDbToApiResponse(Ticket db)
        {
            return new()
            {
                Id = db.Id,
                Project = db.Project.Name,
                Title = db.Title
            };
        }

        public IEnumerable<TicketApiResponse> MapDbToApiResponseEnumerable(IEnumerable<Ticket> db)
        {
            return db.ToList().Select(MapDbToApiResponse).ToList();
        }
    }
}