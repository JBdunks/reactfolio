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

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: "340px",
    paddingTop: "56.25%", // 16:9
  },

  avatar: {
    backgroundImage: "linear-gradient(to top, #209cff 0%, #68e0cf 100%)",
  },
  box: {
    marginTop: "10%",
    marginBottom: "10%",
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
    <div className={classes.box}>
      <Card item xs={12} sm={8} md={8}>
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
            <Typography variant="body2" color="textSecondary" component="p">
              Jon Butler
            </Typography>
          </CardContent>
          <CardActions disableSpacing className={classes.bottom}>
            <IconButton className={classes.links}>
              Phone <PhoneIphoneIcon />
            </IconButton>
            <IconButton className={classes.links}>
              Email <MailOutlineIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Card>
      <br />
    </div>
  );
}
