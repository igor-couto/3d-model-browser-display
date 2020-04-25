using _3dModelDisplay.Model;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;

namespace _3dModelDisplay.Controllers
{
    public class ModelController : Controller
    {
        public IActionResult GetModel (string modelName)
        {
            try 
            {
                var path = @$"C:\temp/{modelName}/{modelName}.obj";

                var mimeType = "application/octet-stream";
                var fileBytes = OpenFile(path);

                return new FileContentResult(fileBytes, mimeType)
                {
                    FileDownloadName = modelName
                };
            }
            catch(Exception exception)
            {
                return new NotFoundResult();
            }
        }

        public IActionResult GetTexture(string modelName)
        {
            try
            {
                var path = @$"C:\temp/{modelName}/{modelName}.png";

                var mimeType = "image/png";
                var fileBytes = OpenFile(path);

                return new FileContentResult(fileBytes, mimeType)
                {
                    FileDownloadName = modelName
                };
            }
            catch (Exception exception)
            {
                return new NotFoundResult();
            }
        }

        private byte[] OpenFile(string filename) 
        {
            using (FileStream fs = new FileStream(filename, FileMode.Open, FileAccess.Read))
            {
                // Create a byte array of file stream length
                byte[] bytes = System.IO.File.ReadAllBytes(filename);
                //Read block of bytes from stream into the byte array
                fs.Read(bytes, 0, System.Convert.ToInt32(fs.Length));
                //Close the File Stream
                fs.Close();
                return bytes; //return the byte data
            }
        }

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