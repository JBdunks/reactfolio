import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  links: {
    color: "white",
    textDecoration: "none",
  },

  appBar: {
    top: "auto",
    bottom: 0,
    position: "static",
  },
  tool: {
    justifyContent: "center",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar color="primary" className={classes.appBar}>
        <Toolbar className={classes.tool}>
          <Typography>
            Made With{" "}
            <a
              className={classes.links}
              href="https://material-ui.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Material-ui
            </a>{" "}
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
