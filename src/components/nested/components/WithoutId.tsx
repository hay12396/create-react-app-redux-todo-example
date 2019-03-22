import React, { PureComponent } from "react";
import { RouteComponentProps } from "react-router";

export interface WithoutIdProps {
  id: string;
}

class WithoutId extends PureComponent<RouteComponentProps<WithoutIdProps>, {}> {
  render() {
    return <div>Nested Without Id</div>;
  }
}

export default WithoutId;
