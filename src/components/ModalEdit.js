import React from "react";
import { Button, Modal } from "semantic-ui-react";
import Newentryform from "./Newentryform";

export default function ModalEdit({ isOpen, setIsOpen }) {
  return (
    <Modal open={isOpen}>
      <Modal.Header>Edit entry</Modal.Header>
      <Modal.Content>
        <Modal.Description>Something Header</Modal.Description>
        <Newentryform />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setIsOpen(false)}>close</Button>
      </Modal.Actions>
    </Modal>
  );
}
