import React from "react";
import { Button, Modal } from "semantic-ui-react";
import EntryForm from "./EntryForm";

export default function ModalEdit({
  isOpen,
  setIsOpen,
  value,
  setValue,
  description,
  setDescription,
  isExpense,
  setIsexpense,
}) {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit entry</Modal.Header>
      <Modal.Content>
        <EntryForm
          description={description}
          value={value}
          isExpense={isExpense}
          setValue={setValue}
          setDescription={setDescription}
          setIsexpense={setIsexpense}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setIsOpen(false)}>close</Button>
        <Button onClick={() => setIsOpen(false)} primary>
          ok
        </Button>
      </Modal.Actions>
    </Modal>
  );
}
