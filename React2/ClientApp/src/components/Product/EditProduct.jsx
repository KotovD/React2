import React, { useState } from 'react'
import axios from 'axios'
import { Button, Header, Icon, Input, Modal } from 'semantic-ui-react'
// import buttonReducer from '../buttonReducer'

const EditProduct = ({ originalName, originalPrice, setLoading, id }) => {
  
  const [productName, setProductName] = useState(originalName)
  const [productPrice, setProductPrice] = useState(originalPrice)

  const [open, setOpen] = React.useState(false)

  const editProduct = async () => {
    await axios({
    method: "put",
      url: 'Products/PutProduct/' + id,
      data: {
        id: id, 
        name: productName, 
        price: productPrice 
      }
    })
    setLoading(true)
  }

  const updateProductName = (change) => {
    setProductName(change.target.value);
    console.log(productName);
  };

  const updateProductPRice = (change) => {
    setProductPrice(change.target.value);
    console.log(productPrice);
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
        <Modal.Header>Edit Product</Modal.Header>

        <Modal.Content>
          <Header as='h4'>NAME</Header>
          <Input fluid value={productName} onChange={updateProductName}/>
          <Header as='h4'>PRICE</Header>
          <Input fluid value={productPrice} onChange={updateProductPRice}/>
        </Modal.Content>

        <Modal.Actions>
          <Button secondary onClick={() => setOpen(false)}>
            No
          </Button>
          <Button positive onClick={() => {
            editProduct()
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

export default EditProduct