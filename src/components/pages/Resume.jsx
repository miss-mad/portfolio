import React from "react";
import resume from "../assets/Resume.pdf";

export default function Resume() {
  return (
    <section className="container">
      <h3>Resume</h3>
      <a href={resume} target="_blank" rel="noopener noreferrer" download>
        Downloadable resume here
      </a>

      <p>List of Proficiencies</p>
      <ul>
        <li>Git</li>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript</li>
        <li>SQL</li>
        <li>NoSQL</li>
        <li>GraphQL</li>
        <li>CSS Frameworks</li>
        <li>MySQL</li>
        <li>Apollo</li>
        <li>jQuery</li>
        <li>Sequelize</li>
        <li>MongoDB and Mongoose</li>
        <li>React</li>
        <li>Mobile-First Design</li>
        <li>APIs - client, third party and server-side</li>
        <li>Agile Methodology</li>
        <li>Github and Heroku Deployment</li>
      </ul>
    </section>
  );
}
