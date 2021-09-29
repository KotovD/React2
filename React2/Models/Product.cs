using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace React2.Models
{
    public class Product
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public double Price { get; set; }

        public ICollection<Sale> Sales { get; set; }
    }
}
