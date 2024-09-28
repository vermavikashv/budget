import React from "react";
import { Header } from "semantic-ui-react";

export default function MainHeader({ title, type = "h1" }) {
  return (
    <div>
      <Header as={type}>{title}</Header>
    </div>
  );
}
