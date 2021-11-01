using System.Collections.Generic;

namespace Aelia.Api.Mappers
{
    public interface IApiResponseMapper<in TDb, out TResponse>
    {
        TResponse MapDbToApiResponse(TDb db);

        IEnumerable<TResponse> MapDbToApiResponseEnumerable(IEnumerable<TDb> db);
    }
}