import React from "react"
import Project from "../Project"
import projectData from "../projectData"

export default function Portfolio() {
  return (
    <div className="container-no-flex">
      <div className="container">
        {projectData.map((project, index) => {
          return (
            <Project
              key={project.id}
              name={project.name}
              linkGithubRepo={project.linkGithubRepo}
              linkDeployedApp={project.linkDeployedApp}
              backgroundImage={project.backgroundImage}
            />
          )
        })}
      </div>
    </div>
  )
}
