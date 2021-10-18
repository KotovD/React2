import React, { useState } from 'react'
import axios from 'axios'
import { Button, Header, Icon, Input, Modal } from 'semantic-ui-react'

const EditStore = ({ originalName, originalAddress, setLoading, id }) => {
  
  const [storeName, setStoreName] = useState(originalName)
  const [storeAddress, setStoreAddress] = useState(originalAddress)

  const [open, setOpen] = useState(false)

  const editStore = async () => {
    await axios({
    method: "put",
      url: 'Stores/PutStore/' + id,
      data: {
        id: id, 
        name: storeName, 
        address: storeAddress 
      }
    })
    setLoading(true)
  }

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
        <Modal.Header>Edit Store</Modal.Header>

        <Modal.Content>
          <Header as='h4'>NAME</Header>
          <Input fluid value={storeName} onChange={updateStoreName}/>
          <Header as='h4'>ADDRESS</Header>
          <Input fluid value={storeAddress} onChange={updateStoreAddress}/>
        </Modal.Content>

        <Modal.Actions>
          <Button secondary onClick={() => setOpen(false)}>
            No
          </Button>
          <Button positive onClick={() => {
            editStore()
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

export default EditStore