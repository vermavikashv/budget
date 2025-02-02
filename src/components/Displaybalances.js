import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import Displaybalance from "./Displaybalance";

export default function Displaybalances({ expenseTotal, incomeTotal }) {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <Grid.Column>
            <Displaybalance title="Income" value={incomeTotal} color="green" />
          </Grid.Column>
          <Grid.Column>
            <Displaybalance title="Expenses" value={expenseTotal} color="red" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
