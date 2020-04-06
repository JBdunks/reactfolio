import React from "react";
import Nav from "./components/nav/nav";
import Main from "./components/main/main";
import Project from "./components/project/project";
import Footer from "./components/footer/footer";
import { Grid } from "@material-ui/core";

import "./App.css";

function App() {
  return (
    <>
      <Grid container direction="column">
        <Grid item>
          <Nav />
          <br />
        </Grid>
        <Grid item container>
          <Grid item xs={false} sm={2} />
          <Grid item xs={12} sm={8}>
            <Main />
            <br />
          </Grid>
          <Grid item xs={false} sm={2} />
        </Grid>
        <Footer />
      </Grid>
    </>
  );
}

export default App;
