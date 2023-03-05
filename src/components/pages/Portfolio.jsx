import React from "react"
import Project from "../Project"
import projectData from "../projectData"

export default function Portfolio() {
  // const cards = [
  //   {
  //     id: "1",
  //     variant: "hover",
  //     front: "Hover",
  //     back: "Back1",
  //   },
  //   {
  //     id: "2",
  //     variant: "click",
  //     front: "Click",
  //     back: "Back",
  //   },
  //   {
  //     id: "3",
  //     variant: "focus",
  //     front: "Focus",
  //     back: "Back",
  //   },
  // ]

  return (
    <div className="container-no-flex">
      <div className="container">
        {projectData.map((project, index) => {
          return (
            <Project
              key={project.id}
              name={project.name}
              role={project.role}
              summary={project.summary}
              linkAppDemo={project.linkAppDemo}
              technologies={project.technologies}
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
