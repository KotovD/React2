import axios from "axios";
import { Table } from "semantic-ui-react";
import React, { useEffect, useState } from "react";

import "./table.css";

import CreateSale from "./CreateSale";
import EditSale from "./EditSale";
import DeleteSale from "./DeleteSale";

function SaleHome() {
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [stores, setStores] = useState([]);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const DateFormat = require("fast-date-format");
  const dateFormat = new DateFormat("DD/MM/YYYY");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("Sales/GetSales");
      const resultCustomers = await axios.get("Customers/GetCustomers");
      const resultProducts = await axios.get("Products/GetProducts");
      const resultStores = await axios.get("Stores/GetStores");

      setData(result.data);
      setCustomers(resultCustomers.data);
      setProducts(resultProducts.data);
      setStores(resultStores.data);
    };

    if (loading) {
      fetchData();      
      setLoading(false);
    }
  }, [loading]);

  return (
    <div>
      <CreateSale
        setLoading={setLoading}
        customers={customers}
        products={products}
        stores={stores}
      />
      <div className="sale-table">
        <Table celled fixed singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Customer</Table.HeaderCell>
              <Table.HeaderCell>Product</Table.HeaderCell>
              <Table.HeaderCell>Store</Table.HeaderCell>
              <Table.HeaderCell>Date Sold </Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {data.map((sale) => {
              //console.log(sale.customer.name);
              return (
                <Table.Row key={sale.saleID}>
                  <Table.Cell>{sale.customer.name}</Table.Cell>
                  <Table.Cell>{sale.product.name}</Table.Cell>
                  <Table.Cell>{sale.store.name}</Table.Cell>
                  <Table.Cell>
                    {dateFormat.format(new Date(sale.dateSold))}
                  </Table.Cell>
                  <Table.Cell>
                    <EditSale
                      id={sale.saleID}
                      originalDate={dateFormat.format(new Date(sale.dateSold))}
                      customers={customers}
                      products={products}
                      stores={stores}
                      setLoading={setLoading}
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <DeleteSale
                      id={sale.saleID}
                      datesSold={sale.dateSold}
                      customerName={sale.customerID}
                      productName={sale.productID}
                      storeName={sale.storeID}
                      dateSold={sale.dateSold}
                      setLoading={setLoading}
                    />
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
export default SaleHome;
