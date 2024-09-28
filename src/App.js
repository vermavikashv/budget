import {
  Button,
  Container,
  Form,
  Grid,
  Header,
  Icon,
  Segment,
  Statistic,
} from "semantic-ui-react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import Newentryform from "./components/Newentryform";
import Displaybalance from "./components/Displaybalance";

function App() {
  return (
    <Container>
      <MainHeader title="Budget" />

      <Displaybalance title="Your Budget" value="2,500.00" size="small" />

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

      <MainHeader title="History" type="h3" />

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
      <Segment color="green">
        {" "}
        {/* // line power box */}
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            {" "}
            {/*  gird is 16  */}
            <Grid.Column width={10} textAlign="left">
              SomeThing 2
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              $100.00
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

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
      <MainHeader title="Add new transcation" type="h3" />
      <Newentryform />
    </Container>
  );
}

export default App;
