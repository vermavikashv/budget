import { Container } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import Newentryform from "./components/Newentryform";
import Displaybalance from "./components/Displaybalance";
import Displaybalances from "./components/Displaybalances";
import { useState } from "react";
import EntryLines from "./components/EntryLines";

function App() {
  const [entries, SetEntries] = useState(initializeEntries);

  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id);
    console.log(result);

    SetEntries(result);
  }

  function addEntry(description, value, isExpense) {
    const result = entries.concat({
      id: entries.length + 1,
      title: description,
      value: value,
      isExpense: isExpense,
    });

    SetEntries(result);
  }

  return (
    <Container>
      <MainHeader title="Budget" />

      <Displaybalance title="Your Budget" value="2,500.00" size="small" />

      <Displaybalances />

      <MainHeader title="History" type="h3" />

      <EntryLines entries={entries} deleteEntry={deleteEntry} />
      <MainHeader title="Add new transcation" type="h3" />
      <Newentryform addEntry={addEntry} />
    </Container>
  );
}

export default App;

var initializeEntries = [
  {
    id: 1,
    title: "work income",
    value: "100.00",
    isExpense: false,
  },
  {
    id: 2,
    title: "work bill",
    value: "20.00",
    isExpense: true,
  },
  {
    id: 3,
    title: "rent",
    value: "300.00",
    isExpense: true,
  },
  {
    id: 4,
    title: "internet bill",
    value: "50.00",
    isExpense: true,
  },
];
