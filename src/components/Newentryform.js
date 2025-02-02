import React, { useState } from "react";
import Buttonsave from "./Buttonsave";
import { Form } from "semantic-ui-react";
import EntryForm from "./EntryForm";

export default function Newentryform({ addEntry }) {
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [isExpense, setIsexpense] = useState(true);

  return (
    <Form unstackable>
      <EntryForm
        description={description}
        value={value}
        isExpense={isExpense}
        setValue={setValue}
        setDescription={setDescription}
        setIsexpense={setIsexpense}
      />

      <Buttonsave
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
      />
    </Form>
  );
}
