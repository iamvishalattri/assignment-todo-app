import React from "react";

import ActiveTaskList from "./containers/ActiveTaskList";
import CompletedTaskList from "./containers/CompletedTaskList";

import AddTask from "./components/AddTask";
import Heading from "./components/Heading";
import Title from "./components/Title";

import "./App.scss";

const App = () => (
  <div>
    <Title title="To Do List" />
    <Heading heading="Add Item" />
    <AddTask />
    <Heading heading="List" />
    <ActiveTaskList />
    <Heading heading="Completed" />
    <CompletedTaskList />
  </div>
);

export default App;
