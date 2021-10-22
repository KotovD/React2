using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using React2.Models;


namespace React2.Data
{
    public static class DbInitializer
    {
        public static void Initialize(ShopContext context)
        {
            context.Database.EnsureCreated();

            // Look for any students.
            if (context.Customers.Any())
            {
                return;   // DB has been seeded
            }

            var customers = new Customer[]
            {
            new Customer{Name="Carson",Address="Auck"},
            new Customer{Name="DMitrii",Address="Auck"},
            new Customer{Name="Nina",Address="Aus"},
            new Customer{Name="John",Address="AUs"},
            new Customer{Name="James",Address="Auck"}
            };
            foreach (Customer c in customers)
            {
                context.Customers.Add(c);
            }
            context.SaveChanges();

            var products = new Product[]
             {
            new Product{Name="Apple",Price=10.50},
            new Product{Name="Carrot",Price=100}
             };
            foreach (Product p in products)
            {
                context.Products.Add(p);
            }
            context.SaveChanges();

            var stores = new Store[]
            {
            new Store{Name="Countdown",Address="street 1"},
            new Store{Name="Pack and Save",Address="street 2"},
            new Store{Name="4Square",Address="street 3"},
            new Store{Name="Lotto",Address="street 4"},
            };
            foreach (Store s in stores)
            {
                context.Stores.Add(s);
            }
            context.SaveChanges();

            var sales = new Sale[]
            {
            new Sale{ProductID=1,CustomerID=1,StoreID=1,DateSold= DateTime.Parse("2021-09-10")},
            new Sale{ProductID=2,CustomerID=2,StoreID=1,DateSold= DateTime.Parse("2021-09-11")},
            new Sale{ProductID=1,CustomerID=3,StoreID=2,DateSold= DateTime.Parse("2021-09-12")},
            new Sale{ProductID=1,CustomerID=4,StoreID=2,DateSold= DateTime.Parse("2021-09-13")},
            new Sale{ProductID=1,CustomerID=5,StoreID=2,DateSold= DateTime.Parse("2021-09-14")}
            };
            foreach (Sale s in sales)
            {
                context.Sales.Add(s);
            }
            context.SaveChanges();
        }
    }
}
