import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useEffect } from "react";
import Login from "../src/components/Login";
import Home from "./components/Home";

const clientId = "x6fjleftolmy44txegskqtkq1t358y";
const redirectUri = "http://localhost:3000/home";
const responseType = "token";
// const scopeList = ["chat:read", "chat:edit"].join().replace(",", "+");
const scopeList = ["chat:read"];
const link = `https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scopeList}`;

// const authorize = () => {
//   fetch(
//     `https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scopeList}`
//   ).then((response) => console.log("test"));
// };

export default function App(): JSX.Element {
  return (
    <Router>
      <a href={link}>test</a>
      <Switch>
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </Router>
    // <div>
    //   <a href={link} onClick={() => console.log(link)}>
    //     3head
    //   </a>
    // </div>
  );
}
