import React from "react";
import "./App.css";
import Form from "./Form";
import Timestamp from "./Timestamp";
import Current from "./Current";

export default function App() {
  return (
    <div className="App">
      <Form />
      <Timestamp />
      <Current />
    </div>
  );
}
