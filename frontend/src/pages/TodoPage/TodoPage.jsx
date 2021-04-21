import React from "react";
import { Header } from "../../components/Header/Header";
import { ToDoList } from "../../components/ToDoList/ToDoList";

export const TodoPage = () => (
  <div className="App">
    <Header />
    <ToDoList />
  </div>
);
