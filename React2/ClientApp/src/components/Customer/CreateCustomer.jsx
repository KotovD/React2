import axios from "axios";
import React, { useState } from "react";
import { Button, Header, Icon, Input, Modal } from "semantic-ui-react";
import "./CreateButton.css";

const CreateCustomer = ({ setLoading }) => {
  const [open, setOpen] = useState(false)

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
    <div className="create-button">
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
      </div>
    </>
  )
}


export default CreateCustomer;
