import axios from "axios";
import React, { useState, useEffect } from "react";
import { Button, Table, Modal, Header, Form } from "semantic-ui-react";
// import "./modal.css";
import "./table.css";

const ProductTable = (props) => {
  const { products, parent, fetchProducts } = props;

  const [firstOpen, setFirstOpen] = React.useState(false);
  const [secondOpen, setSecondOpen] = React.useState(false);

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");


  // const selectProduct = (id) =>  {
  //   let item=products[id];
  //   setProductName(item.productName)
  //   setProductPrice(item.productPrice)
  // }

  // const editProduct = (e) => {
  //   e.preventDefault();
  //   const product = {
  //     name: this.state.name,
  //     price: this.state.price,
  //   }
  //   axios
  //     .put(`Products/PutProduct/${this.state.id}`, product 
  //       // name: productName,
  //       // price: productPrice,
  //     )
  //     .then(({ data }) => {
  //       console.log(data);
  //       this.setState({
  //         products: data,
  //       });
  //       fetchProducts();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const deleteProduct = (id) => {
    axios
      .delete(`Products/DeleteProduct/${id}`)
      .then(({ data }) => {
        console.log(data);
        fetchProducts();
        setFirstOpen(false);
        setSecondOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editProductName = (value) => {
    setProductName(value);
  };

  const editProductPrice = (value) => {
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
    //editProduct();
    // setFirstOpen(false);
    // setSecondOpen(false);
  };

  return (
    <div class="customer-table">
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products.map((r) => (
            <Table.Row key={r.id}>
              <Table.Cell>{r.name}</Table.Cell>
              <Table.Cell>{r.price}</Table.Cell>
              <Table.Cell>
                <Modal
                  onClose={() => setFirstOpen(false)}
                  onOpen={() => setFirstOpen(true)}
                  open={firstOpen}
                  trigger={
                    <div class="product-table-button">
                      <div class="large ui icon buttons">
                        <button
                          class="ui yellow button"
                          //onClick={() => setFirstOpen(true)}
                          //onClick={() => editProduct(r.id)}
                        >
                          <i class="edit icon"></i>
                          Edit
                        </button>
                      </div>
                    </div>
                  }
                >
                  <Modal.Description>
                    <div class="modal-header">
                      <Header>Edit Product</Header>
                    </div>
                    <Form>
                      <Form.Field>
                        <div class="modal-Form-Field">
                          <p2> Name</p2>
                        </div>
                        <div class="modal-Form-Field">
                          <input
                            placeholder="name"
                            value={r.name}
                            //onClick={() => editProduct(r.id)}
                            //onChange={(e) => editProductName(e.target.value)}
                          />
                        </div>
                      </Form.Field>
                      <Form.Field>
                        <div class="modal-Form-Field">
                          <p2>Price</p2>
                        </div>
                        <div class="modal-Form-Field">
                          <input
                            placeholder="price"
                            value={r.price}
                            // onClick={() => editProduct(r.id)}
                            //onChange={(e) => editProductPrice(e.target.value)}
                          />
                        </div>
                      </Form.Field>
                    </Form>
                  </Modal.Description>
                  <Modal.Actions>
                    <Button color="green" >
                      Edit
                    </Button>
                    <Button color="black" onClick={() => setFirstOpen(false)}>
                      Cancel
                    </Button>
                  </Modal.Actions>
                </Modal>
              </Table.Cell>
              <Table.Cell>
                <Modal
                  onClose={() => setSecondOpen(false)}
                  //onOpen={() => setFirstOpen(false)}
                  open={secondOpen}
                  trigger={
                    <div class="product-table-button">
                      <div class="large ui icon buttons">
                        <button
                          class="ui red button"
                          onClick={() => setSecondOpen(true)}
                        >
                          <i class="trash icon"></i>
                          Delete
                        </button>
                      </div>
                    </div>
                  }
                >
                  <Modal.Description>
                    <div class="modal-header">
                      <Header>Delete Product</Header>
                    </div>
                    <div class="modal-body">
                      <p>Are you sure you want to delete the record?</p>
                    </div>
                  </Modal.Description>
                  <Modal.Actions>
                    <Button color="black" onClick={() => setSecondOpen(false)}>
                      Nope
                    </Button>
                    <Button
                      content="Yep, delete the record"
                      //labelPosition="right"
                      icon="close"
                      onClick={() => deleteProduct(r.id)}
                      negative
                    ></Button>
                  </Modal.Actions>
                </Modal>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ProductTable;
