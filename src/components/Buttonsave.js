import React from "react";
import { Button } from "semantic-ui-react";

export default function Buttonsave({
  addEntry,
  description,
  value,
  isExpense,
}) {
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button>cancel</Button>
      <Button.Or />
      <Button
        color="primary"
        onClick={() => addEntry(description, value, isExpense)}
      >
        ok
      </Button>
    </Button.Group>
  );
}
