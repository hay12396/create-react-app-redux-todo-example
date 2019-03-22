import React from "react";
import { TodoItem } from "../todo/class/todo";
import { v4 } from "node-uuid";

export interface ITodoFormProps {
  addTodo: (t: TodoItem) => any;
}

class TodoForm extends React.PureComponent<ITodoFormProps, {}> {
  input!: HTMLInputElement | null;

  render() {
    return (
      <div>
        <input
          ref={node => {
            this.input = node;
          }}
        />
        <button
          onClick={() => {
            this.props.addTodo({
              completed: false,
              text: this.input!.value,
              id: v4()
            });
            this.input!.value = "";
          }}
        >
          Add Todo
        </button>
      </div>
    );
  }
}

export default TodoForm;