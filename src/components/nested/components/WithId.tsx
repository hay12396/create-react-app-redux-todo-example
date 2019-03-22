import React, { PureComponent } from "react";
import { RouteComponentProps } from "react-router";

export interface WithIdProps {
  id: string;
}

class WithId extends PureComponent<RouteComponentProps<WithIdProps>, {}> {
  render() {
    return <div>Nested With Id: {this.props.match.params.id}</div>;
  }
}

export default WithId;
