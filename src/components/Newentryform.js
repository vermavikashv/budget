import React from "react";
import Buttonsave from "./Buttonsave";
import { Form } from "semantic-ui-react";

export default function Newentryform() {
  return (
    <div>
      {" "}
      <Form unstackable>
        <Form.Group>
          <Form.Input
            icon="tags"
            width={12}
            label="description"
            placeholder="New shinny thing"
          />

          <Form.Input
            width={4}
            label="Value"
            placeholder="100.00"
            icon="dollar"
            iconPosition="left"
          ></Form.Input>
        </Form.Group>
        <Buttonsave />
      </Form>
    </div>
  );
}
