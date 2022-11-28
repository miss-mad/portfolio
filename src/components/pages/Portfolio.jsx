import React from "react";
import Project from "../Project";
import projectData from "../projectData";

// need 6 projects, their titles, links to github and deployed apps

export default function Portfolio({ projects }) {
  return (
    <section className="container projects" id="projects">
      This is Portfolio
      <h2>Portfolio Projects</h2>
      {/* <div className="row-1">
        <div className="card">
          <div className="project-title-1">
            <h4>MTHSY Music!</h4>
            <a
              href="https://miss-mad.github.io/mthsy-music"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployed Application Link
            </a>
            <a
              href="https://github.com/miss-mad/mthsy-music"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Repo Link
            </a>
          </div>
        </div>
      </div>
      <div className="row-2">
        <div className="card">
          <div className="project-title-2">
            <h4>Who's App</h4>

            <a
              href="https://whooooos-app.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployed Application Link
            </a>
            <a
              href="https://github.com/miss-mad/Whos-App"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Repo Link
            </a>
          </div>
        </div>
      </div>
      <div className="row-3">
        <div className="card">
          <div className="project-title-3">
            <h4>Bird's Eye for Business</h4>
            <a
              href="https://drive.google.com/file/d/1i9vDdDTLYLmDfU2recQM0PSODGzLyGBb/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Video Walkthrough Link
            </a>
            <a
              href="https://github.com/miss-mad/birds-eye-for-business"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Repo Link
            </a>
          </div>
        </div>

        <div className="card">
          <div className="project-title-4">
            <h4>Annotate and Alter</h4>
            <a
              href="https://annotate-and-alter-text-editor.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployed Application Link
            </a>
            <a
              href="https://github.com/miss-mad/annotate-and-alter"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Repo Link
            </a>
          </div>
        </div>
        <div className="card">
          <div className="project-title-5">
            <h4>Shoot the Breeze</h4>
            <a
              href="https://drive.google.com/file/d/1UB6qB8Fz7ZMcLKRw_VjJcDwgSqVeXZAs/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              Video Walkthrough Link
            </a>
            <a
              href="https://github.com/miss-mad/shoot-the-breeze"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Repo Link
            </a>
          </div>
        </div>
        <div className="card">
          <div className="project-title-6">
            <h4>Confer the Code</h4>
            <a
              href="https://confer-the-code.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Deployed Application Link
            </a>
            <a
              href="https://github.com/miss-mad/confer-the-code"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Repo Link
            </a>
          </div>
        </div>
      </div> */}
      {projectData.map((project) => {
        return (
          <Project
            name={project.name}
            linkDeployedApp={project.linkDeployedApp}
            linkGithubRepo={project.linkGithubRepo}
          />
        );
      })}
    </section>
  );
}
