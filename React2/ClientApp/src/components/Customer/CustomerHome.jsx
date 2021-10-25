import axios from "axios";
import { Table, Pagination } from "semantic-ui-react";
import React, { useEffect, useState } from "react";
import "./table.css";

import CreateCustomer from "./CreateCustomer";
import EditCustomer from "./EditCustomer";
import DeleteCustomer from "./DeleteCustomer";

function CustomerHome() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [displayData, setDisplayData] = useState([]);
  let pages;
  const setNumberOfPages = () => {
    pages = Math.floor(data.length / 5);
    if (data.length % 5 > 0) {
      pages++;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("Customers/GetCustomers");
      setData(result.data);
      setDisplayData(result.data.slice(0, 5));
    };
    if (loading) {
      fetchData();
      setLoading(false);
    }
  }, [loading]);

  return (
    <div>
      {setNumberOfPages()}

      <CreateCustomer setLoading={setLoading} />
      <div className="customer-table">
        <Table celled fixed singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Address</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
              <Table.HeaderCell>Actions</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {displayData.map((customer) => {
              return (
                <Table.Row key={customer.id}>
                  <Table.Cell>{customer.name}</Table.Cell>
                  <Table.Cell>{customer.address}</Table.Cell>
                  <Table.Cell>
                    <EditCustomer
                      id={customer.id}
                      originalName={customer.name}
                      originalAddress={customer.address}
                      setLoading={setLoading}
                    />
                  </Table.Cell>
                  <Table.Cell>
                    <DeleteCustomer
                      id={customer.id}
                      name={customer.name}
                      address={customer.address}
                      setLoading={setLoading}
                    />
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>

        <Pagination
          boundaryRange={0}
          defaultActivePage={1}
          ellipsisItem={null}
          firstItem={null}
          lastItem={null}
          siblingRange={1}
          onPageChange={(event, event2) => {
            setDisplayData(
              data.slice((event2.activePage - 1) * 5, event2.activePage * 5)
            );
          }}
          totalPages={pages}
        />
      </div>
    </div>
  );
}
export default CustomerHome;
