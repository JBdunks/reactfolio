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
    height: 508,
  },
  media: {
    height: "340px",
    paddingTop: "56.25%", // 16:9
  },

  avatar: {
    backgroundImage: "linear-gradient(to top, #209cff 0%, #68e0cf 100%)",
  },

  bottom: {
    justifyContent: "space-around",
    background: "#3F51B5",
  },
  links: {
    color: "white",
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar className={classes.avatar}>JB</Avatar>}
        title="Jon Butler"
        subheader="Junior Software Developer"
      />
      <CardMedia
        className={classes.media}
        image={
          "https://avatars3.githubusercontent.com/u/48998870?s=460&u=240368a16bdb4e18dff75824ff5d6128180fd8c6&v=4"
        }
      />
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
        ></Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.bottom}>
        <IconButton className={classes.links}>
          <a href="tel:856-577-5648">
            <PhoneIphoneIcon className={classes.links} />
          </a>
        </IconButton>
        <IconButton className={classes.links}>
          <a href="mailto:jwb80jobs@gmail.com">
            <MailOutlineIcon className={classes.links} />
          </a>
        </IconButton>
      </CardActions>
    </Card>
  );
}
