import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from "../home/index";
import Posts from "../posts/index";
import { Todos } from "../to-dos/index";
import "./scss/index.css";

const Main = ({
  className = "",
}) => (
  <main className={`Main ${className}`}>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/posts" component={Posts}/>
      <Route path="/to-dos" component={Todos}/>
    </Switch>
  </main>
);

export { Main };
