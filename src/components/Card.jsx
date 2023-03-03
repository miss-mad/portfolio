import React from "react"
import Project from "./Project"
import projectData from "./projectData"

export default function Card(project) {
  return (
    <div className="card">
      <p>this is a card</p>
      <div className="card-back">Front</div>
      <div className="card-front">
        <Project
          key={project.id}
          name={project.name}
          linkGithubRepo={project.linkGithubRepo}
          linkDeployedApp={project.linkDeployedApp}
          linkAppDemo={project.linkAppDemo}
          backgroundImage={project.backgroundImage}
        />
      </div>
    </div>
  )
}
