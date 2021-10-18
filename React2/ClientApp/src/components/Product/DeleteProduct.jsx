import React, {useState} from "react";
import axios from 'axios'
import { Button, Icon, Modal } from 'semantic-ui-react'

const DeleteProduct = ({id, name, price, setLoading}) => {

  const [open, setOpen] = useState(false)


   const deleteProduct = async (id, name, price) => {
    await axios.delete(`Products/DeleteProduct/${id}`, {
      headers: {
      },
        data:
        {
          Id: id,
          Name: name,
          Price: price,
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
        <Icon name='trash alternate outline'/>
        Delete
      </Button>

      <Modal
        size='mini'
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>Delete Product</Modal.Header>
        <Modal.Content>
          <p>Are you sure you want to delete the record?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button secondary onClick={() => setOpen(false)}>
            No
          </Button>
          <Button color='red' onClick={() => {
            deleteProduct(id, name, price)
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

export default DeleteProduct;
