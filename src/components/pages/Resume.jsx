import React from "react";
import resume from "../assets/Harris_Resume.pdf";
// import { listOfProficiencies as proficiencies } from "../listofProficiencies";

export default function Resume() {
  const listOfProficiencies = [
    { id: 1, name: "Git" },
    { id: 2, name: "HTML5" },
    { id: 3, name: "CSS3" },
    { id: 4, name: "JavaScript" },
    { id: 5, name: "SQL" },
    { id: 6, name: "NoSQL" },
    { id: 7, name: "GraphQL" },
    { id: 8, name: "CSS Frameworks" },
    { id: 9, name: "MySQL" },
    { id: 10, name: "Apollo" },
    { id: 11, name: "jQuery" },
    { id: 12, name: "Sequelize" },
    { id: 13, name: "MongoDB and Mongoose" },
    { id: 14, name: "React" },
    { id: 15, name: "Mobile-First Design" },
    { id: 16, name: "APIs - client, third party and server-side" },
    { id: 17, name: "Agile Methodology" },
    { id: 18, name: "Github and Heroku Deployment" },
  ];

  return (
    <section className="container">
      <h3>Resume</h3>
      <a href={resume} target="_blank" rel="noopener noreferrer" download>
        Downloadable resume here
      </a>

      <p>List of Proficiencies</p>

      {listOfProficiencies.map((proficiency) => {
        return (
          <ul>
            <li>{proficiency.name}</li>
          </ul>
        );
      })}
    </section>
  );
}
