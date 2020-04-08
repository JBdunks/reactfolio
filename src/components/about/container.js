import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import About from "./about";
import About2 from "./about2";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Container() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={false} sm={2}></Grid>
        <Grid container xs={12} sm={8} direction="row" alignItems="flex-start">
          <Grid item xs={12} sm={6}>
            <About />
          </Grid>
          <Grid item xs={12} sm={6}>
            <About2 />
          </Grid>
        </Grid>
        <Grid item xs={false} sm={2}></Grid>
      </Grid>
    </div>
  );
}
