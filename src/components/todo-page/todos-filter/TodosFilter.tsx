import React from "react";
import styles from "./TodosFilter.module.css";
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_UNCOMPELTED
} from "../../../actions/filter/action-types";

export interface ITodosFilterProps {
  currentFilter: string;
  onFilterClicked: (filter: string) => any;
}

export default class TodosFilter extends React.PureComponent<ITodosFilterProps,{}> {
  render() {
    return (
      <div>
        <span
          onClick={() => this.props.onFilterClicked(SHOW_ALL)}
          className={this.props.currentFilter == SHOW_ALL ? styles.active : ""}
        >
          SHOW ALL
        </span>
        <span
          onClick={() => this.props.onFilterClicked(SHOW_COMPLETED)}
          className={this.props.currentFilter == SHOW_COMPLETED ? styles.active : ""}
        >
          SHOW COMPELTED
        </span>
        <span
          onClick={() => this.props.onFilterClicked(SHOW_UNCOMPELTED)}
          className={
            this.props.currentFilter == SHOW_UNCOMPELTED ? styles.active : ""
          }
        >
          SHOW UNCOMPELTED
        </span>
      </div>
    );
  }
}
