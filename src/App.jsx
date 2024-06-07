import { useState } from "react";
import Head from "./component/Head";
import { InptToDo } from "./component/ToDoInpt";
import "./App.css";

function App() {
  return (
    <>
      <Head />
      <InptToDo />
    </>
  );
}

export default App;
