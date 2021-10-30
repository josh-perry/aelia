using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Aelia.Api.Data;
using Aelia.Api.Models.Db;
using Aelia.Api.Models.Requests;
using Aelia.Api.Models.Responses;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Aelia.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TicketController : ControllerBase
    {
        private readonly ILogger<ProjectController> _logger;
        private readonly ApplicationDbContext _dbContext;

        public TicketController(
            ILogger<ProjectController> logger,
            ApplicationDbContext dbContext)
        {
            _logger = logger;
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<IEnumerable<Ticket>> GetTicketsForProject(string projectName)
        {
            var project = await _dbContext.Projects.FirstOrDefaultAsync(p => p.Name == projectName);

            if (project == null)
            {
                throw new ArgumentException($"Project '{projectName}' not found!");
            }

            return _dbContext.Tickets.Where(x => x.Project == project).ToList();
        }

        [HttpPost]
        public async Task<TicketListing> AddNewProjectAsync(AddNewTicketRequest newTicketRequest)
        {
            var project = await _dbContext.Projects.FirstOrDefaultAsync(p => p.Name == newTicketRequest.Project);

            if (project == null)
            {
                throw new ArgumentException($"Project '{newTicketRequest.Project}' not found!");
            }

            var newTicket = new Ticket
            {
                Title = newTicketRequest.Title,
                Project = project
            };

            await _dbContext.AddAsync(newTicket);
            await _dbContext.SaveChangesAsync();

            var ticketListing = new TicketListing()
            {
                Id = newTicket.Id,
                Project = newTicket.Project.Name,
                Title = newTicket.Title
            };

            return ticketListing;
        }
    }
}
