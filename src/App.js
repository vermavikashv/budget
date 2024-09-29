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
import { useState } from "react";
import EntryLines from "./components/EntryLines";

function App() {
  const [entries, SetEntries] = useState(initializeEntries);
  return (
    <Container>
      <MainHeader title="Budget" />

      <Displaybalance title="Your Budget" value="2,500.00" size="small" />

      <Displaybalances />

      <MainHeader title="History" type="h3" />

      <EntryLines entries={entries} />
      <MainHeader title="Add new transcation" type="h3" />
      <Newentryform />
    </Container>
  );
}

export default App;

var initializeEntries = [
  {
    title: "work income",
    value: "100.00",
    isExpense: false,
  },
  {
    title: "work bill",
    value: "20.00",
    isExpense: true,
  },
  {
    title: "rent",
    value: "300.00",
    isExpense: true,
  },
  {
    title: "internet bill",
    value: "50.00",
    isExpense: true,
  },
];
