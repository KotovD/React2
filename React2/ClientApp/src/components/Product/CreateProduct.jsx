import axios from "axios";
import React, { useState } from "react";
import { Button, Header, Icon, Input, Modal } from "semantic-ui-react";
import "./CreateButton.css";

const CreateProduct = ({ setLoading }) => {
  const [open, setOpen] = React.useState(false)

  const [productName, setproductName] = useState("");
  const [productPrice, setproductPrice] = useState("");

  const createProduct = async (productName, productPrice) => {
    await axios({
      method: "post",
      url: `Products/PostProduct`,
      data: {
        name: productName,
        price: productPrice
      },
    });
    setLoading(true);
  };

  const updateProductName = (change) => {
    setproductName(change.target.value);
    console.log(productName);
  };

  const updateProductPrice = (change) => {
    setproductPrice(change.target.value);
    console.log(productPrice);
  };

 
  return (
    <>
    <div class="create-button">
      <Button
        color='blue'
        onClick={() => setOpen(true)}
      >
        New Product
      </Button>

      <Modal
        size='mini'
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>Create Product</Modal.Header>

        <Modal.Content>
          <Header as='h4'>NAME</Header>
          <Input fluid placeholder='Name...' onChange={updateProductName} />
          <Header as='h4'>PRICE</Header>
          <Input fluid placeholder='Address...' onChange={updateProductPrice} />
        </Modal.Content>

        <Modal.Actions>
          <Button secondary onClick={() => setOpen(false)}>
            Cancel
          </Button>

          <Button
            positive
            icon labelPosition='right'
            onClick={() => {
              createProduct(productName, productPrice);
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


export default CreateProduct;
