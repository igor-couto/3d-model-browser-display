using _3dModelDisplay.Model;
using Microsoft.AspNetCore.Http;
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
                var path = Path.Combine(Directory.GetCurrentDirectory(), "3DModelsLibrary", modelName, modelName + ".gltf");

                var mimeType = "application/octet-stream";
                var fileBytes = OpenFile(path);

                return new FileContentResult(fileBytes, mimeType) { FileDownloadName = modelName };
            }
            catch(Exception)
            {
                return new NotFoundResult();
            }
        }

        public IActionResult GetTexture(string modelName)
        {
            try
            {
                var path = Path.Combine( Directory.GetCurrentDirectory(), "3DModelsLibrary", modelName, modelName + ".png");

                var mimeType = "image/png";
                var fileBytes = OpenFile(path);

                return new FileContentResult(fileBytes, mimeType) { FileDownloadName = modelName };
            }
            catch (Exception)
            {
                return new NotFoundResult();
            }
        }

        private byte[] OpenFile(string filename) 
        {
            using var fileStream = new FileStream(filename, FileMode.Open, FileAccess.Read);
            var bytes = System.IO.File.ReadAllBytes(filename);
            fileStream.Read(bytes, 0, Convert.ToInt32(fileStream.Length));
            fileStream.Close();
            return bytes;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var path = Path.Combine(Directory.GetCurrentDirectory(), "3DModelsLibrary");

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
            try
            {
                var files = Request.Form.Files;
                var currentDirectory = Directory.GetCurrentDirectory();
                
                foreach (var file in files)
                {
                    if (file.Length > 0)
                    {
                        var newDirectory = Path.Combine(currentDirectory, "3DModelsLibrary", Path.GetFileNameWithoutExtension(file.FileName));
                        Directory.CreateDirectory(newDirectory);
                        var pathToSave = Path.Combine( newDirectory, file.FileName);

                        using var stream = System.IO.File.Create(pathToSave);
                        file.CopyTo(stream);
                    }
                }
            }
            catch (Exception)
            {
                Response.StatusCode = (int)System.Net.HttpStatusCode.BadRequest;
                return Json("Upload failed");
            }

            return Ok();
        }
    }
}