﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace netcore_reactapi.Models
{
    public partial class EmployeePost
    {
        public int empid { get; set; }
        public string empname { get; set; }
        public string address { get; set; }
        public string mobile { get; set; }
        public int age { get; set; }
    }
}
