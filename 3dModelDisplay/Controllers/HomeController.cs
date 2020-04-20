using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace _3dModelDisplay.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger) { }

        public IActionResult Index()
        {
            return View();
        }
    }
}
