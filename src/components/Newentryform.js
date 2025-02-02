import React from "react";
import Buttonsave from "./Buttonsave";
import { Form } from "semantic-ui-react";
import EntryForm from "./EntryForm";

export default function Newentryform({
  addEntry,
  value,
  setValue,
  description,
  setDescription,
  isExpense,
  setIsexpense,
}) {
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

      <Buttonsave addEntry={addEntry} />
    </Form>
  );
}
