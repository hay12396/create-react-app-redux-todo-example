import React from "react";
import { TodoItem } from "./class/todo";

export interface ITodoProps {
  todo: TodoItem;
  onTodoClicked: (t: TodoItem) => any;
}

class Todo extends React.PureComponent<ITodoProps, {}> {
  constructor(props: ITodoProps) {
    super(props);

    this.toggleTodoClick = this.toggleTodoClick.bind(this);
  }

  render() {
    return (
      <li
        onClick={this.toggleTodoClick}
        style={{
          textDecoration: this.props.todo.completed ? "line-through" : "none"
        }}
      >
        {this.props.todo.text}
      </li>
    );
  }

  toggleTodoClick() {
    this.props.onTodoClicked(this.props.todo);
  }
}

export default Todo;
