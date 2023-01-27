import React, { useEffect, useState } from "react"
import Project from "../Project"
import projectData from "../projectData"

export default function Portfolio() {
  const [projects, setProjects] = useState([])

  const [showProject1, setShowProject1] = useState(false)
  const [showProject2, setShowProject2] = useState(false)

  useEffect(() => {
    const html_collection = document.getElementsByClassName("project-card")
    setProjects([...html_collection])
  }, [])

  // const toggleOpen = (e) => {
  //   console.log(e);
  //   projects.classList.toggle("open");
  // };

  // const toggleActive = (e) => {
  //   // console.log(this);
  //   if (e.propertyName.includes("flex")) {
  //     projects.classList.toggle("open-active");
  //   }
  // };

  // useEffect(() => {
  //   if (projects.length >= 1) {
  //     console.log(projects);

  //     projects.forEach((project) =>
  //       project.addEventListener("click", toggleOpen)
  //     );

  //     projects.forEach((project) =>
  //       project.addEventListener("transitionend", toggleActive)
  //     );
  //   }
  // }, [projects]);

  const handleClick = (e) => {
    console.log(e.target.section)
  }

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
