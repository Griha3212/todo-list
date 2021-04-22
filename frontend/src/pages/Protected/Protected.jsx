import React, { useEffect, useState } from "react";
import {
  Route,
  Router,
  Switch,
  BrowserRouter,
  Redirect,
} from "react-router-dom";
import { loadUserDataFromLocalStorage } from "../../utils/localStorage";
import { LoginPage } from "../LoginPage/LoginPage";

export const Protected = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const { token } = loadUserDataFromLocalStorage();
    console.log("token :>> ", token);

    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) return <Redirect to="/login" />;

  return (
    <Switch>
      {/* <Route path="/weather" exact component={Weather} />
    <Route path="/history" exact component={History} />
    <Route path="/history/:_id" component={HistoryItem} />
    <Route path="/profile" exact component={Profile} /> */}
    </Switch>
  );
};
