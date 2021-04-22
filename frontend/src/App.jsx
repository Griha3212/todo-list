import "./App.css";
import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { TodoPage } from "./pages/TodoPage/TodoPage";
import { Protected } from "./pages/Protected/Protected";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={TodoPage} />
        <Route path="/" component={Protected} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
