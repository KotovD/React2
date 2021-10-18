import React, {useState} from "react";
import axios from "axios";
import { Button, Icon, Modal } from "semantic-ui-react";

const DeleteSale = ({ id, customerName, productName, storeName, dateSold, setLoading }) => {
  const [open, setOpen] = useState(false);

  const deleteSale = async(id, customerName, productName, storeName, dateSold ) => {
    await axios.delete(`Sales/DeleteSale/${id}`, {
      headers: {},
      data: {
        SaleID: id,
        CustomerID: customerName,
        ProductID: productName,
        StoreID: storeName,
        DateSold: dateSold
      },
    });
    setLoading(true);
  };

  return (
    <>
      <Button color="red" onClick={() => setOpen(true)}>
        <Icon name='trash alternate outline' />
        Delete
      </Button>

      <Modal
        size="mini"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Header>Delete Sale</Modal.Header>
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
                deleteSale(id, customerName, productName, storeName, dateSold );
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

export default DeleteSale;
