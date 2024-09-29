import React, { useState } from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";
import ModalEdit from "./ModalEdit";
// destructure value
// {
//   entry: { id, title, value, color = "red", isExpense = false },
// }
export default function Entryline({
  id,
  title,
  value,
  color = "red",
  isExpense = false,
  deleteEntry,
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Segment color={isExpense ? "red" : "green"}>
        {" "}
        {/* // line power box */}
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            {" "}
            {/*  gird is 16  */}
            <Grid.Column width={10} textAlign="left">
              {title}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              ${value}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered onClick={() => setIsOpen(true)} />
              <Icon name="trash" onClick={() => deleteEntry(id)} bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <ModalEdit isOpen={isOpen} />
    </>
  );
}
