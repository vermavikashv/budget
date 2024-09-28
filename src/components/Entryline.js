import React from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";

export default function Entryline({
  title,
  value,
  color = "red",
  isExpense = false,
}) {
  return (
    <div>
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
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
}
