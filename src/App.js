import { Container } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import Newentryform from "./components/Newentryform";
import Displaybalance from "./components/Displaybalance";
import Displaybalances from "./components/Displaybalances";
import { useEffect, useState } from "react";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";
import { createStore } from "redux";

function App() {
  const [entries, SetEntries] = useState(initializeEntries);
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [isExpense, setIsexpense] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [entryid, SetEntryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0);
  const [expenseTotal, setExpenseTotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!isOpen && entryid) {
      const index = entries.findIndex((entry) => entry.id === entryid);
      const newEntries = [...entries];
      console.log(newEntries, index);
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      SetEntries(newEntries);
      resetEntry();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;

    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpense += Number(entry.value));
      } else {
        return (totalIncome += Number(entry.value));
      }
    });
    setTotal(totalIncome - totalExpense);
    setIncomeTotal(totalIncome);
    setExpenseTotal(totalExpense);
  }, [entries]);

  const store = createStore((state = initializeEntries, action) => {
    console.log(action);
    let newEntries;
    switch (action.type) {
      case "ADD_ENTRY":
        newEntries = state.concat({ ...action.payload_add });
        return newEntries;

      case "REMOVE_ENTRY":
        newEntries = state.filter((entry) => entry.id !== action.payload.id);
        return newEntries;

      default:
        return state;
    }
  });

  console.log("before", store.getState());
  const payload_add = {
    id: 5,
    description: "hello from redux",
    value: 100,
    isExpense: true,
  };

  const payload_remove = {
    id: 1,
  };
  store.dispatch({ type: "ADD_ENTRY", payload: payload_add });
  console.log("after", store.getState());
  store.dispatch({ type: "REMOVE_ENTRY", payload: payload_remove });

  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id);
    console.log(result);

    SetEntries(result);
  }

  function editEntry(id) {
    console.log(`${id}`);
    if (id) {
      const index = entries.findIndex((entry) => entry.id === id);
      const entry = entries[index];
      SetEntryId(id);
      setDescription(entry.description);
      setValue(entry.value);
      setIsexpense(entry.isExpense);
      setIsOpen(true);
    }
  }

  function addEntry() {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });

    SetEntries(result);
    console.log(result);

    resetEntry();
  }

  function resetEntry() {
    setDescription("");
    setValue("");
    setIsexpense(true);
  }

  return (
    <Container>
      <MainHeader title="Budget" />

      <Displaybalance title="Your Budget" value={total} size="small" />

      <Displaybalances expenseTotal={expenseTotal} incomeTotal={incomeTotal} />

      <MainHeader title="History" type="h3" />

      <EntryLines
        entries={entries}
        deleteEntry={deleteEntry}
        editEntry={editEntry}
      />
      <MainHeader title="Add new transcation" type="h3" />
      <Newentryform
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setValue={setValue}
        setDescription={setDescription}
        setIsexpense={setIsexpense}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addEntry={addEntry}
        description={description}
        value={value}
        isExpense={isExpense}
        setValue={setValue}
        setDescription={setDescription}
        setIsexpense={setIsexpense}
      />
    </Container>
  );
}

export default App;

var initializeEntries = [
  {
    id: 1,
    description: "work income",
    value: 100.0,
    isExpense: false,
  },
  {
    id: 2,
    description: "work bill",
    value: 20.0,
    isExpense: true,
  },
  {
    id: 3,
    description: "rent",
    value: 300.0,
    isExpense: true,
  },
  {
    id: 4,
    description: "internet bill",
    value: 50.0,
    isExpense: true,
  },
];
