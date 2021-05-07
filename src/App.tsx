import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Login from "../src/components/Login";
import Home from "./components/Home";

export default function App(): JSX.Element {
  const [displayAuthorizeLink, setDisplayAuthorizeLink] = useState<boolean>(
    true
  );

  useEffect(() => {
    // console.log(clientId)
  }, [])

  return (
    <Router>
      {displayAuthorizeLink && <a href={'test'}>Login</a>}
      <Switch>
        <Route path='/home'>
          <Home
            authenticatedSuccessfully={(authenticated: boolean) =>
              setDisplayAuthorizeLink(!authenticated)
            }
            // authorizationCode={(code: string) => setAuthorizationCode(code)}
          />
        </Route>
        {/* <Route path='/login'>
          <Login />
        </Route> */}
      </Switch>
    </Router>
  );
}
