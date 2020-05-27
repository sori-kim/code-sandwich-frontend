import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./pages/Menu/Menu";


class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/menu" component={Menu} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
