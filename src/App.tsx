import React, { Component } from "react";
import "./App.css";
import { IRootStoreState } from "./reducers/root.reducer";
import { Dispatch, bindActionCreators } from "redux";
import { Action } from "./actions/action";
import * as TodosActions from "./actions/todo/todo-actions";
import * as FilterActions from "./actions/filter/filter-actions";
import { connect } from "react-redux";
import { TodoItem } from "./components/todo/class/todo";
import TodoList from "./components/todo-list/TodoList";
import TodoForm from "./components/todo-form/TodoForm";
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_UNCOMPELTED
} from "./actions/filter/action-types";
import TodosFilter from "./components/todos-filter/TodosFilter";

export interface IAppProps {
  todos?: TodoItem[];
  currentFilter?: string;
  todosActions?: typeof TodosActions;
  filterActions?: typeof FilterActions;
}

class App extends Component<IAppProps, {}> {
  constructor(props: IAppProps) {
    super(props);

    this.filterClicked = this.filterClicked.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(t: TodoItem) {
    this.props.todosActions!.addTodo(t);
  }

  toggleTodo(t: TodoItem) {
    this.props.todosActions!.toggleTodo(t);
  }

  filterClicked(filter: string) {
    this.props.filterActions!.filter(filter);
  }

  render() {
    return (
      <div>
        <TodoForm addTodo={this.addTodo} />
        <TodoList
          todos={this.props.todos || []}
          onTodoClicked={this.toggleTodo}
        />
        <TodosFilter
          currentFilter={this.props.currentFilter || SHOW_ALL}
          onFilterClicked={this.filterClicked}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: IRootStoreState) => {
  let todos = [...state.todos];
  switch (state.filter) {
    case SHOW_COMPLETED:
      todos = todos.filter(t => t.completed);
      break;
    case SHOW_UNCOMPELTED:
      todos = todos.filter(t => !t.completed);
  }

  return {
    todos: todos,
    currentFilter: state.filter
  };
};

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
  return {
    todosActions: bindActionCreators(TodosActions, dispatch),
    filterActions: bindActionCreators(FilterActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
