import React, { PureComponent } from "react";
import {
  NavLink,
  RouteComponentProps,
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import WithoutId from "./components/WithoutId";
import WithId from "./components/WithId";

class Nested extends React.Component<RouteComponentProps<{}>, {}> {
  render() {
    return (
      <div>
        <div>
          <NavLink exact to={`/nested`}>
            Without Id
          </NavLink>
          <NavLink to={`/nested/123456`}>With Id</NavLink>
        </div>

        <Switch>
          <Route exact path={`/nested`} component={WithoutId} />
          <Route exact path={`/nested/:id`} component={WithId} />
          <Route
              path={"/nested/*"}
              render={() => <div>No routes found..</div>}
            />
        </Switch>
      </div>
    );
  }
}

export default Nested;
