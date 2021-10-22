using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


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

        [DataType(DataType.Date)]
        public DateTime? DateSold { get; set; }



        public Customer Customer { get; set; }
        public Product Product { get; set; }
        public Store Store { get; set; }
    }
}
