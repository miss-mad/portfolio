import React, { useEffect, useState } from "react"
import Project from "../Project"
import projectData from "../projectData"

export default function Portfolio() {
  // const [projects, setProjects] = useState([])

  // const [showProject1, setShowProject1] = useState(false)
  // const [showProject2, setShowProject2] = useState(false)

  // useEffect(() => {
  //   const html_collection = document.getElementsByClassName("project-card")
  //   setProjects([...html_collection])
  // }, [])

  // const handleClick = (e) => {
  //   console.log(e.target.section)
  // }

  return (
    <section className="container-no-flex">
      <div className="container-no-flex">
        {projectData.map((project, index) => {
          return (
            <Project
              className={`project${index}`}
              key={project.id}
              name={project.name}
              linkGithubRepo={project.linkGithubRepo}
              linkDeployedApp={project.linkDeployedApp}
              backgroundImage={project.backgroundImage}
            />
          )
        })}
      </div>
    </section>
  )
}
