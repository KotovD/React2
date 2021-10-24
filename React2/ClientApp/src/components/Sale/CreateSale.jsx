import React, { useState } from 'react'
import { Button, Header, Icon, Input, Modal } from 'semantic-ui-react'
//import buttonReducer from '../buttonReducer'
import { Dropdown } from 'semantic-ui-react'
import axios from 'axios'
//import { baseURL } from '../baseURL'

const CreateSale = ({ setLoading, customers, products, stores, originalId }) => {

  const [open, setOpen] = useState(false)

  const [date, setDate] = useState("");

  const [customerId, setCustomerId] = useState("")
  const [productId, setProductId] = useState("")
  const [storeId, setStoreId] = useState("")

  const customerOptions = []; //keep these outside so its scope can be reachable below
  const productOptions = [];
  const storeOptions = [];

  const createData = () => {
    customers.map(x => customerOptions.push({ key: x.name, text: x.name, value: x.id }))
    products.map(x => productOptions.push({ key: x.name, text: x.name, value: x.id }))
    stores.map(x => storeOptions.push({ key: x.name, text: x.name, value: x.id }))
  }

  const onChangeDate = (event) => {
    setDate(event.target.value)
  }

  const resetState = () => {
    setDate("")
    setStoreId("")
    setProductId("")
    setCustomerId("")
  }

  const createSale = async () => {

    const newSaleByID = {
      saleId: originalId,
      dateSold: date, // ISSUE HERE dateFormat.format(new Date(date))
      customerId: customerId,
      productId: productId,
      storeId: storeId
    }
    console.log(originalId);
    if (
      newSaleByID.dateSold === "" ||
      newSaleByID.customerId === "" ||
      newSaleByID.productId === "" ||
      newSaleByID.storeId === ""
    ) {
      alert("Creating Sale unsuccessfully. Please fill up all the fields.")
    } else {
      await axios({
        method: "post",
        url:"Sales/PostSale",
        data: newSaleByID
      })
      setLoading(true)
    }
  }
  
  return (
    <>
    <div class="create-button">
      {createData()}
      <Button
        color='blue'
        onClick={() => setOpen(true)}
      >
        New Sale
      </Button>

      <Modal
        size='mini'
        onClose={() => {
          setOpen(false);
          resetState();
        }}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>Create Sale</Modal.Header>

        <Modal.Content>
          <Header as='h4'>DATE SOLD</Header>
          <Input fluid placeholder='Date sole...'value={date} onChange={onChangeDate} />

          <Header as='h4'>CUSTOMER</Header>
          <Dropdown
            placeholder='Select Customer'
            fluid
            selection
            options={customerOptions}
            value={customerId}
            onChange={(event, event2) => {
              setCustomerId(event2.value) //only God know why they got 2 events next to each other
            }}
          />

          <Header as='h4'>PRODUCT</Header>
          <Dropdown
            placeholder='Select Product'
            fluid
            selection
            options={productOptions}
            value={productId}
            onChange={(event, event2) => {
              setProductId(event2.value)
            }}
          />

          <Header as='h4'>STORE</Header>
          <Dropdown
            placeholder='Select Store'
            fluid
            selection
            options={storeOptions}
            value={storeId}
            onChange={(event, event2) => {
              setStoreId(event2.value)
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
              createSale()
              setOpen(false)
            }}
            icon labelPosition='right'
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

export default CreateSale