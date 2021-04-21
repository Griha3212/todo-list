import React, { useEffect, useState } from "react";
import { Route, Router, Switch, BrowserRouter } from "react-router-dom";
import { loadUserDataFromLocalStorage } from "../../utils/localStorage";

export const Protected = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const { token } = loadUserDataFromLocalStorage();
    console.log("token :>> ", token);
  }, []);

  if (!isAuthenticated) return null;

  return (
    <Switch>
      {/* <Route path="/weather" exact component={Weather} />
    <Route path="/history" exact component={History} />
    <Route path="/history/:_id" component={HistoryItem} />
    <Route path="/profile" exact component={Profile} /> */}
    </Switch>
  );
};
