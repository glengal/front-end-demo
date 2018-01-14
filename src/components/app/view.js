import React from 'react';
import { Login } from "../login/index";
import Header from "../header/index";
import { Main } from "../main/index";
import "./scss/index.css";


const AppView = ({
  showLogin = false,
  user: {
    username = "",
    name = "",
    website = ""
  } = {},
  onLogout
}) => (
  <div className="App">
    {
       showLogin ?
        <Login />
        :
        <div>
          <Header className="App-header"/>
          <Main className="App-main" />
        </div>
    }
  </div>
);

export { AppView };
