import React from "react";
import { Table, Button } from "semantic-ui-react";

const StoreTable = (props) => {
  const { stores, parent } = props;
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Address</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {stores.map((r) => (
          <Table.Row key={r.id}>
          <Table.Cell>{r.name}</Table.Cell>
          <Table.Cell>{r.address}</Table.Cell>
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

export default StoreTable;
