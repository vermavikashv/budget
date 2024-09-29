import React from "react";
import { Container } from "semantic-ui-react";
import Entryline from "./Entryline";

export default function EntryLines({ entries, deleteEntry }) {
  return (
    <Container>
      {entries.map((item, index) => (
        <Entryline
          key={item.id}
          //   color="red"
          //   title={item?.title}
          //   value={item?.value}
          //   isExpense={item?.isExpense}
          {...item}
          deleteEntry={deleteEntry}
        />
      ))}
    </Container>
  );
}
