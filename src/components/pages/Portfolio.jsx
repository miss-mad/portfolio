import React, { useEffect, useState } from "react";
import Project from "../Project";
// import projectData from "../projectData";

const projectData = [
  {
    id: 0,
    name: "ResuMade",
    linkDeployedApp: "https://resumade.herokuapp.com/",
    linkGithubRepo: "https://github.com/PeytonCast/ResuMade",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1446038236174-69712e24d137?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG9jZWFufGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=800&q=60')",
  },
  {
    id: 1,
    name: "Who's App",
    linkDeployedApp: "https://whooooos-app.herokuapp.com",
    linkGithubRepo: "https://github.com/miss-mad/Whos-App",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1528543606781-2f6e6857f318?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWR2ZW50dXJlfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=800&q=60')",
  },
];
export default function Portfolio() {
  const [projects, setProjects] = useState([]);

  const [showProject1, setShowProject1] = useState(false);
  const [showProject2, setShowProject2] = useState(false);

  useEffect(() => {
    const html_collection = document.getElementsByClassName("project-card");
    setProjects([...html_collection]);
  }, []);

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
    console.log(e.target.section);
  };

  return (
    <section className="container projects" id="projects">
      {/* {projectData.map((project, index) => {
        return (
          <Project
            className={`project${index}`}
            shouldAnimate={}
            key={project.id}
            name={project.name}
            linkGithubRepo={project.linkGithubRepo}
            linkDeployedApp={project.linkDeployedApp}
            backgroundImage={project.backgroundImage}
          />
        );
      })} */}

      <Project
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
      />
    </section>
  );
}
