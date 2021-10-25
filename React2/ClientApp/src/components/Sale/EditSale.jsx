import React, { useState } from "react";
import { Button, Header, Icon, Input, Modal } from "semantic-ui-react";
import { Dropdown } from "semantic-ui-react";
import axios from "axios";

const EditSale = ({
  setLoading,
  customers,
  products,
  stores,
  originalDate,
  id,
}) => {
  const [open, setOpen] = useState(false);

  const [dateSold, setDate] = useState(originalDate);

  const [customerId, setCustomerId] = useState("");
  const [productId, setProductId] = useState("");
  const [storeId, setStoreId] = useState("");

  const customerOptions = []; //keep these outside so its scope can be reachable below
  const productOptions = [];
  const storeOptions = [];

  const createData = () => {
    customers.map((x) =>
      customerOptions.push({ key: x.id, text: x.name, value: x.id })
    );
    products.map((x) =>
      productOptions.push({ key: x.id, text: x.name, value: x.id })
    );
    stores.map((x) =>
      storeOptions.push({ key: x.id, text: x.name, value: x.id })
    );
  };

  // const trigger = (
  //   <span>
  //      {createData()}
  //   </span>
  // )

  const updateDate = (event) => {
    setDate(event.target.value);
  };

  const resetState = () => {
    setDate(dateSold);
    setCustomerId("");
    setProductId("");
    setStoreId("");
  };

  const editSale = async () => {
    const newSaleByID = {
      saleId: id,
      dateSold: dateSold,
      customerId: customerId,
      productId: productId,
      storeId: storeId,
    };
    await axios({
      method: "put",
      url: "Sales/PutSale/" + id,
      data: newSaleByID,
    });
    setLoading(true);
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
        onClose={() => {
          setOpen(false);
          resetState();
        }}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>Edit Sale</Modal.Header>

        <Modal.Content>
          <Header as="h4">DATE SOLD</Header>
          <Input
            value={dateSold}
            onChange={updateDate}
          />

          <Header as="h4">CUSTOMER</Header>
          <Dropdown
            //placeholder={customerOptions[0].text}
            //trigger={trigger}
            
            fluid
            selection
            value={customerId}
            options={customerOptions}
            
            onChange={(event, event2) => {
              setCustomerId(event2.value);
            }}
          />

          <Header as="h4">PRODUCT</Header>
          <Dropdown
            placeholder
            //name={productId}
            fluid
            selection
            options={productOptions}
            value={productId}
            onChange={(event, event2) => {
              setProductId(event2.value);
            }}
          />

          <Header as="h4">STORE</Header>
          <Dropdown
            placeholder="Select Store"
            // name="storeName"
            fluid
            selection
            options={storeOptions}
            value={storeId}
            onChange={(event, event2) => {
              setStoreId(event2.value);
            }}
          />
        </Modal.Content>

        <Modal.Actions>
          <Button secondary onClick={() => {
          setOpen(false);
          resetState();
        }}>
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
