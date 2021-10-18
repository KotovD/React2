using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace React2.Models
{
    public class Sale
    {
        public int SaleID { get; set; }
        public int CustomerID { get; set; }
       // public string CustomerName { get; set; }
        public int ProductID { get; set; }
       // public string ProductName { get; set; }
        public int StoreID { get; set; }
       // public string StoreName { get; set; }
        public DateTime DateSold { get; set; }

        public Customer Customer { get; set; }
        public Product Product { get; set; }
        public Store Store { get; set; }
    }
}
