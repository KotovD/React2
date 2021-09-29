import React, { useState } from 'react'
import axios from 'axios'
import { Button, Header, Icon, Input, Modal } from 'semantic-ui-react'
// import buttonReducer from '../buttonReducer'

const EditCustomer = ({ originalName, originalAddress, setLoading, id }) => {
  
  const [customerName, setCustomerName] = useState(originalName)
  const [customerAddress, setCustomerAddress] = useState(originalAddress)

  const [open, setOpen] = React.useState(false)

  const editCustomer = async () => {
    await axios({
    method: "put",
      url: 'Customers/PutCustomers',
      data: {
        id: id, // original id
        name: customerName, //new name
        address: customerAddress //new address
      }
    })
    setLoading(true)
  }

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
        color='yellow'
        onClick={() => setOpen(true)}
      >
        <Icon name='edit outline' />
        Edit
      </Button>

      <Modal
        size='mini'
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>Edit Customer</Modal.Header>

        <Modal.Content>
          <Header as='h4'>NAME</Header>
          <Input fluid value={customerName} onChange={updateCustomerName}/>
          <Header as='h4'>ADDRESS</Header>
          <Input fluid value={customerAddress} onChange={updateCustomerAddress}/>
        </Modal.Content>

        <Modal.Actions>
          <Button secondary onClick={() => setOpen(false)}>
            No
          </Button>
          <Button positive onClick={() => {
            editCustomer()
            setOpen(false)
          }}
            icon labelPosition='right'
          >
            Edit
            <Icon name='check' />
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}

export default EditCustomer