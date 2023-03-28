// import Card from "../Card"
// import { Col, Row } from "antd"
import Project from "../Project"
import React, { useState } from "react"
import projectData from "../projectData"
// import { useMediaQuery } from "react-responsive"
// import { CSSTransition } from "react-transition-group"

export default function Portfolio() {
  // const [showFront, setShowFront] = useState(true)

  return (
    <div className="container-no-flex">
      <div className="container">
        {projectData.map((project) => {
          return (
            <Project
              key={project.id}
              name={project.name}
              role={project.role}
              type={project.type}
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
