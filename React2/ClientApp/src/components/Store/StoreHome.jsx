import axios from "axios";
import { Table } from 'semantic-ui-react';
import React, { useEffect, useState } from 'react';
import "./table.css";

import CreateStore from "./CreateStore";
import EditStore from "./EditStore";
import DeleteStore from "./DeleteStore";

function StoreHome() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("Stores/GetStores")
      setData(result.data)
    };
    if (loading) {
      fetchData();
      setLoading(false)
    }
  }, [loading]);


  return (
    <div>
      <CreateStore setLoading={setLoading}/>
      <div className="store-table">
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
          {data.map(store => {
            return (
              <Table.Row key={store.id}>
                <Table.Cell>{store.name}</Table.Cell>
                <Table.Cell>{store.address}</Table.Cell>
                <Table.Cell>
                  <EditStore id={store.id} originalName={store.name} originalAddress={store.address} setLoading={setLoading} />
                </Table.Cell>
                <Table.Cell>
                  <DeleteStore id={store.id} name={store.name} address={store.address} setLoading={setLoading}/>
                </Table.Cell>
              </Table.Row>
            )
          })}

        </Table.Body>
      </Table>
      </div>
    </div>
  )
}
export default StoreHome;
