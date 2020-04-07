import React from "react";
import Nav from "./components/nav/nav";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import { Grid } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/about/about";

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
            <Grid item xs={false} sm={2} />
            <Grid item xs={12} sm={8}>
              <Switch>
                <Route path="/projects" exact component={Main} />
                <Route path="/" exact component={About} />
              </Switch>
            </Grid>
            <Grid item xs={false} sm={2} />
          </Grid>
          <br />
          <Footer />
        </Grid>
      </Router>
    </>
  );
}

export default App;

{
  /* <Switch>
                <Route path="/projects" exact component={Main} />
                <Route path="/" exact component={About} />
              </Switch> */
}
