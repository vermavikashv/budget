import {
  Button,
  Container,
  Grid,
  Icon,
  Segment,
  Statistic,
} from "semantic-ui-react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import Newentryform from "./components/Newentryform";
import Displaybalance from "./components/Displaybalance";
import Displaybalances from "./components/Displaybalances";
import Entryline from "./components/Entryline";

function App() {
  return (
    <Container>
      <MainHeader title="Budget" />

      <Displaybalance title="Your Budget" value="2,500.00" size="small" />

      <Displaybalances />

      <MainHeader title="History" type="h3" />
      <Entryline color="red" title=" SomeThing" value="10.00" isExpense />
      <Entryline color="green" title=" SomeThing 2" value="100.00" />
      <Entryline color="red" title=" SomeThing" value="10.00" isExpense />

      <MainHeader title="Add new transcation" type="h3" />
      <Newentryform />
    </Container>
  );
}

export default App;
