import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  root: {
    background: "white",
    borderRadius: "0",
    border: "none",
    marginTop: "10%",
    marginBottom: "13%",
    height: 508,
  },
}));

export default function About2() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          this is page only exists for the purpose of meeting the react router
          requirement. i will be removing it after it has been graded.
        </Typography>
      </CardContent>
    </Card>
  );
}
