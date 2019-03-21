import React from "react";
import { TodoItem } from "../todo/class/todo";
import Todo from "../todo/Todo";

export interface ITodoListProps {
  todos: TodoItem[];
  onTodoClicked: (t: TodoItem) => any;
}

export default class TodoList extends React.Component<ITodoListProps, {}> {
  
  render() {
    let me = this;
    return (
      <ul>
        {this.props.todos.map(t => {
          return <Todo
            todo={t}
            onTodoClicked={me.props.onTodoClicked}
          />;
        })}
      </ul>
    );
  }
}
