import React, { useState } from "react";
import Buttonsave from "./Buttonsave";
import { Checkbox, Form, Segment } from "semantic-ui-react";

export default function Newentryform({ addEntry }) {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [isExpense, setIsexpense] = useState(true);

  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="description"
          placeholder="New shinny thing"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Form.Input
          width={4}
          label="Value"
          placeholder="100.00"
          icon="dollar"
          iconPosition="left"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></Form.Input>
      </Form.Group>
      <Segment compact>
        <Checkbox
          toggle
          label="is Expense"
          checked={isExpense}
          onChange={() => setIsexpense(!isExpense)}
        />
      </Segment>
      <Buttonsave
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
      />
    </Form>
  );
}
