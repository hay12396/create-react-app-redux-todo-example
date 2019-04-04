import React, { Dispatch } from "react";
import { IRootStoreState } from "../../reducers/root.reducer";
import {
  SHOW_COMPLETED,
  SHOW_UNCOMPELTED,
  SHOW_ALL
} from "../../actions/filter/action-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as TodosActions from "../../actions/todo/todo-actions";
import * as FilterActions from "../../actions/filter/filter-actions";
import { TodoItem } from "./todo/class/todo";
import TodoForm from "./todo-form/TodoForm";
import TodoList from "./todo-list/TodoList";
import TodosFilter from "./todos-filter/TodosFilter";

export interface ITodosPageProps {
  todos?: TodoItem[];
  currentFilter?: string;
  todosActions?: typeof TodosActions;
  filterActions?: typeof FilterActions;
}

class TodosPage extends React.Component<ITodosPageProps, {}> {
  constructor(props: ITodosPageProps) {
    super(props);

    this.loadFromServer = this.loadFromServer.bind(this);
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

  loadFromServer() {
    this.props.todosActions!.loadTodosFromServer();
  }

  render() {
    return (
      <div>
        <button onClick={this.loadFromServer}>Load from server</button>
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

const mapDispatchToProps = (dispatch: any) => {
  return {
    todosActions: bindActionCreators(TodosActions, dispatch),
    filterActions: bindActionCreators(FilterActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodosPage);
