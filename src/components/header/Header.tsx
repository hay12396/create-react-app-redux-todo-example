import React from "react";
import { NavLink, Switch } from "react-router-dom";
import TodosPage from "../todo-page/TodosPage";

class Header extends React.PureComponent<{}, {}> {
  render() {
    return (
      <div>
        <NavLink activeStyle={{ color: "black" }} exact to="/">
          Home
        </NavLink>
        <NavLink activeStyle={{ color: "black" }} to="/todos">
          Todos
        </NavLink>
        <NavLink activeStyle={{ color: "black" }} to="/nested">
          Nested Routes
        </NavLink>
      </div>
    );
  }
}

export default Header;
