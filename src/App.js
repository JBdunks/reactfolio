import React from "react";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";
import { Grid } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "./components/about/container";
import Body from "./components/body/body";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Grid container direction="column">
          <Grid item>
            <Nav />
            <br />
          </Grid>
          <Grid item container>
            <Switch>
              <Route path="/reactfolio/about" exact component={Container} />
              <Route path="/reactfolio/" exact component={Body} />
            </Switch>
          </Grid>

          <br />
          <Footer />
        </Grid>
      </Router>
    </>
  );
}

export default App;
