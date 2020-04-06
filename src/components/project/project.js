import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import PublicIcon from "@material-ui/icons/Public";
import data from "../../projects.js";
import IconButton from "@material-ui/core/IconButton";
import { Grid } from "@material-ui/core";
console.log(data);

const useStyles = makeStyles({
  media: {
    height: 180,
  },
  bottom: {
    justifyContent: "space-around",
    background: "lightgray",
  },
});

const Project = (props) => {
  const { id, name, image, description, git, deployed } = props;
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root} key={id}>
        <CardActionArea>
          <CardMedia className={classes.media} image={image} title={name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.bottom}>
          <IconButton size="small" color="primary">
            <a href={git} target="_blank">
              <GitHubIcon color="primary" />
            </a>
          </IconButton>
          <IconButton size="small" color="primary">
            <a href={deployed} target="_blank">
              <PublicIcon color="primary" />
            </a>
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default Project;
