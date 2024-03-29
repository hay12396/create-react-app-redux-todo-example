import React from "react";
import { TodoItem } from "../todo/class/todo";
import Todo from "../todo/Todo";

export interface ITodoListProps {
  todos: TodoItem[];
  onTodoClicked: (t: TodoItem) => any;
}

export default class TodoList extends React.PureComponent<ITodoListProps, {}> {
  render() {
    let me = this;
    return (
      <ul>
        {this.props.todos.map(t => {
          return (
            <Todo key={t.id} todo={t} onTodoClicked={me.props.onTodoClicked} />
          );
        })}
      </ul>
    );
  }
}
