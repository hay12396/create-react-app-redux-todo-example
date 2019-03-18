import React from "react";
import styles from "./Header.module.css";

class Header extends React.Component<{ name: string }, {}> {
  render() {
    return <div className={styles.red}>Hello {this.props.name}</div>;
  }
}

export default Header;
