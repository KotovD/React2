import axios from "axios";
import { Table } from 'semantic-ui-react'
// import CustomerTable from "./CustomerTable";
import React, { useEffect, useState } from 'react'

import CreateCustomer from "./CreateCustomer";
import EditCustomer from "./EditCustomer"
import DeleteCustomer from "./DeleteCustomer"

function CustomerHome() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("Customers/GetCustomers")
      setData(result.data)
    };
    if (loading) {
      fetchData();
      setLoading(false)
    }
  }, [loading]);

  // fetchCustomers = () => {
  //   this.setState({
  //     loading: true,
  //   });
  //   axios
  //     .get("Customers/GetCustomers")
  //     .then(({ data }) => {
  //       console.log(data);
  //       this.setState({
  //         customers: data,
  //         loading: false,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  // toggleCreateCustomerModal = (value) => {
  //  this.setState({
  //   openCreateCustomerModal: value
  //  })
  // }

  return (
    <div>
      <CreateCustomer setLoading={setLoading}/>

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
          {data.map(customer => {
            return (
              <Table.Row key={customer.id}>
                <Table.Cell>{customer.name}</Table.Cell>
                <Table.Cell>{customer.address}</Table.Cell>
                <Table.Cell>
                  <EditCustomer id={customer.id} originalName={customer.name} originalAddress={customer.address} setLoading={setLoading} />
                </Table.Cell>
                <Table.Cell>
                  <DeleteCustomer id={customer.id} name={customer.name} address={customer.address} setLoading={setLoading}/>
                </Table.Cell>
              </Table.Row>
            )
          })}

        </Table.Body>
      </Table>
    </div>
  )
}
export default CustomerHome
