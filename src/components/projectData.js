// can refactor to store in a database once we learn it later on

const images = [
  { key: 0, source: "./assets/project_screenshots/resumade_screenshot1.png" },
  { key: 1, source: "./assets/project_screenshots/whos_app_screenshot1.png" },
  {
    key: 2,
    source: "./assets/project_screenshots/mthsy_music_final_screenshot1.JPG",
  },
  {
    key: 3,
    source: "./assets/project_screenshots/mthsy_music_final_screenshot1.JPG",
  },
  {
    key: 4,
    source: "./assets/project_screenshots/mthsy_music_final_screenshot1.JPG",
  },
  {
    key: 5,
    source: "./assets/project_screenshots/mthsy_music_final_screenshot1.JPG",
  },
]

const projectData = [
  {
    id: 0,
    name: "ResuMade",
    linkDeployedApp: "https://resumade.herokuapp.com/",
    linkGithubRepo: "https://github.com/PeytonCast/ResuMade",
    backgroundImage: "url(" + require(`${images[0].source}`) + ")",
  },
  {
    id: 1,
    name: "Who's App",
    linkDeployedApp: "https://whooooos-app.herokuapp.com",
    linkGithubRepo: "https://github.com/miss-mad/Whos-App",
    backgroundImage: "url(" + require(`${images[1].source}`) + ")",
  },
  {
    id: 2,
    name: "MTHSY Music!",
    linkDeployedApp: "https://miss-mad.github.io/mthsy-music",
    linkGithubRepo: "https://github.com/miss-mad/mthsy-music",
    backgroundImage: "url(" + require(`${images[2].source}`) + ")",
  },
  {
    id: 3,
    name: "Bird's Eye for Business",
    linkDeployedApp:
      "https://drive.google.com/file/d/1i9vDdDTLYLmDfU2recQM0PSODGzLyGBb/view",
    linkGithubRepo: "https://github.com/miss-mad/birds-eye-for-business",
    backgroundImage: "url(" + require(`${images[3].source}`) + ")",
  },
  {
    id: 4,
    name: "Annotate and Alter",
    linkDeployedApp: "https://annotate-and-alter-text-editor.herokuapp.com",
    linkGithubRepo: "https://github.com/miss-mad/annotate-and-alter",
    backgroundImage: "url(" + require(`${images[4].source}`) + ")",
  },
  {
    id: 5,
    name: "Shoot the Breeze",
    linkDeployedApp:
      "https://drive.google.com/file/d/1UB6qB8Fz7ZMcLKRw_VjJcDwgSqVeXZAs/view",
    linkGithubRepo: "https://github.com/miss-mad/shoot-the-breeze",
    backgroundImage: "url(" + require(`${images[5].source}`) + ")",
  },
  // {
  //   id: 6,
  //   name: "Confer the Code",
  //   linkDeployedApp: "https://confer-the-code.herokuapp.com",
  //   linkGithubRepo: "https://github.com/miss-mad/confer-the-code",
  //   backgroundImage: "url(" + require(`${images[6].source}`) + ")",
  // },
]

export default projectData

// readme dynamically (node), roster ready (OOP), bird's eye for business (mysql), regex tutorial
// shopaholic (ORM), confer the code (?) (MVC), shoot the breeze (nosql)
