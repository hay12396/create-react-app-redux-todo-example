import React, { Component } from "react";
import styles from "./Counter.module.css";

class Counter extends Component<{}, { now: string }> {
  state = { now: new Date().toLocaleString() };
  intervalId: any;

  render() {
    console.log("render");
    return (
      <div style={{ marginTop: 8 }}>
        Time now is: <span className={styles.time}>{this.state.now}</span>
      </div>
    );
  }

  componentWillMount() {
    console.log("willMount");
    console.log(this.state);
    this.intervalId = setInterval(() => {
      this.setState({ now: new Date().toLocaleString() });
    }, 500);
  }

  componentWillUnmount() {
    console.log("WillUnmount");
    clearInterval(this.intervalId);
  }

  shouldComponentUpdate(nextProps: any, nextState: { now: string }) {
    console.log(`shouldComponentUpdate: ${this.state.now != nextState.now}`);
    return this.state.now != nextState.now;
  }
}

export default Counter;
