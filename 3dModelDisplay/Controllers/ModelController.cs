using _3dModelDisplay.Model;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.IO;

namespace _3dModelDisplay.Controllers
{
    public class ModelController : Controller
    {
        [HttpGet]
        public IActionResult GetAll()
        {
            var path = @"C:\temp";

            var subdirectoryEntries = Directory.GetDirectories(path);
            var folders = new List<Folder>();

            foreach (var folderName in subdirectoryEntries) 
            {
                var folder = folderName.Substring(folderName.LastIndexOf('\\') + 1);
                folders.Add(new Folder() { Name = folder });
            }
                
            var jsonResponse = JsonConvert.SerializeObject(folders);

            return Content(jsonResponse);
        }

        [HttpPost]
        public ActionResult Upload() 
        {
            return Ok();
        }
    }
}