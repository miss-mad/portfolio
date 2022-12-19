import React from "react";
import Project from "../Project";
import projectData from "../projectData";

export default function Portfolio() {
  return (
    <section className="container projects" id="projects">
      <h2>Portfolio Projects</h2>
      {projectData.map((project) => {
        return (
          <Project
            key={project.id}
            name={project.name}
            linkDeployedApp={project.linkDeployedApp}
            linkGithubRepo={project.linkGithubRepo}
          />
        );
      })}
    </section>
  );
}
