import "./App.css";
import React from "react";
import { Route, Router, Switch, BrowserRouter } from "react-router-dom";
import { ToDoList } from "./components/ToDoList/ToDoList";
import { Header } from "./components/Header/Header";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { TodoPage } from "./pages/TodoPage/TodoPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LoginPage} />
        <Route exact path="/todo" component={TodoPage} />
      </Switch>
    </BrowserRouter>

    // <div className="App">
    //   <Header />
    //   <ToDoList />
    // </div>
  );
}

export default App;
