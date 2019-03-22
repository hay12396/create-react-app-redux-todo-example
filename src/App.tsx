import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./components/home/Home";
import TodosPage from "./components/todo-page/TodosPage";
import Nested from "./components/nested/Nested";

export interface IAppProps {}

class App extends Component<IAppProps, {}> {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/todos" component={TodosPage} />
          <Route path="/nested" component={Nested} />
        </Switch>
      </div>
    );
  }
}

export default App;
