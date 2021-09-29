import React from "react";
import { Table, Button } from "semantic-ui-react";

const SaleTable = (props) => {
  const { sales, parent } = props;
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Customer</Table.HeaderCell>
          <Table.HeaderCell>Product</Table.HeaderCell>
          <Table.HeaderCell>Store</Table.HeaderCell>
          <Table.HeaderCell>Date Sold</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {sales.map((r) => (
          <Table.Row>
            <Table.Cell> {r.customer.name}</Table.Cell>
            <Table.Cell> {r.product.name}</Table.Cell>
            <Table.Cell> {r.store.name}</Table.Cell>
            <Table.Cell> {r.dateSold}</Table.Cell>
            <Table.Cell>
            <Button color='yellow'>Edit</Button>             
          </Table.Cell>
          <Table.Cell>
            <Button color='red'>Delete</Button>             
          </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default SaleTable;
