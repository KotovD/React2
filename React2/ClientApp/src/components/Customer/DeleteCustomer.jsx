import React from 'react'
import axios from 'axios'
import { Button, Icon, Modal } from 'semantic-ui-react'
// import buttonReducer from '../buttonReducer'

const DeleteCustomer = ({id, name, address, setLoading}) => {

  const [open, setOpen] = React.useState(false)


   const deleteCustomer = async (id, name, address) => {
    await axios.delete(`Customers/DeleteCustomer/${id}`, {
      headers: {
      },
        data:
        {
          Id: id,
          Name: name,
          Address: address,
        }
      })
      setLoading(true)
  }
  

  return (
    <>
      <Button
        color='red'
        onClick={() => setOpen(true)}
      >
        <Icon name='delete' />
        Delete
      </Button>

      <Modal
        size='mini'
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>Delete Customer</Modal.Header>
        <Modal.Content>
          <p>Are you sure ?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button secondary onClick={() => setOpen(false)}>
            No
          </Button>
          <Button color='red' onClick={() => {
            deleteCustomer(id, name, address)
            setOpen(false)
          }}
            icon labelPosition='right'
          >
            Delete
            <Icon name='delete' />
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}

export default DeleteCustomer;
