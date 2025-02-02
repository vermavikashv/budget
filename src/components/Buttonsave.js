import React from "react";
import { Button } from "semantic-ui-react";

export default function Buttonsave({ addEntry }) {
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button>cancel</Button>
      <Button.Or />
      <Button color="primary" onClick={() => addEntry()}>
        ok
      </Button>
    </Button.Group>
  );
}
