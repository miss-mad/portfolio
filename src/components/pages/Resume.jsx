import React from "react";
// import { Link } from "react-router-dom";
import resume from "../assets/Resume.pdf"
// need link to downloadable resume
// need list of proficiencies

export default function Resume() {
  return (
    <section className="container">
      This is Resume
      <h3>Resume</h3>
      {/* <p>Downloadable resume here</p> */}
      <a
        href={resume}
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        Downloadable resume here
      </a>
      {/* <Link
        className=""
        to="https://drive.google.com/file/d/1dA1UU2h6Gl-rsotuMOvQ9f1aiEpLsuFv/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        Downloadable resume here
      </Link> */}
      {/* <a
        href="https://drive.google.com/file/d/1dA1UU2h6Gl-rsotuMOvQ9f1aiEpLsuFv/view?usp=sharing"
        download="newfilename"
      >
        Downloadable resume here
      </a> */}
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
