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

  // const customerOptions = []; //keep these outside so its scope can be reachable below
  // const productOptions = [];
  // const storeOptions = [];

  const DateFormat = require("fast-date-format");
  const dateFormat = new DateFormat("DD/MM/YYYY");

  // const createData = () => {
  //   customers.map((x) =>
  //     customerOptions.push({ key: x.id, text: x.name, value: x.id })
  //   );
  //   products.map((x) =>
  //     productOptions.push({ key: x.id, text: x.name, value: x.id })
  //   );
  //   stores.map((x) =>
  //     storeOptions.push({ key: x.id, text: x.name, value: x.id })
  //   );
  // };

  const customerOptions = customers.map((x) => ({
    value: x.id,
    key: x.name,
    text: x.name,
  }));

  const productOptions = products.map((x) => ({
    value: x.id,
    key: x.name,
    text: x.name,
  }));

  const storeOptions = stores.map((x) => ({
    value: x.id,
    key: x.name,
    text: x.name,
  }));

  const resetState = () => {
    setDate("");
    setStoreId("");
    setProductId("");
    setCustomerId("");
  };

  const updateCustomerId = (event, result) => {
    const { id, value } = result || event.target;
    setCustomerId({ ...customerId, [id]:value});
  };

  const updateProductId = (event, result) => {
    const { id, value } = result || event.target;
    setProductId({ ...productId, [id]:value});
  };

  const updateStoreId = (event, result) => {
    const { id, value } = result || event.target;
    setStoreId({ ...storeId, [id]:value});
  };

  // const trigger = (
  //   <span>
  //     <Icon name='customers'/> {customerOptions}
  //   </span>
  // )

  const editSale = async () => {

    const newSaleByID = {
      SaleID: id,
      DateSold: dateFormat.format(new Date(dateSold)), // ISSUE HERE dateFormat.format(new Date(date))
      CustomerId: customerId,
      ProductId: productId,
      StoreId: storeId,
    };
    // console.log(newSaleByID);
    await axios({
      method: "put",
      url: 'Sales/PutSale/' + id,
      data: newSaleByID,
    });
    setLoading(true);
    // console.log("----->", customerId);
  };

  return (
    <>
      {/* {console.log("------>", customerId)} */}
      {/* {createData()} */}
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
            //text={customerOptions[customerId]}
            // trigger={trigger}
            // name="customerName"
            fluid
            selection
            options={customerOptions}
            value={customers.value}
            onChange={(event, data) => updateCustomerId(event, data)}
          />

          <Header as="h4">PRODUCT</Header>
          <Dropdown
            //placeholder="Select Product"
            // name="productName"
            fluid
            selection
            options={productOptions}
            value={products.value}
            onChange={(event, data) => updateProductId(event, data)}
          />

          <Header as="h4">STORE</Header>
          <Dropdown
            placeholder="Select Store"
            // name="storeName"
            fluid
            selection
            options={storeOptions}
            value={stores.value}
            onChange={(event, data) => updateStoreId(event, data)}
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
