import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import PublicIcon from "@material-ui/icons/Public";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  root: {
    border: "1px solid black",
  },
  media: {
    height: 180,
  },
  bottom: {
    justifyContent: "space-around",
    background: "#3F51B5",
  },
  links: {
    color: "white",
  },
  content: {
    background: "#3CB3EE",
  },
  cardName: {
    color: "white",
    textShadow:
      "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,1px 1px 0 black",
  },
});

const Project = ({ id, name, image, description, git, deployed }) => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root} key={id}>
        <CardActionArea>
          <CardMedia className={classes.media} image={image} title={name} />
          <CardContent className={classes.content}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.cardName}
            >
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.bottom}>
          <IconButton size="medium">
            <a href={git} target="_blank" rel="noopener noreferrer">
              <GitHubIcon fontSize="large" className={classes.links} />
            </a>
          </IconButton>
          <IconButton size="medium">
            <a href={deployed} target="_blank" rel="noopener noreferrer">
              <PublicIcon fontSize="large" className={classes.links} />
            </a>
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default Project;
