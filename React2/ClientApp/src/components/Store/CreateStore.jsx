import axios from "axios";
import React, { useState } from "react";
import { Button, Header, Icon, Input, Modal } from "semantic-ui-react";
import "./CreateButton.css";

const CreateStore = ({ setLoading }) => {
  
  const [open, setOpen] = useState(false)

  const [storeName, setStoreName] = useState("");
  const [storeAddress, setStoreAddress] = useState("");

  const createStore = async (storeName, storeAddress) => {
    await axios({
      method: "post",
      url: `Stores/PostStore`,
      data: {
        name: storeName,
        address: storeAddress
      },
    });
    setLoading(true);
  };

  const updateStoreName = (change) => {
    setStoreName(change.target.value);
    console.log(storeName);
  };

  const updateStoreAddress = (change) => {
    setStoreAddress(change.target.value);
    console.log(storeAddress);
  };

 
  return (
    <>
    <div className="create-button">
      <Button
        color='blue'
        onClick={() => setOpen(true)}
      >
        New Store
      </Button>

      <Modal
        size='mini'
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>Create Store</Modal.Header>

        <Modal.Content>
          <Header as='h4'>NAME</Header>
          <Input fluid placeholder='Name...' onChange={updateStoreName} />
          <Header as='h4'>ADDRESS</Header>
          <Input fluid placeholder='Address...' onChange={updateStoreAddress} />
        </Modal.Content>

        <Modal.Actions>
          <Button secondary onClick={() => setOpen(false)}>
            Cancel
          </Button>

          <Button
            positive
            icon labelPosition='right'
            onClick={() => {
                createStore(storeName, storeAddress);
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


export default CreateStore;
