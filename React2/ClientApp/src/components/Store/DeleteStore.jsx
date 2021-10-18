import React from "react";
import axios from "axios";
import { Button, Icon, Modal } from "semantic-ui-react";

const DeleteStore = ({ id, name, address, setLoading }) => {
  const [open, setOpen] = React.useState(false);

  const deleteStore = async (id, name, address) => {
    await axios.delete(`Stores/DeleteStore/${id}`, {
      headers: {},
      data: {
        Id: id,
        Name: name,
        Address: address,
      },
    });
    setLoading(true);
  };

  return (
    <>
      <Button color="red" onClick={() => setOpen(true)}>
        <Icon name="trash alternate outline" />
        Delete
      </Button>

      <Modal
        size="mini"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>Delete Store</Modal.Header>
        <Modal.Content>
        <p>Are you sure you want to delete the record?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button secondary onClick={() => setOpen(false)}>
            No
          </Button>
          <Button
            color="red"
            onClick={() => {
              deleteStore(id, name, address);
              setOpen(false);
            }}
            icon
            labelPosition="right"
          >
            Delete
            <Icon name="delete" />
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default DeleteStore;
