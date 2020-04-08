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
    position: "static",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <AppBar color="primary" className={classes.appBar}>
        <Toolbar align="center" s>
          <Typography align="center">
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

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Container from "@material-ui/core/Container";
// import Typography from "@material-ui/core/Typography";
// import Link from "@material-ui/core/Link";

// const useStyles = makeStyles((theme) => ({
//   footer: {
//     backgroundColor: "#3F51B5",
//     // marginTop: theme.spacing(8),
//     padding: theme.spacing(6, 0),
//   },
//   links: {
//     color: "white",
//     textDecoration: "none",
//   },
// }));

// export default function Footer() {
//   const classes = useStyles();

//   return (
//     <footer className={classes.footer}>
//       <Container maxWidth="lg">
//         <Typography variant="h6" align="center" gutterBottom></Typography>

//         <Typography className={classes.links} variant="body2" align="center">
//           Made with{" "}
//           <Link
//             className={classes.links}
//             href="https://material-ui.com/"
//             target="_blank"
//           >
//             Material-ui
//           </Link>
//         </Typography>
//       </Container>
//     </footer>
//   );
// }
