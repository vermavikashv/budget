import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import Displaybalance from "./Displaybalance";

export default function Displaybalances() {
  return (
    <div>
      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <Grid.Column>
              <Displaybalance title="Income" value="1045.86" color="green" />
            </Grid.Column>
            <Grid.Column>
              <Displaybalance title="Expenses" value="645.56" color="red" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </div>
  );
}
