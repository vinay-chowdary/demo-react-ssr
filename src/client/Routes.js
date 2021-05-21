import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Memes from "./components/Memes";
import Page2 from "./components/Page2";

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/page" component={Page2} />
        <Route exact path="/memes" component={Memes} />
      </Switch>
    </div>
  );
};

export default Routes;
