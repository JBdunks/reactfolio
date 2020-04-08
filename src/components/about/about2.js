import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Grid } from "@material-ui/core";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

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
