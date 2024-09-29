import React from "react";
import { Container } from "semantic-ui-react";
import Entryline from "./Entryline";

export default function EntryLines({ entries }) {
  return (
    <Container>
      {entries.map((item, index) => (
        <Entryline
          color="red"
          title={item?.title}
          value={item?.value}
          isExpense={item?.isExpense}
        />
      ))}
    </Container>
  );
}
