import React, { useState } from "react";
import { Button, Header, Icon, Input, Modal } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react";
import axios from "axios";

const EditSale = ({
  setLoading,
  customers,
  products,
  stores,
  datesSold,
  id,
}) => {
  const [open, setOpen] = useState(false);

  const [dateSold, setDate] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [productId, setProductId] = useState("");
  const [storeId, setStoreId] = useState("");

  const customerOptions = []; //keep these outside so its scope can be reachable below
  const productOptions = [];
  const storeOptions = [];

  const createData = () => {
    customers.map((x) =>
      customerOptions.push({ key: x.name, text: x.name, value: x.id })
    );
    products.map((x) =>
      productOptions.push({ key: x.name, text: x.name, value: x.id })
    );
    stores.map((x) =>
      storeOptions.push({ key: x.name, text: x.name, value: x.id })
    );
  };

  // const trigger = (
  //   <span>
  //     <Icon name='customers'/> {customerOptions}
  //   </span>
  // )

  const editSale = async () => {
    await axios({
      method: "put",
      url: "Sales/PutSale/" + id,
      data: {
        saleID: id,
        customerID: customerId,
        productID: productId,
        storeID: storeId,
        dateSold: dateSold,
      },
    });
    setLoading(true);
  };

  const updateCustomerId = (change) => {
    setCustomerId(change.target.value);
  };

  const updateProductId = (change) => {
    setProductId(change.target.value);
  };

  const updateStoreId = (change) => {
    setStoreId(change.target.value);
  };

  return (
    <>
      {createData()}
      <Button color="yellow" onClick={() => setOpen(true)}>
        <Icon name="edit outline" />
        Edit Sale
      </Button>

      <Modal
        size="mini"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>Edit Sale</Modal.Header>

        <Modal.Content>
          <Header as="h4">DATE SOLD</Header>
          <Input
           // type='date'
            fluid
            placeholder="Date sold..."
            value={datesSold}
            onChange={setDate}
          />

          <Header as="h4">CUSTOMER</Header>
          <Dropdown
            text={customerOptions[customerId]}
            // trigger={trigger}
            fluid
            selection
            options={customerOptions}
            value={customerId}
            onChange={updateCustomerId}
          />

          <Header as="h4">PRODUCT</Header>
          <Dropdown
            placeholder="Select Product"
            fluid
            selection
            options={productOptions}
            value={productOptions[productId]}
            onChange={updateProductId}
          />

          <Header as="h4">STORE</Header>
          <Dropdown
            placeholder="Select Store"
            fluid
            selection
            options={storeOptions}
            value={storeOptions[storeId]}
            onChange={updateStoreId}
          />
        </Modal.Content>

        <Modal.Actions>
          <Button secondary onClick={() => setOpen(false)}>
            Cancel
          </Button>

          <Button
            positive
            onClick={() => {
              editSale();
              setOpen(false);
            }}
            icon
            labelPosition="right"
          >
            Update
            <Icon name="check" />
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default EditSale;
