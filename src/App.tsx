import "./App.css";
import React, { useEffect } from "react";
import Login from "../src/components/Login";

const clientId = "x6fjleftolmy44txegskqtkq1t358y";
const redirectUri = "http://localhost";
const responseType = "token";
// const scopeList = ["chat:read", "chat:edit"].join().replace(",", "+");
const scopeList = ["chat:read"];
const link = `https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scopeList}`;

// const authorize = () => {
//   fetch(
//     `https://id.twitch.tv/oauth2/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scopeList}`
//   ).then((response) => console.log("test"));
// };

function App(): JSX.Element {
  return (
    <div>
      <a href={link} onClick={() => console.log(link)}>
        3head
      </a>
    </div>
  );

  // return <Login></Login>;
}

export default App;
