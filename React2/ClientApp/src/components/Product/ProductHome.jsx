import axios from "axios";
import { Table } from 'semantic-ui-react'
import React, { useEffect, useState } from 'react'
import "./table.css";

import EditProduct from "./EditProduct"
import DeleteProduct from "./DeleteProduct"
import CreateProduct from "./CreateProduct";

function ProductHome() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("Products/GetProducts")
      setData(result.data)
    };
    if (loading) {
      fetchData();
      setLoading(false)
    }
  }, [loading]);

 
  return (
    <div>
      <CreateProduct setLoading={setLoading}/>
      <div class="product-table">
      <Table celled fixed singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {data.map(product => {
            return (
              <Table.Row key={product.id}>
                <Table.Cell>{product.name}</Table.Cell>
                <Table.Cell>{product.price}</Table.Cell>
                <Table.Cell>
                  <EditProduct id={product.id} originalName={product.name} originalPrice={product.price} setLoading={setLoading} />
                </Table.Cell>
                <Table.Cell>
                  <DeleteProduct id={product.id} name={product.name} price={product.price} setLoading={setLoading}/>
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
export default ProductHome
