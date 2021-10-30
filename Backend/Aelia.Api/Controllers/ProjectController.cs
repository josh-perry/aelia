using System.Collections.Generic;
using System.Threading.Tasks;
using Aelia.Api.Data;
using Aelia.Api.Models.Db;
using Aelia.Api.Models.Requests;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace Aelia.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProjectController : ControllerBase
    {
        private readonly ILogger<ProjectController> _logger;
        private readonly ApplicationDbContext _dbContext;

        public ProjectController(
            ILogger<ProjectController> logger,
            ApplicationDbContext dbContext)
        {
            _logger = logger;
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<IEnumerable<Project>> GetAllProjects()
        {
            return await _dbContext.Projects.ToListAsync();
        }

        [HttpPost]
        public async Task<IActionResult> AddNewProjectAsync(AddNewProjectRequest newProjectRequest)
        {
            var newProject = new Project
            {
                Name = newProjectRequest.Name
            };

            _logger.LogInformation($"Adding new project: {newProjectRequest.Name}");
            await _dbContext.AddAsync(newProject);
            await _dbContext.SaveChangesAsync();

            return Ok();
        }
    }
}
