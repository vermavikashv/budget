import React from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";
// destructure value
// {
//   entry: { id, title, value, color = "red", isExpense = false },
// }
export default function Entryline({
  id,
  description,
  value,
  color = "red",
  isExpense = false,
  deleteEntry,
  editEntry,
}) {
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
              {description}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              ${value}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered onClick={() => editEntry(id)} />
              <Icon name="trash" onClick={() => deleteEntry(id)} bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
}
