import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Form, Modal } from "semantic-ui-react";
//import "./modal.css";

const CreateProduct = (props) => {
  const [open, setOpen] = React.useState(false);
  const { fetchProducts } = props;

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const createProduct = () => {
    axios
      .post("Products/PostProduct", {
        name: productName,
        price: productPrice,
      })
      .then(({ data }) => {
        console.log(data);
        fetchProducts();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateProductName = (value) => {
    setProductName(value);
  };

  const updateProductPrice = (value) => {
    setProductPrice(value);
  };

  useEffect(() => {
    console.log(productName);
    console.log(productPrice);
    // works when:
    // 1) Render
    // 2) componentDidMount
    return () => {
      //works when:
      // 1) componentWillUnmount
    };
  }, [productName, productPrice]);

  const eventListener = () => {
    createProduct();
    setOpen(false);
  };

  return (
    <div class="modal">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        trigger={
          <div class="modal-button">
            <Button color="blue">Create Product </Button>
          </div>
        }
      >
        <Modal.Header>Create Product</Modal.Header>
        <Form>
          <Form.Field>
            <div class="modal-Form-Field">
              <p2> Name</p2>
            </div>
            <div class="modal-Form-Field">
              <input
                placeholder="Name"
                onChange={(e) => updateProductName(e.target.value)}
              />
            </div>
          </Form.Field>
          <Form.Field>
            <div class="modal-Form-Field">
              <p2>Price</p2>
            </div>
            <div class="modal-Form-Field">
              <input
                placeholder="Price"
                onChange={(e) => updateProductPrice(e.target.value)}
              />
            </div>
          </Form.Field>
        </Form>

        <Modal.Actions>
          <Button color="green" onClick={eventListener}>
            Create
          </Button>
          <Button color="black" onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default CreateProduct;
