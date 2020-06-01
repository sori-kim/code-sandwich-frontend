import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./pages/Menu/Menu";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import SignUp from "./pages/SignUp/SignUp";
import Menu_Details from "./pages/Menu_Details/Menu_Details";
import Toppings from "./pages/Toppings/Toppings";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Main} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/menu_details" component={Menu_Details} />
          <Route exact path="/toppings" component={Toppings} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
