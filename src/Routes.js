import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main/Main";
import Menu from "./pages/Menu/Menu";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Menu_Details from "./pages/Menu_Details/Menu_Details";
import Toppings from "./pages/Toppings/Toppings";
import Custom from "./pages/Custom/Custom";
import Bread from "./pages/Custom/Bread/Bread";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/menu" component={Menu} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/menu_details:key" component={Menu_Details} />
          <Route exact path="/custom" component={Custom} />
          <Route exact path="/bread" component={Bread} />
          <Route exact path="/toppings" component={Toppings} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
