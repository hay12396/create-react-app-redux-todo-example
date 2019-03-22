import React from "react";
import { TodoItem } from "./class/todo";

export interface ITodoProps {
  todo: TodoItem;
  onTodoClicked: (t: TodoItem) => any;
}

class Todo extends React.Component<ITodoProps, {}> {
  render() {
    return (
      <li
        onClick={() => this.props.onTodoClicked(this.props.todo)}
        style={{
          textDecoration: this.props.todo.completed ? "line-through" : "none"
        }}
      >
        {this.props.todo.text}
      </li>
    );
  }

}

export default Todo;
