// can refactor to store in a database once we learn it later on

const images = [
  {
    key: 0,
    source: "./assets/project_screenshots/resumade_screenshot2.jpg",
  },
  {
    key: 1,
    source: "./assets/project_screenshots/whos_app_screenshot2.jpg",
  },
  {
    key: 2,
    source: "./assets/project_screenshots/mthsy_music_unsplash.jpg",
  },
  {
    key: 3,
    source: "./assets/project_screenshots/birds_eye_for_business_unsplash.jpg",
  },
  {
    key: 4,
    source: "./assets/project_screenshots/shoot_the_breeze_unsplash.jpg",
  },
  {
    key: 5,
    source: "./assets/project_screenshots/shopaholic_unsplash.jpg",
  },
  // {
  //   key: 6,
  //   source: "./assets/project_screenshots/mthsy_music_final_screenshot1.png",
  // },
  // {
  //   key: 7,
  //   source: "./assets/project_screenshots/mthsy_music_final_screenshot1.png",
  // },
  // {
  //   key: 8,
  //   source: "./assets/project_screenshots/mthsy_music_final_screenshot1.png",
  // },
  // {
  //   key: 9,
  //   source: "./assets/project_screenshots/mthsy_music_final_screenshot1.png",
  // },
]

const projectData = [
  {
    id: 0,
    name: "ResuMade", // group project 3
    linkDeployedApp: "https://resumade.herokuapp.com/",
    linkGithubRepo: "https://github.com/miss-mad/ResuMade/",
    linkAppDemo:
      "https://drive.google.com/file/d/1wQ-5BYagqVVCEuI6iPzPxr27yX8iOoFp/view",
    backgroundImage: "url(" + require(`${images[0].source}`) + ")",
    summary: "Easily create professional resumes with ResuMade",
    role: "My Role: React Form + Ant Design",
    technologies:
      "Tools: React, Stripe, JavaScript, Node, Express, Apollo, GraphQL, MongoDB, jsonwebtoken",
    type: "A collaborative full stack app",
  },
  {
    id: 1,
    name: "Who's App", // group project 2
    linkDeployedApp: "https://whooos-app.herokuapp.com/",
    linkGithubRepo: "https://github.com/miss-mad/whos-app/",
    linkAppDemo:
      "https://drive.google.com/file/d/18u4rHra0qDXu9xuqlpxFfnfvz2ouoRNG/view",
    backgroundImage: "url(" + require(`${images[1].source}`) + ")",
    summary:
      "The newest anonymous messaging app is here! Who is it you’ll be talking to?",
    role: "My Role: Project Manager + Socket.io",
    technologies:
      "Tools: Socket.io, JavaScript, Node, Express, Sequelize, MySQL, Handlebars",
    type: "A collaborative full stack app",
  },
  {
    id: 2,
    name: "MTHSY Music!", // group project 1
    linkDeployedApp: "https://miss-mad.github.io/mthsy-music/",
    linkGithubRepo: "https://github.com/miss-mad/mthsy-music/",
    linkAppDemo:
      "https://drive.google.com/file/d/1jIYPVbLibSlh-gXP5ZTiFx2miq_M2JxD/view",
    backgroundImage: "url(" + require(`${images[2].source}`) + ")",
    summary: "A one-stop shop for an artist's music and upcoming events",
    role: "My Role: lastFM API + Local Storage",
    technologies:
      "Tools: JavaScript, HTML, Materialize CSS, APIs: lastFM, YouTube, TicketMaster",
    type: "A collaborative full stack app",
  },
  {
    id: 3,
    name: "Bird's Eye for Business", //mysql
    linkDeployedApp:
      "https://drive.google.com/file/d/1i9vDdDTLYLmDfU2recQM0PSODGzLyGBb/view",
    linkGithubRepo: "https://github.com/miss-mad/birds-eye-for-business",
    backgroundImage: "url(" + require(`${images[3].source}`) + ")",
    summary:
      "Easily manage your workplace team with this handy bird's eye built for businesses",
    role: "",
    technologies: "Tools: JavaScript, Inquirer, MySQL2, Node",
    type: "A back-end app",
  },
  {
    id: 4,
    name: "Shoot the Breeze", // nosql
    linkDeployedApp:
      "https://drive.google.com/file/d/1UB6qB8Fz7ZMcLKRw_VjJcDwgSqVeXZAs/view",
    linkGithubRepo: "https://github.com/miss-mad/shoot-the-breeze",
    backgroundImage: "url(" + require(`${images[4].source}`) + ")",
    summary: "A Social Network API",
    role: "",
    technologies:
      "Tools: JavaScript, Node, Express, MongoDB, NoSQL, Mongoose, Postman",
    type: "A back-end app",
  },
  {
    id: 5,
    name: "Shopaholic", // orm
    linkDeployedApp:
      "https://drive.google.com/file/d/1AHNXq9GSggx14o8fe0lQl0DnKLrFwNSg/view",
    linkGithubRepo: "https://github.com/miss-mad/shopaholic",
    backgroundImage: "url(" + require(`${images[5].source}`) + ")",
    summary: "A quick and easy inventory manager",
    role: "",
    technologies:
      "Tools: JavaScript, Express, Sequelize, Postman, MySQL Workbench",
    type: "A back-end app",
  },
  // {
  //   id: 6,
  //   name: "Confer the Code", // mvc
  //   linkDeployedApp: "https://confer-the-code.herokuapp.com",
  //   linkGithubRepo: "https://github.com/miss-mad/confer-the-code",
  //   backgroundImage: "url(" + require(`${images[6].source}`) + ")",
  // },
  // {
  //   id: 7,
  //   name: "Roster Ready", // oop
  //   linkDeployedApp: "drive.google.com/file/d/1vVZVgqRsb7YPbUTmKH8eeeAsWuMIa7Cv/view",
  //   linkGithubRepo: "https://github.com/miss-mad/roster-ready",
  //   backgroundImage: "url(" + require(`${images[7].source}`) + ")",
  // },
  // {
  //   id: 8,
  //   name: "Readme Dynamically",
  //   linkDeployedApp: "drive.google.com/file/d/1vVZVgqRsb7YPbUTmKH8eeeAsWuMIa7Cv/view",
  //   linkGithubRepo: "https://github.com/miss-mad/roster-ready",
  //   backgroundImage: "url(" + require(`${images[8].source}`) + ")",
  // },
  // {
  //   id: 9,
  //   name: "Regex Tutorial",
  //   linkGithubRepo: "https://gist.github.com/miss-mad/7785f9a453248395391b55cc3642b7b5",
  //   backgroundImage: "url(" + require(`${images[9].source}`) + ")",
  // },
]

export default projectData
