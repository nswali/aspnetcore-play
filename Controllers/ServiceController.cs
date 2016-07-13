using Microsoft.AspNetCore.Mvc;

namespace AspNetCoreTest.Controllers
{
    [Route("api/[controller]")]
    public class ServiceController : Controller
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("from service");
        }
    }
}
