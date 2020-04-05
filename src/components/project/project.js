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
import data from "../../projects.json";
console.log(data);

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Project = () => {
  const classes = useStyles();
  return (
    <>
      {data.projects.map((project) => (
        <Card className={classes.root} key={project.id}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {project.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {project.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <a href={project.git} target="_blank">
                <GitHubIcon color="primary" />
                GitHub
              </a>
            </Button>
            <Button size="small" color="primary">
              <a href={project.deployed} target="_blank">
                <PublicIcon color="primary" />
                Deployed
              </a>
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default Project;

{
  /* <div key={project.id}>
<p>{project.name}</p>
<p>{project.image}</p>
<p>{project.git}</p>
<p>{project.deployed}</p>
<p>---------------------</p>
</div> */
}
