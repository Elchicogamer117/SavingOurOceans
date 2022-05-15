using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using SavingOurOceansFrontEnd.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;


namespace SavingOurOceansFrontEnd.Controllers
{
    public class BaseController : Controller
    {

        public BaseController(IConfiguration confi)
        {

        }

    }
}
