using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace React2.Models
{
    public class Customer
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }

        public ICollection<Sale> Sales { get; set; }
    }
}
