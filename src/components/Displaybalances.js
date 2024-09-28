import React from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";

export default function Displaybalances() {
  return (
    <div>
      <Segment color="red">
        {" "}
        {/* // line power box */}
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            {" "}
            {/*  gird is 16  */}
            <Grid.Column width={10} textAlign="left">
              SomeThing
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $10.00
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
