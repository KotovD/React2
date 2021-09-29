import axios from "axios";
import React, { useState } from "react";
import { Button, Header, Icon, Input, Modal } from "semantic-ui-react";
import "./modal.css";
// import buttonReducer from "../buttonReducer";

const CreateCustomer = ({ setLoading }) => {
  const [open, setOpen] = React.useState(false)

  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");

  const createCustomer = async (customerName, customerAddress) => {
    await axios({
      method: "post",
      url: `Customers/PostCustomer`,
      data: {
        name: customerName,
        address: customerAddress
      },
    });
    setLoading(true);
  };

  const updateCustomerName = (change) => {
    setCustomerName(change.target.value);
    console.log(customerName);
  };

  const updateCustomerAddress = (change) => {
    setCustomerAddress(change.target.value);
    console.log(customerAddress);
  };

 
  return (
    <>
      <Button
        color='blue'
        onClick={() => setOpen(true)}
      >
        New Customer
      </Button>

      <Modal
        size='mini'
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>Create Customer</Modal.Header>

        <Modal.Content>
          <Header as='h4'>NAME</Header>
          <Input fluid placeholder='Name...' onChange={updateCustomerName} />
          <Header as='h4'>ADDRESS</Header>
          <Input fluid placeholder='Address...' onChange={updateCustomerAddress} />
        </Modal.Content>

        <Modal.Actions>
          <Button secondary onClick={() => setOpen(false)}>
            Cancel
          </Button>

          <Button
            positive
            icon labelPosition='right'
            onClick={() => {
              createCustomer(customerName, customerAddress);
              setOpen(false)
            }}
          >
            Create
            <Icon name='check' />
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}


export default CreateCustomer;
