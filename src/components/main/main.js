import React from "react";

import { Grid } from "@material-ui/core";
import projectList from "../../projects.js";
import Project from "../project/project";

const Main = () => {
  const projectCard = (projectObject) => {
    return (
      <Grid item xs={12} sm={6} md={4}>
        <Project {...projectObject} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={2}>
      {projectList.map((projectObject) => projectCard(projectObject))}
    </Grid>
  );
};

export default Main;
