import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  links: {
    color: "white",
    textDecoration: "none",
  },
}));

export default function Nav() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.links} to="/reactfolio/about">
              Jon Butler /{" "}
            </Link>
            <Link className={classes.links} to="/reactfolio">
              Projects
            </Link>
          </Typography>

          <IconButton>
            <a
              href="https://drive.google.com/file/d/1g-UUzBZGVNK1oA3uhIzIKrrrLU2545z-/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AssignmentIcon fontSize="large" className={classes.links} />
            </a>
          </IconButton>
          <IconButton>
            <a
              href="https://github.com/JBdunks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon fontSize="large" className={classes.links} />
            </a>
          </IconButton>
          <IconButton>
            <a
              href="https://www.linkedin.com/in/jwb2472"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon fontSize="large" className={classes.links} />
            </a>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
