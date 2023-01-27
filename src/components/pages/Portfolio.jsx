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
    <section className="container-no-flex projects" id="projects">
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

      {/* <Project
        className={`project${0} ${showProject1 && "open"}`}
        handleClick={handleClick}
        shouldAnimate={showProject1}
        key={projectData[0].id}
        name={projectData[0].name}
        linkGithubRepo={projectData[0].linkGithubRepo}
        linkDeployedApp={projectData[0].linkDeployedApp}
        backgroundImage={projectData[0].backgroundImage}
      />
      <Project
        className={`project${1} ${showProject2 && "open"}`}
        handleClick={handleClick}
        shouldAnimate={showProject2}
        key={projectData[1].id}
        name={projectData[1].name}
        linkGithubRepo={projectData[1].linkGithubRepo}
        linkDeployedApp={projectData[1].linkDeployedApp}
        backgroundImage={projectData[1].backgroundImage}
      /> */}
    </section>
  )
}
