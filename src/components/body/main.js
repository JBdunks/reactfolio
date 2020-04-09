import React from "react";
import { Grid } from "@material-ui/core";
import projectList from "../../projects.js";
import Project from "../project/project";

const Main = () => {
  const projectCard = (project) => {
    return (
      <Grid item xs={12} sm={6} md={4}>
        <Project {...project} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      {projectList.map((project) => projectCard(project))}
    </Grid>
  );
};

export default Main;
