import React from "react";
import { Button } from "semantic-ui-react";

export default function Buttonsave() {
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button>cancel</Button>
      <Button.Or />
      <Button color="primary">ok</Button>
    </Button.Group>
  );
}
