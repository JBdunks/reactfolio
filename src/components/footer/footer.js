import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  links: {
    color: "white",
    textDecoration: "none",
  },

  appBar: {
    top: "auto",
    bottom: 0,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar
        position="absolute
      "
        color="primary"
        className={classes.appBar}
      >
        <Toolbar>
          <Typography>
            Made With{" "}
            <a
              className={classes.links}
              href="https://material-ui.com/"
              target="_blank"
            >
              Material-ui
            </a>{" "}
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
